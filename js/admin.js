(function () {
  var REPO = 'agonmustafaj/portfolio';
  var TOKEN_KEY = 'agon-blog-token';
  var SESSION_KEY = 'agon-blog-session';

  var loginPanel = document.getElementById('admin-login');
  var editorPanel = document.getElementById('admin-editor');
  var loginForm = document.getElementById('login-form');
  var postForm = document.getElementById('post-form');
  var statusEl = document.getElementById('admin-status');
  var tokenInput = document.getElementById('github-token');
  var titleInput = document.getElementById('post-title');
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

  function bodyToHtml(text) {
    var html = [];
    var paragraph = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      html.push('<p>' + paragraph.map(esc).join(' ') + '</p>');
      paragraph = [];
    }

    String(text).replace(/\r\n/g, '\n').split('\n').forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        return;
      }
      if (trimmed.indexOf('##') === 0) {
        flushParagraph();
        var heading = trimmed.replace(/^##\s*/, '');
        if (heading) html.push('<h2>' + esc(heading) + '</h2>');
        return;
      }
      paragraph.push(trimmed);
    });
    flushParagraph();
    return html.join('\n          ');
  }

  function formatDate(iso) {
    var parts = iso.split('-');
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
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
          description: post.description,
          url: url,
          image: 'https://agonmustafaj.com/assets/images/og-v2.png',
          inLanguage: post.lang,
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

    return '<!DOCTYPE html>\n' +
      '<html lang="' + esc(post.lang) + '">\n' +
      '<head>\n' +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '  <title>' + esc(post.title) + ' | Agon Mustafaj</title>\n' +
      '  <meta name="description" content="' + esc(post.description) + '">\n' +
      '  <link rel="canonical" href="' + url + '">\n' +
      '  <link rel="author" href="https://agonmustafaj.com/about/">\n' +
      '  <meta property="og:type" content="article">\n' +
      '  <meta property="og:site_name" content="Agon Mustafaj">\n' +
      '  <meta property="og:title" content="' + esc(post.title) + '">\n' +
      '  <meta property="og:description" content="' + esc(post.description) + '">\n' +
      '  <meta property="og:url" content="' + url + '">\n' +
      '  <meta property="og:image" content="https://agonmustafaj.com/assets/images/og-v2.png">\n' +
      '  <meta property="og:image:width" content="1200">\n' +
      '  <meta property="og:image:height" content="630">\n' +
      '  <meta property="og:image:type" content="image/png">\n' +
      '  <meta property="og:image:alt" content="Agon Mustafaj. Explore the work at agonmustafaj.com">\n' +
      '  <meta property="og:locale" content="' + (post.lang === 'sq' ? 'sq_AL' : 'en_US') + '">\n' +
      '  <meta property="article:published_time" content="' + esc(post.date) + '">\n' +
      '  <meta property="article:section" content="' + esc(post.category) + '">\n' +
      '  <meta name="twitter:card" content="summary_large_image">\n' +
      '  <meta name="twitter:title" content="' + esc(post.title) + '">\n' +
      '  <meta name="twitter:description" content="' + esc(post.description) + '">\n' +
      '  <meta name="twitter:image" content="https://agonmustafaj.com/assets/images/og-v2.png">\n' +
      '  <meta name="author" content="Agon Mustafaj">\n' +
      '  <link rel="icon" type="image/png" href="/assets/images/favicon.png">\n' +
      '  <link rel="apple-touch-icon" href="/assets/images/favicon.png">\n' +
      '  <link rel="stylesheet" href="/css/style.css?v=20261011h">\n' +
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
      '          <a href="/">Home</a> / <a href="/blog/">Blog</a> / <span>' + esc(post.title) + '</span>\n' +
      '        </nav>\n' +
      '        <span class="label">' + esc(post.category) + '</span>\n' +
      '        <h1>' + esc(post.title) + '</h1>\n' +
      '        <p class="blog-meta">By Agon Mustafaj · ' + esc(formatDate(post.date)) + '</p>\n' +
      '        <div class="blog-content">\n          ' +
      bodyToHtml(post.body) +
      '\n        </div>\n' +
      '        <p style="margin-top:2.5rem"><a href="/blog/" class="btn btn-secondary">← Back to Blog</a></p>\n' +
      '      </div>\n' +
      '    </article>\n' +
      '  </main>\n' +
      '  <div id="site-footer"></div>\n' +
      '  <script src="/js/data.js?v=20261008a"></script>\n' +
      '  <script src="/js/i18n.js?v=20261008a"></script>\n' +
      '  <script src="/js/script.js?v=20261011d"></script>\n' +
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

  function publish(post, token) {
    var listingCard =
      '          <article class="article-card reveal">\n' +
      '            <span class="label">' + esc(post.category) + '</span>\n' +
      '            <h3><a href="/blog/' + post.slug + '/">' + esc(post.title) + '</a></h3>\n' +
      '            <p>' + esc(post.description) + '</p>\n' +
      '            <p class="text-muted" style="margin-top:0.75rem;font-size:0.8rem">By Agon Mustafaj · ' + esc(formatDate(post.date)) + '</p>\n' +
      '          </article>';
    var homeCard =
      '          <article class="article-card">\n' +
      '            <span class="label">' + esc(post.category) + '</span>\n' +
      '            <h3><a href="/blog/' + post.slug + '/">' + esc(post.title) + '</a></h3>\n' +
      '            <p>' + esc(post.shortText) + '</p>\n' +
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
        gh(token, 'GET', '/repos/' + REPO + '/git/ref/heads/main')
      ]);
    }).then(function (parts) {
      var blogIndex = parts[0];
      var home = parts[1];
      var sitemap = parts[2];
      var ref = parts[3];
      var parent = ref.object.sha;
      var needle = '"blogPost": [';
      if (!blogIndex || blogIndex.indexOf(needle) === -1) throw new Error('Lista e blogut nuk u gjet.');
      blogIndex = blogIndex.replace(needle, needle + '\n          ' + schemaItem + ',');
      return gh(token, 'GET', '/repos/' + REPO + '/git/commits/' + parent).then(function (commit) {
        return { blogIndex: blogIndex, home: home, sitemap: sitemap, parent: parent, tree: commit.tree.sha };
      });
    }).then(function (state) {
      var files = [
        { path: 'blog/' + post.slug + '/index.html', content: buildPostHtml(post) },
        { path: 'blog/index.html', content: insertAtMark(state.blogIndex, listingCard) },
        { path: 'index.html', content: insertAtMark(state.home, homeCard) },
        { path: 'sitemap.xml', content: insertAtMark(state.sitemap, sitemapBlock) }
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

  function showEditor() {
    loginPanel.hidden = true;
    editorPanel.hidden = false;
    tokenInput.value = localStorage.getItem(TOKEN_KEY) || '';
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
      showEditor();
    }).catch(function () {
      setStatus('Hyrja nuk u krye.', true);
    });
  });

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
    editorPanel.hidden = true;
    loginPanel.hidden = false;
    setStatus('');
  });

  postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var token = (tokenInput.value || '').trim();
    var title = titleInput.value.trim();
    var slug = slugify(slugInput.value);
    var body = document.getElementById('post-body').value.trim();
    var category = document.getElementById('post-category').value.trim() || 'Blog';
    var description = document.getElementById('post-description').value.trim();
    var lang = document.getElementById('post-lang').value;

    if (!token) {
      setStatus('Vendos tokenin e GitHub-it. Pa të, faqja statike nuk mund të publikojë.', true);
      return;
    }
    if (!title || !slug || !body) {
      setStatus('Titulli, slug-u dhe teksti janë të nevojshëm.', true);
      return;
    }
    if (!description) {
      var plain = body.replace(/^## /gm, '').replace(/\s+/g, ' ').trim();
      description = plain.slice(0, 155);
    }

    var post = {
      title: title,
      slug: slug,
      body: body,
      category: category,
      description: description,
      shortText: description.slice(0, 110),
      lang: lang,
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
      tokenInput.value = token;
    }).catch(function (error) {
      setStatus(error.message || 'Publikimi dështoi.', true);
    }).then(function () {
      button.disabled = false;
    });
  });

  if (sessionStorage.getItem(SESSION_KEY) === '1') showEditor();
})();
