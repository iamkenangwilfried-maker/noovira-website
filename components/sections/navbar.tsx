"use client";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

/**
 * Navbar — logo aligné avec max-w-7xl px-6 comme le footer
 * • Barre sombre pleine largeur
 * • Container max-w-7xl mx-auto px-6 → logo à gauche, liens + CTA à droite
 * • Hamburger à droite (mobile)
 */

const LINKS = [
  { label: "Notre Processus",  href: "/creation-de-site" },
  { label: "Gestion de Site",  href: "/gestion-de-site"  },
  { label: "SEO & Publicité",  href: "/seo-publicite"    },
  { label: "Portfolio",        href: "/realisations"      },
  { label: "Blog",             href: "/blog"              },
];

const NAV_H = 80; // px

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: `${NAV_H}px`, background: "#1C1C1C" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* ── Logo — même rendu et même position que le footer ── */}
          <a href="/" aria-label="Noovira AI — Agence web pour le bâtiment en Suisse">
            <div
              className="rounded-xl overflow-hidden flex-shrink-0"
              style={{ width: "56px", height: "56px", background: "#0A0A0A" }}
            >
              <img
                src="/logo-novira.svg"
                alt="Noovira AI"
                width={56}
                height={56}
                style={{ display: "block" }}
                loading="eager"
              />
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-text-light/60 hover:text-text-light transition-colors duration-200 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-rose text-dark px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#F0F0F0] hover:text-dark transition-colors duration-200 whitespace-nowrap ml-2 flex-shrink-0"
            >
              Démarrer votre projet <ArrowUpRight size={13} />
            </a>
          </nav>

          {/* ── Hamburger (mobile + tablet) ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center rounded-xl transition-colors"
            style={{ width: "44px", height: "44px", background: "#2A2A2A" }}
            aria-label="Toggle menu"
          >
            {open
              ? <X size={20} className="text-text-light" />
              : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <rect width="20" height="2" fill="#F7F4EF" />
                  <rect y="6" width="20" height="2" fill="#F7F4EF" />
                  <rect y="12" width="20" height="2" fill="#F7F4EF" />
                </svg>
              )
            }
          </button>

        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: "#1C1C1C", paddingTop: `${NAV_H}px` }}
        >
          <nav className="flex flex-col px-8 py-12 gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading font-bold text-text-light hover:text-rose transition-colors"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-8 pb-12">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-rose text-dark px-7 py-4 rounded-full font-bold text-base hover:bg-[#F0F0F0] hover:text-dark transition-colors"
            >
              Démarrer votre projet <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div style={{ height: `${NAV_H}px` }} />
    </>
  );
}
