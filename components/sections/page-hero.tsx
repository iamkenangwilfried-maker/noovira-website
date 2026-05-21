"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * PageHero — héro simple pour les pages de service (Sher exact /webdesign style):
 * • Dark background, centré
 * • Grand titre (ligne 1 normal + ligne 2 bold/black)
 * • Bouton pill outlined
 */

interface PageHeroProps {
  line1: string;
  line2: string;
  cta?: string;
  ctaHref?: string;
}

export default function PageHero({
  line1,
  line2,
  cta = "Réserver un appel",
  ctaHref = "#contact",
}: PageHeroProps) {
  return (
    <section className="section-dark pt-28 pb-20 lg:pt-40 lg:pb-28 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="font-heading text-text-light leading-[1.05] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {line1}{" "}
            <span className="font-black">{line2}</span>
          </h1>

          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-rose text-dark px-7 py-4 rounded-full font-bold text-base hover:bg-white hover:text-dark transition-all"
          >
            {cta} <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
