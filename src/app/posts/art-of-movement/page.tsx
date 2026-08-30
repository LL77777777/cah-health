import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedArticles } from "@/components/related-articles";
import {
  AffiliateDisclosure,
  AffiliateLinkLabel,
} from "@/components/affiliate-disclosure";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";
import Link from "next/link";

const article = getArticleBySlug("art-of-movement");
export const metadata = createArticleMetadata(article.slug);

export default function ArtOfMovement() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <ArticleJsonLd article={article} />
      {/* Article hero image */}
      <div className="w-full aspect-[2/1] overflow-hidden mb-12 bg-gray-100">
        <img 
          src="/hoka1.jpg" 
          alt="Movement" 
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-4xl font-serif mb-4">The Art of Movement: Why Fitness is a Lifetime Practice</h1>
        <ArticleByline />
        <AffiliateDisclosure />

        <p className="text-xl leading-relaxed">
          There is a popular saying: <em>Life is movement.</em> It sounds simple, but in our modern, screen-bound reality, it’s a radical act. True fitness isn't about crushing a workout once a week; it’s about the way you move your body every single day.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">1. The Impact Myth: Run Smarter, Not Harder</h2>
        <p>
          Running comfort depends on more than willpower or a single piece of
          equipment. Training load, recovery, running form, strength, previous
          injuries, and footwear can all matter. Gradual progression and a shoe
          that fits securely are more useful starting points than chasing one
          universal cadence or cushioning formula.
        </p>
        <p>
          Different runners prefer different levels of cushioning and support.
          Rather than assigning yourself a shoe category from a single wear
          pattern, consider comfort, fit, the surface you use, and guidance from a
          qualified professional when pain or recurring problems are involved.
        </p>

        {/* Primary affiliate call to action */}
        <div className="my-8 text-center">
          <a href="/holabird" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-600 transition-all">
            Explore Running Shoes
          </a>
          <AffiliateLinkLabel />
        </div>

        <h2 className="text-2xl font-serif mt-12 mb-4">2. Lateral Stability for Court Movement</h2>
        <p>
          Pickleball and tennis involve side-to-side movement, short sprints,
          stops, and pivots. Running shoes are primarily designed for repeated
          forward motion, so many players find that a stable court shoe is better
          matched to regular court play.
        </p>
        <p>
          Look for a secure heel and midfoot, a stable platform, and an outsole
          suited to the actual court surface. No shoe can eliminate injury risk,
          and fit and construction matter more than whether the box uses the word
          “pickleball.”
        </p>

        {/* Recommended partner creative */}
        <div className="my-12 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Featured Retailer</p>
          <a href="/holabird" className="hover:opacity-80 transition-opacity">
             <img 
              src="https://www.gopjn.com/b/4-355093-287681-29923" 
              alt="Holabird Sports" 
              className="max-w-full h-auto" 
            />
          </a>
          <AffiliateLinkLabel />
        </div>

        <p>
          <strong>Holabird Sports</strong> carries running and court footwear
          across a range of brands and intended uses. Compare the specifications,
          fit options, return terms, price, and current availability before
          deciding whether a particular model suits your needs.
        </p>

        {/* Secondary affiliate call to action */}
        <div className="my-8 text-center">
          <a href="/holabird" className="inline-block px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all">
            Browse Court & Performance Gear
          </a>
          <AffiliateLinkLabel />
        </div>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h2 className="!mt-0">Choose Footwear for the Way You Move</h2>
          <p>
            A comfortable running shoe and a stable court shoe solve different
            movement problems. Start with our comparison of{" "}
            <Link href="/posts/running-shoes-vs-pickleball-shoes">
              running shoes and pickleball shoes
            </Link>
            , then learn how{" "}
            <Link href="/posts/pickleball-shoes-vs-tennis-shoes">
              tennis and pickleball shoes compare
            </Link>{" "}
            and how to choose for{" "}
            <Link href="/posts/indoor-vs-outdoor-pickleball-shoes">
              indoor and outdoor courts
            </Link>
            .
          </p>
        </div>

        <h2 className="text-2xl font-serif mt-12 mb-4">The Investment</h2>
        <p>
          Price alone does not determine whether a shoe is appropriate. Prioritize
          fit, surface, stability, and condition, then choose the option that makes
          sense for how often you move and what you can comfortably spend.
        </p>
        <p>
          Stay active, stay intentional, and keep moving.
        </p>
        <p className="text-sm text-gray-500">
          This article provides general educational information, not medical or
          individualized footwear advice. Consult a qualified professional about
          persistent pain, instability, or a previous injury.
        </p>
        <RelatedArticles article={article} />
      </article>
    </main>
  );
}
