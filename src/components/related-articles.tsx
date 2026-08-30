import Link from "next/link";
import { categoryDetails, getArticleBySlug, type Article } from "@/data/articles";

type RelatedArticlesProps = {
  article: Article;
};

export function RelatedArticles({ article }: RelatedArticlesProps) {
  const relatedArticles = article.relatedSlugs.map(getArticleBySlug);
  const category = categoryDetails[article.category];

  return (
    <aside
      aria-labelledby={`related-${article.slug}`}
      className="not-prose mt-14 border-t border-gray-200 pt-8"
    >
      <h2
        id={`related-${article.slug}`}
        className="font-serif text-2xl font-medium text-gray-900"
      >
        Continue exploring
      </h2>
      {relatedArticles.length > 0 && (
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {relatedArticles.map((relatedArticle) => (
            <li key={relatedArticle.slug}>
              <Link
                href={`/posts/${relatedArticle.slug}`}
                className="block h-full border border-gray-200 p-4 transition-colors hover:border-gray-400"
              >
                <span className="font-medium text-gray-900">
                  {relatedArticle.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-gray-600">
                  {relatedArticle.excerpt}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-5 text-sm text-gray-600">
        <Link
          href={`/category/${article.category}`}
          className="font-medium underline underline-offset-4 hover:text-gray-900"
        >
          Browse all {category.name.toLowerCase()} guides
        </Link>
      </p>
    </aside>
  );
}
