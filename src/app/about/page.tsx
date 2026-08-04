import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how the CAH Health Editorial Team approaches practical wellness guidance, product recommendations, and editorial transparency.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 prose prose-lg">
      <h1>About CAH Health</h1>
      <p className="lead">
        Welcome to CAH Health. We believe that wellness isn't just about the absence of illness—it’s about the intentional pursuit of vitality, longevity, and balance in a modern world.
      </p>

      <h2>Our Mission</h2>
      <p>
        In an age of information overload, finding useful health information can
        be exhausting. Our mission is simple: <strong>to curate the noise.</strong>
        We bring together evidence-aware explanations and practical lifestyle
        guidance, while making the limits of general information clear.
      </p>

      <h2>The "CAH" Standard</h2>
      <p>
        Our editorial process distinguishes between hands-on testing and
        research based on reliable sources, product specifications, and practical
        use cases. We do not claim to have personally tested a product unless we
        have done so. Our work focuses on three pillars:
      </p>
      <ul>
        <li><strong>Evidence:</strong> Are the claims supported by credible sources, and are important limitations explained?</li>
        <li><strong>Quality:</strong> Do the construction, specifications, and intended use support the product&apos;s stated purpose?</li>
        <li><strong>Relevance:</strong> Does the information help a reader make a more informed, practical choice?</li>
      </ul>

      <h2>Transparency & Trust</h2>
      <p>
        To keep this site running, we participate in affiliate programs. This means when you click on some of our links and make a purchase, we may earn a small commission—at no extra cost to you. 
      </p>
      <p>
        Affiliate compensation does not determine our conclusions or guarantee a
        positive assessment. Sponsored content, if we publish it, will be clearly
        identified. Read our <a href="/disclaimer">Affiliate Disclaimer</a> for
        more information.
      </p>

      <h2>Join Our Journey</h2>
      <p>
        Whether you are optimizing your nutrition, upgrading your recovery routine, or simply looking to live a more intentional life, we’re glad you’re here.
      </p>
      <p>
        <em>— The CAH Health Editorial Team</em>
      </p>
      
      <div className="mt-12 pt-8 border-t text-center">
        <p className="text-gray-500">Have a question or a product suggestion?</p>
        <a href="mailto:admin@cahhealth.com" className="font-bold underline">admin@cahhealth.com</a>
      </div>
    </main>
  );
}
