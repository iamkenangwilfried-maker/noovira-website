"use client";

// Trust & credibility badges — scrolling marquee (matches Sher Agency trust strip)
const BADGES = [
  { label: "5.0 ★ Google",           sub: "175+ avis" },
  { label: "Top Agence Web",          sub: "Bâtiment & Construction" },
  { label: "Sites livrés en 2 semaines",     sub: "Garantie contractuelle" },
  { label: "100% Sur-mesure",         sub: "Aucun template" },
  { label: "SEO Local Certifié",      sub: "Référencement Google" },
  { label: "Support 7j/7",            sub: "Assistance continue" },
  { label: "17+ Sites Réalisés",      sub: "Artisans & PMEs" },
  { label: "SSL & Hébergement",       sub: "Inclus dans l'abonnement" },
];

const Separator = () => (
  <div className="w-1 h-1 rounded-full bg-beige/40 flex-shrink-0 mx-2" />
);

export default function LogoStrip() {
  const doubled = [...BADGES, ...BADGES];

  return (
    <section className="section-dark border-y border-border-dark py-5 overflow-hidden">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-8 flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <Separator />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-text-light/85 leading-tight tracking-tight">
                  {badge.label}
                </span>
                <span className="text-[10px] font-medium text-beige/60 uppercase tracking-widest">
                  {badge.sub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
