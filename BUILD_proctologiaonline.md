# BUILD — proctologiaonline.com
**Encargo para Claude Code · v1 · 21-nov-2026 · Dueño: Dr. Julio Atencio (CEO)**

Web global de **teleconsulta con proctólogos de la Clínica Proctológica de Lima**. La atención se da desde Perú, por videollamada, en **3 idiomas**:

| Idioma | Ruta | Quién atiende | Mercados objetivo |
|---|---|---|---|
| Español | `/` (raíz) | Equipo completo: Dra. Milagros Quinto, Dra. Diana, Dra. Estrada, Dr. Hristo, Dra. Xiomara, Dra. Andrea | México, Colombia, Ecuador, Bolivia, Chile, Centroamérica, Perú (provincias), hispanos en EE. UU. y España |
| Inglés | `/en/` | Dra. Milagros Quinto | EE. UU. y Canadá (solo como *second opinion* y viaje a Lima para tratamiento), Caribe angloparlante |
| Francés | `/fr/` | Dra. Andrea | África francófona (Senegal, Costa de Marfil, Camerún, Marruecos), Haití, Quebec (*second avis*) |

**Oferta única:** teleconsulta de 30 minutos por videollamada · **USD 50** · pago con link antes de la cita · informe escrito con plan al terminar · si hace falta examen o cirugía, se coordina en Lima o se indica qué pedir al médico local.

---

## 0. Antes de empezar: datos pendientes (marcarlos como `TODO` en el código, nunca inventarlos)
1. `WHATSAPP_INTL` — número de WhatsApp internacional de agenda (formato `51XXXXXXXXX`).
2. `PAY_LINK_USD50` — link de pago (Mercado Pago, PayPal, Stripe o SaludPay).
3. `META_PIXEL_ID` — píxel de Meta nuevo para esta web (lo crea Claude en el chat).
4. `TIKTOK_PIXEL_ID` — píxel de TikTok nuevo para esta web (lo crea Claude en el chat).
5. `GA4_ID` y `AW_ID` — propiedad GA4 y conversión de Google Ads de la cuenta nueva.
6. Nombre completo, CMP, RNE y foto de cada médico (hoy solo está confirmado: Dra. Milagros Quinto).
7. Horarios de teleconsulta por idioma (en hora de Lima, UTC−5).

---

## 1. Stack y despliegue (igual que las otras webs del grupo)
- **Astro 5 + Tailwind**, HTML estático, sin WordPress.
- Hosting **SiteGround** (`public_html`), entrega en ZIP + repo en GitHub (`main`).
- Rendimiento: LCP < 2,5 s en móvil, imágenes WebP/AVIF, fuentes con `font-display: swap`.
- Accesibilidad AA: contraste, `alt` en todas las imágenes, foco visible.

## 2. Diseño: clonar la línea de clinicaproctologicalima.com
Tomar como referencia visual **https://clinicaproctologicalima.com/** (no copiar textos, reescribirlos):
- Tipografía: **Fraunces** (títulos) + **Figtree** (texto).
- Color principal verde `#1E6E25` (botones), texto `#1F2937`, fondos blancos y verde muy claro.
- Logo: «Proctología Online» con la línea «by Clínica Proctológica Lima» (pedir archivo; mientras tanto, texto).
- Header: logo · Cómo funciona · Especialidades ▾ · Equipo · Precio · Preguntas · selector de idioma ES/EN/FR · botón verde **«Agendar teleconsulta»**.
- Botón flotante de WhatsApp en móvil.
- Bloque de confianza fijo en cada página: «Proctólogos colegiados en Perú (CMP/RNE) · Clínica Proctológica de Lima, San Isidro · Atención por videollamada privada».

## 3. Mapa del sitio (mismas páginas en los 3 idiomas, con `hreflang`)

