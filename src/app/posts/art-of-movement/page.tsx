export default function ArtOfMovement() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* 顶部封面图 */}
      <div className="w-full aspect-[2/1] overflow-hidden mb-12 bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200" 
          alt="Movement" 
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-4xl font-serif mb-4">The Art of Movement: Why Fitness is a Lifetime Practice</h1>
        <p className="text-gray-500 italic mb-12">— Editorial Staff</p>

        <p className="text-xl leading-relaxed">
          There is a popular saying: <em>Life is movement.</em> It sounds simple, but in our modern, screen-bound reality, it’s a radical act. True fitness isn't about crushing a workout once a week; it’s about the way you move your body every single day.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">1. The Impact Myth: Run Smarter, Not Harder</h2>
        <p>
          Many people quit running because of "shin splints" or knee fatigue. The secret to sustainable running isn't just willpower—it's <strong>cadence and cushioning</strong>. If your stride is too long, you are slamming your heel into the pavement, sending shockwaves straight to your joints.
        </p>
        <p>
          Focus on shorter, quicker steps. And more importantly, ensure your footwear is designed for your specific foot strike. A neutral runner in stability shoes will feel sluggish; a runner needing support in a minimal shoe will feel broken.
        </p>

        {/* 按钮 1 */}
        <div className="my-8 text-center">
          <a href="/go/holabird" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-600 transition-all">
            Find Your Perfect Running Shoes
          </a>
        </div>

        <h2 className="text-2xl font-serif mt-12 mb-4">2. Lateral Stability: The Secret to Court Health</h2>
