import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer",
  description:
    "Learn how CAH Health uses affiliate links while maintaining editorial independence.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 prose prose-lg">
      <h1>Affiliate Disclaimer</h1>
      <p>
        CAH Health is an independent editorial website. Some links on this site
        are affiliate links. If you click one of these links and complete a
        qualifying purchase, CAH Health may receive a commission at no additional
        cost to you.
      </p>

      <h2>Our Affiliate Relationships</h2>
      <p>
        We may work with retailers, marketplaces, brands, and affiliate networks.
        These relationships and the merchants available through them can change
        over time. Not every link is an affiliate link, and the presence of an
        affiliate link does not mean that a merchant sponsors, owns, or controls
        CAH Health.
      </p>
      <p>
        Affiliate links may use cookies or similar identifiers so a merchant or
        affiliate network can attribute a purchase to CAH Health. The merchant or
        network handles that information under its own privacy policy.
      </p>

      <h2>Amazon Associates</h2>
      <p>
        CAH Health may also use Amazon affiliate links. When those links are used,
        the following disclosure applies:{" "}
        <strong>As an Amazon Associate I earn from qualifying purchases.</strong>
      </p>

      <h2>Editorial Independence</h2>
      <p>
        Compensation does not determine our editorial conclusions. Unless we
        clearly say that a product was personally tested, recommendations and
        comparisons are based on editorial research, available specifications,
        cited sources, and the practical relevance of the product to the topic.
        Prices, availability, and product details can change, so readers should
        confirm current information with the seller before purchasing.
      </p>
    </main>
  );
}
