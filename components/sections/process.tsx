"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── 1. VIDEO — browser-chrome frame ─────────────────────────────────────────
function BrowserFrame({ video, label, priority = false }: { video: string; label: string; priority?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure autoplay fires even after tab switch or low-power mode
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const play = () => { el.play().catch(() => {}); };
    play();
    el.addEventListener("pause", play);
    return () => el.removeEventListener("pause", play);
  }, [video]);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "#141414" }}>
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10" style={{ background: "#222" }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28CA42" }} />
        <div className="flex-1 mx-4 rounded-md h-5 flex items-center px-3" style={{ background: "#333" }}>
          <span className="text-white/30 text-xs truncate">nooviraai.com/votre-site</span>
        </div>
      </div>
      <div className="relative" style={{ aspectRatio: "16/10" }}>
        <video
          ref={videoRef}
          key={video}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "none"}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3">
          <span className="bg-rose text-dark text-xs font-black px-3 py-1 rounded-full">{label}</span>
        </div>
      </div>
    </div>
  );
}

// ─── 2. SLIDER — before / after drag ─────────────────────────────────────────
function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPct(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  const onMouseDown  = (e: React.MouseEvent) => { dragging.current = true; move(e.clientX); };
  const onMouseMove  = useCallback((e: MouseEvent) => { if (dragging.current) move(e.clientX); }, [move]);
  const onMouseUp    = useCallback(() => { dragging.current = false; }, []);
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; move(e.touches[0].clientX); };
  const onTouchMove  = useCallback((e: TouchEvent) => { if (dragging.current) move(e.touches[0].clientX); }, [move]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend",  onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  const opt1 = "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fqualmax.co.nz?w=1280&h=900";
  const opt2 = "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fskender.com?w=1280&h=900";

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden border border-white/10 select-none"
      style={{ aspectRatio: "16/10", cursor: "col-resize", background: "#111" }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img src={opt2} alt="Option 2" className="absolute inset-0 w-full h-full object-cover object-top" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <img
          src={opt1} alt="Option 1" draggable={false}
          className="absolute inset-0 h-full object-cover object-top"
          style={{ width: `${containerRef.current?.offsetWidth ?? 800}px`, maxWidth: "none" }}
        />
      </div>
      <div className="absolute top-3 left-3 pointer-events-none">
        <span className="bg-white text-dark text-xs font-black px-3 py-1 rounded-full shadow">OPTION 1</span>
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <span className="bg-rose text-dark text-xs font-black px-3 py-1 rounded-full shadow">OPTION 2</span>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        style={{ left: `${pct}%` }}>
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M7 4l-3 6 3 6M13 4l3 6-3 6"/>
        </svg>
      </div>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium pointer-events-none whitespace-nowrap">
        ← Faites glisser pour comparer →
      </p>
    </div>
  );
}

// ─── 3. IMAGE — static SEO result screenshot in browser frame ────────────────
function ImageFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "#141414" }}>
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10" style={{ background: "#222" }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28CA42" }} />
        <div className="flex-1 mx-4 rounded-md h-5 flex items-center px-3" style={{ background: "#333" }}>
          <span className="text-white/30 text-xs truncate">search.google.com / console</span>
        </div>
      </div>
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} className="w-full block" loading="lazy" />
        <div className="absolute bottom-3 left-3">
          <span className="bg-rose text-dark text-xs font-black px-3 py-1 rounded-full">{label}</span>
        </div>
      </div>
    </div>
  );
}

// ─── 4. TEXT — animated copywriting lines ────────────────────────────────────
const COPY_LINES = [
  { tag: "H1",   text: "Couvreur à Lausanne — Devis Gratuit Sous 24h" },
  { tag: "INTRO", text: "Depuis 15 ans, Roulin Couverture protège les toits de Suisse romande. Qualité suisse, réactivité garantie." },
  { tag: "CTA",   text: "Demander un devis gratuit →" },
  { tag: "H2",   text: "Nos Services de Couverture" },
  { tag: "BODY",  text: "Toiture neuve, rénovation, réparation d'urgence, isolation et zinguerie. Chaque chantier est suivi personnellement." },
  { tag: "SEO",   text: "✓ Optimisé Google  ✓ Mots-clés locaux  ✓ Structure SEO" },
];

