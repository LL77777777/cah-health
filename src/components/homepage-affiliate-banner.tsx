const bannerHref = "https://www.pjatr.com/t/8-11156-287681-145813";
const bannerImage = "https://www.pjtra.com/b/4-551603-287681-145813";

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
          className="mx-auto block w-full max-w-[728px] overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-4"
          aria-label="Explore Scentbird fragrance subscription options"
        >
          <img
            src={bannerImage}
            width="728"
            height="90"
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
