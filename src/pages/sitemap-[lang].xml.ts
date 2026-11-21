// Un sitemap por idioma (BUILD §7), con hreflang. Las landings /lp/ quedan fuera.
import type { APIRoute } from 'astro';
import { routes, alternates, LANGS } from '../lib/routes';
import { site } from '../data/site';

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const abs = (p: string) => new URL(p, site.url).href;
  const items = routes
    .filter((r) => r.lang === params.lang && r.kind !== 'lp')
    .map((r) => {
      const alts = alternates(r);
      const links = LANGS.filter((l) => alts[l])
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(alts[l]!)}"/>`)
        .concat(alts.es ? [`<xhtml:link rel="alternate" hreflang="x-default" href="${abs(alts.es)}"/>`] : [])
        .join('');
      return `<url><loc>${abs(r.path)}</loc><lastmod>${site.reviewedOn}</lastmod>${links}</url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${items}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
