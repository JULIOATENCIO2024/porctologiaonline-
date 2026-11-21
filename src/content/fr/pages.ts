// Contenu FR (Afrique francophone, Haïti, Québec en deuxième avis). Vouvoiement, français neutre.
// Règles BUILD §8 : aucune promesse de résultat ni de diagnostic sans examen, aucune ordonnance en ligne,
// aucun nom de médicament. Dre Andrea : nom de famille, CMP et RNE non confirmés (le gabarit affiche site.ts).
import type { Ui, Page, Landing } from '../../data/types';

export const ui: Ui = {
  langName: 'Français',
  nav: {
    how: 'Comment ça marche',
    specialties: 'Pathologies',
    team: 'Médecin',
    price: 'Tarif',
    faq: 'FAQ',
    book: 'Prendre rendez-vous',
  },
  trust: [
    'Proctologues inscrits au Collège médical du Pérou (CMP/RNE)',
    'Clínica Proctológica de Lima, San Isidro',
    'Consultation privée par visioconférence',
  ],
  stepsTitle: 'Comment ça marche, en 4 étapes',
  steps: [
    {
      title: 'Vous nous écrivez',
      text: 'Un message sur WhatsApp suffit. Nous vous proposons un créneau en français, en tenant compte de votre fuseau horaire.',
    },
    {
      title: 'Vous payez',
      text: 'Vous réglez USD 50 par lien de paiement sécurisé avant le rendez-vous. Votre créneau est alors confirmé.',
    },
    {
      title: 'Visioconsultation',
      text: '30 minutes en vidéo avec la proctologue : elle écoute vos symptômes, vous oriente et construit un plan avec vous.',
    },
    {
      title: 'Compte rendu écrit',
      text: 'À l’issue de la consultation, vous recevez un compte rendu avec le plan proposé, à garder ou à montrer à votre médecin.',
    },
  ],
  priceBox: {
    title: 'Téléconsultation avec une proctologue',
    amount: 'USD 50',
    per: 'par consultation de 30 minutes',
    includes: [
      '30 minutes de visioconsultation en français',
      'Revue de vos symptômes et de vos examens antérieurs',
      'Compte rendu écrit avec le plan proposé',
      'Orientation sur les examens à demander à votre médecin local, ou sur une prise en charge à Lima si elle est utile',
    ],
    refund: 'Si la téléconsultation n’a pas lieu, vous êtes remboursé.',
    cta: 'Prendre rendez-vous',
    payCta: 'Payer la consultation',
  },
  whoTitle: 'Qui vous reçoit',
  onlineCanTitle: 'Ce que la visioconsultation permet',
  onlineCannotTitle: 'Ce qu’elle ne permet pas',
  signsTitle: 'Quand consulter',
  urgentTitle: 'Allez aux urgences sans attendre si…',
  howTitle: 'Comment se déroule la téléconsultation',
  faqTitle: 'Questions fréquentes',
  refsTitle: 'Références',
  reviewedBy: 'Contenu relu par',
  reviewedOn: 'Dernière révision',
  attendedBy: 'Votre médecin',
  ctaTitle: 'Parlez-en à une proctologue, en français',
  ctaText:
    'Écrivez-nous sur WhatsApp pour choisir un créneau. Pendant la visioconsultation, la proctologue revoit vos symptômes, vous oriente et vous propose un plan. Si un examen est nécessaire, elle vous explique où et comment le faire.',
  whatsappCta: 'Écrire sur WhatsApp',
  footerLegal:
    'Téléconsultation assurée depuis Lima (Pérou) par des médecins inscrits au Collège médical du Pérou, conformément à la loi n° 30421, loi-cadre péruvienne sur la télésanté. Elle ne remplace pas les soins d’urgence : en cas de saignement abondant, de fièvre ou de douleur intense, rendez-vous aux urgences.',
  footerLinks: {
    terms: 'Conditions d’utilisation',
    privacy: 'Confidentialité',
    consent: 'Consentement à la télémédecine',
    contact: 'Contact',
  },
  rights: 'Tous droits réservés.',
  breadcrumbHome: 'Accueil',
  waMsg: 'Bonjour, je souhaite prendre rendez-vous pour une téléconsultation',
  cookie: {
    text: 'Nous utilisons des cookies de mesure publicitaire (Meta, TikTok). Ils ne se chargent qu’avec votre accord, conformément au RGPD et à la Loi 25 du Québec. Vous pouvez refuser sans que cela change votre accès au site.',
    accept: 'Accepter',
    reject: 'Refuser',
    more: 'En savoir plus',
  },
  lpNoMenu: 'Téléconsultation assurée depuis Lima (Pérou) par la Clínica Proctológica de Lima. Ne remplace pas les urgences.',
  skip: 'Aller au contenu',
  menuOpen: 'Ouvrir le menu',
};

