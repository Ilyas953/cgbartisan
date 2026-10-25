export type Block = { title: string; text: string };
export type QA = { q: string; a: string };
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Ville = {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  postalCode: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  photos: { title: string; text: string; items: Photo[] };
  roofs: { title: string; intro: string; items: Block[] };
  services: { title: string; items: Block[] };
  rules: { title: string; intro: string; items: Block[] };
  price: { title: string; items: string[] };
  zone: { title: string; text: string; quartiers?: string[]; voisines: string[] };
  faq: QA[];
};

export const villes: Ville[] = [
  {
    slug: "couvreur-boulogne-billancourt",
    name: "Boulogne-Billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    postalCode: "92100",
    metaTitle: "Couvreur à Boulogne-Billancourt (92) – Zinc, ardoise, toiture",
    metaDescription:
      "Couvreur à Boulogne-Billancourt : réparation et rénovation de toitures en zinc et ardoise, zinguerie, étanchéité de toits-terrasses. Devis gratuit et détaillé.",
    h1: "Couvreur à Boulogne-Billancourt (92)",
    eyebrow: "Toiture, zinguerie et étanchéité dans les Hauts-de-Seine",
    intro: [
      "Toits en zinc des immeubles, brisis en ardoise, toits-terrasses des villas des années 30, maisons de ville en tuiles : à Boulogne-Billancourt, chaque toiture demande une technique différente. C.G.B Artisan, entreprise de couverture dirigée par Gheorghe Cojocaru, intervient à Boulogne-Billancourt pour la réparation, l'entretien et la rénovation de votre toiture.",
      "Particulier, copropriété ou syndic : nous vous accompagnons de l'inspection de la toiture jusqu'au nettoyage du chantier, en tenant compte des contraintes d'une ville dense de la petite couronne — accès, échafaudage sur la voie publique, voisinage et autorisations.",
    ],
    photos: {
      title: "Notre chantier de couverture zinc à Boulogne-Billancourt",
      text: "Sur cet immeuble de Boulogne-Billancourt, la couverture en zinc a été entièrement reprise : dépose de l'ancien revêtement, contrôle de la charpente, pose d'un voligeage neuf puis des feuilles de zinc. Le chantier s'est déroulé sous protection d'un échafaudage, au milieu des immeubles voisins.",
      items: [
        {
          src: "/images/refection-couverture-zinc-charpente.webp",
          alt: "Réfection d'une couverture en zinc à Boulogne-Billancourt (92) : charpente en fermettes, voligeage bois neuf et feuilles de zinc, échafaudage de sécurité",
          caption: "Boulogne-Billancourt : réfection d'une couverture zinc — charpente contrôlée, voligeage neuf et pose du zinc, sous protection d'un échafaudage.",
          width: 1200,
          height: 1600,
        },
      ],
    },
    roofs: {
      title: "Les toitures de Boulogne-Billancourt et leurs points faibles",
      intro:
        "Ville de plus de 100 000 habitants aux portes de Paris, Boulogne-Billancourt mêle immeubles anciens, patrimoine moderniste et constructions récentes. Chaque type de bâtiment a ses désordres typiques.",
      items: [
        {
          title: "Les toits en zinc et ardoise des immeubles",
          text: "Dans les quartiers proches de Paris comme République–Point-du-Jour ou le centre-ville, beaucoup d'immeubles de la fin du XIXe et du début du XXe siècle ont une toiture à la Mansart : brisis en ardoise, terrasson en zinc et lucarnes. Avec le temps, le zinc se perce, les soudures des noues et des chéneaux lâchent et les habillages de lucarnes laissent passer l'eau. Repris tôt, ces défauts se règlent par une réparation ciblée plutôt que par une réfection complète.",
        },
        {
          title: "Les toits-terrasses des années 30",
          text: "Boulogne-Billancourt possède un patrimoine des années 30 rare en Île-de-France : Le Corbusier, Auguste Perret ou Robert Mallet-Stevens y ont construit des villas et des ateliers. Leurs toits plats, comme ceux de nombreux immeubles de la même époque, dépendent entièrement de leur étanchéité. Les infiltrations apparaissent le plus souvent au niveau des relevés, des acrotères et des évacuations d'eaux pluviales.",
        },
        {
          title: "Les maisons de ville",
          text: "Dans les quartiers des Princes–Marmottan ou de Parchamp–Albert-Kahn, les maisons et hôtels particuliers sont couverts en tuiles ou en ardoise. Tuiles cassées ou glissées, faîtage dont le mortier se dégrade, mousse sur les versants exposés au nord : ces désordres se traitent avant qu'ils n'atteignent la charpente.",
        },
        {
          title: "Gouttières et chéneaux sous les arbres",
          text: "Entre le bois de Boulogne, les berges de Seine et les nombreuses rues plantées, les feuilles bouchent vite les gouttières et les chéneaux. Un chéneau qui déborde finit par mouiller la façade et les têtes de murs : un nettoyage régulier évite des réparations bien plus coûteuses.",
        },
      ],
    },
    services: {
      title: "Nos interventions de couvreur à Boulogne-Billancourt",
      items: [
        {
          title: "Recherche de fuite et réparation",
          text: "Localisation de l'infiltration, mise hors d'eau et réparation durable : tuiles, ardoises, zinc ou solins.",
        },
        {
          title: "Couverture zinc et zinguerie",
          text: "Reprise de terrassons, noues, chéneaux, gouttières, descentes et habillages de lucarnes en zinc.",
        },
        {
          title: "Ardoise et tuiles",
          text: "Remplacement d'ardoises et de tuiles, révision complète ou réfection d'un versant.",
        },
        {
          title: "Étanchéité de toit-terrasse",
          text: "Diagnostic des relevés, des acrotères et des évacuations, puis traitement de l'étanchéité.",
        },
        {
          title: "Démoussage et entretien",
          text: "Nettoyage, démoussage et traitement hydrofuge, nettoyage des gouttières et chéneaux.",
        },
        {
          title: "Charpente",
          text: "Réparation et renforcement de charpente bois lorsque des pièces ont été abîmées par l'eau.",
        },
      ],
    },
    rules: {
      title: "Travaux de toiture à Boulogne-Billancourt : les démarches à prévoir",
      intro:
        "Une toiture en ville ne se refait pas comme une toiture à la campagne. Ces points sont à anticiper avant de fixer une date de chantier.",
      items: [
        {
          title: "Déclaration préalable de travaux",
          text: "Une réparation à l'identique ne demande en général pas d'autorisation. En revanche, changer de matériau ou de couleur, créer une fenêtre de toit ou modifier l'aspect extérieur nécessite une déclaration préalable en mairie, instruite selon le plan local d'urbanisme.",
        },
        {
          title: "Abords des monuments protégés",
          text: "Plusieurs villas et bâtiments de la ville sont protégés au titre des monuments historiques. Dans leur périmètre, l'Architecte des Bâtiments de France donne son avis sur les matériaux et les finitions : mieux vaut le prévoir dès le devis et dans le planning.",
        },
        {
          title: "Échafaudage et voie publique",
          text: "Dès qu'un échafaudage, une nacelle ou une benne occupe le trottoir ou la chaussée, une autorisation d'occupation du domaine public doit être obtenue avant le démarrage. Nous intégrons cette démarche au planning du chantier.",
        },
        {
          title: "Copropriétés",
          text: "La toiture fait partie des parties communes : les travaux sont votés en assemblée générale, sauf urgence. Nous fournissons un devis détaillé poste par poste et des photos de l'état de la toiture pour présenter le projet au syndic et aux copropriétaires.",
        },
      ],
    },
    price: {
      title: "Ce qui fait varier le prix de votre toiture à Boulogne-Billancourt",
      items: [
        "La surface et la pente de la toiture.",
        "Le matériau : zinc, ardoise naturelle, tuile, étanchéité de toit-terrasse.",
        "La hauteur de l'immeuble et l'accès : échafaudage, nacelle, cour intérieure.",
        "Les autorisations et l'occupation de la voie publique.",
        "L'état réel de la charpente et des supports, vérifié lors de la visite.",
      ],
    },
    zone: {
      title: "Nous intervenons dans tout Boulogne-Billancourt",
      text: "De la porte de Saint-Cloud aux berges de Seine, nous intervenons dans tous les quartiers de la ville et dans les communes voisines des Hauts-de-Seine.",
      quartiers: [
        "Centre-ville",
        "Les Princes–Marmottan",
        "Parchamp–Albert-Kahn",
        "Silly–Gallieni",
        "Billancourt–Rives-de-Seine",
        "République–Point-du-Jour",
      ],
      voisines: [
        "Issy-les-Moulineaux",
        "Sèvres",
        "Saint-Cloud",
        "Meudon",
        "Paris 16e",
      ],
    },
    faq: [
      {
        q: "Faut-il une autorisation pour refaire sa toiture à Boulogne-Billancourt ?",
        a: "Une réparation à l'identique n'en demande généralement pas. Un changement de matériau, de couleur ou la création d'une fenêtre de toit nécessite une déclaration préalable en mairie. Près d'un monument protégé, l'avis de l'Architecte des Bâtiments de France s'ajoute. Nous vous indiquons ce qui s'applique à votre adresse lors de la visite.",
      },
      {
        q: "Intervenez-vous sur les toits en zinc des immeubles ?",
        a: "Oui. Couvreur-zingueur, C.G.B Artisan reprend les terrassons, noues, chéneaux, gouttières et habillages de lucarnes en zinc, en réparation ponctuelle comme en réfection.",
      },
      {
        q: "Travaillez-vous avec les syndics de copropriété ?",
        a: "Oui. Nous établissons un devis détaillé et un constat photo de la toiture pour que le syndic puisse présenter les travaux en assemblée générale.",
      },
      {
        q: "Que faire en cas de fuite de toiture ?",
        a: "Appelez-nous au 07 80 61 07 91. Après localisation de la fuite, une mise hors d'eau provisoire peut être posée en attendant la réparation définitive.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Après visite de la toiture, vous recevez un devis détaillé, gratuit et sans engagement.",
      },
    ],
  },
  {
    slug: "couvreur-versailles",
    name: "Versailles",
    department: "Yvelines",
    departmentCode: "78",
    postalCode: "78000",
    metaTitle: "Couvreur à Versailles (78) – Ardoise, tuile plate et zinc",
    metaDescription:
      "Couvreur à Versailles : réparation et rénovation de toitures en ardoise, tuile plate et zinc, dans le respect des exigences de l'Architecte des Bâtiments de France. Devis gratuit.",
    h1: "Couvreur à Versailles (78)",
    eyebrow: "Toitures anciennes et patrimoniales dans les Yvelines",
    intro: [
      "À Versailles, la toiture fait partie du patrimoine : toits à la Mansart des hôtels particuliers, ardoise naturelle, tuile plate, zinc des immeubles du XIXe siècle et maisons en meulière des quartiers résidentiels. C.G.B Artisan intervient à Versailles pour réparer, entretenir et rénover ces couvertures avec des matériaux et des techniques adaptés à leur époque.",
      "Dans une ville où une grande partie des travaux visibles depuis la rue passe par l'avis de l'Architecte des Bâtiments de France, le devis prévoit dès le départ les matériaux et les détails de finition attendus, pour éviter les mauvaises surprises en cours de chantier.",
    ],
    photos: {
      title: "Une toiture rénovée par C.G.B Artisan à Versailles",
      text: "Sur cette maison de Versailles couverte en gris anthracite, la qualité se joue dans les détails : alignement de la couverture, faîtages, noues, raccords autour des fenêtres de toit et des lucarnes, étanchéité de la souche de cheminée.",
      items: [
        {
          src: "/images/toiture-anthracite-fenetres-de-toit-drone.webp",
          alt: "Vue drone d'une toiture gris anthracite avec fenêtres de toit et noue à Versailles (78), chantier C.G.B Artisan",
          caption: "Versailles : toiture gris anthracite avec fenêtres de toit, faîtages et noue contrôlés en fin de chantier.",
          width: 1280,
          height: 720,
        },
        {
          src: "/images/toiture-anthracite-maison-vue-aerienne.webp",
          alt: "Vue aérienne d'une toiture gris anthracite à plusieurs versants avec lucarnes et souche de cheminée à Versailles (78)",
          caption: "Versailles : la même couverture à plusieurs versants, avec ses lucarnes et sa souche de cheminée.",
          width: 1280,
          height: 720,
        },
      ],
    },
    roofs: {
      title: "Les toitures versaillaises et leurs points faibles",
      intro:
        "De la ville royale des XVIIe et XVIIIe siècles aux quartiers résidentiels du XIXe et du XXe siècle, Versailles concentre presque toutes les techniques de couverture traditionnelles.",
      items: [
        {
          title: "Toits à la Mansart et ardoise naturelle",
          text: "Dans les quartiers Notre-Dame et Saint-Louis, les toitures à la Mansart associent un brisis très pentu en ardoise, un terrasson moins incliné et des lucarnes. Les désordres classiques : ardoises qui glissent quand les crochets ou les clous s'oxydent, ligne de bris qui fuit, solins et jouées de lucarnes dégradés.",
        },
        {
          title: "Tuile plate traditionnelle",
          text: "Sur les maisons anciennes et les dépendances, la tuile plate demande une pose serrée et un remplacement à l'identique. On complète avec des tuiles de même format et de même teinte, neuves ou de réemploi, pour conserver l'aspect d'origine de la toiture.",
        },
        {
          title: "Maisons en meulière et pavillons",
          text: "Dans les quartiers résidentiels comme Porchefontaine ou Montreuil, de nombreuses maisons de la fin du XIXe et du début du XXe siècle sont en meulière, couvertes de tuiles mécaniques avec débords de toit et épis de faîtage. Après un siècle, la terre cuite devient poreuse et le faîtage scellé se fissure.",
        },
        {
          title: "Une ville très boisée",
          text: "Parc du château, forêts domaniales voisines, avenues plantées : à Versailles, les feuilles et l'humidité favorisent la mousse sur les toitures et bouchent rapidement gouttières et chéneaux. Un entretien régulier prolonge nettement la durée de vie de la couverture.",
        },
      ],
    },
    services: {
      title: "Nos travaux de couverture à Versailles",
      items: [
        {
          title: "Toiture en ardoise naturelle",
          text: "Remplacement d'ardoises, révision de brisis et de terrassons, réfection complète d'un versant.",
        },
        {
          title: "Tuile plate et tuile mécanique",
          text: "Réparation et réfection à l'identique, recherche de tuiles compatibles ou de réemploi.",
        },
        {
          title: "Zinguerie traditionnelle",
          text: "Gouttières, chéneaux, noues, ligne de bris et habillage de lucarnes en zinc.",
        },
        {
          title: "Recherche de fuite",
          text: "Localisation de l'infiltration, mise hors d'eau et réparation durable.",
        },
        {
          title: "Démoussage et entretien",
          text: "Nettoyage, démoussage et traitement hydrofuge, entretien des gouttières.",
        },
        {
          title: "Charpente",
          text: "Réparation et renforcement de charpente bois, remplacement de pièces abîmées.",
        },
      ],
    },
    rules: {
      title: "Toiture à Versailles : patrimoine et autorisations",
      intro:
        "Versailles est l'une des communes d'Île-de-France où les règles de protection du patrimoine pèsent le plus sur les travaux de toiture.",
      items: [
        {
          title: "L'avis de l'Architecte des Bâtiments de France",
          text: "Les abords du château, le site patrimonial remarquable et les nombreux monuments protégés couvrent une large partie de la commune. Dans ces secteurs, les travaux qui modifient l'aspect de la toiture sont soumis à l'avis de l'Architecte des Bâtiments de France, qui peut imposer le matériau, la forme des lucarnes ou le type de fenêtre de toit.",
        },
        {
          title: "Ardoise naturelle et tuile plate",
          text: "En secteur protégé, l'ardoise naturelle est généralement attendue plutôt que l'ardoise synthétique, et la tuile plate plutôt que la tuile mécanique sur les bâtiments anciens. Nous chiffrons d'emblée la solution recevable pour votre adresse.",
        },
        {
          title: "Fenêtres de toit",
          text: "En secteur protégé, on privilégie des châssis encastrés dans le plan de la couverture, de taille limitée, de type « patrimoine ». La création d'une ouverture passe par une déclaration préalable.",
        },
        {
          title: "Délais d'instruction",
          text: "Une déclaration préalable est instruite en un mois en général, et en deux mois lorsque l'Architecte des Bâtiments de France doit être consulté. Ce délai est à intégrer avant de planifier le chantier.",
        },
      ],
    },
    price: {
      title: "Ce qui fait varier le prix de votre toiture à Versailles",
      items: [
        "Le matériau imposé ou choisi : ardoise naturelle, tuile plate, zinc.",
        "La complexité de la toiture : brisis, lucarnes, noues, cheminées.",
        "Les exigences de finition en secteur protégé.",
        "L'accès et la hauteur du bâtiment : échafaudage, voie publique.",
        "L'état de la charpente et du voligeage, vérifié lors de la visite.",
      ],
    },
    zone: {
      title: "Nous intervenons dans tout Versailles",
      text: "Du centre historique aux quartiers résidentiels, nous intervenons dans toute la ville et dans les communes voisines des Yvelines.",
      quartiers: [
        "Notre-Dame",
        "Saint-Louis",
        "Clagny–Glatigny",
        "Montreuil",
        "Porchefontaine",
        "Chantiers",
        "Jussieu–Petits-Bois–Picardie",
        "Satory",
      ],
      voisines: [
        "Le Chesnay-Rocquencourt",
        "Viroflay",
        "Buc",
        "Saint-Cyr-l'École",
        "Jouy-en-Josas",
        "Vélizy-Villacoublay",
      ],
    },
    faq: [
      {
        q: "Faut-il l'accord de l'Architecte des Bâtiments de France pour refaire sa toiture à Versailles ?",
        a: "C'est le cas dans une grande partie de la ville : abords du château, site patrimonial remarquable et périmètres des monuments protégés. L'Architecte des Bâtiments de France donne alors son avis sur les matériaux et les finitions. Nous vous indiquons ce qui s'applique à votre adresse dès la visite.",
      },
      {
        q: "Peut-on remplacer l'ardoise naturelle par de l'ardoise synthétique ?",
        a: "Hors secteur protégé, c'est possible si le plan local d'urbanisme l'autorise. En secteur protégé, l'ardoise naturelle est généralement exigée. Nous chiffrons la solution recevable avant de démarrer.",
      },
      {
        q: "Intervenez-vous sur les maisons en meulière ?",
        a: "Oui : remplacement de tuiles mécaniques, reprise du faîtage, zinguerie, solins de cheminée et réfection complète si nécessaire.",
      },
      {
        q: "Combien de temps faut-il prévoir avant le chantier ?",
        a: "Comptez le délai d'instruction de la déclaration préalable lorsqu'elle est nécessaire : un mois en général, deux mois avec consultation de l'Architecte des Bâtiments de France. Une réparation urgente peut être traitée plus rapidement.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Après visite de la toiture, vous recevez un devis détaillé, gratuit et sans engagement.",
      },
    ],
  },
  {
    slug: "couvreur-savigny-sur-orge",
    name: "Savigny-sur-Orge",
    department: "Essonne",
    departmentCode: "91",
    postalCode: "91600",
    metaTitle: "Couvreur à Savigny-sur-Orge (91) – Tuiles, fuites, zinguerie",
    metaDescription:
      "Couvreur à Savigny-sur-Orge : réparation de toiture, remplacement de tuiles mécaniques, zinguerie, démoussage et rénovation de maisons en meulière. Devis gratuit.",
    h1: "Couvreur à Savigny-sur-Orge (91)",
    eyebrow: "Toitures de pavillons et de maisons en meulière en Essonne",
    intro: [
      "Savigny-sur-Orge est avant tout une ville de pavillons : maisons en meulière du début du XXe siècle, lotissements de l'entre-deux-guerres, maisons plus récentes sur les coteaux et le plateau. Leurs toitures, souvent en tuiles mécaniques, arrivent pour beaucoup en fin de vie. C.G.B Artisan intervient à Savigny-sur-Orge pour la réparation, l'entretien et la rénovation complète de votre toiture.",
      "Entre la vallée de l'Orge et le plateau, les toitures subissent humidité, mousse et coups de vent. Nous établissons un diagnostic de l'état réel de la couverture et vous conseillons entre réparation ciblée et réfection complète, sans travaux superflus.",
    ],
    photos: {
      title: "Notre chantier de toiture en tuiles à Savigny-sur-Orge",
      text: "Sur ce pavillon de Savigny-sur-Orge couvert en tuiles terre cuite, un garde-corps a été posé en bas de pente avant toute intervention. Remplacement de tuiles, révision du faîtage et raccords autour des fenêtres de toit : c'est le type de chantier que nous réalisons au quotidien sur les maisons de la commune.",
      items: [
        {
          src: "/images/chantier-toiture-tuiles-terre-cuite-garde-corps.webp",
          alt: "Couvreurs C.G.B Artisan au travail sur une toiture en tuiles terre cuite à Savigny-sur-Orge (91), sécurisée par un garde-corps",
          caption: "Savigny-sur-Orge : intervention sur une toiture en tuiles terre cuite, garde-corps posé en bas de pente avant de monter sur le toit.",
          width: 1280,
          height: 720,
        },
        {
          src: "/images/realisation-1.webp",
          alt: "Vue aérienne d'une toiture en tuiles terre cuite avec fenêtres de toit à Savigny-sur-Orge (91)",
          caption: "Savigny-sur-Orge : la même toiture vue du dessus, avec ses deux fenêtres de toit et son faîtage.",
          width: 1280,
          height: 720,
        },
      ],
    },
    roofs: {
      title: "Les toitures de Savigny-sur-Orge et leurs points faibles",
      intro:
        "L'essentiel du bâti de la commune est constitué de maisons individuelles, construites pour beaucoup entre 1900 et 1960. Leurs toitures vieillissent toutes de la même façon.",
      items: [
        {
          title: "Maisons en meulière et tuiles mécaniques",
          text: "Les maisons en meulière du début du XXe siècle sont souvent couvertes de tuiles mécaniques à emboîtement en terre cuite, avec débords de toit, aisseliers en bois et parfois épis de faîtage. Après 80 à 100 ans, la terre cuite devient poreuse, les tuiles se fendent sous l'effet du gel et les liteaux fatiguent.",
        },
        {
          title: "Pavillons des lotissements",
          text: "Les pavillons de l'entre-deux-guerres et de l'après-guerre ont souvent des charpentes légères et une zinguerie simple : gouttières pendantes en zinc, descentes et raccords d'eaux pluviales. Ce sont souvent eux qui cèdent en premier et provoquent des infiltrations en pied de mur.",
        },
        {
          title: "Cheminées et solins",
          text: "Beaucoup de maisons ont conservé une ou plusieurs souches de cheminée en brique. Les solins en mortier qui assurent l'étanchéité autour de la souche se fissurent avec le temps : c'est l'une des causes de fuite les plus fréquentes sur les toitures anciennes.",
        },
        {
          title: "L'humidité de la vallée de l'Orge",
          text: "Dans les quartiers proches de l'Orge et sous les grands arbres des jardins, les versants exposés au nord se couvrent vite de mousse et de lichen. La mousse retient l'eau, soulève les tuiles et accélère leur usure : un démoussage suivi d'un traitement hydrofuge la protège pour plusieurs années.",
        },
      ],
    },
    services: {
      title: "Nos interventions de couvreur à Savigny-sur-Orge",
      items: [
        {
          title: "Remplacement de tuiles",
          text: "Remplacement de tuiles cassées ou poreuses, révision de la toiture, reprise du faîtage.",
        },
        {
          title: "Réfection complète de toiture",
          text: "Dépose, contrôle de la charpente, liteaux et écran sous-toiture neufs, pose de tuiles neuves.",
        },
        {
          title: "Zinguerie",
          text: "Gouttières, descentes, noues et solins de cheminée en zinc ou en plomb.",
        },
        {
          title: "Recherche de fuite",
          text: "Localisation de l'infiltration, mise hors d'eau et réparation durable.",
        },
        {
          title: "Démoussage et hydrofuge",
          text: "Nettoyage, démoussage et traitement hydrofuge de la couverture.",
        },
        {
          title: "Charpente",
          text: "Réparation et renforcement de charpente bois, remplacement de chevrons et de pièces abîmées.",
        },
      ],
    },
    rules: {
      title: "Refaire sa toiture à Savigny-sur-Orge : ce qu'il faut savoir",
      intro:
        "Avant d'engager des travaux, quelques questions permettent de choisir la bonne solution et d'éviter les mauvaises surprises.",
      items: [
        {
          title: "Réparer ou refaire ?",
          text: "Une réparation suffit tant que les tuiles sont saines dans l'ensemble. Une réfection complète devient pertinente quand les tuiles poreuses se comptent par dizaines, que les liteaux sont pourris, que les fuites se multiplient ou que la toiture n'a pas d'écran sous-toiture.",
        },
        {
          title: "Trouver des tuiles compatibles",
          text: "Certains modèles anciens de tuiles mécaniques ne sont plus fabriqués. Nous cherchons un modèle compatible ou des tuiles de réemploi ; à défaut, la reprise d'un pan complet garde un aspect homogène.",
        },
        {
          title: "Déclaration préalable",
          text: "Changer de type ou de couleur de tuile, ou créer une fenêtre de toit, modifie l'aspect extérieur de la maison : une déclaration préalable est à déposer en mairie, conformément au plan local d'urbanisme.",
        },
        {
          title: "Le bon moment pour intervenir",
          text: "Une inspection à la sortie de l'hiver permet de repérer les tuiles fendues par le gel. À l'automne, le nettoyage des gouttières évite les débordements des grosses pluies.",
        },
      ],
    },
    price: {
      title: "Ce qui fait varier le prix de votre toiture à Savigny-sur-Orge",
      items: [
        "La surface et la pente de la toiture.",
        "Le choix entre réparation ciblée et réfection complète.",
        "Le modèle de tuile et la disponibilité de tuiles compatibles.",
        "L'état des liteaux, de la charpente et de la zinguerie.",
        "Le nombre de souches de cheminée, de noues et de fenêtres de toit.",
      ],
    },
    zone: {
      title: "Nous intervenons dans tout Savigny-sur-Orge",
      text: "De la vallée de l'Orge au plateau, nous intervenons dans toute la commune et dans les villes voisines de l'Essonne.",
      voisines: [
        "Juvisy-sur-Orge",
        "Viry-Châtillon",
        "Morsang-sur-Orge",
        "Épinay-sur-Orge",
        "Athis-Mons",
        "Morangis",
      ],
    },
    faq: [
      {
        q: "Mes tuiles mécaniques sont anciennes : faut-il refaire toute la toiture ?",
        a: "Pas forcément. Si la majorité des tuiles est saine, un remplacement ciblé et une révision suffisent. Nous vérifions l'état des tuiles, des liteaux et de la charpente avant de vous conseiller une réfection complète.",
      },
      {
        q: "Trouve-t-on encore des tuiles compatibles avec les anciennes tuiles mécaniques ?",
        a: "Souvent oui, en neuf ou en réemploi. Quand le modèle est introuvable, la reprise d'un pan complet permet de garder une toiture homogène.",
      },
      {
        q: "D'où vient une fuite autour de la cheminée ?",
        a: "Le plus souvent des solins en mortier fissurés autour de la souche, parfois de la souche elle-même. Nous refaisons l'étanchéité avec des solins en zinc ou en plomb.",
      },
      {
        q: "Faut-il une autorisation pour changer ses tuiles à Savigny-sur-Orge ?",
        a: "Pour un remplacement à l'identique, en général non. Pour un changement de modèle ou de couleur, ou la création d'une fenêtre de toit, une déclaration préalable est à déposer en mairie.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Après visite de la toiture, vous recevez un devis détaillé, gratuit et sans engagement.",
      },
    ],
  },
];

export const getVille = (slug: string) => villes.find((v) => v.slug === slug);
