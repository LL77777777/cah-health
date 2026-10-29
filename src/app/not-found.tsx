import Link from "next/link";
import { articles } from "@/data/articles";

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-serif">Looking for a CAH Health guide?</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        We could not find a page at this address. You may have followed an old
        link. Explore our current guides below, or return to the home page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
      >
        Visit the home page
      </Link>
      <h2 className="mt-14 text-2xl font-serif">Current guides</h2>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug} className="border border-gray-200 p-5">
            <Link
              href={`/posts/${article.slug}`}
              className="text-lg font-medium underline underline-offset-4 hover:text-gray-600"
            >
              {article.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {article.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
