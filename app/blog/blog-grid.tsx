"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ArticleFrontmatter } from "@/lib/articles";

/* ── Carte article — copie exacte de ProjectCard du Portfolio Sher ── */
function ArticleCard({
  article,
  delay = 0,
  featured = false,
}: {
  article: ArticleFrontmatter;
  delay?: number;
  featured?: boolean;
}) {
  return (
    <motion.a
      href={`/blog/${article.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl overflow-hidden bg-dark block cursor-pointer"
      style={{ height: featured ? "560px" : "480px" }}
    >
      {/* Image cover */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt ?? article.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Gradient overlay — identique Portfolio */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/5 z-10" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="text-[12px] font-bold uppercase tracking-widest text-white/40 mb-2">
          {article.category}
        </div>
        <h3
          className="font-heading font-bold text-white leading-tight mb-4"
          style={{ fontSize: featured ? "clamp(1.5rem, 3vw, 2.2rem)" : "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          {article.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 bg-rose text-dark text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#F0F0F0] group-hover:text-dark transition-all">
          Lire l&apos;article <ArrowUpRight size={12} />
        </span>
      </div>
    </motion.a>
  );
}

export default function BlogGrid({ articles }: { articles: ArticleFrontmatter[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Parallax — même effet que Portfolio Sher */
  const yLeft  = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  if (articles.length === 0) {
    return (
      <p className="text-muted text-center py-20">
        Aucun article pour le moment. Revenez bientôt.
      </p>
    );
  }

  /* 1 seul article → grande carte centrée */
  if (articles.length === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <ArticleCard article={articles[0]} featured />
      </div>
    );
  }

  /* 2+ articles → même layout 2 colonnes staggerées que Portfolio */
  const colA = articles.filter((_, i) => i % 2 === 0);
  const colB = articles.filter((_, i) => i % 2 !== 0);

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-2 gap-5">
      <motion.div className="flex flex-col gap-5" style={{ y: yLeft }}>
        {colA.map((a, i) => (
          <ArticleCard key={a.slug} article={a} delay={i * 0.06} />
        ))}
      </motion.div>
      <motion.div className="flex flex-col gap-5 sm:mt-12" style={{ y: yRight }}>
        {colB.map((a, i) => (
          <ArticleCard key={a.slug} article={a} delay={i * 0.06 + 0.08} />
        ))}
      </motion.div>
    </div>
  );
}
