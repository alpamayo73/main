export default function handler(req, res) {
  const robots = `User-agent: *
Allow: /

Sitemap: https://thealpamayo.com/api/sitemap`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();
}
