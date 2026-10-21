/*
 * Builds the deployable site into _site/:
 * - copies the public files
 * - writes the header, footer, project and certificate markup into the HTML,
 *   so crawlers without JavaScript see the same links and text as visitors
 * - adds "More from the blog" links to every post
 * - adds the shared Person, AgoDev and WebSite schema (scripts/schema-entities.js) to every page
 * - strips indentation and comments from the HTML and compacts JSON-LD
 * - minifies js/*.js and css/*.css in place (same file names, so the ?v= cache keys still work)
 *
 * Run with: npm run build
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const esbuild = require('esbuild');
const ENTITIES = require('./schema-entities');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_site');

const SKIP = new Set([
  '.git', '.github', '.cursor', '.vscode', '.idea', 'node_modules', 'android', 'scripts',
  '_site', '_pdftmp', 'package.json', 'package-lock.json', 'README.md', '.gitignore'
]);
const SKIP_EXT = new Set(['.tiff', '.tif', '.psd', '.log']);

function copyTree(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyTree(src, dest);
    else if (!SKIP_EXT.has(path.extname(entry.name).toLowerCase())) fs.copyFileSync(src, dest);
  }
}

function listFiles(dir, ext, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, ext, acc);
    else if (entry.name.endsWith(ext)) acc.push(full);
  }
  return acc;
}

/* Runs data.js and script.js in a sandbox with a stub DOM and returns a function
   that gives the markup script.js would write into each container for a page. */
function createRenderer() {
  let onReady = null;
  let targets = {};

  function stubElement(id) {
    return {
      id,
      set innerHTML(html) { targets[id] = html; },
      get innerHTML() { return targets[id] || ''; },
      querySelector() { return null; },
      querySelectorAll() { return []; },
      addEventListener() {},
      setAttribute() {},
      classList: { add() {}, remove() {}, toggle() {} },
      dataset: {}
    };
  }

  const RENDERED = ['site-header', 'site-footer', 'project-showcase', 'cert-featured', 'cert-grid', 'verification-links', 'skill-list'];
  const body = { dataset: {}, classList: { add() {} }, style: {}, appendChild() {} };
  const document = {
    body,
    documentElement: { setAttribute() {}, getAttribute() { return 'dark'; } },
    getElementById(id) { return RENDERED.includes(id) ? stubElement(id) : null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() { return stubElement(''); },
    addEventListener(type, fn) { if (type === 'DOMContentLoaded') onReady = fn; }
  };

  const sandbox = {
    document,
    navigator: { maxTouchPoints: 0 },
    innerWidth: 1280,
    matchMedia() { return { matches: false, addEventListener() {} }; },
    localStorage: { getItem() { return null; }, setItem() {} },
    IntersectionObserver: function () { return { observe() {}, unobserve() {} }; },
    Image: function () { return {}; },
    setTimeout() {},
    console
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8'), sandbox, { filename: 'data.js' });
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/script.js'), 'utf8'), sandbox, { filename: 'script.js' });
  if (!onReady) throw new Error('script.js did not register a DOMContentLoaded handler');

  return function render(page) {
    targets = {};
    body.dataset = { page };
    onReady();
    return targets;
  };
}

function fillContainers(html, rendered) {
  return html.replace(/(<div\b[^>]*\bid="([a-z-]+)"[^>]*>)\s*(<\/div>)/g, function (match, open, id, close) {
    return rendered[id] ? open + rendered[id] + close : match;
  });
}

function blogCards(blogIndexHtml) {
  const cards = [];
  const re = /<article class="article-card[^"]*">[\s\S]*?<\/article>/g;
  let m;
  while ((m = re.exec(blogIndexHtml))) {
    const slug = (m[0].match(/href="\/blog\/([a-z0-9-]+)\/"/) || [])[1];
    if (slug) cards.push({ slug, html: m[0].replace(/\n\s*/g, '\n            ') });
  }
  return cards;
}

function addMorePosts(html, slug, cards) {
  const index = cards.findIndex(c => c.slug === slug);
  if (index === -1 || cards.length < 2) return html;
  const picks = [];
  for (let i = 1; i < cards.length && picks.length < 3; i++) {
    picks.push(cards[(index + i) % cards.length].html);
  }
  const section =
    '\n    <section class="section" style="padding-top:0" aria-labelledby="more-posts-heading">\n' +
    '      <div class="container" style="max-width:760px">\n' +
    '        <h2 id="more-posts-heading" data-i18n="blog.more" style="font-size:1.5rem;margin-bottom:1.25rem">More from the blog</h2>\n' +
    '        <div class="articles-grid">\n          ' + picks.join('\n          ') + '\n        </div>\n' +
    '      </div>\n' +
    '    </section>';
  return html.replace(/(<\/article>)(\s*<\/main>)/, '$1' + section + '$2');
}

/* Puts the shared Person, AgoDev and WebSite entities into the page's JSON-LD.
   Inline copies of those entities are reduced to @id references so each page has one definition. */
function addSchemaEntities(html) {
  const ids = new Set(ENTITIES.map(e => e['@id']));
  const reduce = node => {
    if (Array.isArray(node)) return node.map(reduce);
    if (!node || typeof node !== 'object') return node;
    if (ids.has(node['@id']) && Object.keys(node).length > 2) return { '@id': node['@id'] };
    for (const key of Object.keys(node)) node[key] = reduce(node[key]);
    return node;
  };
  let injected = false;
  const out = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (match, json) => {
    let data;
    try { data = JSON.parse(json); } catch (e) { return match; }
    const context = data['@context'] || 'https://schema.org';
    let graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];
    graph = graph.map(node => { const copy = Object.assign({}, node); delete copy['@context']; return copy; });
    graph = graph.map(reduce).filter(node => !(Object.keys(node).length === 1 && ids.has(node['@id'])));
    if (!injected) { graph = graph.concat(ENTITIES); injected = true; }
    return '<script type="application/ld+json">' + JSON.stringify({ '@context': context, '@graph': graph }) + '</script>';
  });
  if (injected) return out;
  return out.replace('</head>', '<script type="application/ld+json">' +
    JSON.stringify({ '@context': 'https://schema.org', '@graph': ENTITIES }) + '</script>\n</head>');
}

