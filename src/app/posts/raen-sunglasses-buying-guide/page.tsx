import { AffiliateLinkLabel } from "@/components/affiliate-disclosure";
import { ArticleByline } from "@/components/article-byline";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { getArticleBySlug } from "@/data/articles";
import { createArticleMetadata } from "@/lib/seo";

const article = getArticleBySlug("raen-sunglasses-buying-guide");
const affiliateUrl = "https://www.pntrs.com/t/4-459734-287681-254631";

export const metadata = createArticleMetadata(article.slug);

function AffiliateButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 text-center not-prose">
      <a
        href={affiliateUrl}
        rel="sponsored nofollow"
        className="inline-block bg-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
      <AffiliateLinkLabel />
    </div>
  );
}

export default function RaenSunglassesBuyingGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <ArticleJsonLd article={article} />

      <div className="w-full aspect-[16/9] overflow-hidden mb-12 bg-[#eee9df]">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
          Lifestyle · Buying Guide
        </p>
        <h1>{article.headline}</h1>
        <ArticleByline />

        <p className="not-prose mt-2 mb-8 text-xs leading-relaxed text-gray-600">
          Disclosure: This article contains affiliate links. If you purchase
          through these links, we may earn a commission at no additional cost to
          you.
        </p>

        <p className="lead">
          <strong>RAEN sunglasses</strong> are aimed at shoppers who want premium
          acetate frames with a distinctly Southern California interpretation of
          modern classic style. The brand combines handcrafted acetate with ZEISS
          sun lenses across its core collection, while many colorways add
          polarization. RAEN is most compelling if you care about frame character,
          multiple fit options, and a more substantial finish than basic molded
          plastic sunglasses—but the usual $170–$220 price range makes choosing
          the right shape and size important.
        </p>

        <p>
          This independent guide focuses on RAEN&apos;s Remmy and Wiley models,
          then covers fit, lenses, pricing, promotions, and purchase policies. It
          is not an official RAEN review. Confirm the selected product page before
          ordering because colorways, inventory, and terms can change.
        </p>

        <h2>What Makes RAEN Sunglasses Different?</h2>

        <h3>Handcrafted cellulose acetate frames</h3>
        <p>
          RAEN says its frames are cut and polished from cellulose acetate rather
          than simply molded from injected plastic. The practical appeal is color
          and pattern through the material, a polished surface, and a frame an
          optician can sometimes adjust with proper equipment. “Handcrafted” does
          not make a frame indestructible or guarantee fit.
        </p>

        <h3>ZEISS sun lenses and polarized options</h3>
        <p>
          RAEN pairs its sunglasses with sun lenses from Carl Zeiss Vision. That
          is a useful supplier detail, but compare the exact lens on the colorway
          you select. Some RAEN polarized sunglasses reduce glare from
          reflective surfaces such as water and pavement; other versions are
          non-polarized. Polarization is especially useful for driving and time
          near water, but it can make some digital displays harder to view at
          certain angles.
        </p>

        <h3>Modern Classic design with practical fit tools</h3>
        <p>
          RAEN&apos;s design language starts with familiar round, square, and
          angular silhouettes with contemporary proportions, acetate colors, and
          hardware. The collection includes narrow through extra-wide fits.
          RAEN&apos;s Virtual Try-On helps compare visual scale and shape, but it
          cannot predict bridge or temple pressure. Use it with the listed frame,
          bridge, and temple measurements.
        </p>

        <div className="my-12 flex flex-col items-center not-prose">
          <a href={affiliateUrl} rel="sponsored nofollow">
            <img
              src="https://www.pntrs.com/b/4-459734-287681-254631"
              width="336"
              height="280"
              title="Explore RAEN sunglasses"
              alt="RAEN eyewear logo"
              className="h-auto max-w-full"
            />
          </a>
          <AffiliateLinkLabel />
        </div>

        <h2>RAEN Remmy: Who Is It For?</h2>
        <p>
          The RAEN Remmy sunglasses are the brand&apos;s recognizable retro-round
          option. A notched bridge, subtly lifted outer edges, and lightweight
          construction keep the frame from reading as a perfectly circular
          costume shape. RAEN presents Remmy as unisex, and its balance of round
          lenses and restrained details can work with casual clothing, tailoring,
          or a relaxed coastal wardrobe.
        </p>

        <p>
          The size choice is more important than a men&apos;s-versus-women&apos;s
          label. The <strong>Remmy 49</strong> uses a 49mm lens and is currently
          categorized as a narrow fit, with an overall frame width around 134mm.
          The <strong>Remmy 52</strong> uses a 52mm lens and is a medium fit,
          listed around 141mm wide. Choose 49 if standard frames often look broad
          or slide around; consider 52 if you want more coverage or standard
          medium frames usually fit well. Compare those figures with a pair you
          already own; lens width alone does not describe the complete fit.
        </p>

        <p>
          Round frames often provide contrast for a defined jaw or angular face,
          while the larger 52 can create a more intentionally oversized look.
          Those are styling guidelines, not rules. Use the official dimensions
          and Virtual Try-On to judge proportion. Pick a standard lens for general
          style and everyday use, or a polarized Remmy colorway if reflected glare
          is a recurring concern. The lens choice and color availability differ
          by size.
        </p>

        <h2>RAEN Wiley: Who Is It For?</h2>
        <p>
          RAEN Wiley sunglasses use a square shape, firmer lines, and a more
          traditionally masculine presentation while retaining some of
          Remmy&apos;s proportions. The angular front can add definition to round
          or oval faces, and it fits naturally with modern workwear, casual
          outdoor clothing, or buyers who simply prefer a straighter brow and
          less rounded lens shape.
        </p>

        <p>
          Wiley comes in <strong>54mm and 56mm</strong> lens widths. RAEN lists
          the Wiley 54 as a medium fit and the Wiley 56 as a wider option. Start
          with 54 if most medium sunglasses fit without temple pressure. Move
          toward 56 when conventional frames frequently pinch at the temples or
          look too narrow across the face. A wider size should create room without
          sliding down the nose or extending far beyond the sides of your face.
        </p>

        <p>
          Many current Wiley colorways use polarized lenses, which makes the
          model relevant for driving, travel, water, and bright open settings.
          Non-polarized versions can cost less and may be preferable if you often
          need to read screens affected by polarized lenses. Check the exact
          colorway: “Wiley” describes the frame design, not one universal lens.
        </p>

        <h2>Remmy vs. Wiley: A Practical Comparison</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Remmy</th>
                <th>Wiley</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frame shape</td>
                <td>Retro round with subtle lifted edges</td>
                <td>Square with a straighter brow and harder lines</td>
              </tr>
              <tr>
                <td>Overall style</td>
                <td>Soft, versatile, and unisex</td>
                <td>Angular, modern, and more traditionally masculine</td>
              </tr>
              <tr>
                <td>Available sizes</td>
                <td>49mm and 52mm</td>
                <td>54mm and 56mm</td>
              </tr>
              <tr>
                <td>Typical fit</td>
                <td>49 narrow; 52 medium</td>
                <td>54 medium; 56 wide</td>
              </tr>
              <tr>
                <td>Often suits</td>
                <td>Angular features or shoppers wanting a round frame</td>
                <td>Round or oval features, wider faces, and square-frame fans</td>
              </tr>
              <tr>
                <td>Polarized options</td>
                <td>Yes, on selected colorways</td>
                <td>Yes, on selected colorways</td>
              </tr>
              <tr>
                <td>Typical current price</td>
                <td>About $170 non-polarized or $205 polarized; REC° $220</td>
                <td>About $170 non-polarized or $205 polarized; REC° $220</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AffiliateButton>Compare Current RAEN Styles</AffiliateButton>

        <h2>Other RAEN Styles Worth Considering</h2>
        <ul>
          <li>
            <strong>Conway:</strong> a 53mm architectural square acetate frame
            currently listed in a wide fit. It is a useful alternative when Wiley
            feels too familiar or you want a bolder, more structured front.
          </li>
          <li>
            <strong>Clyve:</strong> a 52mm medium-fit frame with confident angles
            and a wearable shape. It sits between overtly round and sharply
            square styling.
          </li>
          <li>
            <strong>Adin:</strong> a 54mm square frame with a flat brow, strong
            angles, and a wider orientation. Current versions emphasize
            all-acetate construction and polarized lens choices.
          </li>
          <li>
            <strong>Remmy REC°:</strong> a movement-focused version of Remmy in
            49mm and 52mm sizes. Current models add Strata Grip nose pads and
            polarized Colorboost lens options at about $220.
          </li>
          <li>
            <strong>Wiley REC°:</strong> the performance-oriented Wiley, currently
            offered in 54mm with Strata Grip nose pads and polarized Colorboost
            lenses for outdoor use.
          </li>
        </ul>

        <h2>How to Choose the Right RAEN Frame</h2>
        <ol>
          <li>
            <strong>Start with total frame width.</strong> Compare RAEN&apos;s
            listed width with a pair that already fits. Lens width alone does not
            include the bridge and outer frame.
          </li>
          <li>
            <strong>Use shape to create or repeat contrast.</strong> Round Remmy
            frames can soften angular features; square Wiley frames can add
            definition to a rounder outline. Choose the look you enjoy rather than
            treating face-shape advice as a requirement.
          </li>
          <li>
            <strong>Treat gender filters as a starting point.</strong> Searches
            for RAEN sunglasses for men or RAEN sunglasses for women can help
            narrow the catalog, but actual frame width and personal style are more
            useful than a gender label.
          </li>
          <li>
            <strong>Decide between medium and wide fit.</strong> Temple pressure
            and arms that bow outward usually point toward more width. Frequent
            slipping can mean the frame is too wide or the bridge is not right.
          </li>
          <li>
            <strong>Match the lens to daily use.</strong> Non-polarized lenses can
            be sufficient for fashion and ordinary daylight. Polarized lenses are
            useful when glare from roads, water, or other reflective surfaces is
            a priority.
          </li>
          <li>
            <strong>Use Virtual Try-On as a visual filter.</strong> It can quickly
            eliminate shapes or colors that look out of proportion, but it cannot
            measure pressure, bridge contact, or all-day comfort.
          </li>
        </ol>

        <h2>RAEN Pricing and Current Offers</h2>
        <p>
          Core RAEN sunglasses currently cluster around $170 for selected
          non-polarized versions and about $205 for many polarized versions.
          Remmy REC° and Wiley REC° styles are currently around $220. Those are
          reference prices, not a promise for every frame or future inventory.
        </p>

        <div className="my-10 border-l-4 border-gray-900 bg-gray-50 p-8">
          <p className="!mt-0 font-semibold">Offer checked on August 15, 2026.</p>
          <p>
            RAEN&apos;s official newsletter signup offer advertised 20% off a
            first order for first-time customers. The stated terms excluded sale
            items and previous purchases. The current Sale Frames page also showed
            multiple styles at 40% off, with a smaller number at other discount
            levels.
          </p>
          <p className="!mb-0">
            Do not assume the first-order offer stacks with sale pricing: sale
            items are excluded from that signup offer, and RAEN does not promise
            that separate promotions can be combined. Check the current terms at
            checkout before purchasing.
          </p>
        </div>

        <p>
          A RAEN sunglasses sale can make a premium frame more accessible, but
          sale colors and sizes can disappear or return, and the displayed price
          may change. RAEN&apos;s return policy says products marked Final Sale—and
          products shown with a struck-through original price beside a lower
          posted price—are final sale. Treat a lower price as a tradeoff for less
          return flexibility, not automatically as the right frame for you. Never
          rely on an unofficial RAEN discount code or RAEN coupon code without
          checking the terms on RAEN&apos;s own site.
        </p>

        <h2>Shipping, Returns, Exchanges, and Warranty</h2>
        <p>
          RAEN currently offers free FedEx 2-Day Shipping on U.S. orders over
          $150. Delivery is Monday through Friday, processing time is separate,
          and some promotions can exclude free shipping. A discounted order must
          still meet the applicable threshold after discounts.
        </p>

        <p>
          Eligible U.S. frames may be returned within 21 days of delivery when
          they are unused, undamaged, and sent back with the original packaging,
          accessories, and promotional items. Equal-priced exchanges are also
          available within the policy window. Original shipping fees and gift
          card purchases are non-refundable. Final Sale and qualifying
          struck-through sale items cannot be returned or exchanged.
        </p>

        <p>
          The RAEN Limited Lifetime Warranty covers manufacturing defects under
          normal use for eligible authentic frames. It does not provide
          unconditional replacement for scratches, normal wear, accidental
          damage, loss, unauthorized repairs, or third-party prescription lenses.
          Eligibility generally requires the original purchaser, proof of
          purchase, and a purchase from RAEN.com or an authorized U.S. retailer.
          The current policy also includes date and U.S.-only conditions.
        </p>

        <h2>Who Should Buy RAEN Sunglasses?</h2>
        <h3>RAEN may be a good fit if…</h3>
        <ul>
          <li>You value acetate color, polish, and modern classic styling.</li>
          <li>You want clear narrow, medium, and wide fit choices.</li>
          <li>You are comparing both polarized and non-polarized lenses.</li>
          <li>You will use dimensions and Virtual Try-On before ordering.</li>
          <li>You accept a premium price for design and materials.</li>
        </ul>

        <h3>Consider another option if…</h3>
        <ul>
          <li>Your budget is well below the normal $170–$220 range.</li>
          <li>You need prescription fulfillment directly from the brand.</li>
          <li>You want replaceable lenses or coverage for accidental damage.</li>
          <li>You need to return a discounted frame marked Final Sale.</li>
          <li>You cannot confirm fit and need in-person adjustment before buying.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Are RAEN sunglasses polarized?</h3>
        <p>
          Some are. Many Remmy, Wiley, and other colorways offer polarized lenses,
          but not every RAEN frame or lens is polarized. Check the exact product
          title and specifications.
        </p>

        <h3>What is the difference between RAEN Remmy 49 and 52?</h3>
        <p>
          Remmy 49 is the narrower option with a 49mm lens; Remmy 52 is the medium
          option with a 52mm lens and more overall coverage. Compare full frame and
          bridge measurements, not only lens width.
        </p>

        <h3>What is the difference between Wiley 54 and 56?</h3>
        <p>
          Wiley 54 is currently categorized as a medium fit, while Wiley 56 is the
          wider version. Choose based on total face and frame width rather than
          gender labels.
        </p>

        <h3>Does RAEN offer free U.S. shipping?</h3>
        <p>
          RAEN currently offers free FedEx 2-Day Shipping on eligible U.S. orders
          over $150. Promotional exclusions and processing time can apply.
        </p>

        <h3>Can sale RAEN sunglasses be returned?</h3>
        <p>
          Not when they are marked Final Sale. RAEN&apos;s policy also treats items
          with a struck-through original price and lower posted price as final sale,
          making them ineligible for return or exchange.
        </p>

        <h3>Does RAEN offer a lifetime warranty?</h3>
        <p>
          RAEN offers a Limited Lifetime Warranty for eligible manufacturing
          defects. It is not coverage for normal wear, scratches, loss, accidental
          damage, or every replacement situation.
        </p>

        <h3>How can I find a current RAEN discount?</h3>
        <p>
          Check RAEN&apos;s newsletter signup terms and official Sale page. A
          first-order promotion or seasonal sale may be available, but eligibility,
          exclusions, inventory, and discount levels can change. Avoid relying on
          unverified coupon-code sites.
        </p>

        <h3>Where can I buy authentic RAEN sunglasses?</h3>
        <p>
          Buy through RAEN.com or an authorized retailer and keep your proof of
          purchase. The shopping links in this article route to RAEN&apos;s website
          through an affiliate tracking service.
        </p>

        <h2>Final Verdict</h2>
        <p>
          RAEN&apos;s strongest case is the combination of expressive acetate,
          familiar-but-distinct silhouettes, ZEISS sun lenses, useful polarized
          options, and enough sizing information to make online comparison
          practical. Remmy is the softer round choice with narrow and medium
          sizes; Wiley is the more angular choice with medium and wide sizes. The
          main limitations are premium pricing, colorway-specific lens choices,
          and strict Final Sale rules on marked-down frames.
        </p>

        <p>
          If those tradeoffs fit your priorities, compare the official dimensions
          and Virtual Try-On before choosing. Check current RAEN styles, colors,
          pricing, and availability rather than assuming any sale or variant will
          remain unchanged.
        </p>

        <AffiliateButton>Check Current Prices and Offers</AffiliateButton>

        <h2>Official Sources</h2>
        <ul>
          <li>
            <a href="https://raen.com/" target="_blank" rel="noreferrer">
              RAEN: current collection and brand information
            </a>
          </li>
          <li>
            <a
              href="https://raen.com/pages/find-your-fit"
              target="_blank"
              rel="noreferrer"
            >
              RAEN Find Your Fit guide
            </a>
          </li>
          <li>
            <a
              href="https://raen.com/collections/raen-bestselling-sale"
              target="_blank"
              rel="noreferrer"
            >
              RAEN Sale Frames
            </a>
          </li>
          <li>
            <a
              href="https://raen.com/pages/shipping-policy"
              target="_blank"
              rel="noreferrer"
            >
              RAEN Shipping Policy
            </a>
          </li>
          <li>
            <a
              href="https://raen.com/pages/return-policy"
              target="_blank"
              rel="noreferrer"
            >
              RAEN Return Policy
            </a>
          </li>
          <li>
            <a
              href="https://raen.com/pages/warranty"
              target="_blank"
              rel="noreferrer"
            >
              RAEN Limited Lifetime Warranty
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500">
          Product details, prices, promotions, availability, and policies can
          change. Verify current terms on the seller&apos;s website before
          purchasing. This article provides general shopping information and is
          not medical or individualized vision advice.
        </p>
      </article>
    </main>
  );
}
