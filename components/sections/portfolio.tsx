"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Portfolio — Sher Agency "Websites We Created":
 * • White background
 * • LEFT sticky: heading + stats
 * • RIGHT: 2-column staggered grid of cards
 * • Cards: show screenshot at rest, play scroll video on hover
 * • Each card links to /realisations/[slug] (case study page)
 */

function shot(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=700&h=900`;
}

const COL_A = PROJECTS.slice(0, 9);
const COL_B = PROJECTS.slice(9);

function ProjectCard({ project, delay = 0 }: { project: typeof PROJECTS[0]; delay?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.a
      href={`/realisations/${project.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl overflow-hidden bg-dark block cursor-pointer"
      style={{ height: "480px" }}
      onMouseEnter={() => { videoRef.current?.play(); }}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) { v.pause(); v.currentTime = 0; }
      }}
    >
      {/* Static screenshot — visible at rest, fades out on hover */}
      <img
        src={shot(project.url)}
        alt={project.title}
        className="absolute inset-0 w-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
        style={{ height: "130%" }}
        loading="lazy"
      />

      {/* Video scroll recording — invisible at rest, fades in on hover */}
      <video
        ref={videoRef}
        src={`/videos/${project.slug}/01.mp4`}
        muted
        playsInline
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/5" />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
          {project.category}
        </div>
        <h3
          className="font-heading font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 bg-beige text-white text-xs font-bold px-4 py-2 rounded-full group-hover:bg-white group-hover:text-dark transition-all">
          Voir le projet <ArrowUpRight size={12} />
        </span>
      </div>
    </motion.a>
  );
}

export default function Portfolio() {
  return (
    <section className="section-white py-20 lg:py-28" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Title + CTA (sticky) ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-heading text-dark leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Sites Web<br />Que Nous <span className="font-black">Avons Créés</span>
              </h2>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 bg-beige text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-dark hover:text-white transition-colors"
              >
                Toutes nos réalisations <ArrowUpRight size={14} />
              </a>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-border flex gap-8">
                <div>
                  <div className="font-heading font-black text-2xl text-dark">{PROJECTS.length}+</div>
                  <div className="text-[11px] text-muted uppercase tracking-widest mt-0.5">Sites créés</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-dark">5.0 ★</div>
                  <div className="text-[11px] text-muted uppercase tracking-widest mt-0.5">Note Google</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Two staggered columns ── */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Column A */}
            <div className="flex flex-col gap-5">
              {COL_A.map((p, i) => (
                <ProjectCard key={p.slug} project={p} delay={i * 0.04} />
              ))}
            </div>
            {/* Column B — offset down */}
            <div className="flex flex-col gap-5 sm:mt-12">
              {COL_B.map((p, i) => (
                <ProjectCard key={p.slug} project={p} delay={i * 0.04 + 0.1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
