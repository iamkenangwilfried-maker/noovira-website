"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SingleReview() {
  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote size={40} className="text-beige mx-auto mb-8 opacity-60" />

          <blockquote
            className="font-heading font-bold text-text-light leading-[1.15] tracking-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
          >
            "Depuis que Noovira a refait notre site, on reçoit{" "}
            <span className="text-beige">3 à 4 demandes de devis par semaine</span>{" "}
            sans rien faire de plus. Ça parle tout seul."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-beige/20 flex items-center justify-center text-xl font-bold text-beige">
              M
            </div>
            <div className="text-left">
              <div className="font-semibold text-text-light text-sm">Marc-Antoine Roulin</div>
              <div className="text-text-light/40 text-xs">Roulin Couverture Sàrl — Lausanne, VD</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
