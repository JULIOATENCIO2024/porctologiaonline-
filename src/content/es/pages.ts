import type { Ui, Page, Landing } from '../../data/types';

// Español neutro latinoamericano, con «tú». Reglas BUILD §8: sin prometer resultados ni diagnóstico sin examen,
// sin recetas en línea ni nombres de fármacos, sin palabras prohibidas.

export const ui: Ui = {
  langName: 'Español',
  nav: {
    how: 'Cómo funciona',
    specialties: 'Especialidades',
    team: 'Equipo',
    price: 'Precio',
    faq: 'Preguntas',
    book: 'Agendar teleconsulta',
  },
  trust: [
    'Proctólogos colegiados en Perú (CMP/RNE)',
    'Clínica Proctológica de Lima, San Isidro',
    'Atención por videollamada privada',
  ],
  stepsTitle: 'Cómo funciona en 4 pasos',
  steps: [
    {
      title: 'Escribes',
      text: 'Nos escribes por WhatsApp. Te preguntamos tu país y tu horario, y te proponemos una cita con un proctólogo del equipo.',
    },
    {
      title: 'Pagas',
      text: 'Recibes un link de pago de USD 50. Al confirmarse el pago, te enviamos la fecha, la hora de Lima y el enlace de la videollamada.',
    },
    {
      title: 'Videollamada',
      text: 'Durante 30 minutos el proctólogo revisa tus síntomas y tus exámenes, resuelve tus dudas y te orienta con un plan.',
    },
    {
      title: 'Informe',
      text: 'Al terminar recibes un informe escrito con el plan: medidas, tratamiento médico, exámenes a pedir o pasos para atenderte en Lima.',
    },
  ],
  priceBox: {
    title: 'Teleconsulta con proctólogo',
    amount: 'USD 50',
    per: 'por teleconsulta de 30 minutos',
    includes: [
      'Videollamada privada de 30 minutos con un proctólogo colegiado',
      'Revisión de tus síntomas, exámenes e informes previos',
      'Informe escrito con tu plan al terminar',
      'Orientación sobre exámenes o procedimientos que podrías necesitar',
      'Coordinación en Lima si hace falta examen presencial o cirugía',
    ],
    refund: 'Si la teleconsulta no se realiza por causas del equipo médico, te devolvemos el pago completo o reprogramamos, como prefieras.',
    cta: 'Agendar por WhatsApp',
    payCta: 'Pagar USD 50',
  },
  whoTitle: 'Quién te atiende',
  onlineCanTitle: 'Qué se puede resolver por videollamada',
  onlineCannotTitle: 'Qué no se puede resolver por videollamada',
  signsTitle: 'Señales para consultar',
  urgentTitle: 'Cuándo ir a urgencias sin esperar',
  howTitle: 'Cómo es la teleconsulta',
  faqTitle: 'Preguntas frecuentes',
  refsTitle: 'Referencias',
  reviewedBy: 'Revisado por',
  reviewedOn: 'Fecha de revisión',
  attendedBy: 'Te atiende',
  ctaTitle: 'Habla con un proctólogo desde tu casa',
  ctaText: 'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo.',
  whatsappCta: 'Escribir por WhatsApp',
  footerLegal:
    'Teleconsulta brindada desde Lima, Perú, por médicos colegiados en el Colegio Médico del Perú, conforme a la Ley N.° 30421, Ley Marco de Telesalud. No reemplaza la atención de emergencia: si tienes sangrado abundante, fiebre o dolor intenso, acude a urgencias.',
  footerLinks: {
    terms: 'Términos y condiciones',
    privacy: 'Política de privacidad',
    consent: 'Consentimiento de telemedicina',
    contact: 'Contacto',
  },
  rights: 'Todos los derechos reservados.',
  breadcrumbHome: 'Inicio',
  waMsg: 'Hola, quiero agendar una teleconsulta',
  lpNoMenu: 'Teleconsulta brindada desde Lima, Perú, por médicos colegiados (Ley N.° 30421). No reemplaza la atención de emergencia.',
  skip: 'Saltar al contenido',
  menuOpen: 'Abrir menú',
};

