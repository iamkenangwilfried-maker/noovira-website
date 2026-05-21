"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

/**
 * Case Study page — Sher Agency exact clone:
 *
 * §1 HERO (dark):   Large thin title → bold "Website Design" → <hr>
 * §2 THE WEBSITE:   Heading + "See It Live ↗" | main video autoplay + 5-thumb strip
 * §3 THE PROCESS:   4 alternating text-left / video-right rows (hover to play)
 * §4 MORE PROJECTS: Sticky-left heading + 2-col video-hover grid
 */

function shot(url: string, w = 900, h = 600) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

const TOTAL_VIDEOS = 5; // 01.mp4 → 05.mp4 per project

interface Props {
  project: Project;
  otherProjects: Project[];
}

/* ── Sub-components with their own refs ── */

/** Thumbnail in the strip below the main video */
function VideoThumb({
  slug, index, active, onClick,
}: { slug: string; index: number; active: boolean; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <button
      onClick={onClick}
      className="relative rounded-xl overflow-hidden flex-shrink-0"
      style={{
        aspectRatio: "16/9",
        outline: active ? "2px solid #C9BAAC" : "2px solid transparent",
        outlineOffset: "2px",
      }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
    >
      <video
        ref={ref}
        src={`/videos/${slug}/${String(index + 1).padStart(2, "0")}.mp4`}
        muted playsInline loop preload="metadata"
        className="w-full h-full object-cover object-top"
      />
    </button>
  );
}

/** One row in The Process section — video plays on hover */
function ProcessRow({
  slug, videoIndex, text, label, flip,
}: { slug: string; videoIndex: number; text: string; label: string; flip: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const num = String(videoIndex).padStart(2, "0");
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <div className={flip ? "lg:order-2" : ""}>
        <div className="text-xs font-bold uppercase tracking-widest text-beige/60 mb-4">
          {num}
        </div>
        <p className="text-text-light/70 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}>
          {text}
        </p>
        <div className="mt-6 text-text-light font-heading font-black text-lg">{label}</div>
      </div>

      {/* Video */}
      <div
        className={`rounded-2xl overflow-hidden border border-white/10 cursor-pointer ${flip ? "lg:order-1" : ""}`}
        style={{ aspectRatio: "16/10", background: "#111" }}
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
      >
        <video
          ref={ref}
          src={`/videos/${slug}/${String(videoIndex + 1).padStart(2, "0")}.mp4`}
          muted playsInline loop preload="none"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/** Card in the "Websites We Created" grid — video plays on hover */
function VideoCard({ project }: { project: Project }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <a
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-dark block"
      style={{ height: "380px" }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } }}
    >
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
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
          {project.category}
        </div>
        <div className="flex items-end justify-between gap-3">
          <h3 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
            {project.title}
          </h3>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-beige text-white text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Voir <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Main export ── */

export default function CaseStudyClient({ project, otherProjects }: Props) {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(0);

  function switchVideo(idx: number) {
    setActiveVideo(idx);
    const v = mainVideoRef.current;
    if (v) {
      v.src = `/videos/${project.slug}/${String(idx + 1).padStart(2, "0")}.mp4`;
      v.load();
      v.play().catch(() => {});
    }
  }

  const processRows = [
    {
      text: `Nous avons commencé par une analyse approfondie du marché ${project.category.toLowerCase()} en Suisse romande — concurrents, mots-clés à fort potentiel, et positionnement différenciant pour ${project.title}.`,
      label: "Stratégie & Analyse",
    },
    {
      text: "Nous avons présenté plusieurs concepts de design, en testant différentes directions visuelles pour trouver celle qui reflète le mieux l'identité de l'entreprise et convertit le mieux les visiteurs.",
      label: "Concepts & Maquettes",
    },
    {
      text: "Une fois la direction validée, nous avons designé toutes les pages — accueil, services, réalisations, contact — avec une attention particulière à la hiérarchie visuelle et aux appels à l'action.",
      label: "Design Complet",
    },
    {
      text: "Enfin, nous avons développé et lancé le site, optimisé pour les Core Web Vitals, le référencement local et les conversions mobiles. Livraison en moins de 3 semaines.",
      label: "Développement & Lancement",
    },
  ];

  return (
    <>
      {/* ── §1: HERO ── */}
      <section className="section-dark" style={{ paddingTop: "120px", paddingBottom: "0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1
            className="font-heading text-text-light tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)", fontWeight: 300, marginBottom: "0.15em" }}
          >
            {project.title}
          </h1>
          <p
            className="font-heading text-text-light tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)", fontWeight: 900, lineHeight: 1, marginBottom: "clamp(2rem, 5vw, 4rem)" }}
          >
            Website Design
          </p>
          <div style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }} />
        </div>
      </section>

      {/* ── §2: THE WEBSITE ── */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-14">
            <h2
              className="font-heading font-black text-text-light leading-[1.0]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              The Website
            </h2>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-text-light/30 text-text-light px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-dark hover:border-white transition-all"
            >
              See It Live <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Main video */}
          <div
            className="rounded-2xl overflow-hidden border border-white/10 mb-4"
            style={{ background: "#111", aspectRatio: "16/9" }}
          >
            <video
              ref={mainVideoRef}
              src={`/videos/${project.slug}/01.mp4`}
              autoPlay muted loop playsInline
              poster={shot(project.url, 1200, 675)}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Thumbnail strip — all 5 videos, play on hover, click to switch main */}
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: TOTAL_VIDEOS }).map((_, i) => (
              <VideoThumb
                key={i}
                slug={project.slug}
                index={i}
                active={activeVideo === i}
                onClick={() => switchVideo(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ borderTop: "1px solid rgba(247,244,239,0.10)" }} />
      </div>

      {/* ── §3: THE PROCESS ── */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2
            className="font-heading font-black text-text-light mb-16 lg:mb-20"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            The Process
          </h2>

          <div className="flex flex-col gap-20 lg:gap-28">
            {processRows.map((row, i) => (
              <ProcessRow
                key={i}
                slug={project.slug}
                videoIndex={i + 1}   // videos 02–05 for the 4 rows
                text={row.text}
                label={row.label}
                flip={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── §4: WEBSITES WE CREATED ── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

            {/* Sticky left */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="font-heading text-dark leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Websites<br />We <span className="font-black">Created</span>
              </h2>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 border border-dark/20 text-dark px-6 py-3 rounded-full font-semibold text-sm hover:bg-dark hover:text-white hover:border-dark transition-all"
              >
                More Case Studies <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 2-col grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {otherProjects.map((p) => (
                <VideoCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
