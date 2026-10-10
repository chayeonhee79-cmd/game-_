import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','geoje-map.js','travel-map.js','game.js','firebase.js','firebase-config.js','photos.js','PHOTO-CREDITS.md']) await copyFile(file,`dist/${file}`);
console.log('Static build complete: dist');

await cp('assets','dist/assets',{recursive:true});
