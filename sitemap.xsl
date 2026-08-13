<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>XML Sitemap — Agon Mustafaj</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #444;
            margin: 0;
            padding: 0;
            background: #fff;
          }
          #sitemap {
            max-width: 980px;
            margin: 40px auto;
            padding: 0 20px;
          }
          h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 8px;
            color: #23282d;
          }
          .expl {
            margin: 0 0 24px;
            color: #555;
            font-size: 14px;
            line-height: 1.5;
          }
          .expl a { color: #2271b1; text-decoration: none; }
          .expl a:hover { text-decoration: underline; }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #eee;
            font-size: 14px;
          }
          thead th {
            background: #2271b1;
            color: #fff;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
          }
          tbody tr:nth-child(even) { background: #f9f9f9; }
          tbody tr:hover { background: #f0f6fc; }
          td {
            padding: 10px 14px;
            border-top: 1px solid #eee;
            vertical-align: top;
          }
          td a {
            color: #2271b1;
            text-decoration: none;
            word-break: break-all;
          }
          td a:hover { text-decoration: underline; }
          .footer {
            margin-top: 24px;
            font-size: 13px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div id="sitemap">
          <h1>XML Sitemap</h1>
          <p class="expl">
            This XML Sitemap contains
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
            URLs for
            <a href="https://agonmustafaj.com/">agonmustafaj.com</a>.
          </p>

          <table>
            <thead>
              <tr>
                <th style="width:70%">URL</th>
                <th style="width:20%">Last Modified</th>
                <th style="width:10%">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <p class="footer">Generated for Agon Mustafaj — Computer Science × SEO × Web × Data</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
