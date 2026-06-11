import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/sections/navbar"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import SeoHub from "@/components/sections/seo-hub"
import PortfolioScrollCard from "@/components/sections/portfolio-scroll-card"
import TemoignageScroll from "@/components/sections/temoignage-scroll"
import {
  SERVICES,
  METIERS,
  VILLES,
  getService,
  getMetier,
  getVille,
  VILLE_IMAGES,
} from "@/lib/seo-data"

// Brand colors (inline to bypass Tailwind purge on bracket-named dirs)
const ROSE = "#FFD6D8"
const DARK = "#1C1C1C"

// Vidéo du site de référence par métier
const METIER_VIDEOS: Record<string, { src: string; label: string }> = {
  "couvreur":                 { src: "/videos/roulin-couverture/01.mp4",  label: "roulin-couverture.ch" },
  "charpentier":              { src: "/videos/muller-charpente/01.mp4",   label: "muller-charpente.ch" },
  "electricien":              { src: "/videos/dupont-electricite/01.mp4", label: "dupont-electricite.ch" },
  "peintre":                  { src: "/videos/rochat-peinture/01.mp4",    label: "rochat-peinture.ch" },
  "renovateur-cuisine":       { src: "/videos/favre-renovation/01.mp4",   label: "favre-renovation.ch" },
  "renovateur-salle-de-bain": { src: "/videos/favre-renovation/01.mp4",   label: "favre-renovation.ch" },
  "paysagiste":               { src: "/videos/girardin-btp/01.mp4",       label: "girardin-btp.ch" },
  "plombier":                 { src: "/videos/girardin-btp/01.mp4",       label: "girardin-btp.ch" },
  "carreleur":                { src: "/videos/martinez-platrerie/01.mp4", label: "martinez-platrerie.ch" },
  "macon":                    { src: "/videos/girardin-btp/01.mp4",       label: "girardin-btp.ch" },
}

type Props = {
  params: { service: string; metier: string; ville: string }
}

