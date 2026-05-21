"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Social Content — exact Sher Agency "Our Reels" layout:
 * • Dark background
 * • LEFT: 3×2 grid of portrait video cards (TikTok/Insta style)
 * • RIGHT: Platform icons + "Use these tips…" heading + CTA
 * • Bottom: ←/→ navigation + dots
 */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=320&h=560`;
}

const REELS_PAGES = [
  [
    { url: "b3constructioncorp.com",    title: "Voici pourquoi ce site génère 4 leads/sem",    likes: "1.2k", comments: "34", views: "8.4k",  platform: "tiktok"    },
    { url: "qualmax.co.nz",             title: "Notre process design → live en 2 semaines ⚡",  likes: "2.1k", comments: "67", views: "14.7k", platform: "instagram" },
    { url: "tekconstructiongroup.com",  title: "3 erreurs qui font fuir vos clients dès l'accueil", likes: "987", comments: "43", views: "6.2k", platform: "tiktok" },
    { url: "ironstarconstruction.com",  title: "SEO local expliqué en 60 sec pour artisans",  likes: "3.4k", comments: "112", views: "22k",  platform: "instagram" },
    { url: "skender.com",               title: "Avant / après — refonte complète en 2 sem",   likes: "1.8k", comments: "55", views: "11.3k", platform: "tiktok"    },
    { url: "leopardo.com",              title: "Pourquoi votre site ne convertit pas",         likes: "4.1k", comments: "89", views: "31.5k", platform: "instagram" },
  ],
];

export default function SocialContent() {
  const [page] = useState(0);
  const reels = REELS_PAGES[page];

  return (
    <section className="section-dark py-20 lg:py-28" id="reels">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: 3×2 grid of portrait video cards ── */}
          <div>
            <div className="grid grid-cols-3 gap-3">
              {reels.map((reel, i) => (
                <motion.div
                  key={reel.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative rounded-xl overflow-hidden bg-dark-alt border border-border-dark"
                  style={{ aspectRatio: "9/16" }}
                  data-cursor="project"
                >
                  {/* Background thumbnail */}
                  <img
                    src={thumb(reel.url)}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.1"; }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

                  {/* Platform icon + play */}
                  <div className="absolute top-2 right-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${reel.platform === "tiktok" ? "bg-black" : "bg-gradient-to-br from-purple-500 to-pink-500"}`}>
                      {reel.platform === "tiktok" ? <TikTokIcon /> : <InstagramIcon />}
                    </div>
                  </div>

                  {/* Play icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play size={14} className="text-white fill-white ml-0.5" />
                  </div>

                  {/* Caption + stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-[11px] font-semibold leading-snug mb-2 line-clamp-2">
                      {reel.title}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 text-[10px]">
                      <span>♥ {reel.likes}</span>
                      <span>💬 {reel.comments}</span>
                      <span>▶ {reel.views}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 mt-6">
              <button className="w-9 h-9 rounded-full border border-border-dark flex items-center justify-center text-text-light/40 hover:border-rose hover:text-rose transition-all">
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {REELS_PAGES.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-beige" : "w-1.5 bg-border-dark"}`} />
                ))}
              </div>
              <button className="w-9 h-9 rounded-full border border-border-dark flex items-center justify-center text-text-light/40 hover:border-rose hover:text-rose transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Platform icons + heading + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Platform icons */}
            <div className="flex gap-3 mb-8">
              <div className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-text-light/60 hover:border-rose hover:text-rose transition-all">
                <InstagramIcon />
              </div>
              <div className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-text-light/60 hover:border-rose hover:text-rose transition-all">
                <YoutubeIcon />
              </div>
              <div className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-text-light/60 hover:border-rose hover:text-rose transition-all">
                <TikTokIcon />
              </div>
            </div>

            <h2
              className="font-heading font-bold text-text-light leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Utilisez ces conseils pour améliorer votre{" "}
              <span className="font-black">présence en ligne</span>
            </h2>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-text-light px-6 py-3.5 rounded-full font-semibold text-sm hover:border-white/60 transition-all"
            >
              Réserver un appel <ArrowUpRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
