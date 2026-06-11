export default function SleepPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* 封面图 */}
      <div className="w-full aspect-[2/1] overflow-hidden mb-12 bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1541414779313-f542cc47a062?auto=format&fit=crop&q=80&w=1200" 
          alt="Restorative sleep" 
          className="w-full h-full object-cover"
        />
      </div>

      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-4xl font-serif mb-4">Beyond Melatonin: Mastering the Art of Deep Sleep</h1>
        <p className="text-gray-500 italic mb-12">— Editorial Staff</p>

        <p className="text-xl leading-relaxed">
          We’ve all had those mornings. You spend eight hours in bed, but you wake up feeling like you’ve been run over by a truck. You aren't tired because you lacked "time"—you're tired because your sleep wasn't restorative.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">The Cooling Theory</h2>
        <p>
          Your brain is obsessed with temperature. To trigger the onset of sleep, your body’s core temperature needs to drop by about one or two degrees. Modern bedrooms—with heavy comforters, central heating, and poor ventilation—are often working against this biological imperative.
        </p>
        <p>
          If you wake up feeling "stuffy" or overheated, your body is struggling to regulate its temperature throughout the night. It’s an evolutionary quirk: in nature, as the sun goes down, the temperature drops, signaling that it’s time to hibernate. Our modern heating systems have essentially "lied" to our biology, keeping our systems alert when they should be shutting down.
        </p>

        <h2 className="text-2xl font-serif mt-12 mb-4">Light Is a Signal</h2>
        <p>
          Melatonin supplements are the go-to solution for many, but they are often a band-aid for a circadian rhythm that is already misaligned. The real work isn't in what you swallow at 10:00 PM; it's in what you see at 8:00 AM. 
        </p>
        <p>
          Getting natural sunlight in your eyes within 30 minutes of waking sets a timer for your cortisol and melatonin release 14–16 hours later. It’s the ultimate sleep hack. If you start your day in a dark room and end your day staring at a bright screen, you aren't just tired—you’re biologically confused.
        </p>

        <div className="my-12 p-8 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-serif text-lg font-bold mb-2">The Night Routine</h3>
          <p className="text-gray-600">
            We've found that the best sleep aids are often boring. It’s a cool room, a consistent schedule, and reading a physical book rather than scrolling through a phone. If you struggle to disconnect, focus on reducing your room temp and dimming the lights two hours before you intend to hit the pillow. Sometimes, doing less is actually the most sophisticated way to improve your recovery.
          </p>
        </div>
      </article>
    </main>
  );
}
