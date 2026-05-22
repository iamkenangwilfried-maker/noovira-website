import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { getAllArticles } from "@/lib/articles";
import BlogGrid from "./blog-grid";

export const metadata: Metadata = {
  title: "Blog — Conseils Site Internet & SEO pour Couvreurs | Noovira AI",
  description:
    "Guides pratiques pour couvreurs et entreprises de rénovation en Suisse romande : site internet, SEO local, génération de devis. Par Noovira AI.",
  openGraph: {
    title: "Blog Noovira AI — Conseils pour couvreurs Suisse romande",
    description:
      "Guides pratiques pour couvreurs et entreprises de rénovation en Suisse romande : site internet, SEO local, génération de devis.",
    url: "https://nooviraai.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main>
      <Navbar />

      {/* ── Hero — même style que /realisations ── */}
      <section className="section-dark pt-28 pb-16 lg:pt-40 lg:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="font-heading text-text-light leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Guides & Conseils{" "}
            <span className="font-black">pour Couvreurs</span>
          </h1>
          <p className="text-text-light/45 text-base max-w-xl mx-auto">
            Site internet, SEO local, génération de devis — tout ce qu&apos;un
            couvreur en Suisse romande doit savoir pour dominer Google.
          </p>
        </div>
      </section>

      {/* ── Articles grid — fond blanc comme la section Portfolio ── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlogGrid articles={articles} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
