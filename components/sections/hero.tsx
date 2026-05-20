"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero — Sher Agency exact clone:
 * • Dark background, full viewport
 * • Stars + rating + H1 + 2 CTA buttons — centered
 * • BOTTOM: client name TAGS (beige/cream rounded pills) scattered & rotated
 *   → On hover: website screenshot PREVIEW CARD floats above the tag
 * • NO video in the hero (video is HowWeMake section, placed after Portfolio)
 */

function shot(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;
}

// Client tags — exactly like Sher's layout: names at bottom, scattered, rotated
// rotate values from Sher screenshots: various angles -25 to +25
const TAGS = [
  { name: "Roulin Couverture",    url: "b3constructioncorp.com",       rotate: -15, size: 1.0 },
  { name: "Favre Rénovation",     url: "tekconstructiongroup.com",      rotate: 6,   size: 0.9 },
  { name: "Müller Charpente",     url: "qualmax.co.nz",                 rotate: -22, size: 1.1 },
  { name: "Martinez Plâtrerie",   url: "schmittcompany.com",            rotate: 10,  size: 1.0 },
  { name: "Dupont Électricité",   url: "candmhomebuilders.com",         rotate: -8,  size: 0.9 },
  { name: "Rochat Peinture",      url: "cr-design-remodel.webflow.io",  rotate: 18,  size: 1.0 },
  { name: "B3 Construction",      url: "b3constructioncorp.com",        rotate: -5,  size: 1.1 },
  { name: "TEK Group",            url: "tekconstructiongroup.com",      rotate: 14,  size: 0.9 },
  { name: "Schmitt Company",      url: "schmittcompany.com",            rotate: -18, size: 1.0 },
  { name: "Berset Toitures",      url: "5starroofcare.co.uk",           rotate: 7,   size: 1.0 },
  { name: "Girardin BTP",         url: "ironstarconstruction.com",      rotate: -12, size: 0.95},
  { name: "Clune Construction",   url: "clunegc.com",                   rotate: 20,  size: 1.0 },
  { name: "Qualmax",              url: "qualmax.co.nz",                 rotate: -6,  size: 0.9 },
  { name: "Leopardo",             url: "leopardo.com",                  rotate: 11,  size: 1.0 },
  { name: "JDG Constructions",    url: "jdgconstructions.com.au",       rotate: -20, size: 1.0 },
  { name: "5 Star Roof Care",     url: "5starroofcare.co.uk",           rotate: 4,   size: 0.9 },
  { name: "Oasis Builders",       url: "oasisbuildersinc.com",          rotate: -14, size: 1.0 },
  { name: "Skender",              url: "skender.com",                   rotate: 16,  size: 1.1 },
  { name: "Iron Star",            url: "ironstarconstruction.com",      rotate: -9,  size: 0.9 },
  { name: "FH Paschen",           url: "fhpaschen.com",                 rotate: 22,  size: 1.0 },
  { name: "Bechtel",              url: "bechtel.com",                   rotate: -3,  size: 1.0 },
  { name: "B2 Builders",          url: "b2builders.com",                rotate: 13,  size: 0.9 },
];

type Tag = typeof TAGS[0];

function ClientTag({ tag, delay }: { tag: Tag; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block flex-shrink-0"
      style={{ transform: `rotate(${tag.rotate}deg)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview card — appears above on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            style={{ width: "220px" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#1A1A1A]">
              {/* Screenshot */}
              <div className="relative" style={{ height: "130px" }}>
                <img
                  src={shot(tag.url)}
                  alt={tag.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0.1";
                  }}
                />
              </div>
              {/* Name + link */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-text-light text-sm font-bold truncate">{tag.name}</span>
                <ArrowUpRight size={14} className="text-text-light/50 flex-shrink-0 ml-2" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The tag pill itself — beige/cream, rounded rectangle */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay,
          type: "spring",
          stiffness: 80,
          damping: 16,
        }}
        className="cursor-default select-none"
        style={{
          background: "#E8E1D5",
          color: "#1A1A1A",
          borderRadius: "10px",
          padding: `${8 * tag.size}px ${16 * tag.size}px`,
          fontSize: `${12 * tag.size}px`,
          fontWeight: 600,
          whiteSpace: "nowrap",
          lineHeight: 1.3,
        }}
      >
        {tag.name}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* ── Centered content: stars + H1 + CTAs ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 lg:pt-24 pb-12">

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-1.5 mb-8"
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
          className="font-heading font-bold text-text-light tracking-tight leading-[1.05] mb-8 max-w-4xl"
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
            className="inline-flex items-center gap-2 text-text-light/50 px-7 py-3.5 rounded-full font-semibold text-base hover:text-text-light transition-colors"
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>

      {/* ── CLIENT NAME TAGS — bottom of hero, scattered, rotated ── */}
      {/* Outer wrapper clips overflow; inner wrapper is wider than viewport */}
      <div className="relative z-20 w-full overflow-hidden pb-16" style={{ minHeight: "260px" }}>
        {/* Row 1 */}
        <div className="flex flex-wrap gap-3 justify-center px-6 mb-3">
          {TAGS.slice(0, 8).map((tag, i) => (
            <ClientTag key={tag.name + i} tag={tag} delay={0.4 + i * 0.06} />
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex flex-wrap gap-3 justify-center px-10 mb-3">
          {TAGS.slice(8, 16).map((tag, i) => (
            <ClientTag key={tag.name + i} tag={tag} delay={0.6 + i * 0.06} />
          ))}
        </div>
        {/* Row 3 */}
        <div className="flex flex-wrap gap-3 justify-center px-6">
          {TAGS.slice(16).map((tag, i) => (
            <ClientTag key={tag.name + i} tag={tag} delay={0.8 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
