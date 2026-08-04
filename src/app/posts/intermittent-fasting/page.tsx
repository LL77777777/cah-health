import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
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
          The fitness industry loves to complicate nutrition. We count macros, track calories, and obsess over specific meal timings. But the most effective metabolic hack we’ve found at CAH Health isn't about <em>what</em> you eat, but <em>when</em> you stop eating.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">The Hunger Wave</h2>
        <p>
          Most people fail at intermittent fasting because they try to "power through" the hunger. If you’re white-knuckling your way to noon, you’re doing it wrong. The secret to the 16:8 protocol is recognizing that hunger is a wave, not a cliff. It rises, peaks, and then—crucially—recedes. 
        </p>
        <p>
          When you push your first meal to 12:00 PM, you’re giving your insulin levels a much-needed holiday. During those 16 hours of fasted state, your body isn't just "burning fat"—it's finally getting a chance to switch gears from glucose-dependency to metabolic flexibility. That sluggish, foggy feeling you get at 3:00 PM? That’s often just your body struggling to switch fuels.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">Finding Your Rhythm</h2>
        <p>
          We’ve noticed that people who succeed at 16:8 don’t treat it like a temporary diet. They treat it like a schedule. If you’re a morning person, you might prefer eating from 8:00 AM to 4:00 PM. If you enjoy social dinners, shift that window to 12:00 PM to 8:00 PM.
        </p>
        <p>
          It isn’t about being perfect. If you break your fast at 11:30 AM one day because your body is genuinely asking for fuel, listen to it. The goal isn't to be a slave to the clock; the goal is to stop the constant snacking that keeps your system in a state of perpetual digestion.
        </p>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-serif text-lg font-bold mb-2">A Note on Electrolytes</h3>
          <p className="text-gray-600">
            One mistake we often see: people drinking gallon after gallon of plain water while fasting. You're flushing out minerals. If you find yourself getting irritable or developing a mild headache in the late morning, your body is likely signaling for sodium, potassium, and magnesium. Keep your electrolytes balanced—it makes the fasting window feel effortless.
          </p>
        </div>
      </article>
    </main>
  );
}
