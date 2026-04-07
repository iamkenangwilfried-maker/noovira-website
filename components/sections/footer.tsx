import { Instagram, Youtube, Facebook } from "lucide-react";

const links = {
  Services: ["Free Website", "Speed to Lead", "Google Reviews", "DB Reactivation"],
  Company: ["About Us", "Case Studies", "Pricing", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-card-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-7">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4 flex items-start">
              <img src="/logo.png" alt="Noovira AI" className="h-14 w-auto" />
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              We build free websites and AI systems for roofing contractors
              that turn missed calls into booked jobs.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-muted hover:bg-card-border border border-card-border rounded-lg flex items-center justify-center transition-colors"
                >
                  <s.icon size={16} className="text-secondary" />
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
                  <li key={item}>
                    <a href="#" className="text-secondary/60 text-sm hover:text-navy transition-colors">
                      {item}
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
