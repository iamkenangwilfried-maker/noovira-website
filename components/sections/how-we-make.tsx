"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

/**
 * How We Make — exact Sher Agency layout:
 * • White/light background
 * • LEFT: video thumbnail → click to play inline
 * • RIGHT: heading + CTA + trust badges (Clutch-style)
 */

const VIDEO_ID = "hn1SIFFnDBY";

export default function HowWeMake() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-white py-20 lg:py-28" id="comment">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Video ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden bg-dark"
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
                data-cursor="project"
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Comment Noovira crée des sites"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors" />
                {/* Play button — exact Sher style: large white circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-dark fill-dark ml-1" />
                </div>
              </button>
            )}
          </motion.div>

          {/* ── RIGHT: Text + CTA + badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-heading font-bold text-dark leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Voici <span className="font-black">comment nous</span>
              <br />
              créons des sites qui{" "}
              <span className="font-black">génèrent des leads.</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-dark text-text-light px-6 py-3.5 rounded-full font-bold text-sm hover:bg-dark/80 transition-colors"
              >
                Réserver un appel <ArrowUpRight size={14} />
              </a>

              {/* Trust badges */}
              <div className="flex items-center gap-1 text-muted">
                <span className="text-dark font-bold text-sm">|</span>
              </div>

              <div className="flex items-center gap-2 border border-border rounded-full px-4 py-2">
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#FF3D2E"/>
                  <path d="M20 8l3.09 6.26L30 15.27l-5 4.87 1.18 6.86L20 23.77l-6.18 3.23L15 20.14l-5-4.87 6.91-1.01L20 8z" fill="white"/>
                </svg>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                  </div>
                  <span className="text-[10px] text-muted font-medium">175+ Avis</span>
                </div>
              </div>

              <div className="flex items-center gap-2 border border-border rounded-full px-4 py-2">
                <div className="w-5 h-5 rounded bg-dark flex items-center justify-center">
                  <span className="text-text-light text-[8px] font-black">N</span>
                </div>
                <span className="text-xs font-semibold text-dark">Top Agence Web</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
