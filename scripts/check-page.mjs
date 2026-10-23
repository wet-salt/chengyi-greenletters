import {readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import ts from 'typescript';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
import assert from 'node:assert/strict';
const tr=s=>ts.transpileModule(s,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const data=path=>'data:text/javascript;base64,'+Buffer.from(tr(readFileSync(path,'utf8'))).toString('base64');
const created=[];
function moduleFile(name,source,replacements={}){
  const path=`scripts/.${name}-qa.mjs`;
  let compiled=tr(source);
  for(const [from,to] of Object.entries(replacements))compiled=compiled.replaceAll(JSON.stringify(from),JSON.stringify(to));
  writeFileSync(path,compiled);created.push(path);return `./.${name}-qa.mjs`;
}
try{
  const navigation=data('lib/site-navigation.ts');
  const localCommunity='data:text/javascript;base64,'+Buffer.from(tr(readFileSync('lib/local-community.ts','utf8')).replace('"./content"',JSON.stringify(data('lib/content.ts')))).toString('base64');
  const {sitePages,letterHref}=await import(navigation);
  const pageRouter=moduleFile('pages-router',readFileSync('lib/pages-router.ts','utf8'));
  const link=moduleFile('link',readFileSync('lib/pages-link.tsx','utf8'),{'./pages-router':pageRouter});
  const router=moduleFile('router','export function useRouter(){return {push(){}}}');
  const page=moduleFile('site-page',readFileSync('app/site-page.tsx','utf8'),{
    '../lib/content':data('lib/content.ts'),'../lib/local-community':localCommunity,
    '../lib/site-navigation':navigation,'next/link':link,'next/navigation':router,
  });
  const music=moduleFile('music',readFileSync('app/music-player.tsx','utf8'),{'../lib/music':data('lib/music.ts'),'../lib/music-source':data('lib/music-source.ts')});
  const siteMusic=moduleFile('site-music',readFileSync('app/site-music.tsx','utf8'),{'./music-player':music});
  const layout=moduleFile('layout','import {createElement} from "react";import SiteMusic from "./site-music";export default function Layout({children}){return createElement("div",null,createElement(SiteMusic),children)}',{'./site-music':siteMusic});
  const {default:Layout}=await import(layout);

  for(const item of sitePages){
    const {default:SitePage}=await import(page);
    const Page=()=>createElement(SitePage,{section:item.id});
    const html=renderToStaticMarkup(createElement(Layout,null,createElement(Page)));
    assert.ok(html.includes(`data-page="${item.id}"`),`${item.href} renders its own page`);
    assert.equal((html.match(/<h1\b/g)||[]).length,1,`${item.href} has one page title`);
    const nav=html.match(/<nav aria-label="主导航"[\s\S]*?<\/nav>/)?.[0];
    assert.ok(nav,`${item.href} has main navigation`);
    for(const destination of sitePages)assert.ok(nav.includes(`href="/chengyi-greenletters/${destination.href==='/'?'':destination.href.slice(1)+'/'}"`),`${item.href} links to ${destination.href}`);
    assert.ok([...nav.matchAll(/<a[^>]*>/g)].some(([a])=>a.includes('aria-current="page"')&&a.includes(`href="/chengyi-greenletters/${item.href==='/'?'':item.href.slice(1)+'/'}"`)),`${item.href} marks active navigation`);
    for(const id of ['archive','together','community'])assert.equal(html.includes(`id="${id}"`),id===item.id,`${item.href} isolates ${id} content`);
    for(const old of ['#archive','#together','#community'])assert.ok(!html.includes(`href="${old}"`),'No old cross-section anchor navigation');
    for(const text of ['自动漫游','自动滚动速度','开始自动滚动','回到这一页的顶部','溯梦独白','歌曲播放进度','打开歌曲选择页面','45 秒现场片段'])assert.ok(html.includes(text),`${item.href} retains ${text}`);
    assert.equal((html.match(/<audio\b/g)||[]).length,1,`${item.href} renders one shared music player`);
    assert.ok(!html.includes('undefined')&&!html.includes('NaN'));
    assert.ok(html.includes('本地模式')&&!html.includes('signin-with-chatgpt')&&!html.includes('请登录后使用'));
    if(item.id==='home')assert.ok(html.includes('id="page-entries"')&&html.includes('绿意不息'));
    if(item.id==='archive')for(const text of ['成长年表','影视作品','综艺出演','品牌活动','舞台盛典','1990 年 5 月 17 日'])assert.ok(html.includes(text));
    if(item.id==='together')for(const text of ['小情歌','因为爱，所以爱','生日相逢','2026.08.08','class="interlude"'])assert.ok(html.includes(text));
    if(item.id==='community')assert.ok(html.includes('今日份的陪伴')&&html.includes('正在收取来信'));
    console.log(`${item.href}: independent content, active navigation, page scroll controls and shared music passed.`);
  }
  const target=new URL(letterHref('活动交流'),'https://example.test');
  assert.equal(target.pathname,'/community');assert.equal(target.searchParams.get('compose'),'1');assert.equal(target.searchParams.get('topic'),'活动交流');
  const {siteHref,currentSection}=await import(pageRouter);assert.equal(siteHref('/archive'),'/chengyi-greenletters/archive/');assert.equal(siteHref('/community?compose=1'),'/chengyi-greenletters/community/?compose=1');assert.equal(currentSection('/chengyi-greenletters/together/'),'together');
  for(const path of ['docs/index.html','docs/archive/index.html','docs/together/index.html','docs/community/index.html']){const html=readFileSync(path,'utf8');assert.ok(html.includes('/chengyi-greenletters/assets/'));}
  const tracks=JSON.parse(readFileSync('docs/music.json','utf8'));assert.ok(Object.keys(tracks.tracks).length<=12);
  console.log('Independent entrypoints, subpath navigation, letter destination, and public music manifest passed.');
}finally{for(const path of created)unlinkSync(path);}
