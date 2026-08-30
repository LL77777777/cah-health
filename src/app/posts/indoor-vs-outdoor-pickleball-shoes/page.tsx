import Link from "next/link";
import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedArticles } from "@/components/related-articles";
import {
  AffiliateDisclosure,
  AffiliateLinkLabel,
} from "@/components/affiliate-disclosure";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";

const article = getArticleBySlug("indoor-vs-outdoor-pickleball-shoes");
export const metadata = createArticleMetadata(article.slug);

export default function IndoorVsOutdoorPickleballShoesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <ArticleJsonLd article={article} />

      <div className="w-full aspect-[16/9] overflow-hidden mb-12 bg-gray-100">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
          Fitness · Footwear Guide
        </p>
        <h1>{article.headline}</h1>
        <ArticleByline />
        <AffiliateDisclosure />

        <p className="lead">
          <strong>Short answer:</strong> choose pickleball shoes for the playing
          surface, not simply for whether the court is indoors or outdoors. A
          polished wood gym floor usually needs a clean, non-marking outsole with
          dependable grip. An outdoor acrylic or concrete court rewards tougher,
          abrasion-resistant rubber. An indoor facility with an acrylic hard
          court may use the same type of shoe you wear outside.
        </p>

        <h2>Start by identifying the actual court</h2>
        <p>
          “Indoor” describes a building, not a single surface. Pickleball can be
          played indoors on hardwood, synthetic sport tiles, rubberized floors,
          or acrylic courts. Outdoor play commonly happens on textured acrylic
          over asphalt or concrete. Each surface changes the balance of grip,
          durability, and floor-marking requirements.
        </p>

        <p>
          Ask the facility what it recommends. Many gyms require non-marking
          soles. Some venues publish footwear rules because a shoe with the wrong
          outsole can mark the floor or feel unexpectedly slippery.
        </p>

        <h2>Indoor gym shoe vs. outdoor hard-court shoe</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Indoor gym floor</th>
                <th>Outdoor hard court</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Outsole priority</td>
                <td>Clean, non-marking grip on a smooth surface</td>
                <td>Abrasion resistance on textured acrylic or concrete</td>
              </tr>
              <tr>
                <td>Rubber feel</td>
                <td>Often softer and tackier</td>
                <td>Often firmer and more durable</td>
              </tr>
              <tr>
                <td>Tread</td>
                <td>Multidirectional pattern suited to gym floors</td>
                <td>Durable pattern that tolerates rougher surfaces</td>
              </tr>
              <tr>
                <td>Upper protection</td>
                <td>Breathability and lightness may be prioritized</td>
                <td>Toe and side reinforcement can help with wear</td>
              </tr>
              <tr>
                <td>Main tradeoff</td>
                <td>Soft rubber may wear quickly outdoors</td>
                <td>Harder rubber may feel less secure on smooth wood</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What to look for on smooth indoor floors</h2>

        <h3>A non-marking outsole</h3>
        <p>
          Check the model description and the facility rules rather than judging
          by color. “Non-marking” describes how the rubber behaves on the floor;
          it does not mean the outsole must be white or gum-colored.
        </p>

        <h3>Predictable grip</h3>
        <p>
          Grip should feel secure without making your foot stop so abruptly that
          movement feels awkward. Keep the outsole clean. Dust collected in a gym
          can change traction during a session, even when the shoe itself is
          appropriate.
        </p>

        <h3>Lateral structure</h3>
        <p>
          Indoor traction does not replace support. Look for a stable base, secure
          heel, and upper that holds the foot during side steps. A lightweight
          volleyball, badminton, squash, or indoor court shoe may work if it
          provides those features and the venue permits it.
        </p>

        <h2>What to look for on outdoor hard courts</h2>

        <h3>Durable rubber</h3>
        <p>
          Textured outdoor courts can act like sandpaper on a soft outsole. A
          hard-court model typically makes more sense for regular outdoor play.
          Check the forefoot, outside edge, and toe area periodically rather than
          relying on a fixed replacement schedule.
        </p>

        <h3>Toe and side reinforcement</h3>
        <p>
          Players wear shoes differently, but toe dragging and forceful lateral
          push-offs can stress the upper near the forefoot. Reinforcement in those
          zones may be useful if your shoes usually fail there first.
        </p>

        <h3>A balance of cushion and court feel</h3>
        <p>
          Hard surfaces can make cushioning welcome, but more foam is not always
          better. The shoe should still feel stable when you load its edges. If a
          soft midsole lets your foot move excessively, try a firmer or wider
          platform.
        </p>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h2 className="!mt-0">The important exception: indoor acrylic courts</h2>
          <p className="!mb-0">
            A court can be indoors and still use an acrylic hard-court surface.
            In that setting, a hard-court tennis or outdoor pickleball shoe may be
            appropriate. Match the surface first, then confirm the venue’s rules.
          </p>
        </div>

        <h2>Can you use indoor shoes outside?</h2>
        <p>
          You can physically wear many indoor court shoes outside, but a soft
          indoor outsole may wear much faster on rough pavement or acrylic. Once
          that rubber is abraded, the shoe may no longer provide the same indoor
          grip. If you play regularly on both very different surfaces, separate
          pairs can preserve performance and make wear easier to track.
        </p>

        <h2>Can you use outdoor shoes indoors?</h2>
        <p>
          Sometimes. An outdoor hard-court shoe can work on an indoor acrylic
          court. On polished wood, however, a harder or dusty outsole may not feel
          as secure, and the facility may require non-marking footwear. Clean the
          sole and test controlled stops before playing at full speed.
        </p>

        <h2>If you want one pair for both</h2>
        <p>
          A versatile court shoe can work when your indoor and outdoor courts have
          similar acrylic surfaces. If one venue uses wood and the other uses
          abrasive concrete, a one-pair compromise is harder. Prioritize the
          surface where you play most, and confirm that the shoe remains stable
          and permitted at the other venue.
        </p>

        <p>
          Whether the box says tennis or pickleball matters less than the model’s
          actual construction. Our{" "}
          <Link href="/posts/pickleball-shoes-vs-tennis-shoes">
            tennis vs. pickleball shoe guide
          </Link>{" "}
          explains how to compare them. If you are moving from road footwear,
          start with our{" "}
          <Link href="/posts/running-shoes-vs-pickleball-shoes">
            running shoe vs. court shoe comparison
          </Link>
          .
        </p>

        <h2>Signs that traction or support is fading</h2>
        <ul>
          <li>The tread is smooth in your main push-off zones.</li>
          <li>Grip feels inconsistent after the outsole has been cleaned.</li>
          <li>The midsole leans, compresses unevenly, or feels less stable.</li>
          <li>The upper no longer holds your foot during lateral movement.</li>
          <li>The outsole is separating from the upper.</li>
        </ul>

        <p>
          Replace damaged footwear rather than waiting for every part of the tread
          to disappear. AAOS guidance also recommends avoiding athletic shoes once
          they are worn out and no longer provide appropriate support.
        </p>

        <h2>The bottom line</h2>
        <p>
          The best indoor or outdoor pickleball shoe is the one matched to the
          surface beneath it. Use clean, non-marking grip for smooth gym floors and
          durable hard-court rubber for abrasive outdoor play. For indoor acrylic,
          treat the court like a hard court rather than assuming you need a soft
          gym outsole.
        </p>

        <div className="my-10 text-center not-prose">
          <a
            href="/holabird"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-700 transition-colors"
          >
            Browse Court Footwear
          </a>
          <AffiliateLinkLabel />
        </div>

        <h2>Sources and further reading</h2>
        <ul>
          <li>
            <a
              href="https://orthoinfo.aaos.org/en/staying-healthy/shoes-finding-the-right-fit"
              target="_blank"
              rel="noreferrer"
            >
              AAOS OrthoInfo: Shoes—Finding the Right Fit
            </a>
          </li>
          <li>
            <a
              href="https://www.selkirk.com/blogs/paddles-and-product-education/indoor-vs-outdoor-pickleball-shoes"
              target="_blank"
              rel="noreferrer"
            >
              Selkirk: Indoor vs. outdoor pickleball shoes
            </a>
          </li>
          <li>
            <a
              href="https://news.hss.edu/hospital-for-special-surgery-shares-pickleball-injury-prevention-tips/"
              target="_blank"
              rel="noreferrer"
            >
              Hospital for Special Surgery: Pickleball footwear guidance
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500">
          This article provides general educational information, not medical or
          individualized footwear advice.
        </p>
        <RelatedArticles article={article} />
      </article>
    </main>
  );
}
