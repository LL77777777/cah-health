import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 封面区 (Hero Section) */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/page2.jpg" 
            alt="Wellness Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">Redefining Modern Wellness</h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Curated, science-backed insights for longevity, performance, and intentional living.
          </p>
          <Link href="/posts/art-of-movement" className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all">
            Read Our Latest
          </Link>
        </div>
      </section>

      {/* 文章展示区 */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-serif mb-12 text-center">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 文章 1: Art of Movement */}
          <Link href="/posts/art-of-movement" className="group cursor-pointer">
            <div className="h-64 bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
              <img 
                src="/hs2.jpg" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                alt="Movement" 
              />
            </div>
            <h3 className="text-xl font-medium">The Art of Movement</h3>
            <p className="text-gray-500 text-sm mt-1">Why fitness is a lifetime practice, not a weekly chore.</p>
          </Link>

          {/* 文章 2: Intermittent Fasting */}
          <Link href="/posts/intermittent-fasting" className="group cursor-pointer">
            <div className="h-64 bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Fasting" />
            </div>
            <h3 className="text-xl font-medium">The 16:8 Protocol</h3>
            <p className="text-gray-500 text-sm mt-1">Why timing matters more than counting calories.</p>
          </Link>

          {/* 文章 3: Sleep Optimization */}
          <Link href="/posts/sleep-optimization" className="group cursor-pointer">
            <div className="h-64 bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Sleep" />
            </div>
            <h3 className="text-xl font-medium">Beyond Melatonin</h3>
            <p className="text-gray-500 text-sm mt-1">Mastering the art of deep, restorative sleep.</p>
          </Link>

        </div>
      </section>
    </main>
  );
}
