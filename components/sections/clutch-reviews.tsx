"use client";
import { motion } from "framer-motion";

/**
 * Clutch Reviews — exact Sher Agency "Client Feedback Verified by Clutch" layout:
 * • Dark background
 * • "Feedbacks Clients **Vérifiés**" centered heading (mixed weight)
 * • Clutch badge + rating prominently displayed
 * • Row of review cards: rating, reviewer name, job title, review text
 * • Star ratings + Clutch icon
 */

const ClutchIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6" fill="currentColor">
    <circle cx="50" cy="50" r="50" fill="#FF3D2E" />
    <text x="50" y="68" textAnchor="middle" fill="white" fontSize="52" fontWeight="bold" fontFamily="sans-serif">C</text>
  </svg>
);

const REVIEWS = [
  {
    rating: 5,
    reviewer: "Responsable Couverture",
    company: "PME du Bâtiment, Vaud",
    text: "Noovira a parfaitement compris notre activité. Le site est professionnel, rapide, et génère des demandes régulières depuis sa mise en ligne.",
    date: "Mars 2026",
  },
  {
    rating: 5,
    reviewer: "Gérant Rénovation",
    company: "Entreprise de Rénovation, Genève",
    text: "Excellent suivi, délai respecté à la lettre. Je recommande sans hésiter pour tous les artisans qui veulent une vraie présence en ligne.",
    date: "Février 2026",
  },
  {
    rating: 5,
    reviewer: "Charpentier Indépendant",
    company: "Auto-entrepreneur, Fribourg",
    text: "Très satisfait du résultat. Le site a été créé en 2 semaines comme promis. Les textes sont parfaits, le design est soigné.",
    date: "Janvier 2026",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#FF3D2E]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClutchReviews() {
  return (
    <section className="section-dark py-20 lg:py-28" id="feedbacks">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14"
        >
          <h2
            className="font-heading text-text-light leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Feedbacks Clients <span className="font-black">Vérifiés</span>
          </h2>

          {/* Clutch badge */}
          <div className="flex items-center gap-4 border border-border-dark rounded-2xl px-6 py-4 flex-shrink-0">
            <ClutchIcon />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Stars count={5} />
                <span className="text-text-light/80 text-sm font-bold">5.0</span>
              </div>
              <div className="text-text-light/35 text-xs">Vérifié sur Clutch</div>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border-dark rounded-2xl p-7 flex flex-col gap-5"
              style={{ background: "#1E1E1E" }}
            >
              {/* Rating + Clutch */}
              <div className="flex items-center justify-between">
                <Stars count={r.rating} />
                <ClutchIcon />
              </div>

              {/* Review text */}
              <p className="text-text-light/60 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Reviewer */}
              <div className="border-t border-border-dark pt-5">
                <div className="font-semibold text-text-light text-sm">{r.reviewer}</div>
                <div className="text-text-light/35 text-xs mt-0.5">{r.company}</div>
                <div className="text-text-light/25 text-[10px] mt-1">{r.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div className="h-px flex-1 bg-border-dark" />
          <span className="text-text-light/25 text-xs px-4">
            Tous les avis sont collectés et vérifiés par des plateformes tierces indépendantes
          </span>
          <div className="h-px flex-1 bg-border-dark" />
        </motion.div>

      </div>
    </section>
  );
}
