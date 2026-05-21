"use client";
import { useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

/**
 * Case Study — structure identique à Sher Agency
 *
 * §1  HERO           Titre fin + "Website Design" gras + <hr> full-width
 * §2  THE WEBSITE    "The Website" + "See It Live" | carousel horizontal 3 colonnes + ← →
 * §3  THE PROCESS    "The Process" | 4 lignes texte GAUCHE / vidéo DROITE
 * §4  WEBSITES WE CREATED  sticky gauche + grille 2 colonnes de cartes sombres
 */

function shot(url: string, w = 1200, h = 750) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

interface Props { project: Project; otherProjects: Project[] }

/* ─── §3 ProcessRow — texte GAUCHE / vidéo DROITE (jamais inversé) ─── */
function ProcessRow({
  num, text, label, videoSrc, poster,
}: {
  num: string; text: string; label: string; videoSrc: string; poster: string;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* Texte — toujours à gauche */}
      <div className="pt-2">
        <div
          className="font-heading text-text-light/20 font-extrabold mb-6 leading-none select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
        >
          {num}
        </div>
        <p
          className="text-text-light/70 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
        >
          {text}
        </p>
        <div className="text-text-light font-heading font-extrabold text-lg mt-6">{label}</div>
      </div>

      {/* Vidéo — toujours à droite, autoPlay */}
      <div
        className="rounded-2xl overflow-hidden border border-white/10"
        style={{ background: "#0a0a0a", aspectRatio: "16/10" }}
      >
        <video
          src={videoSrc}
          poster={poster}
          autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/* ─── §4 OtherCard — screenshot au repos, vidéo au survol ─── */
function OtherCard({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <a
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden block"
      style={{ height: "380px", background: "#111" }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => {
        const v = ref.current;
        if (v) { v.pause(); v.currentTime = 0; }
      }}
    >
      {/* Screenshot au repos */}
      <img
        src={shot(project.url, 600, 400)}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:opacity-0 transition-opacity duration-300"
      />
      {/* Vidéo au survol */}
      <video
        ref={ref}
        src={`/videos/${project.slug}/01.mp4`}
        muted playsInline loop preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Gradient sombre vers le bas */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.05) 100%)" }}
      />
      {/* Contenu */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col gap-4">
        <h3
          className="font-heading font-bold text-white leading-tight"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-2 bg-white text-dark text-sm font-bold px-5 py-2.5 rounded-full w-fit opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          View Project <ArrowUpRight size={13} />
        </span>
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE PRINCIPALE
═══════════════════════════════════════════════════════════ */
export default function CaseStudyClient({ project, otherProjects }: Props) {

  const poster = shot(project.url);

  // §2 — 5 vidéos pour le carousel
  const videos = Array.from({ length: 5 }, (_, i) =>
    `/videos/${project.slug}/${String(i + 1).padStart(2, "0")}.mp4`
  );

  // §2 — ref pour scrollBy
  const sliderRef = useRef<HTMLDivElement>(null);

  function slidePrev() {
    if (!sliderRef.current) return;
    // largeur d'un item = (container - 2 gaps de 16px) / 3
    const itemW = (sliderRef.current.clientWidth - 32) / 3;
    sliderRef.current.scrollBy({ left: -(itemW + 16), behavior: "smooth" });
  }
  function slideNext() {
    if (!sliderRef.current) return;
    const itemW = (sliderRef.current.clientWidth - 32) / 3;
    sliderRef.current.scrollBy({ left: itemW + 16, behavior: "smooth" });
  }

  // §3 — 4 étapes du process
  const processSteps = [
    {
      num: "01",
      text: `Notre stratégie : apporter un message clair sur l'activité de ${project.title}, instaurer la confiance avec le visiteur, et maximiser les conversions. Analyse complète du marché ${project.category.toLowerCase()} en Suisse romande — positionnement, mots-clés locaux, concurrents.`,
      label: "Stratégie & Analyse",
      video: `/videos/${project.slug}/02.mp4`,
    },
    {
      num: "02",
      text: "Nous avons présenté plusieurs concepts pour le look & feel du site. Directions graphiques, typographies et palettes de couleurs testées jusqu'à trouver l'identité qui reflète le mieux l'entreprise et convertit le mieux les visiteurs.",
      label: "Concepts & Direction créative",
      video: `/videos/${project.slug}/03.mp4`,
    },
    {
      num: "03",
      text: "Ensuite nous avons designé l'intégralité des pages — accueil, services, réalisations, contact — avec une hiérarchie visuelle pensée pour guider le visiteur vers la prise de contact.",
      label: "Design complet",
      video: `/videos/${project.slug}/04.mp4`,
    },
    {
      num: "04",
      text: "Enfin, nous avons développé et mis en ligne le site, optimisé pour les Core Web Vitals, le SEO local, et les conversions mobiles. Livré en moins de 3 semaines.",
      label: "Développement & Lancement",
      video: `/videos/${project.slug}/05.mp4`,
    },
  ];

  return (
    <>
      {/* ════════════════════════════════
          §1  HERO
      ════════════════════════════════ */}
      <section className="section-dark" style={{ paddingTop: "120px", paddingBottom: 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Titre fin */}
          <h1
            className="font-heading text-text-light tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 8rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              marginBottom: "0.1em",
            }}
          >
            {project.title}
          </h1>

          {/* "Website Design" gras */}
          <p
            className="font-heading text-text-light tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 8rem)",
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: "clamp(2rem, 4vw, 4rem)",
            }}
          >
            Website Design
          </p>

          {/* Séparateur full-width */}
          <div style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }} />
        </div>
      </section>

      {/* ════════════════════════════════
          §2  THE WEBSITE
          Carousel horizontal — 3 items visibles + flèches ← →
      ════════════════════════════════ */}
      <section className="section-dark pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Ligne en-tête */}
          <div className="flex items-end justify-between gap-6 mb-8 lg:mb-10">
            <h2
              className="font-heading font-extrabold text-text-light leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              The Website
            </h2>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-text-light/30 text-text-light px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-dark hover:border-white transition-all"
            >
              See It Live <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Flèches de navigation */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={slidePrev}
              aria-label="Précédent"
              className="w-10 h-10 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-white hover:text-dark hover:border-white transition-all"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={slideNext}
              aria-label="Suivant"
              className="w-10 h-10 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-white hover:text-dark hover:border-white transition-all"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Carousel — overflow-x scroll, scrollbar cachée */}
          <div
            ref={sliderRef}
            className="flex gap-4 hide-scrollbar"
            style={{ overflowX: "scroll" }}
          >
            {videos.map((src, i) => (
              <div
                key={i}
                className="flex-none rounded-2xl overflow-hidden border border-white/10"
                style={{
                  width: "calc((100% - 32px) / 3)",
                  background: "#0a0a0a",
                }}
              >
                <video
                  src={src}
                  poster={poster}
                  autoPlay muted loop playsInline preload="auto"
                  className="w-full block object-cover object-top"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Séparateur */}
      <div style={{ borderTop: "1px solid rgba(247,244,239,0.08)" }} />

      {/* ════════════════════════════════
          §3  THE PROCESS
          Texte GAUCHE / Vidéo DROITE — toujours
      ════════════════════════════════ */}
      <section className="section-dark pt-20 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2
            className="font-heading font-extrabold text-text-light mb-20 lg:mb-28"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            The Process
          </h2>

          <div className="flex flex-col gap-24 lg:gap-32">
            {processSteps.map((step) => (
              <ProcessRow
                key={step.num}
                num={step.num}
                text={step.text}
                label={step.label}
                videoSrc={step.video}
                poster={poster}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          §4  WEBSITES WE CREATED
          Sticky gauche + grille 2 colonnes sombres
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

            {/* Sticky gauche */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="font-heading text-text-light leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Websites<br />We <span className="font-extrabold">Created</span>
              </h2>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 border border-text-light/20 text-text-light px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-dark hover:border-white transition-all"
              >
                More Case Studies <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Grille 2 colonnes */}
            <div className="grid sm:grid-cols-2 gap-5">
              {otherProjects.map(p => <OtherCard key={p.slug} project={p} />)}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
