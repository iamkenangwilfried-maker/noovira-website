/**
 * Central project data — used by:
 *  - Hero physics tags (Matter.js)
 *  - Portfolio section
 *  - Case study pages /realisations/[slug]
 */

export interface Project {
  slug: string;
  title: string;
  url: string;
  category: string;
  description: string;
  process: string;
  color: string; // accent color for case study hero
}

export const PROJECTS: Project[] = [
  {
    slug: "roulin-couverture",
    title: "Roulin Couverture",
    url: "b3constructioncorp.com",
    category: "Couverture & Toiture",
    description: "Un site moderne pour un couvreur suisse avec présentation des services, galerie de réalisations et formulaire de devis en ligne.",
    process: "Analyse du marché local, création d'une identité visuelle forte, développement d'un site optimisé pour les recherches locales de couvreurs en Suisse romande.",
    color: "#2A3F5F",
  },
  {
    slug: "favre-renovation",
    title: "Favre Rénovation",
    url: "tekconstructiongroup.com",
    category: "Rénovation Générale",
    description: "Site vitrine pour une entreprise de rénovation avec portfolio de chantiers, témoignages clients et système de prise de rendez-vous.",
    process: "Mise en avant des before/after des chantiers, optimisation SEO locale pour les recherches 'rénovation' dans le canton de Vaud.",
    color: "#3D2B1F",
  },
  {
    slug: "muller-charpente",
    title: "Müller Charpente",
    url: "qualmax.co.nz",
    category: "Charpente & Bois",
    description: "Présence digitale haut de gamme pour un charpentier artisan, mettant en valeur le savoir-faire traditionnel et les réalisations sur mesure.",
    process: "Design sobre et premium reflétant l'excellence artisanale, galerie photo haute résolution, section certification et assurances.",
    color: "#4A3728",
  },
  {
    slug: "martinez-platrerie",
    title: "Martinez Plâtrerie",
    url: "schmittcompany.com",
    category: "Plâtrerie & Peinture",
    description: "Site web complet avec portfolio de finitions intérieures, tarification transparente et module de contact optimisé pour les leads.",
    process: "Tunnel de conversion optimisé, présentation des certifications Suisse, témoignages géolocalisés par canton.",
    color: "#1A3A4A",
  },
  {
    slug: "dupont-electricite",
    title: "Dupont Électricité",
    url: "candmhomebuilders.com",
    category: "Électricité & Domotique",
    description: "Site vitrine pour un électricien agréé avec pages de services détaillées, mise en avant des urgences 24h/24 et zones d'intervention.",
    process: "Architecture de l'information centrée sur les urgences électriques, optimisation locale pour les recherches 'électricien urgence Genève'.",
    color: "#1C3A1C",
  },
  {
    slug: "rochat-peinture",
    title: "Rochat Peinture",
    url: "cr-design-remodel.webflow.io",
    category: "Peinture Intérieure",
    description: "Vitrine en ligne pour artisan peintre, avec nuancier interactif, galerie de réalisations et devis en ligne rapide.",
    process: "Expérience utilisateur pensée pour les propriétaires cherchant un peintre fiable, système de devis en 3 étapes.",
    color: "#3A1A3A",
  },
  {
    slug: "berset-toitures",
    title: "Berset Toitures",
    url: "5starroofcare.co.uk",
    category: "Couverture & Étanchéité",
    description: "Site professionnel pour couvreur spécialisé étanchéité avec présentation des matériaux, garanties et certifications SUVA.",
    process: "Mise en avant des certifications et assurances, section FAQ technique rassurante, intégration Google Reviews automatique.",
    color: "#2A1A10",
  },
  {
    slug: "girardin-btp",
    title: "Girardin BTP",
    url: "ironstarconstruction.com",
    category: "Construction Générale",
    description: "Présence digitale complète pour une PME du bâtiment avec présentation des corps de métier, portfolio chantiers et appel d'offres.",
    process: "Site multipage avec architecture SEO locale par ville, landing pages ciblées par type de chantier.",
    color: "#1A2A3A",
  },
  {
    slug: "clune-construction",
    title: "Clune Construction",
    url: "clunegc.com",
    category: "Construction Commerciale",
    description: "Site corporate pour grande entreprise de construction avec présentation des projets d'envergure, équipes et certifications.",
    process: "Design institutionnel sérieux, section projets avec filtres par type, intégration formulaire appel d'offres.",
    color: "#1C1C2E",
  },
  {
    slug: "qualmax",
    title: "Qualmax",
    url: "qualmax.co.nz",
    category: "Construction & Rénovation",
    description: "Site vitrine moderne pour entrepreneur général avec présentation des services résidentiels et commerciaux.",
    process: "Hiérarchisation claire des services, appel à l'action omniprésent, optimisation Core Web Vitals.",
    color: "#2A3A2A",
  },
  {
    slug: "leopardo",
    title: "Leopardo",
    url: "leopardo.com",
    category: "Construction & Design",
    description: "Présence en ligne premium pour un cabinet de construction haut de gamme avec portfolio et études de cas.",
    process: "Identité visuelle soignée, études de cas détaillées avec métriques de projet, CTA orienté partenariats B2B.",
    color: "#3A2A1A",
  },
  {
    slug: "jdg-constructions",
    title: "JDG Constructions",
    url: "jdgconstructions.com.au",
    category: "Construction Résidentielle",
    description: "Site web pour constructeur résidentiel avec configurateur de maisons, témoignages et processus en 5 étapes.",
    process: "Parcours utilisateur guidé depuis l'inspiration jusqu'au devis, témoignages vidéo, garantie mise en avant.",
    color: "#2A2A3A",
  },
  {
    slug: "5-star-roof-care",
    title: "5 Star Roof Care",
    url: "5starroofcare.co.uk",
    category: "Entretien Toiture",
    description: "Site spécialisé entretien et réparation toiture avec devis en ligne express, zones d'intervention et avis Google intégrés.",
    process: "Tunnel de conversion rapide pour urgences toiture, intégration Google My Business, section avant/après.",
    color: "#3A1A1A",
  },
  {
    slug: "oasis-builders",
    title: "Oasis Builders",
    url: "oasisbuildersinc.com",
    category: "Construction Résidentielle",
    description: "Site moderne pour constructeur résidentiel avec galerie de maisons réalisées, options de financement et contact facilité.",
    process: "Design chaleureux et accueillant, focus sur la relation client, section FAQ rassurante pour primo-accédants.",
    color: "#1A3A2A",
  },
  {
    slug: "skender",
    title: "Skender",
    url: "skender.com",
    category: "Construction Commerciale",
    description: "Présence digitale institutional pour grande firme de construction avec projets phares et recrutement.",
    process: "Architecture de contenu pensée pour les décideurs B2B, portfolio de projets iconiques, section carrières.",
    color: "#1A1A3A",
  },
  {
    slug: "iron-star",
    title: "Iron Star Construction",
    url: "ironstarconstruction.com",
    category: "Construction Industrielle",
    description: "Site B2B pour construction industrielle avec présentation des équipements, certifications ISO et formulaire de partenariat.",
    process: "Design sobre et professionnel, focus sur les certifications et capacités techniques, landing pages appels d'offres.",
    color: "#2A1A1A",
  },
  {
    slug: "fh-paschen",
    title: "FH Paschen",
    url: "fhpaschen.com",
    category: "Infrastructure & BTP",
    description: "Site corporate pour groupe de BTP avec présentation des divisions, projets d'infrastructure et recrutement.",
    process: "Architecture multi-divisions, section projets filtrables, intégration LinkedIn pour le recrutement.",
    color: "#1A2A1A",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1],
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0],
  };
}