| Página | ES | EN | FR |
|---|---|---|---|
| Inicio | `/` | `/en/` | `/fr/` |
| Cómo funciona (4 pasos: escribes → pagas → videollamada → informe) | `/como-funciona/` | `/en/how-it-works/` | `/fr/comment-ca-marche/` |
| Precio y pago (USD 50, qué incluye, reembolso si no se realiza) | `/precio/` | `/en/price/` | `/fr/tarif/` |
| Equipo (fichas con CMP/RNE) | `/equipo/` | `/en/dr-milagros-quinto/` | `/fr/dre-andrea/` |
| Hemorroides | `/hemorroides/` | `/en/hemorrhoids/` | `/fr/hemorroides/` |
| Fisura anal | `/fisura-anal/` | `/en/anal-fissure/` | `/fr/fissure-anale/` |
| Fístula anal y absceso | `/fistula-anal/` | `/en/anal-fistula/` | `/fr/fistule-anale/` |
| Condilomas / verrugas anales | `/condilomas/` | `/en/anal-warts/` | `/fr/condylomes/` |
| Sangrado anal: cuándo consultar | `/sangrado-anal/` | `/en/rectal-bleeding/` | `/fr/saignement-anal/` |
| Picazón anal | `/picazon-anal/` | `/en/anal-itching/` | `/fr/demangeaisons-anales/` |
| Estreñimiento y piso pélvico | `/estrenimiento-cronico/` | `/en/chronic-constipation/` | `/fr/constipation-chronique/` |
| Segunda opinión antes de operarte | `/segunda-opinion/` | `/en/second-opinion/` | `/fr/deuxieme-avis/` |
| Tratarte en Lima (viaje, cirugía, costos de referencia) | `/tratamiento-en-lima/` | `/en/treatment-in-lima/` | `/fr/traitement-a-lima/` |
| Preguntas frecuentes | `/preguntas/` | `/en/faq/` | `/fr/faq/` |
| Contacto | `/contacto/` | `/en/contact/` | `/fr/contact/` |
| Legales: términos, privacidad, consentimiento de telemedicina | `/legal/...` | `/en/legal/...` | `/fr/legal/...` |

**Estructura de cada página de enfermedad:** qué es (3 líneas) → señales para consultar → qué se puede resolver por videollamada y qué no → cómo es la teleconsulta → quién te atiende (con CMP) → precio USD 50 → FAQ (5) → CTA. Autoría médica visible y fecha de revisión.

## 4. Landings de pauta (una por canal y por grupo de palabras)
Carpeta `/lp/`, con `noindex`, sin menú, un solo objetivo: **escribir por WhatsApp o pagar**. Fuera del sitemap.

| Grupo | Google Ads | Meta | TikTok |
|---|---|---|---|
| Proctólogo / consulta | `/lp/g/proctologo/` · `/en/lp/g/colorectal-specialist/` · `/fr/lp/g/proctologue/` | `/lp/m/proctologo/` (+ EN/FR) | `/lp/t/proctologo/` (+ EN/FR) |
| Hemorroides | `/lp/g/hemorroides/` (+ EN/FR) | `/lp/m/hemorroides/` | `/lp/t/hemorroides/` |
| Fisura anal | `/lp/g/fisura/` (+ EN/FR) | `/lp/m/fisura/` | `/lp/t/fisura/` |
| Fístula anal | `/lp/g/fistula/` (+ EN/FR) | `/lp/m/fistula/` | `/lp/t/fistula/` |
| Condilomas | `/lp/g/condilomas/` (+ EN/FR) | `/lp/m/condilomas/` | — (TikTok no) |
| Segunda opinión / cirugía en Lima | `/lp/g/segunda-opinion/` (+ EN/FR) | `/lp/m/segunda-opinion/` | `/lp/t/segunda-opinion/` |

**Diferencias por canal:**
- **Google (`/lp/g/`):** título que repite la búsqueda («Fisura anal: consulta con proctólogo por videollamada»), precio arriba, 3 pasos, médico con CMP, FAQ corta. Texto largo permitido.
- **Meta (`/lp/m/`):** primera pantalla con video corto del médico, frase que normaliza el síntoma, botón WhatsApp grande. Muy corta.
- **TikTok (`/lp/t/`):** vertical, video arriba, 1 botón, menos de 150 palabras.

**Mensaje precargado de WhatsApp:** incluir idioma y landing, sin síntomas: `Hola, quiero agendar una teleconsulta (ES · lp-g-fisura)`. La enfermedad viaja solo a nuestro WhatsApp, nunca a los píxeles.

## 5. Palabras clave (Ahrefs, volumen mensual, 21-nov-2026)

| Mercado | Palabra | Volumen | CPC (USD) |
|---|---|---|---|
| México | hemorroides externas | 20 000 | 0,25 |
| México | proctólogo | 12 000 | 0,35 |
| México | fisura anal | 9 900 | 0,15 |
| México | hemorroides tratamiento | 8 100 | 0,10 |
| México | coloproctólogo | 5 500 | 0,35 |
| México | fístula anal | 4 100 | 0,20 |
| México | condilomas anales | 2 000 | 0,15 |
| Colombia | coloproctólogo | 2 000 | 0,07 |
| Colombia | hemorroides tratamiento | 1 700 | 0,06 |
| Colombia | fisura anal | 1 600 | 0,01 |
| EE. UU. | hemorrhoid treatment | 43 000 | 0,10 |
| EE. UU. | anal fissure treatment | 14 000 | 0,25 |
| EE. UU. | colorectal surgeon | 4 500 | 2,00 |
| EE. UU. | hemorrhoid doctor | 1 800 | 1,90 |
| Francia | proctologue | 19 000 | 1,00 |
| Francia | fissure anale | 20 000 | 0,02 |
| Francia | fistule anale | 18 000 | 0,06 |
| Francia | hémorroïdes traitement | 4 000 | 0,15 |