export const pages: Page[] = [
  // ───────────────────────────── Accueil
  {
    key: 'home',
    slug: '',
    title: 'Proctologue en visio, en français | Proctología Online',
    description:
      'Hémorroïdes, fissure ou fistule anale : consultez en français une proctologue de la Clínica Proctológica de Lima en vidéo. 30 min, USD 50, compte rendu écrit.',
    h1: 'Hémorroïdes, fissure, fistule : parlez à une proctologue en français, par vidéo',
    lead:
      'Une consultation de 30 minutes en visio avec une proctologue de la Clínica Proctológica de Lima, où que vous viviez. Vous repartez avec un compte rendu écrit et un plan clair.',
    sections: [
      {
        h2: 'Pour qui ?',
        paras: [
          'Pour les personnes qui vivent en Afrique francophone, en Haïti ou ailleurs et qui n’ont pas de proctologue à proximité, ou qui hésitent à en parler en face à face. Les troubles de l’anus et du rectum sont fréquents, et ils méritent un avis spécialisé plutôt que des années de gêne silencieuse.',
          'Au Québec, nous intervenons uniquement pour un <a href="/fr/deuxieme-avis/">deuxième avis</a> : vous gardez votre médecin et votre équipe de soins, et vous obtenez un regard supplémentaire sur votre situation.',
        ],
      },
      {
        h2: 'Ce que la visioconsultation permet, et ce qu’elle ne permet pas',
        paras: [
          'Pendant la visioconsultation, la proctologue revoit vos symptômes, vos antécédents et vos examens, vous oriente et construit un plan avec vous. Si elle a besoin de vous examiner, elle vous explique où et comment le faire : chez un médecin près de chez vous, ou à Lima.',
          'Une vidéo ne remplace pas un examen clinique : aucun diagnostic n’est donc promis à distance. Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
        ],
      },
      {
        h2: 'Les motifs de consultation les plus fréquents',
        list: [
          '<a href="/fr/hemorroides/">Hémorroïdes</a> : saignement, gonflement, gêne en allant à la selle',
          '<a href="/fr/fissure-anale/">Fissure anale</a> : douleur vive pendant et après la selle',
          '<a href="/fr/fistule-anale/">Fistule anale et abcès</a> : écoulement, boule douloureuse près de l’anus',
          '<a href="/fr/condylomes/">Condylomes</a> : petites excroissances autour de l’anus',
          '<a href="/fr/saignement-anal/">Saignement anal</a> : savoir quand s’inquiéter',
          '<a href="/fr/demangeaisons-anales/">Démangeaisons anales</a> persistantes',
          '<a href="/fr/constipation-chronique/">Constipation chronique</a> et troubles du plancher pelvien',
        ],
      },
      {
        h2: 'Une consultation rattachée à une clinique spécialisée',
        paras: [
          'Proctología Online est le service de téléconsultation de la Clínica Proctológica de Lima, installée à San Isidro (Lima, Pérou) et entièrement consacrée aux maladies de l’anus, du rectum et du côlon. Si un examen, un acte au cabinet ou une chirurgie est nécessaire, l’équipe peut l’organiser à Lima, ou vous indiquer ce qu’il faut demander à votre médecin local.',
          'Le tarif est unique : <strong>USD 50</strong> pour 30 minutes, réglés avant le rendez-vous. <a href="/fr/tarif/">Voir ce qui est inclus</a>.',
        ],
      },
    ],
  },

  // ───────────────────────────── Comment ça marche
  {
    key: 'how',
    slug: 'comment-ca-marche',
    title: 'Comment se passe la téléconsultation en proctologie',
    description:
      'Vous écrivez, vous payez USD 50, vous voyez la proctologue 30 minutes en vidéo, puis recevez un compte rendu écrit. Le déroulé et comment vous préparer.',
    h1: 'Comment se passe une téléconsultation en proctologie',
    lead:
      'Quatre étapes simples, du premier message au compte rendu écrit. Voici ce qui se passe à chaque étape et comment vous y préparer.',
    sections: [
      {
        h2: 'Avant la consultation',
        paras: [
          'Vous nous écrivez sur WhatsApp. Inutile de décrire vos symptômes dans ce premier message : nous avons seulement besoin de savoir que vous souhaitez un rendez-vous et dans quel pays vous vous trouvez, pour vous proposer un créneau adapté à votre fuseau horaire. Les horaires sont indiqués en heure de Lima.',
          'Une fois le créneau choisi, vous recevez un lien de paiement de USD 50. Le rendez-vous est confirmé dès le paiement reçu, avec le lien de la vidéo.',
        ],
      },
      {
        h2: 'Comment vous préparer',
        list: [
          'Notez depuis quand les symptômes durent, ce qui les aggrave et ce qui les soulage',
          'Rassemblez vos examens et comptes rendus antérieurs (coloscopie, échographie, IRM, analyses), même anciens',
          'Préparez la liste des traitements que vous avez déjà essayés',
          'Choisissez un endroit calme et privé, avec une connexion stable',
          'Un smartphone ou un ordinateur avec caméra et micro suffit',
        ],
      },
      {
        h2: 'Pendant les 30 minutes',
        paras: [
          'La proctologue vous pose des questions précises sur vos symptômes, vos habitudes de transit et vos antécédents, et regarde les documents que vous avez apportés. Elle vous explique ce qui peut être en cause, ce qui reste à vérifier et les options possibles : mesures d’hygiène et d’alimentation, traitement médical, actes au cabinet ou chirurgie.',
          'Aucun examen intime n’est demandé à l’écran. Si un examen clinique est nécessaire pour confirmer ce qui se passe, elle vous explique où et comment le faire.',
        ],
      },
      {
        h2: 'Après la consultation',
        paras: [
          'Vous recevez un compte rendu écrit avec le résumé de l’échange et le plan proposé. Vous pouvez le présenter à votre médecin local. Si une prise en charge à Lima est utile, l’équipe vous explique les étapes : voir <a href="/fr/traitement-a-lima/">se faire soigner à Lima</a>.',
          'Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
        ],
      },
      {
        h2: 'Confidentialité',
        paras: [
          'La consultation se fait en tête-à-tête avec la proctologue, sans enregistrement. Vos données de santé sont traitées selon la loi péruvienne n° 29733 sur la protection des données personnelles. Voir notre <a href="/fr/legal/confidentialite/">politique de confidentialité</a>.',
        ],
      },
    ],
  },

  // ───────────────────────────── Tarif
  {
    key: 'price',
    slug: 'tarif',
    title: 'Tarif de la téléconsultation : USD 50 | Proctología Online',
    description:
      'Téléconsultation en proctologie : USD 50 pour 30 minutes de visio et un compte rendu écrit, payés à l’avance. Remboursement si la consultation n’a pas lieu.',
    h1: 'Tarif de la téléconsultation : USD 50',
    lead:
      'Un tarif unique, connu à l’avance : USD 50 pour 30 minutes de visioconsultation avec une proctologue, compte rendu écrit compris.',
    sections: [
      {
        h2: 'Ce qui est inclus',
        list: [
          '30 minutes de visioconsultation en français avec une proctologue',
          'La revue de vos symptômes, de vos antécédents et de vos examens antérieurs',
          'Un compte rendu écrit avec le plan proposé',
          'L’orientation vers les examens à demander à votre médecin local, ou vers une prise en charge à Lima si elle est utile',
        ],
      },
      {
        h2: 'Ce qui n’est pas inclus',
        list: [
          'Les examens complémentaires (analyses, imagerie, endoscopie)',
          'Les actes au cabinet et les interventions chirurgicales',
          'Les médicaments : aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays',
          'Le voyage et le séjour si vous choisissez de vous faire soigner à Lima',
        ],
      },
      {
        h2: 'Paiement',
        paras: [
          'Le paiement se fait avant le rendez-vous, par un lien de paiement sécurisé que nous vous envoyons sur WhatsApp. Le montant est en dollars américains ; votre banque peut appliquer des frais de change selon votre pays.',
        ],
      },
      {
        h2: 'Remboursement',
        paras: [
          'Si la téléconsultation n’a pas lieu, vous êtes remboursé. Écrivez-nous sur WhatsApp ou à l’adresse indiquée sur la page <a href="/fr/contact/">Contact</a>. Les détails figurent dans nos <a href="/fr/legal/conditions/">conditions d’utilisation</a>.',
        ],
      },
    ],
  },

  // ───────────────────────────── Médecin
  {
    key: 'team',
    slug: 'dre-andrea',
    title: 'Dre Andrea, proctologue qui consulte en français',
    description:
      'La Dre Andrea, proctologue de l’équipe de la Clínica Proctológica de Lima, assure les téléconsultations en français. Voici comment elle vous reçoit en vidéo.',
    h1: 'Dre Andrea, proctologue de la Clínica Proctológica de Lima',
    lead:
      'La Dre Andrea fait partie de l’équipe de proctologie de la Clínica Proctológica de Lima. C’est elle qui reçoit en français les patients de Proctología Online.',
    sections: [
      {
        h2: 'Son rôle',
        paras: [
          'La Dre Andrea assure les téléconsultations en français pour les patients d’Afrique francophone, d’Haïti et du Québec (en deuxième avis). Elle revoit vos symptômes et vos examens, vous oriente et vous propose un plan écrit. Si elle a besoin de vous examiner, elle vous explique où et comment.',
        ],
      },
      {
        h2: 'Une équipe derrière chaque consultation',
        paras: [
          'Elle travaille au sein de l’équipe de la Clínica Proctológica de Lima, clinique de San Isidro consacrée aux maladies de l’anus, du rectum et du côlon. Lorsque votre situation demande un examen, un acte au cabinet ou une chirurgie à Lima, la prise en charge est organisée avec cette équipe.',
        ],
      },
      {
        h2: 'Comment elle vous reçoit',
        list: [
          'En français, avec le vouvoiement et dans un cadre confidentiel',
          'En vidéo, pendant 30 minutes, sans examen intime à l’écran',
          'Avec un compte rendu écrit à la fin, que vous pouvez montrer à votre médecin',
          'Sans ordonnance en ligne : toute prescription relève de la réglementation de votre pays',
        ],
      },
      {
        h2: 'Inscription au Collège médical du Pérou',
        paras: [
          'Les médecins de Proctología Online exercent depuis le Pérou et sont inscrits au Collège médical du Pérou (CMP). Ils ne sont pas inscrits à l’ordre des médecins de votre pays. Vous pouvez vérifier l’inscription de tout médecin péruvien sur le registre public du Collège médical du Pérou.',
        ],
      },
    ],
  },

  // ───────────────────────────── Deuxième avis
  {
    key: 'secondOpinion',
    slug: 'deuxieme-avis',
    title: 'Deuxième avis en proctologie avant une chirurgie',
    description:
      'Une chirurgie des hémorroïdes, d’une fissure ou d’une fistule vous est proposée ? Obtenez en visio le deuxième avis d’une proctologue, avec compte rendu écrit.',
    h1: 'Deuxième avis en proctologie avant de vous faire opérer',
    lead:
      'Une intervention vous a été proposée et vous voulez un autre regard avant de décider ? En 30 minutes de visio, une proctologue revoit votre dossier avec vous.',
    sections: [
      {
        h2: 'Quand demander un deuxième avis',
        list: [
          'Une chirurgie vous est proposée pour des hémorroïdes, une fissure, une fistule ou des condylomes',
          'Vous avez déjà été opéré et les symptômes reviennent',
          'Les traitements essayés ne vous soulagent pas et vous ne savez plus quoi faire',
          'Vous voulez comprendre les différentes options avant de signer un consentement',
          'Le délai pour voir un spécialiste près de chez vous est long',
        ],
      },
      {
        h2: 'Ce qu’il faut préparer',
        list: [
          'Les comptes rendus de consultation et d’examens (coloscopie, échographie endoanale, IRM pelvienne)',
          'Le compte rendu opératoire si vous avez déjà été opéré',
          'La proposition de traitement qui vous a été faite, par écrit si possible',
          'Vos questions, notées à l’avance',
        ],
      },
      {
        h2: 'Ce que vous obtenez',
        paras: [
          'La proctologue relit vos documents, écoute votre histoire et vous explique comment elle comprend votre situation : ce qui paraît cohérent, ce qui mérite d’être vérifié et les autres options envisageables. Vous recevez un compte rendu écrit à partager avec votre médecin ou votre chirurgien.',
          'Ce deuxième avis ne remplace pas votre équipe de soins. La décision finale se prend avec le médecin qui vous suit, ou, si vous le souhaitez, avec l’équipe de la Clínica Proctológica de Lima lors d’une <a href="/fr/traitement-a-lima/">prise en charge à Lima</a>.',
        ],
      },
      {
        h2: 'Au Québec',
        paras: [
          'Pour les personnes qui vivent au Québec, nous proposons uniquement un deuxième avis et une orientation. Nos médecins sont inscrits au Collège médical du Pérou et non au Collège des médecins du Québec : ils ne vous suivent pas sur place et ne délivrent aucune ordonnance.',
        ],
      },
    ],
  },

  // ───────────────────────────── Traitement à Lima
  {
    key: 'treatmentLima',
    slug: 'traitement-a-lima',
    title: 'Se faire soigner à Lima : proctologie et chirurgie',
    description:
      'Examen, acte au cabinet ou chirurgie proctologique à Lima : comment préparer le voyage, à quoi vous attendre sur place et comment connaître les coûts estimés.',
    h1: 'Se faire soigner en proctologie à Lima',
    lead:
      'Si votre situation demande un examen ou une intervention que vous ne pouvez pas faire près de chez vous, l’équipe de la Clínica Proctológica de Lima peut vous accueillir à San Isidro.',
    sections: [
      {
        h2: 'Quand le voyage a du sens',
        paras: [
          'Tout commence par la téléconsultation. La proctologue évalue avec vous si une prise en charge locale est possible ou si un déplacement à Lima est utile. Le voyage n’est proposé que lorsqu’il apporte quelque chose : un examen spécialisé, un acte au cabinet ou une chirurgie que vous ne trouvez pas près de chez vous, ou un deuxième regard sur place.',
        ],
      },
      {
        h2: 'Avant de partir',
        list: [
          'Un plan écrit issu de la téléconsultation, avec ce qui est prévu sur place',
          'Vos examens et comptes rendus antérieurs, sur papier ou en format numérique',
          'Les conditions d’entrée au Pérou selon votre nationalité, à vérifier auprès du consulat du Pérou',
          'Une assurance voyage qui couvre les soins médicaux',
          'La durée de séjour conseillée, qui dépend de ce qui est prévu et vous est indiquée à l’avance',
        ],
      },
      {
        h2: 'À quoi vous attendre sur place',
        paras: [
          'Vous êtes reçu en consultation à la Clínica Proctológica de Lima, à San Isidro, un quartier central de Lima. La proctologue vous examine, confirme ou ajuste le plan proposé en visio, puis l’équipe organise les examens ou l’intervention prévus. Les explications et le suivi peuvent se faire en français avec la Dre Andrea.',
          'Après une intervention, un contrôle sur place est prévu avant votre retour. Le suivi peut ensuite se poursuivre en téléconsultation.',
        ],
      },
      {
        h2: 'Les coûts',
        paras: [
          'Le coût dépend de ce dont vous avez besoin : examen, acte au cabinet ou chirurgie, durée d’hospitalisation éventuelle. Les coûts sont <strong>indicatifs et communiqués pendant la téléconsultation</strong>, une fois votre situation connue. Ils ne comprennent pas le voyage ni l’hébergement.',
        ],
      },
    ],
  },

  // ───────────────────────────── FAQ
  {
    key: 'faq',
    slug: 'faq',
    title: 'Questions fréquentes sur la téléconsultation',
    description:
      'Prix, paiement, ordonnance, confidentialité, examen, pays couverts : les réponses aux questions fréquentes sur la téléconsultation en proctologie en français.',
    h1: 'Questions fréquentes',
    lead: 'Tout ce qu’il faut savoir avant de prendre rendez-vous pour une téléconsultation en proctologie.',
    sections: [
      {
        h2: 'Une question qui ne figure pas ici ?',
        paras: [
          'Écrivez-nous sur WhatsApp ou consultez la page <a href="/fr/contact/">Contact</a>. Pour le déroulé complet, voir <a href="/fr/comment-ca-marche/">comment ça marche</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Qu’est-ce qu’un proctologue ?',
        a: 'C’est un médecin spécialisé dans les maladies de l’anus, du rectum et du côlon : hémorroïdes, fissure, fistule, abcès, condylomes, démangeaisons, saignements ou constipation chronique.',
      },
      {
        q: 'Une proctologue peut-elle vraiment m’aider par vidéo ?',
        a: 'Oui, pour comprendre vos symptômes, revoir vos examens, vous orienter et construire un plan. En revanche, une vidéo ne remplace pas un examen clinique : si un examen est nécessaire, la proctologue vous explique où et comment le faire.',
      },
      {
        q: 'Vais-je devoir me déshabiller devant la caméra ?',
        a: 'Non. Aucun examen intime n’est demandé à l’écran. La consultation repose sur l’échange, vos documents et, si nécessaire, un examen fait ensuite par un médecin près de chez vous ou à Lima.',
      },
      {
        q: 'Combien coûte la téléconsultation ?',
        a: 'USD 50 pour 30 minutes de visioconsultation, compte rendu écrit compris. Le paiement se fait avant le rendez-vous par un lien sécurisé.',
      },
      {
        q: 'Que se passe-t-il si la consultation n’a pas lieu ?',
        a: 'Si la téléconsultation n’a pas lieu, vous êtes remboursé.',
      },
      {
        q: 'Pouvez-vous me prescrire un traitement ?',
        a: 'Aucune ordonnance n’est délivrée en ligne. La proctologue vous explique les options (mesures d’hygiène et d’alimentation, traitement médical, actes au cabinet, chirurgie) ; toute prescription relève de la réglementation de votre pays.',
      },
      {
        q: 'Depuis quels pays puis-je consulter ?',
        a: 'Depuis l’Afrique francophone, Haïti et tout autre pays où vous vivez. Au Québec, nous proposons uniquement un deuxième avis. Nos médecins exercent depuis le Pérou et sont inscrits au Collège médical du Pérou, pas dans votre pays.',
      },
      {
        q: 'De quoi ai-je besoin pour la consultation ?',
        a: 'Un smartphone ou un ordinateur avec caméra et micro, une connexion stable et un endroit calme. Préparez vos examens antérieurs et la liste des traitements déjà essayés.',
      },
      {
        q: 'Ma consultation est-elle confidentielle ?',
        a: 'Oui. La consultation se fait en tête-à-tête, sans enregistrement, et vos données sont protégées selon la loi péruvienne n° 29733. Le premier message sur WhatsApp n’a pas besoin de mentionner vos symptômes.',
      },
      {
        q: 'Que contient le compte rendu écrit ?',
        a: 'Le résumé de l’échange, ce qui reste à vérifier et le plan proposé : examens à demander, mesures à suivre, options de traitement. Vous pouvez le montrer à votre médecin local.',
      },
      {
        q: 'Et si j’ai besoin d’une chirurgie ?',
        a: 'La proctologue vous explique les options. Vous pouvez être pris en charge près de chez vous ou à la Clínica Proctológica de Lima ; dans ce cas, les coûts indicatifs vous sont communiqués pendant la téléconsultation.',
      },
      {
        q: 'La téléconsultation convient-elle en cas d’urgence ?',
        a: 'Non. En cas de saignement abondant, de fièvre ou de douleur intense, rendez-vous aux urgences les plus proches sans attendre un rendez-vous en ligne.',
      },
    ],
  },

  // ───────────────────────────── Contact
  {
    key: 'contact',
    slug: 'contact',
    title: 'Contact et rendez-vous | Proctología Online',
    description:
      'Prenez rendez-vous pour une téléconsultation en proctologie en français : écrivez-nous sur WhatsApp ou par e-mail. Clínica Proctológica de Lima, San Isidro.',
    h1: 'Nous contacter',
    lead: 'Le plus simple pour prendre rendez-vous est de nous écrire sur WhatsApp. Nous vous répondons en français.',
    sections: [
      {
        h2: 'Prendre rendez-vous',
        paras: [
          'Écrivez-nous sur WhatsApp en indiquant simplement que vous souhaitez une téléconsultation et votre pays. Inutile de décrire vos symptômes dans ce message : vous en parlerez avec la proctologue pendant la consultation.',
          'Les créneaux sont donnés en heure de Lima (UTC−5). Nous vous aidons à faire la conversion avec votre fuseau horaire.',
        ],
      },
      {
        h2: 'Par e-mail',
        paras: [
          'Pour une question administrative (paiement, remboursement, données personnelles) : <strong>clinicaproctologicalima@gmail.com</strong>.',
        ],
      },
      {
        h2: 'La clinique',
        paras: [
          'Clínica Proctológica de Lima — CLINICA PROCTOLOGICA DE LIMA SAC (RUC 20616704614), Av. Javier Prado Este 1510, San Isidro, Lima, Pérou.',
        ],
      },
      {
        h2: 'En cas d’urgence',
        paras: [
          'La téléconsultation ne remplace pas les urgences. En cas de saignement abondant, de fièvre ou de douleur intense, rendez-vous aux urgences les plus proches.',
        ],
      },
    ],
  },

  // ───────────────────────────── Conditions d’utilisation
  {
    key: 'terms',
    slug: 'legal/conditions',
    title: 'Conditions d’utilisation | Proctología Online',
    description:
      'Conditions de la téléconsultation de Proctología Online : télémédecine fournie depuis le Pérou par la Clínica Proctológica de Lima, selon la loi n° 30421.',
    h1: 'Conditions d’utilisation',
    lead:
      'Ces conditions encadrent l’utilisation du site et du service de téléconsultation de Proctología Online. En prenant rendez-vous, vous les acceptez.',
    sections: [
      {
        h2: 'Qui fournit le service',
        paras: [
          'Le service est fourni par CLINICA PROCTOLOGICA DE LIMA SAC (RUC 20616704614), Av. Javier Prado Este 1510, San Isidro, Lima, Pérou. Contact : clinicaproctologicalima@gmail.com.',
        ],
      },
      {
        h2: 'Nature du service',
        paras: [
          'Proctología Online propose des téléconsultations depuis Lima, au Pérou, conformément à la loi n° 30421, loi-cadre péruvienne sur la télésanté. Les médecins sont inscrits au Collège médical du Pérou ; ils ne sont pas inscrits auprès de l’autorité médicale du pays où vous vous trouvez. Pour les personnes qui vivent au Québec, le service se limite à un deuxième avis et à une orientation.',
          'La téléconsultation permet de revoir vos symptômes et vos documents, de vous orienter et de vous proposer un plan. Elle ne comprend pas d’examen physique et ne remplace pas votre médecin habituel. Aucun diagnostic n’est promis sans examen, et aucune ordonnance n’est délivrée en ligne : toute prescription relève de la réglementation de votre pays.',
        ],
      },
      {
        h2: 'Ce n’est pas un service d’urgence',
        paras: [
          'En cas de saignement abondant, de fièvre, de douleur intense ou de tout symptôme qui vous inquiète, rendez-vous aux urgences les plus proches.',
        ],
      },
      {
        h2: 'Tarif, paiement et remboursement',
        list: [
          'Tarif : USD 50 pour une téléconsultation de 30 minutes, compte rendu écrit compris',
          'Le paiement se fait avant le rendez-vous, par lien de paiement sécurisé',
          'Si la téléconsultation n’a pas lieu, vous êtes remboursé',
          'Les frais bancaires ou de change éventuels dépendent de votre banque',
        ],
      },
      {
        h2: 'Vos engagements',
        list: [
          'Fournir des informations exactes sur votre santé et votre identité',
          'Vous connecter depuis un endroit privé, avec une connexion suffisante',
          'Ne pas enregistrer la consultation sans l’accord du médecin',
        ],
      },
      {
        h2: 'Droit applicable',
        paras: [
          'Ces conditions sont régies par le droit péruvien. Elles peuvent être mises à jour ; la version en ligne au moment de votre rendez-vous s’applique.',
        ],
      },
    ],
  },

  // ───────────────────────────── Confidentialité
  {
    key: 'privacy',
    slug: 'legal/confidentialite',
    title: 'Politique de confidentialité | Proctología Online',
    description:
      'Comment nous protégeons vos données de santé : loi péruvienne n° 29733, cookies de mesure soumis à votre accord (RGPD, Loi 25 du Québec) et vos droits.',
    h1: 'Politique de confidentialité',
    lead:
      'Vos données de santé sont sensibles. Voici quelles données nous collectons, pourquoi, et comment exercer vos droits.',
    sections: [
      {
        h2: 'Responsable du traitement',
        paras: [
          'CLINICA PROCTOLOGICA DE LIMA SAC (RUC 20616704614), Av. Javier Prado Este 1510, San Isidro, Lima, Pérou. Contact : clinicaproctologicalima@gmail.com.',
          'Vos données sont traitées conformément à la loi péruvienne n° 29733 sur la protection des données personnelles et à son règlement.',
        ],
      },
      {
        h2: 'Les données que nous collectons',
        list: [
          'Vos coordonnées : nom, numéro de WhatsApp, e-mail, pays',
          'Les informations de santé que vous partagez pendant la consultation et les documents que vous envoyez',
          'Les informations de paiement nécessaires à la transaction, traitées par le prestataire de paiement',
          'Des données de navigation sur le site, selon vos choix en matière de cookies',
        ],
      },
      {
        h2: 'Pourquoi nous les utilisons',
        paras: [
          'Pour organiser et réaliser la téléconsultation, rédiger le compte rendu, gérer le paiement et le remboursement éventuel, et respecter nos obligations légales en matière de dossier médical. Nous ne vendons pas vos données.',
          'Vos informations de santé ne sont jamais transmises aux plateformes publicitaires. Le message pré-rempli sur WhatsApp ne contient aucun symptôme.',
        ],
      },
      {
        h2: 'Cookies et mesure publicitaire',
        paras: [
          'Le site peut utiliser des cookies de mesure publicitaire (Meta, TikTok) pour savoir combien de personnes nous contactent après avoir vu une annonce. Conformément au RGPD (Union européenne) et à la Loi 25 du Québec, ces cookies ne se chargent qu’avec votre accord, donné dans la bannière affichée lors de votre première visite. Vous pouvez refuser sans que cela change votre accès au site, et modifier votre choix à tout moment en effaçant les cookies de votre navigateur.',
        ],
      },
      {
        h2: 'Durée de conservation et sécurité',
        paras: [
          'Les informations médicales sont conservées pendant la durée prévue par la réglementation péruvienne relative au dossier médical. Les autres données sont conservées le temps nécessaire à la relation avec vous. L’accès est limité aux personnes qui en ont besoin pour vous prendre en charge.',
        ],
      },
      {
        h2: 'Vos droits',
        paras: [
          'Vous pouvez demander l’accès, la rectification, la suppression de vos données ou vous opposer à leur traitement, dans les limites des obligations légales de conservation, en écrivant à clinicaproctologicalima@gmail.com. Si vous résidez dans l’Union européenne ou au Québec, vous disposez aussi des droits prévus par le RGPD ou par la Loi 25.',
        ],
      },
    ],
  },

  // ───────────────────────────── Consentement
  {
    key: 'consent',
    slug: 'legal/consentement-telemedecine',
    title: 'Consentement à la télémédecine | Proctología Online',
    description:
      'Ce que vous acceptez en prenant rendez-vous : téléconsultation depuis le Pérou selon la loi n° 30421, sans examen physique ni ordonnance en ligne.',
    h1: 'Consentement éclairé à la télémédecine',
    lead:
      'Avant votre téléconsultation, prenez le temps de lire ce qui suit. En confirmant votre rendez-vous, vous indiquez l’avoir compris et l’accepter.',
    sections: [
      {
        h2: 'Ce que vous acceptez',
        list: [
          'La consultation se fait par visioconférence, depuis Lima (Pérou), conformément à la loi n° 30421, loi-cadre péruvienne sur la télésanté',
          'Le médecin est inscrit au Collège médical du Pérou et non auprès de l’autorité médicale de votre pays',
          'La consultation ne comprend pas d’examen physique ; ses conclusions dépendent des informations que vous fournissez',
          'Aucun diagnostic n’est promis sans examen : si un examen est nécessaire, le médecin vous explique où et comment le faire',
          'Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays',
          'La téléconsultation ne remplace ni votre médecin habituel ni les urgences',
        ],
      },
      {
        h2: 'Limites techniques',
        paras: [
          'Une mauvaise connexion peut interrompre ou empêcher la consultation. Dans ce cas, et si la téléconsultation n’a pas lieu, vous êtes remboursé.',
        ],
      },
      {
        h2: 'Confidentialité',
        paras: [
          'La consultation n’est pas enregistrée. Vos données sont traitées selon la loi péruvienne n° 29733 et notre <a href="/fr/legal/confidentialite/">politique de confidentialité</a>.',
        ],
      },
      {
        h2: 'Votre droit de refuser',
        paras: [
          'Vous pouvez refuser la téléconsultation ou l’interrompre à tout moment, et préférer une consultation en personne.',
        ],
      },
    ],
  },
];

export const landings: Landing[] = [
  // ───────────────────────────── Proctologue
  {
    key: 'proctologo',
    slugG: 'proctologue',
    slugM: 'proctologue',
    slugT: 'proctologue',
    google: {
      title: 'Proctologue : consultation en visio, en français',
      h1: 'Proctologue : consultation en visio, en français',
      lead:
        'Consultez une proctologue de la Clínica Proctológica de Lima depuis chez vous. 30 minutes en vidéo, USD 50, compte rendu écrit à la fin.',
      bullets: [
        '30 minutes en vidéo avec une proctologue, en français',
        'Revue de vos symptômes et de vos examens antérieurs',
        'Un plan écrit à montrer à votre médecin local',
        'Si un examen est nécessaire, on vous explique où et comment',
        'USD 50, payés avant le rendez-vous, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Pourquoi consulter une proctologue',
          paras: [
            'Saignement, douleur en allant à la selle, boule près de l’anus, démangeaisons, écoulement, constipation qui dure : ces symptômes sont fréquents et ont souvent une cause bénigne, mais ils méritent un avis spécialisé. Sans proctologue près de chez vous, la visioconsultation est un premier pas concret.',
          ],
        },
        {
          h2: 'Ce qui se passe pendant la consultation',
          paras: [
            'La proctologue revoit vos symptômes, vous oriente et construit un plan avec vous : mesures d’hygiène et d’alimentation, traitement médical, actes au cabinet ou chirurgie selon le cas. Si elle a besoin de vous examiner, elle vous explique où et comment. Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Faut-il se montrer à la caméra ?',
          a: 'Non, aucun examen intime n’est demandé à l’écran. La consultation repose sur l’échange et vos documents.',
        },
        {
          q: 'Depuis quels pays puis-je consulter ?',
          a: 'Depuis l’Afrique francophone, Haïti ou tout autre pays. Au Québec, uniquement en deuxième avis. Nos médecins sont inscrits au Collège médical du Pérou.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'USD 50 pour 30 minutes, compte rendu écrit compris. Remboursement si la téléconsultation n’a pas lieu.',
        },
      ],
    },
    meta: {
      title: 'Parlez à une proctologue, en français',
      hook: 'Ces symptômes, beaucoup de gens les ont. Peu osent en parler. Vous pouvez.',
      text:
        'Une proctologue de la Clínica Proctológica de Lima vous écoute 30 minutes en vidéo, en toute discrétion. Vous repartez avec un plan écrit.',
      bullets: ['En français, en visio privée', 'USD 50, compte rendu écrit compris', 'Remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: 'Proctologue en visio, en français',
      hook: 'Gêné d’en parler ? Une proctologue vous écoute.',
      text:
        'Douleur, saignement, démangeaisons : parlez-en 30 minutes en vidéo avec une proctologue de la Clínica Proctológica de Lima, en français. Vous recevez un plan écrit. USD 50.',
    },
  },

  // ───────────────────────────── Hémorroïdes
  {
    key: 'hemorroides',
    slugG: 'hemorroides',
    slugM: 'hemorroides',
    slugT: 'hemorroides',
    google: {
      title: 'Hémorroïdes : consultation avec un proctologue en visio',
      h1: 'Hémorroïdes : consultation avec un proctologue en visio',
      lead:
        'Saignement, gonflement, gêne en allant à la selle ? Parlez-en 30 minutes en vidéo avec une proctologue, en français. USD 50, compte rendu écrit compris.',
      bullets: [
        'Une proctologue revoit vos symptômes et vos examens',
        'Les options de traitement des hémorroïdes expliquées clairement',
        'Un plan écrit à montrer à votre médecin local',
        'Si un examen est nécessaire, on vous explique où et comment',
        'USD 50, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Les hémorroïdes, un problème fréquent',
          paras: [
            'Les hémorroïdes sont des veines de la région anale qui peuvent gonfler, saigner ou sortir pendant la selle. C’est l’un des motifs de consultation les plus courants en proctologie. Un saignement ne vient pas toujours des hémorroïdes : c’est pourquoi un avis spécialisé compte.',
          ],
        },
        {
          h2: 'Traitement des hémorroïdes : ce que la proctologue vous explique',
          paras: [
            'Selon vos symptômes, la proctologue vous oriente vers des mesures d’hygiène et d’alimentation, un traitement médical, des procédures au cabinet ou, dans certains cas, une chirurgie. Elle vous dit ce qui reste à vérifier par un examen et où le faire. Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Peut-on savoir par vidéo si ce sont des hémorroïdes ?',
          a: 'La vidéo permet d’orienter et de construire un plan. Confirmer demande un examen : la proctologue vous explique où et comment le faire.',
        },
        {
          q: 'Faudra-t-il forcément opérer ?',
          a: 'Non. La chirurgie n’est qu’une option parmi d’autres ; la proctologue vous explique celles qui correspondent à votre situation.',
        },
        {
          q: 'Quand aller aux urgences ?',
          a: 'En cas de saignement abondant, de fièvre ou de douleur intense, rendez-vous aux urgences sans attendre.',
        },
      ],
    },
    meta: {
      title: 'Hémorroïdes : parlez-en à une proctologue',
      hook: 'Les hémorroïdes sont très fréquentes. En parler à une spécialiste, c’est normal.',
      text:
        'Une proctologue vous écoute 30 minutes en vidéo, en français et en toute discrétion. Vous repartez avec un plan écrit adapté à votre situation.',
      bullets: ['Visio privée, en français', 'Plan écrit à la fin', 'USD 50, remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: 'Hémorroïdes : parlez-en en visio',
      hook: 'Hémorroïdes ? Vous n’êtes pas seul.',
      text:
        'Saignement, gonflement, gêne : une proctologue de la Clínica Proctológica de Lima vous écoute 30 minutes en vidéo, en français, et vous propose un plan écrit. USD 50.',
    },
  },

  // ───────────────────────────── Fissure anale
  {
    key: 'fisura',
    slugG: 'fissure-anale',
    slugM: 'fissure-anale',
    slugT: 'fissure-anale',
    google: {
      title: 'Fissure anale : consultation avec un proctologue en visio',
      h1: 'Fissure anale : consultation avec un proctologue en visio',
      lead:
        'Douleur vive pendant et après la selle, parfois un peu de sang ? Parlez-en 30 minutes en vidéo avec une proctologue, en français. USD 50, compte rendu écrit compris.',
      bullets: [
        'Une proctologue revoit vos symptômes et vos examens',
        'Les options de traitement de la fissure anale expliquées clairement',
        'Un plan écrit à montrer à votre médecin local',
        'Si un examen est nécessaire, on vous explique où et comment',
        'USD 50, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Qu’est-ce qu’une fissure anale ?',
          paras: [
            'C’est une petite plaie à l’entrée de l’anus. Elle provoque une douleur souvent décrite comme une brûlure ou une coupure, pendant la selle et parfois des heures après. Beaucoup de personnes la confondent avec des hémorroïdes : un avis spécialisé aide à y voir clair.',
          ],
        },
        {
          h2: 'Traitement de la fissure anale : ce que la proctologue vous explique',
          paras: [
            'La prise en charge commence souvent par des mesures d’hygiène et d’alimentation et un traitement médical. Si la fissure persiste, d’autres options existent, dont des procédures au cabinet ou une chirurgie. La proctologue vous explique lesquelles correspondent à votre cas et ce qu’il faut vérifier par un examen. Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Pourquoi la douleur dure-t-elle après la selle ?',
          a: 'C’est fréquent avec une fissure, en raison de la contraction du muscle autour de l’anus. La proctologue vous explique ce mécanisme et les options.',
        },
        {
          q: 'Une fissure peut-elle devenir chronique ?',
          a: 'Oui, lorsqu’elle dure plusieurs semaines. Dans ce cas, un avis spécialisé est d’autant plus utile.',
        },
        {
          q: 'Faudra-t-il m’examiner ?',
          a: 'Souvent, un examen permet de confirmer. La proctologue vous explique où et comment le faire, près de chez vous ou à Lima.',
        },
      ],
    },
    meta: {
      title: 'Fissure anale : parlez-en à une proctologue',
      hook: 'Cette douleur à la selle qui dure, vous n’êtes pas le seul à la vivre.',
      text:
        'Une proctologue vous écoute 30 minutes en vidéo, en français et en toute discrétion. Vous repartez avec un plan écrit adapté à votre situation.',
      bullets: ['Visio privée, en français', 'Plan écrit à la fin', 'USD 50, remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: 'Fissure anale : parlez-en en visio',
      hook: 'Ça brûle à chaque selle ? Parlez-en.',
      text:
        'Une douleur vive pendant et après la selle peut venir d’une fissure anale. Une proctologue vous écoute 30 minutes en vidéo, en français, et vous propose un plan écrit. USD 50.',
    },
  },

  // ───────────────────────────── Fistule anale
  {
    key: 'fistula',
    slugG: 'fistule-anale',
    slugM: 'fistule-anale',
    slugT: 'fistule-anale',
    google: {
      title: 'Fistule anale : consultation avec un proctologue en visio',
      h1: 'Fistule anale : consultation avec un proctologue en visio',
      lead:
        'Écoulement près de l’anus, abcès qui revient ? Parlez-en 30 minutes en vidéo avec une proctologue, en français. USD 50, compte rendu écrit compris.',
      bullets: [
        'Une proctologue revoit vos symptômes, vos examens et vos comptes rendus opératoires',
        'Les options de traitement de la fistule anale expliquées clairement',
        'Les examens utiles à demander, comme l’IRM pelvienne, selon votre cas',
        'Un plan écrit à montrer à votre médecin ou à votre chirurgien',
        'USD 50, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Fistule anale et abcès',
          paras: [
            'Une fistule anale est un petit canal qui relie l’intérieur du canal anal à la peau autour de l’anus. Elle fait souvent suite à un abcès et se manifeste par un écoulement, une irritation ou une boule qui gonfle puis se vide. Elle ne disparaît généralement pas d’elle-même.',
          ],
        },
        {
          h2: 'Traitement de la fistule anale : ce que la proctologue vous explique',
          paras: [
            'Le traitement de la fistule est le plus souvent chirurgical, avec plusieurs techniques possibles selon son trajet. La proctologue revoit vos examens, vous explique les options et ce qu’il faut encore vérifier, et vous aide à préparer la suite, près de chez vous ou à Lima. Si vous avez déjà été opéré, elle peut vous donner un deuxième avis.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Une fistule peut-elle se fermer seule ?',
          a: 'C’est rare. La proctologue vous explique les options adaptées à votre situation.',
        },
        {
          q: 'Quels documents préparer ?',
          a: 'Vos comptes rendus de consultation, d’IRM ou d’échographie, et le compte rendu opératoire si vous avez déjà été opéré.',
        },
        {
          q: 'Quand aller aux urgences ?',
          a: 'En cas de fièvre, de boule très douloureuse et chaude près de l’anus ou de douleur intense : il peut s’agir d’un abcès, rendez-vous aux urgences.',
        },
      ],
    },
    meta: {
      title: 'Fistule anale : parlez-en à une proctologue',
      hook: 'Un écoulement près de l’anus qui revient ? C’est plus fréquent qu’on ne le pense.',
      text:
        'Une proctologue vous écoute 30 minutes en vidéo, en français, et revoit vos examens. Vous repartez avec un plan écrit.',
      bullets: ['Visio privée, en français', 'Revue de vos examens', 'USD 50, remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: 'Fistule anale : parlez-en en visio',
      hook: 'Un abcès qui revient ? Ça mérite un avis.',
      text:
        'Écoulement, boule qui gonfle puis se vide : cela peut être une fistule anale. Une proctologue revoit vos examens 30 minutes en vidéo, en français, et vous propose un plan écrit. USD 50.',
    },
  },

  // ───────────────────────────── Condylomes (pas de TikTok)
  {
    key: 'condilomas',
    slugG: 'condylomes',
    slugM: 'condylomes',
    slugT: '',
    google: {
      title: 'Condylomes anaux : consultation avec un proctologue en visio',
      h1: 'Condylomes anaux : consultation avec un proctologue en visio',
      lead:
        'Petites excroissances autour de l’anus ? Parlez-en en toute discrétion, 30 minutes en vidéo avec une proctologue, en français. USD 50, compte rendu écrit compris.',
      bullets: [
        'Une consultation confidentielle, sans jugement',
        'Les options de traitement des condylomes expliquées clairement',
        'Les examens à prévoir et où les faire',
        'Un plan écrit à montrer à votre médecin local',
        'USD 50, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Que sont les condylomes ?',
          paras: [
            'Les condylomes sont des lésions de la peau ou des muqueuses dues au papillomavirus humain (HPV). Autour de l’anus, ils prennent la forme de petites excroissances, parfois accompagnées de démangeaisons ou d’un léger saignement. Ils sont fréquents et se soignent, mais ils demandent un examen pour être confirmés.',
          ],
        },
        {
          h2: 'Ce que la proctologue vous explique',
          paras: [
            'Pendant la visioconsultation, la proctologue écoute vos symptômes, répond à vos questions sur le HPV et la prévention, et vous explique les options de traitement : traitement médical, procédures au cabinet ou chirurgie selon l’étendue des lésions. Elle vous indique où et comment vous faire examiner. Aucune ordonnance n’est délivrée en ligne ; toute prescription relève de la réglementation de votre pays.',
          ],
        },
      ],
      faqs: [
        {
          q: 'La consultation est-elle confidentielle ?',
          a: 'Oui. Elle se fait en tête-à-tête, sans enregistrement, et le premier message sur WhatsApp n’a pas besoin de mentionner vos symptômes.',
        },
        {
          q: 'Peut-on confirmer des condylomes par vidéo ?',
          a: 'Non, un examen est nécessaire. La proctologue vous oriente et vous explique où et comment le faire.',
        },
        {
          q: 'Mon ou ma partenaire doit-il consulter ?',
          a: 'La proctologue vous explique ce qui est recommandé pour votre partenaire et pour la prévention.',
        },
      ],
    },
    meta: {
      title: 'Condylomes : parlez-en à une proctologue',
      hook: 'Les condylomes sont fréquents. Vous pouvez en parler sans gêne à une spécialiste.',
      text:
        'Une proctologue vous écoute 30 minutes en vidéo, en français, en toute confidentialité. Vous repartez avec un plan écrit et savez où vous faire examiner.',
      bullets: ['Consultation confidentielle, en français', 'Plan écrit à la fin', 'USD 50, remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: '',
      hook: '',
      text: '',
    },
  },

  // ───────────────────────────── Deuxième avis
  {
    key: 'segunda-opinion',
    slugG: 'deuxieme-avis',
    slugM: 'deuxieme-avis',
    slugT: 'deuxieme-avis',
    google: {
      title: 'Deuxième avis proctologue avant une chirurgie',
      h1: 'Deuxième avis d’un proctologue avant votre chirurgie',
      lead:
        'Une intervention vous a été proposée ? Une proctologue revoit votre dossier avec vous en 30 minutes de visio, en français. USD 50, compte rendu écrit compris.',
      bullets: [
        'Relecture de vos examens et de la proposition de traitement',
        'Les autres options possibles expliquées clairement',
        'Un compte rendu écrit à partager avec votre chirurgien',
        'Si utile, l’organisation d’une prise en charge à Lima',
        'USD 50, remboursés si la consultation n’a pas lieu',
      ],
      body: [
        {
          h2: 'Pourquoi un deuxième avis',
          paras: [
            'Hémorroïdes, fissure, fistule, condylomes ou symptômes qui reviennent après une opération : avant une intervention, il est légitime de vouloir comprendre toutes les options. Une proctologue de la Clínica Proctológica de Lima revoit vos documents et vous explique comment elle comprend votre situation.',
          ],
        },
        {
          h2: 'Ce que vous obtenez',
          paras: [
            'Un échange de 30 minutes et un compte rendu écrit à partager avec le médecin qui vous suit. Ce deuxième avis ne remplace pas votre équipe de soins. Au Québec, le service se limite au deuxième avis et à l’orientation : nos médecins sont inscrits au Collège médical du Pérou et ne délivrent aucune ordonnance. Si vous préférez être pris en charge à Lima, les coûts indicatifs vous sont communiqués pendant la téléconsultation.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quels documents envoyer ?',
          a: 'Les comptes rendus de consultation et d’examens, le compte rendu opératoire si vous avez déjà été opéré, et la proposition de traitement.',
        },
        {
          q: 'Est-ce possible depuis le Québec ?',
          a: 'Oui, uniquement en deuxième avis et orientation. Votre médecin au Québec reste celui qui vous suit.',
        },
        {
          q: 'Puis-je me faire opérer à Lima ensuite ?',
          a: 'Si vous le souhaitez, l’équipe vous explique les étapes et vous communique les coûts indicatifs pendant la téléconsultation.',
        },
      ],
    },
    meta: {
      title: 'Deuxième avis avant une chirurgie',
      hook: 'Hésiter avant une opération, c’est normal. Un deuxième avis vous aide à décider.',
      text:
        'Une proctologue revoit votre dossier 30 minutes en vidéo, en français. Vous recevez un compte rendu écrit à partager avec votre chirurgien.',
      bullets: ['Relecture de vos examens', 'Compte rendu écrit', 'USD 50, remboursé si la consultation n’a pas lieu'],
    },
    tiktok: {
      title: 'Deuxième avis avant une opération',
      hook: 'On vous propose une opération ? Demandez un deuxième avis.',
      text:
        'Une proctologue de la Clínica Proctológica de Lima revoit vos examens 30 minutes en vidéo, en français. Vous recevez un compte rendu écrit à partager avec votre chirurgien. USD 50.',
    },
  },
];
