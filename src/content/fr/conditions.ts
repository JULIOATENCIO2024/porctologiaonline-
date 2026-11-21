import type { Condition } from '../../data/types';

// Pages maladies — français neutre, vouvoiement. Public : Afrique francophone, Haïti, Québec (deuxième avis).
// Règles BUILD §8 : aucun nom de médicament, aucune ordonnance en ligne, aucun diagnostic promis sans examen.

export const conditions: Condition[] = [
  // 1. Hémorroïdes
  {
    key: 'hemorroides',
    slug: 'hemorroides',
    navLabel: 'Hémorroïdes',
    title: 'Hémorroïdes : traitement et avis d’un proctologue',
    description:
      'Hémorroïdes internes ou externes, crise, saignement : un proctologue étudie vos symptômes en vidéoconsultation de 30 minutes et vous remet un plan écrit.',
    h1: 'Hémorroïdes : traitement et avis d’un proctologue par vidéoconsultation',
    whatIs:
      'Les hémorroïdes sont des coussinets vasculaires normaux, présents chez tout le monde à l’intérieur du canal anal. On parle de maladie hémorroïdaire lorsqu’ils gonflent, saignent, descendent (prolapsus) ou forment un caillot douloureux, la thrombose. Les hémorroïdes internes saignent souvent sans faire mal ; les externes se manifestent plutôt par une boule sensible au bord de l’anus.',
    signs: {
      intro: 'Il est utile de demander l’avis d’un proctologue si vous reconnaissez l’une de ces situations :',
      list: [
        'Du sang rouge vif sur le papier ou dans la cuvette, même en petite quantité.',
        'Une boule qui sort à la selle et rentre seule, ou que vous devez repousser avec le doigt.',
        'Une petite masse dure, bleutée et douloureuse apparue en quelques heures au bord de l’anus.',
        'Des démangeaisons, un suintement ou une sensation d’humidité persistante.',
        'Des crises qui reviennent malgré les conseils d’hygiène et d’alimentation.',
        'Une gêne pendant la grossesse ou après l’accouchement.',
        'Une opération proposée dans votre pays et le souhait d’un deuxième avis avant de décider.',
      ],
    },
    online: {
      can: [
        'Reprendre l’histoire de vos symptômes et repérer ce qui évoque des hémorroïdes ou une autre cause.',
        'Lire vos comptes rendus d’examens (coloscopie, échographie, analyses) et vous les expliquer simplement.',
        'Vous conseiller sur l’alimentation, l’hydratation, les fibres et les habitudes aux toilettes.',
        'Vous expliquer les options existantes, du traitement médical aux procédures en cabinet et à la chirurgie.',
        'Vous indiquer quels examens demander à votre médecin local et vous remettre un plan écrit.',
      ],
      cannot: [
        'Examiner l’anus ou réaliser une anuscopie : cela demande une consultation en présentiel.',
        'Réaliser une ligature élastique ou tout autre geste en cabinet.',
        'Confirmer à distance qu’un saignement vient uniquement des hémorroïdes.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner, il vous explique où et comment : auprès d’un médecin de votre pays ou à Lima.',
    },
    urgent: [
      'Saignement abondant, continu ou avec des caillots.',
      'Malaise, vertiges, pâleur ou essoufflement avec un saignement.',
      'Fièvre avec une douleur anale qui augmente.',
      'Boule très douloureuse qui ne rentre plus et devient violacée.',
    ],
    sections: [
      {
        h2: 'Pourquoi les hémorroïdes deviennent-elles gênantes ?',
        paras: [
          'Tout ce qui augmente la pression dans le bas du rectum favorise les crises : constipation, efforts de poussée, longues minutes passées aux toilettes avec le téléphone, diarrhée répétée, grossesse, port de charges lourdes ou station assise prolongée. L’âge joue aussi, car les tissus de soutien se relâchent avec le temps.',
          'Dans de nombreux pays d’Afrique de l’Ouest et centrale, en Haïti ou au Maghreb, l’accès à un proctologue reste limité et beaucoup de personnes vivent des années avec des crises répétées par gêne d’en parler. Pourtant, il s’agit d’une des consultations les plus courantes en proctologie.',
        ],
      },
      {
        h2: 'Les grandes options de traitement',
        paras: [
          'La prise en charge dépend du type d’hémorroïdes, de leur stade et de vos symptômes. Elle commence presque toujours par des mesures simples, puis avance par étapes si c’est nécessaire.',
          'Les proctologues classent les hémorroïdes internes en quatre stades, selon qu’elles restent en place, sortent puis rentrent seules, doivent être repoussées ou restent dehors en permanence. Ce stade, associé à l’intensité de la gêne, guide le choix du traitement. La thrombose externe, elle, se traite à part : elle est très douloureuse les premiers jours, puis se résorbe en général en quelques semaines, en laissant parfois une marisque.',
        ],
        list: [
          '<strong>Hygiène et alimentation</strong> : plus de fibres (légumes, fruits, légumineuses, céréales complètes), une bonne hydratation et des selles sans effort.',
          '<strong>Traitement médical</strong> : il soulage la crise ; son choix et toute ordonnance relèvent du médecin, selon la réglementation de votre pays.',
          '<strong>Procédures en cabinet</strong> : ligature élastique ou autres techniques pour les hémorroïdes internes qui saignent ou descendent.',
          '<strong>Chirurgie</strong> : réservée aux formes avancées ou résistantes ; plusieurs techniques existent, avec des suites différentes.',
        ],
      },
      {
        h2: 'Avant une opération : l’intérêt d’un deuxième avis',
        paras: [
          'Si une intervention vous a été proposée, il est légitime de vouloir comprendre pourquoi, quelle technique et quelles suites prévoir. Le proctologue relit vos documents et vous dit si d’autres étapes peuvent être essayées d’abord. Pour en savoir plus, consultez la page <a href="/fr/deuxieme-avis/">deuxième avis</a>. Si vous envisagez de vous faire traiter au Pérou, la page <a href="/fr/traitement-a-lima/">traitement à Lima</a> détaille l’organisation.',
        ],
      },
      {
        h2: 'Prévenir les récidives au quotidien',
        list: [
          'Aller à la selle dès que l’envie se présente, sans pousser ni rester plus de quelques minutes.',
          'Surélever les pieds sur un petit tabouret pour faciliter l’évacuation.',
          'Boire régulièrement, surtout par forte chaleur.',
          'Bouger chaque jour : la marche aide le transit.',
          'Limiter l’alcool et les plats très épicés pendant une crise si vous constatez qu’ils l’aggravent.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Les hémorroïdes peuvent-elles devenir un cancer ?',
        a: 'Non, les hémorroïdes ne se transforment pas en cancer. En revanche, un saignement attribué aux hémorroïdes peut avoir une autre origine. C’est pourquoi le proctologue peut vous recommander un examen, notamment après 45–50 ans ou en cas d’antécédents familiaux.',
      },
      {
        q: 'Faut-il forcément opérer des hémorroïdes ?',
        a: 'Non. La plupart des personnes vont mieux avec des mesures d’hygiène et d’alimentation, un traitement médical ou un geste en cabinet. La chirurgie concerne surtout les formes avancées ou qui reviennent malgré ces étapes.',
      },
      {
        q: 'Comment le proctologue peut-il m’aider sans m’examiner ?',
        a: 'Il analyse vos symptômes, votre histoire et vos examens, vous explique ce qui est probable et ce qui doit être vérifié, puis vous remet un plan écrit. Si un examen est nécessaire, il vous indique lequel demander à votre médecin local.',
      },
      {
        q: 'Puis-je consulter pendant ma grossesse ?',
        a: 'Oui. Les hémorroïdes sont fréquentes pendant la grossesse et après l’accouchement. Le proctologue vous conseille sur les mesures adaptées et sur ce qu’il faut signaler à votre sage-femme ou à votre gynécologue.',
      },
      {
        q: 'Vais-je recevoir une ordonnance ?',
        a: 'La vidéoconsultation vise à vous orienter et à vous remettre un plan écrit. Toute ordonnance relève de la réglementation de votre pays : votre médecin local peut s’appuyer sur ce plan.',
      },
    ],
    refs: [
      { label: 'SNFCP — Les hémorroïdes (information patients)', url: 'https://www.snfcp.org/informations-maladies/hemorroides/les-hemorroides/' },
      { label: 'SNFCP — Thrombose hémorroïdaire', url: 'https://www.snfcp.org/informations-maladies/hemorroides/thrombose-hemorroidaire/' },
      { label: 'SNFCP — Recommandations de la Société nationale française de coloproctologie', url: 'https://www.snfcp.org/recommandations/' },
      { label: 'ESCP — European Society of Coloproctology, guidelines', url: 'https://www.escp.eu.com/guidelines' },
    ],
  },

  // 2. Fissure anale
  {
    key: 'fisura',
    slug: 'fissure-anale',
    navLabel: 'Fissure anale',
    title: 'Fissure anale : traitement et avis d’un proctologue',
    description:
      'Douleur vive à la selle, brûlure, sang rouge : la fissure anale se soigne souvent sans chirurgie. Un proctologue vous oriente en vidéoconsultation de 30 min.',
    h1: 'Fissure anale : avis d’un proctologue par vidéoconsultation',
    whatIs:
      'La fissure anale est une petite plaie allongée de la peau du canal anal, le plus souvent située en arrière. Elle provoque une douleur vive pendant la selle, suivie d’une brûlure ou d’un spasme qui peut durer plusieurs heures. Elle saigne peu. Récente, elle cicatrise souvent avec un traitement médical ; ancienne de plus de six semaines, on la dit chronique.',
    signs: {
      intro: 'Pensez à consulter un proctologue si :',
      list: [
        'Chaque selle provoque une douleur en « coup de couteau » ou une sensation de déchirure.',
        'La brûlure persiste longtemps après être allé aux toilettes.',
        'Vous voyez un peu de sang rouge sur le papier.',
        'Vous retardez la selle par peur d’avoir mal, ce qui aggrave la constipation.',
        'Une petite excroissance de peau (marisque) est apparue au bord de l’anus.',
        'La douleur dure depuis plus de quatre à six semaines ou revient régulièrement.',
      ],
    },
    online: {
      can: [
        'Analyser la façon dont la douleur survient, ce qui oriente fortement vers une fissure ou vers une autre cause.',
        'Vous expliquer comment casser le cercle constipation, douleur et contraction du sphincter.',
        'Vous conseiller sur les selles, les fibres, les bains de siège et l’hygiène locale.',
        'Vous présenter les options de traitement médical, de procédure et de chirurgie, avec leurs avantages et leurs limites.',
        'Relire un projet d’opération et vous donner un deuxième avis.',
      ],
      cannot: [
        'Examiner la fissure et vérifier qu’il n’existe pas d’autre lésion.',
        'Réaliser un geste au cabinet ou une intervention.',
        'Écarter à distance une cause rare (infection, maladie inflammatoire) qui exige un examen.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner, il vous explique où et comment, dans votre pays ou à Lima.',
    },
    urgent: [
      'Fièvre avec une douleur anale permanente, même en dehors des selles.',
      'Gonflement chaud et rouge près de l’anus, qui évoque un abcès.',
      'Saignement abondant ou qui ne s’arrête pas.',
    ],
    sections: [
      {
        h2: 'Pourquoi une fissure apparaît-elle ?',
        paras: [
          'Le déclencheur le plus fréquent est une selle dure ou volumineuse, parfois une diarrhée irritante. La douleur entraîne une contraction du sphincter interne, qui réduit l’arrivée de sang à la plaie et l’empêche de cicatriser. C’est ce cercle qui transforme une petite blessure en problème durable.',
          'La fissure est fréquente chez l’adulte jeune, après un accouchement et chez l’enfant constipé. Une fissure située sur le côté, multiple ou associée à d’autres signes doit faire rechercher une autre cause : d’où l’importance d’un examen à un moment ou un autre.',
          'Une fissure ancienne s’accompagne souvent d’une petite marisque externe, appelée « marisque sentinelle », et parfois d’une petite excroissance à l’intérieur du canal. Ces signes indiquent que la plaie évolue depuis longtemps et qu’un traitement plus structuré sera probablement nécessaire.',
        ],
      },
      {
        h2: 'Ce qui aide vraiment',
        list: [
          'Ramollir les selles : fibres, eau, fruits et légumes, et ne jamais se retenir.',
          'Bains de siège à l’eau tiède après la selle pour détendre le sphincter.',
          'Nettoyer à l’eau plutôt que frotter avec du papier sec.',
          'Un traitement médical local détend le sphincter et favorise la cicatrisation ; il est prescrit selon la réglementation de votre pays.',
        ],
      },
      {
        h2: 'Et si la fissure ne cicatrise pas ?',
        paras: [
          'Lorsque la fissure persiste malgré un traitement bien suivi pendant plusieurs semaines, d’autres options existent : procédures en cabinet pour relâcher le sphincter, puis chirurgie dans certains cas. Le choix tient compte de la douleur, de votre continence, de vos accouchements éventuels et de vos préférences. Le proctologue vous explique chaque étape pour que vous décidiez en connaissance de cause.',
          'Si l’on vous a proposé une opération, la page <a href="/fr/deuxieme-avis/">deuxième avis</a> explique comment le proctologue relit votre dossier. En cas de saignement plus important, lisez aussi <a href="/fr/saignement-anal/">saignement anal : quand consulter</a>.',
        ],
      },
      {
        h2: 'Vivre avec une fissure en attendant la cicatrisation',
        paras: [
          'La fissure a un retentissement souvent sous-estimé : peur d’aller aux toilettes, sommeil perturbé, difficulté à rester assis au travail ou pendant un long trajet. Beaucoup de personnes finissent par moins manger ou moins boire pour espacer les selles, ce qui durcit encore les selles et entretient le problème.',
          'Quelques repères aident à traverser cette période. Gardez un horaire régulier, de préférence après un repas, car le réflexe de la selle est alors plus fort. Ne restez pas longtemps assis sur les toilettes. Si une selle très dure se prépare, n’attendez pas : parlez-en à votre médecin pour adapter le traitement. Enfin, notez pendant une semaine vos selles, la douleur et ce que vous avez mangé : ce journal sera précieux pendant la vidéoconsultation.',
          'Dans les pays où le climat est chaud, la déshydratation joue un rôle important : pensez à boire davantage les jours de forte chaleur ou d’effort physique.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Une fissure anale guérit-elle seule ?',
        a: 'Une fissure récente cicatrise souvent en quelques semaines lorsque les selles deviennent molles et que la douleur est bien prise en charge. Une fissure chronique demande en général un traitement plus structuré.',
      },
      {
        q: 'Est-ce des hémorroïdes ?',
        a: 'Pas forcément. Une douleur vive à la selle évoque plutôt une fissure, alors que les hémorroïdes internes saignent souvent sans faire mal. Seul un examen permet de trancher, mais l’entretien oriente déjà beaucoup.',
      },
      {
        q: 'L’opération entraîne-t-elle une incontinence ?',
        a: 'Le risque existe pour certaines techniques et dépend de votre situation. C’est pour cela que la chirurgie n’est proposée qu’après échec des autres étapes, et que le proctologue en discute avec vous en détail.',
      },
      {
        q: 'Mon enfant a mal quand il va à la selle, puis-je consulter ?',
        a: 'Oui, le proctologue peut vous conseiller sur la constipation et la fissure de l’enfant. Il vous dira aussi quand un examen par un pédiatre ou un chirurgien pédiatrique est nécessaire.',
      },
      {
        q: 'Que contient le plan écrit ?',
        a: 'Un résumé de vos symptômes, les hypothèses retenues, les mesures conseillées, les examens à demander et les signes qui doivent vous faire consulter en urgence. Vous pouvez le présenter à votre médecin local.',
      },
    ],
    refs: [
      { label: 'SNFCP — La fissure anale (information patients)', url: 'https://www.snfcp.org/informations-maladies/fissure-anale/la-fissure-anale/' },
      { label: 'SNFCP — Alimentation et anus', url: 'https://www.snfcp.org/informations-maladies/generalites/alimentation-et-anus/' },
      { label: 'SNFCP — Recommandations', url: 'https://www.snfcp.org/recommandations/' },
      { label: 'ESCP — European Society of Coloproctology, guidelines', url: 'https://www.escp.eu.com/guidelines' },
    ],
  },

  // 3. Fistule anale et abcès
  {
    key: 'fistula',
    slug: 'fistule-anale',
    navLabel: 'Fistule anale et abcès',
    title: 'Fistule anale et abcès : avis d’un proctologue',
    description:
      'Écoulement de pus près de l’anus, abcès qui revient : comprenez la fistule anale et ses traitements avec un proctologue en vidéoconsultation de 30 minutes.',
    h1: 'Fistule anale et abcès : avis d’un proctologue par vidéoconsultation',
    whatIs:
      'L’abcès anal est une poche de pus qui se forme près de l’anus, le plus souvent à partir d’une petite glande infectée du canal anal. Il donne une douleur intense, une tuméfaction et parfois de la fièvre. Après le drainage, il peut rester un petit tunnel entre l’intérieur du canal et la peau : c’est la fistule anale, qui suinte et se réinfecte régulièrement.',
    signs: {
      intro: 'Une consultation spécialisée est utile si :',
      list: [
        'Un petit orifice près de l’anus laisse couler du pus, du sang ou un liquide clair.',
        'Un abcès a déjà été incisé ou s’est ouvert seul, puis revient au même endroit.',
        'Vous tachez régulièrement vos sous-vêtements et ressentez une irritation de la peau.',
        'Une gêne ou une boule revient par périodes au même endroit.',
        'On vous a annoncé une fistule et proposé une intervention que vous voulez comprendre.',
        'Vous avez une maladie de Crohn, un diabète ou une immunité affaiblie et des symptômes anaux.',
      ],
    },
    online: {
      can: [
        'Reconstituer l’histoire des abcès et des écoulements pour comprendre la situation.',
        'Lire une IRM pelvienne, une échographie endoanale ou un compte rendu opératoire et vous l’expliquer.',
        'Vous présenter les principes du traitement chirurgical et le choix entre plusieurs techniques.',
        'Préparer les questions à poser à votre chirurgien et vous donner un deuxième avis.',
        'Organiser, si vous le souhaitez, une prise en charge à Lima.',
      ],
      cannot: [
        'Drainer un abcès : c’est un geste à faire sur place, sans attendre.',
        'Examiner le trajet de la fistule ou réaliser l’intervention.',
        'Remplacer une consultation d’urgence en cas de fièvre ou de douleur intense.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner ou vous opérer, il vous explique où et comment.',
    },
    urgent: [
      'Boule douloureuse, chaude et rouge près de l’anus qui grossit, avec ou sans fièvre.',
      'Fièvre, frissons ou sensation de malaise général.',
      'Impossibilité de s’asseoir ou d’uriner à cause de la douleur.',
      'Rougeur qui s’étend en quelques heures sur la fesse ou le périnée, surtout en cas de diabète.',
    ],
    sections: [
      {
        h2: 'Abcès d’abord, fistule ensuite',
        paras: [
          'L’abcès se traite par un drainage chirurgical réalisé en urgence, souvent sous anesthésie. Les traitements seuls, sans drainage, ne suffisent pas à vider la poche de pus. Après ce geste, environ un tiers à la moitié des personnes gardent une fistule, ce qui explique les récidives au même endroit.',
          'Si vous vivez dans une région où l’accès au chirurgien est difficile, ne laissez pas un abcès évoluer : rendez-vous au centre de santé ou à l’hôpital le plus proche. La vidéoconsultation sert ensuite à comprendre la suite et à planifier le traitement de la fistule.',
        ],
      },
      {
        h2: 'Comment traite-t-on une fistule ?',
        paras: [
          'Le traitement de la fistule est chirurgical. Tout l’enjeu consiste à fermer le trajet sans abîmer le sphincter, le muscle qui assure la continence. Selon la hauteur et la forme du trajet, le chirurgien peut ouvrir le tunnel en une fois, poser un fil de drainage appelé séton pendant quelques semaines, ou utiliser des techniques qui préservent le muscle.',
          'Une imagerie (IRM pelvienne ou échographie endoanale) aide à préparer l’intervention dans les fistules complexes. Le proctologue vous explique ce que montre votre examen et pourquoi telle technique est proposée.',
          'Il n’existe pas de technique unique valable pour toutes les fistules. Un trajet bas, qui traverse peu de muscle, se traite le plus souvent en une seule intervention. Un trajet haut ou ramifié peut demander deux ou trois temps opératoires, espacés de plusieurs semaines. Comprendre ce calendrier dès le départ aide à organiser son travail, sa famille et, le cas échéant, un séjour à l’étranger.',
        ],
      },
      {
        h2: 'Se faire opérer à Lima ?',
        paras: [
          'Certaines personnes choisissent de se faire traiter au Pérou, à la Clinique proctologique de Lima. La vidéoconsultation permet de vérifier que le projet est raisonnable, de prévoir les examens à apporter et d’estimer la durée du séjour. Les détails pratiques figurent sur la page <a href="/fr/traitement-a-lima/">traitement à Lima</a>.',
        ],
      },
      {
        h2: 'Les suites de l’intervention et les situations particulières',
        paras: [
          'Après l’opération d’une fistule, la plaie est souvent laissée ouverte pour cicatriser de la profondeur vers la surface. Les soins locaux, la douche après chaque selle et des selles molles comptent beaucoup. La cicatrisation prend en général plusieurs semaines, avec des contrôles réguliers. Le proctologue vous explique à l’avance ce qui est attendu et ce qui doit vous alerter.',
          'Certaines situations demandent une attention particulière. Une maladie de Crohn peut s’accompagner de fistules multiples, dont la prise en charge associe le gastro-entérologue et le chirurgien. Le diabète expose à des infections plus étendues. Une fistule qui revient malgré plusieurs interventions justifie un bilan complet, souvent avec une IRM. Enfin, une suppuration située plus haut, entre les fesses, peut correspondre à un kyste pilonidal, qui n’est pas une fistule anale et se traite différemment.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Une fistule peut-elle se refermer seule ?',
        a: 'Il arrive que l’orifice se ferme quelques semaines, mais le trajet persiste en général et l’infection revient. C’est pourquoi un avis chirurgical est recommandé.',
      },
      {
        q: 'Un traitement médical suffit-il pour un abcès ?',
        a: 'Non. Un abcès doit être drainé. Un traitement médical peut compléter le drainage dans certains cas, mais il ne le remplace pas.',
      },
      {
        q: 'Vais-je devenir incontinent après l’opération ?',
        a: 'Le risque dépend de la quantité de muscle traversée par la fistule. Pour les trajets à risque, les chirurgiens privilégient des techniques qui préservent le sphincter, quitte à procéder en plusieurs temps.',
      },
      {
        q: 'Pourquoi le séton reste-t-il en place plusieurs semaines ?',
        a: 'Le séton laisse le pus s’écouler et calme l’inflammation avant le traitement définitif du trajet. Sa durée varie selon chaque situation ; le proctologue vous explique le calendrier prévu.',
      },
      {
        q: 'Quels documents préparer pour la vidéoconsultation ?',
        a: 'Les comptes rendus d’urgence ou opératoires, une IRM ou une échographie si vous en avez, et la liste de vos traitements et maladies. Des photos de documents suffisent.',
      },
    ],
    refs: [
      { label: 'SNFCP — Une fistule anale (information patients)', url: 'https://www.snfcp.org/informations-maladies/fistules-anales-suppurations/une-fistule-anale/' },
      { label: 'SNFCP — Abcès anal', url: 'https://www.snfcp.org/informations-maladies/fistules-anales-suppurations/abces-anal/' },
      { label: 'SNFCP — Mini-guide des urgences en proctologie', url: 'https://www.snfcp.org/mini-guide-des-urgences-en-proctologie/' },
      { label: 'ESCP — European Society of Coloproctology, guidelines', url: 'https://www.escp.eu.com/guidelines' },
    ],
  },

  // 4. Condylomes
  {
    key: 'condilomas',
    slug: 'condylomes',
    navLabel: 'Condylomes anaux',
    title: 'Condylomes anaux : traitement et avis d’un proctologue',
    description:
      'Petites verrues autour de l’anus, liées au papillomavirus (HPV) : un proctologue vous explique les traitements et le suivi en vidéoconsultation confidentielle.',
    h1: 'Condylomes anaux : avis d’un proctologue par vidéoconsultation',
    whatIs:
      'Les condylomes sont des verrues bénignes de la région anale et génitale, causées par certains types de papillomavirus humain (HPV). Ils se transmettent par contact intime, y compris sans pénétration. Ils peuvent être plats ou en relief, isolés ou nombreux, et apparaître des semaines ou des mois après la contamination. Ils ne sont pas dangereux, mais ont tendance à récidiver.',
    signs: {
      intro: 'Une consultation spécialisée est conseillée si :',
      list: [
        'Vous sentez ou voyez de petites excroissances autour de l’anus.',
        'Ces lésions démangent, saignent au contact ou gênent l’hygiène.',
        'Des condylomes ont déjà été traités et réapparaissent.',
        'Votre partenaire a des condylomes ou une lésion liée au HPV.',
        'Vous vivez avec le VIH ou une immunité affaiblie.',
        'Vous vous demandez s’il faut examiner aussi l’intérieur du canal anal.',
      ],
    },
    online: {
      can: [
        'Vous expliquer simplement ce qu’est le HPV, comment il se transmet et ce que cela implique pour le couple.',
        'Vous présenter les traitements possibles, locaux, en cabinet ou chirurgicaux, et leurs limites.',
        'Vous conseiller sur le dépistage des autres infections sexuellement transmissibles.',
        'Discuter de la vaccination contre le HPV pour vous ou vos proches.',
        'Vous indiquer quel examen demander et à quel spécialiste vous adresser localement.',
      ],
      cannot: [
        'Confirmer qu’une lésion est un condylome sans l’examiner.',
        'Examiner l’intérieur du canal anal, ce qui demande une anuscopie.',
        'Traiter les lésions : cela se fait en consultation sur place.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous, en toute confidentialité. S’il faut vous examiner, il vous explique où et comment.',
    },
    urgent: [
      'Lésion qui saigne beaucoup ou qui grossit en quelques semaines.',
      'Ulcération douloureuse ou plaie qui ne cicatrise pas.',
      'Fièvre avec une douleur anale intense.',
    ],
    sections: [
      {
        h2: 'HPV, condylomes et santé à long terme',
        paras: [
          'Les types de HPV responsables des condylomes sont différents de ceux qui exposent au cancer. Toutefois, une même personne peut porter plusieurs types de virus. Chez les personnes vivant avec le VIH, les hommes ayant des rapports avec des hommes et certaines femmes suivies pour des lésions du col de l’utérus, un dépistage des lésions précancéreuses de l’anus peut être proposé.',
          'Le traitement enlève les lésions visibles, mais pas forcément le virus. Le système immunitaire l’élimine souvent avec le temps. Les récidives sont donc fréquentes dans les premiers mois et demandent un suivi.',
          'D’autres lésions peuvent ressembler à des condylomes : marisques, petites excroissances de peau, molluscum contagiosum, ou plus rarement lésions de syphilis ou lésions précancéreuses. C’est pourquoi un examen par un médecin habitué à la région anale reste indispensable avant tout traitement. La vidéoconsultation vous aide à savoir à qui vous adresser, quelles questions poser et ce que vous pouvez attendre de cette consultation.',
        ],
      },
      {
        h2: 'Les options de traitement',
        list: [
          '<strong>Traitements locaux</strong> appliqués à domicile, pour les petites lésions externes ; ils sont prescrits selon la réglementation de votre pays.',
          '<strong>Procédures en cabinet</strong> : destruction par le froid, électrocoagulation ou laser.',
          '<strong>Chirurgie</strong> sous anesthésie pour les lésions étendues ou situées dans le canal anal.',
        ],
      },
      {
        h2: 'Prévention et vie de couple',
        paras: [
          'Le préservatif réduit la transmission sans la supprimer, car le virus est présent sur la peau autour. La vaccination contre le HPV, désormais proposée dans de nombreux pays d’Afrique et des Amériques, protège contre les types les plus courants ; elle est surtout efficace avant le début de la vie sexuelle, mais peut être discutée plus tard.',
          'Il est utile que votre partenaire consulte aussi. Parler de condylomes peut être délicat : le proctologue aborde le sujet sans jugement et vous aide à préparer cette conversation.',
          'Pendant la période de traitement, il est conseillé d’éviter les rapports au niveau des zones touchées, de ne pas raser ni épiler la région anale, ce qui peut disséminer les lésions, et de ne pas appliquer de produits achetés sans avis médical.',
        ],
      },
      {
        h2: 'Le suivi après le traitement',
        paras: [
          'Une fois les lésions traitées, un contrôle est généralement prévu quelques semaines plus tard, puis à intervalles réguliers pendant plusieurs mois. L’objectif est de repérer tôt une récidive, quand elle est encore petite et plus simple à traiter. Il est fréquent de devoir répéter le traitement une ou deux fois : ce n’est pas un échec, mais l’évolution habituelle de cette infection.',
          'Les condylomes situés à l’intérieur du canal anal passent souvent inaperçus. C’est pourquoi le spécialiste examine en général aussi l’intérieur de l’anus, même lorsque seules des lésions externes sont visibles. Chez les femmes, un suivi gynécologique du col de l’utérus est également recommandé, car le même virus peut toucher plusieurs régions.',
          'Le plan écrit remis après la vidéoconsultation résume les examens à prévoir, le rythme de suivi conseillé et les signes qui doivent vous faire consulter plus tôt. Vous pouvez le présenter au médecin ou au dermatologue qui vous suit dans votre pays.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Les condylomes veulent-ils dire que mon partenaire m’a trompé ?',
        a: 'Pas nécessairement. Le HPV peut rester silencieux pendant des mois, voire des années, avant de donner des lésions. Il est souvent impossible de savoir quand la contamination a eu lieu.',
      },
      {
        q: 'Les condylomes disparaissent-ils seuls ?',
        a: 'Cela arrive, surtout pour de petites lésions, mais c’est imprévisible. Un traitement est en général conseillé pour limiter l’extension et la transmission.',
      },
      {
        q: 'La vidéoconsultation est-elle confidentielle ?',
        a: 'Oui. Elle se déroule en appel vidéo privé, et vos informations médicales ne sont jamais transmises aux outils publicitaires du site.',
      },
      {
        q: 'Dois-je montrer les lésions à la caméra ?',
        a: 'Non. L’entretien suffit pour vous orienter. Le proctologue vous dira où faire examiner les lésions dans de bonnes conditions.',
      },
      {
        q: 'Faut-il faire d’autres tests ?',
        a: 'Le plus souvent, un dépistage du VIH, de la syphilis et des hépatites est conseillé. Le plan écrit précise quels examens demander à votre médecin.',
      },
    ],
    refs: [
      { label: 'SNFCP — Condylomes de l’anus (information patients)', url: 'https://www.snfcp.org/informations-maladies/infections-sexuellement-transmises/condylomes-de-lanus/' },
      { label: 'SNFCP — HPV et anus : on vous dit tout', url: 'https://www.snfcp.org/hpv-et-anus-on-vous-dit-tout/' },
      { label: 'OMS — Papillomavirus humain et cancer (aide-mémoire)', url: 'https://www.who.int/fr/news-room/fact-sheets/detail/human-papilloma-virus-and-cancer' },
      { label: 'OMS — Infections sexuellement transmissibles (aide-mémoire)', url: 'https://www.who.int/fr/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)' },
    ],
  },

  // 5. Saignement anal
  {
    key: 'sangrado',
    slug: 'saignement-anal',
    navLabel: 'Saignement anal',
    title: 'Saignement anal : quand consulter un proctologue ?',
    description:
      'Du sang sur le papier ou dans les selles ? Découvrez les causes possibles, les signes d’alerte et comment un proctologue vous oriente en vidéoconsultation.',
    h1: 'Saignement anal : quand consulter un proctologue ?',
    whatIs:
      'Voir du sang après être allé à la selle inquiète, et c’est normal. Le plus souvent, il s’agit de sang rouge vif lié à des hémorroïdes ou à une fissure. Mais un saignement peut aussi venir du côlon ou du rectum et révéler un polype, une inflammation ou, plus rarement, un cancer. Sans examen, on ne peut pas savoir : il ne faut ni paniquer ni l’ignorer.',
    signs: {
      intro: 'Demandez un avis médical si vous constatez :',
      list: [
        'Du sang rouge sur le papier, dans la cuvette ou sur les selles, même une seule fois.',
        'Un saignement qui revient régulièrement depuis plusieurs semaines.',
        'Du sang plus sombre, mélangé aux selles, ou des glaires.',
        'Un changement durable de vos habitudes : constipation ou diarrhée inhabituelles.',
        'Une fatigue anormale, une pâleur ou une anémie découverte sur une prise de sang.',
        'Des antécédents de cancer colorectal ou de polypes dans votre famille.',
        'Un âge de plus de 45–50 ans sans coloscopie de dépistage.',
      ],
    },
    online: {
      can: [
        'Analyser l’aspect, la fréquence et le contexte du saignement pour orienter vers sa cause probable.',
        'Évaluer votre niveau de risque et vous dire si une coloscopie est indiquée, et dans quel délai.',
        'Lire vos analyses de sang, résultats de test des selles ou de coloscopie et vous les expliquer.',
        'Vous remettre un plan écrit à présenter à votre médecin ou à un gastro-entérologue local.',
      ],
      cannot: [
        'Trouver l’origine du saignement : cela demande un examen et parfois une coloscopie.',
        'Écarter un polype ou un cancer à distance.',
        'Prendre en charge un saignement abondant : il faut aller aux urgences.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner, il vous explique où et comment, et quels examens demander.',
    },
    urgent: [
      'Saignement abondant, en jet, ou avec de gros caillots.',
      'Selles noires, collantes et malodorantes.',
      'Malaise, vertiges, perte de connaissance, cœur qui bat très fort.',
      'Saignement avec forte douleur abdominale ou fièvre.',
    ],
    sections: [
      {
        h2: 'Les causes les plus fréquentes',
        list: [
          '<strong>Hémorroïdes</strong> : sang rouge vif, souvent indolore, en fin de selle. Voir la page <a href="/fr/hemorroides/">hémorroïdes</a>.',
          '<strong>Fissure anale</strong> : peu de sang, mais douleur vive à la selle. Voir la page <a href="/fr/fissure-anale/">fissure anale</a>.',
          '<strong>Polypes du côlon ou du rectum</strong> : souvent silencieux, ils saignent parfois ; leur retrait prévient le cancer.',
          '<strong>Inflammation de l’intestin</strong> (rectite, maladie de Crohn, rectocolite) : sang avec glaires et diarrhée.',
          '<strong>Infections</strong>, dont certaines parasitoses intestinales fréquentes en zone tropicale.',
          '<strong>Cancer colorectal ou anal</strong> : plus rare, mais à rechercher selon l’âge et le contexte.',
        ],
      },
      {
        h2: 'Pourquoi ne pas se contenter de « ce sont mes hémorroïdes »',
        paras: [
          'Beaucoup de personnes attribuent tout saignement aux hémorroïdes et attendent des mois avant de consulter. Or le cancer colorectal touche de plus en plus d’adultes jeunes, et son pronostic dépend beaucoup du moment où il est découvert. Dans de nombreux pays d’Afrique et en Haïti, il est encore souvent diagnostiqué à un stade avancé.',
          'L’objectif de la vidéoconsultation n’est pas de vous inquiéter, mais de décider avec vous du bon examen au bon moment : un examen proctologique simple, une coloscopie, ou une surveillance si le risque est faible.',
          'Dans plusieurs pays, des programmes de dépistage du cancer colorectal proposent un test simple de recherche de sang invisible dans les selles à partir de 45 ou 50 ans. Ce test ne remplace pas un avis lorsque vous voyez du sang : un saignement visible justifie une évaluation, même si un test précédent était normal. Le proctologue vous aide à vous repérer entre ces différentes options et à choisir celle qui correspond à votre âge, à vos antécédents et aux ressources disponibles près de chez vous.',
        ],
      },
      {
        h2: 'Quand la coloscopie est-elle conseillée ?',
        paras: [
          'Elle est généralement recommandée en cas de saignement persistant après 45–50 ans, d’antécédents familiaux, d’anémie, de changement du transit ou de perte de poids. Le proctologue vous explique sa préparation, son déroulement et ce qu’il faut demander dans votre pays. Si vous habitez au Québec et attendez un rendez-vous, il peut vous donner un <a href="/fr/deuxieme-avis/">deuxième avis</a> sur votre dossier.',
        ],
      },
      {
        h2: 'Bien préparer la vidéoconsultation',
        paras: [
          'Plus vos informations sont précises, plus l’orientation sera utile. Avant l’appel, prenez quelques minutes pour noter ce que vous observez. Il n’est pas nécessaire de photographier le sang ou les selles : une description suffit.',
        ],
        list: [
          'Depuis quand le saignement existe et à quelle fréquence il revient.',
          'Sa couleur (rouge vif ou plus sombre) et où vous le voyez : papier, cuvette, mélangé aux selles.',
          'Les signes associés : douleur, boule, démangeaisons, glaires, changement du transit, perte de poids.',
          'Vos traitements en cours, vos maladies et les cas de cancer du côlon ou de polypes dans la famille.',
          'Vos derniers résultats : prise de sang, test de recherche de sang dans les selles, coloscopie.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Un peu de sang une seule fois, est-ce grave ?',
        a: 'Le plus souvent non, surtout s’il s’agit de sang rouge sur le papier après une selle dure. Mais si cela se répète ou s’accompagne d’autres signes, un avis est conseillé.',
      },
      {
        q: 'Le sang rouge vif est-il rassurant ?',
        a: 'Il oriente vers une cause proche de l’anus, comme des hémorroïdes ou une fissure, mais n’exclut pas une lésion du rectum. Seul un examen permet de conclure.',
      },
      {
        q: 'Pouvez-vous me dire si j’ai un cancer ?',
        a: 'Non, aucun médecin ne peut l’affirmer ou l’écarter sans examen. Le proctologue évalue votre risque et vous indique quel examen faire et dans quel délai.',
      },
      {
        q: 'Je prends un traitement qui fluidifie le sang et je saigne, que faire ?',
        a: 'Ne modifiez jamais seul votre traitement. Parlez-en au médecin qui le suit et consultez en urgence si le saignement est abondant.',
      },
      {
        q: 'La vidéoconsultation remplace-t-elle la coloscopie ?',
        a: 'Non. Elle permet de savoir si une coloscopie est nécessaire, de préparer les bonnes questions et de comprendre les résultats ensuite.',
      },
    ],
    refs: [
      { label: 'SNFCP — Sang, douleur, grosseur anale : est-ce vraiment mes hémorroïdes ?', url: 'https://www.snfcp.org/informations-maladies/generalites/sang-douleur-grosseur-anale-est-ce-que-ce-sont-vraiment-mes-hemorroides/' },
      { label: 'SNFCP — La coloscopie', url: 'https://www.snfcp.org/informations-maladies/examens-et-exploration/coloscopie/' },
      { label: 'OMS — Cancer colorectal (aide-mémoire)', url: 'https://www.who.int/fr/news-room/fact-sheets/detail/colorectal-cancer' },
      { label: 'NICE — Suspected cancer: recognition and referral (NG12)', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  },

  // 6. Démangeaisons anales
  {
    key: 'picazon',
    slug: 'demangeaisons-anales',
    navLabel: 'Démangeaisons anales',
    title: 'Démangeaisons anales : causes et avis d’un proctologue',
    description:
      'Démangeaisons anales qui reviennent, surtout la nuit ? Un proctologue cherche avec vous la cause et vous propose un plan en vidéoconsultation de 30 minutes.',
    h1: 'Démangeaisons anales : avis d’un proctologue par vidéoconsultation',
    whatIs:
      'Le prurit anal désigne des démangeaisons autour de l’anus. Très fréquent et souvent gênant à évoquer, il s’aggrave volontiers la nuit, avec la chaleur ou la transpiration. Il a de nombreuses causes : irritation par l’humidité ou un nettoyage trop agressif, hémorroïdes, fissure, parasites, mycose, eczéma, allergie de contact ou certaines maladies de peau.',
    signs: {
      intro: 'Pensez à consulter si :',
      list: [
        'Les démangeaisons durent depuis plus de deux à trois semaines.',
        'Elles vous réveillent la nuit ou vous empêchent de vous concentrer.',
        'La peau est rouge, fissurée, suintante ou s’épaissit.',
        'Plusieurs personnes du foyer, notamment des enfants, se grattent aussi.',
        'Vous avez essayé plusieurs crèmes sans amélioration.',
        'Les démangeaisons s’accompagnent de saignement, de boule ou d’écoulement.',
      ],
    },
    online: {
      can: [
        'Rechercher avec vous les causes probables à partir de vos habitudes, de votre peau et de vos symptômes.',
        'Revoir votre hygiène locale et les produits utilisés, souvent en cause.',
        'Vous indiquer s’il faut rechercher des parasites, une mycose ou une infection.',
        'Vous expliquer les grandes lignes du traitement médical, prescrit selon la réglementation de votre pays.',
        'Vous dire quand un examen par un proctologue ou un dermatologue est nécessaire.',
      ],
      cannot: [
        'Examiner la peau de près ou faire un prélèvement.',
        'Réaliser une biopsie si une lésion persiste.',
        'Écarter à distance une maladie de peau ou une lésion qui demande un examen.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner, il vous explique où et comment.',
    },
    urgent: [
      'Fièvre avec une zone rouge, chaude et douloureuse autour de l’anus.',
      'Plaie ou lésion qui saigne et ne cicatrise pas.',
      'Démangeaisons avec saignement abondant.',
    ],
    sections: [
      {
        h2: 'Les causes les plus fréquentes',
        list: [
          '<strong>Irritation locale</strong> : humidité, transpiration, lingettes parfumées, savons, frottement avec du papier.',
          '<strong>Maladies proctologiques</strong> : hémorroïdes qui suintent, fissure, marisques qui gênent l’hygiène, fistule.',
          '<strong>Parasites</strong> : l’oxyurose est fréquente chez l’enfant et toute la famille ; d’autres parasitoses intestinales sont courantes en zone tropicale.',
          '<strong>Infections de la peau</strong> : mycoses, notamment en cas de diabète ou par forte chaleur, et certaines infections sexuellement transmissibles.',
          '<strong>Maladies de peau</strong> : eczéma, psoriasis, lichen, allergie de contact.',
          '<strong>Alimentation</strong> : café, épices, agrumes ou alcool chez certaines personnes.',
        ],
      },
      {
        h2: 'Les bons gestes d’hygiène',
        paras: [
          'Paradoxalement, un nettoyage trop fréquent ou trop énergique entretient les démangeaisons. Dans de nombreux foyers, on se lave à l’eau après la selle, ce qui est une bonne habitude, à condition de bien sécher ensuite.',
        ],
        list: [
          'Nettoyer à l’eau tiède, sans frotter, avec un savon doux sans parfum si besoin.',
          'Sécher en tamponnant avec une serviette propre, ou à l’air.',
          'Éviter lingettes parfumées, talc et antiseptiques irritants.',
          'Porter des sous-vêtements en coton, amples, changés chaque jour.',
          'Couper les ongles courts et éviter de se gratter, surtout la nuit.',
        ],
      },
      {
        h2: 'Briser le cercle des démangeaisons et du grattage',
        paras: [
          'Le grattage soulage sur le moment, mais il abîme la peau, qui devient plus fine, plus sensible et parfois infectée. Cette peau irritée démange encore davantage, et le cercle s’installe. Avec le temps, la région peut devenir épaissie, blanchâtre ou fissurée, ce qui rend le problème plus long à apaiser.',
          'Pour sortir de ce cercle, il faut à la fois traiter la cause et protéger la peau. Pendant la nuit, des gants en coton peuvent limiter le grattage inconscient. Un vêtement de nuit ample et une chambre aérée réduisent la transpiration. Un petit morceau de coton placé entre les fesses absorbe l’humidité au cours de la journée.',
          'Le stress et la fatigue amplifient souvent la sensation de démangeaison. Ce n’est pas « dans la tête » : les nerfs de la peau réagissent davantage lorsque l’on est tendu. En tenir compte fait partie du plan proposé.',
        ],
      },
      {
        h2: 'Préparer la vidéoconsultation',
        paras: [
          'Notez depuis quand les démangeaisons existent, à quel moment de la journée elles sont plus fortes, les produits que vous avez appliqués, vos maladies (diabète, maladie de peau, allergie) et si d’autres personnes du foyer sont concernées. Ces éléments orientent beaucoup vers une cause et permettent d’éviter des examens inutiles.',
          'Si vous avez déjà consulté, rassemblez les noms des produits utilisés, les résultats d’analyses de selles ou de prélèvements et, le cas échéant, le compte rendu d’un examen proctologique. Vous n’avez pas besoin de montrer la région à la caméra : l’entretien suffit pour construire un premier plan, que vous pourrez ensuite présenter à votre médecin ou à votre dermatologue.',
        ],
      },
      {
        h2: 'Quand faut-il aller plus loin ?',
        paras: [
          'Si les démangeaisons persistent malgré de bonnes mesures d’hygiène, un examen proctologique ou dermatologique est utile pour identifier une cause précise. Une lésion qui ne cicatrise pas doit parfois être prélevée. Le plan écrit vous indique quels examens demander et à qui. Si un saignement accompagne les démangeaisons, lisez aussi <a href="/fr/saignement-anal/">saignement anal : quand consulter</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Les démangeaisons anales sont-elles dues à un manque d’hygiène ?',
        a: 'Rarement. Elles viennent plus souvent d’un excès de nettoyage, de produits irritants ou d’une cause médicale. Il n’y a aucune honte à en parler.',
      },
      {
        q: 'Mon enfant se gratte la nuit, est-ce des vers ?',
        a: 'C’est une cause fréquente chez l’enfant. Le traitement concerne en général toute la famille ; votre médecin ou votre pharmacien vous guidera selon la réglementation de votre pays.',
      },
      {
        q: 'Puis-je continuer la crème que j’utilise depuis des mois ?',
        a: 'Certaines crèmes appliquées longtemps abîment la peau et entretiennent les démangeaisons. Parlez-en au proctologue : il vous dira s’il vaut mieux faire une pause et consulter localement.',
      },
      {
        q: 'Est-ce une infection sexuellement transmissible ?',
        a: 'C’est possible mais pas le plus fréquent. Selon votre situation, le proctologue peut vous conseiller un dépistage.',
      },
      {
        q: 'Combien de temps pour aller mieux ?',
        a: 'Cela dépend de la cause. Avec des mesures adaptées, beaucoup de personnes constatent une amélioration en quelques semaines ; sinon, un examen est recommandé.',
      },
    ],
    refs: [
      { label: 'SNFCP — Prurit anal (information patients)', url: 'https://www.snfcp.org/informations-maladies/divers/prurit-anal/' },
      { label: 'SNFCP — Alimentation et anus', url: 'https://www.snfcp.org/informations-maladies/generalites/alimentation-et-anus/' },
      { label: 'OMS — Géohelminthiases (aide-mémoire)', url: 'https://www.who.int/fr/news-room/fact-sheets/detail/soil-transmitted-helminth-infections' },
      { label: 'SNFCP — Recommandations', url: 'https://www.snfcp.org/recommandations/' },
    ],
  },

  // 7. Constipation chronique et plancher pelvien
  {
    key: 'estrenimiento',
    slug: 'constipation-chronique',
    navLabel: 'Constipation et plancher pelvien',
    title: 'Constipation chronique : avis d’un proctologue',
    description:
      'Selles rares, efforts de poussée, sensation d’évacuation incomplète : un proctologue évalue votre constipation et votre plancher pelvien en vidéoconsultation.',
    h1: 'Constipation chronique et plancher pelvien : avis d’un proctologue',
    whatIs:
      'On parle de constipation chronique lorsque, depuis plusieurs mois, les selles sont rares, dures ou difficiles à évacuer. Elle peut venir d’un transit lent ou d’un trouble de l’évacuation, lié au plancher pelvien : les muscles ne se relâchent pas bien, ou le rectum forme une poche (rectocèle). Ces deux mécanismes se traitent différemment.',
    signs: {
      intro: 'Un avis spécialisé est utile si :',
      list: [
        'Vous allez à la selle moins de trois fois par semaine depuis plusieurs mois.',
        'Vous devez pousser fort, même quand les selles sont molles.',
        'Vous avez l’impression de ne jamais vous vider complètement.',
        'Vous devez appuyer sur le périnée ou dans le vagin pour évacuer.',
        'La constipation entraîne des hémorroïdes ou des fissures à répétition.',
        'Vous dépendez de produits pour aller à la selle et souhaitez faire le point.',
        'Les troubles sont apparus après un accouchement ou une chirurgie pelvienne.',
      ],
    },
    online: {
      can: [
        'Analyser votre transit et vos symptômes pour distinguer un transit lent d’un trouble d’évacuation.',
        'Revoir votre alimentation, votre hydratation, votre activité et votre position aux toilettes.',
        'Vous proposer un journal des selles et vous apprendre à utiliser l’échelle de Bristol.',
        'Vous expliquer les examens utiles (manométrie anorectale, défécographie, coloscopie) et quand les demander.',
        'Vous orienter vers la rééducation périnéale et vous remettre un plan écrit.',
      ],
      cannot: [
        'Examiner le périnée ou réaliser une manométrie.',
        'Commencer une rééducation par biofeedback, qui se fait sur place.',
        'Écarter à distance une cause organique qui demande un examen.',
      ],
      note:
        'En vidéoconsultation, le proctologue étudie vos symptômes, vous oriente et construit un plan avec vous. S’il faut vous examiner ou réaliser des examens, il vous explique où et comment.',
    },
    urgent: [
      'Ventre gonflé et dur, vomissements, absence de gaz et de selles.',
      'Douleur abdominale intense et inhabituelle.',
      'Sang dans les selles avec perte de poids ou fièvre.',
    ],
    sections: [
      {
        h2: 'Transit lent ou trouble de l’évacuation ?',
        paras: [
          'Dans le transit lent, les selles avancent lentement dans le côlon et l’envie se fait rare. Dans le trouble de l’évacuation, l’envie est là, mais la selle a du mal à sortir : contraction paradoxale des muscles pendant l’effort, rectocèle, prolapsus interne du rectum. Beaucoup de personnes ont un peu des deux.',
          'Faire la différence change tout : les fibres et l’eau aident surtout le transit lent, tandis que la rééducation du plancher pelvien est souvent la clé du trouble d’évacuation.',
          'Certains médicaments pris pour d’autres maladies, un manque d’activité, une hypothyroïdie, un diabète ou certaines maladies neurologiques peuvent aussi ralentir le transit. Le proctologue passe en revue ces causes possibles avec vous et vous indique, si besoin, quelles analyses demander à votre médecin. Un journal des selles tenu pendant deux semaines, avec la forme des selles selon l’échelle de Bristol et les efforts ressentis, rend l’entretien beaucoup plus précis.',
        ],
      },
      {
        h2: 'Les étapes de la prise en charge',
        list: [
          '<strong>Habitudes de vie</strong> : fibres introduites progressivement, eau, marche quotidienne, horaire régulier après le repas.',
          '<strong>Position</strong> : pieds surélevés sur un tabouret, buste penché en avant, ne pas pousser en bloquant la respiration.',
          '<strong>Traitement médical</strong> : il existe plusieurs familles de produits ; leur choix et toute ordonnance relèvent de la réglementation de votre pays.',
          '<strong>Rééducation périnéale</strong> avec biofeedback auprès d’un kinésithérapeute formé.',
          '<strong>Chirurgie</strong> : rarement nécessaire, pour certaines rectocèles ou certains prolapsus après bilan complet.',
        ],
      },
      {
        h2: 'Femmes, grossesse et accouchement',
        paras: [
          'Les grossesses et les accouchements par voie basse peuvent fragiliser le plancher pelvien. Constipation, sensation de pesanteur et besoin d’appuyer pour évacuer ne sont pas une fatalité. En parler permet d’orienter vers une rééducation adaptée. La constipation fait aussi le lit des <a href="/fr/hemorroides/">hémorroïdes</a> et des <a href="/fr/fissure-anale/">fissures</a> : la traiter, c’est aussi les prévenir.',
          'La constipation est aussi fréquente pendant la grossesse elle-même. Les mesures d’alimentation et d’activité restent la base ; tout traitement doit être choisi avec le médecin ou la sage-femme qui suit la grossesse.',
        ],
      },
      {
        h2: 'Mieux manger pour mieux aller à la selle',
        paras: [
          'Les fibres augmentent le volume et l’humidité des selles. On les trouve dans les légumes, les fruits avec leur peau, les légumineuses (haricots, lentilles, pois), les céréales complètes, le mil, le sorgho ou le fonio, les patates douces et le gombo. Il est conseillé de les augmenter progressivement, sur deux à trois semaines, pour éviter ballonnements et gaz.',
          'Les fibres n’agissent bien qu’avec suffisamment d’eau. Sous un climat chaud, les besoins augmentent nettement. À l’inverse, une alimentation très riche en farines raffinées, en riz blanc, en pain blanc ou en plats industriels et pauvre en légumes favorise la constipation.',
          'Si, malgré ces changements tenus plusieurs semaines, le transit ne s’améliore pas, ou si vous ressentez surtout une difficulté à évacuer, il est probable qu’un trouble du plancher pelvien soit en cause. Le proctologue vous aide alors à préparer les bons examens.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Aller à la selle tous les deux jours, est-ce de la constipation ?',
        a: 'Pas forcément. Entre trois selles par jour et trois par semaine, le rythme est considéré comme normal si l’évacuation est facile et confortable.',
      },
      {
        q: 'Les produits pour aller à la selle sont-ils dangereux à long terme ?',
        a: 'Certains se prennent sans difficulté sur de longues périodes, d’autres sont à limiter. Le proctologue fait le point avec vous ; toute ordonnance relève de la réglementation de votre pays.',
      },
      {
        q: 'Qu’est-ce que la rééducation périnéale ?',
        a: 'Ce sont des séances avec un kinésithérapeute qui vous apprend à coordonner la poussée et le relâchement des muscles. Elle est particulièrement utile dans les troubles de l’évacuation.',
      },
      {
        q: 'Faut-il faire une coloscopie ?',
        a: 'Elle est conseillée en cas de signes d’alerte (sang, anémie, perte de poids, antécédents familiaux) ou d’apparition récente des troubles après 45–50 ans. Le proctologue vous dira si elle est indiquée.',
      },
      {
        q: 'La constipation de mon enfant relève-t-elle d’un proctologue ?',
        a: 'Le proctologue peut vous conseiller, mais un suivi par le pédiatre reste la référence chez l’enfant. Il vous indiquera les signes qui imposent de consulter sans attendre.',
      },
    ],
    refs: [
      { label: 'SNFCP — Transit, constipation : quelle normalité ?', url: 'https://www.snfcp.org/informations-maladies/constipation-et-incontinence/transit-constipation-normalite-2/' },
      { label: 'SNFCP — La rééducation périnéale', url: 'https://www.snfcp.org/informations-maladies/constipation-et-incontinence/allez-reeducation-perineale/' },
      { label: 'SNFCP — La rectocèle', url: 'https://www.snfcp.org/informations-maladies/rectocele-et-prolapsus/la-rectocele/' },
      { label: 'WGO — Guide mondial : constipation, une perspective mondiale (version française)', url: 'https://www.worldgastroenterology.org/guidelines/constipation/constipation-french' },
    ],
  },
];
