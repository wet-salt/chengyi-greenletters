import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const html=readFileSync('docs/index.html','utf8');
for(const page of ['archive','together','community']){mkdirSync(`docs/${page}`,{recursive:true});writeFileSync(`docs/${page}/index.html`,html);}
writeFileSync('docs/404.html',html);writeFileSync('docs/.nojekyll','');
console.log('Generated independent page entrypoints and GitHub Pages asset paths.');
