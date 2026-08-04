import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms that apply when using cahhealth.com.",
  alternates: {
    canonical: "/terms",
  },
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 prose prose-lg">
      <h1>Terms of Service</h1>
      <p>By using cahhealth.com, you agree to these terms.</p>
      
      <h2>1. Use of Content</h2>
      <p>All content on this site is for informational purposes only. We own the rights to the articles and designs provided.</p>
      
      <h2>2. Medical Disclaimer</h2>
      <p><strong>The content on CAH Health is not medical advice.</strong> Always consult with a qualified healthcare professional before making health-related decisions.</p>
      
      <h2>3. Limitation of Liability</h2>
      <p>We are not liable for any damages arising from the use of this website.</p>
    </main>
  );
}
