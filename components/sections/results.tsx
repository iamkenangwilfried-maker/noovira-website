"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const videoTestimonials = [
  {
    youtubeId: "hn1SIFFnDBY",
    name: "Mike R.",
    role: "Eagle Roofing, Texas",
    result: "$31k recovered in 30 days",
    resultColor: "text-success",
    quote: "Noovira built our website in 48 hours and the AI follows up every missed call. We booked 3 jobs the first week.",
  },
  {
    youtubeId: "n2y_YvYNfv4",
    name: "Jason T.",
    role: "Summit Pro Roofing, Florida",
    result: "220% more Google reviews",
    resultColor: "text-accent",
    quote: "We had 11 reviews after 8 years. Now we get 20+ a month on autopilot — zero effort from us.",
  },
];

export default function Results() {
  return (
    <section className="py-14 bg-muted section-divider" id="results">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-success/10 text-success text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Proven Results
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy max-w-3xl mx-auto leading-tight">
            Hear It Directly From Our Contractors
          </h2>
          <p className="mt-5 text-secondary text-lg max-w-2xl mx-auto">
            Real roofing business owners sharing their results — in their own words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-card-border shadow-sm"
            >
              {/* Video — YouTube Shorts embed */}
              <div className="relative bg-navy/5" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={`Témoignage ${t.name}`}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-accent text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">{t.name}</div>
                      <div className="text-secondary/60 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className={`font-heading font-bold text-sm ${t.resultColor}`}>
                    {t.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
