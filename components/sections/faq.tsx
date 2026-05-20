"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

/**
 * FAQ — exact Sher Agency layout:
 * • Dark section background
 * • Content inside a full-width rounded dark card (#232323)
 * • Inside card: 2-column grid — LEFT (title + CTA sticky) | RIGHT (accordion)
 * • LEFT: "Frequently asked" (regular) + "questions" (black) + "Contact Us ↗" outlined pill
 * • RIGHT: large question text + + / - icon, answer expands below
 */

const FAQS = [
  {
    q: "Avec quel type d'entreprises travaillez-vous ?",
    a: "Nous travaillons principalement avec les PMEs du secteur du bâtiment en Suisse romande — couvreurs, charpentiers, rénovateurs, maçons, peintres, électriciens. Toute entreprise artisanale cherchant à développer sa présence en ligne.",
  },
  {
    q: "Quels services proposez-vous ?",
    a: "Nous créons, gérons et développons des sites web. Cela inclut : création de site, gestion mensuelle, SEO local, campagnes Google Ads, rédaction de contenus, fiche Google Business et support technique continu.",
  },
  {
    q: "Quels outils utilisez-vous pour créer les sites ?",
    a: "Nous travaillons principalement sur Next.js, Webflow et WordPress selon les besoins. Nous pouvons nous adapter à d'autres plateformes, mais nous recommandons ces trois pour leur solidité et leur maintenabilité.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Nous garantissons la mise en ligne en 2 semaines ouvrables après votre appel de démarrage. Vous partagez vos informations, nous concevons et développons tout, et votre site est live dans ce délai garanti contractuellement.",
  },
  {
    q: "Que vous faut-il de ma part tout au long du processus ?",
    a: "Une implication forte les premiers jours : partage d'informations, validation des maquettes, retours rapides. Ensuite nous avançons quasi-autonomement. Votre disponibilité en début de projet fait la différence.",
  },
  {
    q: "Est-ce que je possède mon site web ?",
    a: "Oui, le site vous appartient entièrement. Si vous décidez un jour de changer d'agence, nous vous transfèrons tous les fichiers et accès sans aucune rétention.",
  },
  {
    q: "Où est basée Noovira AI ?",
    a: "Nous sommes une équipe 100% remote spécialisée sur le marché suisse romand et francophone. Nos experts sont répartis en Europe et en Asie — mais nos clients sont en Suisse.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-dark py-20 lg:py-28" id="faq">
      <div className="max-w-7xl mx-auto px-6">

        {/* Full-width rounded dark card — Sher exact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
          style={{ background: "#232323" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.8fr]">

            {/* ── LEFT: Title + CTA ── */}
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="lg:sticky lg:top-32">
                <h2
                  className="font-heading text-text-light leading-[1.05] tracking-tight mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Questions<br />
                  fréquemment<br />
                  <span className="font-black">posées</span>
                </h2>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-text-light px-6 py-3.5 rounded-full font-bold text-sm hover:border-white hover:bg-white hover:text-dark transition-all"
                >
                  Nous contacter <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* ── RIGHT: Accordion ── */}
            <div className="p-10 lg:p-14">
              <div className="border-t border-white/10">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b border-white/10">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full text-left py-7 flex items-start justify-between gap-8 group"
                    >
                      <span
                        className="font-heading text-text-light group-hover:text-beige transition-colors leading-snug"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                      >
                        {faq.q}
                      </span>
                      <div className="flex-shrink-0 mt-1">
                        {open === i
                          ? <Minus size={18} className="text-text-light/60" />
                          : <Plus  size={18} className="text-text-light/40 group-hover:text-text-light/60 transition-colors" />
                        }
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pr-10">
                            <p className="text-text-light/50 text-sm leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
