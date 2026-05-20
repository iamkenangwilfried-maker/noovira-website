"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ─── Before/After comparison slider ─────────────────────── */
function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=800&h=500`;
}

function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct  = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: "16/9", cursor: "col-resize" }}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() =>   { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={(e) => { if (dragging.current) update(e.clientX); }}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) =>  update(e.touches[0].clientX)}
    >
      {/* AFTER — full width base layer */}
      <img
        src={thumb("b3constructioncorp.com")}
        alt="Après refonte Noovira"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />

      {/* BEFORE — clipped left layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={thumb("qualmax.co.nz")}
          alt="Avant refonte"
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-2xl"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-dark" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-dark/70 text-white/90 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm">
        Avant
      </div>
      <div className="absolute top-3 right-3 bg-beige text-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
        Après ✦ Noovira
      </div>
    </div>
  );
}

/* ─── Process steps ───────────────────────────────────────── */
const STEPS = [
  {
    id: "01",
    title: "Planification & Stratégie UX",
    desc: "On commence par comprendre votre activité, vos clients cibles et votre zone géographique. On définit ensemble la structure et les objectifs de votre site avant de toucher au design.",
    deliverable: "Brief complet & architecture du site",
    duration: "Semaine 1 — 2h de travail ensemble",
    visual: null,
  },
  {
    id: "02",
    title: "Design Visuel Sur-Mesure",
    desc: "Notre équipe crée une maquette desktop + mobile à votre image : vos couleurs, votre logo, vos photos. Aucun template générique — chaque élément est pensé pour inspirer confiance immédiatement.",
    deliverable: "Maquette Figma complète pour validation",
    duration: "Semaine 1",
    visual: "before-after",
  },
  {
    id: "03",
    title: "Rédaction des Textes",
    desc: "Nous rédigeons tous les textes de votre site en français : accroche, description de vos services, zones d'intervention, appels à l'action. Des textes clairs qui convertissent.",
    deliverable: "Textes validés & prêts à publier",
    duration: "Semaine 1–2",
    visual: null,
  },
  {
    id: "04",
    title: "Développement & Tests",
    desc: "On intègre le design, on branche les formulaires, on configure l'hébergement et le domaine. On teste chaque page sur desktop, tablette et mobile. Votre site est prêt.",
    deliverable: "Site live, sécurisé, rapide (PageSpeed 90+)",
    duration: "Semaine 2",
    visual: null,
  },
  {
    id: "05",
    title: "Lancement & Génération de Trafic",
    desc: "Mise en ligne, soumission à Google, configuration de votre fiche Google Business. Pour les clients Scale, on lance les premières campagnes SEO et publicité pour attirer vos premiers leads.",
    deliverable: "Site indexé, trafic local en route",
    duration: "Semaine 2 — Lancement officiel",
    visual: null,
  },
];

export default function Process() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="section-alt py-24 lg:py-32" id="processus">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

          {/* Left — sticky header */}
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
                Comment notre
                <br />
                processus{" "}
                <span className="text-muted">fonctionne.</span>
              </h2>
              <p className="text-body leading-relaxed text-base mb-10">
                Cinq étapes. Deux semaines. Un site professionnel qui travaille pour vous pendant que vous êtes sur vos chantiers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-dark text-text-light px-6 py-3.5 rounded-full font-bold text-sm hover:bg-dark/80 transition-colors"
              >
                Démarrer maintenant
              </a>
            </motion.div>
          </div>

          {/* Right — accordion */}
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
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10 pr-4 space-y-5">
                            <p className="text-body text-sm leading-relaxed">{s.desc}</p>

                            {/* Before/After slider — only on step 02 */}
                            {s.visual === "before-after" && (
                              <div className="mt-2">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-3">
                                  Exemple de transformation — faites glisser ↔
                                </p>
                                <BeforeAfter />
                              </div>
                            )}

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
