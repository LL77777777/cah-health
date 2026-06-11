import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-serif mb-12">Latest Articles</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/posts/gut-health" className="group block border border-gray-100 p-8 hover:border-gray-300 transition-all">
          <h2 className="text-2xl font-medium mb-2 group-hover:text-blue-600">The 7-Day Gut Health Protocol</h2>
          <p className="text-gray-500">Why most probiotics fail—and what actually works.</p>
        </Link>
      </div>
    </main>
  );
}
