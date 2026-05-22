# Noovira AI Website — Règles & Mémoire Technique

> Fichier de référence pour les sessions futures. Toujours lire avant de modifier un composant.

## Stack
- **Framework**: Next.js 14 App Router (TypeScript)
- **Style**: Tailwind CSS + design system Sher Agency
- **Animations**: Framer Motion
- **Blog**: MDX via `next-mdx-remote/rsc` + `remark-gfm` + `gray-matter`
- **Deploy**: `npx vercel --prod` depuis `/Users/pro/NOOVIRA AI AGENCY/website`

---

## Design Système — TOKENS IMMUABLES

| Token | Valeur | Usage |
|---|---|---|
| `section-dark` | #1C1C1C | Hero, navbar, footer, FinalCTA |
| `section-white` | #F7F4EF | Sections contenu |
| `bg-rose` | rose/saumon | CTA buttons, pill badges |
| `font-heading` | Display font | Tous les grands titres H1/H2 |

**Cards portfolio/blog**: height 480px (featured 560px) · bg-dark · gradient `from-dark via-dark/40 to-dark/5` · bouton pill rose

---

## Composants Partagés — RÈGLES CRITIQUES

### `components/sections/final-cta.tsx`
```
Texte H2 : "Réinventez Votre / Site Avec Nous."
CTA btn  : href="/contact"  ← PAS de lien externe, PAS target="_blank"
Icône    : ArrowUpRight size={16}
```
⛔ Ce composant est utilisé sur TOUTES les pages. Ne jamais changer le texte ni mettre un lien externe.

### `components/sections/navbar.tsx`
```
Layout    : max-w-7xl mx-auto px-6  ← aligne le logo avec le footer
Logo      : 56px · background #0A0A0A · rounded-xl
Breakpoint: lg:hidden (PAS md:hidden — overflow avec 5 liens + CTA)
CTA       : href="/contact"  ← PAS href="#contact"
```
**LINKS array** (ordre fixe) :
1. Notre Processus → /creation-de-site
2. Gestion de Site → /gestion-de-site
3. SEO & Publicité → /seo-publicite
4. Portfolio → /realisations
5. Blog → /blog

### `components/sections/team.tsx`
```
Photos: <img> natif  ← PAS next/image avec fill (cause images blanches en prod)
Jennifer Hang = Content Strategist · photo: /team/sofia_reyes.webp
```

---

## Blog — Règles MDX

1. **Pas de H1 dans le corps MDX** — le template `app/blog/[slug]/page.tsx` génère déjà le `<h1>` depuis `frontmatter.title`. Mettre un `# Titre` dans le MDX = 2 H1 sur la page (erreur SEO).
2. **Tables Markdown** → nécessitent le plugin `remark-gfm` (déjà configuré).
3. **Pas de `export const`** dans le MDX (cause erreur compileMDX). Mettre les données FAQ dans le frontmatter YAML.
4. **Auteur par défaut** : `Jennifer Hang` (constante `DEFAULT_AUTHOR` dans `lib/articles.ts`).
5. **JSON-LD** Article + FAQPage générés programmatiquement dans `app/blog/[slug]/page.tsx` — pas dans le MDX.

### Frontmatter obligatoire
```yaml
title: "..."
slug: "..."
description: "..."
publishedAt: "YYYY-MM-DD"
author: "Jennifer Hang"
category: "..."
tags: [...]
image: "/..."
readingTime: "X min"
faq:
  - q: "..."
    a: "..."
```

---

## URLs du site (nooviraai.com)

### Pages statiques
- https://nooviraai.com/
- https://nooviraai.com/creation-de-site
- https://nooviraai.com/gestion-de-site
- https://nooviraai.com/seo-publicite
- https://nooviraai.com/realisations
- https://nooviraai.com/blog
- https://nooviraai.com/contact
- https://nooviraai.com/privacy-policy
- https://nooviraai.com/cookie-policy
- https://nooviraai.com/terms-of-service

### Articles blog (30 articles)

