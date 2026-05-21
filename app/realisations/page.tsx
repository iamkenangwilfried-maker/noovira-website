import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Nos Réalisations | Noovira AI — Sites Web Artisans & BTP",
  description:
    "Découvrez les sites web créés par Noovira pour des artisans et PMEs du bâtiment en Suisse romande. Couverture, rénovation, charpente, électricité.",
};

function shot(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=700&h=480`;
}

export default function RealisationsPage() {
  const COL_A = PROJECTS.slice(0, Math.ceil(PROJECTS.length / 2));
  const COL_B = PROJECTS.slice(Math.ceil(PROJECTS.length / 2));

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="section-dark pt-28 pb-16 lg:pt-40 lg:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="font-heading text-text-light leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Sites Web Que Nous{" "}
            <span className="font-black">Avons Créés</span>
          </h1>
          <p className="text-text-light/45 text-base max-w-xl mx-auto">
            {PROJECTS.length}+ sites livrés pour des artisans et PMEs du bâtiment en Suisse romande.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <a
                key={project.slug}
                href={`/realisations/${project.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-dark block"
                style={{ height: "360px" }}
              >
                {/* Screenshot */}
                <img
                  src={shot(project.url)}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/5" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                    {project.category}
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <h3
                      className="font-heading font-bold text-white leading-tight"
                      style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-beige flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
