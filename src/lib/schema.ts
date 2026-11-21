// JSON-LD (BUILD §7): MedicalOrganization, Physician por médico (medicalSpecialty Proctology),
// MedicalWebPage en cada enfermedad, FAQPage, Offer de USD 50 y BreadcrumbList.
import { site, doctors, reviewer, filled, docName, type Doctor } from '../data/site';
import type { Faq, Lang } from '../data/types';

const ORG_ID = `${site.url}/#org`;
const docId = (d: Doctor) => `${site.url}/#dr-${d.id}`;

const physician = (d: Doctor, lang: Lang) => ({
  '@type': 'Physician',
  '@id': docId(d),
  name: docName(d, lang),
  medicalSpecialty: 'Proctology',
  ...(d.photo ? { image: site.url + d.photo } : {}),
  ...(d.url ? { sameAs: [d.url] } : {}),
  identifier: [
    ...(filled(d.cmp) ? [{ '@type': 'PropertyValue', propertyID: 'CMP', value: d.cmp }] : []),
    ...(filled(d.rne) ? [{ '@type': 'PropertyValue', propertyID: 'RNE', value: d.rne }] : []),
  ],
  worksFor: { '@id': ORG_ID },
});

export const offer = (lang: Lang, url: string) => ({
  '@type': 'Offer',
  name: lang === 'en' ? 'Video consultation with a proctologist (30 min)' : lang === 'fr' ? 'Téléconsultation avec un proctologue (30 min)' : 'Teleconsulta con proctólogo (30 min)',
  price: String(site.priceUsd),
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  url,
  seller: { '@id': ORG_ID },
});

export function buildSchema(o: {
  lang: Lang;
  url: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'MedicalWebPage';
  about?: string; // nombre de la enfermedad (MedicalCondition)
  faqs?: Faq[];
  crumbs?: { name: string; url: string }[];
  physicians?: Doctor[];
  withOffer?: boolean;
}) {
  const c = site.clinic;
  const graph: Record<string, unknown>[] = [
    {
      '@type': ['MedicalOrganization', 'MedicalClinic'],
      '@id': ORG_ID,
      name: c.name,
      alternateName: site.name,
      legalName: c.legalName,
      url: site.url,
      logo: `${site.url}/favicon.png`,
      email: c.email,
      taxID: c.ruc,
      medicalSpecialty: 'Proctology',
      address: { '@type': 'PostalAddress', streetAddress: c.address, addressLocality: c.district, addressRegion: c.city, addressCountry: c.country },
      sameAs: [c.url],
      availableService: { '@type': 'MedicalProcedure', name: 'Telemedicine consultation', procedureType: 'Telemedicine' },
    },
    ...(o.physicians ?? []).map((d) => physician(d, o.lang)),
  ];
  const page: Record<string, unknown> = {
    '@type': o.type ?? 'WebPage',
    '@id': `${o.url}#page`,
    url: o.url,
    name: o.title,
    description: o.description,
    inLanguage: o.lang,
    publisher: { '@id': ORG_ID },
  };
  if (o.type === 'MedicalWebPage') {
    page.lastReviewed = site.reviewedOn;
    page.reviewedBy = physician(reviewer, o.lang);
    if (o.about) page.about = { '@type': 'MedicalCondition', name: o.about };
    page.audience = { '@type': 'Patient' };
  }
  if (o.withOffer) page.mainEntity = offer(o.lang, o.url);
  graph.push(page);
  if (o.faqs?.length)
    graph.push({
      '@type': 'FAQPage',
      '@id': `${o.url}#faq`,
      mainEntity: o.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
    });
  if (o.crumbs?.length)
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: o.crumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.url })),
    });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export const allDoctors = doctors;
