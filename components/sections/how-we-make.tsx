"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: "🎯",
    title: "Spécialisés Construction",
    desc: "Nous ne faisons pas de sites pour tout le monde. Notre expertise est les PMEs suisses du bâtiment — nous connaissons votre métier, vos clients et ce qui convertit.",
  },
  {
    icon: "⚡",
    title: "48h de livraison",
    desc: "Pas de mois d'attente. Votre site est en ligne en 48 heures ouvrables, prêt à générer des leads dès le premier jour.",
  },
  {
    icon: "📊",
    title: "Orienté résultats",
    desc: "Chaque décision de design est orientée conversion. Notre objectif n'est pas un beau site — c'est un site qui remplit votre carnet de chantiers.",
  },
  {
    icon: "🇨🇭",
    title: "Ancré en Suisse",
    desc: "Nous comprenons le marché suisse, les attentes locales et les spécificités régionales. Vos clients se reconnaissent dans ce que vous leur présentez.",
  },
];

export default function HowWeMake() {
  return (
    <section className="section-alt py-24 lg:py-32" id="processus">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5 block">
              Notre approche
            </span>
            <h2
              className="font-heading font-bold text-dark leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Conçu pour votre métier.<br />
              Pas pour le vôtre.
            </h2>
            <p className="text-body text-base leading-relaxed mb-10">
              La plupart des agences web font des sites génériques qui pourraient être pour
              n'importe qui. Nous sommes différents — nous créons des sites qui parlent
              directement aux propriétaires suisses cherchant un artisan de confiance.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-border"
                >
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h3 className="font-heading font-bold text-dark text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-dark rounded-3xl p-8 lg:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-6 block">
                Ce que vous obtenez
              </span>
              <ul className="space-y-5">
                {[
                  "Site professionnel livré en 48h",
                  "Design 100% sur-mesure à votre image",
                  "Hébergement, domaine & SSL inclus",
                  "Formulaires de contact optimisés",
                  "Fiche Google Business configurée",
                  "Responsive — parfait sur mobile",
                  "Optimisé pour les recherches locales",
                  "Support technique continu",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-light/80 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-beige flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-border-dark">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-beige text-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-beige-light transition-colors w-full justify-center"
                >
                  Démarrer votre projet
                </a>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-beige text-dark rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-bold font-heading leading-none">48h</div>
              <div className="text-xs font-semibold mt-0.5">Délai garanti</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
