import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-20">
      {/* 封面区 (Hero Section) */}
      <section className="text-center py-24 border-b border-gray-100 mb-20">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">Journal</span>
        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tighter mb-8 leading-tight">
          Redefining <br/>Modern Wellness
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
          A curated perspective on health, longevity, and intentional living. 
          Science-backed insights for the modern lifestyle.
        </p>
      </section>

      {/* 文章网格区 (Editorial Grid) */}
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* 文章卡片 1 - 带有封面图 */}
        <Link href="/posts/gut-health" className="group block">
          <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552674605-db6ffd4faceb?auto=format&fit=crop&q=80&w=800" 
              alt="Runner" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Nutrition</span>
          <h2 className="text-3xl font-serif font-medium mb-3 group-hover:text-gray-600 transition-colors">
            The 7-Day Gut Health Protocol
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Why most probiotics fail—and what actually works for your microbiome.
          </p>
        </Link>

        {/* 文章卡片 2 - 占位 */}
        <div className="flex flex-col justify-center border-t md:border-t-0 border-gray-100 pt-10 md:pt-0">
          <div className="text-gray-300 font-serif italic text-xl mb-4">Coming Soon...</div>
          <h3 className="text-xl font-medium text-gray-400">Sleep Optimization Guide</h3>
        </div>

      </div>
    </main>
  );
}
