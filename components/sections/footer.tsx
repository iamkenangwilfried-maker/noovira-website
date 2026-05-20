"use client";

/**
 * Footer — exact Sher Agency layout:
 * • Dark background
 * • TOP: Logo left + nav links right
 * • MID: Thin divider
 * • BOTTOM: © text left + social icons right
 */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const NAV_LINKS = [
  { label: "Services",      href: "#gestion"   },
  { label: "Portfolio",     href: "#portfolio" },
  { label: "Notre Équipe",  href: "#equipe"    },
  { label: "Avis Clients",  href: "#avis"      },
  { label: "FAQ",           href: "#faq"       },
  { label: "Contact",       href: "#contact"   },
];

const LEGAL_LINKS = [
  { label: "Confidentialité", href: "/privacy-policy"   },
  { label: "CGU",             href: "/terms-of-service" },
  { label: "Cookies",         href: "/cookie-policy"    },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/nooviraai/" },
  { icon: YoutubeIcon,   label: "YouTube",   href: "https://youtube.com/@nooviraai"        },
  { icon: TikTokIcon,    label: "TikTok",    href: "https://www.tiktok.com/@nooviraai"    },
];

export default function Footer() {
  return (
    <footer className="section-dark border-t border-border-dark" id="footer">

      {/* Top row: Logo + Nav */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/logo.png" alt="Noovira AI" className="h-9 w-auto brightness-0 invert" />
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-text-light/40 text-sm hover:text-text-light/80 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-border-dark" />

      {/* Bottom row: © + legal + socials */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* © + legal */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-text-light/25 text-xs">
            © {new Date().getFullYear()} Noovira AI — 🇨🇭 Suisse romande
          </span>
          {LEGAL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-text-light/25 text-xs hover:text-text-light/50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-full border border-border-dark flex items-center justify-center text-text-light/40 hover:border-beige hover:text-beige transition-all"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
