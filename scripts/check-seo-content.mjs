import fs from 'node:fs';
import path from 'node:path';
const root=fs.existsSync('public/guides')?'public':'.';
const pages=JSON.parse(fs.readFileSync('seo-content/manifest.json','utf8'));
const text=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
let checks=0;
for(const p of pages){
 const file=path.join(root,p.path),html=fs.readFileSync(file,'utf8');
 function expect(ok,message){if(!ok)throw Error(`${p.path}: ${message}`);checks++;}
 expect(new RegExp(`<html[^>]*lang=["']${p.lang}["']`).test(html),'wrong document language');
 const canonicalTag=(html.match(/<link\b[^>]*>/g)||[]).find(x=>/rel=["']canonical["']/.test(x));
 expect(canonicalTag?.includes(`href="${p.canonical}"`),'canonical changed or missing');
 expect((html.match(/<h1\b/g)||[]).length===1,'expected one h1');
 expect(!/<meta[^>]+content=["'][^"']*noindex/.test(html),'unexpected noindex');
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'';
 if(p.lang!=='en'){
  const relative=p.path.replace(new RegExp(`^${p.lang}/`),'');
  const englishPath=path.join(root,relative);
  if(fs.existsSync(englishPath)){
   const en=fs.readFileSync(englishPath,'utf8').match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'';
   expect(text(main)!==text(en),'locale copied the English body');
   for(const para of en.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)){
    const phrase=text(para[1]);
    if(phrase.length>95)expect(!text(main).includes(phrase),'untranslated English paragraph');
   }
  }
 }
 if(p.reviewedGuide){
  expect(html.includes('data-editorial-version="2026-09-17"'),'reviewed copy overwritten');
  expect(!main.includes('Start with a clear input, choose the outcome'),'generic guide copy returned');
  expect((main.match(/<li\b/g)||[]).length>=7,'missing steps or related guides');
  expect(/href="https:\/\/apps\.apple\.com\//.test(main),'missing product download link');
 }
 for(const match of main.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){
  const url=match[1];
  if(url.startsWith('//'))continue;
  const target=path.join(root,url);
  expect(fs.existsSync(target)||fs.existsSync(target+'.html')||fs.existsSync(path.join(target,'index.html')),'missing local destination '+url);
 }
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
}
console.log(`SEO content: ${pages.length} reviewed pages, ${checks} checks passed`);
