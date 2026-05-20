"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  { url: "b3constructioncorp.com",         title: "B3 Construction Corp",     category: "Construction Générale",      flag: "🇺🇸" },
  { url: "tekconstructiongroup.com",        title: "TEK Construction Group",   category: "Construction Générale",      flag: "🇺🇸" },
  { url: "cr-design-remodel.webflow.io",   title: "CR Design & Remodel",      category: "Rénovation & Design",        flag: "🇺🇸" },
  { url: "candmhomebuilders.com",          title: "C&M Home Builders",        category: "Construction Résidentielle", flag: "🇺🇸" },
  { url: "schmittcompany.com",             title: "Schmitt Company",           category: "Construction Commerciale",   flag: "🇺🇸" },
  { url: "qualmax.co.nz",                  title: "Qualmax",                  category: "Construction & Rénovation",  flag: "🇳🇿" },
  { url: "42parallelconstruction.com",     title: "42 Parallel Construction", category: "Construction Générale",      flag: "🇺🇸" },
  { url: "b2builders.com",                 title: "B2 Builders",              category: "Construction Résidentielle", flag: "🇺🇸" },
  { url: "ironstarconstruction.com",       title: "Iron Star Construction",   category: "Construction Industrielle",  flag: "🇺🇸" },
  { url: "skender.com",                    title: "Skender",                  category: "Construction Commerciale",   flag: "🇺🇸" },
  { url: "leopardo.com",                   title: "Leopardo",                 category: "Construction & Design",      flag: "🇺🇸" },
  { url: "clunegc.com",                    title: "Clune Construction",       category: "Construction Commerciale",   flag: "🇺🇸" },
  { url: "fhpaschen.com",                  title: "FH Paschen",               category: "Infrastructure & BTP",       flag: "🇺🇸" },
  { url: "jdgconstructions.com.au",        title: "JDG Constructions",        category: "Construction Résidentielle", flag: "🇦🇺" },
  { url: "5starroofcare.co.uk",            title: "5 Star Roof Care",         category: "Couverture & Toiture",       flag: "🇬🇧" },
  { url: "bechtel.com",                    title: "Bechtel",                  category: "Infrastructure Mondiale",    flag: "🇺🇸" },
  { url: "oasisbuildersinc.com",           title: "Oasis Builders",           category: "Construction Résidentielle", flag: "🇺🇸" },
];

// Screenshot via WordPress mshots (free, no signup required)
function thumb(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=640&h=400`;
}

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PROJECTS[activeIdx];

  const prev = () => setActiveIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setActiveIdx((i) => (i + 1) % PROJECTS.length);

  return (
    <section className="section-dark py-24 lg:py-32" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-4 block">
              Nos réalisations
            </span>
            <h2
              className="font-heading font-bold text-text-light leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              17 sites.<br />
              <span className="text-beige">Des résultats concrets.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-beige text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-beige-light transition-colors self-start lg:self-auto"
          >
            Démarrer votre projet
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Featured project card */}
        <div className="bg-dark-alt rounded-3xl overflow-hidden border border-border-dark mb-8">
          <div className="grid md:grid-cols-[320px_1fr]">
            {/* Info panel */}
            <div className="p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-dark">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-beige/60 mb-2 block">
                  {active.category}
                </span>
                <h3 className="font-heading font-bold text-text-light text-2xl mb-1">
                  {active.flag} {active.title}
                </h3>
                <span className="text-sm text-text-light/30">{active.url}</span>
              </div>

              <div className="mt-8">
                <a
                  href={`https://${active.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-beige hover:text-beige-light transition-colors"
                >
                  Voir le site live <ArrowUpRight size={14} />
                </a>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-dark">
                  <span className="text-sm text-text-light/40 font-medium">
                    {String(activeIdx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-text-light/50 hover:border-beige hover:text-beige transition-all"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-text-light/50 hover:border-beige hover:text-beige transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot preview */}
            <div className="relative aspect-video md:aspect-auto min-h-[280px] bg-dark overflow-hidden">
              <img
                key={active.url}
                src={thumb(active.url)}
                alt={active.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.url}
              onClick={() => setActiveIdx(i)}
              className={`group relative rounded-xl overflow-hidden aspect-video bg-dark-alt border transition-all duration-200 ${
                activeIdx === i
                  ? "border-beige shadow-lg shadow-beige/10 scale-[1.03]"
                  : "border-border-dark hover:border-beige/40"
              }`}
              title={p.title}
            >
              <img
                src={thumb(p.url)}
                alt={p.title}
                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
              {activeIdx === i && (
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-beige" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
