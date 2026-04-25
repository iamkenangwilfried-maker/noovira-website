import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const links = {
  Services: [
    { label: "Free Website", href: "#services" },
    { label: "Speed to Lead", href: "#services" },
    { label: "Google Reviews", href: "#services" },
    { label: "DB Reactivation", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#proof" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/wilfried_kenang/" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@nooviraai" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572061202270" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wilfried-kenang/" },
  { icon: TikTokIcon as any, label: "TikTok", href: "https://www.tiktok.com/@wilfried_kenang" },
  { icon: PinterestIcon as any, label: "Pinterest", href: "https://pinterest.com/Wilfried_Kenang" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-card-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-7">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4 flex items-start">
              <a href="/"><img src="/logo.png" alt="Noovira AI" className="h-14 w-auto" /></a>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              We build free websites and AI systems for roofing and HVAC contractors
              that turn missed calls into booked jobs.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-muted hover:bg-accent/10 hover:border-accent/30 border border-card-border rounded-lg flex items-center justify-center transition-colors text-secondary hover:text-accent"
                >
                  <s.icon size={16} className="text-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-heading font-semibold text-navy text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-secondary/60 text-sm hover:text-navy transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary/40 text-xs">
            © {new Date().getFullYear()} Noovira AI. All rights reserved.
            Serving US, UK, Australia & New Zealand.
          </p>
          <p className="text-secondary/40 text-xs">
            Built for contractors who want more booked jobs.
          </p>
        </div>
      </div>
    </footer>
  );
}