**Hallazgo clave:** «proctólogo en línea», «online proctologist» y «proctologue en ligne» tienen **volumen cero** en todos los mercados. Nadie busca la telemedicina: buscan la enfermedad. Por eso las páginas y landings se arman **por enfermedad** y lo «online» es la respuesta, no la palabra clave.

## 6. Medición (copiar tal cual en el `<head>` del layout base, con `is:inline`)
Reglas: solo `PageView` y el clic a WhatsApp o pago. **Nunca** enviar el nombre de la enfermedad, la URL de la landing como parámetro, ni datos del formulario. Meta bloquea Lead/Contact en salud: se deja igual, sin parámetros.

```html
<!-- Google (GA4 + Ads) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA4_ID"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','GA4_ID');gtag('config','AW_ID');
</script>

<!-- Meta Pixel: Proctología Online -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','META_PIXEL_ID');fbq('track','PageView');
</script>

<!-- TikTok Pixel: Proctología Online -->
<script>
!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript";o.async=!0;o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
ttq.load('TIKTOK_PIXEL_ID');ttq.page();
}(window,document,'ttq');
</script>

<!-- Clic a WhatsApp, llamada o link de pago: evento + apertura a los 300 ms -->
<script>
window.trackContact=function(){
  if(window.gtag)gtag('event','conversion',{send_to:'AW_ID/CONTACT_LABEL'});
  if(window.fbq)fbq('track','Lead');
  if(window.ttq)ttq.track('Contact');
};
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href]');if(!a)return;
  var h=a.getAttribute('href')||'';
  if(!/wa\.me|whatsapp|^tel:|PAY_LINK_USD50/i.test(h))return;
  e.preventDefault();window.trackContact();
  setTimeout(function(){
    if(a.target==='_blank'&&!/^tel:/i.test(h))window.open(a.href,'_blank');
    else window.location.href=a.href;
  },300);
});
</script>
```
- Google Ads: la etiqueta usa el nombre de conversión «Clic WhatsApp/Pago – Proctología Online».
- Agregar **Microsoft Clarity** con los campos de formulario ocultos (ID pendiente).
- Respetar el banner de cookies en `/fr/` (UE/Quebec): no cargar Meta ni TikTok hasta que la persona acepte.

## 7. SEO y GEO
- `hreflang` es / en / fr + `x-default` → `/`.
- Schema: `MedicalOrganization` (Clínica Proctológica de Lima), `Physician` por médico con `medicalSpecialty: Proctology`, `MedicalWebPage` en cada enfermedad, `FAQPage`, `Offer` con USD 50.
- Un `sitemap.xml` por idioma más el índice; `robots.txt` que bloquea `/lp/`; `llms.txt` en los 3 idiomas.
- Cada página de enfermedad: 900–1 400 palabras, autoría médica, fecha de revisión y 3–5 referencias (guías ASCRS, ESCP, SNFCP para FR).

## 8. Reglas de contenido (obligatorias)
1. **No prometer resultados ni diagnóstico sin examen.** Decir: «En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo».
2. **No ofrecer recetas en línea** en la web ni en los anuncios. Las políticas de Google y Meta para telemedicina con receta piden certificación LegitScript. La receta se menciona solo como «según la normativa de tu país».
3. Nada de «rápido», «inmediato», «sin dolor», «cura definitiva», «100 %», «gratis».
4. Nada de fotos clínicas ni de antes y después. Ilustraciones y médicos con bata.
5. Cada médico, con nombre, CMP y RNE visibles.
6. Inglés y francés **nativos**, no traducción literal (EN de EE. UU.; FR neutro, con «vous»).
7. Aviso legal en el pie: «Teleconsulta brindada desde Lima, Perú, por médicos colegiados en el Colegio Médico del Perú, conforme a la Ley N.° 30421, Ley Marco de Telesalud. No reemplaza la atención de emergencia: si tienes sangrado abundante, fiebre o dolor intenso, acude a urgencias».

## 9. Checklist de entrega
- [ ] 3 idiomas con todas las páginas de la sección 3.
- [ ] 17 landings en español + sus versiones EN/FR (sección 4), con `noindex`.
- [ ] Medición de la sección 6 con IDs reales; prueba de que `fbq` y `ttq` cargan una sola vez.
- [ ] Clic a WhatsApp y a pago dispara el evento y abre a los 300 ms.
- [ ] Sitemaps, `hreflang`, schema validado en Rich Results Test.
- [ ] Lighthouse móvil ≥ 90 en rendimiento y accesibilidad.
- [ ] ZIP para SiteGround + push a `main` + resumen de lo hecho y de los `TODO` pendientes.
