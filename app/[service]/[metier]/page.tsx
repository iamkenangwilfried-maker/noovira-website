import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/sections/navbar"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import SeoHub from "@/components/sections/seo-hub"
import { SERVICES, METIERS, VILLES, getService, getMetier } from "@/lib/seo-data"

type Props = {
  params: { service: string; metier: string }
}

export async function generateStaticParams() {
  const params = []
  for (const service of SERVICES) {
    for (const metier of METIERS) {
      params.push({ service: service.slug, metier: metier.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.service)
  const metier = getMetier(params.metier)
  if (!service || !metier) return {}

  const title = `${service.nom} pour ${metier.nomPluriel} en Suisse romande | Noovira AI`
  const description = `Noovira AI aide les ${metier.nomPluriel} de toute la Suisse romande à obtenir plus de chantiers. Genève, Lausanne, Fribourg, Valais, Neuchâtel — résultats garantis.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://nooviraai.com/${service.slug}/${metier.slug}`,
    },
  }
}

export default function MetierHubPage({ params }: Props) {
  const service = getService(params.service)
  const metier = getMetier(params.metier)
  if (!service || !metier) notFound()

  const cantons = Array.from(new Set(VILLES.map((v) => v.canton))).sort()

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1C1C1C] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-400 text-sm font-medium uppercase tracking-widest mb-4">
            {service.nom} · Suisse romande
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {service.nom} pour{" "}
            <span className="text-rose-400">{metier.nomPluriel}</span>
            <br />en Suisse romande
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Vous perdez {metier.douleur} parce que vous êtes invisible sur Google.
            Noovira AI crée et optimise votre présence en ligne pour que les clients
            de votre secteur vous trouvent — pas vos concurrents.
            Sélectionnez votre ville ci-dessous.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Obtenir mon audit gratuit →
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                {VILLES.length} villes
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                30 jours
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                Audit gratuit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Villes par canton */}
      <section className="bg-[#F7F4EF] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Sélectionnez votre ville
          </h2>
          <div className="space-y-10">
            {cantons.map((canton) => {
              const villesCanton = VILLES.filter((v) => v.canton === canton)
              return (
                <div key={canton}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                    Canton {canton}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {villesCanton.map((ville) => (
                      <Link
                        key={ville.slug}
                        href={`/${service.slug}/${metier.slug}/${ville.slug}`}
                        className="bg-white hover:bg-rose-500 border border-gray-200 hover:border-rose-500 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 hover:text-white transition-all text-center group"
                      >
                        {ville.nom}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image + preuve */}
      <section className="bg-[#1C1C1C] py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={metier.image}
              alt={metier.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Pourquoi les {metier.nomPluriel.toLowerCase()} nous font confiance
            </h2>
            <ul className="space-y-4 text-gray-300 text-sm">
              {[
                `On parle votre langage — chantiers, devis, clients locaux`,
                `Nos pages sont optimisées pour "${metier.motCle} [votre ville]" dès le premier mois`,
                `Roulin Couverture, Berset Toitures, Favre Rénovation — des artisans romands qui en témoignent`,
                `Audit gratuit pour voir où vous en êtes avant tout engagement`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-rose-400 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Obtenir mon audit gratuit
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <SeoHub />
      <Footer />
    </main>
  )
}