export const pages: Page[] = [
  // ───────────────────────── Inicio ─────────────────────────
  {
    key: 'home',
    slug: '',
    title: 'Proctólogo por videollamada desde Lima | USD 50',
    description:
      'Consulta con un proctólogo colegiado por videollamada: hemorroides, fisura, fístula y condilomas. 30 minutos, USD 50 e informe escrito con tu plan al terminar.',
    h1: 'Consulta con un proctólogo por videollamada, estés donde estés',
    lead: 'Hemorroides, fisura anal, fístula, condilomas, sangrado o picazón: habla con un proctólogo de la Clínica Proctológica de Lima en una videollamada privada de 30 minutos y recibe un plan por escrito.',
    sections: [
      {
        h2: 'Por qué una teleconsulta con un proctólogo',
        paras: [
          'Muchas personas pasan meses con molestias anales sin consultar: por vergüenza, porque en su ciudad no hay un proctólogo o porque la cita tarda semanas. Mientras tanto prueban remedios caseros o cremas que alguien les recomendó, sin saber qué tienen.',
          'Una teleconsulta te permite hablar con un especialista desde tu casa, en privado y sin viajar. En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo.',
          'El proctólogo (o coloproctólogo) es el médico que se dedica a las enfermedades del ano, el recto y el colon. Conoce a fondo problemas que un médico general ve pocas veces y sabe cuándo basta con medidas de higiene y dieta y cuándo hace falta un examen o un procedimiento.',
        ],
      },
      {
        h2: 'Para quién es',
        list: [
          'Para quien tiene molestias y quiere saber, de boca de un especialista, qué hacer a continuación.',
          'Para quien vive en una ciudad o un país sin proctólogo cerca, o donde la cita presencial tarda mucho.',
          'Para quien ya tiene un diagnóstico o una indicación de cirugía y quiere una <a href="/segunda-opinion/">segunda opinión</a> antes de decidir.',
          'Para quien piensa <a href="/tratamiento-en-lima/">tratarse en Lima</a> y quiere llegar con un plan claro.',
          'Para peruanos en provincias y para hispanohablantes que viven en el extranjero y prefieren consultar en su idioma.',
        ],
      },
      {
        h2: 'Qué se puede resolver por videollamada y qué no',
        paras: [
          'Por videollamada se puede conversar a fondo sobre tus síntomas, revisar exámenes e informes que ya tengas, explicarte las posibilidades más probables, darte medidas de higiene y dieta, orientarte sobre el tratamiento médico y decirte qué exámenes pedir. También sirve para valorar si una cirugía que te propusieron tiene sentido.',
          'Lo que no se puede hacer a distancia es el examen físico: el tacto rectal, la anoscopía o la colonoscopía. Por eso no damos diagnósticos definitivos sin examen. Si tu caso lo necesita, el proctólogo te dice qué examen pedir a tu médico local o cómo coordinarlo en Lima. La receta, cuando corresponde, se maneja según la normativa de tu país.',
        ],
      },
      {
        h2: 'Desde qué países puedes consultar',
        paras: [
          'Atendemos a pacientes de México, Colombia, Ecuador, Bolivia, Chile, Centroamérica, las provincias del Perú, España y a hispanohablantes en Estados Unidos. Solo necesitas un celular o una computadora con cámara y una conexión estable.',
          'La cita se agenda en hora de Lima y te la confirmamos convertida a tu hora local para que no haya confusiones.',
        ],
      },
      {
        h2: 'Qué pasa después de la videollamada',
        paras: [
          'Al terminar recibes un informe escrito con lo conversado y el plan: medidas para tus síntomas, tratamiento médico sugerido según la normativa de tu país, exámenes a solicitar y señales de alarma. Puedes llevarlo a tu médico local.',
          'Si necesitas un procedimiento o una cirugía, te explicamos cómo hacerlo en la Clínica Proctológica de Lima, en San Isidro, y qué esperar del viaje. Revisa <a href="/como-funciona/">cómo funciona</a> y el <a href="/precio/">precio</a> antes de agendar.',
        ],
      },
    ],
  },

  // ───────────────────────── Cómo funciona ─────────────────────────
  {
    key: 'how',
    slug: 'como-funciona',
    title: 'Cómo funciona la teleconsulta con proctólogo',
    description:
      'Escribes por WhatsApp, pagas USD 50 con un link, tienes tu videollamada de 30 minutos con el proctólogo y recibes un informe escrito con tu plan. Así funciona.',
    h1: 'Cómo funciona la teleconsulta con proctólogo',
    lead: 'Cuatro pasos sencillos: escribes, pagas, conversas con el proctólogo por videollamada y recibes tu informe por escrito.',
    sections: [
      {
        h2: '1. Escribes por WhatsApp',
        paras: [
          'Toca el botón de WhatsApp y envía el mensaje que aparece. No hace falta que cuentes tus síntomas por chat: los conversarás en privado con el médico. Te preguntaremos tu país, tu horario disponible y si prefieres algún médico del equipo.',
          'Con esos datos te proponemos una o más opciones de fecha y hora, siempre indicadas en hora de Lima y en tu hora local.',
        ],
      },
      {
        h2: '2. Pagas con un link',
        paras: [
          'Para reservar el horario te enviamos un link de pago de USD 50. Puedes pagar con tarjeta u otros medios que acepte la plataforma de pago. Al confirmarse el pago recibes la confirmación de la cita y el enlace de la videollamada.',
          'Si la teleconsulta no llega a realizarse por causas del equipo médico, te devolvemos el pago o reprogramamos. Los detalles están en <a href="/precio/">precio y pago</a>.',
        ],
      },
      {
        h2: '3. Videollamada de 30 minutos',
        paras: [
          'A la hora acordada entras al enlace desde tu celular o computadora. El proctólogo te pregunta por tus síntomas, tus antecedentes y los tratamientos que ya probaste, revisa los exámenes que hayas enviado y responde tus dudas.',
          'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. No se realiza examen físico por cámara: si hace falta, se indica el examen presencial que corresponde.',
        ],
      },
      {
        h2: '4. Recibes tu informe',
        paras: [
          'Después de la videollamada recibes un informe escrito con el resumen de tu consulta, la orientación del médico, las medidas recomendadas, los exámenes sugeridos y las señales de alarma. Puedes compartirlo con tu médico local.',
          'Si el plan incluye un procedimiento o una cirugía en Lima, te explicamos los siguientes pasos en <a href="/tratamiento-en-lima/">tratarte en Lima</a>.',
        ],
      },
      {
        h2: 'Qué preparar antes de la cita',
        list: [
          'Una lista corta de tus síntomas: desde cuándo, cómo empezaron y qué los empeora o alivia.',
          'Los nombres de los medicamentos o cremas que usas o usaste.',
          'Exámenes, informes o resultados previos (colonoscopía, ecografía, análisis), en foto o PDF, enviados antes de la cita.',
          'Tus antecedentes: embarazos, cirugías previas, enfermedades crónicas y alergias.',
          'Las preguntas que quieres hacer, para aprovechar los 30 minutos.',
        ],
      },
      {
        h2: 'Tecnología que necesitas',
        paras: [
          'Basta un celular o una computadora con cámara, micrófono y una conexión a internet estable. Te enviamos un enlace de videollamada que se abre desde el navegador o la aplicación indicada; no necesitas crear cuentas complicadas.',
          'Te recomendamos conectarte unos minutos antes, con la batería cargada y desde un lugar con buena señal.',
        ],
      },
      {
        h2: 'Privacidad durante la consulta',
        paras: [
          'Busca un lugar donde puedas hablar con tranquilidad y sin otras personas, salvo que quieras estar acompañado. La videollamada no se graba. Tus datos y tus exámenes se tratan como información de salud confidencial, conforme a nuestra <a href="/legal/privacidad/">política de privacidad</a>.',
          'Antes de la cita te pedimos aceptar el <a href="/legal/consentimiento-telemedicina/">consentimiento informado de telemedicina</a>, donde se explican sus alcances y límites.',
        ],
      },
    ],
  },

  // ───────────────────────── Precio ─────────────────────────
  {
    key: 'price',
    slug: 'precio',
    title: 'Precio de la teleconsulta con proctólogo: USD 50',
    description:
      'La teleconsulta con proctólogo cuesta USD 50: videollamada de 30 minutos, revisión de exámenes e informe escrito. Pago con link y devolución si no se realiza.',
    h1: 'Precio de la teleconsulta: USD 50',
    lead: 'Un precio único por una videollamada de 30 minutos con un proctólogo colegiado y un informe escrito con tu plan.',
    sections: [
      {
        h2: 'Qué incluye',
        list: [
          'Videollamada privada de 30 minutos con un proctólogo de la Clínica Proctológica de Lima.',
          'Revisión de tus síntomas, antecedentes y de los exámenes e informes que envíes antes de la cita.',
          'Orientación sobre medidas de higiene y dieta, tratamiento médico y exámenes a solicitar.',
          'Informe escrito con el resumen y el plan, para ti y tu médico local.',
          'Si hace falta, orientación para coordinar un examen presencial o una cirugía en Lima.',
        ],
      },
      {
        h2: 'Cómo se paga',
        paras: [
          'Después de escribirnos por WhatsApp te enviamos un link de pago seguro por USD 50. Puedes pagar con tarjeta de crédito o débito y con otros medios que acepte la plataforma de pago según tu país. El horario queda reservado al confirmarse el pago.',
          'El cobro se hace en dólares estadounidenses; tu banco puede aplicar su propio tipo de cambio o comisiones.',
        ],
      },
      {
        h2: 'Devolución si la teleconsulta no se realiza',
        paras: [
          'Si la teleconsulta no se realiza por causas del equipo médico o por una falla técnica de nuestra parte, te devolvemos el pago completo o reprogramamos, según prefieras.',
          'Si necesitas cambiar tu horario, avísanos por WhatsApp con anticipación y lo reprogramamos. Si no te conectas a la cita sin aviso, el pago no es reembolsable, aunque intentaremos ofrecerte otro horario. Las condiciones completas están en los <a href="/legal/terminos/">términos y condiciones</a>.',
        ],
      },
      {
        h2: 'Qué no incluye',
        list: [
          'Exámenes de laboratorio, de imágenes, anoscopía ni colonoscopía.',
          'Procedimientos en consultorio, cirugías, hospitalización ni anestesia.',
          'Medicamentos. La receta, cuando corresponde, se maneja según la normativa de tu país.',
          'Consultas presenciales en Lima, que se cotizan aparte.',
          'Viajes, alojamiento ni traslados.',
        ],
      },
      {
        h2: 'Y si después necesito tratarme en Lima',
        paras: [
          'Si el proctólogo considera que necesitas un procedimiento o una cirugía, te explica las opciones y te damos montos referenciales que se informan en la teleconsulta, según tu caso. Más detalles en <a href="/tratamiento-en-lima/">tratarte en Lima</a>.',
        ],
      },
    ],
  },

  // ───────────────────────── Equipo ─────────────────────────
  {
    key: 'team',
    slug: 'equipo',
    title: 'Equipo de proctólogos colegiados (CMP/RNE)',
    description:
      'Conoce a los proctólogos de la Clínica Proctológica de Lima que atienden por videollamada. Todos colegiados en el Colegio Médico del Perú, con CMP y RNE.',
    h1: 'Nuestro equipo de proctólogos',
    lead: 'Médicos de la Clínica Proctológica de Lima, en San Isidro, colegiados en el Colegio Médico del Perú, que atienden por videollamada.',
    sections: [
      {
        h2: 'Cómo trabajamos',
        paras: [
          'Cada teleconsulta la atiende un proctólogo del equipo, que es el mismo que firma tu informe. Los médicos comparten criterios de atención y, cuando un caso lo amerita, lo conversan entre ellos antes de proponerte un plan.',
          'Trabajamos con la misma lógica que en la consulta presencial: escuchar tu historia, revisar tus exámenes, explicarte con claridad qué es lo más probable y qué falta confirmar, y proponerte pasos concretos. En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo.',
          'Si el plan incluye un procedimiento o una cirugía, puede hacerse en la Clínica Proctológica de Lima con el mismo equipo, para que no tengas que empezar de cero.',
        ],
      },
      {
        h2: 'Qué significan CMP y RNE',
        paras: [
          'El <strong>CMP</strong> es el número de colegiatura en el Colegio Médico del Perú: todo médico que ejerce en el país debe tenerlo. El <strong>RNE</strong> es el Registro Nacional de Especialistas, que acredita que el médico completó una especialidad reconocida.',
          'En la ficha de cada médico verás su CMP y su RNE. Si algún dato aparece como pendiente, es porque aún lo estamos verificando y lo publicaremos apenas esté confirmado.',
        ],
      },
      {
        h2: 'Cómo verificar la colegiatura',
        paras: [
          'Puedes comprobar los datos de cualquier médico en el buscador de colegiados del Colegio Médico del Perú (cmp.org.pe), con el número de CMP o con el nombre. Allí figura si está habilitado y su especialidad registrada.',
          'Te animamos a hacerlo: es tu derecho saber quién te atiende.',
        ],
      },
    ],
  },

  // ───────────────────────── Segunda opinión ─────────────────────────
  {
    key: 'secondOpinion',
    slug: 'segunda-opinion',
    title: 'Segunda opinión antes de operarte | Proctólogo',
    description:
      '¿Te indicaron cirugía de hemorroides, fisura o fístula? Pide una segunda opinión a un proctólogo colegiado por videollamada antes de decidir. USD 50.',
    h1: 'Segunda opinión con un proctólogo antes de operarte',
    lead: 'Si te propusieron una cirugía anal o rectal, una segunda opinión te ayuda a entender tus opciones y a decidir con más información.',
    sections: [
      {
        h2: 'Por qué pedir una segunda opinión',
        paras: [
          'Una cirugía anal es una decisión importante: implica anestesia, días de recuperación y, en algunos casos, riesgos que conviene conocer. Pedir una segunda opinión no es desconfiar de tu médico; es una práctica habitual en medicina cuando hay que decidir algo relevante.',
          'Un segundo especialista puede confirmar la indicación, sugerir otras alternativas antes de operar o proponer una técnica distinta según tu caso.',
        ],
      },
      {
        h2: 'Cuándo tiene sentido',
        list: [
          'Te indicaron cirugía de hemorroides y quieres saber si hay otras opciones antes.',
          'Tienes una fisura anal que no mejora y te propusieron operarte.',
          'Te diagnosticaron una fístula anal y te explicaron varias técnicas sin que te quede claro cuál conviene.',
          'Ya te operaron y los síntomas volvieron o aparecieron otros nuevos.',
          'Tienes dudas sobre los riesgos, la recuperación o el control de la continencia.',
        ],
      },
      {
        h2: 'Qué necesitamos para revisar tu caso',
        paras: [
          'Para que la segunda opinión sea útil, envía antes de la cita todo lo que tengas: informes médicos, resultados de colonoscopía, ecografía endoanal, resonancia u otros exámenes, y la indicación quirúrgica que te dieron.',
          'En la videollamada el proctólogo revisa tus síntomas y tus documentos, te orienta y arma un plan. Si necesita examinarte para confirmar, te explica dónde y cómo.',
        ],
      },
      {
        h2: 'Qué obtienes',
        list: [
          'Una explicación clara de tu diagnóstico tal como figura en tus exámenes.',
          'Una opinión sobre si la cirugía propuesta es razonable o si conviene intentar antes otras medidas.',
          'Las alternativas disponibles, con sus ventajas y desventajas en términos generales.',
          'Un informe escrito que puedes compartir con tu cirujano.',
          'Si decides operarte en Lima, orientación sobre cómo hacerlo. Ver <a href="/tratamiento-en-lima/">tratarte en Lima</a>.',
        ],
      },
    ],
  },

  // ───────────────────────── Tratamiento en Lima ─────────────────────────
  {
    key: 'treatmentLima',
    slug: 'tratamiento-en-lima',
    title: 'Tratarte en Lima: cirugía proctológica y viaje',
    description:
      'Si necesitas un procedimiento o cirugía proctológica, puedes tratarte en la Clínica Proctológica de Lima. Cómo es el viaje, qué esperar y costos referenciales.',
    h1: 'Tratarte en Lima con el mismo equipo',
    lead: 'Si tu caso necesita un examen presencial, un procedimiento o una cirugía, puedes hacerlo en la Clínica Proctológica de Lima, en San Isidro, con los médicos que ya conocen tu caso.',
    sections: [
      {
        h2: 'Empieza por la teleconsulta',
        paras: [
          'Antes de viajar, la teleconsulta permite que el proctólogo conozca tu historia, revise tus exámenes y te diga si de verdad necesitas tratarte en Lima o si puedes resolverlo con tu médico local.',
          'Si el viaje tiene sentido, llegas con un plan: qué exámenes hacer, qué procedimiento se evaluará y cuántos días conviene quedarte.',
        ],
      },
      {
        h2: 'Cómo es el viaje',
        list: [
          'Coordinamos por WhatsApp las fechas de tu consulta presencial y, si corresponde, del procedimiento.',
          'Lima tiene conexiones aéreas directas con muchas ciudades de América Latina, Estados Unidos y España.',
          'La clínica está en San Isidro, un distrito céntrico con hoteles y servicios cerca.',
          'Te sugerimos viajar acompañado si vas a tener un procedimiento con anestesia.',
          'Revisa los requisitos de ingreso al Perú según tu nacionalidad antes de comprar pasajes.',
        ],
      },
      {
        h2: 'Qué esperar en la clínica',
        paras: [
          'El primer paso en Lima es la consulta presencial con examen físico. Con ese examen el proctólogo confirma el diagnóstico y define el tratamiento: puede ser tratamiento médico, un procedimiento en consultorio o una cirugía.',
          'Antes de cualquier procedimiento se te explican sus riesgos, la preparación y la recuperación, y firmas un consentimiento informado. Después recibes indicaciones por escrito y un plan de controles, que pueden seguir por videollamada cuando ya estés en tu país.',
        ],
      },
      {
        h2: 'Cuánto tiempo quedarte',
        paras: [
          'Depende del tratamiento. Para una consulta presencial con examen pueden bastar pocos días; para una cirugía conviene quedarse hasta el primer control posoperatorio. El proctólogo te dará una estimación según tu caso en la teleconsulta.',
        ],
      },
      {
        h2: 'Costos referenciales',
        paras: [
          'Los costos de exámenes, procedimientos y cirugías dependen del diagnóstico confirmado y de la técnica. Por eso son costos referenciales que se informan en la teleconsulta, según tu caso, y se confirman tras el examen presencial.',
          'La teleconsulta de USD 50 no incluye exámenes, procedimientos, cirugía, viaje ni alojamiento. Ver <a href="/precio/">precio</a>.',
        ],
      },
    ],
  },

  // ───────────────────────── Preguntas ─────────────────────────
  {
    key: 'faq',
    slug: 'preguntas',
    title: 'Preguntas frecuentes sobre la teleconsulta',
    description:
      'Respuestas sobre la teleconsulta con proctólogo: cómo agendar, pago de USD 50, qué se ve por videollamada, recetas, privacidad, informe y tratamiento en Lima.',
    h1: 'Preguntas frecuentes',
    lead: 'Lo que más nos preguntan antes de agendar una teleconsulta con un proctólogo.',
    sections: [
      {
        h2: 'Antes de agendar',
        paras: [
          'Si tu duda no está aquí, escríbenos por WhatsApp o revisa <a href="/como-funciona/">cómo funciona</a> y el <a href="/precio/">precio</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puede un proctólogo ayudarme sin examinarme en persona?',
        a: 'Sí, en muchos casos. En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. No damos diagnósticos definitivos sin examen físico.',
      },
      {
        q: '¿Cuánto cuesta y qué incluye?',
        a: 'USD 50 por una videollamada de 30 minutos con un proctólogo colegiado, la revisión de tus exámenes previos y un informe escrito con tu plan al terminar.',
      },
      {
        q: '¿Cómo pago?',
        a: 'Después de escribirnos por WhatsApp te enviamos un link de pago seguro. Puedes pagar con tarjeta u otros medios que acepte la plataforma según tu país.',
      },
      {
        q: '¿Qué pasa si la teleconsulta no se realiza?',
        a: 'Si no se realiza por causas del equipo médico o una falla de nuestra parte, te devolvemos el pago completo o reprogramamos, como prefieras.',
      },
      {
        q: '¿Me pueden recetar medicamentos?',
        a: 'El proctólogo te orienta sobre el tratamiento médico adecuado. La receta, cuando corresponde, se maneja según la normativa de tu país; por eso el informe está pensado para compartirlo con tu médico local.',
      },
      {
        q: '¿Tengo que mostrar la zona afectada por cámara?',
        a: 'No. La teleconsulta se basa en la conversación y en tus exámenes. Si hace falta un examen físico, el médico te indica cuál y dónde hacerlo.',
      },
      {
        q: '¿Se graba la videollamada?',
        a: 'No. La videollamada no se graba. Tus datos y exámenes se tratan como información de salud confidencial.',
      },
      {
        q: '¿Desde qué países puedo consultar?',
        a: 'Desde cualquier país con conexión a internet. Atendemos sobre todo a pacientes de México, Colombia, Ecuador, Bolivia, Chile, Centroamérica, provincias del Perú, España e hispanos en Estados Unidos.',
      },
      {
        q: '¿Qué necesito para conectarme?',
        a: 'Un celular o una computadora con cámara, micrófono y una conexión estable. Te enviamos el enlace de la videollamada al confirmar el pago.',
      },
      {
        q: '¿Qué recibo después de la consulta?',
        a: 'Un informe escrito con el resumen, las medidas recomendadas, los exámenes sugeridos, las señales de alarma y, si corresponde, los pasos para tratarte en Lima.',
      },
      {
        q: '¿Puedo operarme en Lima con el mismo equipo?',
        a: 'Sí. Si tu caso lo necesita, se coordina una consulta presencial y el procedimiento en la Clínica Proctológica de Lima, en San Isidro. Los costos referenciales se informan en la teleconsulta.',
      },
      {
        q: '¿La teleconsulta sirve para una urgencia?',
        a: 'No. Si tienes sangrado abundante, fiebre o dolor intenso, acude a urgencias en tu ciudad sin esperar la cita.',
      },
    ],
  },

  // ───────────────────────── Contacto ─────────────────────────
  {
    key: 'contact',
    slug: 'contacto',
    title: 'Contacto | Proctología Online',
    description:
      'Escríbenos por WhatsApp para agendar tu teleconsulta con un proctólogo de la Clínica Proctológica de Lima, o por correo para temas administrativos y de datos.',
    h1: 'Contacto',
    lead: 'La forma más directa de agendar es por WhatsApp. Para temas administrativos o de datos personales, también puedes escribirnos por correo.',
    sections: [
      {
        h2: 'WhatsApp para agendar',
        paras: [
          'Toca el botón de WhatsApp y envía el mensaje precargado. No necesitas contarnos tus síntomas por chat: los conversarás en privado con el proctólogo durante la videollamada.',
          'Te responderemos con las opciones de horario disponibles y el link de pago.',
        ],
      },
      {
        h2: 'Correo electrónico',
        paras: [
          'Para consultas administrativas, solicitudes sobre tus datos personales o pedidos de devolución: <a href="mailto:clinicaproctologicalima@gmail.com">clinicaproctologicalima@gmail.com</a>.',
          'Por favor, no envíes información médica detallada por correo; compártela por el canal que te indiquemos al agendar.',
        ],
      },
      {
        h2: 'Horario de atención',
        paras: [
          'Horario de teleconsulta por confirmar. Las citas se agendan en hora de Lima (UTC−5) y te las confirmamos también en tu hora local.',
        ],
      },
      {
        h2: 'Clínica en Lima',
        paras: [
          'Clínica Proctológica de Lima, Av. Javier Prado Este 1510, San Isidro, Lima, Perú. Las consultas presenciales se coordinan previamente por WhatsApp.',
        ],
      },
    ],
  },

  // ───────────────────────── Términos ─────────────────────────
  {
    key: 'terms',
    slug: 'legal/terminos',
    title: 'Términos y condiciones | Proctología Online',
    description:
      'Términos y condiciones del servicio de teleconsulta con proctólogo de CLINICA PROCTOLOGICA DE LIMA SAC: alcance, pago de USD 50, reprogramación y devoluciones.',
    h1: 'Términos y condiciones',
    lead: 'Estas condiciones regulan el uso del servicio de teleconsulta ofrecido en este sitio. Al agendar y pagar una teleconsulta, las aceptas.',
    sections: [
      {
        h2: '1. Quién presta el servicio',
        paras: [
          'El servicio es prestado por CLINICA PROCTOLOGICA DE LIMA SAC, RUC 20616704614, con domicilio en Av. Javier Prado Este 1510, San Isidro, Lima, Perú (en adelante, «la Clínica»). Correo de contacto: clinicaproctologicalima@gmail.com.',
          'Las teleconsultas son brindadas desde Lima, Perú, por médicos colegiados en el Colegio Médico del Perú, conforme a la Ley N.° 30421, Ley Marco de Telesalud, y sus normas complementarias.',
        ],
      },
      {
        h2: '2. Alcance del servicio',
        paras: [
          'La teleconsulta es una videollamada de 30 minutos con un proctólogo, en la que se revisan síntomas, antecedentes y exámenes, se brinda orientación médica y se entrega un informe escrito con un plan.',
          'La teleconsulta no incluye examen físico y no reemplaza la consulta presencial cuando esta es necesaria. Las conclusiones dependen de la información que brinde el paciente. El médico puede indicar que se requiere un examen presencial para confirmar un diagnóstico.',
          'No se ofrecen recetas en línea a través de este sitio. Cualquier indicación de medicamentos se maneja según la normativa del país del paciente.',
          'El servicio no es apto para emergencias. Ante sangrado abundante, fiebre o dolor intenso, el paciente debe acudir a urgencias.',
        ],
      },
      {
        h2: '3. Agenda y pago',
        paras: [
          'La cita se agenda por WhatsApp y se confirma con el pago de USD 50 mediante el link enviado por la Clínica. El horario se reserva al confirmarse el pago. El banco del paciente puede aplicar tipo de cambio o comisiones propias.',
        ],
      },
      {
        h2: '4. Reprogramación y devoluciones',
        list: [
          'Si la teleconsulta no se realiza por causas atribuibles a la Clínica o al médico, el paciente puede elegir la devolución total del pago o la reprogramación.',
          'El paciente puede reprogramar sin costo avisando por WhatsApp con al menos 24 horas de anticipación.',
          'Si el paciente no se conecta sin aviso previo, el pago no es reembolsable; la Clínica podrá ofrecer otro horario.',
          'Las devoluciones se tramitan por el mismo medio de pago, en los plazos que fije la plataforma de pago y el banco.',
        ],
      },
      {
        h2: '5. Obligaciones del paciente',
        list: [
          'Brindar información veraz y completa sobre sus síntomas, antecedentes y medicación.',
          'Conectarse desde un lugar privado y con una conexión adecuada.',
          'Ser mayor de edad o estar acompañado por su padre, madre o tutor.',
          'No grabar la videollamada ni difundir su contenido sin autorización.',
        ],
      },
      {
        h2: '6. Responsabilidad',
        paras: [
          'La Clínica responde por la atención brindada conforme a la buena práctica médica. La Clínica no promete resultados de tratamiento. La Clínica no responde por fallas de conexión del paciente ni por decisiones tomadas sin seguir las indicaciones del informe.',
        ],
      },
      {
        h2: '7. Ley aplicable',
        paras: [
          'Estas condiciones se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los jueces y tribunales de Lima, sin perjuicio de los derechos que la ley reconoce a los consumidores. Puedes presentar reclamos a través del correo de contacto.',
        ],
      },
    ],
  },

  // ───────────────────────── Privacidad ─────────────────────────
  {
    key: 'privacy',
    slug: 'legal/privacidad',
    title: 'Política de privacidad | Proctología Online',
    description:
      'Cómo CLINICA PROCTOLOGICA DE LIMA SAC trata tus datos personales y de salud en la teleconsulta, conforme a la Ley N.° 29733 de protección de datos personales.',
    h1: 'Política de privacidad',
    lead: 'Tus datos de salud son sensibles. Aquí explicamos qué datos recogemos, para qué los usamos y cómo puedes ejercer tus derechos.',
    sections: [
      {
        h2: '1. Responsable del tratamiento',
        paras: [
          'CLINICA PROCTOLOGICA DE LIMA SAC, RUC 20616704614, Av. Javier Prado Este 1510, San Isidro, Lima, Perú. Correo: clinicaproctologicalima@gmail.com.',
          'Tratamos tus datos conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, su reglamento y la Ley N.° 30421, Ley Marco de Telesalud.',
        ],
      },
      {
        h2: '2. Qué datos recogemos',
        list: [
          'Datos de contacto: nombre, número de WhatsApp, correo y país.',
          'Datos de salud que compartes en la teleconsulta: síntomas, antecedentes, medicación y exámenes.',
          'Datos de pago necesarios para confirmar la transacción (no almacenamos los datos completos de tu tarjeta; los procesa la plataforma de pago).',
          'Datos de navegación del sitio, de forma agregada, para medir visitas y el uso de los botones de contacto.',
        ],
      },
      {
        h2: '3. Para qué los usamos',
        list: [
          'Agendar y realizar tu teleconsulta y emitir tu informe.',
          'Llevar tu historia clínica, como exige la normativa peruana.',
          'Coordinar, si lo pides, tu atención presencial en Lima.',
          'Gestionar pagos, devoluciones y reclamos.',
          'Medir el funcionamiento del sitio y de nuestros anuncios sin enviar a terceros información sobre tu enfermedad.',
        ],
      },
      {
        h2: '4. Datos de salud y publicidad',
        paras: [
          'Nunca enviamos a plataformas de publicidad o analítica el nombre de tu enfermedad, tus síntomas ni el contenido de tus mensajes. Las herramientas de medición solo registran visitas y clics en los botones de contacto o pago.',
          'La videollamada no se graba.',
        ],
      },
      {
        h2: '5. Con quién los compartimos',
        paras: [
          'Solo con el equipo médico y administrativo que participa en tu atención, con la plataforma de pago y con proveedores tecnológicos que nos prestan servicios bajo obligación de confidencialidad. No vendemos tus datos. Algunos proveedores pueden estar fuera del Perú; en ese caso aplicamos las garantías que exige la ley para la transferencia internacional de datos.',
        ],
      },
      {
        h2: '6. Cuánto tiempo los conservamos',
        paras: [
          'La historia clínica se conserva durante los plazos que fija la normativa sanitaria peruana. Los demás datos se conservan mientras sean necesarios para las finalidades descritas o para cumplir obligaciones legales.',
        ],
      },
      {
        h2: '7. Tus derechos',
        paras: [
          'Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a clinicaproctologicalima@gmail.com, con una copia de tu documento de identidad. Si no quedas conforme con la respuesta, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Perú.',
        ],
      },
    ],
  },

  // ───────────────────────── Consentimiento ─────────────────────────
  {
    key: 'consent',
    slug: 'legal/consentimiento-telemedicina',
    title: 'Consentimiento informado de telemedicina',
    description:
      'Consentimiento informado para la teleconsulta con proctólogo: alcances y límites de la videollamada, conexión, privacidad, no grabación y emergencias.',
    h1: 'Consentimiento informado de telemedicina',
    lead: 'Antes de tu teleconsulta te pedimos leer y aceptar este consentimiento, que explica qué puede y qué no puede hacer una consulta por videollamada.',
    sections: [
      {
        h2: '1. Qué es la teleconsulta',
        paras: [
          'Es una consulta médica a distancia, por videollamada, con un proctólogo colegiado en el Colegio Médico del Perú, brindada desde Lima, Perú, conforme a la Ley N.° 30421, Ley Marco de Telesalud. Su prestador es CLINICA PROCTOLOGICA DE LIMA SAC, RUC 20616704614.',
        ],
      },
      {
        h2: '2. Alcances y límites',
        list: [
          'El médico revisa tus síntomas, antecedentes y exámenes, te orienta y te propone un plan por escrito.',
          'No se realiza examen físico. Por eso, la orientación puede ser provisional y el médico puede indicarte un examen presencial para confirmar un diagnóstico.',
          'No se emiten recetas en línea desde este sitio. Cualquier indicación de medicamentos se maneja según la normativa de tu país.',
          'La calidad de la orientación depende de que la información que brindes sea veraz y completa.',
          'No se pueden prometer resultados de ningún tratamiento.',
        ],
      },
      {
        h2: '3. Conexión y tecnología',
        paras: [
          'Necesitas un dispositivo con cámara, micrófono y una conexión estable. Si la conexión falla, el médico intentará retomar la llamada o continuarla por teléfono o WhatsApp; si no es posible completarla por causas de nuestra parte, se reprograma o se devuelve el pago.',
          'Si la calidad de audio o video no permite una evaluación adecuada, el médico puede suspender la consulta y reprogramarla.',
        ],
      },
      {
        h2: '4. Privacidad y grabación',
        paras: [
          'La videollamada no se graba, ni por parte de la Clínica ni por parte del paciente. Debes conectarte desde un lugar privado. Si alguien te acompaña, el médico debe saberlo. Tus datos se tratan conforme a la Ley N.° 29733 y a nuestra <a href="/legal/privacidad/">política de privacidad</a>.',
        ],
      },
      {
        h2: '5. Emergencias',
        paras: [
          'La teleconsulta no reemplaza la atención de emergencia. Si tienes sangrado abundante, fiebre, dolor intenso, mareo o desmayo, acude a urgencias de tu ciudad sin esperar la cita.',
          'Si durante la videollamada el médico detecta señales de alarma, te indicará acudir a un servicio de emergencia.',
        ],
      },
      {
        h2: '6. Aceptación',
        paras: [
          'Al confirmar tu cita declaras que leíste este consentimiento, que entiendes los alcances y límites de la telemedicina y que aceptas recibir la atención por videollamada. Puedes retirar tu consentimiento antes de la consulta avisándonos por WhatsApp o por correo.',
        ],
      },
    ],
  },
];

// Landings de pauta (BUILD §4). El mensaje de WhatsApp con idioma y landing lo arma la plantilla.
export const landings: Landing[] = [
  {
    key: 'proctologo',
    slugG: 'proctologo',
    slugM: 'proctologo',
    slugT: 'proctologo',
    google: {
      title: 'Proctólogo: consulta por videollamada | USD 50',
      h1: 'Proctólogo: consulta por videollamada desde tu casa',
      lead: 'Habla con un proctólogo colegiado de la Clínica Proctológica de Lima en una videollamada privada de 30 minutos. USD 50 con informe escrito.',
      bullets: [
        'Proctólogos y coloproctólogos colegiados en Perú, con CMP y RNE visibles',
        'Videollamada privada de 30 minutos, sin salir de casa',
        'Revisión de tus síntomas y de tus exámenes previos',
        'Informe escrito con tu plan al terminar',
        'Si necesitas examen o cirugía, te decimos dónde y cómo',
      ],
      body: [
        {
          h2: 'Cuándo consultar con un proctólogo',
          paras: [
            'El proctólogo atiende las molestias del ano y el recto: hemorroides, fisura anal, fístula, condilomas, sangrado al defecar, picazón y estreñimiento crónico. Si tienes alguno de estos síntomas desde hace días o vuelven una y otra vez, vale la pena consultar.',
          ],
        },
        {
          h2: 'Qué pasa en la videollamada',
          paras: [
            'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. La receta, cuando corresponde, se maneja según la normativa de tu país.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuánto cuesta la consulta con el proctólogo?',
          a: 'USD 50 por una videollamada de 30 minutos e informe escrito. Pagas con un link antes de la cita.',
        },
        {
          q: '¿Me pueden examinar por videollamada?',
          a: 'No se hace examen físico por cámara. Si hace falta, el médico te indica qué examen pedir y dónde.',
        },
        {
          q: '¿Desde qué países puedo consultar?',
          a: 'Desde cualquier país con internet: México, Colombia, Ecuador, Chile, Centroamérica, Perú, España y Estados Unidos, entre otros.',
        },
      ],
    },
    meta: {
      title: 'Habla con un proctólogo por videollamada',
      hook: 'Las molestias anales son muy comunes. Hablarlo con un especialista es el primer paso.',
      text: 'Consulta en privado con un proctólogo colegiado de la Clínica Proctológica de Lima, desde tu casa. 30 minutos por USD 50 y un informe con tu plan.',
      bullets: ['Videollamada privada de 30 minutos', 'Proctólogos colegiados con CMP', 'Informe escrito con tu plan'],
    },
    tiktok: {
      title: 'Proctólogo por videollamada',
      hook: '¿Molestias al ir al baño? Habla con un proctólogo.',
      text: 'Consulta en privado, desde tu casa, con un proctólogo colegiado de Lima. 30 minutos por USD 50 y un informe con tu plan. Escríbenos por WhatsApp.',
    },
  },
  {
    key: 'hemorroides',
    slugG: 'hemorroides',
    slugM: 'hemorroides',
    slugT: 'hemorroides',
    google: {
      title: 'Hemorroides: consulta con proctólogo por videollamada',
      h1: 'Hemorroides: consulta con proctólogo por videollamada',
      lead: 'Hemorroides externas o internas, con sangrado, picazón o bulto: habla con un proctólogo colegiado en una videollamada de 30 minutos por USD 50.',
      bullets: [
        'Proctólogo colegiado que conoce a fondo las hemorroides',
        'Orientación sobre medidas de higiene y dieta y tratamiento médico',
        'Te explicamos cuándo conviene un procedimiento en consultorio o una cirugía',
        'Informe escrito con tu plan al terminar',
        'Videollamada privada de 30 minutos por USD 50',
      ],
      body: [
        {
          h2: 'Hemorroides: tratamiento según tu caso',
          paras: [
            'Las hemorroides son muy frecuentes y no todas se tratan igual. Muchas mejoran con medidas de higiene y dieta y tratamiento médico; otras necesitan procedimientos en consultorio o cirugía. Lo importante es saber en qué grupo estás.',
          ],
        },
        {
          h2: 'Qué resuelves en la videollamada',
          paras: [
            'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. Si el sangrado es abundante o tienes fiebre, acude a urgencias.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Se pueden tratar las hemorroides sin cirugía?',
          a: 'Muchas veces sí, con medidas de higiene y dieta y tratamiento médico. El proctólogo te dice si tu caso puede manejarse así o si necesita un procedimiento.',
        },
        {
          q: '¿Tengo que mostrar las hemorroides por cámara?',
          a: 'No. La consulta se basa en la conversación y en tus exámenes. Si hace falta examinarte, se indica dónde.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'USD 50 por 30 minutos de videollamada e informe escrito con tu plan.',
        },
      ],
    },
    meta: {
      title: 'Hemorroides: habla con un proctólogo',
      hook: 'Las hemorroides le pasan a muchísima gente. No tienes que aguantarlas en silencio.',
      text: 'Habla en privado con un proctólogo colegiado por videollamada. Te orienta, arma un plan contigo y te dice si necesitas algo más.',
      bullets: ['30 minutos por USD 50', 'Desde tu casa, en privado', 'Informe escrito con tu plan'],
    },
    tiktok: {
      title: 'Hemorroides: proctólogo por videollamada',
      hook: 'Hemorroides: no tienes que aguantarlas en silencio.',
      text: 'Habla en privado con un proctólogo colegiado de Lima. Revisa tus síntomas, te orienta y arma un plan contigo. 30 minutos por USD 50. Escríbenos por WhatsApp.',
    },
  },
  {
    key: 'fisura',
    slugG: 'fisura',
    slugM: 'fisura',
    slugT: 'fisura',
    google: {
      title: 'Fisura anal: consulta con proctólogo por videollamada',
      h1: 'Fisura anal: consulta con proctólogo por videollamada',
      lead: 'Dolor fuerte al defecar, ardor que dura horas o sangre en el papel: habla con un proctólogo colegiado en una videollamada de 30 minutos por USD 50.',
      bullets: [
        'Proctólogo colegiado con experiencia en fisura anal',
        'Orientación sobre medidas de higiene y dieta y tratamiento médico',
        'Valoración de si tu fisura podría necesitar un procedimiento',
        'Informe escrito con tu plan al terminar',
        'Videollamada privada de 30 minutos por USD 50',
      ],
      body: [
        {
          h2: 'Fisura anal: tratamiento por etapas',
          paras: [
            'La fisura anal es una pequeña herida en el borde del ano. Muchas mejoran con tratamiento médico y cambios en la dieta y el hábito intestinal; las que duran meses pueden requerir un procedimiento. El proctólogo te ayuda a saber en qué punto estás.',
          ],
        },
        {
          h2: 'Qué resuelves en la videollamada',
          paras: [
            'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. La receta, cuando corresponde, se maneja según la normativa de tu país.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿La fisura anal siempre necesita cirugía?',
          a: 'No. Muchas mejoran con tratamiento médico y medidas de dieta. El proctólogo valora si tu caso podría necesitar un procedimiento.',
        },
        {
          q: '¿Me pueden ayudar si ya probé varias cremas?',
          a: 'Sí. Cuéntale al proctólogo qué usaste y por cuánto tiempo; con eso ajusta el plan o indica qué examen hacer.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'USD 50 por 30 minutos de videollamada e informe escrito con tu plan.',
        },
      ],
    },
    meta: {
      title: 'Fisura anal: habla con un proctólogo',
      hook: 'Si te duele mucho al ir al baño, no eres el único. Tiene explicación y se puede tratar.',
      text: 'Habla en privado con un proctólogo colegiado por videollamada. Revisa tus síntomas, te orienta y arma un plan contigo.',
      bullets: ['30 minutos por USD 50', 'Desde tu casa, en privado', 'Informe escrito con tu plan'],
    },
    tiktok: {
      title: 'Fisura anal: proctólogo por videollamada',
      hook: '¿Te duele mucho al ir al baño?',
      text: 'Puede ser una fisura anal, y es muy común. Habla en privado con un proctólogo colegiado de Lima: te orienta y arma un plan contigo. 30 minutos por USD 50. Escríbenos por WhatsApp.',
    },
  },
  {
    key: 'fistula',
    slugG: 'fistula',
    slugM: 'fistula',
    slugT: 'fistula',
    google: {
      title: 'Fístula anal: consulta con proctólogo por videollamada',
      h1: 'Fístula anal: consulta con proctólogo por videollamada',
      lead: 'Secreción o pus cerca del ano, absceso que vuelve o una fístula ya diagnosticada: habla con un proctólogo colegiado por videollamada, 30 minutos por USD 50.',
      bullets: [
        'Proctólogo colegiado con experiencia en fístula anal y abscesos',
        'Revisión de tus exámenes: ecografía endoanal o resonancia',
        'Explicación de las técnicas quirúrgicas en términos sencillos',
        'Informe escrito con tu plan al terminar',
        'Si hace falta cirugía, te explicamos cómo hacerla en Lima',
      ],
      body: [
        {
          h2: 'Fístula anal: por qué importa el especialista',
          paras: [
            'La fístula anal es un pequeño túnel entre el interior del ano y la piel, casi siempre después de un absceso. Su tratamiento suele ser quirúrgico, y elegir la técnica adecuada según el trayecto es clave para cuidar la continencia.',
          ],
        },
        {
          h2: 'Qué resuelves en la videollamada',
          paras: [
            'En la videollamada el proctólogo revisa tus síntomas y tus exámenes, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. Si tienes fiebre o dolor intenso con hinchazón, acude a urgencias.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿La fístula anal se cierra sola?',
          a: 'En general no. Suele necesitar un tratamiento quirúrgico. El proctólogo te explica las opciones según tu caso.',
        },
        {
          q: '¿Qué exámenes debo enviar?',
          a: 'Cualquier informe previo, ecografía endoanal o resonancia de pelvis que tengas. Si no tienes, te decimos cuál pedir.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'USD 50 por 30 minutos de videollamada e informe escrito con tu plan.',
        },
      ],
    },
    meta: {
      title: 'Fístula anal: habla con un proctólogo',
      hook: '¿Secreción cerca del ano que vuelve y vuelve? Es más frecuente de lo que crees.',
      text: 'Habla en privado con un proctólogo colegiado por videollamada. Revisa tus síntomas y exámenes, te orienta y arma un plan contigo.',
      bullets: ['30 minutos por USD 50', 'Revisión de tus exámenes', 'Informe escrito con tu plan'],
    },
    tiktok: {
      title: 'Fístula anal: proctólogo por videollamada',
      hook: '¿Secreción cerca del ano que vuelve y vuelve?',
      text: 'Puede ser una fístula anal. Habla en privado con un proctólogo colegiado de Lima: revisa tus síntomas y exámenes y arma un plan contigo. 30 minutos por USD 50. Escríbenos por WhatsApp.',
    },
  },
  {
    key: 'condilomas',
    slugG: 'condilomas',
    slugM: 'condilomas',
    slugT: '',
    google: {
      title: 'Condilomas anales: consulta con proctólogo por videollamada',
      h1: 'Condilomas anales: consulta con proctólogo por videollamada',
      lead: 'Verrugas o bultitos alrededor del ano: habla con un proctólogo colegiado en una videollamada privada y confidencial de 30 minutos por USD 50.',
      bullets: [
        'Proctólogo colegiado con experiencia en condilomas y VPH',
        'Consulta privada y confidencial, desde tu casa',
        'Orientación sobre tratamientos en consultorio y exámenes complementarios',
        'Informe escrito con tu plan al terminar',
        'Videollamada de 30 minutos por USD 50',
      ],
      body: [
        {
          h2: 'Condilomas anales: qué son',
          paras: [
            'Los condilomas son verrugas causadas por el virus del papiloma humano (VPH). Son frecuentes y tienen tratamiento, que suele hacerse en consultorio. También conviene evaluar la zona interna y valorar exámenes complementarios.',
          ],
        },
        {
          h2: 'Qué resuelves en la videollamada',
          paras: [
            'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo. Todo lo que conversas es confidencial.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Tengo que mostrar las lesiones por cámara?',
          a: 'No. La consulta se basa en la conversación. Para confirmar y tratar, el médico te indica el examen presencial que corresponde.',
        },
        {
          q: '¿Es confidencial?',
          a: 'Sí. La videollamada no se graba y tus datos se tratan como información de salud confidencial.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'USD 50 por 30 minutos de videollamada e informe escrito con tu plan.',
        },
      ],
    },
    meta: {
      title: 'Condilomas: habla con un proctólogo',
      hook: 'Los condilomas son más comunes de lo que imaginas. Consultarlo en privado es lo primero.',
      text: 'Habla con un proctólogo colegiado por videollamada, de forma confidencial. Te orienta y arma un plan contigo.',
      bullets: ['Consulta privada y confidencial', '30 minutos por USD 50', 'Informe escrito con tu plan'],
    },
    tiktok: {
      title: '',
      hook: '',
      text: '',
    },
  },
  {
    key: 'segunda-opinion',
    slugG: 'segunda-opinion',
    slugM: 'segunda-opinion',
    slugT: 'segunda-opinion',
    google: {
      title: 'Segunda opinión antes de cirugía anal | Proctólogo',
      h1: 'Segunda opinión con proctólogo antes de operarte',
      lead: '¿Te indicaron cirugía de hemorroides, fisura o fístula? Un proctólogo colegiado revisa tu caso por videollamada y te da su opinión por escrito. USD 50.',
      bullets: [
        'Revisión de tus informes y exámenes por un proctólogo colegiado',
        'Opinión sobre la cirugía propuesta y sus alternativas',
        'Explicación clara de riesgos y recuperación en términos generales',
        'Informe escrito para compartir con tu cirujano',
        'Si decides operarte en Lima, te explicamos cómo',
      ],
      body: [
        {
          h2: 'Por qué pedir una segunda opinión',
          paras: [
            'Una cirugía anal es una decisión importante. Una segunda opinión puede confirmar la indicación, sugerir alternativas antes de operar o proponer otra técnica según tu caso.',
          ],
        },
        {
          h2: 'Qué necesitas enviar',
          paras: [
            'Informes médicos, resultados de exámenes y la indicación quirúrgica que te dieron. En la videollamada el proctólogo revisa tu caso, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Puedo operarme en Lima con ustedes?',
          a: 'Sí. Si decides hacerlo, coordinamos una consulta presencial y el procedimiento en la Clínica Proctológica de Lima. Los costos referenciales se informan en la teleconsulta.',
        },
        {
          q: '¿Qué pasa si no tengo exámenes?',
          a: 'El proctólogo te orienta con tus síntomas y te indica qué exámenes pedir para decidir.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'USD 50 por 30 minutos de videollamada e informe escrito.',
        },
      ],
    },
    meta: {
      title: 'Segunda opinión antes de operarte',
      hook: '¿Te dijeron que necesitas cirugía y tienes dudas? Es normal querer otra opinión.',
      text: 'Un proctólogo colegiado revisa tu caso y tus exámenes por videollamada y te da su opinión por escrito. Si decides operarte en Lima, te explicamos cómo.',
      bullets: ['Revisión de tus exámenes', '30 minutos por USD 50', 'Opinión por escrito'],
    },
    tiktok: {
      title: 'Segunda opinión con proctólogo',
      hook: '¿Te dijeron que necesitas cirugía? Pide otra opinión.',
      text: 'Un proctólogo colegiado de Lima revisa tu caso y tus exámenes por videollamada y te da su opinión por escrito. 30 minutos por USD 50. Escríbenos por WhatsApp.',
    },
  },
];
