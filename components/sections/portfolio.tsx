"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Portfolio — exact clone of Sher Agency's "Websites We Created" section:
 * • Left column: title + CTA buttons (sticky)
 * • Right columns: full-page website screenshots
 * • On hover: image slowly scrolls down revealing the full website
 *   (CSS: transition: transform 5s ease-in-out → translateY(calc(-100% + 450px)))
 */

const PROJECTS = [
  { url: "b3constructioncorp.com",       title: "B3 Construction Corp",     category: "Construction Générale"      },
  { url: "tekconstructiongroup.com",      title: "TEK Construction Group",   category: "Construction Générale"      },
  { url: "cr-design-remodel.webflow.io", title: "CR Design & Remodel",      category: "Rénovation & Design"        },
  { url: "candmhomebuilders.com",        title: "C&M Home Builders",        category: "Construction Résidentielle" },
  { url: "schmittcompany.com",           title: "Schmitt Company",          category: "Construction Commerciale"   },
  { url: "qualmax.co.nz",                title: "Qualmax",                  category: "Construction & Rénovation"  },
  { url: "42parallelconstruction.com",   title: "42 Parallel Construction", category: "Construction Générale"      },
  { url: "b2builders.com",               title: "B2 Builders",              category: "Construction Résidentielle" },
  { url: "ironstarconstruction.com",     title: "Iron Star Construction",   category: "Construction Industrielle"  },
  { url: "skender.com",                  title: "Skender",                  category: "Construction Commerciale"   },
  { url: "leopardo.com",                 title: "Leopardo",                 category: "Construction & Design"      },
  { url: "clunegc.com",                  title: "Clune Construction",       category: "Construction Commerciale"   },
  { url: "fhpaschen.com",                title: "FH Paschen",               category: "Infrastructure & BTP"       },
  { url: "jdgconstructions.com.au",      title: "JDG Constructions",        category: "Construction Résidentielle" },
  { url: "5starroofcare.co.uk",          title: "5 Star Roof Care",         category: "Couverture & Toiture"       },
  { url: "bechtel.com",                  title: "Bechtel",                  category: "Infrastructure Mondiale"    },
  { url: "oasisbuildersinc.com",         title: "Oasis Builders",           category: "Construction Résidentielle" },
];

// Tall screenshot — captures a 2000px-tall viewport to show more of the page
function fullThumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=640&h=2000`;
}

const COL_A = PROJECTS.slice(0, 9);
const COL_B = PROJECTS.slice(9);

function ProjectCard({ project, delay = 0 }: { project: typeof PROJECTS[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl overflow-hidden bg-dark-alt border border-border-dark"
      style={{ height: "450px" }}
      data-cursor="project"
    >
      {/* Full-page screenshot — scrolls on hover */}
      <img
        src={fullThumb(project.url)}
        alt={project.title}
        className="portfolio-scroll-img w-full block"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.opacity = "0.2";
        }}
      />

      {/* Gradient overlay — darkens bottom */}
      <div className="vs-overlay absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/0 to-dark/0 pointer-events-none" />

      {/* Info — shown at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-[10px] font-bold uppercase tracking-widest text-beige/70 mb-1">
          {project.category}
        </div>
        <h3 className="font-heading font-bold text-text-light text-base leading-tight mb-3">
          {project.title}
        </h3>
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-beige hover:text-beige-light transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Voir le projet <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="section-dark py-24 lg:py-32" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid: left title + right columns */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Title + CTAs (sticky) ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-5 block">
                Sites web créés
              </span>
              <h2
                className="font-heading font-bold text-text-light leading-[1.05] tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Sites Web{" "}
                <br />
                <span className="text-beige">Que Nous</span>
                <br />
                Avons Créés
              </h2>

              <div className="flex flex-col gap-3">
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="sher-btn-dark inline-flex items-center gap-2 bg-beige text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-beige-light transition-colors"
                >
                  Obtenir un devis
                  <ArrowUpRight size={14} />
                </a>
                {/* Secondary CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-border-dark text-text-light/70 px-6 py-3.5 rounded-full font-semibold text-sm hover:border-beige/40 hover:text-text-light transition-all"
                >
                  Plus de réalisations
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-border-dark flex gap-8">
                <div>
                  <div className="font-heading font-bold text-2xl text-beige">17+</div>
                  <div className="text-[11px] text-text-light/35 uppercase tracking-widest mt-0.5">Sites créés</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-beige">5.0 ★</div>
                  <div className="text-[11px] text-text-light/35 uppercase tracking-widest mt-0.5">Note Google</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Two columns of project cards ── */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Column A */}
            <div className="flex flex-col gap-5">
              {COL_A.map((p, i) => (
                <ProjectCard key={p.url} project={p} delay={i * 0.04} />
              ))}
            </div>
            {/* Column B — offset to stagger layout */}
            <div className="flex flex-col gap-5 sm:mt-12">
              {COL_B.map((p, i) => (
                <ProjectCard key={p.url} project={p} delay={i * 0.04 + 0.1} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
