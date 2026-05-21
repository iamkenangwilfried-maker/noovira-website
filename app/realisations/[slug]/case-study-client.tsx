"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

/**
 * Case Study — Structure 100% identique à Sher Agency
 * Source vérifiée sur sheragency.com/case-study/majestic-painting
 *
 * §1  HERO           Titre fin + "Website Design" gras + <hr> full-width
 * §2  THE WEBSITE    Heading + "See It Live" | 5 vidéos empilées full-width
 * §3  THE PROCESS    "The Process" | 4 lignes : texte GAUCHE / vidéo DROITE (fixe)
 * §4  MORE PROJECTS  Sticky gauche + grille 2 colonnes
 * §5  FinalCTA + Footer (dans page.tsx)
 */

function shot(url: string, w = 1200, h = 750) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

interface Props { project: Project; otherProjects: Project[] }

/* ─── Vidéo empilée §2 — autoplay, pleine largeur ─── */
function StackedVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 w-full" style={{ background: "#0a0a0a" }}>
      <video
        src={src}
        poster={poster}
        autoPlay muted loop playsInline preload="auto"
        className="w-full block object-cover object-top"
        style={{ aspectRatio: "16/10" }}
        aria-label={label}
      />
    </div>
  );
}

/* ─── Ligne process §3 — texte GAUCHE / vidéo DROITE (fixe, pas alterné) ─── */
function ProcessRow({ num, text, label, videoSrc, poster }: {
  num: string; text: string; label: string; videoSrc: string; poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* Texte — TOUJOURS à gauche */}
      <div className="pt-2">
        <div
          className="font-heading text-text-light/20 font-extrabold mb-6 leading-none select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
        >
          {num}
        </div>
        <p
          className="text-text-light/70 leading-relaxed mb-4"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
        >
          {text}
        </p>
        <div className="text-text-light font-heading font-extrabold text-lg mt-6">{label}</div>
      </div>

      {/* Vidéo — TOUJOURS à droite, autoplay */}
      <div
        className="rounded-2xl overflow-hidden border border-white/10"
        style={{ background: "#0a0a0a", aspectRatio: "16/10" }}
      >
        <video
          ref={ref}
          src={videoSrc}
          poster={poster}
          autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/* ─── Carte §4 grille "More Projects" ─── */
function OtherCard({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <a
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-dark block"
      style={{ height: "320px" }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
    >
      {/* Screenshot au repos, vidéo au survol */}
      <img
        src={shot(project.url, 600, 400)}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:opacity-0 transition-opacity duration-300"
      />
      <video
        ref={ref}
        src={`/videos/${project.slug}/01.mp4`}
        muted playsInline loop preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/5 z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5">
          {project.category}
        </div>
        <div className="flex items-end justify-between gap-3">
          <h3 className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            {project.title}
          </h3>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-beige text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Voir <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE PRINCIPALE
═══════════════════════════════════════════════════ */
export default function CaseStudyClient({ project, otherProjects }: Props) {

  const poster = shot(project.url);

  /* 5 vidéos pour §2 — une par page du site */
  const websiteVideos = [1, 2, 3, 4, 5].map(n => ({
    src: `/videos/${project.slug}/${String(n).padStart(2, "0")}.mp4`,
    label: `${project.title} — vue ${n}`,
  }));

  /* 4 étapes du process pour §3 */
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

          {/* "Website Design" en gras */}
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
          5 vidéos empilées verticalement
      ════════════════════════════════ */}
      <section className="section-dark pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Ligne en-tête */}
          <div className="flex items-end justify-between gap-6 mb-12 lg:mb-16">
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

          {/* 5 vidéos empilées, chacune pleine largeur — identique à Sher */}
          <div className="flex flex-col gap-5">
            {websiteVideos.map((v, i) => (
              <StackedVideo key={i} src={v.src} poster={poster} label={v.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div style={{ borderTop: "1px solid rgba(247,244,239,0.08)" }} />

      {/* ════════════════════════════════
          §3  THE PROCESS
          Texte GAUCHE / Vidéo DROITE — fixe (pas alterné)
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
      ════════════════════════════════ */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

            {/* Sticky gauche */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="font-heading text-dark leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Websites<br />We <span className="font-extrabold">Created</span>
              </h2>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 border border-dark/20 text-dark px-6 py-3 rounded-full font-semibold text-sm hover:bg-dark hover:text-white hover:border-dark transition-all"
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
