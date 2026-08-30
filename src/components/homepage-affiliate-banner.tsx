const bannerHref = "https://www.pntra.com/t/8-11725-287681-162631";
const bannerImage = "https://www.pntrac.com/b/4-536758-287681-162631";

export function HomepageAffiliateBanner() {
  return (
    <section
      aria-label="Sponsored partner offer"
      className="border-y border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="mb-3 text-center text-[11px] uppercase tracking-[0.18em] text-gray-400">
          Sponsored affiliate link
        </p>
        <a
          href={bannerHref}
          rel="sponsored nofollow"
          className="mx-auto block w-full max-w-[800px] overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-4"
          aria-label="Explore Scentbird fragrance subscription options"
        >
          <img
            src={bannerImage}
            width="800"
            height="200"
            alt="Scentbird fragrance subscription offer"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </a>
      </div>
    </section>
  );
}
