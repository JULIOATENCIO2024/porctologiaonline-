// Tabla única de rutas de los 3 idiomas: páginas, enfermedades y landings de pauta.
// De aquí salen el catch-all ([...path].astro), los hreflang, el selector de idioma, los sitemaps y llms.txt.
import type { Lang, Condition, Page, Landing, Ui } from '../data/types';
import * as esC from '../content/es/conditions';
import * as enC from '../content/en/conditions';
import * as frC from '../content/fr/conditions';
import * as esP from '../content/es/pages';
import * as enP from '../content/en/pages';
import * as frP from '../content/fr/pages';

export const LANGS: Lang[] = ['es', 'en', 'fr'];
export const HTML_LANG: Record<Lang, string> = { es: 'es', en: 'en-US', fr: 'fr' };
export const OG_LOCALE: Record<Lang, string> = { es: 'es_LA', en: 'en_US', fr: 'fr_FR' };

export const content: Record<Lang, { conditions: Condition[]; pages: Page[]; landings: Landing[]; ui: Ui }> = {
  es: { conditions: esC.conditions, pages: esP.pages, landings: esP.landings, ui: esP.ui },
  en: { conditions: enC.conditions, pages: enP.pages, landings: enP.landings, ui: enP.ui },
  fr: { conditions: frC.conditions, pages: frP.pages, landings: frP.landings, ui: frP.ui },
};

export const prefix = (lang: Lang) => (lang === 'es' ? '/' : `/${lang}/`);
export const href = (lang: Lang, slug: string) => prefix(lang) + (slug ? `${slug.replace(/^\/|\/$/g, '')}/` : '');

export type Channel = 'g' | 'm' | 't';
export type Route =
  | { kind: 'page'; lang: Lang; key: Page['key']; path: string }
  | { kind: 'condition'; lang: Lang; key: Condition['key']; path: string }
  | { kind: 'lp'; lang: Lang; key: Landing['key']; channel: Channel; path: string };

const lpSlug = (l: Landing, ch: Channel) => (ch === 'g' ? l.slugG : ch === 'm' ? l.slugM : l.slugT);

export const routes: Route[] = LANGS.flatMap((lang) => {
  const c = content[lang];
  const r: Route[] = [];
  for (const p of c.pages) r.push({ kind: 'page', lang, key: p.key, path: href(lang, p.slug) });
  for (const d of c.conditions) r.push({ kind: 'condition', lang, key: d.key, path: href(lang, d.slug) });
  for (const l of c.landings)
    for (const ch of ['g', 'm', 't'] as Channel[]) {
      const s = lpSlug(l, ch);
      if (s) r.push({ kind: 'lp', lang, key: l.key, channel: ch, path: href(lang, `lp/${ch}/${s}`) });
    }
  return r;
});

// Rutas equivalentes en los otros idiomas (para hreflang y el selector ES/EN/FR).
export const alternates = (r: Route): Partial<Record<Lang, string>> => {
  const out: Partial<Record<Lang, string>> = {};
  for (const x of routes)
    if (x.kind === r.kind && x.key === r.key && (x.kind !== 'lp' || (r.kind === 'lp' && x.channel === r.channel)))
      out[x.lang] = x.path;
  return out;
};

export const pageHref = (lang: Lang, key: Page['key']) => {
  const p = content[lang].pages.find((x) => x.key === key);
  return p ? href(lang, p.slug) : prefix(lang);
};
export const conditionHref = (lang: Lang, key: Condition['key']) => {
  const d = content[lang].conditions.find((x) => x.key === key);
  return d ? href(lang, d.slug) : prefix(lang);
};

// Página de enfermedad relacionada con cada landing (para el enlace de «más información» y el schema).
export const LP_CONDITION: Partial<Record<Landing['key'], Condition['key']>> = {
  hemorroides: 'hemorroides',
  fisura: 'fisura',
  fistula: 'fistula',
  condilomas: 'condilomas',
};

// Etiqueta corta para el mensaje de WhatsApp: «lp-g-fisura» (BUILD §4). Sin síntomas.
export const lpTag = (r: Route) => (r.kind === 'lp' ? `lp-${r.channel}-${r.key}` : r.kind === 'condition' ? `web-${r.key}` : `web-${r.key}`);
