// Tipos del contenido. Cada idioma tiene sus archivos en src/content/<lang>/ con la MISMA forma.
// Reglas de contenido (BUILD §8): nada de prometer resultados, ni recetas en línea, ni «rápido», «inmediato»,
// «sin dolor», «cura definitiva», «100 %», «gratis». Nombres de fármacos: no.

export type Lang = 'es' | 'en' | 'fr';

export type Faq = { q: string; a: string };
export type Ref = { label: string; url: string };
export type Section = {
  h2: string;
  paras?: string[]; // párrafos (texto plano; se permite <strong> y <a href="/...">)
  list?: string[]; // viñetas
};

// Claves de las 7 enfermedades (mismo orden en los 3 idiomas).
export type ConditionKey =
  | 'hemorroides'
  | 'fisura'
  | 'fistula'
  | 'condilomas'
  | 'sangrado'
  | 'picazon'
  | 'estrenimiento';

// Página de enfermedad. Estructura obligatoria (BUILD §3):
// qué es (3 líneas) → señales para consultar → qué se resuelve por videollamada y qué no → cómo es la teleconsulta
// (lo pone la plantilla) → quién te atiende (plantilla) → precio USD 50 (plantilla) → FAQ (5) → CTA (plantilla).
export type Condition = {
  key: ConditionKey;
  slug: string; // sin barras, p. ej. 'fisura-anal' (en EN/FR el slug del BUILD §3)
  navLabel: string; // nombre corto para el menú «Especialidades»
  title: string; // <title> ≤ 60 caracteres
  description: string; // meta description 140–160 caracteres
  h1: string;
  whatIs: string; // «qué es» en ~3 líneas (1 párrafo de 50–70 palabras)
  signs: { intro: string; list: string[] }; // señales para consultar (5–7)
  online: { can: string[]; cannot: string[]; note: string }; // qué se resuelve por videollamada y qué no
  urgent: string[]; // señales de alarma = ir a urgencias, no esperar teleconsulta (3–4)
  sections: Section[]; // 3–5 secciones de profundidad (causas, opciones de tratamiento en general, prevención, etc.)
  faqs: Faq[]; // exactamente 5
  refs: Ref[]; // 3–5 referencias reales (ASCRS, ESCP, SNFCP, NICE, etc.) con URL real
};

// Páginas generales. Las partes con datos (pasos, precio, equipo, botones) las pone la plantilla;
// aquí va el texto propio de cada página.
export type GeneralKey =
  | 'home'
  | 'how'
  | 'price'
  | 'team'
  | 'secondOpinion'
  | 'treatmentLima'
  | 'faq'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'consent';

export type Page = {
  key: GeneralKey;
  slug: string; // '' para inicio; 'legal/terminos' etc. para legales
  title: string; // ≤ 60 caracteres
  description: string; // 140–160 caracteres
  h1: string;
  lead: string; // bajada bajo el H1 (1–2 frases)
  sections: Section[];
  faqs?: Faq[];
};

// Grupos de landings de pauta (BUILD §4).
export type LandingKey = 'proctologo' | 'hemorroides' | 'fisura' | 'fistula' | 'condilomas' | 'segunda-opinion';

export type Landing = {
  key: LandingKey;
  slugG: string; // slug de la landing de Google en ese idioma (ES: 'proctologo'; EN: 'colorectal-specialist'; …)
  slugM: string; // slug de Meta
  slugT: string; // slug de TikTok ('' si no hay TikTok: condilomas)
  google: {
    title: string; // <title>, repite la búsqueda
    h1: string; // repite la búsqueda, p. ej. «Fisura anal: consulta con proctólogo por videollamada»
    lead: string; // 1–2 frases
    bullets: string[]; // 4–5 viñetas de qué obtienes
    body: Section[]; // 2–3 secciones cortas (texto largo permitido en Google)
    faqs: Faq[]; // 3–4
  };
  meta: {
    title: string;
    hook: string; // frase que normaliza el síntoma (≤ 20 palabras)
    text: string; // 2–3 frases
    bullets: string[]; // 3
  };
  tiktok: {
    title: string;
    hook: string; // ≤ 12 palabras
    text: string; // ≤ 60 palabras
  };
};

// Textos de interfaz por idioma.
export type Ui = {
  langName: string;
  nav: { how: string; specialties: string; team: string; price: string; faq: string; book: string };
  trust: string[]; // 3 partes del bloque de confianza
  steps: { title: string; text: string }[]; // 4 pasos: escribes → pagas → videollamada → informe
  stepsTitle: string;
  priceBox: { title: string; amount: string; per: string; includes: string[]; refund: string; cta: string; payCta: string };
  whoTitle: string; // «Quién te atiende»
  onlineCanTitle: string;
  onlineCannotTitle: string;
  signsTitle: string;
  urgentTitle: string;
  howTitle: string; // «Cómo es la teleconsulta»
  faqTitle: string;
  refsTitle: string;
  reviewedBy: string; // «Revisado por»
  reviewedOn: string; // «Fecha de revisión»
  attendedBy: string; // «Te atiende»
  ctaTitle: string;
  ctaText: string;
  whatsappCta: string;
  footerLegal: string; // aviso legal Ley 30421 (BUILD §8.7) en el idioma
  footerLinks: { terms: string; privacy: string; consent: string; contact: string };
  rights: string;
  breadcrumbHome: string;
  waMsg: string; // «Hola, quiero agendar una teleconsulta» (sin síntomas)
  cookie?: { text: string; accept: string; reject: string; more: string }; // solo FR
  lpNoMenu: string; // texto pequeño de pie en landings
  skip: string; // «Saltar al contenido»
  menuOpen: string;
};
