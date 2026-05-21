"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Gestion de Site — page content (Sher /website-management style):
 * • Hero: "Gestion de Site, Simple et Efficace"
 * • 8 fonctionnalités en grille
 * • Section "Pourquoi c'est crucial"
 */

const FEATURES = [
  {
    icon: "🔒",
    title: "Sécurité & SSL",
    desc: "Certificat SSL, sauvegardes quotidiennes, protection contre les malwares et les intrusions.",
  },
  {
    icon: "⚡",
    title: "Vitesse PageSpeed",
    desc: "Optimisation continue pour rester sous les 2 secondes de chargement et passer les Core Web Vitals.",
  },
  {
    icon: "🔧",
    title: "Corrections de Bugs",
    desc: "Formulaires, liens, images — tout ce qui casse est corrigé dans les 24h ouvrables.",
  },
  {
    icon: "🌐",
    title: "Hébergement Premium",
    desc: "Hébergement haute disponibilité (99.9% uptime), domaine inclus, CDN mondial.",
  },
  {
    icon: "📝",
    title: "Mises à Jour Contenu",
    desc: "Modification de textes, ajout de photos, nouveaux services — vous envoyez, on met à jour.",
  },
  {
    icon: "📊",
    title: "Analytics & Rapports",
    desc: "Tableau de bord mensuel : visiteurs, sources de trafic, pages vues, conversions.",
  },
  {
    icon: "♿",
    title: "Accessibilité",
    desc: "Conformité aux normes WCAG pour que votre site soit accessible à tous les utilisateurs.",
  },
  {
    icon: "🔄",
    title: "Mises à Jour Logicielles",
    desc: "CMS, plugins, frameworks — tout est mis à jour pour éviter les failles de sécurité.",
  },
];

export default function GestionContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-dark pt-28 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Gestion de Site,{" "}
              <span className="font-black">Simple et Efficace.</span>
            </h1>

            <p className="text-text-light/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Votre site tourne. Vous travaillez. On s'occupe de tout le reste.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-rose text-dark px-7 py-4 rounded-full font-bold text-base hover:bg-white hover:text-dark transition-all"
            >
              Réserver un appel <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 8 Features ── */}
      <section className="section-dark py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-heading text-text-light leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Tout ce qu'on gère{" "}
              <span className="font-black">pour vous</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-border-dark rounded-2xl p-6"
                style={{ background: "#1E1E1E" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-heading font-bold text-text-light text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-text-light/45 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="section-dark py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-heading text-text-light leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Un site non entretenu,{" "}
                <span className="font-black">c'est un site qui perd des clients.</span>
              </h2>
              <p className="text-text-light/55 text-base leading-relaxed mb-6">
                Un formulaire cassé, un plugin obsolète, une page qui met 10 secondes à charger — chaque problème technique coûte des devis perdus. Avec notre plan de gestion, vous n'avez plus à y penser.
              </p>
              <p className="text-text-light/55 text-base leading-relaxed">
                Vous recevez un rapport mensuel avec l'état de votre site, les interventions réalisées, et les performances. Transparent, simple, sans jargon.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="border border-border-dark rounded-3xl p-8 lg:p-10"
              style={{ background: "#1E1E1E" }}
            >
              <div className="space-y-5">
                {[
                  { val: "99.9%", label: "Taux de disponibilité garanti" },
                  { val: "< 24h", label: "Délai de correction des bugs" },
                  { val: "1×/mois", label: "Rapport de performance envoyé" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 border-b border-border-dark pb-5 last:border-b-0 last:pb-0">
                    <div className="font-heading font-black text-rose text-2xl min-w-[80px]">
                      {s.val}
                    </div>
                    <div className="text-text-light/55 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
