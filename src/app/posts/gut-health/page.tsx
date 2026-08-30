import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedArticles } from "@/components/related-articles";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";

const article = getArticleBySlug("gut-health");
export const metadata = createArticleMetadata(article.slug);

export default function GutHealthPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <ArticleJsonLd article={article} />
      <article className="prose prose-lg prose-slate mx-auto">
        <h1>{article.headline}</h1>
        <ArticleByline />
        
        <p>
          Digestive responses are highly individual, and no seven-day plan can
          “reset” or optimize the microbiome. This short guide is a practical way
          to observe your routine and build gradual, food-first habits without
          promising a specific health outcome.
        </p>
        
        <h2>Build a Food-First Foundation</h2>
        <p>
          Start with gradual, sustainable changes: eat a wider variety of
          fiber-rich plants, include fermented foods if you tolerate them, stay
          hydrated, and keep a consistent meal routine. Increase fiber slowly to
          give your digestive system time to adapt.
        </p>
        
        <div className="my-10 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="!mt-0">A Note on Supplements</h3>
          <p className="!mb-0">
            A supplement is not a substitute for a varied diet, and the right
            choice depends on your individual needs. Speak with a qualified
            healthcare professional if symptoms persist or before starting a new
            supplement.
          </p>
        </div>

        <h2>Sources and further reading</h2>
        <ul>
          <li>
            <a
              href="https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/eating-diet-nutrition"
              target="_blank"
              rel="noreferrer"
            >
              NIDDK: Eating, diet, and nutrition for irritable bowel syndrome
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          This article provides general educational information, not a diagnosis
          or individualized nutrition advice. Seek medical care for persistent,
          severe, or worsening digestive symptoms.
        </p>
        <RelatedArticles article={article} />
      </article>
    </main>
  );
}
