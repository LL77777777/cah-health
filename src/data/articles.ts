export const categoryDetails = {
  nutrition: {
    name: "Nutrition",
    lastModified: "2026-10-29",
    description:
      "Practical guidance for eating with intention, supporting metabolic health, and building sustainable habits.",
  },
  fitness: {
    name: "Fitness",
    lastModified: "2026-08-04",
    description:
      "Thoughtful approaches to movement, performance, recovery, and staying active for life.",
  },
  lifestyle: {
    name: "Lifestyle",
    lastModified: "2026-10-29",
    description:
      "Evidence-aware ideas for better sleep, daily balance, and a more intentional approach to wellbeing.",
  },
} as const;

export type CategorySlug = keyof typeof categoryDetails;

export type Article = {
  slug: string;
  lastModified: string;
  title: string;
  seoTitle: string;
  headline: string;
  excerpt: string;
  category: CategorySlug;
  image: string;
  imageAlt: string;
  featured: boolean;
  relatedSlugs: string[];
};

export const articles: Article[] = [
  {
    slug: "acorn-slippers-autumn-comfort",
    lastModified: "2026-10-20",
    title: "Acorn Slippers: Autumn Comfort Event",
    seoTitle: "Acorn Slippers: Autumn Comfort Event & 30% Off Select Styles",
    headline: "Acorn Slippers Autumn Comfort Event: 30% Off Select Styles",
    excerpt:
      "Explore Acorn slippers for women and men, plus slipper socks. Compare cozy styles and check 30% off select slippers with COZYPAIR and bundle offers.",
    category: "lifestyle",
    image: "/acorn/autumn-slipper-socks.jpg",
    imageAlt: "Two people relaxing in a tent wearing gray Acorn slipper socks with brown suede trim",
    featured: true,
    relatedSlugs: ["warmies-heatable-stuffed-animals", "sleep-optimization"],
  },
  {
    slug: "warmies-heatable-stuffed-animals",
    lastModified: "2026-10-29",
    title: "Warmies: Small Comforts for Fall and Winter",
    seoTitle: "Warmies Heatable Stuffed Animals for Cozy Fall Nights",
    headline: "The First Cold Night: Warmies Heatable Stuffed Animals for Fall and Winter",
    excerpt:
      "Meet Warmies heatable stuffed animals through a cozy fall-to-winter story, with new plush picks, thoughtful gift ideas, and practical heating tips.",
    category: "lifestyle",
    image: "/warmies/cover.jpg",
    imageAlt: "Warmies logo in purple on a white background",
    featured: true,
    relatedSlugs: ["acorn-slippers-autumn-comfort", "sleep-optimization"],
  },
  {
    slug: "raen-sunglasses-buying-guide",
    lastModified: "2026-08-30",
    title: "RAEN Sunglasses Buying Guide",
    seoTitle: "RAEN Sunglasses Guide: Remmy, Wiley, Fit & Offers",
    headline: "RAEN Sunglasses Buying Guide: Remmy, Wiley, Fit, Lenses, and Current Offers",
    excerpt:
      "Compare Remmy and Wiley sizes, polarized lenses, fit, pricing, current offers, shipping, returns, and warranty terms.",
    category: "lifestyle",
    image: "/raen-sunglasses-guide.svg",
    imageAlt:
      "Editorial illustration of round and square sunglasses for the RAEN buying guide",
    featured: false,
    relatedSlugs: [],
  },
  {
    slug: "art-of-movement",
    lastModified: "2026-08-30",
    title: "The Art of Movement",
    seoTitle: "The Art of Movement: Fitness as a Lifetime Practice",
    headline: "The Art of Movement: Why Fitness Is a Lifetime Practice",
    excerpt: "Why fitness is a lifetime practice, not a weekly chore.",
    category: "fitness",
    image: "/hs2.jpg",
    imageAlt: "Performance footwear for an active lifestyle",
    featured: true,
    relatedSlugs: [
      "running-shoes-vs-pickleball-shoes",
      "pickleball-shoes-vs-tennis-shoes",
      "indoor-vs-outdoor-pickleball-shoes",
    ],
  },
  {
    slug: "intermittent-fasting",
    lastModified: "2026-08-30",
    title: "The 16:8 Protocol",
    seoTitle: "16:8 Intermittent Fasting: Timing and Common Mistakes",
    headline: "The 16:8 Protocol: Why It’s Less About Dieting and More About Timing",
    excerpt: "Why timing can matter as much as counting calories.",
    category: "nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A colorful bowl of vegetables",
    featured: false,
    relatedSlugs: ["gut-health", "sleep-optimization"],
  },
  {
    slug: "gut-health",
    lastModified: "2026-10-29",
    title: "Gut-Friendly Eating Habits",
    seoTitle: "Gut-Friendly Eating: Practical Food-First Habits",
    headline: "Gut-Friendly Eating: A Practical Food-First Foundation",
    excerpt: "A measured, food-first foundation for supporting everyday digestive health.",
    category: "nutrition",
    image: "/page1.jpg",
    imageAlt: "A person enjoying time outdoors",
    featured: false,
    relatedSlugs: ["intermittent-fasting", "sleep-optimization"],
  },
  {
    slug: "sleep-optimization",
    lastModified: "2026-10-29",
    title: "Beyond Melatonin",
    seoTitle: "Beyond Melatonin: Practical Habits for Better Sleep",
    headline: "Beyond Melatonin: Practical Foundations for Better Sleep",
    excerpt: "Practical foundations for a more consistent sleep routine.",
    category: "lifestyle",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A calm bedroom prepared for sleep",
    featured: true,
    relatedSlugs: [
      "warmies-heatable-stuffed-animals",
      "acorn-slippers-autumn-comfort",
      "intermittent-fasting",
      "gut-health",
    ],
  },
  {
    slug: "running-shoes-vs-pickleball-shoes",
    lastModified: "2026-08-30",
    title: "Running Shoes vs. Pickleball Shoes",
    seoTitle: "Running Shoes vs. Pickleball Shoes: What to Wear",
    headline: "Can You Wear Running Shoes for Pickleball? Court Shoes vs. Running Shoes",
    excerpt:
      "Understand how running and court shoes differ in stability, traction, cushioning, and movement before you step onto a pickleball court.",
    category: "fitness",
    image: "/running-vs-pickleball-shoes.webp",
    imageAlt: "A cushioned running shoe beside a low-profile court shoe",
    featured: true,
    relatedSlugs: [
      "pickleball-shoes-vs-tennis-shoes",
      "indoor-vs-outdoor-pickleball-shoes",
      "art-of-movement",
    ],
  },
  {
    slug: "pickleball-shoes-vs-tennis-shoes",
    lastModified: "2026-08-30",
    title: "Pickleball Shoes vs. Tennis Shoes",
    seoTitle: "Pickleball Shoes vs. Tennis Shoes: Key Differences",
    headline: "Pickleball Shoes vs. Tennis Shoes: What’s Actually Different?",
    excerpt:
      "A practical comparison of court-shoe construction, fit, weight, durability, and the features that matter more than the label.",
    category: "fitness",
    image: "/pickleball-vs-tennis-shoes.webp",
    imageAlt: "Two low-profile court shoes on a blue and green hard court",
    featured: false,
    relatedSlugs: [
      "running-shoes-vs-pickleball-shoes",
      "indoor-vs-outdoor-pickleball-shoes",
      "art-of-movement",
    ],
  },
  {
    slug: "indoor-vs-outdoor-pickleball-shoes",
    lastModified: "2026-08-30",
    title: "Indoor vs. Outdoor Pickleball Shoes",
    seoTitle: "Indoor vs. Outdoor Pickleball Shoes: What to Choose",
    headline: "Indoor vs. Outdoor Pickleball Shoes: Grip, Soles, and Durability",
    excerpt:
      "Choose court shoes by playing surface, not just by whether the court has a roof. Compare gym floors, indoor acrylic, and outdoor hard courts.",
    category: "fitness",
    image: "/indoor-vs-outdoor-pickleball-shoes.webp",
    imageAlt: "An indoor court shoe beside an outdoor hard-court shoe",
    featured: false,
    relatedSlugs: [
      "running-shoes-vs-pickleball-shoes",
      "pickleball-shoes-vs-tennis-shoes",
      "art-of-movement",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Unknown article slug: ${slug}`);
  }

  return article;
}
