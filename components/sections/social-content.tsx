"use client";
import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";

// Placeholder reels — to be replaced with actual TikTok/Insta embeds
const REELS = [
  {
    id: 1,
    thumbnail: "/reels/reel1.jpg",
    caption: "Site livré en 48h pour un couvreur valaisan 🏔️",
    platform: "instagram",
    views: "4.2k",
  },
  {
    id: 2,
    thumbnail: "/reels/reel2.jpg",
    caption: "Avant / après — une transformation de site en 2 jours",
    platform: "tiktok",
    views: "8.7k",
  },
  {
    id: 3,
    thumbnail: "/reels/reel3.jpg",
    caption: "Comment on génère 3 leads par semaine pour ce rénovateur",
    platform: "instagram",
    views: "3.1k",
  },
  {
    id: 4,
    thumbnail: "/reels/reel4.jpg",
    caption: "Notre process de design en 60 secondes ⚡",
    platform: "tiktok",
    views: "12.4k",
  },
];

export default function SocialContent() {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-4 block">
              Notre contenu
            </span>
            <h2
              className="font-heading font-bold text-text-light leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Suivez notre travail<br />
              <span className="text-beige">au quotidien.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-light/60 hover:text-text-light transition-colors"
            >
              <Instagram size={18} />
              @nooviraai
            </a>
          </div>
        </motion.div>

        {/* Reels grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REELS.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-dark-alt border border-border-dark cursor-pointer hover:border-beige/40 transition-all"
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-alt to-dark flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-beige/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-beige/25 transition-colors">
                    <Play size={22} className="text-beige ml-1" />
                  </div>
                  <p className="text-text-light/50 text-xs leading-relaxed">{reel.caption}</p>
                </div>
              </div>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-text-light/50 text-xs font-medium">{reel.views} vues</span>
                  {reel.platform === "instagram" ? (
                    <Instagram size={14} className="text-beige" />
                  ) : (
                    <span className="text-beige text-xs font-bold">TT</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-text-light/40 text-sm mb-5">
            Du contenu en coulisse, des conseils web pour artisans, des before/after
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-beige hover:text-beige-light transition-colors"
          >
            <Instagram size={16} />
            Nous suivre sur Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
}
