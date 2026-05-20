"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HowWeMake() {
  return (
    <section className="section-dark py-24 lg:py-32 border-t border-border-dark" id="comment">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-4 block">
            Notre méthode
          </span>
          <h2
            className="font-heading font-bold text-text-light leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Voici comment nous créons
            <br />
            des sites qui{" "}
            <span className="text-beige">génèrent des leads.</span>
          </h2>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-border-dark bg-dark-alt"
          style={{ aspectRatio: "16/9", maxHeight: "560px" }}
        >
          {/* YouTube embed — using first testimonial video as demo */}
          <iframe
            src="https://www.youtube.com/embed/hn1SIFFnDBY?rel=0&modestbranding=1&controls=1"
            title="Comment Noovira AI crée des sites web"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>

        {/* 3 key points below the video */}
        <div className="grid md:grid-cols-3 gap-px mt-px bg-border-dark rounded-b-3xl overflow-hidden border border-t-0 border-border-dark">
          {[
            {
              step: "01",
              title: "Appel découverte",
              desc: "Nous analysons votre activité, vos concurrents et votre zone de chalandise pour créer une stratégie sur-mesure.",
            },
            {
              step: "02",
              title: "Design & développement",
              desc: "Votre site est conçu de A à Z — aucun template, aucun compromis. Livré en 2 semaines, prêt à générer des leads.",
            },
            {
              step: "03",
              title: "Lancement & suivi",
              desc: "Mise en ligne, SEO de base, fiche Google configurée. Nous restons à vos côtés pour optimiser en continu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-alt px-8 py-8"
            >
              <span className="text-xs font-bold text-beige/50 tracking-widest block mb-3">
                {item.step}
              </span>
              <h3 className="font-heading font-bold text-text-light text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-text-light/45 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
