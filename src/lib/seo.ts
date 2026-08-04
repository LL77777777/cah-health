import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";

export function createArticleMetadata(slug: string): Metadata {
  const article = getArticleBySlug(slug);
  const canonical = `/posts/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: article.headline,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.headline,
      description: article.excerpt,
      images: [article.image],
    },
  };
}
