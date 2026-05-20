"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

// All 17 portfolio sites split across 3 columns
const COL1 = [
  "b3constructioncorp.com",
  "cr-design-remodel.webflow.io",
  "schmittcompany.com",
  "42parallelconstruction.com",
  "ironstarconstruction.com",
  "leopardo.com",
];
const COL2 = [
  "tekconstructiongroup.com",
  "candmhomebuilders.com",
  "qualmax.co.nz",
  "b2builders.com",
  "skender.com",
  "clunegc.com",
];
const COL3 = [
  "fhpaschen.com",
  "jdgconstructions.com.au",
  "5starroofcare.co.uk",
  "bechtel.com",
  "oasisbuildersinc.com",
];

function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=640&h=400`;
}

function ScrollCol({
  sites,
  direction,
  duration,
  delay = "0s",
}: {
  sites: string[];
  direction: "up" | "down";
  duration: string;
  delay?: string;
}) {
  // Double the list so the seamless loop works (translateY -50% brings it back to start)
  const doubled = [...sites, ...sites];
  return (
    <div className="flex-1 overflow-hidden">
      <div
        style={{
          animation: `scroll-col-${direction} ${duration} linear infinite`,
          animationDelay: delay,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          willChange: "transform",
        }}
      >
        {doubled.map((url, i) => (
          <div
            key={`${url}-${i}`}
            className="rounded-xl overflow-hidden flex-shrink-0 bg-dark-alt border border-white/[0.06]"
            style={{ height: "160px" }}
          >
            <img
              src={thumb(url)}
              alt=""
              className="w-full h-full object-cover object-top"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { value: "17+", label: "Sites livrés" },
  { value: "5.0 ★", label: "Note Google" },
  { value: "48h", label: "Délai garanti" },
];

export default function Hero() {
  return (
    <section className="section-dark relative min-h-screen overflow-hidden" style={{ paddingTop: "72px" }}>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C9BAAC 1px, transparent 1px), linear-gradient(to bottom, #C9BAAC 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-0" style={{ minHeight: "calc(100vh - 72px)" }}>

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-14">

            {/* Stars + badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="text-beige fill-beige" />
                ))}
              </div>
              <span className="text-sm font-semibold text-text-light/50">
                5.0 · 175+ avis clients
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-text-light leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
            >
              Nous créons des sites
              <br />
              qui{" "}
              <span className="text-beige">remplissent</span>
              <br />
              votre carnet.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-light/50 text-lg leading-relaxed mb-10 max-w-md"
            >
              Agence web spécialisée artisans & PMEs du bâtiment. Design sur-mesure livré en 48h, géré pour vous, optimisé pour générer des leads qualifiés.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-beige text-dark px-7 py-4 rounded-full font-bold text-base hover:bg-beige-light transition-all duration-200"
              >
                Réserver un appel gratuit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-text-light/70 px-7 py-4 rounded-full font-semibold text-base hover:border-beige/40 hover:text-text-light transition-all duration-200"
              >
                Voir nos réalisations
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl text-beige leading-none">
                    {s.value}
                  </span>
                  <span className="text-[11px] text-text-light/30 uppercase tracking-widest mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Scrolling website columns ── */}
          <div className="relative hidden lg:flex items-stretch overflow-hidden py-0">

            {/* Top gradient mask */}
            <div
              className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: "180px",
                background: "linear-gradient(to bottom, #1C1C1C 0%, transparent 100%)",
              }}
            />

            {/* Bottom gradient mask */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: "180px",
                background: "linear-gradient(to top, #1C1C1C 0%, transparent 100%)",
              }}
            />

            {/* Left edge fade */}
            <div
              className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: "40px",
                background: "linear-gradient(to right, #1C1C1C 0%, transparent 100%)",
              }}
            />

            {/* 3 scrolling columns */}
            <div className="flex gap-3 w-full px-4">
              <ScrollCol sites={COL1} direction="up"   duration="34s" />
              <ScrollCol sites={COL2} direction="down" duration="28s" delay="-5s" />
              <ScrollCol sites={COL3} direction="up"   duration="42s" delay="-12s" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "80px",
          background: "linear-gradient(to top, #1C1C1C 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
