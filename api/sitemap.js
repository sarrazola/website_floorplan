const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const sitemapPath = path.join(process.cwd(), 'data', 'sitemap.xml');
  const body = fs.readFileSync(sitemapPath, 'utf8');

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.status(200).send(body);
};
