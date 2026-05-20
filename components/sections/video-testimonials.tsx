"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";

const TESTIMONIALS = [
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Julien Favre",
    company: "Favre Rénovation Sàrl",
    location: "Genève, GE",
    quote: "Le process du début à la fin était extrêmement fluide… les demandes de chantiers — le ROI a tellement augmenté.",
    highlight: "les demandes de chantiers — le ROI a tellement augmenté",
    result: "+300% de leads entrants en 3 mois",
  },
  {
    youtubeId: "n2y_YvYNfv4",
    name: "Pierre-Alain Duc",
    company: "Duc Charpente & Couverture",
    location: "Fribourg, FR",
    quote: "Mon site est non seulement fonctionnel, il est magnifique… J'ai l'impression qu'ils font des heures sup pour moi.",
    highlight: "J'ai l'impression qu'ils font des heures sup pour moi",
    result: "Carnet de chantiers plein dès la 1ère semaine",
  },
];

export default function VideoTestimonials() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const t = TESTIMONIALS[current];

  const goTo = (idx: number) => {
    setCurrent(idx);
    setPlaying(false);
  };

  return (
    <section className="section-white py-24 lg:py-32" id="results">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — matches "Real Client Stories" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4 block">
            Témoignages clients
          </span>
          <h2
            className="font-heading font-bold text-dark leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Vraies{" "}
            <span className="italic font-extrabold">histoires</span>
            <br />
            de clients réels.
          </h2>
          <p className="text-muted text-sm mt-4 max-w-xl leading-relaxed">
            Ces résultats proviennent de collaborations réelles et ne constituent pas une garantie de résultats futurs. Les performances varient selon l'activité, la zone géographique et la concurrence.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-bg-alt rounded-3xl overflow-hidden border border-border"
        >
          <div className="grid lg:grid-cols-[1fr_1fr]">

            {/* Video side */}
            <div className="relative bg-dark overflow-hidden" style={{ minHeight: "360px" }}>
              {playing ? (
                <iframe
                  key={t.youtubeId}
                  src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                  title={`Témoignage ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              ) : (
                /* Thumbnail with play button */
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  data-cursor="project"
                >
                  <img
                    src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
                    alt="Témoignage client"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-dark ml-1.5 fill-dark" />
                  </div>
                </button>
              )}
            </div>

            {/* Text side */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-beige fill-beige" />
                  ))}
                </div>

                <blockquote
                  className="font-heading font-bold text-dark leading-snug mb-4"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                >
                  "…{" "}
                  <span className="text-dark/50">{t.quote.split(t.highlight)[0]}</span>
                  <span className="text-dark">{t.highlight}</span>
                  <span className="text-dark/50">{t.quote.split(t.highlight)[1]}</span>
                  "
                </blockquote>

                {/* Result badge */}
                <div className="inline-flex items-center gap-2 bg-beige/15 border border-beige/30 text-dark rounded-full px-4 py-2 text-sm font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-beige inline-block" />
                  {t.result}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-beige/25 flex items-center justify-center font-bold text-dark text-lg flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.company} — {t.location}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
                <span className="text-sm text-muted font-medium">
                  {current + 1} / {TESTIMONIALS.length}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body hover:border-dark hover:text-dark transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => goTo((current + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body hover:border-dark hover:text-dark transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Thumbnail row — like Sher's slider dots */}
        <div className="flex gap-2 justify-center mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                current === i ? "w-8 h-2.5 bg-dark" : "w-2.5 h-2.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
