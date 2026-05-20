"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * FAQ — exact Sher Agency layout:
 * • Dark background (section-dark)
 * • Content sits inside a rounded dark card (#242424) — Sher exact
 * • "Questions **Fréquentes**" heading centered at top of card
 * • Full-width accordion below with white/10 dividers
 * • Bottom: "Vous avez d'autres questions ?" + CTA button
 */

const FAQS = [
  {
    q: "Combien coûte la création de mon site web ?",
    a: "La création de votre site est totalement gratuite. Vous payez uniquement l'abonnement mensuel pour l'hébergement, la maintenance, les mises à jour et le support technique. Pas de frais cachés, pas de surprise. Vous pouvez annuler à tout moment.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Nous garantissons la mise en ligne en 2 semaines ouvrables après votre appel de démarrage. Concrètement : vous partagez vos informations (logo, photos, description des services), nous concevons et développons tout, et votre site est live dans ce délai garanti contractuellement.",
  },
  {
    q: "Est-ce que je possède mon site web ?",
    a: "Oui, le site vous appartient entièrement. Si vous décidez un jour de changer d'agence, nous vous transfèrons tous les fichiers et accès. Pas de rétention de données, pas de verrouillage propriétaire.",
  },
  {
    q: "Travaillez-vous uniquement avec des entreprises suisses ?",
    a: "Nous sommes spécialisés sur le marché suisse romand et francophone. Notre expertise porte sur les PMEs du bâtiment en Suisse — couvreurs, rénovateurs, charpentiers, maçons, peintres. Nous connaissons vos clients et ce qui les convainc de vous appeler.",
  },
  {
    q: "Est-ce que mon site sera bien positionné sur Google ?",
    a: "Tous nos sites sont optimisés SEO dès la création : structure technique, mots-clés locaux, fiche Google Business configurée. Pour les clients ayant souscrit au plan SEO & Publicité, nous gérons activement votre référencement chaque mois et vous envoyons un rapport de positionnement mensuel.",
  },
  {
    q: "Je n'ai pas de photos professionnelles. Est-ce un problème ?",
    a: "Pas du tout. Nous pouvons utiliser des photos libres de droits liées à votre métier pour démarrer, et vous intégrer vos propres photos dès que vous en avez. Beaucoup de nos clients ont commencé avec des photos de téléphone — l'important c'est d'être en ligne et de générer des leads.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    a: "Avant de mettre le site en ligne, vous validez le design et les contenus. Si quelque chose ne vous convient pas, nous modifions jusqu'à ce que vous soyez entièrement satisfait. Notre objectif est un site dont vous êtes fier et qui vous génère du chiffre d'affaires.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-dark py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        {/* Dark card wrapper — Sher exact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
          style={{ background: "#242424" }}
        >
          {/* Card header */}
          <div className="px-8 lg:px-12 pt-10 pb-8 border-b border-white/10">
            <h2
              className="font-heading text-text-light leading-[1.05] tracking-tight text-center"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Questions <span className="font-black">Fréquentes</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="px-8 lg:px-12">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left py-7 flex items-start justify-between gap-6 group"
                >
                  <span
                    className="font-heading font-semibold text-text-light group-hover:text-beige transition-colors leading-snug"
                    style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                  >
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-text-light/50 group-hover:border-beige group-hover:text-beige transition-all mt-0.5">
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
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
                      <div className="pb-8 pr-14">
                        <p className="text-text-light/55 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Card footer CTA */}
          <div className="px-8 lg:px-12 py-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-text-light/40 text-sm">
              Vous avez d'autres questions ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-beige text-dark px-7 py-3.5 rounded-full font-bold text-sm hover:bg-beige/90 transition-colors"
            >
              Réserver un appel
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
