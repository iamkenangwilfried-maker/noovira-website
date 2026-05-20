"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * What We Do — exact Sher Agency layout:
 * • Dark background
 * • LEFT: "What we do" title + CTA button
 * • RIGHT: Three rows with horizontal dividers + arrow icons
 * • Click row to expand description below (accordion)
 */

const SERVICES = [
  {
    id: "01",
    label: "Création de Site Web",
    desc: "Un site web conçu spécifiquement pour les PMEs suisses de la construction. Design moderne, mobile-first, optimisé pour convertir les visiteurs en prospects. Livré en 2 semaines, clé en main.",
  },
  {
    id: "02",
    label: "Gestion de Site",
    desc: "Vous vous concentrez sur vos chantiers, nous gérons votre site. Mises à jour régulières, sécurité, hébergement et support disponible 7j/7. Votre présence en ligne toujours optimale.",
  },
  {
    id: "03",
    label: "SEO & Publicité",
    desc: "Apparaître en tête des recherches Google quand un client cherche votre métier dans votre région. SEO local, Google Ads ciblés et fiche Google Business pour un flux constant de nouveaux chantiers.",
  },
];

export default function WhatWeDo() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="section-dark py-20 lg:py-28" id="gestion">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">

          {/* ── LEFT: Title + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2
              className="font-heading font-bold text-text-light leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ce que<br />nous faisons
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-text-light px-6 py-3.5 rounded-full font-semibold text-sm hover:border-white/50 hover:text-white transition-all"
            >
              Démarrer votre projet <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* ── RIGHT: Service rows ── */}
          <div>
            {SERVICES.map((s, i) => {
              const isOpen = open === s.id;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-white/10"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : s.id)}
                    className="w-full flex items-center justify-between py-7 group text-left"
                  >
                    <span
                      className="font-heading font-bold text-text-light group-hover:text-beige transition-colors"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                    >
                      {s.label}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-beige group-hover:text-beige text-text-light/60 transition-all">
                      <ArrowUpRight size={18} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-text-light/55 text-base leading-relaxed pb-7 max-w-xl">
                          {s.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            {/* Final border */}
            <div className="border-t border-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
}
