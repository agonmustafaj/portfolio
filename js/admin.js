(function () {
  var REPO = 'agonmustafaj/portfolio';
  var TOKEN_KEY = 'agon-blog-token';
  var SESSION_KEY = 'agon-blog-session';

  var loginPanel = document.getElementById('admin-login');
  var appPanel = document.getElementById('admin-app');
  var chooserPanel = document.getElementById('admin-chooser');
  var editorPanel = document.getElementById('admin-editor');
  var deletePanel = document.getElementById('admin-delete');
  var deleteList = document.getElementById('delete-list');
  var loginForm = document.getElementById('login-form');
  var postForm = document.getElementById('post-form');
  var statusEl = document.getElementById('admin-status');
  var tokenInput = document.getElementById('github-token');
  var titleInput = document.getElementById('post-title-en');
  var slugInput = document.getElementById('post-slug');
  var slugTouched = false;

  function setStatus(message, isError) {
    statusEl.textContent = message || '';
    statusEl.classList.toggle('error', !!isError);
  }

  function hexToBytes(hex) {
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameHex(a, b) {
    if (a.length !== b.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }

  function verifyPassword(user, pass) {
    var gate = window.ADMIN_GATE;
    if (!gate || user !== gate.user) return Promise.resolve(false);
    return crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(pass),
      'PBKDF2',
      false,
      ['deriveBits']
    ).then(function (key) {
      return crypto.subtle.deriveBits({
        name: 'PBKDF2',
        salt: hexToBytes(gate.salt),
        iterations: gate.iterations,
        hash: 'SHA-256'
      }, key, 256);
    }).then(function (bits) {
      var hex = Array.from(new Uint8Array(bits)).map(function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
      return sameHex(hex, gate.hash);
    });
  }

  function slugify(value) {
    var map = { ë: 'e', Ë: 'e', ç: 'c', Ç: 'c', á: 'a', à: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ä: 'a', ö: 'o', ü: 'u' };
    var text = String(value || '').split('').map(function (ch) { return map[ch] || ch; }).join('');
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
  }

  function esc(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function jsonForScript(value) {
    return JSON.stringify(value).replace(/</g, '\\u003c');
  }

  function formatInline(text) {
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function bodyToHtml(text) {
    var html = [];
    var paragraph = [];
    var list = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      html.push('<p>' + formatInline(paragraph.join(' ')) + '</p>');
      paragraph = [];
    }

    function flushList() {
      if (!list.length) return;
      html.push('<ul>' + list.map(function (item) {
        return '<li>' + formatInline(item) + '</li>';
      }).join('') + '</ul>');
      list = [];
    }

    String(text).replace(/\r\n/g, '\n').split('\n').forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        flushList();
        return;
      }
      if (trimmed.indexOf('###') === 0 || trimmed.indexOf('## #') === 0) {
        flushParagraph();
        flushList();
        var sub = trimmed.replace(/^##\s*/, '').replace(/^#+\s*/, '');
        if (sub) html.push('<h3>' + formatInline(sub) + '</h3>');
        return;
      }
      if (trimmed.indexOf('##') === 0) {
        flushParagraph();
        flushList();
        var heading = trimmed.replace(/^##\s*/, '');
        if (heading) html.push('<h2>' + formatInline(heading) + '</h2>');
        return;
      }
      if (trimmed.indexOf('- ') === 0 || trimmed.indexOf('* ') === 0) {
        flushParagraph();
        list.push(trimmed.replace(/^[-*]\s+/, ''));
        return;
      }
      flushList();
      paragraph.push(trimmed);
    });
    flushParagraph();
    flushList();
    return html.join('\n          ');
  }

  function formatDate(iso) {
    var parts = iso.split('-');
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  function formatDateSq(iso) {
    var months = ['janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor', 'nëntor', 'dhjetor'];
    var parts = iso.split('-');
    return Number(parts[2]) + ' ' + months[Number(parts[1]) - 1] + ' ' + parts[0];
  }

  function jsString(value) {
    return "'" + String(value)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\r/g, '')
      .replace(/\n/g, '\\n')
      .replace(/<\/script/gi, '<\\/script') + "'";
  }

  function insertI18n(source, marker, entries) {
    var token = '/* ' + marker + ' */';
    var at = source.indexOf(token);
    if (at === -1) throw new Error('Mungon pika e përkthimit te i18n.js.');
    var block = Object.keys(entries).map(function (key) {
      return "      '" + key + "': " + jsString(entries[key]);
    }).join(',\n');
    var before = source.slice(0, at);
    var comma = /,\s*$/.test(before) ? '' : ',';
    return before + comma + '\n' + block + ',\n      ' + token + source.slice(at + token.length);
  }

  function todayIso() {
    var now = new Date();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    return now.getFullYear() + '-' + month + '-' + day;
  }

  function buildPostHtml(post) {
    var url = 'https://agonmustafaj.com/blog/' + post.slug + '/';
    var schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': url + '#article',
          headline: post.title,
          author: { '@type': 'Person', '@id': 'https://agonmustafaj.com/#agon-mustafaj', name: 'Agon Mustafaj', url: 'https://agonmustafaj.com/about/' },
          publisher: { '@id': 'https://agonmustafaj.com/#agon-mustafaj' },
          datePublished: post.date,
          dateModified: post.date,
          description: post.seoDesc,
          url: url,
          image: {
            '@type': 'ImageObject',
            url: 'https://agonmustafaj.com/assets/images/banner.png?v=20261015og',
            contentUrl: 'https://agonmustafaj.com/assets/images/banner.png?v=20261015og',
            creditText: 'Agon Mustafaj',
            copyrightNotice: '© Agon Mustafaj. All rights reserved.',
            license: 'https://agonmustafaj.com/license/',
            acquireLicensePage: 'https://agonmustafaj.com/contact/',
            creator: { '@id': 'https://agonmustafaj.com/#agon-mustafaj' },
            copyrightHolder: { '@id': 'https://agonmustafaj.com/#agon-mustafaj' }
          },
          inLanguage: 'en',
          articleSection: post.category,
          isPartOf: { '@id': 'https://agonmustafaj.com/blog/#blog' },
          mainEntityOfPage: { '@id': url }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': url + '#breadcrumb',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agonmustafaj.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agonmustafaj.com/blog/' },
            { '@type': 'ListItem', position: 3, name: post.title, item: url }
          ]
        }
      ]
    };

    var key = 'dyn.' + post.slug;
    return '<!DOCTYPE html>\n' +
      '<html lang="en">\n' +
      '<head>\n' +
      '  <!-- Google tag (gtag.js) -->\n' +
      '  <script async src="https://www.googletagmanager.com/gtag/js?id=G-M50ZWX5KMQ"></script>\n' +
      '  <script>\n' +
      '    window.dataLayer = window.dataLayer || [];\n' +
      '    function gtag(){dataLayer.push(arguments);}\n' +
      '    gtag(\'js\', new Date());\n' +
      '    gtag(\'config\', \'G-M50ZWX5KMQ\');\n' +
      '  </script>\n' +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '  <title data-i18n="' + key + '.pageTitle">' + esc(post.seoTitle) + '</title>\n' +
      '  <meta name="description" data-i18n-content="' + key + '.seoDesc" content="' + esc(post.seoDesc) + '">\n' +
      '  <link rel="canonical" href="' + url + '">\n' +
      '  <link rel="author" href="https://agonmustafaj.com/about/">\n' +
      '  <meta property="og:type" content="article">\n' +
      '  <meta property="og:site_name" content="Agon Mustafaj">\n' +
      '  <meta property="og:title" data-i18n-content="' + key + '.pageTitle" content="' + esc(post.seoTitle) + '">\n' +
      '  <meta property="og:description" data-i18n-content="' + key + '.seoDesc" content="' + esc(post.seoDesc) + '">\n' +
      '  <meta property="og:url" content="' + url + '">\n' +
      '  <meta property="og:image" content="https://agonmustafaj.com/assets/images/banner.png?v=20261015og">\n' +
      '  <meta property="og:image:width" content="1200">\n' +
      '  <meta property="og:image:height" content="630">\n' +
      '  <meta property="og:image:type" content="image/png">\n' +
      '  <meta property="og:image:alt" content="Agon Mustafaj. Explore the work at agonmustafaj.com">\n' +
      '  <meta property="og:locale" content="en_US">\n' +
      '  <meta property="og:locale:alternate" content="sq_AL">\n' +
      '  <meta property="article:published_time" content="' + esc(post.date) + '">\n' +
      '  <meta property="article:section" content="' + esc(post.category) + '">\n' +
      '  <meta name="twitter:card" content="summary_large_image">\n' +
      '  <meta name="twitter:title" data-i18n-content="' + key + '.pageTitle" content="' + esc(post.seoTitle) + '">\n' +
      '  <meta name="twitter:description" data-i18n-content="' + key + '.seoDesc" content="' + esc(post.seoDesc) + '">\n' +
      '  <meta name="twitter:image" content="https://agonmustafaj.com/assets/images/banner.png?v=20261015og">\n' +
      '  <meta name="author" content="Agon Mustafaj">\n' +
      '  <link rel="icon" type="image/png" href="/assets/images/favicon.png?v=20261017c">\n' +
      '  <link rel="apple-touch-icon" href="/assets/images/favicon.png?v=20261017c">\n' +
      '  <script>try{document.documentElement.setAttribute(\'data-theme\',localStorage.getItem(\'theme\')||(matchMedia(\'(prefers-color-scheme: light)\').matches?\'light\':\'dark\'))}catch(e){}</script>\n' +
      '  <link rel="stylesheet" href="/css/style.css?v=20261020a">\n' +
      '  <script type="application/ld+json">\n  ' +
      jsonForScript(schema) +
      '\n  </script>\n' +
      '</head>\n' +
      '<body data-page="blog">\n' +
      '  <div id="site-header"></div>\n' +
      '  <main>\n' +
      '    <article class="blog-post">\n' +
      '      <div class="container" style="max-width:760px">\n' +
      '        <nav class="breadcrumb" aria-label="Breadcrumb">\n' +
      '          <a href="/" data-i18n="ui.home">Home</a> / <a href="/blog/" data-i18n="ui.blog">Blog</a> / <span data-i18n="' + key + '.crumb">' + esc(post.crumb) + '</span>\n' +
      '        </nav>\n' +
      '        <span class="label" data-i18n="' + key + '.cat">' + esc(post.category) + '</span>\n' +
      '        <h1 data-i18n="' + key + '.title">' + esc(post.title) + '</h1>\n' +
      '        <p class="blog-meta" data-i18n="' + key + '.meta">By Agon Mustafaj · ' + esc(formatDate(post.date)) + '</p>\n' +
      '        <div class="blog-content" data-i18n-html="' + key + '.body">\n          ' +
      bodyToHtml(post.body) +
      '\n        </div>\n' +
      '        <p style="margin-top:2.5rem"><a href="/blog/" class="btn btn-secondary" data-i18n="ui.backBlog">← Back to Blog</a></p>\n' +
      '      </div>\n' +
      '    </article>\n' +
      '  </main>\n' +
      '  <div id="site-footer"></div>\n' +
      '  <script src="/js/data.js?v=20261021b"></script>\n' +
      '  <script src="/js/i18n.js?v=20261021b"></script>\n' +
      '  <script src="/js/script.js?v=20261021b"></script>\n' +
      '</body>\n' +
      '</html>\n';
  }

  function gh(token, method, path, body) {
    return fetch('https://api.github.com' + path, {
      method: method,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (res) {
      if (res.status === 204) return null;
      return res.text().then(function (text) {
        var data = text ? JSON.parse(text) : null;
        if (!res.ok) {
          var message = (data && data.message) || ('GitHub ' + res.status);
          throw new Error(message);
        }
        return data;
      });
    });
  }

  function readRepoFile(token, path) {
    return fetch('https://api.github.com/repos/' + REPO + '/contents/' + path, {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github.raw',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(function (res) {
      if (res.status === 404) return null;
      return res.text().then(function (text) {
        if (!res.ok) throw new Error('Nuk u lexua ' + path);
        return text;
      });
    });
  }

  function insertAtMark(source, block) {
    var mark = '<!-- managed-post -->';
    if (source.indexOf(mark) === -1) throw new Error('Mungon pika e futjes te një faqe.');
    return source.replace(mark, mark + '\n' + block);
  }

  function keepLatestHomeCards(html, limit) {
    var gridStart = html.indexOf('class="articles-grid');
    if (gridStart === -1) return html;
    var gridOpen = html.lastIndexOf('<div', gridStart);
    var gridEnd = html.indexOf('</div>', gridStart);
    if (gridOpen === -1 || gridEnd === -1) return html;
    var count = 0;
    var grid = html.slice(gridOpen, gridEnd).replace(/<article class="article-card[\s\S]*?<\/article>\n?/g, function (block) {
      count += 1;
      return count <= limit ? block : '';
    });
    return html.slice(0, gridOpen) + grid + html.slice(gridEnd);
  }

  function publish(post, token) {
    var key = 'dyn.' + post.slug;
    var listingCard =
      '          <article class="article-card reveal">\n' +
      '            <span class="label" data-i18n="' + key + '.cat">' + esc(post.category) + '</span>\n' +
      '            <h3><a href="/blog/' + post.slug + '/" data-i18n="' + key + '.title">' + esc(post.title) + '</a></h3>\n' +
      '            <p data-i18n="' + key + '.desc">' + esc(post.description) + '</p>\n' +
      '            <p class="text-muted" style="margin-top:0.75rem;font-size:0.8rem" data-i18n="' + key + '.meta">By Agon Mustafaj · ' + esc(formatDate(post.date)) + '</p>\n' +
      '          </article>';
    var homeCard =
      '          <article class="article-card">\n' +
      '            <span class="label" data-i18n="' + key + '.cat">' + esc(post.category) + '</span>\n' +
      '            <h3><a href="/blog/' + post.slug + '/" data-i18n="' + key + '.title">' + esc(post.title) + '</a></h3>\n' +
      '            <p data-i18n="' + key + '.short">' + esc(post.shortText) + '</p>\n' +
      '          </article>';
    var sitemapBlock =
      '  <url>\n' +
      '    <loc>https://agonmustafaj.com/blog/' + post.slug + '/</loc>\n' +
      '    <lastmod>' + post.date + '</lastmod>\n' +
      '    <changefreq>monthly</changefreq>\n' +
      '    <priority>0.5</priority>\n' +
      '  </url>';
    var schemaItem = JSON.stringify({
      '@type': 'BlogPosting',
      '@id': 'https://agonmustafaj.com/blog/' + post.slug + '/#article',
      headline: post.title,
      url: 'https://agonmustafaj.com/blog/' + post.slug + '/',
      datePublished: post.date,
      author: { '@id': 'https://agonmustafaj.com/#agon-mustafaj' }
    }).replace(/</g, '\\u003c');

    return readRepoFile(token, 'blog/' + post.slug + '/index.html').then(function (existing) {
      if (existing) throw new Error('Ky slug ekziston tashmë. Zgjidh një tjetër.');
      return Promise.all([
        readRepoFile(token, 'blog/index.html'),
        readRepoFile(token, 'index.html'),
        readRepoFile(token, 'sitemap.xml'),
        readRepoFile(token, 'js/i18n.js'),
        gh(token, 'GET', '/repos/' + REPO + '/git/ref/heads/main')
      ]);
    }).then(function (parts) {
      var blogIndex = parts[0];
      var home = parts[1];
      var sitemap = parts[2];
      var i18n = parts[3];
      var ref = parts[4];
      var parent = ref.object.sha;
      var needle = '"blogPost": [';
      if (!blogIndex || blogIndex.indexOf(needle) === -1) throw new Error('Lista e blogut nuk u gjet.');
      blogIndex = blogIndex.replace(needle, needle + '\n          ' + schemaItem + ',');
      var prefix = 'dyn.' + post.slug;
      var enPack = {};
      var sqPack = {};
      enPack[prefix + '.title'] = post.title;
      sqPack[prefix + '.title'] = post.titleSq;
      enPack[prefix + '.pageTitle'] = post.seoTitle;
      sqPack[prefix + '.pageTitle'] = post.seoTitleSq;
      enPack[prefix + '.cat'] = post.category;
      sqPack[prefix + '.cat'] = post.categorySq;
      enPack[prefix + '.desc'] = post.description;
      sqPack[prefix + '.desc'] = post.descriptionSq;
      enPack[prefix + '.seoDesc'] = post.seoDesc;
      sqPack[prefix + '.seoDesc'] = post.seoDescSq;
      enPack[prefix + '.short'] = post.shortText;
      sqPack[prefix + '.short'] = post.shortSq;
      enPack[prefix + '.meta'] = 'By Agon Mustafaj · ' + formatDate(post.date);
      sqPack[prefix + '.meta'] = 'Nga Agon Mustafaj · ' + formatDateSq(post.date);
      enPack[prefix + '.crumb'] = post.crumb;
      sqPack[prefix + '.crumb'] = post.crumbSq;
      enPack[prefix + '.body'] = bodyToHtml(post.body).replace(/\n\s+/g, '');
      sqPack[prefix + '.body'] = bodyToHtml(post.bodySq).replace(/\n\s+/g, '');
      i18n = insertI18n(i18n, 'managed-post-i18n:en', enPack);
      i18n = insertI18n(i18n, 'managed-post-i18n:sq', sqPack);
      var i18nVersion = 'i18n.js?v=' + Date.now().toString(36);
      function bust(html) {
        return html.replace(/i18n\.js\?v=[^"']+/g, i18nVersion);
      }
      return gh(token, 'GET', '/repos/' + REPO + '/git/commits/' + parent).then(function (commit) {
        return { blogIndex: bust(blogIndex), home: bust(home), sitemap: sitemap, i18n: i18n, parent: parent, tree: commit.tree.sha, i18nVersion: i18nVersion };
      });
    }).then(function (state) {
      var postHtml = buildPostHtml(post).replace(/i18n\.js\?v=[^"']+/g, state.i18nVersion);
      var files = [
        { path: 'blog/' + post.slug + '/index.html', content: postHtml },
        { path: 'blog/index.html', content: insertAtMark(state.blogIndex, listingCard) },
        { path: 'index.html', content: keepLatestHomeCards(insertAtMark(state.home, homeCard), 3) },
        { path: 'sitemap.xml', content: insertAtMark(state.sitemap, sitemapBlock) },
        { path: 'js/i18n.js', content: state.i18n }
      ];
      return Promise.all(files.map(function (file) {
        return gh(token, 'POST', '/repos/' + REPO + '/git/blobs', {
          content: file.content,
          encoding: 'utf-8'
        }).then(function (blob) {
          return { path: file.path, mode: '100644', type: 'blob', sha: blob.sha };
        });
      })).then(function (tree) {
        return gh(token, 'POST', '/repos/' + REPO + '/git/trees', {
          base_tree: state.tree,
          tree: tree
        }).then(function (created) {
          return gh(token, 'POST', '/repos/' + REPO + '/git/commits', {
            message: 'Publish blog post: ' + post.title,
            tree: created.sha,
            parents: [state.parent]
          });
        });
      }).then(function (commit) {
        return gh(token, 'PATCH', '/repos/' + REPO + '/git/refs/heads/main', { sha: commit.sha });
      });
    });
  }

  function splitTopObjects(text) {
    var objects = [];
    var depth = 0;
    var start = -1;
    var inString = false;
    var escaped = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') {
        inString = true;
        continue;
      }
      if (ch === '{') {
        if (depth === 0) start = i;
        depth++;
      } else if (ch === '}') {
        depth--;
        if (depth === 0 && start !== -1) {
          objects.push(text.slice(start, i + 1));
          start = -1;
        }
      }
    }
    return objects;
  }

  function removeArticleCard(html, slug) {
    var needle = '/blog/' + slug + '/';
    return html.replace(/<article class="article-card[\s\S]*?<\/article>\n?/g, function (block) {
      return block.indexOf(needle) !== -1 ? '' : block;
    }).replace(/\n{3,}/g, '\n\n');
  }

  function removeSitemapUrl(xml, slug) {
    var loc = 'https://agonmustafaj.com/blog/' + slug + '/';
    return xml.replace(/[ \t]*<url>[\s\S]*?<\/url>\n?/g, function (block) {
      return block.indexOf(loc) !== -1 ? '' : block;
    });
  }

  function removeBlogPostSchema(html, slug) {
    var marker = '"blogPost": [';
    var start = html.indexOf(marker);
    if (start === -1) return html;
    var from = start + marker.length;
    var i = from;
    var depth = 1;
    var inString = false;
    var escaped = false;
    while (i < html.length && depth > 0) {
      var ch = html.charAt(i);
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === '"') inString = false;
      } else if (ch === '"') inString = true;
      else if (ch === '[') depth++;
      else if (ch === ']') depth--;
      i++;
    }
    var kept = splitTopObjects(html.slice(from, i - 1)).filter(function (obj) {
      return obj.indexOf('/blog/' + slug + '/') === -1;
    });
    var next = kept.length ? '\n          ' + kept.join(',\n          ') + '\n        ' : '';
    return html.slice(0, start) + marker + next + html.slice(i - 1);
  }

  function removeI18nKeys(source, slug) {
    var prefix = "'dyn." + slug + ".";
    return source.split('\n').map(function (line) {
      if (line.indexOf(prefix) === -1) return line;
      var marker = line.match(/\/\* managed-post-i18n:(?:en|sq) \*\//);
      return marker ? '      ' + marker[0] : null;
    }).filter(function (line) { return line !== null; }).join('\n');
  }

  function listPosts(html) {
    var posts = [];
    var re = /<article class="article-card[\s\S]*?<\/article>/g;
    var match;
    while ((match = re.exec(html))) {
      var href = match[0].match(/href="\/blog\/([a-z0-9-]+)\//);
      var title = match[0].match(/<h3><a[^>]*>([^<]*)<\/a>/);
      if (!href) continue;
      posts.push({
        slug: href[1],
        title: title ? title[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') : href[1]
      });
    }
    return posts;
  }

  function renderDeleteList(posts) {
    deleteList.innerHTML = '';
    if (!posts.length) {
      deleteList.innerHTML = '<li>Nuk ka postime.</li>';
      return;
    }
    posts.forEach(function (post, index) {
      var item = document.createElement('li');
      var label = document.createElement('label');
      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'post-to-delete';
      input.value = post.slug;
      if (index === 0) input.checked = true;
      var text = document.createElement('span');
      text.textContent = post.title;
      label.appendChild(input);
      label.appendChild(text);
      item.appendChild(label);
      deleteList.appendChild(item);
    });
  }

  function loadDeleteList(token) {
    setStatus('Po ngarkohet lista…');
    return readRepoFile(token, 'blog/index.html').then(function (html) {
      if (!html) throw new Error('Lista e blogut nuk u gjet.');
      renderDeleteList(listPosts(html));
      setStatus('');
    });
  }

  function removePost(slug, title, token) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return Promise.reject(new Error('Slug i pavlefshëm.'));
    }
    return Promise.all([
      readRepoFile(token, 'blog/' + slug + '/index.html'),
      readRepoFile(token, 'blog/index.html'),
      readRepoFile(token, 'index.html'),
      readRepoFile(token, 'sitemap.xml'),
      readRepoFile(token, 'js/i18n.js'),
      gh(token, 'GET', '/repos/' + REPO + '/git/ref/heads/main')
    ]).then(function (parts) {
      var postFile = parts[0];
      var blogIndex = parts[1];
      var home = parts[2];
      var sitemap = parts[3];
      var i18n = parts[4];
      var parent = parts[5].object.sha;
      if (!postFile && (!blogIndex || blogIndex.indexOf('/blog/' + slug + '/') === -1)) {
        throw new Error('Ky postim nuk u gjet.');
      }
      blogIndex = removeBlogPostSchema(removeArticleCard(blogIndex, slug), slug);
      home = removeArticleCard(home, slug);
      sitemap = removeSitemapUrl(sitemap, slug);
      i18n = removeI18nKeys(i18n, slug);
      var i18nVersion = 'i18n.js?v=' + Date.now().toString(36);
      function bust(html) {
        return html.replace(/i18n\.js\?v=[^"']+/g, i18nVersion);
      }
      return gh(token, 'GET', '/repos/' + REPO + '/git/commits/' + parent).then(function (commit) {
        return {
          postExists: !!postFile,
          blogIndex: bust(blogIndex),
          home: bust(home),
          sitemap: sitemap,
          i18n: i18n,
          parent: parent,
          tree: commit.tree.sha,
          title: title
        };
      });
    }).then(function (state) {
      var files = [
        { path: 'blog/index.html', content: state.blogIndex },
        { path: 'index.html', content: state.home },
        { path: 'sitemap.xml', content: state.sitemap },
        { path: 'js/i18n.js', content: state.i18n }
      ];
      return Promise.all(files.map(function (file) {
        return gh(token, 'POST', '/repos/' + REPO + '/git/blobs', {
          content: file.content,
          encoding: 'utf-8'
        }).then(function (blob) {
          return { path: file.path, mode: '100644', type: 'blob', sha: blob.sha };
        });
      })).then(function (tree) {
        if (state.postExists) {
          tree.push({ path: 'blog/' + slug + '/index.html', mode: '100644', type: 'blob', sha: null });
        }
        return gh(token, 'POST', '/repos/' + REPO + '/git/trees', {
          base_tree: state.tree,
          tree: tree
        }).then(function (created) {
          return gh(token, 'POST', '/repos/' + REPO + '/git/commits', {
            message: 'Remove blog post: ' + state.title,
            tree: created.sha,
            parents: [state.parent]
          });
        });
      }).then(function (commit) {
        return gh(token, 'PATCH', '/repos/' + REPO + '/git/refs/heads/main', { sha: commit.sha });
      });
    });
  }

  function showMode(mode) {
    chooserPanel.hidden = mode !== 'choose';
    editorPanel.hidden = mode !== 'post';
    deletePanel.hidden = mode !== 'delete';
  }

  function showApp() {
    loginPanel.hidden = true;
    appPanel.hidden = false;
    tokenInput.value = localStorage.getItem(TOKEN_KEY) || '';
    showMode('choose');
  }

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var user = document.getElementById('username').value.trim();
    var pass = document.getElementById('password').value;
    setStatus('Po kontrollohen të dhënat…');
    verifyPassword(user, pass).then(function (ok) {
      if (!ok) {
        setStatus('Të dhënat nuk përputhen.', true);
        return;
      }
      sessionStorage.setItem(SESSION_KEY, '1');
      document.getElementById('password').value = '';
      setStatus('');
      showApp();
    }).catch(function () {
      setStatus('Hyrja nuk u krye.', true);
    });
  });

  function bindSeoCount(id, max) {
    var input = document.getElementById(id);
    var count = document.querySelector('[data-for="' + id + '"]');
    function update() {
      var length = input.value.length;
      count.textContent = length + '/' + max;
      count.classList.toggle('warn', length >= max);
    }
    input.addEventListener('input', update);
    update();
    return update;
  }

  var refreshSeoCounts = [
    bindSeoCount('post-seo-title-en', 60),
    bindSeoCount('post-seo-desc-en', 160),
    bindSeoCount('post-seo-title-sq', 60),
    bindSeoCount('post-seo-desc-sq', 160)
  ];

  titleInput.addEventListener('input', function () {
    if (!slugTouched) slugInput.value = slugify(titleInput.value);
  });
  slugInput.addEventListener('input', function () {
    slugTouched = true;
    slugInput.value = slugify(slugInput.value);
  });

  document.getElementById('save-token').addEventListener('click', function () {
    var token = tokenInput.value.trim();
    if (!token) {
      localStorage.removeItem(TOKEN_KEY);
      setStatus('Tokeni u hoq nga ky shfletues.');
      return;
    }
    localStorage.setItem(TOKEN_KEY, token);
    setStatus('Tokeni u ruajt vetëm në këtë shfletues.');
  });

  document.getElementById('admin-logout').addEventListener('click', function () {
    sessionStorage.removeItem(SESSION_KEY);
    appPanel.hidden = true;
    loginPanel.hidden = false;
    showMode('choose');
    setStatus('');
  });

  document.getElementById('choose-post').addEventListener('click', function () {
    setStatus('');
    showMode('post');
  });

  document.getElementById('back-from-editor').addEventListener('click', function () {
    setStatus('');
    showMode('choose');
  });

  document.getElementById('choose-delete').addEventListener('click', function () {
    var token = (tokenInput.value || '').trim();
    if (!token) {
      setStatus('Vendos tokenin e GitHub-it. Pa të, lista nuk lexohet.', true);
      return;
    }
    localStorage.setItem(TOKEN_KEY, token);
    showMode('delete');
    loadDeleteList(token).catch(function (error) {
      setStatus(error.message || 'Lista nuk u ngarkua.', true);
    });
  });

  document.getElementById('back-from-delete').addEventListener('click', function () {
    setStatus('');
    showMode('choose');
  });

  document.getElementById('delete-post').addEventListener('click', function () {
    var token = (tokenInput.value || '').trim();
    var selected = deleteList.querySelector('input[name="post-to-delete"]:checked');
    if (!token) {
      setStatus('Vendos tokenin e GitHub-it.', true);
      return;
    }
    if (!selected) {
      setStatus('Zgjidh një postim nga lista.', true);
      return;
    }
    var slug = selected.value;
    var title = selected.parentNode.querySelector('span').textContent;
    if (!window.confirm('Të fshihet "' + title + '"? Kjo e heq nga faqja, nga blogu dhe nga adresa e vet.')) return;
    var button = document.getElementById('delete-post');
    button.disabled = true;
    setStatus('Po fshihet… GitHub Pages mund të dojë një minutë pasi të përfundojë.');
    localStorage.setItem(TOKEN_KEY, token);
    removePost(slug, title, token).then(function () {
      setStatus('U fshi: ' + title);
      return loadDeleteList(token);
    }).catch(function (error) {
      setStatus(error.message || 'Fshirja dështoi.', true);
    }).then(function () {
      button.disabled = false;
    });
  });

  postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var token = (tokenInput.value || '').trim();
    var title = titleInput.value.trim();
    var titleSq = document.getElementById('post-title-sq').value.trim();
    var slug = slugify(slugInput.value);
    var body = document.getElementById('post-body-en').value.trim();
    var bodySq = document.getElementById('post-body-sq').value.trim();
    var category = document.getElementById('post-category-en').value.trim() || 'Blog';
    var categorySq = document.getElementById('post-category-sq').value.trim() || category;
    var description = document.getElementById('post-description-en').value.trim();
    var descriptionSq = document.getElementById('post-description-sq').value.trim();
    var seoTitle = document.getElementById('post-seo-title-en').value.trim();
    var seoTitleSq = document.getElementById('post-seo-title-sq').value.trim();
    var seoDesc = document.getElementById('post-seo-desc-en').value.trim();
    var seoDescSq = document.getElementById('post-seo-desc-sq').value.trim();

    if (!token) {
      setStatus('Vendos tokenin e GitHub-it. Pa të, faqja statike nuk mund të publikojë.', true);
      return;
    }
    if (!title || !titleSq || !slug || !body || !bodySq) {
      setStatus('Duhen titulli dhe teksti në anglisht dhe në shqip.', true);
      return;
    }
    if (!description) description = body.replace(/^##\s*/gm, '').replace(/\s+/g, ' ').trim().slice(0, 155);
    if (!descriptionSq) descriptionSq = bodySq.replace(/^##\s*/gm, '').replace(/\s+/g, ' ').trim().slice(0, 155);
    if (!seoTitle) seoTitle = (title + ' | Agon Mustafaj').slice(0, 60);
    if (!seoTitleSq) seoTitleSq = (titleSq + ' | Agon Mustafaj').slice(0, 60);
    if (!seoDesc) seoDesc = description.slice(0, 160);
    if (!seoDescSq) seoDescSq = descriptionSq.slice(0, 160);

    var post = {
      title: title,
      titleSq: titleSq,
      slug: slug,
      body: body,
      bodySq: bodySq,
      category: category,
      categorySq: categorySq,
      description: description,
      descriptionSq: descriptionSq,
      seoTitle: seoTitle,
      seoTitleSq: seoTitleSq,
      seoDesc: seoDesc,
      seoDescSq: seoDescSq,
      shortText: description.slice(0, 110),
      shortSq: descriptionSq.slice(0, 110),
      crumb: title,
      crumbSq: titleSq,
      date: todayIso()
    };

    var button = document.getElementById('publish-post');
    button.disabled = true;
    setStatus('Po publikohet… GitHub Pages mund të dojë një minutë pasi të përfundojë.');
    localStorage.setItem(TOKEN_KEY, token);
    publish(post, token).then(function () {
      setStatus('U publikua: https://agonmustafaj.com/blog/' + slug + '/');
      postForm.reset();
      slugTouched = false;
      refreshSeoCounts.forEach(function (update) { update(); });
      tokenInput.value = token;
    }).catch(function (error) {
      setStatus(error.message || 'Publikimi dështoi.', true);
    }).then(function () {
      button.disabled = false;
    });
  });

  if (sessionStorage.getItem(SESSION_KEY) === '1') showApp();
})();
