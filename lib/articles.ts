import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

/** Auteure par défaut pour tous les articles Noovira AI */
export const DEFAULT_AUTHOR = "Jennifer Hang";

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  readingTime?: string;
  faq?: Array<{ q: string; a: string }>;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

/** Strip `export const` blocks from MDX so compileMDX doesn't choke */
function stripMdxExports(source: string): string {
  // Remove export const blocks: export const name = { ... };
  // These span multiple lines; remove everything from "export const" until matching "};
  return source.replace(/^export const \w+ = \{[\s\S]*?^\};/gm, "").trim();
}

/** Get all article slugs (for generateStaticParams) */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Get all articles sorted by publishedAt desc (for listing page) */
export function getAllArticles(): ArticleFrontmatter[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const slugs = getAllArticleSlugs();
  const articles = slugs
    .map((slug) => {
      const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const fm = data as ArticleFrontmatter;
      return { ...fm, author: fm.author || DEFAULT_AUTHOR, slug };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return articles;
}

/** Get a single article's frontmatter + cleaned content */
export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const fm = data as ArticleFrontmatter;
  return {
    ...fm,
    author: fm.author || DEFAULT_AUTHOR,   // fallback Jennifer Hang si non précisé
    slug,
    content: stripMdxExports(content),
  };
}
