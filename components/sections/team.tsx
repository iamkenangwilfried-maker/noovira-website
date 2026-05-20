"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Team — exact Sher Agency layout:
 * • Dark background
 * • "Notre Équipe" centered heading (mixed weight)
 * • Horizontally scrollable row of tall portrait cards
 * • Each card: tall colored portrait area + initials + name + role below
 */

const TEAM = [
  {
    name: "Lucas Moreau",
    role: "Fondateur & Directeur",
    initials: "LM",
    bg: "bg-[#2A2A2A]",
    accent: "#C9BAAC",
    origin: "🇨🇭 Suisse",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    initials: "PS",
    bg: "bg-[#1A2A35]",
    accent: "#6B9EA8",
    origin: "🇮🇳 Inde",
  },
  {
    name: "Miguel Santos",
    role: "Développeur Full-Stack",
    initials: "MS",
    bg: "bg-[#1A2A1E]",
    accent: "#6BAA7C",
    origin: "🇵🇭 Philippines",
  },
  {
    name: "Aisha Fernandez",
    role: "Responsable SEO",
    initials: "AF",
    bg: "bg-[#271A35]",
    accent: "#9B7ABF",
    origin: "🇵🇭 Philippines",
  },
  {
    name: "Tyler Brooks",
    role: "Stratège & Copywriter",
    initials: "TB",
    bg: "bg-[#2E1E10]",
    accent: "#D4874E",
    origin: "🇺🇸 États-Unis",
  },
  {
    name: "Ravi Kapoor",
    role: "Google Ads Manager",
    initials: "RK",
    bg: "bg-[#102A2A]",
    accent: "#4EAAA8",
    origin: "🇮🇳 Inde",
  },
];

function TeamCard({ m, delay = 0 }: { m: typeof TEAM[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex-shrink-0 rounded-2xl overflow-hidden border border-dark/10"
      style={{ width: "260px" }}
    >
      {/* Portrait area — tall colored bg with large initials */}
      <div
        className={`${m.bg} relative flex items-center justify-center`}
        style={{ height: "340px" }}
      >
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

        {/* Large initials */}
        <div
          className="relative z-10 text-6xl font-black font-heading select-none"
          style={{ color: m.accent, opacity: 0.9 }}
        >
          {m.initials}
        </div>

        {/* Origin flag top-right */}
        <div className="absolute top-4 right-4 text-lg">
          {m.origin.split(" ")[0]}
        </div>
      </div>

      {/* Name + role */}
      <div className="bg-white p-5 border-t border-dark/10">
        <div className="font-heading font-bold text-dark text-base mb-1">
          {m.name}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: m.accent }}>
          {m.role}
        </div>
        <div className="text-dark/30 text-[11px] mt-1">{m.origin}</div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX   = useRef(0);
  const scrollL  = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX;
    scrollL.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = scrollL.current - (e.pageX - startX.current);
  };
  const onMouseUp = () => { dragging.current = false; };

  return (
    <section className="section-white py-20 lg:py-28 overflow-hidden" id="equipe">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="font-heading text-dark leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Notre <span className="font-black">Équipe</span>
          </h2>
          <p className="text-dark/40 text-sm max-w-md mx-auto leading-relaxed">
            Des experts passionnés dédiés à faire grandir les artisans suisses en ligne.
          </p>
        </motion.div>
      </div>

      {/* Draggable horizontal scroll */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 select-none"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          scrollbarWidth: "none",
          cursor: "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {TEAM.map((m, i) => (
          <TeamCard key={m.name} m={m} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
