import Link from "next/link";

export function AffiliateDisclosure() {
  return (
    <p className="not-prose mt-2 mb-8 text-xs leading-relaxed text-gray-600">
      Affiliate disclosure: This article may contain affiliate links. CAH Health
      may earn a commission from qualifying purchases at no additional cost to
      you.{" "}
      <Link href="/disclaimer" className="underline hover:text-gray-900">
        Learn more
      </Link>
      .
    </p>
  );
}

export function AffiliateLinkLabel() {
  return <p className="mt-3 text-xs text-gray-500">Affiliate link</p>;
}
