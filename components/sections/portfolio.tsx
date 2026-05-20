"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Portfolio — exact Sher Agency "Websites We Created":
 * • White background
 * • LEFT sticky: "Sites Web Que Nous Avons Créés" + "Plus de réalisations" button
 * • RIGHT: 2-column grid of tall cards
 *   - Each card: full screenshot background, dark overlay, large project name + "Voir le projet" button
 */

const PROJECTS = [
  { url: "b3constructioncorp.com",       title: "B3 Construction Corp",     category: "Construction Générale"      },
  { url: "tekconstructiongroup.com",      title: "TEK Construction Group",   category: "Construction Générale"      },
  { url: "cr-design-remodel.webflow.io", title: "CR Design & Remodel",      category: "Rénovation & Design"        },
  { url: "candmhomebuilders.com",         title: "C&M Home Builders",        category: "Construction Résidentielle" },
  { url: "schmittcompany.com",            title: "Schmitt Company",          category: "Construction Commerciale"   },
  { url: "qualmax.co.nz",                 title: "Qualmax",                  category: "Construction & Rénovation"  },
  { url: "42parallelconstruction.com",    title: "42 Parallel Construction", category: "Construction Générale"      },
  { url: "b2builders.com",               title: "B2 Builders",              category: "Construction Résidentielle" },
  { url: "ironstarconstruction.com",      title: "Iron Star Construction",   category: "Construction Industrielle"  },
  { url: "skender.com",                   title: "Skender",                  category: "Construction Commerciale"   },
  { url: "leopardo.com",                  title: "Leopardo",                 category: "Construction & Design"      },
  { url: "clunegc.com",                   title: "Clune Construction",       category: "Construction Commerciale"   },
  { url: "fhpaschen.com",                 title: "FH Paschen",               category: "Infrastructure & BTP"       },
  { url: "jdgconstructions.com.au",       title: "JDG Constructions",        category: "Construction Résidentielle" },
  { url: "5starroofcare.co.uk",           title: "5 Star Roof Care",         category: "Couverture & Toiture"       },
  { url: "bechtel.com",                   title: "Bechtel",                  category: "Infrastructure Mondiale"    },
  { url: "oasisbuildersinc.com",          title: "Oasis Builders",           category: "Construction Résidentielle" },
];

function bgThumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=700&h=900`;
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
      className="group relative rounded-2xl overflow-hidden bg-dark"
      style={{ height: "480px" }}
      data-cursor="project"
    >
      {/* Background screenshot — scales on hover */}
      <img
        src={bgThumb(project.url)}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.opacity = "0.15";
        }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/5" />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-text-light/40 mb-2">
          {project.category}
        </div>
        <h3
          className="font-heading font-bold text-text-light leading-tight mb-4"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          {project.title}
        </h3>
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-white/30 text-text-light text-xs font-bold px-4 py-2 rounded-full hover:bg-white hover:text-dark transition-all"
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
                href="#contact"
                className="inline-flex items-center gap-2 border border-dark/25 text-dark px-6 py-3 rounded-full font-semibold text-sm hover:border-dark transition-colors"
              >
                Plus de réalisations
              </a>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-border flex gap-8">
                <div>
                  <div className="font-heading font-black text-2xl text-dark">17+</div>
                  <div className="text-[11px] text-muted uppercase tracking-widest mt-0.5">Sites créés</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-dark">5.0 ★</div>
                  <div className="text-[11px] text-muted uppercase tracking-widest mt-0.5">Note Google</div>
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
            {/* Column B — offset */}
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
