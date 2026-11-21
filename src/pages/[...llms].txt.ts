// llms.txt en los 3 idiomas (BUILD §7): /llms.txt (ES), /en/llms.txt, /fr/llms.txt.
import { content, href, pageHref, LANGS } from '../lib/routes';
import { site, doctorById, attending, docName, filled } from '../data/site';
import type { Lang } from '../data/types';

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { llms: lang === 'es' ? 'llms' : `${lang}/llms` }, props: { lang } }));
}

const INTRO: Record<Lang, string> = {
  es: `Teleconsulta de ${site.minutes} minutos por videollamada con proctólogos de la ${site.clinic.name} (San Isidro, Lima, Perú). Precio único USD ${site.priceUsd}, pago con link antes de la cita, informe escrito con plan al terminar. Médicos colegiados en el Colegio Médico del Perú (CMP/RNE), conforme a la Ley N.° 30421. No reemplaza la atención de emergencia. No se emiten recetas en línea.`,
  en: `${site.minutes}-minute video consultation with proctologists (colorectal specialists) from ${site.clinic.name} in Lima, Peru. Flat fee USD ${site.priceUsd}, paid by link before the visit, written plan afterwards. Physicians licensed in Peru (CMP/RNE), not in the patient's country: the service is a second opinion and medical guidance, and a gateway to treatment in Lima. Not for emergencies. No online prescriptions.`,
  fr: `Téléconsultation de ${site.minutes} minutes en visio avec des proctologues de la ${site.clinic.name} (Lima, Pérou). Tarif unique ${site.priceUsd} USD, paiement par lien avant le rendez-vous, compte rendu écrit après. Médecins inscrits au Collège médical du Pérou (CMP/RNE), loi n° 30421. Ne remplace pas les urgences. Aucune ordonnance en ligne.`,
};

export const GET = ({ props }: { props: { lang: Lang } }) => {
  const lang = props.lang;
  const C = content[lang];
  const abs = (p: string) => new URL(p, site.url).href;
  const docs = attending[lang].map(doctorById).map((d) => `- ${docName(d, lang)}${filled(d.cmp) ? ` — CMP ${d.cmp}` : ''}${filled(d.rne) ? ` · RNE ${d.rne}` : ''}`);
  const lines = [
    `# ${site.name} ${site.tagline}`,
    '',
    `> ${INTRO[lang]}`,
    '',
    '## ' + C.ui.nav.specialties,
    ...C.conditions.map((c) => `- [${c.navLabel}](${abs(href(lang, c.slug))}): ${c.description}`),
    '',
    '## ' + site.name,
    ...C.pages.filter((p) => !p.slug.startsWith('legal')).map((p) => `- [${p.h1}](${abs(href(lang, p.slug))}): ${p.description}`),
    '',
    '## ' + C.ui.whoTitle,
    ...docs,
    '',
    `Contact: ${site.clinic.email} · ${site.clinic.address}, ${site.clinic.district}, Lima, Perú · ${abs(pageHref(lang, 'contact'))}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
