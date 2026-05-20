"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Real Client Stories — exact Sher Agency layout:
 * • "Real Client Stories" centered heading (mixed font weight)
 * • Disclaimer text centered
 * • Horizontal scrollable carousel of video cards
 * • Each card: dark bg, video thumbnail + play, stars, bold quote, name + company
 */

const TESTIMONIALS = [
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Julien Favre",
    company: "Favre Rénovation Sàrl",
    quote: "Le process du début à la fin était extrêmement fluide… les demandes de chantiers — le ROI a tellement augmenté.",
    highlight: "le ROI a tellement augmenté.",
    stars: 5,
  },
  {
    youtubeId: "n2y_YvYNfv4",
    name: "Pierre-Alain Duc",
    company: "Duc Charpente & Couverture",
    quote: "Mon site est non seulement fonctionnel, il est magnifique… J'ai l'impression qu'ils font des heures sup pour moi.",
    highlight: "J'ai l'impression qu'ils font des heures sup pour moi.",
    stars: 5,
  },
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Marc-Antoine Roulin",
    company: "Roulin Couverture Sàrl",
    quote: "Résultat bluffant. Site livré en 2 semaines comme promis, et depuis on reçoit 3-4 demandes de devis par semaine.",
    highlight: "3-4 demandes de devis par semaine.",
    stars: 5,
  },
  {
    youtubeId: "n2y_YvYNfv4",
    name: "Patrick Müller",
    company: "Müller Charpente AG",
    quote: "Mon site génère des demandes réelles de gens dans ma région. Très content du résultat.",
    highlight: "génère des demandes réelles de gens dans ma région.",
    stars: 5,
  },
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Christophe Terrier",
    company: "Terrier Isolation & Façade",
    quote: "Service impeccable. Délai respecté, communication parfaite. Mon carnet s'est rempli beaucoup plus vite depuis le lancement.",
    highlight: "Mon carnet s'est rempli beaucoup plus vite depuis le lancement.",
    stars: 5,
  },
];

function VideoCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  const [playing, setPlaying] = useState(false);
  const before = t.quote.split(t.highlight)[0];
  const after  = t.quote.split(t.highlight)[1] ?? "";

  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden bg-dark-alt border border-border-dark flex flex-col"
      style={{ width: "340px" }}
      data-cursor="project"
    >
      {/* Video thumbnail */}
      <div className="relative bg-dark overflow-hidden flex-shrink-0" style={{ height: "220px" }}>
        {playing ? (
          <iframe
            key={t.youtubeId + t.name}
            src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
            title={`Témoignage ${t.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
          >
            <img
              src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
              alt={t.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-dark/35 group-hover:bg-dark/20 transition-colors" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={18} className="text-dark fill-dark ml-0.5" />
            </div>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(t.stars)].map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-yellow-400">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-text-light/70 text-sm leading-relaxed flex-1">
          "{before}
          <span className="font-bold text-text-light">{t.highlight}</span>
          {after}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-3 border-t border-border-dark">
          <div className="w-9 h-9 rounded-full bg-beige/25 flex items-center justify-center text-sm font-bold text-beige flex-shrink-0">
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-text-light text-sm">{t.name}</div>
            <div className="text-text-light/40 text-xs">{t.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX   = useRef(0);
  const scrollL  = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollL.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
    trackRef.current.scrollLeft = scrollL.current - (x - startX.current);
  };
  const onMouseUp = () => { dragging.current = false; };

  return (
    <section className="section-white py-20 lg:py-28 overflow-hidden" id="results">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-heading text-dark tracking-tight leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Vraies <span className="font-black">Histoires</span>
            <br />
            de clients réels.
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed">
            Ces résultats proviennent de collaborations réelles et ne constituent pas une garantie de résultats futurs. Les performances varient selon l'activité, la zone géographique et la concurrence.
          </p>
        </motion.div>

      </div>

      {/* Draggable horizontal carousel — full bleed */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 select-none"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          scrollbarWidth: "none",
          cursor: "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <VideoCard t={t} />
          </motion.div>
        ))}
      </div>

      <style>{`
        section[id="results"] div[style*="overflow-x"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
