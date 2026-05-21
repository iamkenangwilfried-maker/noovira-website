import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { PROJECTS, getProject, getAdjacentProjects } from "@/lib/projects";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Réalisation Noovira AI`,
    description: project.description,
  };
}

function shot(url: string, w = 800, h = 520) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);
  const otherProjects = PROJECTS.filter((p) => p.slug !== params.slug).slice(0, 6);

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="section-dark pt-28 pb-20 lg:pt-40 lg:pb-28"
        style={{ background: project.color || "#1C1C1C" }}
      >
        <div className="max-w-7xl mx-auto px-6">

          <a
            href="/nos-realisations"
            className="inline-flex items-center gap-2 text-white/50 text-sm font-semibold mb-10 hover:text-white transition-colors"
          >
            <ArrowLeft size={15} /> Toutes nos réalisations
          </a>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {project.category}
              </div>
              <h1
                className="font-heading font-black text-white leading-[1.0] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {project.title}
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
                {project.description}
              </p>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-beige text-white px-7 py-4 rounded-full font-bold text-base hover:bg-white hover:text-dark transition-all"
              >
                Voir le site en ligne <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Hero screenshot */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={shot(project.url, 900, 580)}
                alt={project.title}
                className="w-full h-auto block"
                style={{ background: "#222" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-page screenshot gallery ── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-muted mb-3">Aperçu du site</div>
            <h2
              className="font-heading font-bold text-dark leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Le Site en Détail
            </h2>
          </div>

          <div className="space-y-6">
            {/* Main screenshot — tall */}
            <div
              className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
              style={{ background: "#F5F5F5" }}
            >
              <img
                src={shot(project.url, 1200, 900)}
                alt={`${project.title} — page d'accueil`}
                className="w-full block"
                style={{ minHeight: "400px", objectFit: "cover", objectPosition: "top" }}
              />
            </div>

            {/* Two smaller screenshots side by side */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md" style={{ background: "#F5F5F5" }}>
                <img
                  src={shot(project.url, 600, 420)}
                  alt={`${project.title} — section services`}
                  className="w-full block"
                  style={{ minHeight: "240px", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-md" style={{ background: "#F5F5F5" }}>
                <img
                  src={shot(project.url, 600, 420)}
                  alt={`${project.title} — section contact`}
                  className="w-full block"
                  style={{ minHeight: "240px", objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Process ── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-xs font-bold uppercase tracking-widest text-beige/60 mb-4">Notre Approche</div>
          <h2
            className="font-heading font-bold text-text-light leading-tight mb-16"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Comment nous avons<br />
            <span className="font-black">abordé ce projet</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Stratégie",
                text: `Analyse du marché local ${project.category.toLowerCase()}, identification des mots-clés à fort potentiel, définition du positionnement différenciant.`,
              },
              {
                num: "02",
                title: "Design",
                text: "Création d'une maquette sur mesure reflétant l'identité de l'entreprise, validée en 48h, optimisée pour la conversion.",
              },
              {
                num: "03",
                title: "Développement",
                text: project.process,
              },
            ].map((s) => (
              <div key={s.num} className="border-t border-white/10 pt-8">
                <div className="text-beige font-black font-heading text-4xl mb-4 opacity-30">{s.num}</div>
                <h3 className="font-heading font-bold text-text-light text-xl mb-3">{s.title}</h3>
                <p className="text-text-light/50 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results / Stars ── */}
      <section className="section-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-8 h-8 fill-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="font-heading font-bold text-dark text-2xl mb-2">
            "Livré en 2 semaines, exactement ce qu'on voulait."
          </p>
          <p className="text-muted text-sm">Client satisfait · {project.category}</p>
        </div>
      </section>

      {/* ── More case studies ── */}
      <section className="section-white py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="font-heading font-bold text-dark mb-10"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Autres <span className="font-black">Réalisations</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((p) => (
              <a
                key={p.slug}
                href={`/realisations/${p.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-dark block"
                style={{ height: "280px" }}
              >
                <img
                  src={shot(p.url, 600, 400)}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{p.category}</div>
                  <div className="font-heading font-bold text-white text-lg flex items-center justify-between">
                    {p.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="section-dark py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {prev && (
            <a
              href={`/realisations/${prev.slug}`}
              className="flex items-center gap-3 text-text-light/50 hover:text-text-light transition-colors group"
            >
              <ChevronLeft size={20} />
              <div>
                <div className="text-xs uppercase tracking-widest text-text-light/30 mb-1">Précédent</div>
                <div className="font-heading font-bold text-sm group-hover:text-beige transition-colors">{prev.title}</div>
              </div>
            </a>
          )}
          <div className="flex-1" />
          {next && (
            <a
              href={`/realisations/${next.slug}`}
              className="flex items-center gap-3 text-text-light/50 hover:text-text-light transition-colors group text-right"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-text-light/30 mb-1">Suivant</div>
                <div className="font-heading font-bold text-sm group-hover:text-beige transition-colors">{next.title}</div>
              </div>
              <ChevronRight size={20} />
            </a>
          )}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
