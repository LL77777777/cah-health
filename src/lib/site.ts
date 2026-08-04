export const SITE_NAME = "CAH Health";
export const SITE_URL = "https://cahhealth.com";
export const SITE_DESCRIPTION =
  "Practical, evidence-aware guidance for movement, sleep, nutrition, and intentional living.";
export const EDITORIAL_AUTHOR = "CAH Health Editorial Team";

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}
