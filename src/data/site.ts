// Datos del negocio en un solo lugar (BUILD_proctologiaonline.md, 21-nov-2026).
// Todo lo marcado TODO es PENDIENTE del cliente (BUILD §0): NO inventarlo. Mientras esté vacío, el sitio compila,
// los scripts de medición no se cargan y los enlaces de WhatsApp/pago apuntan a "#agendar" (ver waHref/payHref).

export const site = {
  name: 'Proctología Online',
  tagline: 'by Clínica Proctológica Lima',
  url: 'https://proctologiaonline.com',
  priceUsd: 50,
  minutes: 30,
  // TODO(BUILD §0.1): WhatsApp internacional de agenda, formato 51XXXXXXXXX.
  WHATSAPP_INTL: '',
  // TODO(BUILD §0.2): link de pago de USD 50 (Mercado Pago, PayPal, Stripe o SaludPay).
  PAY_LINK_USD50: '',
  // TODO(BUILD §0.3–0.5): píxeles y Google nuevos de esta web.
  META_PIXEL_ID: '',
  TIKTOK_PIXEL_ID: '',
  GA4_ID: '',
  AW_ID: '',
  // TODO: etiqueta de la conversión «Clic WhatsApp/Pago – Proctología Online» en Google Ads.
  CONTACT_LABEL: '',
  // TODO(BUILD §6): Microsoft Clarity.
  CLARITY_ID: '',
  // Clínica (datos ya confirmados en las webs hermanas de la red).
  clinic: {
    name: 'Clínica Proctológica de Lima',
    legalName: 'CLINICA PROCTOLOGICA DE LIMA SAC',
    ruc: '20616704614',
    url: 'https://clinicaproctologicalima.com/',
    email: 'clinicaproctologicalima@gmail.com',
    address: 'Av. Javier Prado Este 1510',
    district: 'San Isidro',
    city: 'Lima',
    country: 'PE',
  },
  // TODO(BUILD §0.7): horarios de teleconsulta por idioma, en hora de Lima (UTC−5).
  hours: { es: '', en: '', fr: '' } as Record<string, string>,
  reviewedOn: '2026-11-21',
  // TODO(BUILD §4): video corto del médico para las landings de Meta y TikTok (MP4 vertical en /public/video/).
  // Vacío = se muestra la foto del médico.
  LP_VIDEO: { es: '', en: '', fr: '' } as Record<string, string>,
} as const;

export type Doctor = {
  id: string;
  name: string;
  cmp: string; // TODO si está vacío
  rne: string; // TODO si está vacío
  photo: string; // '' = sin foto (se muestra la inicial)
  langs: ('es' | 'en' | 'fr')[];
  url?: string;
};

// Equipo (BUILD §0.6 y tabla de idiomas). CMP/RNE tomados de las webs hermanas de la red
// (fisuraanallima.com, src/data/site.ts). Dra. Andrea: solo el nombre de pila está en el BUILD.
export const doctors: Doctor[] = [
  { id: 'milagros-quinto', name: 'Dra. Milagros Quinto', cmp: '53588', rne: '30074', photo: '/equipo/milagros-quinto.webp', langs: ['es', 'en'], url: 'https://dramilagrosquinto.com/' },
  { id: 'diana-quevedo', name: 'Dra. Diana Violeta Quevedo Reyes', cmp: '084440', rne: '047805', photo: '/equipo/diana-quevedo.webp', langs: ['es'] },
  { id: 'diana-estrada', name: 'Dra. Diana Elizabeth Estrada', cmp: '070859', rne: '052902', photo: '/equipo/diana-estrada.webp', langs: ['es'] },
  { id: 'hristo-roman', name: 'Dr. Hristo Román Vargas', cmp: '84489', rne: '52457', photo: '/equipo/hristo-roman.webp', langs: ['es'] },
  // Sin RNE publicado: figura como médica del equipo (igual que en las webs hermanas). TODO confirmar RNE.
  { id: 'xiomara-lazo', name: 'Dra. Jhossebely Xiomara Lazo Lock', cmp: '089957', rne: '', photo: '/equipo/xiomara-lazo.webp', langs: ['es'] },
  // TODO(BUILD §0.6): apellidos, CMP, RNE y foto de la Dra. Andrea.
  { id: 'andrea', name: 'Dra. Andrea', cmp: '', rne: '', photo: '', langs: ['es', 'fr'] },
];

export const doctorById = (id: string) => doctors.find((d) => d.id === id)!;

// Revisora médica de los contenidos (confirmada como revisora en las webs hermanas): Dra. Milagros Quinto.
export const reviewer = doctorById('milagros-quinto');
// Quién atiende en cada idioma (tabla del BUILD).
export const attending: Record<'es' | 'en' | 'fr', string[]> = {
  es: ['milagros-quinto', 'diana-quevedo', 'diana-estrada', 'hristo-roman', 'xiomara-lazo', 'andrea'],
  en: ['milagros-quinto'],
  fr: ['andrea'],
};

export const filled = (v: string | undefined) => !!v && v.trim() !== '' && !/TODO/.test(v);

// Mensaje precargado de WhatsApp: idioma + landing, SIN síntomas (BUILD §4).
export const waHref = (msg: string) =>
  filled(site.WHATSAPP_INTL) ? `https://wa.me/${site.WHATSAPP_INTL}?text=${encodeURIComponent(msg)}` : '#agendar';
export const payHref = () => (filled(site.PAY_LINK_USD50) ? site.PAY_LINK_USD50 : '#agendar');

// Nombre del médico según idioma (Dra. → Dr. en inglés, Dre en francés).
export const docName = (d: Doctor, lang: 'es' | 'en' | 'fr') => {
  if (lang === 'es') return d.name;
  const bare = d.name.replace(/^Dra?\.\s*/, '');
  const fem = d.name.startsWith('Dra.');
  return lang === 'en' ? `Dr. ${bare}` : `${fem ? 'Dre' : 'Dr'} ${bare}`;
};
