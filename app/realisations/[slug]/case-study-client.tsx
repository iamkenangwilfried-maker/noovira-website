"use client";
import { useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

/**
 * Case Study — style Sher Agency
 * §1  HERO           Titre fin + sous-titre gras + <hr>
 * §2  LE SITE        Carousel large format portrait (2 items visibles) + flèches
 * §3  NOTRE PROCESSUS  Texte GAUCHE / vidéo DROITE
 * §4  NOS RÉALISATIONS  Sticky gauche + grille 2 colonnes
 */

function shot(url: string, w = 1200, h = 750) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

interface Props { project: Project; otherProjects: Project[] }

/* ─── §3 ProcessRow ─── */
function ProcessRow({
  num, text, label, videoSrc, poster,
}: {
  num: string; text: string; label: string; videoSrc: string; poster: string;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="pt-2">
        <div
          className="font-heading text-text-light/20 font-extrabold mb-6 leading-none select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
        >
          {num}
        </div>
        <p className="text-text-light/70 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}>
          {text}
        </p>
        <div className="text-text-light font-heading font-extrabold text-lg mt-6">{label}</div>
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "#0a0a0a", aspectRatio: "16/10" }}>
        <video src={videoSrc} poster={poster} autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}

/* ─── §4 OtherCard ─── */
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
      <img src={shot(project.url, 600, 400)} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:opacity-0 transition-opacity duration-300" />
      <video ref={ref} src={`/videos/${project.slug}/01.mp4`} muted playsInline loop preload="none" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.05) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col gap-4">
        <h3 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-2 bg-white text-dark text-sm font-bold px-5 py-2.5 rounded-full w-fit opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          Voir le projet <ArrowUpRight size={13} />
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

  // 5 vidéos pour le carousel
  const videos = Array.from({ length: 5 }, (_, i) =>
    `/videos/${project.slug}/${String(i + 1).padStart(2, "0")}.mp4`
  );

  const sliderRef = useRef<HTMLDivElement>(null);

  function slidePrev() {
    if (!sliderRef.current) return;
    // chaque item = ~52vw → on scroll d'environ 1 carte
    const itemW = Math.min(window.innerWidth * 0.52, 720) + 16;
    sliderRef.current.scrollBy({ left: -itemW, behavior: "smooth" });
  }
  function slideNext() {
    if (!sliderRef.current) return;
    const itemW = Math.min(window.innerWidth * 0.52, 720) + 16;
    sliderRef.current.scrollBy({ left: itemW, behavior: "smooth" });
  }

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
          <h1
            className="font-heading text-text-light tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)", fontWeight: 300, lineHeight: 0.95, marginBottom: "0.1em" }}
          >
            {project.title}
          </h1>
          <p
            className="font-heading text-text-light tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)", fontWeight: 800, lineHeight: 1, marginBottom: "clamp(2rem, 4vw, 4rem)" }}
          >
            Création de Site Web
          </p>
          <div style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }} />
        </div>
      </section>

      {/* ════════════════════════════════
          §2  LE SITE
          Carousel large format (2 items + peek du 3e) — flèches en bas
      ════════════════════════════════ */}
      <section className="section-dark pt-16 lg:pt-24 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
          <div className="flex items-end justify-between gap-6">
            <h2
              className="font-heading font-extrabold text-text-light leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Le Site
            </h2>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-rose text-dark px-6 py-3 rounded-full text-sm font-bold hover:bg-[#F0F0F0] hover:text-dark transition-all"
            >
              Voir en Direct <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Carousel — items 45% de la largeur container, format portrait 4:5 */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll hide-scrollbar"
          style={{
            paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 48px))",
            paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 48px))",
          }}
        >
          {videos.map((src, i) => (
            <div
              key={i}
              className="flex-none rounded-2xl overflow-hidden border border-white/10"
              style={{
                width: "clamp(320px, 52vw, 720px)",
                background: "#0a0a0a",
                aspectRatio: "16/10",
              }}
            >
              <video
                src={src}
                poster={poster}
                autoPlay muted loop playsInline preload="auto"
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Flèches — en dessous du carousel */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 flex gap-3">
          <button
            onClick={slidePrev}
            aria-label="Précédent"
            className="w-11 h-11 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-[#F0F0F0] hover:text-dark hover:border-white transition-all"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={slideNext}
            aria-label="Suivant"
            className="w-11 h-11 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-[#F0F0F0] hover:text-dark hover:border-white transition-all"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(247,244,239,0.08)" }} />

      {/* ════════════════════════════════
          §3  NOTRE PROCESSUS
      ════════════════════════════════ */}
      <section className="section-dark pt-20 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2
            className="font-heading font-extrabold text-text-light mb-20 lg:mb-28"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Notre Processus
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
          §4  NOS RÉALISATIONS
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
                Sites Web<br />que nous avons <span className="font-extrabold">créés</span>
              </h2>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 bg-rose text-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F0F0F0] hover:text-dark transition-all"
              >
                Voir toutes les réalisations <ArrowUpRight size={14} />
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
