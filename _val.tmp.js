const fs = require('fs');
const entities = require('./scripts/schema-entities');
const ordered = [entities.find(e => e['@id'].endsWith('#agodev'))].concat(entities.filter(e => !e['@id'].endsWith('#agodev')));
const html = '<html><head><script type="application/ld+json">' +
  JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'WebPage', '@id': 'https://agonmustafaj.com/#webpage', url: 'https://agonmustafaj.com/', name: 'Home' }].concat(ordered) }) +
  '</script></head><body></body></html>';
fetch('https://validator.schema.org/validate', { method: 'POST', body: new URLSearchParams({ html }) })
  .then(r => r.text())
  .then(t => {
    const data = JSON.parse(t.replace(/^\)\]\}'\s*/, ''));
    console.log('top-level items:', data.tripleGroups.map(g => g.type).join(', '));
  });
