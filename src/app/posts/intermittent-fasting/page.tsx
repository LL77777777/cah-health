import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedArticles } from "@/components/related-articles";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";

const article = getArticleBySlug("intermittent-fasting");
export const metadata = createArticleMetadata(article.slug);

export default function FastingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <ArticleJsonLd article={article} />
      {/* Article hero image */}
      <div className="w-full aspect-[2/1] overflow-hidden mb-12 bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200" 
          alt="Healthy living" 
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-4xl font-serif mb-4">The 16:8 Protocol: Why It’s Less About Dieting and More About Timing</h1>
        <ArticleByline />

        <p className="text-xl leading-relaxed">
          The 16:8 pattern is one form of time-restricted eating: meals are
          consumed within an eight-hour window, followed by a sixteen-hour period
          without calories. Some people find the schedule simple, but it is not a
          universal solution and does not make food quality or total intake
          irrelevant.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">The Hunger Wave</h2>
        <p>
          Hunger can change throughout the day and may become easier or harder to
          manage as routines change. Persistent dizziness, weakness, headaches,
          or difficulty concentrating are not signals to ignore. Stop the fast
          and seek appropriate medical guidance if symptoms concern you.
        </p>
        <p>
          During a fasting period, the body gradually changes how it uses stored
          energy. That process does not guarantee weight loss or better health,
          and research on the long-term effects of intermittent fasting in humans
          remains incomplete. Meal timing is only one part of nutrition.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">Finding Your Rhythm</h2>
        <p>
          If a qualified professional agrees that time-restricted eating is
          appropriate for you, choose a schedule you can follow without skipping
          essential nutrition. An earlier window may suit some routines, while a
          later window may fit social or work commitments better.
        </p>
        <p>
          Flexibility is more useful than treating the clock as a test of
          willpower. A shorter eating window does not compensate for an
          unbalanced diet, inadequate calories, poor sleep, or other health
          needs.
        </p>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-serif text-lg font-bold mb-2">Safety Comes First</h3>
          <p className="text-gray-600">
            Intermittent fasting may be inappropriate for children and teenagers,
            people who are pregnant or breastfeeding, people with a history of
            disordered eating, and some people taking medication or managing a
            medical condition. Do not add electrolyte supplements or large
            amounts of sodium or potassium simply to extend a fast without
            professional guidance.
          </p>
        </div>

        <h2>Sources and further reading</h2>
        <ul>
          <li>
            <a
              href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
              target="_blank"
              rel="noreferrer"
            >
              National Institute on Aging: Calorie restriction and fasting diets
            </a>
          </li>
          <li>
            <a
              href="https://www.nia.nih.gov/news/research-intermittent-fasting-shows-health-benefits"
              target="_blank"
              rel="noreferrer"
            >
              National Institute on Aging: Intermittent fasting research and its limits
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          This article provides general educational information and is not
          medical or nutritional advice. Consult a qualified healthcare
          professional before fasting, especially if you have a medical
          condition, take medication, are pregnant or breastfeeding, or have a
          history of disordered eating.
        </p>
        <RelatedArticles article={article} />
      </article>
    </main>
  );
}
