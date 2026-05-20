"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * SEO & Publicité — page content (Sher /search-engine-marketing style):
 * • Hero centré
 * • Deux services : SEO Organique + Google Ads
 * • Résultats / preuve sociale
 */

const SEO_FEATURES = [
  "Audit SEO complet de votre site",
  "Optimisation des mots-clés locaux (canton, ville, métier)",
  "Fiche Google Business optimisée et maintenue",
  "Netlinking local et citations d'annuaires",
  "Rapport mensuel de positionnement",
  "Suivi des positions sur les recherches cibles",
];

const ADS_FEATURES = [
  "Campagnes Google Ads ciblées par zone géographique",
  "Annonces pour les recherches à forte intention d'achat",
  "Budget optimisé pour maximiser le coût par lead",
  "Landing pages dédiées à la conversion",
  "Rapport mensuel : clics, impressions, conversions",
  "A/B tests continus pour améliorer les résultats",
];

export default function SeoContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-dark pt-28 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              SEO Local & Google Ads{" "}
              <span className="font-black">pour Artisans.</span>
            </h1>

            <p className="text-text-light/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Attirez des clients qui cherchent exactement vos services dans votre région — via Google Search et Google Maps.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-beige text-white px-7 py-4 rounded-full font-bold text-base hover:bg-white hover:text-dark transition-all"
            >
              Réserver un appel <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Two services ── */}
      <section className="section-dark py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* SEO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-border-dark rounded-3xl p-8 lg:p-10"
              style={{ background: "#1E1E1E" }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-beige/60 mb-4">Service 01</div>
              <h2
                className="font-heading font-bold text-text-light leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Référencement Organique (SEO)
              </h2>
              <p className="text-text-light/50 text-sm leading-relaxed mb-8">
                Positionnez votre entreprise en première page Google pour les recherches locales qui comptent : "couvreur Lausanne", "rénovation Genève", "charpentier Fribourg"…
              </p>
              <ul className="space-y-3">
                {SEO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-light/60">
                    <span className="text-beige font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-beige text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-dark transition-colors">
                En savoir plus <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Google Ads */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-border-dark rounded-3xl p-8 lg:p-10"
              style={{ background: "#1E1E1E" }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-beige/60 mb-4">Service 02</div>
              <h2
                className="font-heading font-bold text-text-light leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Publicité Google Ads (PPC)
              </h2>
              <p className="text-text-light/50 text-sm leading-relaxed mb-8">
                Apparaissez immédiatement en tête de Google pour les recherches à forte intention. Payez uniquement quand un client potentiel clique sur votre annonce.
              </p>
              <ul className="space-y-3">
                {ADS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-light/60">
                    <span className="text-beige font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-beige text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-dark transition-colors">
                En savoir plus <ArrowUpRight size={14} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Results bar ── */}
      <section className="section-dark py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "+300%",   label: "Trafic organique moyen" },
              { val: "#1",      label: "Position locale atteinte" },
              { val: "×3",      label: "Leads générés vs avant" },
              { val: "< 30j",   label: "Premiers résultats visibles" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="font-heading font-black text-beige text-4xl mb-2">{s.val}</div>
                <div className="text-text-light/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
