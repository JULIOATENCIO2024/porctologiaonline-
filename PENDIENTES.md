# Pendientes — proctologiaonline.com (21-nov-2026)

Todo se cambia en `src/data/site.ts` y se recompila (`pnpm build`). Mientras un dato esté vacío, el sitio funciona
pero ese elemento no aparece (o el botón lleva al bloque «Agendar» de la misma página).

## Datos del BUILD §0 (no se inventaron)
| # | Dato | Campo en `site.ts` | Efecto mientras falte |
|---|---|---|---|
| 1 | WhatsApp internacional de agenda (`51XXXXXXXXX`) | `WHATSAPP_INTL` | **Los botones de WhatsApp no abren chat**: van a `#agendar`. Es lo primero que hay que llenar. |
| 2 | Link de pago USD 50 | `PAY_LINK_USD50` | El botón «Pagar» va a `#agendar`. |
| 3 | Píxel de Meta nuevo | `META_PIXEL_ID` | No se carga Meta. |
| 4 | Píxel de TikTok nuevo | `TIKTOK_PIXEL_ID` | No se carga TikTok. |
| 5 | GA4 y Google Ads (+ etiqueta de la conversión «Clic WhatsApp/Pago – Proctología Online») | `GA4_ID`, `AW_ID`, `CONTACT_LABEL` | No se carga gtag. |
| 6 | Apellidos, CMP, RNE y foto de la **Dra. Andrea**; RNE de la Dra. Xiomara Lazo Lock | `doctors` | Ficha sin CMP; en FR la landing usa la foto del equipo. |
| 7 | Horarios de teleconsulta por idioma (hora de Lima) | `hours` | La página de contacto no muestra horario. |
| — | Microsoft Clarity | `CLARITY_ID` | No se carga. |
| — | Video corto del médico para landings de Meta/TikTok | `LP_VIDEO` | Se muestra la foto del equipo. |
| — | Logo en archivo | `src/components/Logo.astro` | Logo en texto. |

Los píxeles de Meta y TikTok hay que crearlos en Business Manager / TikTok Ads Manager (lo hace el dueño de la
cuenta); luego se pegan los IDs aquí.

**Ojo con Meta:** en la red de la Proctológica, Meta descarta `Lead` y `Contact` por la categoría de salud. El código
dispara `Lead` sin parámetros, como pide el BUILD, pero la optimización real en Meta será por clic a WhatsApp.

## Decisiones de redacción que hay que confirmar con la clínica
- Reprogramación sin costo avisando con **24 horas** (términos ES/EN). Si el paciente no se conecta sin avisar, la cita
  cuenta como realizada.
- Reembolso total si la teleconsulta no se realiza por causa del equipo médico.
- No se graba la videollamada (salvo permiso expreso).
- En inglés: no se factura a aseguradoras de EE. UU./Canadá; el médico tiene licencia en Perú, no en el país del paciente
  (se presenta como *second opinion and medical guidance*).
- Plataforma de videollamada: no se nombra («enlace privado»).

## Revisión médica antes de publicar
- Referencias de las 21 páginas de enfermedad: escritas por los redactores sin abrir cada enlace. Revisar que los
  DOI/URL abran (ASCRS, ESCP, NICE, SNFCP, CDC, NHS).
- Mención de «laxantes» como clase (sin nombres) en estreñimiento y de la vacuna VPH «según tu país» en condilomas.
- Revisión nativa del inglés y del francés.

## Despliegue
- Dominio `proctologiaonline.com` en SiteGround: subir el ZIP a `public_html` (incluye `.htaccess`).
- Search Console: enviar `https://proctologiaonline.com/sitemap.xml`.
- Probar el schema en Rich Results Test con la URL publicada.
- Google Ads: las URL finales de los anuncios son las de `/lp/g/…`; Meta `/lp/m/…`; TikTok `/lp/t/…` (lista en README).
