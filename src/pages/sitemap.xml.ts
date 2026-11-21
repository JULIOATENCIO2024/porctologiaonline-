// Índice de sitemaps (uno por idioma).
import { LANGS } from '../lib/routes';
import { site } from '../data/site';

export const GET = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${LANGS.map((l) => `<sitemap><loc>${site.url}/sitemap-${l}.xml</loc><lastmod>${site.reviewedOn}</lastmod></sitemap>`).join('\n')}\n</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
