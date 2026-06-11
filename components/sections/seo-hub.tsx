import Link from "next/link"
import { METIERS, VILLES, SERVICES } from "@/lib/seo-data"

const VILLES_TOP = ["geneve", "lausanne", "fribourg", "neuchatel"]

export default function SeoHub() {
  const villesTop = VILLES.filter((v) => VILLES_TOP.includes(v.slug))

  return (
    <section className="bg-[#1C1C1C] py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-rose-400 text-xs font-medium uppercase tracking-widest mb-3">
            Couverture Suisse romande
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Nos services par métier &amp; ville
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Création de site, SEO local et Google Ads — pour chaque métier du bâtiment, dans 52 villes romandes.
          </p>
        </div>

        {/* 3 colonnes — une par service */}
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {SERVICES.map((service) => (
            <div key={service.slug} className="pt-8 md:pt-0 md:pl-8 first:pl-0">
              {/* Service header — bien visible */}
              <div className="mb-6 pb-4 border-b border-rose-500/30">
                <span className="inline-block bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                  Service
                </span>
                <h3 className="text-white text-lg font-bold leading-tight">
                  {service.nom}
                </h3>
              </div>
              <div className="space-y-5">
                {METIERS.map((metier) => (
                  <div key={metier.slug}>
                    <p className="text-gray-300 text-sm font-semibold mb-1.5">{metier.nomPluriel}</p>
                    <ul className="space-y-1">
                      {villesTop.map((ville) => (
                        <li key={ville.slug}>
                          <Link
                            href={`/${service.slug}/${metier.slug}/${ville.slug}`}
                            className="text-gray-500 hover:text-rose-400 text-xs transition-colors flex items-center gap-1.5"
                          >
                            <span className="text-rose-400/40">·</span>
                            {ville.nom}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={`/${service.slug}/${metier.slug}`}
                          className="text-rose-400/70 hover:text-rose-300 text-xs transition-colors font-medium"
                        >
                          → Toutes les villes
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
