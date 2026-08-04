import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  categoryDetails,
  type CategorySlug,
} from "@/data/articles";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

function isCategorySlug(slug: string): slug is CategorySlug {
  return slug in categoryDetails;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categoryDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  if (!isCategorySlug(params.slug)) {
    return {};
  }

  const category = categoryDetails[params.slug];

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/category/${params.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  if (!isCategorySlug(params.slug)) {
    notFound();
  }

  const category = categoryDetails[params.slug];
  const categoryArticles = articles.filter(
    (article) => article.category === params.slug,
  );

  return (
    <main>
      <header className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500 mb-4">
            CAH Health
          </p>
          <h1 className="text-5xl font-serif mb-6">{category.name}</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {category.description}
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {categoryArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/posts/${article.slug}`}
              className="group"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-serif group-hover:text-gray-600 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-gray-500">{article.excerpt}</p>
              <span className="inline-block mt-4 text-sm font-bold uppercase tracking-widest">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
