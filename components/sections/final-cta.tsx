"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Final CTA — exact Sher Agency "Reimagine Your Website With Us." layout:
 * • Dark background, fully centered
 * • Very large heading (font-heading, light/regular weight)
 * • Single outlined pill CTA button below
 * • Nothing else — extremely minimal
 */

export default function FinalCTA() {
  return (
    <section className="section-dark py-24 lg:py-40 text-center" id="contact">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-heading text-text-light leading-[1.05] tracking-tight mb-12"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Réinventez Votre<br />
            Site Avec Nous.
          </h2>

          <a
            href="https://link.nooviraai.com/widget/bookings/45min-nooviraai-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose text-dark px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-dark transition-all"
          >
            Réserver un appel gratuit <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