function compactHtml(html) {
  const kept = [];
  const keep = block => '\u0000' + (kept.push(block) - 1) + '\u0000';
  return html
    .replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (match, json) => {
      try {
        return keep('<script type="application/ld+json">' + JSON.stringify(JSON.parse(json)) + '</script>');
      } catch (e) {
        return keep(match);
      }
    })
    .replace(/<(pre|textarea)\b[\s\S]*?<\/\1>/g, keep)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .replace(/\u0000(\d+)\u0000/g, (m, i) => kept[i]);
}

async function minifyAssets() {
  const jobs = [
    ...listFiles(path.join(OUT, 'js'), '.js').map(file => ({ file, loader: 'js' })),
    ...listFiles(path.join(OUT, 'css'), '.css').map(file => ({ file, loader: 'css' }))
  ];
  for (const { file, loader } of jobs) {
    const source = fs.readFileSync(file, 'utf8');
    const result = await esbuild.transform(source, { loader, minify: true, legalComments: 'none', charset: 'utf8' });
    fs.writeFileSync(file, result.code);
  }
  return jobs.length;
}

async function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  copyTree(ROOT, OUT);

  const render = createRenderer();
  const cards = blogCards(fs.readFileSync(path.join(ROOT, 'blog/index.html'), 'utf8'));
  const pages = listFiles(OUT, '.html');

  for (const file of pages) {
    let html = fs.readFileSync(file, 'utf8');
    const page = (html.match(/<body[^>]*\bdata-page="([^"]+)"/) || [])[1];
    if (!page) continue;
    html = fillContainers(html, render(page));
    const postSlug = (path.relative(OUT, file).replace(/\\/g, '/').match(/^blog\/([a-z0-9-]+)\/index\.html$/) || [])[1];
    if (postSlug) html = addMorePosts(html, postSlug, cards);
    if (page !== 'admin') html = addSchemaEntities(html);
    fs.writeFileSync(file, compactHtml(html));
  }

  const minified = await minifyAssets();
  console.log('Built _site: ' + pages.length + ' pages, ' + minified + ' minified assets.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
