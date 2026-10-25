export const site = {
  name: "C.G.B Artisan",
  owner: "Gheorghe Cojocaru",
  phone: "07 80 61 07 91",
  phoneHref: "tel:+33780610791",
  email: "Gheorghe1779cc@icloud.com",
  city: "Mouroux, Seine-et-Marne (77)",
  postalCode: "77120",
  url: "https://cgbartisan.fr",
};

// Fiche entreprise pour Google (balisage JSON-LD de la page d'accueil).
// À remplir avec EXACTEMENT les mêmes informations que votre fiche Google
// Business Profile. Tout champ laissé vide est simplement ignoré.
export const profile = {
  // Numéro et rue. Laisser vide si vous ne voulez pas publier d'adresse
  // (artisan qui se déplace) : Google utilisera alors la zone d'intervention.
  streetAddress: "58 rue de la Danserie",
  // Coordonnées GPS (clic droit sur Google Maps > copier les coordonnées).
  latitude: undefined as number | undefined,
  longitude: undefined as number | undefined,
  // Horaires, comme sur la fiche. Jours : Monday, Tuesday, Wednesday,
  // Thursday, Friday, Saturday, Sunday. Heures au format "08:00".
  // Exemple : { days: ["Monday", "Tuesday"], opens: "08:00", closes: "18:00" }
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  // Fourchette de prix indicative, ex. "€€". Laisser vide si non souhaité.
  priceRange: "",
  // Lien de votre fiche Google (bouton « Partager » sur la fiche).
  googleMapsUrl: "",
  // Profils officiels : fiche Google, Facebook, Instagram, Pages Jaunes...
  sameAs: [] as string[],
  // Date de création de l'entreprise, ex. "2020-03-15" ou "2020".
  foundingDate: "2022-08-01",
};

// Informations légales (affichées dans les mentions légales).
// Vérifiées le 25/10/2026 dans l'annuaire des entreprises (recherche-entreprises.api.gouv.fr).
export const legal = {
  statut: "Entrepreneur individuel (EI)",
  siret: "918 398 678 00022",
  adresse: "58 rue de la Danserie, 77120 Mouroux",
  hebergeur:
    "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — https://vercel.com",
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#zone", label: "Zone d'intervention" },
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
];

export const projectTypes = [
  "Couverture",
  "Rénovation de toiture",
  "Zinguerie",
  "Étanchéité",
  "Démoussage & nettoyage",
  "Charpente",
  "Autre",
];
  