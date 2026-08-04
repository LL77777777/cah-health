import Link from "next/link";
import { EDITORIAL_AUTHOR } from "@/lib/site";

export function ArticleByline() {
  return (
    <p className="text-gray-500 italic mb-10">
      By{" "}
      <Link href="/about" className="underline underline-offset-4">
        {EDITORIAL_AUTHOR}
      </Link>
    </p>
  );
}
