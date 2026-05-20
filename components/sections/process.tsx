"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Planification & Stratégie UX",
    desc: "On commence par comprendre votre activité, vos clients cibles et votre zone géographique. On définit ensemble la structure et les objectifs de votre site avant de toucher au design.",
    deliverable: "Brief complet & architecture du site",
    duration: "Jour 1 — 2h de travail ensemble",
  },
  {
    id: "02",
    title: "Design Visuel Sur-Mesure",
    desc: "Notre équipe crée une maquette desktop + mobile à votre image : vos couleurs, votre logo, vos photos. Aucun template générique — chaque élément est pensé pour inspirer confiance à vos clients.",
    deliverable: "Maquette Figma complète pour validation",
    duration: "Jour 1–2",
  },
  {
    id: "03",
    title: "Rédaction des Textes",
    desc: "Nous rédigeons tous les textes de votre site en français (et en allemand si nécessaire) : accroche, description de vos services, zones d'intervention, appels à l'action. Des textes clairs qui convertissent.",
    deliverable: "Textes validés & prêts à publier",
    duration: "Jour 2",
  },
  {
    id: "04",
    title: "Développement & Tests",
    desc: "On intègre le design, on branche les formulaires, on configure l'hébergement et le domaine. On teste chaque page sur desktop, tablette et mobile. Votre site est prêt.",
    deliverable: "Site live, sécurisé, rapide (PageSpeed 90+)",
    duration: "Jour 2–3",
  },
  {
    id: "05",
    title: "Lancement & Génération de Trafic",
    desc: "Mise en ligne, soumission à Google, configuration de votre fiche Google Business. Pour les clients Scale, on lance les premières campagnes SEO et publicité pour attirer vos premiers leads.",
    deliverable: "Site indexé, trafic local en route",
    duration: "Jour 3 — Lancement officiel",
  },
];

export default function Process() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="section-alt py-24 lg:py-32" id="processus">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

          {/* Left sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5 block">
                Notre processus
              </span>
              <h2
                className="font-heading font-bold text-dark leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                De zéro à un site<br />
                qui génère des leads<br />
                <span className="text-muted">en 48 heures.</span>
              </h2>
              <p className="text-body leading-relaxed text-base mb-10">
                Cinq étapes. Deux jours. Un site professionnel qui travaille pour vous pendant que vous êtes sur vos chantiers.
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-dark text-text-light px-6 py-3.5 rounded-full font-bold text-sm hover:bg-dark/80 transition-colors"
              >
                Démarrer maintenant
              </a>
            </motion.div>
          </div>

          {/* Right — accordion steps */}
          <div>
            <div className="border-t border-border">
              {STEPS.map((s, i) => {
                const isOpen = open === s.id;
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="border-b border-border"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-xs font-bold text-muted tracking-widest w-5">{s.id}</span>
                        <span
                          className="font-heading font-bold text-dark group-hover:text-body transition-colors"
                          style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
                        >
                          {s.title}
                        </span>
                      </div>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-dark group-hover:text-dark transition-all ml-4">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
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
                          <div className="pb-6 pl-10 pr-4">
                            <p className="text-body text-sm leading-relaxed mb-5">{s.desc}</p>
                            <div className="flex flex-wrap gap-3">
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark bg-white border border-border px-3 py-1.5 rounded-full">
                                <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {s.deliverable}
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted bg-white border border-border px-3 py-1.5 rounded-full">
                                🕐 {s.duration}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
