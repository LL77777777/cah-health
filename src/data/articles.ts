export const categoryDetails = {
  nutrition: {
    name: "Nutrition",
    description:
      "Practical guidance for eating with intention, supporting metabolic health, and building sustainable habits.",
  },
  fitness: {
    name: "Fitness",
    description:
      "Thoughtful approaches to movement, performance, recovery, and staying active for life.",
  },
  lifestyle: {
    name: "Lifestyle",
    description:
      "Evidence-aware ideas for better sleep, daily balance, and a more intentional approach to wellbeing.",
  },
} as const;

export type CategorySlug = keyof typeof categoryDetails;

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  headline: string;
  excerpt: string;
  category: CategorySlug;
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const articles: Article[] = [
  {
    slug: "art-of-movement",
    title: "The Art of Movement",
    seoTitle: "The Art of Movement: Fitness as a Lifetime Practice",
    headline: "The Art of Movement: Why Fitness Is a Lifetime Practice",
    excerpt: "Why fitness is a lifetime practice, not a weekly chore.",
    category: "fitness",
    image: "/hs2.jpg",
    imageAlt: "Performance footwear for an active lifestyle",
    featured: true,
  },
  {
    slug: "intermittent-fasting",
    title: "The 16:8 Protocol",
    seoTitle: "16:8 Intermittent Fasting: Timing and Common Mistakes",
    headline: "The 16:8 Protocol: Why It’s Less About Dieting and More About Timing",
    excerpt: "Why timing can matter as much as counting calories.",
    category: "nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A colorful bowl of vegetables",
    featured: false,
  },
  {
    slug: "gut-health",
    title: "A 7-Day Gut-Friendly Reset",
    seoTitle: "7-Day Gut-Friendly Reset: A Food-First Foundation",
    headline: "A 7-Day Gut-Friendly Reset",
    excerpt: "A measured, food-first foundation for supporting everyday digestive health.",
    category: "nutrition",
    image: "/page1.jpg",
    imageAlt: "A person enjoying time outdoors",
    featured: false,
  },
  {
    slug: "sleep-optimization",
    title: "Beyond Melatonin",
    seoTitle: "Beyond Melatonin: Practical Habits for Better Sleep",
    headline: "Beyond Melatonin: Practical Foundations for Better Sleep",
    excerpt: "Practical foundations for a more consistent sleep routine.",
    category: "lifestyle",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A calm bedroom prepared for sleep",
    featured: true,
  },
  {
    slug: "running-shoes-vs-pickleball-shoes",
    title: "Running Shoes vs. Pickleball Shoes",
    seoTitle: "Running Shoes vs. Pickleball Shoes: What to Wear",
    headline: "Can You Wear Running Shoes for Pickleball? Court Shoes vs. Running Shoes",
    excerpt:
      "Understand how running and court shoes differ in stability, traction, cushioning, and movement before you step onto a pickleball court.",
    category: "fitness",
    image: "/running-vs-pickleball-shoes.webp",
    imageAlt: "A cushioned running shoe beside a low-profile court shoe",
    featured: true,
  },
  {
    slug: "pickleball-shoes-vs-tennis-shoes",
    title: "Pickleball Shoes vs. Tennis Shoes",
    seoTitle: "Pickleball Shoes vs. Tennis Shoes: Key Differences",
    headline: "Pickleball Shoes vs. Tennis Shoes: What’s Actually Different?",
    excerpt:
      "A practical comparison of court-shoe construction, fit, weight, durability, and the features that matter more than the label.",
    category: "fitness",
    image: "/pickleball-vs-tennis-shoes.webp",
    imageAlt: "Two low-profile court shoes on a blue and green hard court",
    featured: false,
  },
  {
    slug: "indoor-vs-outdoor-pickleball-shoes",
    title: "Indoor vs. Outdoor Pickleball Shoes",
    seoTitle: "Indoor vs. Outdoor Pickleball Shoes: What to Choose",
    headline: "Indoor vs. Outdoor Pickleball Shoes: Grip, Soles, and Durability",
    excerpt:
      "Choose court shoes by playing surface, not just by whether the court has a roof. Compare gym floors, indoor acrylic, and outdoor hard courts.",
    category: "fitness",
    image: "/indoor-vs-outdoor-pickleball-shoes.webp",
    imageAlt: "An indoor court shoe beside an outdoor hard-court shoe",
    featured: false,
  },
];

export function getArticleBySlug(slug: string) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Unknown article slug: ${slug}`);
  }

  return article;
}
