"use client";
import { useState } from "react";
import { X, Menu, ArrowUpRight } from "lucide-react";

/**
 * Navbar — exact Sher Agency structure:
 * • 3 flush sections spanning full viewport width
 * • LEFT:   White square box with logo
 * • CENTER: Dark bar (page-bg color) with nav links + white pill CTA
 * • RIGHT:  Slightly lighter dark square with hamburger icon
 * • Mobile: full-width slide-down menu
 */

const LINKS = [
  { label: "Notre Processus",  href: "/creation-de-site" },
  { label: "Gestion de Site",  href: "/gestion-de-site"  },
  { label: "SEO & Publicité",  href: "/seo-publicite"    },
  { label: "Portfolio",        href: "/realisations"       },
];

const NAV_H = 80; // px — header height

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-stretch"
        style={{ height: `${NAV_H}px` }}
      >
        {/* ── LEFT: Logo box — 120px large, dark, logo bien centré et visible ── */}
        <a
          href="/"
          className="flex-shrink-0 flex items-center justify-center"
          style={{ width: "120px", minWidth: "120px", background: "#0A0A0A" }}
          aria-label="Noovira AI — Agence web pour le bâtiment en Suisse"
        >
          <img
            src="/logo-novira.svg"
            alt="Noovira AI"
            width={72}
            height={72}
            style={{ width: 72, height: 72 }}
            loading="eager"
          />
        </a>

        {/* ── CENTER: Nav links + CTA pill ── */}
        <div
          className="flex-1 hidden md:flex items-center justify-center gap-8 px-6"
          style={{ background: "#1C1C1C" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-light/60 hover:text-text-light transition-colors duration-200 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}

          {/* Beige pill CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-rose text-dark px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#F0F0F0] hover:text-dark transition-colors duration-200 whitespace-nowrap ml-2 flex-shrink-0"
          >
            Démarrer votre projet <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile: dark fill between logo and hamburger */}
        <div
          className="flex-1 md:hidden"
          style={{ background: "#1C1C1C" }}
        />

        {/* ── RIGHT: Hamburger dark square ── */}
        <button
          onClick={() => setOpen(!open)}
          className="flex-shrink-0 flex items-center justify-center transition-colors"
          style={{
            width: `${NAV_H}px`,
            minWidth: `${NAV_H}px`,
            background: "#2A2A2A",
          }}
          aria-label="Toggle menu"
        >
          {open
            ? <X size={20} className="text-text-light" />
            : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <rect width="22" height="2" fill="#F7F4EF" />
                <rect y="7" width="22" height="2" fill="#F7F4EF" />
                <rect y="14" width="22" height="2" fill="#F7F4EF" />
              </svg>
            )
          }
        </button>
      </header>

      {/* ── Full-screen mobile / hamburger menu ── */}
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
                className="font-heading font-bold text-text-light text-3xl hover:text-rose transition-colors"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto px-8 pb-12">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-rose text-dark px-7 py-4 rounded-full font-bold text-base hover:bg-[#F0F0F0] hover:text-dark transition-colors"
            >
              Démarrer votre projet <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Spacer so content doesn't hide under fixed nav */}
      <div style={{ height: `${NAV_H}px` }} />
    </>
  );
}
