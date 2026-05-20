"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero — exact clone of Sher Agency:
 * • Dark background, full-screen, centered text
 * • Stars + rating centered
 * • H1 centered, large
 * • Two centered CTA buttons
 * • Floating scattered company name tags (the tag-canvas effect)
 */

const TAGS = [
  { label: "B3 Construction Corp",     rotate: -4,   x: "8%",   y: "58%" },
  { label: "TEK Construction Group",   rotate: 12,   x: "24%",  y: "72%" },
  { label: "CR Design & Remodel",      rotate: -18,  x: "43%",  y: "82%" },
  { label: "C&M Home Builders",        rotate: 6,    x: "62%",  y: "68%" },
  { label: "Schmitt Company",          rotate: -8,   x: "76%",  y: "78%" },
  { label: "Qualmax",                  rotate: 22,   x: "88%",  y: "60%" },
  { label: "42 Parallel Construction", rotate: -14,  x: "14%",  y: "88%" },
  { label: "B2 Builders",              rotate: 8,    x: "55%",  y: "90%" },
  { label: "Iron Star Construction",   rotate: -6,   x: "70%",  y: "86%" },
  { label: "Skender",                  rotate: 16,   x: "3%",   y: "74%" },
  { label: "Leopardo",                 rotate: -20,  x: "36%",  y: "66%" },
  { label: "Clune Construction",       rotate: 4,    x: "82%",  y: "72%" },
  { label: "FH Paschen",              rotate: -10,  x: "20%",  y: "62%" },
  { label: "JDG Constructions",        rotate: 14,   x: "48%",  y: "74%" },
  { label: "5 Star Roof Care",         rotate: -24,  x: "91%",  y: "84%" },
  { label: "Bechtel",                  rotate: 6,    x: "30%",  y: "80%" },
  { label: "Oasis Builders",           rotate: -12,  x: "66%",  y: "58%" },
  // Extras to fill the canvas
  { label: "Roulin Couverture",        rotate: 10,   x: "5%",   y: "64%" },
  { label: "Favre Rénovation",         rotate: -16,  x: "78%",  y: "90%" },
  { label: "Müller Charpente",         rotate: 8,    x: "40%",  y: "94%" },
];

export default function Hero() {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "72px" }}
    >
      {/* ── Tag cloud — scattered company name pills ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {TAGS.map((tag, i) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.06 }}
            style={{
              position: "absolute",
              left: tag.x,
              top: tag.y,
              transform: `rotate(${tag.rotate}deg)`,
            }}
          >
            <span
              className="inline-block bg-text-light text-dark text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm"
              style={{ fontSize: "12px" }}
            >
              {tag.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "calc(100vh - 72px)", paddingBottom: "200px" }}
      >

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-text-light/50 font-medium">5.0 · Plus de 175+ avis clients</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-text-light tracking-tight leading-[1.05] mb-8 max-w-3xl"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Nous créons des sites qui{" "}
          <span className="font-black">Remplissent votre Carnet.</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/25 text-text-light px-7 py-3.5 rounded-full font-semibold text-base hover:border-white/60 hover:text-white transition-all"
          >
            Réserver un appel <ArrowUpRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-text-light/60 px-7 py-3.5 rounded-full font-semibold text-base hover:text-text-light transition-colors"
          >
            Voir nos réalisations
          </a>
        </motion.div>

      </div>
    </section>
  );
}
