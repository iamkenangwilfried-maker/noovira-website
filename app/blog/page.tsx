import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { getAllArticles } from "@/lib/articles";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conseils SEO & Site Internet pour Couvreurs | Noovira AI",
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
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-24">
        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Ressources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-4 leading-tight">
            Blog — Conseils pour couvreurs <br className="hidden md:block" />
            en Suisse romande
          </h1>
          <p className="text-secondary text-lg max-w-2xl">
            Guides pratiques sur le site internet, le SEO local et la génération
            de devis pour les couvreurs et entreprises de rénovation.
          </p>
        </section>

        {/* ── Articles grid ── */}
        <section className="max-w-7xl mx-auto px-6">
          {articles.length === 0 ? (
            <p className="text-muted text-center py-20">
              Aucun article pour le moment. Revenez bientôt.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-dark transition-all duration-200 hover:shadow-md"
                >
                  {/* Cover image */}
                  <div className="relative h-48 overflow-hidden bg-bg-alt">
                    <img
                      src={article.image}
                      alt={article.imageAlt ?? article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-dark text-text-light text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-muted text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime ?? "5 min"}
                      </span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString(
                          "fr-CH",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <h2 className="text-dark font-bold text-lg leading-snug mb-3 group-hover:text-body transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-secondary text-sm leading-relaxed flex-1 mb-4">
                      {article.description}
                    </p>

                    {/* Tags */}
                    {article.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-muted bg-bg-alt px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-sm font-semibold text-dark group-hover:text-body transition-colors mt-auto">
                      Lire l&apos;article
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* ── Bottom CTA ── */}
        <section className="max-w-3xl mx-auto px-6 mt-20 text-center">
          <div className="bg-dark rounded-3xl p-10 text-text-light">
            <h2 className="text-2xl font-bold mb-3">
              Vous êtes couvreur en Suisse romande ?
            </h2>
            <p className="text-beige text-sm mb-6 max-w-lg mx-auto">
              Obtenez une analyse gratuite de votre présence en ligne en 48h. On
              vous montre ce que vos concurrents font mieux sur Google — et
              comment les dépasser.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-dark font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Demander un audit gratuit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
