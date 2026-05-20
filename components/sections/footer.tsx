import { Instagram, Youtube, Linkedin } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const LINKS = {
  Services: [
    { label: "Création de Site",   href: "#gestion"   },
    { label: "Gestion de Site",    href: "#gestion"   },
    { label: "SEO & Publicité",    href: "#seo"        },
    { label: "Notre Processus",    href: "#processus" },
  ],
  Entreprise: [
    { label: "Notre Équipe",       href: "#equipe"    },
    { label: "Portfolio",          href: "#portfolio" },
    { label: "Avis Clients",       href: "#avis"      },
    { label: "FAQ",                href: "#faq"       },
  ],
  Légal: [
    { label: "Politique de confidentialité", href: "/privacy-policy"  },
    { label: "Conditions d'utilisation",     href: "/terms-of-service" },
    { label: "Politique de cookies",         href: "/cookie-policy"   },
  ],
};

const SOCIALS = [
  { icon: Instagram,    label: "Instagram", href: "https://www.instagram.com/nooviraai/" },
  { icon: Youtube,      label: "YouTube",   href: "https://youtube.com/@nooviraai"        },
  { icon: Linkedin,     label: "LinkedIn",  href: "https://www.linkedin.com/company/nooviraai/" },
  { icon: TikTokIcon,   label: "TikTok",    href: "https://www.tiktok.com/@nooviraai"    },
];

export default function Footer() {
  return (
    <footer className="section-dark border-t border-border-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Noovira AI" className="h-9 w-auto brightness-0 invert" />
            </a>
            <p className="text-text-light/40 text-sm leading-relaxed max-w-xs mb-6">
              Agence web spécialisée PMEs suisses du bâtiment. Nous créons des sites qui remplissent votre carnet de chantiers.
            </p>

            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/5 hover:bg-beige/20 border border-border-dark hover:border-beige/40 rounded-lg flex items-center justify-center transition-all text-text-light/40 hover:text-beige"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-heading font-semibold text-text-light/80 text-xs uppercase tracking-widest mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-text-light/35 text-sm hover:text-text-light/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-light/25 text-xs">
            © {new Date().getFullYear()} Noovira AI. Tous droits réservés. 🇨🇭 Suisse romande.
          </p>
          <p className="text-text-light/25 text-xs">
            Conçu pour les artisans qui veulent plus de chantiers.
          </p>
        </div>
      </div>
    </footer>
  );
}
