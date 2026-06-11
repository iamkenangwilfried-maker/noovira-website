import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { getAllArticles } from "@/lib/articles";
import { SERVICES, METIERS, VILLES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nooviraai.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/creation-de-site`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gestion-de-site`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/seo-publicite`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/realisations`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/blog`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/contact`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${baseUrl}/realisations/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articles = getAllArticles();
  const now = new Date();
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => {
    const articleDate = new Date(a.updatedAt ?? a.publishedAt);
    return {
      url: `${baseUrl}/blog/${a.slug}`,
      // Never emit a future date — cap to build time so Google doesn't see
      // unpublished dates and deprioritise crawling.
      lastModified: articleDate > now ? now : articleDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const programmaticPages: MetadataRoute.Sitemap = []
  for (const service of SERVICES) {
    for (const metier of METIERS) {
      for (const ville of VILLES) {
        programmaticPages.push({
          url: `${baseUrl}/${service.slug}/${metier.slug}/${ville.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })
      }
    }
  }

  return [...staticPages, ...projectPages, ...articlePages, ...programmaticPages];
}
