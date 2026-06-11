export default function Home() {
  return (
    <main>
      {/* 封面区 (Hero Section) */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/page1.jpg" 
            alt="Wellness Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* 遮罩层，让字更清晰 */}
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">Redefining Modern Wellness</h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Curated, science-backed insights for longevity, performance, and intentional living.
          </p>
          <a href="/posts/gut-health" className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all">
            Read Our Latest
          </a>
        </div>
      </section>

      {/* 特色板块 */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-serif mb-12 text-center">Featured Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Nutrition', 'Fitness', 'Longevity'].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <h3 className="text-xl font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
