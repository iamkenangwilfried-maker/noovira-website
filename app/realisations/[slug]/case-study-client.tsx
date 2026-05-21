"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

/**
 * Case Study — Structure identique à Sher Agency :
 *
 * §1  HERO       Titre fin + "Website Design" gras + <hr>
 * §2  THE WEBSITE  Grille 3 screenshots + vidéo principale
 * §3  THE PROCESS  4 lignes : texte gauche | screenshot+video droite
 * §4  MORE PROJECTS  Sticky gauche + grille 2 col
 */

function shot(url: string, w = 900, h = 600) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

interface Props { project: Project; otherProjects: Project[] }

/* ─── Composants isolés (un seul useRef chacun) ─── */

function ThumbVideo({ slug, index, active, onClick }: {
  slug: string; index: number; active: boolean; onClick: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <button
      onClick={onClick}
      className="relative rounded-xl overflow-hidden"
      style={{ aspectRatio: "16/9", outline: active ? "2px solid #C9BAAC" : "2px solid transparent", outlineOffset: "3px" }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
    >
      {/* Poster toujours visible */}
      <img
        src={shot(slug.replace(/-/g, ""), 400, 225)}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <video
        ref={ref}
        src={`/videos/${slug}/${String(index + 1).padStart(2, "0")}.mp4`}
        muted playsInline loop preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 hover:opacity-100 transition-opacity"
      />
      {active && <div className="absolute inset-0 ring-2 ring-inset ring-beige/60 rounded-xl" />}
    </button>
  );
}

function ProcessBlock({ slug, videoSrc, poster, text, label, flip }: {
  slug: string; videoSrc: string; poster: string;
  text: string; label: string; flip: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* Texte */}
      <div className={flip ? "lg:order-2" : ""}>
        <p className="text-text-light/65 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}>
          {text}
        </p>
        <div className="mt-5 text-text-light font-heading font-extrabold text-xl">{label}</div>
      </div>

      {/* Vidéo de scroll — autoplay en boucle, toujours visible */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-white/10 ${flip ? "lg:order-1" : ""}`}
        style={{ aspectRatio: "16/10", background: "#0a0a0a" }}
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

function OtherCard({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <a
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-dark block"
      style={{ height: "340px" }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
    >
      <img src={shot(project.url, 600, 400)} alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:opacity-0 transition-opacity duration-300" />
      <video ref={ref} src={`/videos/${project.slug}/01.mp4`}
        muted playsInline loop preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10 z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{project.category}</div>
        <div className="flex items-end justify-between gap-3">
          <h3 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>{project.title}</h3>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-beige text-white text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Voir <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─── Page principale ─── */

export default function CaseStudyClient({ project, otherProjects }: Props) {
  const mainRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);

  function switchVideo(i: number) {
    setActive(i);
    const v = mainRef.current;
    if (v) {
      v.src = `/videos/${project.slug}/${String(i + 1).padStart(2, "0")}.mp4`;
      v.load();
      v.play().catch(() => {});
    }
  }

  const PROCESS = [
    {
      text: `Nous avons commencé par une analyse complète du marché ${project.category.toLowerCase()} en Suisse romande — positionnement, mots-clés locaux à fort potentiel et étude des concurrents de ${project.title}.`,
      label: "01 — Stratégie & Analyse",
    },
    {
      text: "Nous avons présenté plusieurs concepts visuels — directions graphiques, typographie, palette de couleurs — pour trouver l'identité qui convertit le mieux.",
      label: "02 — Concepts & Direction créative",
    },
    {
      text: "Une fois le concept validé, nous avons designé l'intégralité des pages : accueil, services, réalisations, contact, avec une hiérarchie visuelle pensée pour la conversion.",
      label: "03 — Design complet",
    },
    {
      text: "Enfin, développement et mise en ligne : site optimisé Core Web Vitals, SEO local, formulaires de devis actifs. Livré en moins de 3 semaines.",
      label: "04 — Développement & Lancement",
    },
  ];

  const posterUrl = shot(project.url, 1200, 675);

  return (
    <>
      {/* ── §1 HERO ── */}
      <section className="section-dark" style={{ paddingTop: "120px", paddingBottom: 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1
            className="font-heading text-text-light tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)", fontWeight: 300, lineHeight: 0.95, marginBottom: "0.12em" }}
          >
            {project.title}
          </h1>
          <p
            className="font-heading text-text-light tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)", fontWeight: 800, lineHeight: 1, marginBottom: "clamp(2rem, 4vw, 4rem)" }}
          >
            Website Design
          </p>
          <div style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }} />
        </div>
      </section>

      {/* ── §2 THE WEBSITE ── */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* En-tête */}
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="font-heading font-extrabold text-text-light leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              The Website
            </h2>
            <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-text-light/30 text-text-light px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-dark hover:border-white transition-all">
              See It Live <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Vidéo principale — autoplay, screenshot visible via poster */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-4 bg-dark"
            style={{ aspectRatio: "16/9" }}>
            <video
              ref={mainRef}
              src={`/videos/${project.slug}/01.mp4`}
              poster={posterUrl}
              autoPlay muted loop playsInline
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bande de 5 vignettes — screenshot par défaut, vidéo au survol */}
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <ThumbVideo key={i} slug={project.slug} index={i} active={active === i} onClick={() => switchVideo(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ borderTop: "1px solid rgba(247,244,239,0.10)" }} />
      </div>

      {/* ── §3 THE PROCESS ── */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="font-heading font-extrabold text-text-light mb-16 lg:mb-24"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
            The Process
          </h2>

          <div className="flex flex-col gap-24 lg:gap-32">
            {PROCESS.map((row, i) => (
              <ProcessBlock
                key={i}
                slug={project.slug}
                videoSrc={`/videos/${project.slug}/${String(i + 1).padStart(2, "0")}.mp4`}
                poster={shot(project.url, 900, 560)}
                text={row.text}
                label={row.label}
                flip={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── §4 MORE PROJECTS ── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-heading text-dark leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Websites<br />We <span className="font-extrabold">Created</span>
              </h2>
              <a href="/realisations"
                className="inline-flex items-center gap-2 border border-dark/20 text-dark px-6 py-3 rounded-full font-semibold text-sm hover:bg-dark hover:text-white hover:border-dark transition-all">
                More Case Studies <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {otherProjects.map(p => <OtherCard key={p.slug} project={p} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
