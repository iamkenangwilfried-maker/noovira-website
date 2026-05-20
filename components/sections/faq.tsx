"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Combien coûte la création de mon site web ?",
    a: "La création de votre site est totalement gratuite. Vous payez uniquement l'abonnement mensuel pour l'hébergement, la maintenance, les mises à jour et le support technique. Pas de frais cachés, pas de surprise. Vous pouvez annuler à tout moment.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Nous garantissons la mise en ligne en 48 heures ouvrables après votre appel de démarrage. Concrètement : vous partagez vos informations (logo, photos, description des services), nous concevons et développons tout, et votre site est live en 2 jours.",
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-white py-24 lg:py-32" id="faq">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5 block">
              FAQ
            </span>
            <h2
              className="font-heading font-bold text-dark leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Questions<br />
              fréquentes.
            </h2>
            <p className="text-body leading-relaxed mb-8">
              Vous ne trouvez pas la réponse à votre question ? Nous sommes disponibles pour en discuter directement.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-dark text-text-light px-6 py-3.5 rounded-full font-bold text-sm hover:bg-dark/80 transition-colors"
            >
              Nous contacter
            </a>
          </motion.div>

          {/* Right — accordion */}
          <div className="border-t border-border">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="font-heading font-semibold text-dark group-hover:text-body transition-colors text-base leading-snug">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-dark group-hover:text-dark transition-all mt-0.5">
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
                      <div className="pb-6 pr-14">
                        <p className="text-body text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
