import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
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
      images: [{ url: article.image, alt: article.imageAlt ?? article.title }],
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
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  /* JSON-LD Article */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author, url: "https://nooviraai.com" },
    publisher: {
      "@type": "Organization",
      name: "Noovira AI",
      url: "https://nooviraai.com",
      logo: "https://nooviraai.com/logo-novira.svg",
    },
    image: article.image.startsWith("http")
      ? article.image
      : `https://nooviraai.com${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: `https://nooviraai.com/blog/${article.slug}`,
  };

  /* JSON-LD FAQPage */
  const faqSchema =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
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

      <main>
        <Navbar />

        {/* ── Hero dark — même style que /realisations ── */}
        <section className="section-dark pt-28 pb-0 lg:pt-36">
          <div className="max-w-4xl mx-auto px-6 pb-10">
            {/* Back */}
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-text-light/40 hover:text-text-light transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </a>

            {/* Category */}
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 text-text-light/40 text-sm border-t border-white/10 pt-6">
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

          {/* Hero image — bord du dark, déborde dans le blanc */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-t-2xl overflow-hidden shadow-2xl">
              <img
                src={article.image}
                alt={article.imageAlt ?? article.title}
                className="w-full object-cover object-top"
                style={{ maxHeight: "480px" }}
              />
            </div>
          </div>
        </section>

        {/* ── Contenu article — fond clair ── */}
        <section className="bg-background py-16">
          <div className="max-w-3xl mx-auto px-6">

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
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

            {/* MDX content */}
            <article
              className="
                prose max-w-none
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark prose-headings:tracking-tight
                prose-h1:hidden
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                prose-h3:text-lg prose-h3:mt-7 prose-h3:mb-2
                prose-p:text-body prose-p:leading-relaxed prose-p:text-base
                prose-a:text-dark prose-a:font-semibold prose-a:underline prose-a:decoration-accent hover:prose-a:decoration-2
                prose-strong:text-dark prose-strong:font-semibold
                prose-ul:text-body prose-ol:text-body
                prose-li:marker:text-accent
                prose-table:text-sm prose-table:w-full
                prose-thead:bg-bg-alt
                prose-th:text-dark prose-th:font-semibold prose-th:p-3 prose-th:text-left
                prose-td:p-3 prose-td:border-b prose-td:border-border
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-alt prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full prose-img:mt-8 prose-img:mb-2
                prose-hr:border-border
                [&_em]:text-muted [&_em]:text-sm [&_em]:not-italic [&_em]:block [&_em]:-mt-1 [&_em]:mb-6
              "
            >
              <MDXRemote
                source={article.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
