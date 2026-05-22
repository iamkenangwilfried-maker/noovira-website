"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { ArticleFrontmatter } from "@/lib/articles";

export default function BlogGrid({ articles }: { articles: ArticleFrontmatter[] }) {
  if (articles.length === 0) {
    return (
      <p className="text-text-light/40 text-center py-20">
        Aucun article pour le moment. Revenez bientôt.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, i) => (
        <motion.a
          key={article.slug}
          href={`/blog/${article.slug}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="group relative rounded-2xl overflow-hidden block cursor-pointer border border-border-dark hover:border-white/20 transition-colors"
          style={{ minHeight: "420px" }}
        >
          {/* Cover image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={article.image}
              alt={article.imageAlt ?? article.title}
              className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-65 transition-opacity duration-500"
            />
          </div>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/65 to-dark/10" />

          {/* Category — top left */}
          <div className="absolute top-5 left-5 z-20">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">
              {article.category}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readingTime ?? "5 min"}
              </span>
              <span>
                {new Date(article.publishedAt).toLocaleDateString("fr-CH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <h2
              className="font-heading font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              {article.title}
            </h2>

            <span className="inline-flex items-center gap-1.5 bg-rose text-dark text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#F0F0F0] transition-all">
              Lire l&apos;article <ArrowUpRight size={12} />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
