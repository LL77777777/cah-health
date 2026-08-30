import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import { HomepageAffiliateBanner } from '@/components/homepage-affiliate-banner';
import { SITE_DESCRIPTION } from '@/lib/site';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  description: SITE_DESCRIPTION,
};

export default function Home() {
  const featuredArticles = articles.filter((article) => article.featured);
  const moreGuides = articles.filter((article) => !article.featured);

  return (
    <main>
      {/* Hero section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/page3.jpg" 
            alt="Wellness Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">Redefining Modern Wellness</h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Independent, evidence-aware guidance for movement, everyday wellness,
            and intentional living.
          </p>
          <Link href="/posts/art-of-movement" className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all">
            Read Our Latest
          </Link>
        </div>
      </section>

      {/* Featured articles */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-serif mb-12 text-center">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/posts/${article.slug}`}
              className="group cursor-pointer"
            >
              <div className="h-64 bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={article.image}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  alt={article.imageAlt}
                />
              </div>
              <h3 className="text-xl font-medium">{article.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <HomepageAffiliateBanner />

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-serif mb-12 text-center">More Guides</h2>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {moreGuides.map((article) => (
              <Link
                key={article.slug}
                href={`/posts/${article.slug}`}
                className="group cursor-pointer"
              >
                <div className="h-64 bg-white mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={article.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={article.imageAlt}
                  />
                </div>
                <h3 className="text-xl font-medium">{article.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
