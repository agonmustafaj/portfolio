/*
 * Submits every URL in sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver and others).
 * Runs after each deploy. The key file lives at the site root as <key>.txt.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HOST = 'agonmustafaj.com';
const KEY = 'd7122fb8ae4a6d5c1df8f7d7727bb432';

const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/agonmustafaj\.com\/[^<]*)<\/loc>/g)]
  .map(m => m[1])
  .filter(u => !/\.(png|jpe?g|webp|pdf)$/i.test(u));

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: 'https://' + HOST + '/' + KEY + '.txt', urlList })
}).then(res => {
  console.log('IndexNow: ' + res.status + ' for ' + urlList.length + ' URLs');
  if (res.status >= 400) process.exit(1);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
