"use client";

// Client logos / industries served — scrolling marquee strip
const LABELS = [
  "Couverture & Toiture",
  "Rénovation Cuisine",
  "Rénovation Salle de Bain",
  "Charpente",
  "Isolation & Façade",
  "Maçonnerie",
  "Peinture & Enduit",
  "Menuiserie & Vitrerie",
  "Plâtrerie",
  "Construction Générale",
];

export default function LogoStrip() {
  const doubled = [...LABELS, ...LABELS];

  return (
    <section className="section-white border-y border-border py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={i}
            className="text-sm font-semibold text-muted uppercase tracking-widest flex-shrink-0 flex items-center gap-4"
          >
            <span className="w-1 h-1 rounded-full bg-beige inline-block" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
