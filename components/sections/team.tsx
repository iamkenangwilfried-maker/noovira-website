"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Lucas Moreau",
    role: "Fondateur & Directeur",
    origin: "🇨🇭 Suisse",
    bio: "Entrepreneur suisse passionné par le numérique et le secteur de la construction. Il a lancé Noovira après avoir vu trop de bons artisans perdre des chantiers faute de présence en ligne.",
    avatar: "/team/lucas.jpg",
    initials: "LM",
    color: "bg-beige/20",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    origin: "🇮🇳 Inde",
    bio: "Designer UX/UI avec 6 ans d'expérience. Spécialisée dans les sites de service et d'artisanat, elle crée des interfaces qui inspirent confiance immédiatement.",
    avatar: "/team/priya.jpg",
    initials: "PS",
    color: "bg-blue-400/20",
  },
  {
    name: "Miguel Santos",
    role: "Développeur Full-Stack",
    origin: "🇵🇭 Philippines",
    bio: "Développeur Next.js & Webflow avec un oeil pour la performance. Il s'assure que chaque site charge en moins de 2 secondes et passe les tests PageSpeed avec les honneurs.",
    avatar: "/team/miguel.jpg",
    initials: "MS",
    color: "bg-green-400/20",
  },
  {
    name: "Aisha Fernandez",
    role: "Responsable SEO",
    origin: "🇵🇭 Philippines",
    bio: "Experte en référencement local avec un track record de +80 positions Google pour des artisans en Suisse romande et en région genevoise.",
    avatar: "/team/aisha.jpg",
    initials: "AF",
    color: "bg-purple-400/20",
  },
  {
    name: "Tyler Brooks",
    role: "Stratège Contenu & Copy",
    origin: "🇺🇸 États-Unis",
    bio: "Copywriter spécialisé dans les métiers du bâtiment. Il rédige des textes qui parlent directement aux propriétaires et les convainquent d'appeler plutôt que de continuer à scroller.",
    avatar: "/team/tyler.jpg",
    initials: "TB",
    color: "bg-orange-400/20",
  },
  {
    name: "Ravi Kapoor",
    role: "Responsable Google Ads",
    origin: "🇮🇳 Inde",
    bio: "Gestionnaire de campagnes publicitaires avec une spécialisation dans les secteurs du bâtiment et de la rénovation. Il optimise chaque centime de budget pub pour maximiser le retour.",
    avatar: "/team/ravi.jpg",
    initials: "RK",
    color: "bg-teal-400/20",
  },
];

export default function Team() {
  const [activeIdx, setActiveIdx] = useState(0);
  const VISIBLE = 3;

  const shownIdxs = TEAM.map((_, i) => i).slice(
    activeIdx,
    activeIdx + VISIBLE
  );

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
  const next = () => setActiveIdx((i) => Math.min(TEAM.length - VISIBLE, i + 1));

  return (
    <section className="section-alt py-24 lg:py-32" id="equipe">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4 block">
              Notre équipe
            </span>
            <h2
              className="font-heading font-bold text-dark leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Des experts dédiés<br />
              <span className="text-muted">à votre réussite.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-dark hover:text-dark transition-all disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={activeIdx >= TEAM.length - VISIBLE}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-dark hover:text-dark transition-all disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.slice(activeIdx, activeIdx + VISIBLE).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-border group"
            >
              {/* Avatar area */}
              <div className={`${member.color} h-48 flex items-center justify-center relative`}>
                <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center text-3xl font-bold text-dark border-4 border-white shadow-lg">
                  {member.initials}
                </div>
                <span className="absolute top-4 right-4 text-lg">{member.origin.split(" ")[0]}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-1">
                  <h3 className="font-heading font-bold text-dark text-lg">{member.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-widest text-beige">{member.role}</div>
                </div>
                <div className="text-xs text-muted mb-4">{member.origin}</div>
                <p className="text-body text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All team dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TEAM.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(Math.min(i, TEAM.length - VISIBLE))}
              className={`rounded-full transition-all ${
                i >= activeIdx && i < activeIdx + VISIBLE
                  ? "w-6 h-2 bg-dark"
                  : "w-2 h-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
