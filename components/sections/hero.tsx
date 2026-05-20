"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

/**
 * Hero — Sher Agency exact clone:
 * • Dark background, full-screen
 * • Floating WEBSITE SCREENSHOT CARDS that FALL from above on page load
 *   → on hover, the card scales up = preview of the website
 * • Centered: stars, H1, two CTAs
 * • Large 16:9 video thumbnail at bottom (click to play)
 */

const VIDEO_ID = "hn1SIFFnDBY";

// mshots thumbnail helper (same as Portfolio)
const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=400&h=266`;

// Website screenshot cards scattered across the hero background
const CARDS = [
  { url: "b3constructioncorp.com",       rotate: -5,   x: "3%",   y: "18%" },
  { url: "tekconstructiongroup.com",      rotate: 10,   x: "20%",  y: "10%" },
  { url: "cr-design-remodel.webflow.io", rotate: -14,  x: "38%",  y: "6%"  },
  { url: "candmhomebuilders.com",         rotate: 7,    x: "57%",  y: "12%" },
  { url: "schmittcompany.com",            rotate: -9,   x: "74%",  y: "7%"  },
  { url: "qualmax.co.nz",                 rotate: 18,   x: "88%",  y: "18%" },
  { url: "42parallelconstruction.com",    rotate: -16,  x: "8%",   y: "60%" },
  { url: "b2builders.com",               rotate: 6,    x: "83%",  y: "58%" },
  { url: "ironstarconstruction.com",      rotate: -8,   x: "92%",  y: "38%" },
  { url: "skender.com",                   rotate: 14,   x: "1%",   y: "40%" },
  { url: "leopardo.com",                  rotate: -20,  x: "27%",  y: "70%" },
  { url: "clunegc.com",                   rotate: 5,    x: "68%",  y: "72%" },
  { url: "fhpaschen.com",                 rotate: -11,  x: "13%",  y: "78%" },
  { url: "jdgconstructions.com.au",       rotate: 15,   x: "50%",  y: "76%" },
  { url: "5starroofcare.co.uk",           rotate: -22,  x: "88%",  y: "80%" },
  { url: "bechtel.com",                   rotate: 8,    x: "32%",  y: "82%" },
  { url: "oasisbuildersinc.com",          rotate: -6,   x: "63%",  y: "56%" },
];

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="section-dark relative overflow-hidden pb-16 lg:pb-24"
      style={{ minHeight: "100vh", paddingTop: "72px" }}
    >
      {/* ── WEBSITE SCREENSHOT CARDS — fall from above on load, scale on hover ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden>
        {CARDS.map((card, i) => (
          <motion.div
            key={card.url}
            initial={{ opacity: 0, y: -160 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.4 + i * 0.07,
              type: "spring",
              stiffness: 55,
              damping: 14,
            }}
            whileHover={{ scale: 2.2, zIndex: 60 }}
            style={{
              position: "absolute",
              left: card.x,
              top: card.y,
              rotate: `${card.rotate}deg`,
              pointerEvents: "auto",
              cursor: "pointer",
              transformOrigin: "center center",
            }}
          >
            {/* Mini screenshot card */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#222]"
              style={{ width: "112px", height: "76px" }}
            >
              <img
                src={shot(card.url)}
                alt=""
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0.12";
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Centered content ── */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-12 lg:pt-20"
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
          className="flex flex-col sm:flex-row gap-3 mb-14 lg:mb-20"
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

        {/* ── VIDEO THUMBNAIL — full-width at bottom of hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-5xl rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
              title="Comment Noovira crée vos sites"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full group"
              aria-label="Voir comment nous travaillons"
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Comment Noovira crée des sites web pour artisans"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/35 transition-colors" />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="text-text-light/80 text-sm font-bold uppercase tracking-widest">
                  Comment nous créons des sites qui génèrent des leads.
                </p>
              </div>
              {/* Play button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={24} className="text-dark fill-dark ml-1" />
              </div>
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
