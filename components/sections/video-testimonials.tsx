"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Julien Favre",
    company: "Favre Rénovation Sàrl",
    location: "Genève, GE",
    text: "Notre site a été livré en exactement 48 heures. Depuis, les demandes de devis n'arrêtent pas. Je recommande Noovira à tous les artisans de la région.",
  },
  {
    youtubeId: "n2y_YvYNfv4",
    name: "Pierre-Alain Duc",
    company: "Duc Charpente & Couverture",
    location: "Fribourg, FR",
    text: "J'avais essayé d'autres agences sans résultats. Avec Noovira, le site est beau, rapide, et surtout il génère de vraies demandes de chantiers qualifiées.",
  },
];

export default function VideoTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-white py-24 lg:py-32" id="results">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4 block">
            Témoignages clients
          </span>
          <h2
            className="font-heading font-bold text-dark leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Ils ont confié leur site à Noovira.
          </h2>
        </motion.div>

        {/* Card */}
        <div className="bg-bg-alt rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* Video */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] bg-dark">
              <iframe
                key={t.youtubeId}
                src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1`}
                title={`Témoignage ${t.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-beige fill-beige" />
                  ))}
                </div>
                <blockquote className="text-lg lg:text-xl font-semibold text-dark leading-relaxed mb-8">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-beige/30 flex items-center justify-center font-bold text-dark text-lg">
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
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body hover:border-dark hover:text-dark transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body hover:border-dark hover:text-dark transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
