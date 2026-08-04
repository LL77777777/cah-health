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
      <p>Some of the links on cahhealth.com are "affiliate links." This means if you click on the link and purchase the item, we will receive an affiliate commission at no extra cost to you.</p>
      
      <h2>Amazon Associates Program</h2>
      <p>CAH Health is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
      
      <h2>Our Integrity</h2>
      <p>We only recommend products that we believe provide value to our readers. Our reviews are based on thorough research, not on the commission we receive.</p>
    </main>
  );
}
