"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    label: "Web Design",
    title: "Créer votre site professionnel",
    description:
      "Un site web conçu spécifiquement pour les PMEs suisses de la construction. Design moderne, mobile-first, optimisé pour convertir les visiteurs en prospects. Livré en 48 heures, clé en main.",
    bullets: [
      "Design sur-mesure — aucun template générique",
      "Mobile-first & Google-optimisé dès le départ",
      "Formulaires de contact + suivi des leads intégré",
      "Livraison garantie en 48 heures ouvrables",
    ],
    tag: "Le plus populaire",
  },
  {
    id: "02",
    label: "Gestion de Site",
    title: "Gérer votre présence en ligne",
    description:
      "Vous vous concentrez sur vos chantiers, nous gérons votre site. Mises à jour régulières, sécurité renforcée, performances optimisées et support technique disponible 7j/7.",
    bullets: [
      "Mises à jour de contenu illimitées",
      "Sauvegardes automatiques & sécurité SSL",
      "Rapport mensuel de performances",
      "Support technique prioritaire 7j/7",
    ],
    tag: "Gestion complète",
  },
  {
    id: "03",
    label: "SEO & Publicité",
    title: "Générer des leads qualifiés",
    description:
      "Apparaître en tête des recherches Google quand un client cherche votre métier dans votre région. SEO local, Google Ads ciblés et optimisation continue pour un flux constant de nouveaux chantiers.",
    bullets: [
      "SEO local ciblé sur votre zone géographique",
      "Campagnes Google Ads ROI-positives",
      "Fiche Google Business optimisée",
      "Rapport mensuel des positions & conversions",
    ],
    tag: "Croissance",
  },
];

export default function WhatWeDo() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="section-dark py-24 lg:py-32" id="gestion">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/70 mb-4 block">
              Ce que nous faisons
            </span>
            <h2
              className="font-heading font-bold text-text-light leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Trois services.<br />
              Un seul objectif : <span className="text-beige">votre croissance.</span>
            </h2>
          </div>
          <p className="text-text-light/50 max-w-sm text-base leading-relaxed lg:text-right">
            Chaque service est conçu pour fonctionner seul ou ensemble, selon vos besoins et votre budget.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-border-dark">
          {SERVICES.map((s) => {
            const isOpen = open === s.id;
            return (
              <div key={s.id} className="border-b border-border-dark">
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold text-beige/50 tracking-widest w-6">{s.id}</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-beige/60 block mb-0.5">
                        {s.label}
                      </span>
                      <span
                        className="font-heading font-bold text-text-light group-hover:text-beige transition-colors"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                      >
                        {s.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border-dark flex items-center justify-center text-text-light/50 group-hover:border-beige group-hover:text-beige transition-all">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 pr-4 grid md:grid-cols-2 gap-8">
                        <div>
                          <span className="inline-block text-xs font-bold bg-beige/15 text-beige px-3 py-1 rounded-full mb-4">
                            {s.tag}
                          </span>
                          <p className="text-text-light/55 leading-relaxed text-base">{s.description}</p>
                        </div>
                        <ul className="space-y-3">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm text-text-light/70">
                              <svg
                                className="w-4 h-4 text-beige flex-shrink-0 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
