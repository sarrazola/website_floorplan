const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
  const body = fs.readFileSync(sitemapPath, 'utf8');

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.status(200).send(body);
};
