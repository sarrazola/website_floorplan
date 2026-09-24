import fs from 'node:fs';
import path from 'node:path';
const root = fs.existsSync('public/guides') ? 'public' : '.';
const content = JSON.parse(fs.readFileSync('seo-content/reviewed-guides.json','utf8'));
const e = v => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const de = v => v.replaceAll('&amp;','&').replaceAll('&quot;','"');
let count = 0;
const manifestFile='seo-content/manifest.json';
const manifest=fs.existsSync(manifestFile)?JSON.parse(fs.readFileSync(manifestFile,'utf8')):[];
for(const [lang,{guides,labels:l,home}] of Object.entries(content)) {
 const prefix = lang==='en'?'':`/${lang}`;
 for(const [slug,g] of Object.entries(guides)) {
  const rel=path.join(prefix,'guides',slug,'index.html').replace(/^\//,'');
  const file=path.join(root,rel); if(!fs.existsSync(file))throw Error('Missing guide '+file);
  let html=fs.readFileSync(file,'utf8');
  const url=(html.match(/<link\b[^>]*>/g)||[]).find(tag=>/rel="canonical"/.test(tag))?.match(/href="([^"]+)"/)?.[1];
  const store=html.match(/href="(https:\/\/apps\.apple\.com\/[^" ]+)"/)?.[1];
  if(!url||!store)throw Error('Missing canonical or download '+file);
  const slash=url.endsWith('/')?'/':'';
  const guidePath=slug=>`${prefix}/guides/${slug}${slash}`;
  const article=`<article class="article" data-editorial-version="2026-09-17" data-reviewed-date="2026-09-24"><nav class="crumb"><a href="${prefix}/">${e(l.home)}</a> / <a href="${prefix}/guides/">${e(l.guides)}</a></nav><h1>${e(g.title)}</h1><p class="lead">${e(g.description)}</p><div class="answer"><h2>${e(l.answer)}</h2><p>${e(g.answer)}</p></div><h2>${e(l.steps)}</h2><ol class="article-steps">${g.steps.map(([title,body])=>`<li><h3>${e(title)}</h3><p>${e(body)}</p></li>`).join('')}</ol><h2>${e(g.example_title)}</h2><p>${e(g.example)}</p><h2>${e(l.limits)}</h2><p>${e(g.limits)}</p>${g.image?`<figure style="margin:2rem 0"><img src="${e(g.image)}" alt="${e(g.image_alt)}" loading="lazy" style="display:block;max-width:min(100%,320px);height:auto;border-radius:18px"><figcaption>${e(g.image_caption)}</figcaption></figure>`:''}<section class="inline-cta"><h2>${e(l.cta)}</h2><a class="button" href="${store}">${e(l.download)}</a></section><nav aria-label="${e(l.related)}"><h2>${e(l.related)}</h2><ul>${g.related.map(r=>`<li><a href="${guidePath(r.slug)}">${e(r.title)}</a></li>`).join('')}</ul><a href="${prefix}/guides/">${e(l.all)}</a></nav></article>`;
  html=html.replace(/<article\b[\s\S]*?<\/article>/,article).replace(/<title>.*?<\/title>/,`<title>${e(g.title)}</title>`);
  html=html.replace(/<meta\b[^>]*>/g,tag=>{
   if(/(?:name="description"|property="og:description"|name="twitter:description")/.test(tag))return tag.replace(/content="[^"]*"/,`content="${e(g.description)}"`);
   if(/(?:property="og:title"|name="twitter:title")/.test(tag))return tag.replace(/content="[^"]*"/,`content="${e(g.title)}"`);
   return tag;
  });
  html=html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,(_,raw)=>{
   const schema=JSON.parse(raw);
   if(schema['@type']==='Article')Object.assign(schema,{headline:g.title,description:g.description,dateModified:'2026-09-24',mainEntityOfPage:de(url),inLanguage:lang});
   if(schema['@type']==='BreadcrumbList'){const item=schema.itemListElement.at(-1);item.name=g.title;item.item=de(url);}
   return `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
  });
  fs.writeFileSync(file,html);count++;
  const existing=manifest.find(x=>x.path===rel);if(existing)existing.reviewedGuide=true;else manifest.push({path:rel,lang,canonical:de(url),reviewedGuide:true});
 }
 for(const file of [path.join(root,prefix,'guides/index.html'),path.join(root,prefix,'index.html')]) {
  if(!fs.existsSync(file))continue;
  let html=fs.readFileSync(file,'utf8');
  for(const [slug,g] of Object.entries(guides)){
   const card=new RegExp(`(<a[^>]*href="${prefix}/guides/${slug}/?"[^>]*>)([\\s\\S]*?)(</a>)`,'g');
   html=html.replace(card,(_,open,body,close)=>open+body.replace(/<h([23])>.*?<\/h[23]>/,(_m,level)=>`<h${level}>${e(g.title)}</h${level}>`).replace(/<p>.*?<\/p>/,`<p>${e(g.description)}</p>`)+close);
  }
  html=html.replace('<p>SEO</p>',`<p>${e(l.guides)}</p>`);
  html=html.replace(/(<section[^>]*id="guides"[\s\S]*?<span>)[\s\S]*?(<\/span>)/,`$1${e(l.intro)}$2`);
  if(home&&/<section[^>]*id="how"/.test(html))html=html.replace(/<section[^>]*id="how"[\s\S]*?<\/section>/,`<section class="soft" id="how"><div class="section-heading"><h2>${e(home.title)}</h2><p>${e(home.intro)}</p></div><div class="steps">${home.steps.map(([title,body],i)=>`<article><b>0${i+1}</b><h3>${e(title)}</h3><p>${e(body)}</p></article>`).join('')}</div></section>`);
  fs.writeFileSync(file,html);
 }
}
fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n');
const sitemap=path.join(root,'sitemap.xml');if(fs.existsSync(sitemap)){let xml=fs.readFileSync(sitemap,'utf8');xml=xml.replace(/<url>[\s\S]*?<\/url>/g,entry=>entry.includes('/guides')?entry.replace(/<lastmod>.*?<\/lastmod>/g,'<lastmod>2026-09-24</lastmod>'):entry);fs.writeFileSync(sitemap,xml);}
console.log(`Rendered ${count} specific guides; existing canonical URLs and tracking retained.`);
