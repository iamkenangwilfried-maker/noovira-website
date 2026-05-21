"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

/**
 * Process — exact Sher Agency layout:
 * • Dark background
 * • LEFT: huge rotated vertical text "Comment Notre Processus Fonctionne"
 * • RIGHT: 5-step accordion, each step opens to show image + text
 * • Bottom: two CTA buttons
 */

function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=900&h=560`;
}

const STEPS = [
  {
    id: "01",
    title: "Planification & UX",
    image: thumb("qualmax.co.nz"),
    imageAlt: "Wireframe UX planning",
    text: [
      "La première étape est la plus importante : comprendre le parcours de vos visiteurs.",
      "Quelles questions ont-ils en arrivant ? Quelles objections faut-il lever ? Comment leur inspirer confiance immédiatement ?",
      "Nous répondons à toutes ces questions lors d'un atelier de stratégie de 1h30 où nous posons les bases de votre site.",
    ],
  },
  {
    id: "02",
    title: "Design Visuel",
    image: thumb("b3constructioncorp.com"),
    imageAlt: "Maquettes design",
    text: [
      "En fonction de votre activité et de vos clients cibles, nous explorons les directions visuelles qui inspirent le plus confiance.",
      "Nous vous proposons des maquettes desktop + mobile et n'avançons à l'étape suivante qu'après votre validation complète.",
    ],
  },
  {
    id: "03",
    title: "Rédaction des Textes",
    image: null,
    imageAlt: null,
    text: [
      "La clé d'un bon texte web, c'est la clarté et la concision.",
      "Nous rédigeons l'ensemble des textes de votre site en français — accroche, présentation de vos services, zones d'intervention, appels à l'action. Des textes optimisés SEO dès le départ.",
    ],
  },
  {
    id: "04",
    title: "Développement & Tests",
    image: thumb("tekconstructiongroup.com"),
    imageAlt: "Développement code",
    text: [
      "On intègre le design approuvé, on branche les formulaires de contact, on configure l'hébergement, le SSL et votre nom de domaine.",
      "Chaque page est testée sur desktop, tablette et mobile. Vitesse PageSpeed optimisée. Votre site est prêt.",
    ],
  },
  {
    id: "05",
    title: "Lancement & Trafic",
    image: thumb("skender.com"),
    imageAlt: "Analytics Google",
    text: [
      "Une fois votre site en ligne, il est temps d'envoyer des visiteurs dessus.",
      "Nous configurons votre fiche Google Business, soumettons votre site à Google, et pour les clients SEO & Publicité, nous lançons vos premières campagnes.",
    ],
  },
];

export default function Process() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="section-dark py-20 lg:py-28 overflow-hidden" id="processus">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-0 items-start">

          {/* ── LEFT: Rotated vertical text (Sher exact) ── */}
          <div className="hidden lg:flex items-center justify-center" style={{ minHeight: "700px" }}>
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 800,
                color: "rgba(247,244,239,0.08)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              Comment Notre Processus Fonctionne
            </div>
          </div>

          {/* ── RIGHT: Accordion steps ── */}
          <div>
            <div className="border-t border-white/10">
              {STEPS.map((s) => {
                const isOpen = open === s.id;
                return (
                  <div key={s.id} className="border-b border-white/10">
                    <button
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      className="w-full flex items-center gap-6 py-7 text-left group"
                    >
                      <span className="text-text-light/20 font-bold text-xl w-10 flex-shrink-0 font-heading">
                        {s.id}
                      </span>
                      <span
                        className="font-heading font-bold text-text-light group-hover:text-rose transition-colors flex-1"
                        style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                      >
                        {s.title}
                      </span>
                      <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-text-light/50 group-hover:border-rose group-hover:text-rose transition-all">
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
                          <div className="pb-10 pl-16 space-y-5">
                            {/* Screenshot image */}
                            {s.image && (
                              <div className="rounded-2xl overflow-hidden border border-white/10">
                                <img
                                  src={s.image}
                                  alt={s.imageAlt ?? ""}
                                  className="w-full object-cover object-top"
                                  style={{ maxHeight: "320px" }}
                                  loading="lazy"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                  }}
                                />
                              </div>
                            )}
                            {/* Text paragraphs */}
                            {s.text.map((p, i) => (
                              <p key={i} className="text-text-light/55 text-base leading-relaxed">
                                {p}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTAs */}
            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 text-text-light px-7 py-3.5 rounded-full font-semibold text-sm hover:border-white/60 transition-all"
              >
                Démarrer votre projet <ArrowUpRight size={14} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-text-light/50 px-7 py-3.5 rounded-full font-semibold text-sm hover:text-text-light transition-colors"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
