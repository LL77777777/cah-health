import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedArticles } from "@/components/related-articles";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";

const article = getArticleBySlug("sleep-optimization");
export const metadata = createArticleMetadata(article.slug);

export default function SleepPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <ArticleJsonLd article={article} />
      {/* Article hero image */}
<div className="w-full aspect-[2/1] overflow-hidden mb-12 bg-gray-100">
  <img 
    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200" 
    alt="Restorative sleep" 
    className="w-full h-full object-cover"
  />
</div>

      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-4xl font-serif mb-4">{article.headline}</h1>
        <ArticleByline />

        <p className="text-xl leading-relaxed">
          Time in bed and sleep quality are related but not identical. A regular
          schedule, the sleep environment, light exposure, stress, substances,
          and health conditions can all affect how rested you feel.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">Temperature and the Sleep Environment</h2>
        <p>
          Body temperature follows a daily rhythm, and many people sleep more
          comfortably in a room that is cool, quiet, and dark. Heavy bedding,
          poor ventilation, or a room that feels too warm can make comfort harder
          to maintain.
        </p>
        <p>
          There is no single ideal temperature for everyone. Adjust the room,
          clothing, and bedding gradually, and avoid interpreting one difficult
          night as proof of a specific biological problem.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">Light Is a Signal</h2>
        <p>
          Light is an important signal for the sleep-wake cycle. Daytime light
          exposure and dimmer light before bed can support a consistent routine,
          while bright evening light may make it harder for some people to fall
          asleep.
        </p>
        <p>
          Spend time outdoors during the day when practical, keep wake and sleep
          times reasonably consistent, and reduce bright screens or room lighting
          before bed. Melatonin supplements are not a substitute for evaluating
          persistent sleep problems; discuss their use, timing, and possible
          interactions with a qualified healthcare professional.
        </p>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-serif text-lg font-bold mb-2">The Night Routine</h3>
          <p className="text-gray-600">
            Start with repeatable basics: allow enough time for sleep, keep a
            consistent schedule, make the room comfortable, and choose a quiet
            wind-down activity instead of bright or stimulating content. Change
            one variable at a time so you can tell what is actually useful.
          </p>
        </div>

        <h2>Sources and further reading</h2>
        <ul>
          <li>
            <a
              href="https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits"
              target="_blank"
              rel="noreferrer"
            >
              National Heart, Lung, and Blood Institute: Healthy sleep habits
            </a>
          </li>
          <li>
            <a
              href="https://www.nhlbi.nih.gov/health/sleep-deprivation/body-clock"
              target="_blank"
              rel="noreferrer"
            >
              National Heart, Lung, and Blood Institute: The sleep-wake cycle
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          This article provides general educational information, not medical
          advice. Speak with a qualified healthcare professional if sleep problems
          are persistent, severe, or affecting your safety or daily function.
        </p>
        <RelatedArticles article={article} />
      </article>
    </main>
  );
}
