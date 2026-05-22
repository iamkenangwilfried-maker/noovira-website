import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { ArrowLeft, Clock, User, Tag, ArrowUpRight } from "lucide-react";

/* ── Static params ── */
export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Noovira AI`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://nooviraai.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.image,
          alt: article.imageAlt ?? article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

/* ── Page ── */
export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  /* JSON-LD — Article */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
      url: "https://nooviraai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Noovira AI",
      url: "https://nooviraai.com",
      logo: "https://nooviraai.com/logo-novira.svg",
    },
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: `https://nooviraai.com/blog/${article.slug}`,
  };

  /* JSON-LD — FAQPage (from frontmatter) */
  const faqSchema =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ── Dark header band (like other pages) ── */}
        <div className="bg-dark pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back link */}
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-beige hover:text-text-light transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </a>

            {/* Category badge */}
            <div className="mb-4">
              <span className="bg-accent text-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-text-light leading-tight mb-6 tracking-tight">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-beige text-sm">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readingTime ?? "5 min de lecture"}
              </span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("fr-CH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>

        {/* ── Hero image below dark header ── */}
        <div className="max-w-4xl mx-auto px-6 -mt-0">
          <div className="w-full overflow-hidden rounded-b-2xl shadow-lg">
            <img
              src={article.image}
              alt={article.imageAlt ?? article.title}
              className="w-full h-auto max-h-[420px] object-cover object-top"
            />
          </div>
        </div>

        {/* ── Article container ── */}
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-24">

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs text-muted bg-bg-alt border border-border px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ── MDX content ── */}
          <article
            className="
              prose prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-dark prose-headings:tracking-tight
              prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-0
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-secondary prose-p:leading-relaxed prose-p:text-base
              prose-a:text-dark prose-a:font-semibold prose-a:underline prose-a:decoration-accent
              hover:prose-a:decoration-2
              prose-strong:text-dark prose-strong:font-semibold
              prose-ul:text-secondary prose-ol:text-secondary
              prose-li:marker:text-accent
              prose-table:text-sm prose-thead:bg-bg-alt
              prose-th:text-dark prose-th:font-semibold prose-th:p-3
              prose-td:p-3 prose-td:border-b prose-td:border-border
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-alt prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:rounded-r-xl
              prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full
              prose-hr:border-border
              prose-code:text-dark prose-code:bg-bg-alt prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            "
          >
            <MDXRemote
              source={article.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>

          {/* ── CTA box ── */}
          <div className="mt-16 bg-dark text-text-light rounded-3xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Vous êtes couvreur en Suisse romande ?
            </h2>
            <p className="text-beige text-sm mb-6 max-w-lg">
              Obtenez une analyse gratuite de votre présence en ligne en 48h. On
              vous montre exactement ce que vos concurrents font mieux que vous
              sur Google — et comment les dépasser.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-dark font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Demander un audit gratuit
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 border border-border-dark text-text-light hover:border-beige font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