function TextAnimation({ active }: { active: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active) { setVisibleCount(0); return; }
    setVisibleCount(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= COPY_LINES.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, [active]);

  const tagColor: Record<string, string> = {
    H1: "#E8C96A", H2: "#E8C96A", INTRO: "#7DD3C0", BODY: "#7DD3C0",
    CTA: "var(--color-rose)", SEO: "#A3E4B4",
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "#141414" }}>
      {/* Editor chrome */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10" style={{ background: "#1A1A1A" }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28CA42" }} />
        <span className="text-white/30 text-xs ml-3">copywriting.txt — Noovira AI</span>
        <span className="ml-auto bg-rose/20 text-rose text-[10px] font-bold px-2 py-0.5 rounded">Copywriting SEO</span>
      </div>
      {/* Content */}
      <div className="p-6 space-y-4" style={{ minHeight: "280px" }}>
        {COPY_LINES.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-start gap-3"
          >
            <span
              className="text-[10px] font-black px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5"
              style={{ background: `${tagColor[line.tag]}22`, color: tagColor[line.tag] }}
            >
              {line.tag}
            </span>
            <span className="text-white/70 text-sm leading-relaxed font-mono">{line.text}</span>
          </motion.div>
        ))}
        {/* Cursor */}
        {visibleCount < COPY_LINES.length && (
          <motion.span
            className="inline-block w-0.5 h-4 bg-rose ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
          />
        )}
        {visibleCount >= COPY_LINES.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mt-2 pt-4 border-t border-white/10"
          >
            <span className="text-[10px] text-white/30">✓ Textes validés et optimisés SEO</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Steps config ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: "01",
    title: "Planification & UX",
    visual: "video" as const,
    video: "/videos/steps/step01.mp4",
    image: "",
    label: "Stratégie & Architecture UX",
    text: [
      "La première étape est la plus importante : comprendre le parcours de vos visiteurs.",
      "Quelles questions ont-ils en arrivant ? Quelles objections faut-il lever ? Comment leur inspirer confiance immédiatement ?",
      "Nous répondons à toutes ces questions et posons les bases solides de votre site.",
    ],
  },
  {
    id: "02",
    title: "Design Visuel",
    visual: "slider" as const,
    video: "",
    image: "",
    label: "Maquettes Desktop & Mobile",
    text: [
      "En fonction de votre activité et de vos clients cibles, nous explorons les directions visuelles qui inspirent le plus confiance.",
      "Nous vous proposons des maquettes desktop + mobile et n'avançons qu'après votre validation complète.",
    ],
  },
  {
    id: "03",
    title: "Rédaction des Textes",
    visual: "text" as const,
    video: "",
    image: "",
    label: "Copywriting SEO",
    text: [
      "La clé d'un bon texte web, c'est la clarté et la concision.",
      "Nous rédigeons l'ensemble des textes en français — accroche, services, zones d'intervention, appels à l'action. Optimisés SEO dès le départ.",
    ],
  },
  {
    id: "04",
    title: "Développement & Tests",
    visual: "video" as const,
    video: "/videos/steps/step04.mp4",
    image: "",
    label: "Code · Performance · Mobile",
    text: [
      "On intègre le design approuvé, on branche les formulaires de contact, on configure l'hébergement, le SSL et votre nom de domaine.",
      "Chaque page est testée sur desktop, tablette et mobile. Vitesse PageSpeed optimisée.",
    ],
  },
  {
    id: "05",
    title: "Lancement & Trafic",
    visual: "image" as const,
    video: "",
    image: "/results/r1.webp",
    label: "+609% clics · client réel",
    text: [
      "Une fois votre site en ligne, il est temps d'envoyer des visiteurs dessus.",
      "Nous configurons votre fiche Google Business, soumettons votre site à Google, et lançons vos premières campagnes.",
    ],
  },
];

// ─── Visual switcher ──────────────────────────────────────────────────────────
function StepVisual({ step, active, priority = false }: { step: typeof STEPS[0]; active: boolean; priority?: boolean }) {
  if (step.visual === "slider") return <BeforeAfterSlider />;
  if (step.visual === "text")   return <TextAnimation active={active} />;
  if (step.visual === "image")  return <ImageFrame src={step.image ?? ""} label={step.label} />;
  return <BrowserFrame video={step.video} label={step.label} priority={priority} />;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Process() {
  const [open, setOpen] = useState<string>("01");
  const activeStep = STEPS.find((s) => s.id === open) ?? STEPS[0];

  return (
    <section className="section-dark py-20 lg:py-28 overflow-hidden" id="processus">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="font-heading text-text-light tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 300 }}
          >
            Découvrez<br />
            <span style={{ fontWeight: 800 }}>notre process</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">

          {/* LEFT — accordion */}
          <div>
            <div className="border-t border-white/10">
              {STEPS.map((s) => {
                const isOpen = open === s.id;
                return (
                  <div key={s.id} className="border-b border-white/10">
                    <button onClick={() => setOpen(s.id)} className="w-full flex items-center gap-5 py-6 text-left">
                      <span className="font-heading font-bold flex-shrink-0 w-9 transition-colors text-base"
                        style={{ color: isOpen ? "var(--color-rose)" : "rgba(255,255,255,0.2)" }}>
                        {s.id}
                      </span>
                      <span className="font-heading font-bold flex-1 transition-colors"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: isOpen ? "#fff" : "rgba(255,255,255,0.55)" }}>
                        {s.title}
                      </span>
                      <span className="w-2 h-2 rounded-full flex-shrink-0 transition-all"
                        style={{ background: isOpen ? "var(--color-rose)" : "rgba(255,255,255,0.15)", transform: isOpen ? "scale(1.4)" : "scale(1)" }} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-14 space-y-4">
                            <div className="lg:hidden mb-5">
                              <StepVisual step={s} active={isOpen} />
                            </div>
                            {s.text.map((p, i) => (
                              <p key={i} className="text-text-light/55 text-sm leading-relaxed">{p}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href="/contact" className="inline-flex items-center gap-2 bg-rose text-dark px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#F0F0F0] transition-all">
                Démarrer votre projet <ArrowUpRight size={14} />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 text-text-light/50 px-7 py-3.5 rounded-full font-semibold text-sm hover:text-text-light transition-colors">
                Voir nos réalisations
              </a>
            </div>
          </div>

          {/* RIGHT — sticky visual */}
          <div className="hidden lg:block lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div key={activeStep.id}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <StepVisual step={activeStep} active={true} priority={true} />

                <div className="flex items-center gap-3 mt-5 px-1">
                  {STEPS.map((s) => (
                    <button key={s.id} onClick={() => setOpen(s.id)}
                      className="transition-all rounded-full"
                      style={{ width: open === s.id ? "32px" : "8px", height: "8px",
                        background: open === s.id ? "var(--color-rose)" : "rgba(255,255,255,0.2)" }} />
                  ))}
                  <span className="text-text-light/30 text-xs ml-auto">
                    Étape {activeStep.id} / 0{STEPS.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
