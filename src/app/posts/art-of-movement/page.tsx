import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
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

        <p className="text-xl leading-relaxed">
          There is a popular saying: <em>Life is movement.</em> It sounds simple, but in our modern, screen-bound reality, it’s a radical act. True fitness isn't about crushing a workout once a week; it’s about the way you move your body every single day.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">1. The Impact Myth: Run Smarter, Not Harder</h2>
        <p>
          Many people quit running because of "shin splints" or knee fatigue. The secret to sustainable running isn't just willpower—it's <strong>cadence and cushioning</strong>. If your stride is too long, you are slamming your heel into the pavement, sending shockwaves straight to your joints.
        </p>
        <p>
          Focus on shorter, quicker steps. And more importantly, ensure your footwear is designed for your specific foot strike. A neutral runner in stability shoes will feel sluggish; a runner needing support in a minimal shoe will feel broken.
        </p>

        {/* Primary affiliate call to action */}
        <div className="my-8 text-center">
          <a href="/holabird" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-600 transition-all">
            Find Your Perfect Running Shoes
          </a>
        </div>

        <h2 className="text-2xl font-serif mt-12 mb-4">2. Lateral Stability: The Secret to Court Health</h2>
        <p>
          Whether you play pickleball or tennis, movement isn't just forward—it's side-to-side. Most amateur athletes make the mistake of using running shoes for court sports. This is a recipe for a rolled ankle.
        </p>
        <p>
          Court sports require a "low-to-ground" feel and rigid lateral support. When you move side-to-side, your shoe needs to be your anchor. If your gear lacks this, your body compensates, leading to long-term ligament fatigue.
        </p>

        {/* Recommended partner creative */}
        <div className="my-12 flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-widest">Recommended Gear Partner</p>
          <a href="/holabird" className="hover:opacity-80 transition-opacity">
             <img 
              src="https://www.gopjn.com/b/4-355093-287681-29923" 
              alt="Holabird Sports" 
              className="max-w-full h-auto" 
            />
          </a>
        </div>

        <p>
          We’ve seen the industry evolve, and frankly, very few retailers get this balance right. <strong>Holabird Sports</strong> has been our go-to because they don't just sell "shoes"—they stock professional-grade equipment for people who respect their own body's mechanics.
        </p>

        {/* Secondary affiliate call to action */}
        <div className="my-8 text-center">
          <a href="/holabird" className="inline-block px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all">
            Browse Court & Performance Gear
          </a>
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
          Think of your sports gear as an investment in your "movement budget." If you spend 5 hours a week moving, you are putting a lot of mileage on your joints. Don't cheap out on the only interface between you and the ground.
        </p>
        <p>
          Stay active, stay intentional, and keep moving.
        </p>
      </article>
    </main>
  );
}
