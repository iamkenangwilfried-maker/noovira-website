"use client";

/**
 * Footer — exact Sher Agency layout:
 * • Dark background
 * • TOP: 4-col grid — [Logo + social icons + trust badges] [spacer] [Services] [Company]
 * • BOTTOM: "© Noovira AI - 2026" left | "Politique de confidentialité" right
 */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const SOCIALS = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/nooviraai/" },
  { Icon: LinkedInIcon,  label: "LinkedIn",  href: "https://www.linkedin.com/company/nooviraai/" },
  { Icon: TikTokIcon,    label: "TikTok",    href: "https://www.tiktok.com/@nooviraai" },
];

const SERVICES = [
  { label: "Créer un site",       href: "#services"  },
  { label: "Gestion de site",     href: "#services"  },
  { label: "SEO & Publicité",     href: "#services"  },
];

const COMPANY = [
  { label: "Portfolio",           href: "#portfolio" },
  { label: "Avis clients",        href: "#avis"      },
  { label: "Nous contacter",      href: "#contact"   },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1C1C1C" }}>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[auto_1fr_auto_auto] gap-10 lg:gap-16">

          {/* ── COL 1: Logo + socials + trust badges ── */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo — Sher-style stacked monogram adapted for Noovira */}
            <a href="/" className="inline-block mb-6" aria-label="Noovira AI">
              <img src="/logo.png" alt="Noovira AI" className="h-10 w-auto brightness-0 invert" />
            </a>

            {/* Social circles */}
            <div className="flex gap-2.5 mb-6">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-text-light/50 hover:border-white/50 hover:text-text-light transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Trust badges — Sher exact: GoodFirms + Clutch outlined boxes */}
            <div className="flex gap-3 flex-wrap">
              {/* GoodFirms */}
              <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                <div className="w-6 h-6 rounded bg-[#0B4DDA] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[9px] font-black">GF</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-text-light/70 text-[10px] font-bold">GoodFirms</span>
                  <span className="text-text-light/35 text-[9px]">Top Web Designer</span>
                </div>
              </div>

              {/* Clutch */}
              <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-[#FF3D2E] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-black">C</span>
                </div>
                <div className="flex flex-col leading-none">
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-yellow-400">
                        <path d="M6 0l1.55 3.14L11 3.64l-2.5 2.43.59 3.44L6 7.77 2.91 9.51l.59-3.44L1 3.64l3.45-.5L6 0z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-text-light/35 text-[9px]">38 Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer (desktop only) */}
          <div className="hidden lg:block" />

          {/* ── COL 3: Services ── */}
          <div>
            <h4 className="text-text-light/60 text-xs font-bold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-text-light/45 text-sm hover:text-text-light/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Company ── */}
          <div>
            <h4 className="text-text-light/60 text-xs font-bold uppercase tracking-widest mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-text-light/45 text-sm hover:text-text-light/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-text-light/25 text-xs">
            © Noovira AI — {new Date().getFullYear()}
          </span>
          <a
            href="/privacy-policy"
            className="text-text-light/25 text-xs hover:text-text-light/50 transition-colors"
          >
            Politique de confidentialité
          </a>
        </div>
      </div>

    </footer>
  );
}