**Cluster A — Fondations (couvreurs)**
- https://nooviraai.com/blog/prix-site-internet-couvreur-suisse
- https://nooviraai.com/blog/creation-site-internet-couvreur-suisse
- https://nooviraai.com/blog/google-my-business-couvreur-suisse
- https://nooviraai.com/blog/seo-local-couvreur-suisse-romande
- https://nooviraai.com/blog/generer-devis-couvreur-site-internet
- https://nooviraai.com/blog/roi-site-internet-couvreur
- https://nooviraai.com/blog/site-internet-charpentier-suisse

**Cluster B — Stratégie digitale (couvreurs)**
- https://nooviraai.com/blog/seo-vs-google-ads-couvreur-suisse
- https://nooviraai.com/blog/choisir-agence-web-couvreur-suisse
- https://nooviraai.com/blog/avis-google-couvreur-strategie

**Cluster C — Pages locales (villes)**
- https://nooviraai.com/blog/couvreur-lausanne-google-maps
- https://nooviraai.com/blog/couvreur-geneve-visibilite-en-ligne
- https://nooviraai.com/blog/couvreur-fribourg-premier-google
- https://nooviraai.com/blog/couvreur-neuchatel-valais-devis-locaux

**Cluster D — Autres métiers du bâtiment**
- https://nooviraai.com/blog/site-internet-renovateur-suisse
- https://nooviraai.com/blog/site-internet-electricien-suisse
- https://nooviraai.com/blog/site-internet-peintre-suisse
- https://nooviraai.com/blog/site-internet-plombier-chauffagiste-suisse
- https://nooviraai.com/blog/reseaux-sociaux-artisans-batiment-suisse
- https://nooviraai.com/blog/photos-chantier-couvreur-guide
- https://nooviraai.com/blog/whatsapp-business-artisans-suisse

**Cluster E — Développement business couvreurs**
- https://nooviraai.com/blog/devis-couvreur-structure-qui-fait-signer
- https://nooviraai.com/blog/tarifs-couvreur-suisse-fixer-ses-prix
- https://nooviraai.com/blog/trouver-chantiers-couvreur-2026
- https://nooviraai.com/blog/fidelisation-client-couvreur-recommandations
- https://nooviraai.com/blog/entretien-toiture-suisse-frequence-couts
- https://nooviraai.com/blog/assurances-couvreur-suisse-rc-professionnelle
- https://nooviraai.com/blog/urgences-toiture-organisation-couvreur
- https://nooviraai.com/blog/suissetec-couvreur-certification-suisse
- https://nooviraai.com/blog/checklist-digital-couvreur-2026

### Études de cas (portfolio)
- https://nooviraai.com/realisations/roulin-couverture
- https://nooviraai.com/realisations/favre-renovation
- https://nooviraai.com/realisations/muller-charpente
- https://nooviraai.com/realisations/martinez-platrerie
- https://nooviraai.com/realisations/dupont-electricite
- https://nooviraai.com/realisations/rochat-peinture
- https://nooviraai.com/realisations/berset-toitures
- https://nooviraai.com/realisations/girardin-btp
- https://nooviraai.com/realisations/clune-construction
- https://nooviraai.com/realisations/qualmax
- https://nooviraai.com/realisations/leopardo
- https://nooviraai.com/realisations/jdg-constructions
- https://nooviraai.com/realisations/5-star-roof-care
- https://nooviraai.com/realisations/oasis-builders
- https://nooviraai.com/realisations/skender
- https://nooviraai.com/realisations/iron-star
- https://nooviraai.com/realisations/fh-paschen

---

## Erreurs historiques à ne plus reproduire

| Erreur | Conséquence | Fix |
|---|---|---|
| Modifier le texte/lien de final-cta.tsx | Casse toutes les pages du site | Restaurer depuis ce fichier |
| `next/image` avec `fill` pour photos locales team | Images blanches en production | Utiliser `<img>` natif |
| `# H1` dans le corps MDX | Double H1, erreur SEO | Supprimer le H1 du MDX |
| `href="#contact"` dans navbar | Lien mort sur les sous-pages | Toujours `href="/contact"` |
| Breakpoint `md:` avec 5 liens navbar | Overflow du menu | Toujours `lg:` |
| `export const schema = {...}` dans MDX | Erreur compileMDX | Mettre dans frontmatter YAML |
