export type Metier = {
  slug: string
  nom: string
  nomPluriel: string
  panier: string
  douleur: string
  motCle: string
  image: string
  imageAlt: string
  image2: string
  image2Alt: string
  blogSlug: string
  blogTitle: string
  temoignage: { nom: string; entreprise: string; texte: string }
  relatedArticles: { slug: string; title: string; image: string; readTime: string }[]
}

export type Ville = {
  slug: string
  nom: string
  canton: string
  region: string
}

export type Service = {
  slug: string
  nom: string
  nomCourt: string
  verbe: string
  description: string
  includes: string[]
  image: string
}

export const METIERS: Metier[] = [
  {
    slug: "couvreur",
    nom: "Couvreur",
    nomPluriel: "Couvreurs",
    panier: "8'000–50'000 CHF",
    douleur: "des chantiers de toiture",
    motCle: "couvreur",
    image: "/blog/creation-site-couvreur/equipe-toit.webp",
    imageAlt: "Équipe de couvreurs sur un toit en Suisse romande",
    image2: "/blog/creation-site-couvreur/couvreur-marteau.webp",
    image2Alt: "Couvreur au travail sur une toiture en Suisse",
    blogSlug: "creation-site-internet-couvreur-suisse",
    blogTitle: "Pourquoi chaque couvreur doit avoir un site en 2026",
    temoignage: {
      nom: "Marc-Antoine Roulin",
      entreprise: "Roulin Couverture Sàrl, Lausanne",
      texte: "Depuis que Noovira a refait notre site, on reçoit 3 à 4 demandes de devis par semaine sans rien faire de plus. En 6 mois, on a signé pour plus de 200'000 CHF de chantiers supplémentaires.",
    },
    relatedArticles: [
      { slug: "creation-site-internet-couvreur-suisse", title: "Pourquoi chaque couvreur doit avoir un site en 2026", image: "/blog/creation-site-couvreur/equipe-toit.webp", readTime: "6 min" },
      { slug: "seo-local-couvreur-suisse-romande", title: "SEO local pour couvreurs : dominer Google en Suisse romande", image: "/blog/couvreur-lausanne/lausanne-lac.webp", readTime: "8 min" },
      { slug: "avis-google-couvreur-strategie", title: "Avis Google pour couvreurs : la stratégie qui convertit", image: "/blog/couvreur-geneve/geneve-vue.webp", readTime: "5 min" },
    ],
  },
  {
    slug: "renovateur-cuisine",
    nom: "Rénovateur de cuisine",
    nomPluriel: "Rénovateurs de cuisine",
    panier: "15'000–80'000 CHF",
    douleur: "des chantiers de rénovation cuisine",
    motCle: "rénovateur cuisine",
    image: "/blog/site-renovateur/hero.webp",
    imageAlt: "Rénovation de cuisine moderne en Suisse",
    image2: "/blog/site-renovateur/laptop-data.webp",
    image2Alt: "Résultats digitaux d'un rénovateur de cuisine en Suisse",
    blogSlug: "site-internet-renovateur-suisse",
    blogTitle: "Comment les rénovateurs de cuisine trouvent des chantiers en ligne",
    temoignage: {
      nom: "Julien Favre",
      entreprise: "Favre Rénovation, Genève",
      texte: "Je n'avais aucune présence en ligne avant. Maintenant j'ai un site superbe et les clients me trouvent sur Google. En 3 mois, j'ai eu 8 nouveaux chantiers directement depuis le site.",
    },
    relatedArticles: [
      { slug: "site-internet-renovateur-suisse", title: "Site internet pour rénovateur : trouver des chantiers en Suisse", image: "/blog/site-renovateur/hero.webp", readTime: "6 min" },
      { slug: "generer-devis-couvreur-site-internet", title: "Comment générer des demandes de devis avec votre site", image: "/blog/site-renovateur/laptop-data.webp", readTime: "5 min" },
      { slug: "reseaux-sociaux-artisans-batiment-suisse", title: "Réseaux sociaux pour artisans du bâtiment en Suisse", image: "/blog/reseaux-sociaux-artisans/hero.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "renovateur-salle-de-bain",
    nom: "Rénovateur de salle de bain",
    nomPluriel: "Rénovateurs de salle de bain",
    panier: "8'000–40'000 CHF",
    douleur: "des chantiers de rénovation salle de bain",
    motCle: "rénovateur salle de bain",
    image: "/blog/site-renovateur/laptop-data.webp",
    imageAlt: "Rénovation de salle de bain en Suisse romande",
    image2: "/blog/site-renovateur/hero.webp",
    image2Alt: "Résultats web pour un rénovateur salle de bain en Suisse",
    blogSlug: "site-internet-renovateur-suisse",
    blogTitle: "Site internet pour rénovateur de salle de bain en Suisse",
    temoignage: {
      nom: "Sophie Berthoud",
      entreprise: "Berthoud Rénovation, Fribourg",
      texte: "Super collaboration du début à la fin. Ils ont parfaitement compris mon activité. Mon site génère maintenant 2 à 3 demandes par semaine pour des rénovations complètes.",
    },
    relatedArticles: [
      { slug: "site-internet-renovateur-suisse", title: "Site internet pour rénovateur de salle de bain en Suisse", image: "/blog/site-renovateur/hero.webp", readTime: "6 min" },
      { slug: "photos-chantier-couvreur-guide", title: "Photos de chantier : attirer plus de clients avec vos réalisations", image: "/blog/site-renovateur/laptop-data.webp", readTime: "5 min" },
      { slug: "roi-site-internet-couvreur", title: "ROI d'un site internet pour artisan : les chiffres réels", image: "/blog/creation-site-couvreur/couvreur-marteau.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "paysagiste",
    nom: "Paysagiste",
    nomPluriel: "Paysagistes",
    panier: "5'000–30'000 CHF",
    douleur: "des chantiers d'aménagement extérieur",
    motCle: "paysagiste",
    image: "/blog/reseaux-sociaux-artisans/hero.webp",
    imageAlt: "Paysagiste travaillant sur un jardin en Suisse",
    image2: "/blog/reseaux-sociaux-artisans/smartphone-maps.webp",
    image2Alt: "Paysagiste visible sur Google Maps en Suisse romande",
    blogSlug: "reseaux-sociaux-artisans-batiment-suisse",
    blogTitle: "Comment les paysagistes trouvent plus de chantiers en ligne",
    temoignage: {
      nom: "Nicolas Gaillard",
      entreprise: "Gaillard Paysages, Nyon",
      texte: "Je cherchais une agence spécialisée dans le bâtiment. Noovira connaît vraiment notre secteur. Le site a été fait vite et bien, et j'ai eu mes premiers contacts dans les 3 semaines.",
    },
    relatedArticles: [
      { slug: "reseaux-sociaux-artisans-batiment-suisse", title: "Réseaux sociaux pour paysagistes : montrer vos réalisations", image: "/blog/reseaux-sociaux-artisans/hero.webp", readTime: "7 min" },
      { slug: "photos-chantier-couvreur-guide", title: "Photos de chantier : valoriser vos projets d'aménagement", image: "/blog/reseaux-sociaux-artisans/smartphone-maps.webp", readTime: "5 min" },
      { slug: "generer-devis-couvreur-site-internet", title: "Comment générer des demandes de devis avec votre site", image: "/blog/site-renovateur/laptop-data.webp", readTime: "5 min" },
    ],
  },
  {
    slug: "plombier",
    nom: "Plombier-Chauffagiste",
    nomPluriel: "Plombiers-Chauffagistes",
    panier: "3'000–20'000 CHF",
    douleur: "des interventions plomberie et chauffage",
    motCle: "plombier chauffagiste",
    image: "/blog/site-plombier/hero.webp",
    imageAlt: "Plombier chauffagiste en intervention en Suisse",
    image2: "/blog/site-plombier/smartphone-maps.webp",
    image2Alt: "Plombier visible sur Google Maps en Suisse romande",
    blogSlug: "site-internet-plombier-chauffagiste-suisse",
    blogTitle: "Site internet pour plombier-chauffagiste en Suisse romande",
    temoignage: {
      nom: "Christophe Terrier",
      entreprise: "Terrier Sanitaire, Lausanne",
      texte: "Service impeccable. Délais respectés, communication parfaite. Mon carnet de commandes s'est rempli bien plus vite depuis le lancement du site — je reçois des appels directs depuis Google.",
    },
    relatedArticles: [
      { slug: "site-internet-plombier-chauffagiste-suisse", title: "Site internet pour plombier-chauffagiste en Suisse romande", image: "/blog/site-plombier/hero.webp", readTime: "6 min" },
      { slug: "whatsapp-business-artisans-suisse", title: "WhatsApp Business pour artisans : recevoir des demandes 24h/24", image: "/blog/site-plombier/smartphone-maps.webp", readTime: "5 min" },
      { slug: "roi-site-internet-couvreur", title: "ROI d'un site internet pour artisan : les chiffres réels", image: "/blog/creation-site-couvreur/couvreur-marteau.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "charpentier",
    nom: "Charpentier",
    nomPluriel: "Charpentiers",
    panier: "10'000–60'000 CHF",
    douleur: "des chantiers de charpente",
    motCle: "charpentier",
    image: "/blog/site-charpentier/charpente-bois.webp",
    imageAlt: "Charpentier travaillant sur une charpente en bois",
    image2: "/blog/site-charpentier/toit-travaux.webp",
    image2Alt: "Chantier de charpente en Suisse romande",
    blogSlug: "site-internet-renovateur-suisse",
    blogTitle: "Site internet pour charpentier en Suisse romande",
    temoignage: {
      nom: "Patrick Müller",
      entreprise: "Müller Charpente, Fribourg",
      texte: "Sceptique au départ, mais le résultat est vraiment impressionnant. Mon site est beau, rapide, et surtout il génère de vraies demandes de chantiers. Très satisfait du suivi mensuel.",
    },
    relatedArticles: [
      { slug: "site-internet-charpentier-suisse", title: "Site internet pour charpentier en Suisse romande", image: "/blog/site-charpentier/charpente-bois.webp", readTime: "6 min" },
      { slug: "trouver-chantiers-couvreur-2026", title: "Trouver des chantiers en 2026 : les stratégies qui marchent", image: "/blog/site-charpentier/toit-travaux.webp", readTime: "8 min" },
      { slug: "assurances-couvreur-suisse-rc-professionnelle", title: "Assurances pour artisans du bâtiment en Suisse", image: "/blog/creation-site-couvreur/equipe-toit.webp", readTime: "5 min" },
    ],
  },
  {
    slug: "electricien",
    nom: "Électricien",
    nomPluriel: "Électriciens",
    panier: "3'000–15'000 CHF",
    douleur: "des chantiers électriques",
    motCle: "électricien",
    image: "/blog/site-electricien/hero.webp",
    imageAlt: "Électricien en intervention en Suisse romande",
    image2: "/blog/site-electricien/smartphone-maps.webp",
    image2Alt: "Électricien visible sur Google Maps en Suisse",
    blogSlug: "site-internet-electricien-suisse",
    blogTitle: "Site internet pour électricien en Suisse romande",
    temoignage: {
      nom: "Yannick Aubry",
      entreprise: "Aubry Électricité, Sion",
      texte: "Excellent travail. L'équipe a su capturer l'identité de mon entreprise. Je reçois régulièrement des demandes depuis la mise en ligne — surtout pour des installations domotiques.",
    },
    relatedArticles: [
      { slug: "site-internet-electricien-suisse", title: "Site internet pour électricien en Suisse romande", image: "/blog/site-electricien/hero.webp", readTime: "6 min" },
      { slug: "google-my-business-couvreur-suisse", title: "Google Business pour électricien : être visible localement", image: "/blog/site-electricien/smartphone-maps.webp", readTime: "5 min" },
      { slug: "roi-site-internet-couvreur", title: "ROI d'un site internet pour artisan : les chiffres réels", image: "/blog/creation-site-couvreur/couvreur-marteau.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "peintre",
    nom: "Peintre en bâtiment",
    nomPluriel: "Peintres en bâtiment",
    panier: "2'000–15'000 CHF",
    douleur: "des chantiers de peinture",
    motCle: "peintre bâtiment",
    image: "/blog/site-peintre/hero.webp",
    imageAlt: "Peintre en bâtiment au travail en Suisse",
    image2: "/blog/site-peintre/smartphone-maps.webp",
    image2Alt: "Peintre en bâtiment visible sur Google en Suisse romande",
    blogSlug: "site-internet-peintre-suisse",
    blogTitle: "Site internet pour peintre en bâtiment en Suisse",
    temoignage: {
      nom: "Laura Schmitt",
      entreprise: "Schmitt Peinture, Neuchâtel",
      texte: "Professionnelle, créative et à l'écoute. Ils ont livré exactement ce que j'attendais. Mon site fait maintenant une excellente impression et j'ai doublé mes demandes de devis.",
    },
    relatedArticles: [
      { slug: "site-internet-peintre-suisse", title: "Site internet pour peintre en bâtiment en Suisse", image: "/blog/site-peintre/hero.webp", readTime: "6 min" },
      { slug: "photos-chantier-couvreur-guide", title: "Photos de chantier : montrer vos réalisations pour convaincre", image: "/blog/site-peintre/smartphone-maps.webp", readTime: "5 min" },
      { slug: "fidelisation-client-couvreur-recommandations", title: "Fidélisation client pour artisans : générer des recommandations", image: "/blog/creation-site-couvreur/couvreur-marteau.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "carreleur",
    nom: "Carreleur",
    nomPluriel: "Carreleurs",
    panier: "3'000–12'000 CHF",
    douleur: "des chantiers de carrelage",
    motCle: "carreleur",
    image: "/blog/checklist-digital-couvreur/hero.webp",
    imageAlt: "Carreleur posant du carrelage en Suisse",
    image2: "/blog/checklist-digital-couvreur/analytics.webp",
    image2Alt: "Résultats Google pour un carreleur en Suisse romande",
    blogSlug: "checklist-digital-couvreur-2026",
    blogTitle: "Checklist digitale pour artisans du bâtiment en Suisse",
    temoignage: {
      nom: "Marco Santos",
      entreprise: "Santos Carrelage, Lausanne",
      texte: "J'avais essayé de créer mon site moi-même sans succès. Noovira a tout géré en 2 semaines. Maintenant je reçois des demandes de particuliers qui me trouvent directement sur Google.",
    },
    relatedArticles: [
      { slug: "checklist-digital-couvreur-2026", title: "Checklist digitale pour artisans du bâtiment en 2026", image: "/blog/checklist-digital-couvreur/hero.webp", readTime: "6 min" },
      { slug: "generer-devis-couvreur-site-internet", title: "Générer des demandes de devis avec votre site internet", image: "/blog/checklist-digital-couvreur/analytics.webp", readTime: "5 min" },
      { slug: "prix-site-internet-couvreur-suisse", title: "Prix d'un site internet pour artisan en Suisse romande", image: "/blog/creation-site-couvreur/equipe-toit.webp", readTime: "7 min" },
    ],
  },
  {
    slug: "macon",
    nom: "Maçon",
    nomPluriel: "Maçons",
    panier: "5'000–30'000 CHF",
    douleur: "des chantiers de maçonnerie",
    motCle: "maçon",
    image: "/blog/site-charpentier/toit-travaux.webp",
    imageAlt: "Maçon sur un chantier de construction en Suisse",
    image2: "/blog/site-charpentier/charpente-bois.webp",
    image2Alt: "Chantier de maçonnerie en Suisse romande",
    blogSlug: "trouver-chantiers-couvreur",
    blogTitle: "Comment un maçon trouve plus de chantiers grâce à Internet",
    temoignage: {
      nom: "Girardin Thomas",
      entreprise: "Girardin BTP, Bulle",
      texte: "Noovira a compris exactement ce dont j'avais besoin. Un site simple, professionnel, qui me représente bien. En 2 mois j'avais déjà rentabilisé l'investissement avec 2 nouveaux chantiers.",
    },
    relatedArticles: [
      { slug: "trouver-chantiers-couvreur-2026", title: "Trouver des chantiers en 2026 : les stratégies digitales", image: "/blog/site-charpentier/toit-travaux.webp", readTime: "8 min" },
      { slug: "devis-couvreur-structure-qui-fait-signer", title: "Devis artisan : la structure qui fait signer plus de clients", image: "/blog/site-charpentier/charpente-bois.webp", readTime: "6 min" },
      { slug: "roi-site-internet-couvreur", title: "ROI d'un site internet pour artisan : les chiffres réels", image: "/blog/creation-site-couvreur/couvreur-marteau.webp", readTime: "7 min" },
    ],
  },
]

export const VILLE_IMAGES: Record<string, string> = {
  geneve: "/blog/couvreur-geneve/geneve-vue.webp",
  lausanne: "/blog/couvreur-lausanne/lausanne-lac.webp",
  fribourg: "/blog/couvreur-fribourg/fribourg-ville.webp",
  neuchatel: "/blog/couvreur-neuchatel-valais/valais-montagne.webp",
  sion: "/blog/couvreur-neuchatel-valais/valais-montagne.webp",
}

export const VILLES: Ville[] = [
  { slug: "geneve", nom: "Genève", canton: "GE", region: "Suisse romande" },
  { slug: "lausanne", nom: "Lausanne", canton: "VD", region: "Suisse romande" },
  { slug: "fribourg", nom: "Fribourg", canton: "FR", region: "Suisse romande" },
  { slug: "neuchatel", nom: "Neuchâtel", canton: "NE", region: "Suisse romande" },
  { slug: "sion", nom: "Sion", canton: "VS", region: "Suisse romande" },
  { slug: "sierre", nom: "Sierre", canton: "VS", region: "Suisse romande" },
  { slug: "martigny", nom: "Martigny", canton: "VS", region: "Suisse romande" },
  { slug: "monthey", nom: "Monthey", canton: "VS", region: "Suisse romande" },
  { slug: "nyon", nom: "Nyon", canton: "VD", region: "Suisse romande" },
  { slug: "morges", nom: "Morges", canton: "VD", region: "Suisse romande" },
  { slug: "yverdon", nom: "Yverdon-les-Bains", canton: "VD", region: "Suisse romande" },
  { slug: "vevey", nom: "Vevey", canton: "VD", region: "Suisse romande" },
  { slug: "montreux", nom: "Montreux", canton: "VD", region: "Suisse romande" },
  { slug: "bulle", nom: "Bulle", canton: "FR", region: "Suisse romande" },
  { slug: "la-chaux-de-fonds", nom: "La Chaux-de-Fonds", canton: "NE", region: "Suisse romande" },
  { slug: "delemont", nom: "Delémont", canton: "JU", region: "Suisse romande" },
  { slug: "porrentruy", nom: "Porrentruy", canton: "JU", region: "Suisse romande" },
  { slug: "payerne", nom: "Payerne", canton: "VD", region: "Suisse romande" },
  { slug: "gland", nom: "Gland", canton: "VD", region: "Suisse romande" },
  { slug: "rolle", nom: "Rolle", canton: "VD", region: "Suisse romande" },
  { slug: "aigle", nom: "Aigle", canton: "VD", region: "Suisse romande" },
  { slug: "bex", nom: "Bex", canton: "VD", region: "Suisse romande" },
  { slug: "orbe", nom: "Orbe", canton: "VD", region: "Suisse romande" },
  { slug: "cossonay", nom: "Cossonay", canton: "VD", region: "Suisse romande" },
  { slug: "echallens", nom: "Échallens", canton: "VD", region: "Suisse romande" },
  { slug: "oron", nom: "Oron", canton: "VD", region: "Suisse romande" },
  { slug: "chatel-st-denis", nom: "Châtel-St-Denis", canton: "FR", region: "Suisse romande" },
  { slug: "marly", nom: "Marly", canton: "FR", region: "Suisse romande" },
  { slug: "villars-sur-glane", nom: "Villars-sur-Glâne", canton: "FR", region: "Suisse romande" },
  { slug: "murten", nom: "Morat", canton: "FR", region: "Suisse romande" },
  { slug: "estavayer", nom: "Estavayer-le-Lac", canton: "FR", region: "Suisse romande" },
  { slug: "romont", nom: "Romont", canton: "FR", region: "Suisse romande" },
  { slug: "le-locle", nom: "Le Locle", canton: "NE", region: "Suisse romande" },
  { slug: "st-imier", nom: "Saint-Imier", canton: "BE", region: "Suisse romande" },
  { slug: "biel-bienne", nom: "Bienne", canton: "BE", region: "Suisse romande" },
  { slug: "verbier", nom: "Verbier", canton: "VS", region: "Suisse romande" },
  { slug: "crans-montana", nom: "Crans-Montana", canton: "VS", region: "Suisse romande" },
  { slug: "zermatt", nom: "Zermatt", canton: "VS", region: "Suisse romande" },
  { slug: "saillon", nom: "Saillon", canton: "VS", region: "Suisse romande" },
  { slug: "saxon", nom: "Saxon", canton: "VS", region: "Suisse romande" },
  { slug: "conthey", nom: "Conthey", canton: "VS", region: "Suisse romande" },
  { slug: "ardon", nom: "Ardon", canton: "VS", region: "Suisse romande" },
  { slug: "chamoson", nom: "Chamoson", canton: "VS", region: "Suisse romande" },
  { slug: "renens", nom: "Renens", canton: "VD", region: "Suisse romande" },
  { slug: "prilly", nom: "Prilly", canton: "VD", region: "Suisse romande" },
  { slug: "pully", nom: "Pully", canton: "VD", region: "Suisse romande" },
  { slug: "lutry", nom: "Lutry", canton: "VD", region: "Suisse romande" },
  { slug: "cully", nom: "Cully", canton: "VD", region: "Suisse romande" },
  { slug: "st-sulpice", nom: "Saint-Sulpice", canton: "VD", region: "Suisse romande" },
  { slug: "crissier", nom: "Crissier", canton: "VD", region: "Suisse romande" },
  { slug: "bussigny", nom: "Bussigny", canton: "VD", region: "Suisse romande" },
  { slug: "cheseaux", nom: "Cheseaux-sur-Lausanne", canton: "VD", region: "Suisse romande" },
]

export const SERVICES: Service[] = [
  {
    slug: "creation-site-internet",
    nom: "Création de site internet",
    nomCourt: "Site Web",
    verbe: "Créer",
    description: "Site web professionnel optimisé pour convertir les visiteurs en demandes de devis",
    image: "/blog/creation-site-couvreur/hero.webp",
    includes: [
      "Design professionnel sur-mesure (aucun template générique)",
      "Pages optimisées pour convertir les visiteurs en demandes de devis",
      "Fiche Google Business Profile configurée et optimisée",
      "Formulaire de contact et bouton d'appel en un clic",
      "Hébergement, SSL et maintenance inclus",
      "Livraison garantie en 2 semaines ouvrables",
      "SEO on-page pour apparaître sur 'couvreur [votre ville]'",
      "Responsive mobile — 70% des recherches se font depuis un smartphone",
    ],
  },
  {
    slug: "seo-local",
    nom: "SEO local",
    nomCourt: "SEO Local",
    verbe: "Référencer",
    description: "Apparaître en premier sur Google quand vos clients cherchent vos services dans votre ville",
    image: "/blog/seo-local/smartphone-recherche.webp",
    includes: [
      "Audit SEO complet de votre présence locale actuelle",
      "Optimisation Google Business Profile (photos, horaires, catégories)",
      "Création et optimisation de pages locales sur votre site",
      "Stratégie de mots-clés locaux : '[métier] [ville]' et variantes",
      "Netlinking local — citations dans les annuaires suisses",
      "Suivi mensuel des positions sur Google avec rapport",
      "Gestion et réponse aux avis Google",
      "Résultats mesurables en 4 à 8 semaines",
    ],
  },
  {
    slug: "publicite-google",
    nom: "Publicité Google & Facebook",
    nomCourt: "Google Ads",
    verbe: "Promouvoir",
    description: "Campagnes publicitaires ciblées pour générer des demandes de devis rapidement",
    image: "/blog/seo-vs-ads/analytics.webp",
    includes: [
      "Campagne Google Ads Search ciblée sur votre ville et métier",
      "Annonces rédigées pour maximiser le taux de clic (CTR)",
      "Landing page dédiée à la conversion (devis, appel)",
      "Ciblage géographique précis — canton ou rayon personnalisé",
      "Budget optimisé : pas de dépense inutile hors zone de travail",
      "Rapport hebdomadaire : clics, coût, devis générés",
      "Campagne Facebook/Instagram en option pour la notoriété locale",
      "Aucun engagement — résultats ou remboursement",
    ],
  },
]

export function getMetier(slug: string): Metier | undefined {
  return METIERS.find((m) => m.slug === slug)
}

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug)
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
