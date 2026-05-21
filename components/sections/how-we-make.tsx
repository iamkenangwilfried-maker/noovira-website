"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

/**
 * How We Make — exact Sher Agency layout:
 * • DARK background (section-dark)
 * • LEFT: video thumbnail → click to play inline (portrait-ish ratio from Sher)
 * • RIGHT: "Here's how we make websites that drive sales."
 *          + "Réserver un appel ↗" white pill button
 *          + "|" separator
 *          + Clutch badge (C + ★★★★★ + n avis)
 *          + GoodFirms badge
 */

const VIDEO_ID = "hn1SIFFnDBY";

// Clutch icon — red circle with "C"
const ClutchBadge = () => (
  <div className="flex items-center gap-2">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "#FF3D2E" }}
    >
      <span className="text-white font-black text-sm leading-none">C</span>
    </div>
    <div className="flex flex-col">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-yellow-400">
            <path d="M6 0l1.55 3.14L11 3.64l-2.5 2.43.59 3.44L6 7.77 2.91 9.51l.59-3.44L1 3.64l3.45-.5L6 0z" />
          </svg>
        ))}
      </div>
      <span className="text-text-light/50 text-[10px] leading-tight">38 Avis Vérifiés</span>
    </div>
  </div>
);

// GoodFirms badge
const GoodFirmsBadge = () => (
  <div className="flex items-center gap-2">
    <div
      className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
      style={{ background: "#0B4DDA" }}
    >
      <span className="text-white font-black text-xs leading-none">GF</span>
    </div>
    <div className="flex flex-col">
      <span className="text-text-light/80 text-[11px] font-bold leading-tight">GoodFirms</span>
      <span className="text-text-light/40 text-[10px] leading-tight">Top Web Designer</span>
    </div>
  </div>
);

export default function HowWeMake() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-dark py-20 lg:py-28" id="comment">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Video ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden bg-[#111]"
            style={{ aspectRatio: "9/11" }}
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
                data-cursor="project"
              >
                {/* YouTube thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Comment Noovira crée des sites"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/25 transition-colors" />

                {/* "HOW" large text overlay — Sher exact top of video */}
                <div
                  className="absolute top-6 left-6 font-heading font-black text-text-light/90 leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 8vw, 5rem)", letterSpacing: "-0.04em" }}
                >
                  HOW
                </div>

                {/* Bottom caption — Sher exact */}
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-text-light/70 text-xs font-bold uppercase tracking-widest">
                    Comment créer un site qui génère des leads.
                  </p>
                </div>

                {/* Play circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={22} className="text-dark fill-dark ml-1" />
                </div>
              </button>
            )}
          </motion.div>

          {/* ── RIGHT: Text + CTA + trust badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Voici <span className="font-black">comment nous</span>
              {" "}créons des sites qui{" "}
              <span className="font-black">génèrent des leads.</span>
            </h2>

            {/* CTA row — button | separator | badges */}
            <div className="flex flex-wrap items-center gap-4">
              {/* White pill CTA — Sher exact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-rose text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-dark transition-colors flex-shrink-0"
              >
                Réserver un appel <ArrowUpRight size={14} />
              </a>

              {/* Vertical separator */}
              <div className="w-px h-10 bg-border-dark flex-shrink-0" />

              {/* Clutch badge */}
              <ClutchBadge />

              {/* GoodFirms badge */}
              <GoodFirmsBadge />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
