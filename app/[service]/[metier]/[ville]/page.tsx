import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/sections/navbar"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import SeoHub from "@/components/sections/seo-hub"
import {
  SERVICES,
  METIERS,
  VILLES,
  getService,
  getMetier,
  getVille,
  VILLE_IMAGES,
} from "@/lib/seo-data"

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
  // ≤150 chars
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <Navbar />

        {/* ── HERO ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-4">
              {service.nomCourt} · {ville.nom} · Canton {ville.canton}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {service.nom} pour{" "}
              <span className="text-rose-400">{metier.nomPluriel}</span>
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-rose-500/30"
              >
                Obtenir mon audit gratuit →
              </Link>
              <Link
                href={`/${service.slug}/${metier.slug}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-colors text-sm"
              >
                Voir toutes les villes →
              </Link>
            </div>
          </div>
        </section>

        {/* ── RÉSUMÉ RAPIDE (Helpful content) ── */}
        <section className="bg-rose-500 py-8 px-6">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-white text-center">
            <div>
              <p className="text-2xl font-bold">À partir de 3'000 CHF</p>
              <p className="text-rose-100 text-sm mt-1">Forfait {service.nomCourt} tout inclus</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Livraison en 2 semaines</p>
              <p className="text-rose-100 text-sm mt-1">Garanti contractuellement</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Audit gratuit</p>
              <p className="text-rose-100 text-sm mt-1">Avant tout engagement</p>
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
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ── STATS / COÛT DE L'INVISIBILITÉ ── */}
        <section className="bg-[#F7F4EF] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mb-3">Opportunité locale</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce que votre invisibilité vous coûte à {ville.nom}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chaque jour sans visibilité sur Google, c&apos;est un chantier que votre
                concurrent décroche à votre place.
              </p>
            </div>

            {/* Layout: vidéo à gauche, stats à droite */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Vidéo site créé — grand format avec cadre navigateur */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  {/* Barre navigateur décorative */}
                  <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="flex-1 ml-3 bg-white rounded-full px-3 py-1 text-xs text-gray-400">
                      roulin-couverture.ch
                    </div>
                  </div>
                  <video
                    src="/videos/roulin-couverture/01.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
                {/* Badge flottant */}
                <div className="absolute -bottom-4 -right-4 bg-rose-500 text-white rounded-2xl px-5 py-3 shadow-lg shadow-rose-500/30">
                  <p className="text-xs font-semibold">Site livré en</p>
                  <p className="text-xl font-bold">2 semaines</p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="text-4xl font-bold text-rose-500">30%</div>
                    <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider">des clics</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">vont au 1er résultat Google</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Si ce n&apos;est pas vous sur &ldquo;{metier.motCle} {ville.nom}&rdquo;,
                      c&apos;est votre concurrent qui reçoit ces appels.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="text-4xl font-bold text-rose-500">{metier.panier}</div>
                    <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider">CHF / chantier</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">panier moyen d&apos;un {metier.nom.toLowerCase()}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      2 chantiers en plus par mois à {ville.nom} et votre investissement est rentabilisé.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="text-4xl font-bold text-rose-500">0</div>
                    <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider">concurrent sérieux</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ne domine encore ces recherches</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      La fenêtre d&apos;opportunité sur &ldquo;{metier.motCle} {ville.nom}&rdquo; est ouverte — pas indéfiniment.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-rose-500/30 w-full justify-center"
                >
                  Obtenir mon audit gratuit →
                </Link>
                <p className="text-gray-400 text-xs text-center">100% gratuit · Sans engagement · Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CE QU'ON FAIT / IMAGE + TEXTE ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src={metier.image}
                alt={metier.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg shadow-rose-500/30"
              >
                Démarrer maintenant →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CE QUI EST INCLUS ── */}
        <section className="bg-[#F7F4EF] py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Ce qui est inclus
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tout ce qu&apos;un {metier.nom.toLowerCase()} à {ville.nom} reçoit
              </h2>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-rose-500/30"
              >
                Demander un devis gratuit →
              </Link>
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

        {/* ── EXEMPLES DE SITES RÉALISÉS (vidéos) ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
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
                { video: "/videos/roulin-couverture/01.mp4", poster: "/sites/site1.webp", label: "Roulin Couverture", type: "Couverture & Toiture · Lausanne 🇨🇭", slug: "roulin-couverture" },
                { video: "/videos/favre-renovation/01.mp4", poster: "/sites/site2.webp", label: "Favre Rénovation", type: "Rénovation générale · Genève 🇨🇭", slug: "favre-renovation" },
                { video: "/videos/muller-charpente/01.mp4", poster: "/sites/site3.webp", label: "Müller Charpente", type: "Charpente & Bois · Fribourg 🇨🇭", slug: "muller-charpente" },
              ].map((item) => (
                <div
                  key={item.slug}
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-rose-400 transition-all flex flex-col"
                >
                  <div className="relative overflow-hidden bg-black flex-shrink-0" style={{ height: "560px" }}>
                    <video
                      src={item.video}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-rose-400 uppercase tracking-wide font-semibold mb-0.5">{item.type}</p>
                      <p className="text-white font-bold text-lg">{item.label}</p>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex items-center justify-center">
                    <Link
                      href={`/realisations/${item.slug}`}
                      style={{ backgroundColor: "#f43f5e" }}
                      className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm w-full justify-center hover:opacity-90 transition-opacity"
                    >
                      Voir le projet →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/realisations"
                style={{ backgroundColor: "#f43f5e" }}
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Voir toutes nos réalisations →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROCESSUS (redesign avec vidéos) ── */}
        <section className="bg-[#F7F4EF] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mb-3">
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
                <div className="relative rounded-2xl overflow-hidden bg-black h-64 shadow-xl">
                  <Image
                    src={villeImage}
                    alt={`Audit visibilité Google ${metier.nomPluriel} ${ville.nom}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4" style={{ backgroundColor: "#f43f5e" }}>
                    <span className="text-white text-xs font-bold px-3 py-1 rounded-full inline-block">Étape 01</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-xs font-medium">📍 {ville.nom} · Canton {ville.canton}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-sm shrink-0">01</span>
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
                    <span className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-sm shrink-0">02</span>
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
                <div className="relative rounded-2xl overflow-hidden bg-black h-64 shadow-xl order-1 md:order-2">
                  <Image
                    src={metier.image}
                    alt={metier.imageAlt}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Étape 02
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden bg-black h-64 shadow-xl">
                  <video src="/videos/steps/step04.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Étape 03
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-sm shrink-0">03</span>
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
                    <span className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-sm shrink-0">04</span>
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
                <div className="relative rounded-2xl overflow-hidden bg-black h-64 shadow-xl order-1 md:order-2">
                  <video src="/videos/steps/step05.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Étape 04
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-10 py-5 rounded-full transition-colors shadow-lg shadow-rose-500/30 text-lg"
              >
                Démarrer mon audit gratuit →
              </Link>
              <p className="text-gray-400 text-xs mt-4">100% gratuit · Sans engagement · Réponse sous 24h</p>
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE ── */}
        <section className="bg-[#1C1C1C] py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={villeImage}
                alt={`${ville.nom}, canton ${ville.canton}, Suisse — ${metier.nom} Noovira AI`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-rose-400 text-xs">🇨🇭</span>
                  <p className="text-white text-sm font-bold">{ville.nom} · Canton {ville.canton} · Suisse</p>
                </div>
                <p className="text-gray-300 text-xs">Marché artisanal en forte croissance en Suisse romande</p>
              </div>
            </div>
            <div>
              <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Témoignage client
              </p>
              <blockquote className="text-xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{metier.temoignage.texte}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {metier.temoignage.nom[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{metier.temoignage.nom}</p>
                  <p className="text-gray-400 text-xs">{metier.temoignage.entreprise}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-rose-400">★</span>
                ))}
                <span className="text-gray-400 text-xs ml-2">5.0 · Avis Google vérifié</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIENS INTERNES ── */}
        <section className="bg-[#F7F4EF] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nos autres services pour les {metier.nomPluriel} à {ville.nom}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {autresServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${metier.slug}/${ville.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-rose-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 text-lg">
                      {s.slug === "seo-local" ? "📍" : "📣"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors mb-1">
                        {s.nom} pour {metier.nomPluriel} à {ville.nom} →
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {villesCantonSample.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {service.nom} pour {metier.nomPluriel} — autres villes du canton {ville.canton}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {villesCantonSample.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/${service.slug}/${metier.slug}/${v.slug}`}
                      className="bg-white border border-gray-200 hover:border-rose-400 hover:text-rose-600 rounded-full px-5 py-2 text-sm text-gray-700 transition-all font-medium"
                    >
                      {v.nom} →
                    </Link>
                  ))}
                  <Link
                    href={`/${service.slug}/${metier.slug}`}
                    className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-5 py-2 text-sm font-semibold transition-all"
                  >
                    Toutes les villes →
                  </Link>
                </div>
              </>
            )}

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Article recommandé</p>
              <Link href={`/blog/${metier.blogSlug}`} className="flex items-center gap-3 group">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="text-gray-900 font-medium group-hover:text-rose-600 transition-colors text-sm">
                    {metier.blogTitle}
                  </p>
                  <p className="text-rose-500 text-xs font-medium mt-0.5">Lire l&apos;article →</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Nous contacter →
              </Link>
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
