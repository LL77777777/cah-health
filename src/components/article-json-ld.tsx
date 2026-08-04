import type { Article } from "@/data/articles";
import {
  absoluteUrl,
  EDITORIAL_AUTHOR,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

type ArticleJsonLdProps = {
  article: Article;
};

export function ArticleJsonLd({ article }: ArticleJsonLdProps) {
  const articleUrl = absoluteUrl(`/posts/${article.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.excerpt,
    image: [absoluteUrl(article.image)],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: EDITORIAL_AUTHOR,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
