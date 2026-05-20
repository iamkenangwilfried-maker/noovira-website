"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const STATS = [
  { value: "17+", label: "Sites livrés" },
  { value: "5.0", label: "Note moyenne" },
  { value: "48h", label: "Délai de livraison" },
];

export default function Hero() {
  return (
    <section className="section-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-[70px]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C9BAAC 1px, transparent 1px),
            linear-gradient(to bottom, #C9BAAC 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-beige/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-4xl">

          {/* Stars + badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-beige fill-beige" />
              ))}
            </div>
            <span className="text-sm font-medium text-text-light/60">
              5.0 — PMEs suisses de la construction
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-text-light leading-[1.05] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Nous créons des sites qui{" "}
            <span className="text-beige">remplissent</span>
            <br className="hidden sm:block" />
            {" "}votre carnet de chantiers.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-light/60 max-w-2xl leading-relaxed mb-10"
          >
            Agence web spécialisée PMEs suisses de la construction — couvreurs, rénovation,
            charpente. Site livré en 48h, géré pour vous, optimisé pour générer des leads qualifiés.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-beige text-dark px-7 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-beige-light transition-all duration-200"
            >
              Démarrer votre projet
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-white/8 text-text-light border border-white/15 px-7 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/12 transition-all duration-200"
            >
              Voir nos réalisations
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 sm:gap-12"
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading font-bold text-3xl text-beige leading-none tracking-tight">
                  {s.value}
                </span>
                <span className="text-xs font-medium text-text-light/40 mt-1 uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-3xl text-beige leading-none tracking-tight">CH</span>
              <span className="text-xs font-medium text-text-light/40 mt-1 uppercase tracking-widest">Suisse romande</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
