// robots.txt: bloquea las landings de pauta /lp/ (también tienen noindex). AdsBot de Google no sigue la regla «*».
import { site } from '../data/site';

export const GET = () =>
  new Response(
    `User-agent: *\nDisallow: /lp/\nDisallow: /en/lp/\nDisallow: /fr/lp/\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