export async function generateStaticParams() {
  const params = []
  for (const service of SERVICES) {
    for (const metier of METIERS) {
      for (const ville of VILLES) {
        params.push({ service: service.slug, metier: metier.slug, ville: ville.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.service)
  const metier = getMetier(params.metier)
  const ville = getVille(params.ville)
  if (!service || !metier || !ville) return {}

  const title = `${service.nom} pour ${metier.nom} à ${ville.nom} | Noovira AI`
  const description = `${service.nomCourt} pour ${metier.nomPluriel} à ${ville.nom} — livré en 2 semaines, résultats garantis. Spécialiste artisans bâtiment Suisse romande. Audit gratuit.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://nooviraai.com/${service.slug}/${metier.slug}/${ville.slug}`,
      languages: { "fr-CH": `https://nooviraai.com/${service.slug}/${metier.slug}/${ville.slug}` },
    },
    openGraph: {
      title,
      description,
      url: `https://nooviraai.com/${service.slug}/${metier.slug}/${ville.slug}`,
      images: [{ url: metier.image }],
    },
  }
}

export default function ProgrammaticPage({ params }: Props) {
  const service = getService(params.service)
  const metier = getMetier(params.metier)
  const ville = getVille(params.ville)

  if (!service || !metier || !ville) notFound()

  const villeImage = VILLE_IMAGES[params.ville] ?? metier.image
  const metierVideo = METIER_VIDEOS[params.metier] ?? { src: "/videos/roulin-couverture/01.mp4", label: "noovira-client.ch" }
  const autresServices = SERVICES.filter((s) => s.slug !== service.slug)
  const villesCantonSample = VILLES.filter(
    (v) => v.canton === ville.canton && v.slug !== ville.slug
  ).slice(0, 5)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Noovira AI",
    url: `https://nooviraai.com/${service.slug}/${metier.slug}/${ville.slug}`,
    telephone: "+41 79 000 00 00",
    email: "contact@nooviraai.com",
    description: `Agence web spécialisée pour les ${metier.nomPluriel} à ${ville.nom} — ${service.nom}`,
    areaServed: { "@type": "City", name: ville.nom },
    serviceType: service.nom,
    priceRange: "CHF 3000–8000",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "50" },
  }

  const faqs = [
    {
      q: `Combien coûte ${service.nom.toLowerCase()} pour un ${metier.nom.toLowerCase()} à ${ville.nom} ?`,
      a: `Nos forfaits ${service.nomCourt} pour ${metier.nomPluriel} démarrent à 3'000 CHF. Avec un panier moyen de chantier à ${metier.panier}, le retour sur investissement est atteint dès le 1er ou 2e chantier supplémentaire.`,
    },
    {
      q: `En combien de temps vais-je voir des résultats à ${ville.nom} ?`,
      a: `Pour le SEO local, les premières positions sur Google apparaissent en 4 à 8 semaines. Pour Google Ads, les premières demandes arrivent dès le lancement. ${ville.nom} est encore peu concurrencé — les résultats arrivent vite.`,
    },
    {
      q: `Noovira AI travaille-t-il avec des ${metier.nomPluriel} dans tout le canton ${ville.canton} ?`,
      a: `Oui, on couvre tout le canton ${ville.canton} et la Suisse romande. Indépendants, TPE, entreprises jusqu'à 20 salariés — on s'adapte à votre zone de chalandise autour de ${ville.nom}.`,
    },
    {
      q: `Qu'est-ce qui est inclus dans votre offre ${service.nomCourt} ?`,
      a: service.includes.join(". "),
    },
    {
      q: `Pourquoi choisir Noovira plutôt qu'une agence généraliste à ${ville.nom} ?`,
      a: `Noovira AI est spécialisée exclusivement dans les artisans du bâtiment en Suisse romande. On connaît vos clients, vos mots-clés locaux et vos concurrents à ${ville.nom}. Résultat : on démarre directement sur ce qui fonctionne pour les ${metier.nomPluriel}.`,
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const btnRose = {
    backgroundColor: ROSE,
    color: DARK,
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: "8px",
    fontWeight: "700",
    padding: "16px 32px",
    borderRadius: "9999px",
    textDecoration: "none",
    fontSize: "15px",
  }

  const badgeRose = {
    backgroundColor: ROSE,
    color: DARK,
    fontSize: "11px",
    fontWeight: "700",
    padding: "4px 12px",
    borderRadius: "9999px",
    display: "inline-block" as const,
  }

  const circleBadge = {
    backgroundColor: ROSE,
    color: DARK,
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    fontWeight: "700",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    fontSize: "13px",
    flexShrink: 0,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <Navbar />

        {/* ── HERO ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ROSE }}>
              {service.nomCourt} · {ville.nom} · Canton {ville.canton}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {service.nom} pour{" "}
              <span style={{ color: ROSE }}>{metier.nomPluriel}</span>
              <br />à {ville.nom}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
              Vous perdez {metier.douleur} chaque mois parce que vous êtes invisible
              sur Google à {ville.nom}. Pendant ce temps, vos concurrents récupèrent
              vos clients. Noovira AI change ça — concrètement, rapidement.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              Spécialiste artisans du bâtiment · Suisse romande · Canton {ville.canton}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" style={btnRose}>
                Obtenir mon audit gratuit →
              </a>
              <Link
                href={`/${service.slug}/${metier.slug}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-colors text-sm"
              >
                Voir toutes les villes →
              </Link>
            </div>
          </div>
        </section>

        {/* ── RÉSUMÉ RAPIDE ── */}
        <section className="py-8 px-6" style={{ backgroundColor: ROSE }}>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center" style={{ color: DARK }}>
            <div>
              <p className="text-2xl font-bold">À partir de 3&apos;000 CHF</p>
              <p className="text-sm mt-1 opacity-70">Forfait {service.nomCourt} tout inclus</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Livraison en 2 semaines</p>
              <p className="text-sm mt-1 opacity-70">Garanti contractuellement</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Audit gratuit</p>
              <p className="text-sm mt-1 opacity-70">Avant tout engagement</p>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-gray-100 py-5 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            {[
              "5.0 ★ Google · 50+ avis vérifiés",
              "50+ sites créés pour artisans romands",
              "Livraison garantie en 2 semaines",
              "Spécialiste bâtiment Suisse romande",
              "Résultats ou remboursement",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: ROSE }} />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ── STATS / COÛT DE L'INVISIBILITÉ ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Titre accrocheur */}
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ROSE }}>
                La réalité du marché local
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Pendant que vous lisez ceci,<br />
                <span style={{ color: ROSE }}>un concurrent à {ville.nom} décroche votre prochain client.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Sans présence Google, vous êtes invisible pour 9 clients sur 10 qui cherchent un {metier.nom.toLowerCase()} à {ville.nom} en ce moment même.
              </p>
            </div>

            {/* Layout: vidéo à gauche, stats à droite */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Vidéo dans cadre navigateur */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#2a2a2a]">
                  <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <div className="flex-1 ml-3 bg-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                      roulin-couverture.ch — #1 Google &ldquo;couvreur Lausanne&rdquo;
                    </div>
                  </div>
                  <video
                    src="/videos/roulin-couverture/01.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full object-cover object-top"
                    style={{ height: "clamp(220px, 32vw, 380px)" }}
                  />
                </div>
                {/* Badge flottant */}
                <div className="absolute -bottom-5 -right-4 rounded-2xl px-5 py-3 shadow-xl" style={{ backgroundColor: ROSE }}>
                  <p className="text-xs font-semibold" style={{ color: DARK }}>Client Noovira AI</p>
                  <p className="text-lg font-bold" style={{ color: DARK }}>+3 chantiers/mois</p>
                </div>
              </div>

              {/* Stats percutantes */}
              <div className="space-y-5 md:pl-4">
                {[
                  {
                    val: "9 / 10",
                    label: "clients commencent sur Google",
                    desc: `Quand quelqu'un cherche "${metier.motCle} ${ville.nom}", il appelle le premier résultat. Pas le deuxième. Pas vous, si vous n'êtes pas là.`,
                  },
                  {
                    val: metier.panier + " CHF",
                    label: "chantier perdu chaque semaine",
                    desc: `C'est le panier moyen d'un ${metier.nom.toLowerCase()}. Chaque semaine sans visibilité, c'est ce montant qui part chez un concurrent. Calculez sur un an.`,
                  },
                  {
                    val: "< 30 jours",
                    label: "pour dominer Google à " + ville.nom,
                    desc: `La plupart des ${metier.nomPluriel} à ${ville.nom} n'ont pas de site sérieux. La place de #1 est libre — mais pas pour longtemps.`,
                  },
                ].map((stat) => (
                  <div
                    key={stat.val}
                    className="rounded-2xl p-6 flex items-start gap-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="shrink-0 min-w-[100px]">
                      <div className="text-2xl font-bold" style={{ color: ROSE }}>{stat.val}</div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mt-0.5">{stat.label}</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{stat.desc}</p>
                  </div>
                ))}

                <a
                  href="/contact"
                  style={{ ...btnRose, width: "100%", justifyContent: "center", padding: "18px 32px", fontSize: "16px" }}
                >
                  Obtenir mon audit gratuit →
                </a>
                <p className="text-gray-500 text-xs text-center">100% gratuit · Sans engagement · Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CE QU'ON FAIT ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Vidéo du site client dans cadre navigateur */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#2a2a2a] flex flex-col" style={{ height: "clamp(300px, 42vw, 500px)" }}>
              <div className="bg-[#222] px-4 py-2.5 flex items-center gap-2 border-b border-white/10 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 ml-3 bg-white/10 rounded-full px-3 py-1 text-xs text-gray-400 truncate">
                  {metierVideo.label}
                </div>
              </div>
              <video
                src={metierVideo.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full flex-1 object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ROSE }}>
                Notre spécialité
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {service.nom} pensé pour les {metier.nomPluriel} à {ville.nom}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Une agence généraliste ne comprend pas votre métier. Elle crée un site
                générique, sans les bons mots-clés, sans stratégie locale pour {ville.nom}.
                Résultat : vous dépensez de l&apos;argent pour un site que personne ne trouve.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Noovira AI travaille exclusivement avec des artisans du bâtiment en Suisse
                romande. On connaît la concurrence dans le canton {ville.canton} et ce qui
                convertit un visiteur en demande de devis. Chaque page est optimisée pour
                &ldquo;{metier.motCle} {ville.nom}&rdquo; dès le premier mois.
              </p>
              <a href="/contact" style={btnRose}>
                Démarrer maintenant →
              </a>
            </div>
          </div>
        </section>

        {/* ── CE QUI EST INCLUS ── */}
        <section className="bg-[#F7F4EF] py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: DARK }}>
                Ce qui est inclus
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tout ce qu&apos;un {metier.nom.toLowerCase()} à {ville.nom} reçoit
              </h2>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-bold mt-0.5 shrink-0" style={{ color: DARK }}>✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" style={{ ...btnRose, marginTop: "40px" }}>
                Demander un devis gratuit →
              </a>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={metier.image2}
                alt={metier.image2Alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── EXEMPLES DE SITES RÉALISÉS ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ROSE }}>
                Exemples réels
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Des sites créés pour des artisans comme vous
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
                Chaque site est conçu sur-mesure — aucun template, aucune page générique.
                Résultats vérifiables, artisans réels en Suisse romande.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { videoSrc: "/videos/roulin-couverture/01.mp4", label: "Roulin Couverture", type: "Couverture & Toiture · Lausanne 🇨🇭", slug: "roulin-couverture" },
                { videoSrc: "/videos/favre-renovation/01.mp4",  label: "Favre Rénovation",  type: "Rénovation générale · Genève 🇨🇭",    slug: "favre-renovation" },
                { videoSrc: "/videos/muller-charpente/01.mp4",  label: "Müller Charpente",  type: "Charpente & Bois · Fribourg 🇨🇭",     slug: "muller-charpente" },
              ].map((item) => (
                <PortfolioScrollCard
                  key={item.slug}
                  videoSrc={item.videoSrc}
                  label={item.label}
                  type={item.type}
                  slug={item.slug}
                  cardHeight={500}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/realisations" style={btnRose}>
                Voir toutes nos réalisations →
              </a>
            </div>
          </div>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="bg-[#F7F4EF] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: DARK }}>
                Notre process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                De zéro à des demandes de devis en 30 jours
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                Process éprouvé sur 50+ artisans en Suisse romande. Vous n&apos;avez rien à gérer — on s&apos;occupe de tout.
              </p>
            </div>

            <div className="space-y-16">
              {/* Étape 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl" style={{ height: "clamp(280px, 38vw, 460px)" }}>
                  <Image
                    src="/results/audit-tool.webp"
                    alt={`Audit SEO visibilité Google ${metier.nomPluriel} ${ville.nom}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span style={badgeRose}>Étape 01</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={circleBadge}>01</span>
                    <h3 className="text-xl font-bold text-gray-900">Audit gratuit de votre présence</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    On analyse votre position actuelle sur Google pour &ldquo;{metier.motCle} {ville.nom}&rdquo;.
                    On vous montre exactement combien de demandes vous perdez chaque mois — et pourquoi.
                  </p>
                  <p className="text-gray-500 text-sm">
                    ✓ Audit de votre site actuel &nbsp;·&nbsp; ✓ Analyse concurrents locaux &nbsp;·&nbsp; ✓ Plan d&apos;action personnalisé
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span style={circleBadge}>02</span>
                    <h3 className="text-xl font-bold text-gray-900">Design & contenu sur-mesure</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    On crée votre site avec les mots-clés &ldquo;{metier.motCle} {ville.nom}&rdquo; dans chaque
                    page, titre et balise meta. Design professionnel, aucun template, textes rédigés pour convertir.
                  </p>
                  <p className="text-gray-500 text-sm">
                    ✓ Design 100% sur-mesure &nbsp;·&nbsp; ✓ Textes SEO rédigés &nbsp;·&nbsp; ✓ Mobile first
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl order-1 md:order-2" style={{ height: "clamp(280px, 38vw, 460px)" }}>
                  <video src="/videos/steps/step01.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span style={badgeRose}>Étape 02</span>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl" style={{ height: "clamp(280px, 38vw, 460px)" }}>
                  <video src="/videos/steps/step04.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span style={badgeRose}>Étape 03</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={circleBadge}>03</span>
                    <h3 className="text-xl font-bold text-gray-900">Mise en ligne en 2 semaines</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Votre site est en ligne en 2 semaines ouvrables — garanti contractuellement.
                    On configure Google Business Profile, le suivi des conversions et tous les outils.
                  </p>
                  <p className="text-gray-500 text-sm">
                    ✓ Hébergement inclus &nbsp;·&nbsp; ✓ Google Business configuré &nbsp;·&nbsp; ✓ SSL + analytics
                  </p>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span style={circleBadge}>04</span>
                    <h3 className="text-xl font-bold text-gray-900">Résultats & suivi mensuel</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rapport mensuel avec vos positions sur Google, le trafic et les demandes générées.
                    On optimise en continu pour maximiser vos chantiers à {ville.nom}.
                  </p>
                  <p className="text-gray-500 text-sm">
                    ✓ Rapport positions Google &nbsp;·&nbsp; ✓ Suivi demandes de devis &nbsp;·&nbsp; ✓ Optimisation continue
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl order-1 md:order-2" style={{ height: "clamp(280px, 38vw, 460px)" }}>
                  <Image
                    src="/results/r1.webp"
                    alt="Résultats SEO et trafic Google Analytics artisan"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span style={badgeRose}>Étape 04</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <a href="/contact" style={{ ...btnRose, padding: "20px 40px", fontSize: "18px" }}>
                Démarrer mon audit gratuit →
              </a>
              <p className="text-gray-400 text-xs mt-4">100% gratuit · Sans engagement · Réponse sous 24h</p>
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Vidéo du site du témoignage */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              style={{ height: "clamp(380px, 48vw, 540px)" }}
            >
              <div className="bg-[#2a2a2a] px-4 py-2.5 flex items-center gap-2 border-b border-white/10 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 ml-3 bg-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                  roulin-couverture-srl-lausanne.ch
                </div>
              </div>
              <video
                src="/videos/roulin-couverture/01.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full flex-1 object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ROSE }}>
                Témoignage client
              </p>
              <blockquote className="text-xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{metier.temoignage.texte}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ backgroundColor: ROSE, color: DARK }}
                >
                  {metier.temoignage.nom[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{metier.temoignage.nom}</p>
                  <p className="text-gray-400 text-xs">{metier.temoignage.entreprise}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: ROSE }}>★</span>
                ))}
                <span className="text-gray-400 text-xs ml-2">5.0 · Avis Google vérifié 🇨🇭</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLES LIÉS ── */}
        <section className="bg-[#F7F4EF] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: DARK }}>
                Ressources utiles
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Nos guides pour {metier.nomPluriel} en Suisse romande
              </h2>
              <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
                Conseils pratiques, stratégies digitales et retours d&apos;expérience d&apos;artisans romands.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {metier.relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {article.readTime}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-4 flex-1">
                      {article.title}
                    </h3>
                    <span style={{ ...badgeRose, padding: "8px 16px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      Lire l&apos;article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Autres services */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {autresServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${metier.slug}/${ville.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex items-start gap-4"
                >
                  <span className="text-xl shrink-0">{s.slug === "seo-local" ? "📍" : "📣"}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {s.nom} pour {metier.nomPluriel} à {ville.nom} →
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Villes du canton */}
            {villesCantonSample.length > 0 && (
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-4">
                  {service.nom} pour {metier.nomPluriel} — autres villes du canton {ville.canton}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {villesCantonSample.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/${service.slug}/${metier.slug}/${v.slug}`}
                      className="bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 text-sm text-gray-700 transition-all font-medium"
                    >
                      {v.nom}
                    </Link>
                  ))}
                  <a
                    href={`/${service.slug}/${metier.slug}`}
                    style={{ ...badgeRose, padding: "8px 16px", fontSize: "14px" }}
                  >
                    Toutes les villes →
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: DARK }}>FAQ</p>
              <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
              <p className="text-gray-500 mt-3 text-sm">
                Tout ce que vous devez savoir avant de lancer votre projet à {ville.nom}
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="bg-[#F7F4EF] rounded-2xl p-7">
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-500 text-sm mb-4">Une autre question ? On répond en moins de 24h.</p>
              <a href="/contact" style={btnRose}>
                Nous contacter →
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
        <SeoHub />
        <Footer />
      </main>
    </>
  )
}
