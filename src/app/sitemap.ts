import type { MetadataRoute } from "next";
import { articles, categoryDetails } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];
  const categoryRoutes = Object.keys(categoryDetails).map(
    (slug) => `/category/${slug}`,
  );
  const articleRoutes = articles.map((article) => `/posts/${article.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes].map((route) => ({
    url: absoluteUrl(route || "/"),
  }));
}
