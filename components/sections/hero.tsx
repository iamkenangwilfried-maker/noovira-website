"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

/**
 * Hero — Sher Agency homepage structure:
 * • Dark background, full-screen
 * • Stars + rating centered
 * • H1 centered, large
 * • Two CTA buttons
 * • Floating scattered company name tags
 * • Video thumbnail embedded at bottom of hero (clickable, plays inline)
 */

const VIDEO_ID = "hn1SIFFnDBY";

const TAGS = [
  { label: "B3 Construction Corp",     rotate: -4,   x: "8%",   y: "42%" },
  { label: "TEK Construction Group",   rotate: 12,   x: "24%",  y: "54%" },
  { label: "CR Design & Remodel",      rotate: -18,  x: "2%",   y: "62%" },
  { label: "C&M Home Builders",        rotate: 6,    x: "76%",  y: "50%" },
  { label: "Schmitt Company",          rotate: -8,   x: "86%",  y: "42%" },
  { label: "Qualmax",                  rotate: 22,   x: "90%",  y: "58%" },
  { label: "42 Parallel Construction", rotate: -14,  x: "4%",   y: "72%" },
  { label: "B2 Builders",              rotate: 8,    x: "80%",  y: "68%" },
  { label: "Iron Star Construction",   rotate: -6,   x: "68%",  y: "76%" },
  { label: "Skender",                  rotate: 16,   x: "3%",   y: "82%" },
  { label: "Leopardo",                 rotate: -20,  x: "22%",  y: "66%" },
  { label: "Clune Construction",       rotate: 4,    x: "84%",  y: "80%" },
  { label: "FH Paschen",               rotate: -10,  x: "16%",  y: "76%" },
  { label: "JDG Constructions",        rotate: 14,   x: "46%",  y: "46%" },
  { label: "5 Star Roof Care",         rotate: -24,  x: "91%",  y: "70%" },
  { label: "Bechtel",                  rotate: 6,    x: "30%",  y: "82%" },
  { label: "Oasis Builders",           rotate: -12,  x: "64%",  y: "44%" },
  { label: "Roulin Couverture",        rotate: 10,   x: "5%",   y: "52%" },
  { label: "Favre Rénovation",         rotate: -16,  x: "78%",  y: "86%" },
  { label: "Müller Charpente",         rotate: 8,    x: "40%",  y: "88%" },
];

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="section-dark relative overflow-hidden pb-16 lg:pb-24"
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12 lg:pt-20">

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

        {/* ── VIDEO THUMBNAIL — Sher homepage embedded video ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
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
              {/* YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Comment Noovira crée des sites web pour artisans"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/35 transition-colors" />

              {/* Caption bottom-left */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="text-text-light/80 text-sm font-bold uppercase tracking-widest">
                  Comment nous créons des sites qui génèrent des leads.
                </p>
              </div>

              {/* Play button — center */}
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
