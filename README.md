# proctologiaonline.com

Teleconsulta con proctólogos de la Clínica Proctológica de Lima, en español, inglés y francés. Encargo:
`BUILD_proctologiaonline.md`. Pendientes del cliente: `PENDIENTES.md`.

## Uso
```
pnpm install
pnpm build        # genera dist/ (HTML estático)
pnpm preview      # http://localhost:4402
```
Despliegue: ZIP del contenido de `dist/` a `public_html` de SiteGround (incluye `.htaccess`).

## Dónde está cada cosa
| Qué | Archivo |
|---|---|
| Datos del negocio, IDs de medición (TODO), médicos con CMP/RNE | `src/data/site.ts` |
| Forma del contenido | `src/data/types.ts` |
| Textos por idioma: enfermedades | `src/content/{es,en,fr}/conditions.ts` |
| Textos por idioma: páginas, landings e interfaz | `src/content/{es,en,fr}/pages.ts` |
| Tabla de rutas, hreflang, selector de idioma | `src/lib/routes.ts` |
| JSON-LD (MedicalOrganization, Physician, MedicalWebPage, FAQPage, Offer) | `src/lib/schema.ts` |
| Plantilla de todas las páginas | `src/pages/[...path].astro` + `src/layouts/Base.astro` |
| Medición (GA4/Ads, Meta, TikTok, Clarity, clic + 300 ms) | `src/components/Tracking.astro` |
| Banner de cookies de /fr/ | `src/components/Cookie.astro` |
| Sitemaps por idioma, robots, llms.txt | `src/pages/sitemap*.ts`, `robots.txt.ts`, `[...llms].txt.ts` |
| Redacción (brief que se dio a los redactores) | `BRIEF_CONTENIDO.md` |

## Páginas (54 indexables)
11 páginas generales + 7 enfermedades por idioma. Sitemaps: `/sitemap.xml` (índice), `/sitemap-es.xml`,
`/sitemap-en.xml`, `/sitemap-fr.xml`.

## Landings de pauta (51, `noindex`, fuera del sitemap y bloqueadas en robots.txt)
`g` = Google Ads · `m` = Meta · `t` = TikTok (condilomas no va en TikTok).

| Grupo | Español | Inglés | Francés |
|---|---|---|---|
| Proctólogo | `/lp/{g,m,t}/proctologo/` | `/en/lp/{g,m,t}/colorectal-specialist/` | `/fr/lp/{g,m,t}/proctologue/` |
| Hemorroides | `/lp/{g,m,t}/hemorroides/` | `/en/lp/{g,m,t}/hemorrhoids/` | `/fr/lp/{g,m,t}/hemorroides/` |
| Fisura anal | `/lp/{g,m,t}/fisura/` | `/en/lp/{g,m,t}/anal-fissure/` | `/fr/lp/{g,m,t}/fissure-anale/` |
| Fístula anal | `/lp/{g,m,t}/fistula/` | `/en/lp/{g,m,t}/anal-fistula/` | `/fr/lp/{g,m,t}/fistule-anale/` |
| Condilomas | `/lp/{g,m}/condilomas/` | `/en/lp/{g,m}/anal-warts/` | `/fr/lp/{g,m}/condylomes/` |
| Segunda opinión | `/lp/{g,m,t}/segunda-opinion/` | `/en/lp/{g,m,t}/second-opinion/` | `/fr/lp/{g,m,t}/deuxieme-avis/` |

Mensaje precargado de WhatsApp: `Hola, quiero agendar una teleconsulta (ES · lp-g-fisura)`. La enfermedad solo viaja a
WhatsApp; los píxeles reciben únicamente PageView y el clic (sin parámetros).

## Medición
Solo se carga lo que tenga ID en `site.ts`. Clic a `wa.me`, `tel:` o al link de pago → `trackContact()` (conversión de
Ads, `fbq('track','Lead')`, `ttq.track('Contact')`) y apertura a los 300 ms. En `/fr/` Meta, TikTok y Clarity esperan a
«Accepter» (consentimiento de Google en `denied` hasta entonces).
