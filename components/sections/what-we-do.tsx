"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * What We Do — exact Sher Agency layout:
 * • Dark background
 * • LEFT: large heading + outlined white pill CTA (sticky)
 * • RIGHT: 3 rows with full-width dividers, large title + arrow (→ / ↗ active)
 * • Click to expand → description text appears, arrow rotates to ↗
 */

const SERVICES = [
  {
    title: "Conception de site web",
    description:
      "Un site web ou une landing page qui convertit davantage de visiteurs en clients et génère plus de trafic qualifié depuis Google.",
  },
  {
    title: "Gestion de site",
    description:
      "Hébergement, sécurité, mises à jour logicielles, surveillance de disponibilité, corrections de bugs, gestion de contenu et bien plus.",
  },
  {
    title: "SEO & Publicité",
    description:
      "Attirez du trafic qualifié via le référencement organique (SEO) et la publicité payante Google Ads (PPC).",
  },
];

export default function WhatWeDo() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-dark py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Heading + CTA ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-heading text-text-light leading-[1.0] tracking-tight mb-10"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                Ce que nous<br />faisons
              </h2>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-rose text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#F0F0F0] hover:text-dark transition-all"
              >
                Démarrer votre projet <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Service rows ── */}
          <div className="border-t border-white/10">
            {SERVICES.map((s, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="border-b border-white/10"
                  onMouseEnter={() => setOpen(i)}
                >
                  <div className="w-full flex items-center justify-between py-8 text-left group cursor-default">
                    <span
                      className="font-heading text-text-light group-hover:text-text-light/60 transition-colors leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
                    >
                      {s.title}
                    </span>
                    <div className="flex-shrink-0 ml-6">
                      {isOpen
                        ? <ArrowUpRight size={28} className="text-text-light" />
                        : <ArrowRight   size={28} className="text-text-light/25 group-hover:text-text-light transition-colors" />
                      }
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8">
                          <p className="text-text-light/55 text-base leading-relaxed max-w-2xl">
                            {s.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
