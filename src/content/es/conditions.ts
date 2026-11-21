import type { Condition } from '../../data/types';

// Páginas de enfermedad en español (BUILD §3, §7 y §8). Español neutro latinoamericano, con «tú».
// Sin nombres de fármacos, sin recetas en línea y sin prometer diagnóstico sin examen.

export const conditions: Condition[] = [
  // ───────────────────────────── HEMORROIDES ─────────────────────────────
  {
    key: 'hemorroides',
    slug: 'hemorroides',
    navLabel: 'Hemorroides',
    title: 'Hemorroides: tratamiento y consulta con proctólogo',
    description:
      'Hemorroides internas y externas: síntomas, opciones de tratamiento y cuándo operar. Consulta con proctólogo por videollamada de 30 minutos, USD 50.',
    h1: 'Hemorroides: consulta con proctólogo por videollamada',
    whatIs:
      'Las hemorroides son almohadillas de vasos sanguíneos que todos tenemos en el canal anal. Se vuelven un problema cuando se inflaman, sangran o salen hacia afuera. Pueden ser internas, por encima de la línea dentada, o externas, bajo la piel del ano. Son muy frecuentes y casi siempre tienen tratamiento escalonado: primero dieta y hábitos, luego procedimientos y, solo en algunos casos, cirugía.',
    signs: {
      intro: 'Vale la pena hablar con un proctólogo si notas alguna de estas señales:',
      list: [
        'Sangre roja brillante en el papel o en el inodoro después de evacuar.',
        'Un bulto que sale al pujar y vuelve a entrar solo o que tienes que empujar con el dedo.',
        'Un bulto duro, morado y doloroso en el borde del ano que apareció de un día para otro.',
        'Picazón, ardor o humedad que manchan la ropa interior.',
        'Molestias que vuelven cada pocas semanas pese a los cambios de dieta.',
        'Te indicaron cirugía y quieres entender las alternativas antes de decidir.',
      ],
    },
    online: {
      can: [
        'Revisar tus síntomas, su evolución y los tratamientos que ya probaste.',
        'Orientarte sobre si lo que describes encaja con hemorroides internas, externas o con otra causa que conviene descartar.',
        'Explicarte las medidas de higiene y dieta que suelen ayudar y cómo aplicarlas.',
        'Leer tus informes de colonoscopía, ecografía u otros exámenes previos.',
        'Darte una segunda opinión sobre una cirugía que te propusieron.',
        'Entregarte un informe escrito con el plan para llevar a tu médico local.',
      ],
      cannot: [
        'Examinar el ano ni hacer una anoscopía: eso requiere consulta presencial.',
        'Hacer ligaduras, procedimientos en consultorio o cirugía.',
        'Atender una trombosis muy dolorosa o un sangrado abundante: eso es urgencia.',
        'Enviar recetas por la web: si hace falta tratamiento médico, se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo: con un especialista en tu ciudad o en la clínica en Lima.',
    },
    urgent: [
      'Sangrado abundante, con coágulos o que no se detiene.',
      'Mareo, desmayo, palidez o latidos acelerados junto con sangrado.',
      'Dolor anal intenso con fiebre o escalofríos.',
      'Un bulto que salió, no vuelve a entrar y se pone oscuro o muy doloroso.',
    ],
    sections: [
      {
        h2: 'Por qué aparecen las hemorroides',
        paras: [
          'Las hemorroides se agrandan cuando la presión dentro del canal anal sube de forma repetida. Las causas más comunes son el estreñimiento, pujar fuerte o por mucho tiempo, pasar largos ratos sentado en el inodoro (por ejemplo, con el celular), la diarrea frecuente, el embarazo y el parto, y la edad, porque los tejidos de sostén se van aflojando.',
          'También influyen la poca fibra en la dieta, tomar poca agua, el sedentarismo y el sobrepeso. Por eso, buena parte del tratamiento consiste en cambiar la forma en que evacúas y no solo en tratar el bulto.',
        ],
      },
      {
        h2: 'Hemorroides internas y externas: grados',
        paras: [
          'Las <strong>hemorroides internas</strong> suelen sangrar sin doler. Se clasifican en cuatro grados según cuánto salen: en el grado I no salen; en el II salen al pujar y vuelven solas; en el III hay que empujarlas con el dedo; en el IV quedan afuera todo el tiempo.',
          'Las <strong>hemorroides externas</strong> están cubiertas de piel sensible. Cuando se forma un coágulo dentro (trombosis) aparece un bulto duro, morado y muy doloroso. Con el tiempo pueden dejar pliegues de piel llamados colgajos o plicomas, que no son peligrosos pero pueden dificultar la limpieza.',
        ],
      },
      {
        h2: 'Opciones de tratamiento, de menos a más',
        paras: [
          'Las guías de las sociedades de cirugía colorrectal recomiendan un tratamiento escalonado. El proctólogo elige el paso según tu grado, tus síntomas y tu historia.',
        ],
        list: [
          '<strong>Medidas de higiene y dieta:</strong> más fibra y agua, no pujar, no pasar más de unos minutos en el inodoro, baños de asiento con agua tibia y limpieza suave.',
          '<strong>Tratamiento médico:</strong> se usa para aliviar síntomas por periodos cortos; lo indica un médico según tu caso y la normativa de tu país.',
          '<strong>Procedimientos en consultorio:</strong> la ligadura con banda elástica es el más estudiado para los grados I a III; existen otras técnicas según el caso.',
          '<strong>Cirugía:</strong> se reserva para grados avanzados, hemorroides mixtas grandes o cuando lo anterior no funcionó. Hay varias técnicas y cada una tiene ventajas, molestias y tiempos de recuperación distintos.',
        ],
      },
      {
        h2: 'No todo sangrado es por hemorroides',
        paras: [
          'Las hemorroides son la causa más frecuente de sangre roja al evacuar, pero no la única. Una fisura, un pólipo, una inflamación del intestino o un tumor pueden dar síntomas parecidos. Por eso, según tu edad, tus antecedentes familiares y tus síntomas, el proctólogo puede indicarte una colonoscopía antes de tratar las hemorroides. Si tienes dudas sobre el sangrado, lee también <a href="/sangrado-anal/">sangrado anal: cuándo consultar</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Se pueden tratar las hemorroides sin cirugía?',
        a: 'Sí, en la mayoría de los casos. Muchas personas mejoran con cambios de dieta y hábitos, y otras con procedimientos en consultorio como la ligadura. La cirugía se reserva para grados avanzados o cuando lo demás no dio resultado.',
      },
      {
        q: '¿Puede el proctólogo saber qué tengo solo por videollamada?',
        a: 'Puede orientarte con bastante detalle a partir de tus síntomas y exámenes, pero no reemplaza el examen físico. Si hace falta examinarte, te dice qué tipo de evaluación necesitas y dónde hacerla, en tu ciudad o en Lima.',
      },
      {
        q: '¿Me pueden dar una receta en la teleconsulta?',
        a: 'La web no vende ni envía recetas. Si tu caso necesita tratamiento médico, el proctólogo te lo explica en el informe y la receta, cuando corresponda, se emite según la normativa de tu país.',
      },
      {
        q: 'Me dijeron que debo operarme. ¿Sirve una segunda opinión?',
        a: 'Sí. Es una de las razones más comunes para consultar. El proctólogo revisa tu caso, te explica las alternativas y los pros y contras de cada técnica. Más detalles en <a href="/segunda-opinion/">segunda opinión antes de operarte</a>.',
      },
      {
        q: '¿Las hemorroides se convierten en cáncer?',
        a: 'No. Las hemorroides no se transforman en cáncer. Lo importante es no atribuirles cualquier sangrado sin descartar otras causas cuando tu edad o tus síntomas lo justifican.',
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guidelines for the Management of Hemorrhoids (Dis Colon Rectum, 2018)',
        url: 'https://doi.org/10.1097/DCR.0000000000001030',
      },
      {
        label: 'ESCP. European Society of Coloproctology guideline for haemorrhoidal disease (Colorectal Dis, 2020)',
        url: 'https://doi.org/10.1111/codi.14975',
      },
      { label: 'NICE Clinical Knowledge Summaries. Haemorrhoids', url: 'https://cks.nice.org.uk/topics/haemorrhoids/' },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── FISURA ANAL ─────────────────────────────
  {
    key: 'fisura',
    slug: 'fisura-anal',
    navLabel: 'Fisura anal',
    title: 'Fisura anal: síntomas, tratamiento y proctólogo',
    description:
      'Fisura anal aguda o crónica: por qué duele al evacuar, qué tratamientos existen y cuándo se opera. Consulta con proctólogo por videollamada, USD 50.',
    h1: 'Fisura anal: consulta con proctólogo por videollamada',
    whatIs:
      'La fisura anal es una herida pequeña, parecida a un corte, en la piel del canal anal. Causa dolor fuerte al evacuar, que puede durar minutos u horas, y a veces un poco de sangre roja. Si dura menos de seis semanas se llama aguda; si persiste más, crónica. El músculo del esfínter se contrae por el dolor, y eso dificulta que la herida cierre.',
    signs: {
      intro: 'Consulta con un proctólogo si tienes alguna de estas molestias:',
      list: [
        'Dolor intenso, como de cortadura o ardor, al evacuar y que sigue después.',
        'Gotas o rayas de sangre roja en el papel o en las heces.',
        'Miedo a ir al baño por el dolor, lo que empeora el estreñimiento.',
        'Un pequeño pliegue de piel en el borde del ano que antes no estaba.',
        'Dolor que lleva más de seis semanas o que vuelve una y otra vez.',
        'Te propusieron cirugía o un procedimiento y quieres conocer otras opciones.',
      ],
    },
    online: {
      can: [
        'Escuchar cómo es tu dolor y cuándo aparece, que es la clave para sospechar una fisura.',
        'Revisar qué tratamientos usaste, por cuánto tiempo y cómo te fue.',
        'Explicarte cómo ablandar las heces y cuidar la zona con medidas de higiene y dieta.',
        'Orientarte sobre si tu caso parece agudo o crónico y qué pasos siguen.',
        'Darte una segunda opinión si te indicaron un procedimiento o cirugía.',
        'Entregarte un informe escrito con el plan para tu médico local.',
      ],
      cannot: [
        'Ver la fisura ni examinar el esfínter: eso se hace en consulta presencial.',
        'Hacer procedimientos en consultorio ni cirugía.',
        'Descartar otras causas de dolor anal que requieren examen.',
        'Enviar recetas por la web: el tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo, en tu ciudad o en la clínica en Lima.',
    },
    urgent: [
      'Dolor anal intenso con fiebre, escalofríos o hinchazón que crece.',
      'Sangrado abundante o con coágulos.',
      'Un bulto caliente, rojo y doloroso cerca del ano (puede ser un absceso).',
    ],
    sections: [
      {
        h2: 'Por qué se forma una fisura',
        paras: [
          'La causa más común es evacuar heces duras y voluminosas, aunque también puede aparecer con diarrea frecuente. Al desgarrarse la piel, el dolor hace que el esfínter interno se contraiga con más fuerza. Esa tensión reduce la llegada de sangre a la herida y dificulta que cicatrice, y así se arma un círculo: dolor, contracción, mala cicatrización y nuevo dolor.',
          'Es frecuente después del parto y en personas con estreñimiento. Cuando la fisura está en un lugar poco habitual o hay varias, el proctólogo puede buscar otras causas, como enfermedades inflamatorias del intestino o infecciones.',
        ],
      },
      {
        h2: 'Fisura aguda y fisura crónica',
        paras: [
          'Una <strong>fisura aguda</strong> tiene bordes limpios y muchas veces cierra en semanas con medidas de higiene y dieta y tratamiento médico. Una <strong>fisura crónica</strong> lleva más de seis semanas, tiene bordes engrosados y puede acompañarse de un pliegue de piel externo (plicoma centinela) y de una pequeña papila en el interior.',
          'Distinguir entre las dos ayuda a elegir el tratamiento: en las agudas se insiste en lo conservador; en las crónicas se evalúan pasos adicionales.',
        ],
      },
      {
        h2: 'Opciones de tratamiento',
        paras: [
          'Las guías de cirugía colorrectal recomiendan empezar por lo menos invasivo y avanzar solo si hace falta.',
        ],
        list: [
          '<strong>Medidas de higiene y dieta:</strong> fibra, agua, no pujar, baños de asiento con agua tibia y no aguantar las ganas de evacuar.',
          '<strong>Tratamiento médico:</strong> busca relajar el esfínter y aliviar el dolor mientras la herida cierra; lo indica un médico según tu caso y la normativa de tu país.',
          '<strong>Procedimientos en consultorio o sala:</strong> existen opciones para relajar el esfínter de manera temporal cuando el tratamiento médico no basta.',
          '<strong>Cirugía:</strong> la esfinterotomía lateral interna es la técnica con más respaldo en fisuras crónicas que no cierran. Tiene buenos resultados, pero también riesgos que el proctólogo debe explicarte, como alteraciones de la continencia.',
        ],
      },
      {
        h2: 'Cómo evitar que vuelva',
        paras: [
          'Una fisura que cerró puede reaparecer si vuelve el estreñimiento. Mantener las heces blandas, tomar agua a lo largo del día, comer frutas, verduras y legumbres, moverte y responder a las ganas de evacuar sin aguantarlas son las medidas que más ayudan. Si el estreñimiento es persistente, revisa también <a href="/estrenimiento-cronico/">estreñimiento crónico y piso pélvico</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Toda fisura anal termina en cirugía?',
        a: 'No. Muchas fisuras, sobre todo las agudas, cierran con medidas de higiene y dieta y tratamiento médico. La cirugía se considera cuando una fisura crónica no cierra pese al tratamiento adecuado.',
      },
      {
        q: '¿Cómo sé si es fisura o hemorroides?',
        a: 'El patrón del dolor orienta mucho: la fisura duele fuerte al evacuar y después; las hemorroides internas suelen sangrar sin doler. Aun así, la confirmación requiere examen. En la videollamada el proctólogo te orienta y te dice si necesitas evaluación presencial.',
      },
      {
        q: '¿La teleconsulta incluye receta?',
        a: 'La web no ofrece recetas en línea. Si necesitas tratamiento médico, el proctólogo lo explica en tu informe y la receta, cuando corresponda, se emite según la normativa de tu país.',
      },
      {
        q: '¿La cirugía de fisura puede afectar el control de gases o heces?',
        a: 'Es un riesgo conocido, poco frecuente, que depende de la técnica y de tus antecedentes, como partos o cirugías anales previas. Por eso conviene evaluarlo con un proctólogo antes de decidir, y una <a href="/segunda-opinion/">segunda opinión</a> puede ayudarte.',
      },
      {
        q: '¿Cuánto tarda en cerrar una fisura?',
        a: 'Depende de si es aguda o crónica y de cómo controles el estreñimiento. Las agudas suelen mejorar en semanas; las crónicas pueden tardar más o necesitar otros pasos. El proctólogo te da una idea según tu caso, sin prometer plazos exactos.',
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guidelines for the Management of Anal Fissures (Dis Colon Rectum, 2017)',
        url: 'https://doi.org/10.1097/DCR.0000000000000770',
      },
      { label: 'NICE Clinical Knowledge Summaries. Anal fissure', url: 'https://cks.nice.org.uk/topics/anal-fissure/' },
      { label: 'ESCP. Guidelines (índice)', url: 'https://www.escp.eu.com/guidelines' },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── FÍSTULA Y ABSCESO ─────────────────────────────
  {
    key: 'fistula',
    slug: 'fistula-anal',
    navLabel: 'Fístula anal y absceso',
    title: 'Fístula anal y absceso: síntomas y tratamiento',
    description:
      'Fístula anal y absceso perianal: por qué supura, qué tipos hay y qué cirugías existen. Revisa tu caso con un proctólogo por videollamada de 30 minutos.',
    h1: 'Fístula anal y absceso: consulta con proctólogo por videollamada',
    whatIs:
      'Un absceso perianal es una acumulación de pus cerca del ano, casi siempre por la infección de una pequeña glándula del canal anal. Duele, se hincha y puede dar fiebre. Una fístula anal es un túnel que queda entre el interior del canal anal y la piel de alrededor; suele aparecer después de un absceso y se nota porque supura o mancha de forma intermitente.',
    signs: {
      intro: 'Habla con un proctólogo si notas:',
      list: [
        'Un orificio pequeño cerca del ano que bota pus, sangre o líquido de vez en cuando.',
        'Manchas en la ropa interior y picazón por humedad constante.',
        'Un bulto que se hincha, duele, revienta y luego mejora, una y otra vez.',
        'Te drenaron un absceso y la zona nunca terminó de cerrar.',
        'Ya te operaron de fístula y volvió a supurar.',
        'Te propusieron una cirugía y quieres entender el tipo de fístula y los riesgos.',
      ],
    },
    online: {
      can: [
        'Revisar tu historia: cuándo empezó, si hubo absceso, drenajes o cirugías previas.',
        'Leer tus informes de resonancia magnética, ecografía endoanal u operaciones anteriores.',
        'Explicarte qué tipo de fístula sugiere tu caso y qué estudios suelen pedirse.',
        'Contarte las técnicas quirúrgicas que existen y qué busca cada una.',
        'Darte una segunda opinión sobre la cirugía que te indicaron.',
        'Entregarte un informe con el plan y, si decides tratarte en Lima, cómo coordinarlo.',
      ],
      cannot: [
        'Drenar un absceso: eso es un procedimiento presencial y muchas veces urgente.',
        'Examinar el trayecto de la fístula ni hacer estudios de imagen.',
        'Operar una fístula: requiere evaluación presencial y quirófano.',
        'Enviar recetas por la web: cualquier tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas y exámenes, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo, en tu ciudad o en la clínica en Lima.',
    },
    urgent: [
      'Bulto rojo, caliente y muy doloroso cerca del ano, sobre todo con fiebre: puede ser un absceso que necesita drenaje.',
      'Fiebre alta, escalofríos o malestar general junto con dolor anal.',
      'Enrojecimiento que se extiende hacia los glúteos, el periné o los genitales.',
      'Si tienes diabetes o defensas bajas y aparece dolor o hinchazón anal, no esperes.',
    ],
    sections: [
      {
        h2: 'Del absceso a la fístula',
        paras: [
          'Dentro del canal anal hay pequeñas glándulas que pueden obstruirse e infectarse. Cuando la infección forma pus, aparece el absceso. El tratamiento del absceso es drenarlo; el tratamiento médico por sí solo no lo resuelve. Después del drenaje, una parte de las personas queda con una fístula, porque el túnel por donde salió la infección no se cierra.',
          'Con menos frecuencia, las fístulas se relacionan con la enfermedad de Crohn, infecciones específicas, radioterapia o traumatismos. Cuando se sospecha alguna de estas causas, el estudio y el tratamiento cambian.',
        ],
      },
      {
        h2: 'Tipos de fístula y por qué importan',
        paras: [
          'Lo que más define el tratamiento es cuánto músculo del esfínter atraviesa el trayecto. Las fístulas <strong>simples</strong> pasan por poca cantidad de músculo. Las <strong>complejas</strong> atraviesan más músculo, tienen varios trayectos, están en la parte anterior en mujeres o se asocian a enfermedad inflamatoria o a cirugías previas.',
          'Para definirlo, el proctólogo examina la zona y a menudo pide una resonancia magnética de pelvis o una ecografía endoanal. Si ya tienes estos estudios, llévalos a la teleconsulta.',
        ],
      },
      {
        h2: 'Opciones de tratamiento',
        paras: [
          'Una fístula anal rara vez cierra sola, por eso el tratamiento suele ser quirúrgico. La técnica se elige buscando el equilibrio entre cerrar el trayecto y cuidar el control de gases y heces.',
        ],
        list: [
          '<strong>Fistulotomía:</strong> abre el trayecto para que cicatrice desde el fondo; tiene altas tasas de cierre en fístulas simples.',
          '<strong>Sedal (seton):</strong> un hilo que se deja en el trayecto para drenarlo y preparar una segunda etapa, o como tratamiento de control.',
          '<strong>Técnicas que preservan el esfínter:</strong> como el colgajo de avance o la ligadura del trayecto interesfinteriano (LIFT), indicadas en fístulas complejas.',
          '<strong>Otras opciones:</strong> existen técnicas con láser, tapones u otros materiales, con resultados variables según el caso.',
        ],
      },
      {
        h2: 'Cómo preparar la teleconsulta',
        paras: [
          'Para aprovechar los 30 minutos, anota cuándo empezaron los síntomas, cuántas veces tuviste un absceso, si te lo drenaron y dónde, y si ya te operaron. Ten a mano los informes de resonancia, ecografía endoanal u operaciones previas, y la lista de enfermedades que tienes, como diabetes o enfermedad inflamatoria del intestino.',
          'Con esa información el proctólogo te explica qué tipo de fístula sugiere tu historia, qué estudios faltan y qué opciones tiene sentido considerar. Recibes un informe escrito para tu cirujano local o para planificar el tratamiento en Lima.',
        ],
      },
      {
        h2: 'Qué esperar después',
        paras: [
          'La recuperación depende de la técnica y de la complejidad de la fístula. Algunas fístulas necesitan más de una cirugía. Es normal que haya controles por varias semanas y curaciones en casa. Si estás pensando en viajar para operarte, revisa <a href="/tratamiento-en-lima/">tratarte en Lima</a> para conocer cómo se organiza.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Una fístula anal puede cerrar sola?',
        a: 'Es poco común. Puede dejar de supurar por un tiempo y luego volver. Por eso, cuando una fístula está confirmada, lo habitual es tratarla con cirugía después de evaluarla bien.',
      },
      {
        q: '¿Se puede resolver un absceso por videollamada?',
        a: 'No. Un absceso necesita drenaje presencial y, si tienes fiebre o dolor intenso, debes ir a urgencias. La teleconsulta sirve antes o después: para revisar tu caso, tus exámenes y el plan de seguimiento.',
      },
      {
        q: '¿La cirugía de fístula afecta la continencia?',
        a: 'Depende de cuánto músculo atraviesa la fístula y de la técnica. En fístulas complejas se eligen técnicas que buscan cuidar el esfínter. El proctólogo te explica el riesgo según tu caso.',
      },
      {
        q: '¿Qué exámenes conviene tener para la teleconsulta?',
        a: 'Si tienes resonancia magnética de pelvis, ecografía endoanal, informes operatorios o fotos de los informes de drenaje, tenlos a mano. Si no tienes ninguno, el proctólogo te dice cuáles pedir.',
      },
      {
        q: 'Ya me operaron y volvió. ¿Qué hago?',
        a: 'Las recurrencias ocurren, sobre todo en fístulas complejas. Una <a href="/segunda-opinion/">segunda opinión</a> ayuda a revisar qué pasó, qué tipo de fístula es y qué opciones quedan.',
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula (Dis Colon Rectum, 2022)',
        url: 'https://doi.org/10.1097/DCR.0000000000002473',
      },
      { label: 'NHS. Anal fistula', url: 'https://www.nhs.uk/conditions/anal-fistula/' },
      { label: 'ESCP. Guidelines (índice)', url: 'https://www.escp.eu.com/guidelines' },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── CONDILOMAS ─────────────────────────────
  {
    key: 'condilomas',
    slug: 'condilomas',
    navLabel: 'Condilomas anales',
    title: 'Condilomas anales (verrugas): consulta con proctólogo',
    description:
      'Condilomas o verrugas anales por VPH: cómo se reconocen, qué tratamientos existen y por qué revisar el canal anal. Orientación de proctólogo por videollamada.',
    h1: 'Condilomas anales: consulta con proctólogo por videollamada',
    whatIs:
      'Los condilomas son verrugas causadas por algunos tipos del virus del papiloma humano (VPH). En la zona anal aparecen como pequeñas elevaciones de color piel, rosadas o grisáceas, a veces agrupadas en forma de coliflor. Pueden estar alrededor del ano y también dentro del canal anal. Son frecuentes, se tratan, y conviene evaluarlas con un especialista porque tienden a reaparecer.',
    signs: {
      intro: 'Consulta con un proctólogo si notas:',
      list: [
        'Pequeños bultos o granitos alrededor del ano que antes no tenías.',
        'Picazón, humedad o leve sangrado al limpiarte en esa zona.',
        'Verrugas que crecen, se multiplican o volvieron después de un tratamiento.',
        'Tu pareja tiene condilomas o VPH y quieres saber qué revisar.',
        'Tienes defensas bajas por alguna enfermedad o tratamiento y te salieron lesiones.',
      ],
    },
    online: {
      can: [
        'Revisar tu historia, tus factores de riesgo y los tratamientos que ya recibiste.',
        'Explicarte qué es el VPH, cómo se transmite y qué significa para ti y tu pareja.',
        'Orientarte sobre qué tratamientos existen y cuál suele indicarse según el número y el lugar de las lesiones.',
        'Indicarte qué evaluación presencial necesitas, como el examen del canal anal.',
        'Leer resultados de biopsias o exámenes previos.',
        'Entregarte un informe escrito con el plan, en un espacio confidencial.',
      ],
      cannot: [
        'Confirmar que las lesiones son condilomas sin examinarlas.',
        'Revisar el interior del canal anal, que requiere anoscopía presencial.',
        'Hacer tratamientos locales, procedimientos ni cirugía.',
        'Enviar recetas por la web: el tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo, en tu ciudad o en la clínica en Lima. La consulta es privada y no te pedimos fotos de la zona.',
    },
    urgent: [
      'Una lesión que sangra con facilidad, crece en semanas o forma una herida que no cierra.',
      'Dolor anal intenso, fiebre o sangrado abundante.',
      'Un bulto duro y fijo en el ano o en la ingle.',
    ],
    sections: [
      {
        h2: 'Cómo se contagia el VPH',
        paras: [
          'El VPH se transmite por contacto piel con piel en las relaciones sexuales, incluido el contacto genital y anal, aunque no haya penetración. El preservativo reduce el riesgo, pero no lo elimina porque no cubre toda la piel. El virus puede quedar sin síntomas durante meses, por eso a veces no es posible saber cuándo ni de quién se adquirió.',
          'Tener condilomas no habla de higiene ni de conducta: es una infección muy común. Lo importante es tratarla y revisar si hay lesiones en otras zonas.',
        ],
      },
      {
        h2: 'Por qué conviene revisar el canal anal',
        paras: [
          'En una parte de las personas con condilomas alrededor del ano también hay lesiones dentro del canal. Si no se tratan, son una fuente de recaídas. Por eso el proctólogo suele indicar una anoscopía, un examen sencillo que se hace en consultorio.',
          'Algunos tipos de VPH, distintos de los que causan la mayoría de condilomas, se asocian a lesiones precancerosas del ano. Las personas con defensas bajas, como quienes viven con VIH o tienen un trasplante, necesitan un seguimiento más cercano.',
        ],
      },
      {
        h2: 'Opciones de tratamiento',
        paras: [
          'No hay un único tratamiento ideal: se elige según cuántas lesiones hay, dónde están, su tamaño y si ya recibiste otros tratamientos.',
        ],
        list: [
          '<strong>Tratamiento médico local:</strong> productos que se aplican sobre la piel durante semanas; los indica un médico según tu caso y la normativa de tu país.',
          '<strong>Procedimientos en consultorio:</strong> congelación u otras técnicas para destruir las lesiones visibles.',
          '<strong>Cirugía:</strong> extirpación o electrofulguración, útil cuando hay muchas lesiones, son grandes o están dentro del canal anal; permite enviar tejido a estudio.',
        ],
      },
      {
        h2: 'Qué esperar del tratamiento',
        paras: [
          'Muchas veces se necesita más de una sesión, sea con tratamiento local, procedimientos en consultorio o cirugía. Después de cada paso es normal tener molestias por algunos días y una zona sensible que requiere cuidados de higiene suaves. El proctólogo te explica cuántos controles suelen hacer falta y qué señales te deben hacer volver antes.',
          'Durante el tratamiento conviene evitar las relaciones sexuales que involucren la zona hasta que las lesiones cicatricen, y usar preservativo después. Si vives con alguna condición que baja las defensas, avisa al especialista, porque cambia la forma de hacer el seguimiento.',
        ],
      },
      {
        h2: 'Recaídas y prevención',
        paras: [
          'Los tratamientos eliminan las verrugas visibles, pero el virus puede quedar en la piel y causar nuevas lesiones, sobre todo en los primeros meses. Por eso son importantes los controles. La vacunación contra el VPH, según las recomendaciones de tu país, ayuda a prevenir nuevas infecciones. También conviene que tu pareja consulte y que hables con tu médico sobre otras pruebas de infecciones de transmisión sexual.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Los condilomas anales son cáncer?',
        a: 'No. Los condilomas son lesiones benignas. Algunos tipos de VPH, distintos de los que suelen causarlos, se relacionan con lesiones precancerosas, por eso el proctólogo puede pedir estudios si algo se ve distinto o si tienes factores de riesgo.',
      },
      {
        q: '¿Puedo tratarlos sin ver a un médico en persona?',
        a: 'Hace falta al menos una evaluación presencial para confirmar el diagnóstico y revisar el canal anal. La teleconsulta te orienta, resuelve tus dudas y te prepara para esa evaluación, en tu ciudad o en Lima.',
      },
      {
        q: '¿Mi pareja también debe revisarse?',
        a: 'Es recomendable. Aunque no tenga lesiones visibles, una evaluación ayuda a detectar verrugas en otras zonas y a conversar sobre prevención.',
      },
      {
        q: '¿Por qué volvieron después del tratamiento?',
        a: 'Porque el virus puede seguir en la piel aunque las verrugas se hayan eliminado. Las recaídas son frecuentes y no significan que el tratamiento estuvo mal hecho. Los controles permiten tratarlas cuando todavía son pequeñas.',
      },
      {
        q: '¿La consulta es confidencial?',
        a: 'Sí. Hablas a solas con el proctólogo por videollamada, no te pedimos fotos de la zona y tus datos se manejan según nuestra política de privacidad.',
      },
    ],
    refs: [
      {
        label: 'CDC. Sexually Transmitted Infections Treatment Guidelines: Anogenital Warts',
        url: 'https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm',
      },
      { label: 'NICE Clinical Knowledge Summaries. Warts – anogenital', url: 'https://cks.nice.org.uk/topics/warts-anogenital/' },
      { label: 'NHS. Genital warts', url: 'https://www.nhs.uk/conditions/genital-warts/' },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── SANGRADO ANAL ─────────────────────────────
  {
    key: 'sangrado',
    slug: 'sangrado-anal',
    navLabel: 'Sangrado anal',
    title: 'Sangrado anal: causas y cuándo consultar',
    description:
      'Sangre al evacuar: causas frecuentes como hemorroides y fisura, señales de alarma y cuándo pedir colonoscopía. Orientación de proctólogo por videollamada.',
    h1: 'Sangrado anal: cuándo consultar con un proctólogo',
    whatIs:
      'El sangrado anal es ver sangre en el papel, en el inodoro o mezclada con las heces. La mayoría de las veces se debe a causas benignas, como hemorroides o una fisura. Pero también puede ser la primera señal de pólipos, inflamación del intestino o cáncer colorrectal. Por eso no conviene acostumbrarse a él: vale la pena entender de dónde viene y si necesitas estudios.',
    signs: {
      intro: 'Pide una evaluación con un proctólogo si:',
      list: [
        'Ves sangre al evacuar más de una vez o por más de unos días.',
        'La sangre está mezclada con las heces o es de color oscuro.',
        'Notas cambios en tu ritmo intestinal: más estreñimiento, más diarrea o heces más delgadas.',
        'Tienes más de 45 años y nunca te hiciste una colonoscopía.',
        'Tienes familiares con cáncer de colon o pólipos.',
        'Hay cansancio, pérdida de peso sin explicación o anemia en tus análisis.',
      ],
    },
    online: {
      can: [
        'Analizar cómo es el sangrado: color, cantidad, cuándo aparece y si duele.',
        'Revisar tus antecedentes y tus factores de riesgo para cáncer colorrectal.',
        'Leer tus análisis de sangre, colonoscopías o informes previos.',
        'Orientarte sobre las causas más probables y cuáles conviene descartar.',
        'Indicarte qué estudios pedir y con qué prioridad.',
        'Entregarte un informe escrito para tu médico local o para tratarte en Lima.',
      ],
      cannot: [
        'Ver el origen del sangrado: eso requiere examen y, a veces, colonoscopía.',
        'Atender un sangrado abundante o con mareo: eso es urgencia.',
        'Hacer exámenes de laboratorio ni procedimientos.',
        'Enviar recetas por la web: cualquier tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte o pedir una colonoscopía, te explica dónde y cómo, en tu ciudad o en Lima.',
    },
    urgent: [
      'Sangrado abundante, con coágulos o que llena el inodoro.',
      'Mareo, desmayo, palidez, sudor frío o latidos acelerados.',
      'Heces negras y pegajosas, como alquitrán.',
      'Sangrado con dolor abdominal fuerte o fiebre.',
    ],
    sections: [
      {
        h2: 'Qué te dice el color y la forma del sangrado',
        paras: [
          'La <strong>sangre roja brillante</strong> en el papel o goteando al final de la evacuación suele venir del ano o de la parte final del recto, como ocurre con las hemorroides y las fisuras. Si además hay dolor fuerte al evacuar, la fisura es más probable; si no duele, las hemorroides internas son la causa más común.',
          'La <strong>sangre mezclada con las heces</strong> o de color más oscuro puede venir de más arriba en el intestino. Las <strong>heces negras</strong> suelen indicar sangrado del estómago o del intestino alto y requieren atención urgente. Estas pistas orientan, pero no reemplazan el examen.',
        ],
      },
      {
        h2: 'Causas más frecuentes',
        list: [
          '<a href="/hemorroides/">Hemorroides</a>: sangrado rojo que no suele doler, a veces con un bulto que sale.',
          '<a href="/fisura-anal/">Fisura anal</a>: poca sangre con dolor intenso al evacuar.',
          'Pólipos del colon o del recto: pueden sangrar poco o nada; se detectan con colonoscopía.',
          'Inflamación del intestino (colitis): sangre con diarrea, moco y urgencia para ir al baño.',
          'Infecciones intestinales o de la zona anal.',
          'Cáncer colorrectal: menos frecuente, pero es la causa que siempre se debe tener en cuenta según tu edad y tus síntomas.',
        ],
      },
      {
        h2: 'Cuándo se necesita una colonoscopía',
        paras: [
          'No todas las personas con sangrado necesitan colonoscopía, pero muchas sí. Las guías la recomiendan con más fuerza cuando hay cambios en el ritmo intestinal, anemia, pérdida de peso, antecedentes familiares de cáncer colorrectal o cuando el sangrado aparece a partir de cierta edad. En varios países se recomienda empezar el tamizaje de cáncer colorrectal a los 45 o 50 años aunque no haya síntomas.',
          'El proctólogo te ayuda a decidir si necesitas el estudio, con qué urgencia y qué preguntar a quien lo haga. Si ya tienes una colonoscopía, llévala a la teleconsulta.',
        ],
      },
      {
        h2: 'Qué puedes hacer mientras tanto',
        paras: [
          'Anota cuándo aparece la sangre, cuánta es, su color y si hay dolor. Evita pujar y el estreñimiento con agua y fibra. No te automediques para cubrir el síntoma sin saber la causa. Y si aparece cualquiera de las señales de alarma, acude a urgencias sin esperar la teleconsulta.',
        ],
      },
      {
        h2: 'Qué revisa el proctólogo en la teleconsulta',
        paras: [
          'En la videollamada te hará preguntas concretas: desde cuándo sangras, si la sangre cubre las heces o va mezclada, si hay dolor, bultos, moco o cambios en la forma de las heces, si bajaste de peso y si alguien en tu familia tuvo pólipos o cáncer de colon. También revisará los medicamentos que tomas, porque algunos aumentan la tendencia a sangrar, y tus análisis de sangre si los tienes.',
          'Con esa información te explica qué causas son más probables, cuáles conviene descartar y en qué orden. Recibes un informe escrito que puedes llevar a tu médico local o usar para coordinar estudios o tratamiento en Lima.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Un poco de sangre en el papel es normal?',
        a: 'No es normal, aunque casi siempre tiene una causa benigna como hemorroides o una fisura. Si se repite, conviene consultar para confirmar la causa y descartar otras según tu edad y antecedentes.',
      },
      {
        q: '¿Puede el proctólogo saber de dónde sangro por videollamada?',
        a: 'Puede orientarte sobre la causa más probable según tus síntomas, pero confirmar el origen requiere examen y, a veces, colonoscopía. En la teleconsulta te dice qué estudios necesitas y con qué prioridad.',
      },
      {
        q: '¿A qué edad debería hacerme una colonoscopía?',
        a: 'Depende de tu país, de tus antecedentes familiares y de tus síntomas. En muchos lugares el tamizaje empieza a los 45 o 50 años. Si tienes sangrado, la indicación puede ser antes. El proctólogo te orienta en tu caso.',
      },
      {
        q: '¿Cuándo debo ir a urgencias en vez de agendar?',
        a: 'Si el sangrado es abundante, tiene coágulos, viene con mareo, desmayo o heces negras, o hay dolor abdominal fuerte o fiebre. La teleconsulta no reemplaza la atención de emergencia.',
      },
      {
        q: '¿Qué llevo a la teleconsulta?',
        a: 'Tus notas sobre el sangrado, análisis de sangre recientes, colonoscopías o informes previos y la lista de medicamentos que tomas, porque algunos pueden influir en el sangrado. Revisa también <a href="/como-funciona/">cómo funciona</a>.',
      },
    ],
    refs: [
      {
        label: 'NICE NG12. Suspected cancer: recognition and referral',
        url: 'https://www.nice.org.uk/guidance/ng12',
      },
      {
        label: 'NHS. Bleeding from the bottom (rectal bleeding)',
        url: 'https://www.nhs.uk/conditions/bleeding-from-the-bottom-rectal-bleeding/',
      },
      {
        label: 'ASCRS. Clinical Practice Guidelines for the Management of Hemorrhoids (Dis Colon Rectum, 2018)',
        url: 'https://doi.org/10.1097/DCR.0000000000001030',
      },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── PICAZÓN ANAL ─────────────────────────────
  {
    key: 'picazon',
    slug: 'picazon-anal',
    navLabel: 'Picazón anal',
    title: 'Picazón anal (prurito anal): causas y consulta',
    description:
      'Picazón anal persistente: causas como humedad, hemorroides, hongos o irritación por limpieza, y qué hacer. Consulta con proctólogo por videollamada, USD 50.',
    h1: 'Picazón anal: consulta con proctólogo por videollamada',
    whatIs:
      'La picazón anal, o prurito anal, es la necesidad persistente de rascarse alrededor del ano. Suele empeorar de noche o después de evacuar. Es muy común y casi nunca es grave, pero puede ser muy molesta y afectar el sueño. A veces tiene una causa concreta, como hemorroides, fisura, hongos o parásitos; otras veces se debe a la humedad o a una limpieza demasiado agresiva.',
    signs: {
      intro: 'Vale la pena consultar si:',
      list: [
        'La picazón dura más de dos o tres semanas pese a cuidar la higiene.',
        'Te despierta de noche o te rascas hasta lastimarte.',
        'Hay manchas, humedad o secreción en la ropa interior.',
        'Notas bultos, heridas, grietas o cambios de color en la piel.',
        'También tienes sangrado, dolor al evacuar o cambios en tu ritmo intestinal.',
        'Ya usaste varias cremas por tu cuenta y no mejoras o empeoraste.',
      ],
    },
    online: {
      can: [
        'Revisar tus hábitos de limpieza, alimentación y los productos que usas en la zona.',
        'Identificar posibles irritantes y causas que encajan con tus síntomas.',
        'Explicarte medidas de higiene y cuidado de la piel que suelen ayudar.',
        'Orientarte sobre si hace falta descartar hemorroides, fisura, fístula, hongos o parásitos.',
        'Indicarte qué exámenes o evaluación presencial necesitas.',
        'Entregarte un informe escrito con el plan.',
      ],
      cannot: [
        'Examinar la piel ni tomar muestras.',
        'Descartar por completo enfermedades de la piel o lesiones que requieren ver la zona.',
        'Hacer procedimientos en consultorio.',
        'Enviar recetas por la web: el tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo, en tu ciudad o en la clínica en Lima.',
    },
    urgent: [
      'Enrojecimiento que se extiende, calor, hinchazón y fiebre.',
      'Dolor anal intenso con un bulto caliente (puede ser un absceso).',
      'Sangrado abundante.',
    ],
    sections: [
      {
        h2: 'Causas más frecuentes',
        paras: [
          'En muchas personas no hay una sola causa sino una suma de factores. Las más comunes son:',
        ],
        list: [
          '<strong>Humedad y restos de heces:</strong> por sudor, heces blandas o pérdidas leves que irritan la piel.',
          '<strong>Limpieza excesiva:</strong> frotar fuerte, usar jabones perfumados, toallitas húmedas o alcohol.',
          '<strong>Problemas anales:</strong> <a href="/hemorroides/">hemorroides</a>, <a href="/fisura-anal/">fisura</a>, <a href="/fistula-anal/">fístula</a> o colgajos de piel que dificultan la limpieza.',
          '<strong>Infecciones:</strong> hongos, oxiuros (parásitos frecuentes en niños y sus familias) o algunas infecciones de transmisión sexual.',
          '<strong>Enfermedades de la piel:</strong> dermatitis, psoriasis u otras que también afectan esta zona.',
          '<strong>Alimentos e irritantes:</strong> en algunas personas, café, picantes, cítricos o alcohol empeoran la picazón.',
        ],
      },
      {
        h2: 'El círculo de rascarse',
        paras: [
          'Rascarse alivia por segundos, pero lastima la piel, que se inflama y pica más. Con el tiempo la piel se engrosa y se vuelve más sensible. Romper ese círculo es parte central del tratamiento: mantener la zona limpia y seca, proteger la piel y evitar irritantes.',
          'Usar por mucho tiempo cremas compradas sin indicación puede adelgazar la piel o causar alergias que empeoran el problema. Por eso conviene revisar con un especialista qué estás usando.',
        ],
      },
      {
        h2: 'Medidas de higiene que suelen ayudar',
        list: [
          'Limpia con agua tibia y sin frotar; seca con toques suaves o con aire frío.',
          'Evita jabones perfumados, toallitas con alcohol o fragancias y talcos.',
          'Usa ropa interior de algodón y no demasiado ajustada.',
          'Coloca un poco de algodón seco si hay humedad, y cámbialo con frecuencia.',
          'Mantén las heces bien formadas con fibra y agua.',
          'Si te rascas dormido, mantén las uñas cortas.',
        ],
      },
      {
        h2: 'Picazón anal en niños y en la familia',
        paras: [
          'Cuando un niño se rasca el ano sobre todo de noche, una causa frecuente son los oxiuros, pequeños parásitos que se contagian con facilidad entre quienes viven en la misma casa. En ese caso suele tratarse a toda la familia y reforzar el lavado de manos, el corte de uñas y el lavado de la ropa de cama. Este tema lo maneja el pediatra o el médico de cabecera; si los síntomas persisten, el proctólogo te orienta sobre qué otras causas revisar.',
          'En adultos, si alguien más en casa tiene picazón al mismo tiempo, comentarlo en la consulta ayuda a pensar en causas contagiosas.',
        ],
      },
      {
        h2: 'Cuándo buscar algo más',
        paras: [
          'Si la picazón persiste después de unas semanas de buenas medidas, si hay cambios visibles en la piel o si aparecen otros síntomas como sangrado, el proctólogo puede pedir un examen presencial y, en algunos casos, una biopsia para descartar enfermedades de la piel o lesiones que necesitan otro tratamiento.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿La picazón anal es por falta de higiene?',
        a: 'Casi nunca. De hecho, muchas veces se debe al exceso: limpiar demasiado, frotar o usar productos irritantes. La clave es una limpieza suave y mantener la zona seca.',
      },
      {
        q: '¿Puede ser por hemorroides?',
        a: 'Sí, es una causa frecuente, porque pueden producir humedad o dificultar la limpieza. Pero no es la única. El proctólogo te ayuda a ordenar las causas posibles y a decidir si necesitas examen.',
      },
      {
        q: '¿Qué crema me sirve?',
        a: 'Depende de la causa, por eso no conviene elegirla por tu cuenta. La web no ofrece recetas en línea: si tu caso necesita tratamiento médico, el proctólogo lo explica en tu informe y la receta se emite según la normativa de tu país.',
      },
      {
        q: '¿Tiene relación con lo que como?',
        a: 'En algunas personas, sí. Café, picantes, cítricos, chocolate o alcohol pueden aumentar la picazón. Una prueba de unas semanas sin ellos ayuda a saber si te afectan.',
      },
      {
        q: '¿Cuándo debo preocuparme?',
        a: 'Si la picazón no mejora con cuidados de higiene, si ves heridas, bultos o cambios de color, o si se acompaña de sangrado. En esos casos conviene una evaluación presencial, que el proctólogo te ayuda a organizar.',
      },
    ],
    refs: [
      { label: 'NICE Clinical Knowledge Summaries. Pruritus ani', url: 'https://cks.nice.org.uk/topics/pruritus-ani/' },
      { label: 'NHS. Itchy bottom', url: 'https://www.nhs.uk/conditions/itchy-bottom/' },
      { label: 'ESCP. Guidelines (índice)', url: 'https://www.escp.eu.com/guidelines' },
      {
        label: 'ASCRS. Clinical Practice Guidelines (índice)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── ESTREÑIMIENTO ─────────────────────────────
  {
    key: 'estrenimiento',
    slug: 'estrenimiento-cronico',
    navLabel: 'Estreñimiento y piso pélvico',
    title: 'Estreñimiento crónico y piso pélvico: consulta',
    description:
      'Estreñimiento crónico, pujo excesivo y sensación de evacuación incompleta: causas, estudios y tratamiento. Consulta con proctólogo por videollamada, USD 50.',
    h1: 'Estreñimiento crónico y piso pélvico: consulta por videollamada',
    whatIs:
      'El estreñimiento crónico es evacuar con dificultad o con poca frecuencia durante tres meses o más: heces duras, pujar mucho, sensación de que no terminaste o necesidad de ayudarte con los dedos. A veces el problema es el ritmo del intestino; otras, la forma en que coordinan los músculos del piso pélvico al evacuar. Es frecuente, afecta la calidad de vida y tiene tratamiento.',
    signs: {
      intro: 'Habla con un proctólogo si:',
      list: [
        'Evacúas menos de tres veces por semana o con mucho esfuerzo desde hace meses.',
        'Sientes que no terminas de evacuar o que algo bloquea la salida.',
        'Tienes que presionar el periné o la vagina, o ayudarte con los dedos, para evacuar.',
        'El estreñimiento te ha causado hemorroides, fisuras o sangrado.',
        'Usas laxantes con frecuencia y cada vez te funcionan menos.',
        'Tu ritmo intestinal cambió de forma notoria en los últimos meses.',
      ],
    },
    online: {
      can: [
        'Revisar tu historia intestinal, tu dieta, tu actividad y los tratamientos que probaste.',
        'Orientarte sobre si tu estreñimiento parece de tránsito lento, de evacuación (piso pélvico) o mixto.',
        'Explicarte medidas de dieta, hidratación, postura y hábitos para ir al baño.',
        'Leer estudios previos como colonoscopía, manometría, defecografía o tiempo de tránsito.',
        'Indicarte qué estudios pedir si hacen falta y dónde se hacen.',
        'Entregarte un informe escrito con el plan, que puedes compartir con tu médico o fisioterapeuta.',
      ],
      cannot: [
        'Hacer el examen físico ni estudios del piso pélvico, que son presenciales.',
        'Hacer sesiones de rehabilitación del piso pélvico con equipos.',
        'Atender un cuadro de obstrucción intestinal: eso es urgencia.',
        'Enviar recetas por la web: el tratamiento médico se indica según la normativa de tu país.',
      ],
      note:
        'En la videollamada el proctólogo revisa tus síntomas, te orienta y arma un plan. Si necesita examinarte o pedir estudios, te explica dónde y cómo, en tu ciudad o en la clínica en Lima.',
    },
    urgent: [
      'Dolor abdominal fuerte con abdomen hinchado y vómitos.',
      'No eliminar heces ni gases por varios días con malestar creciente.',
      'Sangrado abundante o heces negras.',
      'Pérdida de peso marcada sin explicación junto con cambios en el ritmo intestinal.',
    ],
    sections: [
      {
        h2: 'Dos tipos principales de estreñimiento',
        paras: [
          'En el <strong>estreñimiento de tránsito lento</strong>, el contenido avanza despacio por el colon y las heces llegan secas y duras. En el <strong>estreñimiento por trastorno de la evacuación</strong>, también llamado disinergia del piso pélvico, las heces llegan al recto, pero los músculos no se relajan bien al pujar, o hay un problema anatómico que bloquea la salida, como un rectocele o un prolapso interno. Muchas personas tienen una mezcla de ambos.',
          'Distinguirlos es importante porque el tratamiento es diferente. Para eso existen estudios como la manometría anorrectal, la prueba de expulsión con balón, la defecografía y el estudio del tiempo de tránsito.',
        ],
      },
      {
        h2: 'Causas y factores que influyen',
        list: [
          'Dieta con poca fibra y poca agua; vida sedentaria.',
          'Aguantar las ganas de evacuar por horarios, viajes o baños incómodos.',
          'Embarazo, parto y cambios hormonales.',
          'Algunos medicamentos y enfermedades, como hipotiroidismo, diabetes o problemas neurológicos.',
          'Dolor anal por <a href="/fisura-anal/">fisura</a> o <a href="/hemorroides/">hemorroides</a>, que hace que evites ir al baño.',
          'Cambios recientes del ritmo intestinal que necesitan estudio para descartar causas del colon.',
        ],
      },
      {
        h2: 'Opciones de tratamiento',
        paras: [
          'El tratamiento suele empezar por lo simple y se ajusta según la respuesta y los estudios.',
        ],
        list: [
          '<strong>Medidas de higiene y dieta:</strong> aumentar la fibra de forma gradual, tomar agua, moverte a diario y crear una rutina para ir al baño, por ejemplo después del desayuno.',
          '<strong>Postura:</strong> apoyar los pies en un banquito para que las rodillas queden más altas que la cadera facilita la salida.',
          '<strong>Tratamiento médico:</strong> se indica según el tipo de estreñimiento, tu caso y la normativa de tu país.',
          '<strong>Rehabilitación del piso pélvico con biorretroalimentación:</strong> es el tratamiento de elección en la disinergia; enseña a coordinar los músculos al evacuar con ayuda de un especialista.',
          '<strong>Cirugía:</strong> se reserva para casos seleccionados, como algunos rectoceles o prolapsos, o un tránsito muy lento que no responde a otros tratamientos.',
        ],
      },
      {
        h2: 'El estreñimiento y otros problemas anales',
        paras: [
          'Pujar fuerte y evacuar heces duras durante años favorece las hemorroides, las fisuras y el debilitamiento del piso pélvico. Por eso, tratar el estreñimiento no solo mejora tu día a día: también previene recaídas de otras enfermedades anales y mejora los resultados de cualquier cirugía que necesites.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuántas veces a la semana es normal evacuar?',
        a: 'Entre tres veces al día y tres veces por semana se considera dentro de lo habitual. Más que la frecuencia, importa si evacúas con esfuerzo, si las heces son duras o si sientes que no terminas.',
      },
      {
        q: '¿Qué es la disinergia del piso pélvico?',
        a: 'Es cuando los músculos que rodean el ano se contraen en lugar de relajarse al pujar, como si apretaras la salida mientras intentas evacuar. Se confirma con estudios y suele mejorar con rehabilitación del piso pélvico.',
      },
      {
        q: '¿Es malo usar laxantes por mucho tiempo?',
        a: 'Depende del tipo y de cómo se usen. Lo importante es que un médico revise tu caso, encuentre la causa y ajuste el plan. La web no ofrece recetas en línea: el tratamiento médico se indica según la normativa de tu país.',
      },
      {
        q: '¿Qué estudios podría necesitar?',
        a: 'Según tus síntomas y tu edad, una colonoscopía para descartar causas del colon, y estudios del piso pélvico como manometría anorrectal, prueba de expulsión con balón o defecografía. En la teleconsulta te dicen cuáles tienen sentido en tu caso.',
      },
      {
        q: '¿La teleconsulta sirve si ya tengo estudios hechos?',
        a: 'Sí, es un buen uso. El proctólogo revisa tus resultados, te explica qué significan y arma el plan. Si lo prefieres, también puede ser una <a href="/segunda-opinion/">segunda opinión</a> sobre lo que te propusieron.',
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guideline for the Evaluation and Management of Constipation (Dis Colon Rectum, 2016)',
        url: 'https://doi.org/10.1097/DCR.0000000000000598',
      },
      {
        label: 'AGA. American Gastroenterological Association Medical Position Statement on Constipation (Gastroenterology, 2013)',
        url: 'https://doi.org/10.1053/j.gastro.2012.10.028',
      },
      { label: 'NICE Clinical Knowledge Summaries. Constipation', url: 'https://cks.nice.org.uk/topics/constipation/' },
      { label: 'NHS. Constipation', url: 'https://www.nhs.uk/conditions/constipation/' },
    ],
  },
];
