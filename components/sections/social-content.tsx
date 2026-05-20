"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Eye, ArrowUpRight } from "lucide-react";

/**
 * Social Content — matches Sher Agency's "Our Reels" section:
 * • Left: sticky title + CTA
 * • Right: 4 reel cards in 2 cols (portrait 9:16 ratio)
 * • Each card: screenshot background + overlay stats (likes/comments/views)
 * • Uses mshots of construction sites as visuals
 */

const REELS = [
  {
    url:      "b3constructioncorp.com",
    caption:  "De 0 à 4 demandes/semaine — comment on a refait le site de ce couvreur valaisan 🏔️",
    likes:    "1.2k",
    comments: "34",
    views:    "8.4k",
    tag:      "Avant / Après",
  },
  {
    url:      "qualmax.co.nz",
    caption:  "Notre process complet en 60 secondes ⚡ Design → Dev → Live en 2 semaines",
    likes:    "2.1k",
    comments: "67",
    views:    "14.7k",
    tag:      "Dans les coulisses",
  },
  {
    url:      "tekconstructiongroup.com",
    caption:  "3 erreurs qui font fuir les clients dès la page d'accueil 👇",
    likes:    "987",
    comments: "43",
    views:    "6.2k",
    tag:      "Conseils Web",
  },
  {
    url:      "ironstarconstruction.com",
    caption:  "Comment générer des leads en continu sans pub — SEO local expliqué simplement",
    likes:    "3.4k",
    comments: "112",
    views:    "22.1k",
    tag:      "SEO Local",
  },
];

function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=400&h=700`;
}

export default function SocialContent() {
  return (
    <section className="section-dark py-24 lg:py-32 border-t border-border-dark" id="reels">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Title + CTA (sticky) ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-5 block">
                Contenu & Réseaux
              </span>
              <h2
                className="font-heading font-bold text-text-light leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)" }}
              >
                Suivez notre<br />
                travail{" "}
                <span className="text-beige">en coulisse.</span>
              </h2>
              <p className="text-text-light/45 text-sm leading-relaxed mb-8">
                Conseils web pour artisans, transformations avant/après, coulisses de notre agence — tous les jours sur Instagram & TikTok.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/nooviraai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-beige text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-beige-light transition-colors"
                >
                  Nous suivre
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://tiktok.com/@nooviraai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border-dark text-text-light/60 px-6 py-3.5 rounded-full font-semibold text-sm hover:border-beige/40 hover:text-text-light transition-all"
                >
                  @nooviraai sur TikTok
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-border-dark flex gap-8">
                <div>
                  <div className="font-heading font-bold text-2xl text-beige">50k+</div>
                  <div className="text-[11px] text-text-light/35 uppercase tracking-widest mt-0.5">Vues / mois</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-beige">2k+</div>
                  <div className="text-[11px] text-text-light/35 uppercase tracking-widest mt-0.5">Abonnés</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: 4 reel cards in 2x2 grid ── */}
          <div className="grid sm:grid-cols-2 gap-5">
            {REELS.map((reel, i) => (
              <motion.div
                key={reel.url}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-border-dark bg-dark-alt"
                style={{ aspectRatio: "9/16", maxHeight: "520px" }}
                data-cursor="project"
              >
                {/* Screenshot background */}
                <img
                  src={thumb(reel.url)}
                  alt={reel.caption}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-75 scale-105 group-hover:scale-100 transition-all duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0.1";
                  }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

                {/* Tag badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-beige/90 text-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {reel.tag}
                  </span>
                </div>

                {/* Stats top-right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <Eye size={11} className="text-white/70" />
                  <span className="text-white/70 text-[10px] font-semibold">{reel.views}</span>
                </div>

                {/* Caption + stats bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-text-light/90 text-xs leading-relaxed mb-4">
                    {reel.caption}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Heart size={13} className="text-beige" />
                      <span className="text-text-light/60 text-[11px] font-semibold">{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={13} className="text-beige" />
                      <span className="text-text-light/60 text-[11px] font-semibold">{reel.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
