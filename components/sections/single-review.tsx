"use client";
import { motion } from "framer-motion";

/**
 * Single Review — exact Sher Agency layout:
 * • WHITE background, centered
 * • Stars centered
 * • Name + company
 * • Large bold centered quote
 * • "See Full Review" pill button (outline)
 */

export default function SingleReview() {
  return (
    <section className="section-white pt-20 pb-8 lg:pt-28 lg:pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          {/* Name + company */}
          <p className="text-muted text-sm font-medium mb-6">
            Marc-Antoine Roulin, Roulin Couverture Sàrl
          </p>

          {/* Quote */}
          <blockquote
            className="font-heading font-light text-dark leading-[1.1] tracking-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            "Depuis que Noovira a refait notre site, on reçoit{" "}
            <span className="font-black">3 à 4 demandes de devis par semaine</span>{" "}
            sans rien faire de plus."
          </blockquote>

          {/* CTA */}
          <a
            href="#avis"
            className="inline-flex items-center gap-2 border border-border text-dark px-6 py-3 rounded-full font-semibold text-sm hover:border-dark transition-colors"
          >
            Voir l'avis complet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
