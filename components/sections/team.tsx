"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Team — grille statique 4 colonnes (marquee quand 8+ membres)
 * Fond blanc · Cartes portrait · Scroll automatique désactivé pour 4 membres
 */

const TEAM = [
  {
    name: "Rahul Sharma",
    role: "Lead Developer",
    photo: "/team/rahul_sharma.webp",
  },
  {
    name: "Priya Kapoor",
    role: "Project Manager",
    photo: "/team/priya_kapoor.webp",
  },
  {
    name: "Marco Santos",
    role: "UI/UX Designer",
    photo: "/team/marco_santos.webp",
  },
  {
    name: "Jennifer Hang",
    role: "Content Strategist",
    photo: "/team/sofia_reyes.webp",
  },
  // Photos à venir : James Okafor, Amara Diallo, Lucas Martin, Emma Laurent
];

function TeamCard({ m, index }: { m: (typeof TEAM)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-1 min-w-0"
    >
      {/* Photo portrait */}
      <div className="relative rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "3/4" }}>
        <Image
          src={m.photo}
          alt={m.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      {/* Nom + rôle */}
      <div>
        <div className="font-heading font-bold text-dark text-xl leading-tight mb-1">
          {m.name}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted">
          {m.role}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="section-white py-20 lg:py-28" id="equipe">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-xs font-bold uppercase tracking-widest text-muted mb-4">
            L&apos;équipe
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-heading text-dark leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Une équipe mondiale,<br />
              <span className="font-black">des résultats locaux.</span>
            </h2>
            <p className="text-muted text-sm max-w-xs leading-relaxed lg:text-right lg:pb-2">
              Des experts pluridisciplinaires répartis sur plusieurs fuseaux horaires — pour livrer vite, bien, et toujours disponibles.
            </p>
          </div>
        </motion.div>

        {/* ── Grille 4 colonnes — 2 sur mobile ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {TEAM.map((m, i) => (
            <TeamCard key={m.name} m={m} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
