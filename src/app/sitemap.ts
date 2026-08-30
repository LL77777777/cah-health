import type { MetadataRoute } from "next";
import { articles, categoryDetails } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { route: "", lastModified: "2026-08-30" },
    { route: "/about", lastModified: "2026-08-04" },
    { route: "/privacy-policy", lastModified: "2026-08-04" },
    { route: "/terms", lastModified: "2026-08-04" },
    { route: "/disclaimer", lastModified: "2026-08-04" },
  ];
  const categoryRoutes = Object.entries(categoryDetails).map(
    ([slug, category]) => ({
      url: absoluteUrl(`/category/${slug}`),
      lastModified: category.lastModified,
    }),
  );
  const articleRoutes = articles.map((article) => ({
    url: absoluteUrl(`/posts/${article.slug}`),
    lastModified: article.lastModified,
  }));

  return [
    ...staticRoutes.map(({ route, lastModified }) => ({
      url: absoluteUrl(route || "/"),
      lastModified,
    })),
    ...categoryRoutes,
    ...articleRoutes,
  ];
}
