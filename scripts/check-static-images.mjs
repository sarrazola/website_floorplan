// Deployment guard: missing images must never create unbounded network retries.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = path.resolve(process.argv[2] || '.');
const scripts = new Set();
let pages = 0;
const problems = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.next', '.vercel', 'scripts'].includes(item.name)) continue;
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (item.name.endsWith('.html')) inspect(file);
  }
}
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*(["'])(.*?)\2/gs)].map(m => [m[1], m[3]]));
}
function inspect(file) {
  const html = fs.readFileSync(file, 'utf8');
  pages++;
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const attributes = attrs(match[0]);
    for (const key of ['src', 'data-fallback']) {
      const value = attributes[key];
      if (!value || /^(?:[\w+.-]+:|\/\/)/.test(value)) continue;
      const pathname = decodeURIComponent(value.split(/[?#]/)[0]);
      const target = pathname.startsWith('/') ? path.join(root, pathname) : path.resolve(path.dirname(file), pathname);
      if (!fs.existsSync(target)) problems.push(`${path.relative(root, file)}: missing ${key} ${value}`);
    }
  }
  for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
    if (match[1].includes('data-fallback')) scripts.add(match[1]);
  }
}
function verifyRetries(script, fallback) {
  const baseURI = 'https://example.test/nested/page/';
  let current = new URL('/missing.jpg', baseURI).href;
  let alternative = fallback;
  let writes = 0;
  let pendingErrors = 1;
  const listeners = [];
  const img = {
    get src() { return current; },
    set src(value) { current = new URL(value, baseURI).href; writes++; pendingErrors++; },
    getAttribute(name) { return name === 'data-fallback' ? alternative : null; },
    removeAttribute(name) { if (name === 'data-fallback') alternative = null; },
    addEventListener(type, handler, options) { if (type === 'error') listeners.push({ handler, once: options?.once }); },
  };
  vm.runInNewContext(script, { document: { baseURI, querySelectorAll: () => [img] }, URL }, { timeout: 1000 });
  let events = 0;
  while (pendingErrors && events++ < 20) {
    pendingErrors--;
    for (const listener of [...listeners]) {
      if (listener.once) listeners.splice(listeners.indexOf(listener), 1);
      listener.handler.call(img);
    }
  }
  assert.equal(pendingErrors, 0, 'Image errors create an endless retry loop');
  assert.ok(writes <= 1, `Expected at most one fallback request; saw ${writes}`);
  if (new URL(fallback, baseURI).href === new URL('/missing.jpg', baseURI).href) {
    assert.equal(writes, 0, 'An image must not retry the same failed URL');
  }
}
walk(root);
for (const script of scripts) {
  for (const fallback of ['/missing.jpg', '/also-missing.jpg', '../../missing.jpg', 'https://example.test/missing.jpg']) {
    verifyRetries(script, fallback);
  }
}
if (problems.length) throw new Error(problems.join('\n'));
console.log(`Checked ${pages} HTML pages and ${scripts.size} distinct fallback handlers: no missing local images or unbounded retries.`);
