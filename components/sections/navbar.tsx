"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Notre Processus", href: "#processus" },
  { label: "Gestion de Site",  href: "#gestion"   },
  { label: "SEO & Publicité",  href: "#seo"        },
  { label: "Portfolio",        href: "#portfolio"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [lang, setLang]         = useState<"fr" | "en">("fr");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-border-dark shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="Noovira AI" className="h-10 w-auto brightness-0 invert" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-light/70 hover:text-text-light transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-semibold text-text-light/50 hover:text-text-light transition-colors tracking-widest uppercase"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-beige text-dark text-sm font-bold hover:bg-beige-light transition-colors duration-200"
          >
            Démarrer votre projet
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-light"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-border-dark px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-light/70 hover:text-text-light transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-beige text-dark text-sm font-bold mt-1"
          >
            Démarrer votre projet
          </a>
          <button
            onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
            className="text-xs font-semibold text-text-light/40 hover:text-text-light transition-colors tracking-widest uppercase text-left"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      )}
    </header>
  );
}
