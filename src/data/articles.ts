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
    excerpt: "Why fitness is a lifetime practice, not a weekly chore.",
    category: "fitness",
    image: "/hs2.jpg",
    imageAlt: "Performance footwear for an active lifestyle",
    featured: true,
  },
  {
    slug: "intermittent-fasting",
    title: "The 16:8 Protocol",
    excerpt: "Why timing can matter as much as counting calories.",
    category: "nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A colorful bowl of vegetables",
    featured: true,
  },
  {
    slug: "gut-health",
    title: "The 7-Day Gut Health Protocol",
    excerpt: "A food-first foundation for supporting digestion and a diverse microbiome.",
    category: "nutrition",
    image: "/page1.jpg",
    imageAlt: "A person enjoying time outdoors",
    featured: false,
  },
  {
    slug: "sleep-optimization",
    title: "Beyond Melatonin",
    excerpt: "Mastering the foundations of deep, restorative sleep.",
    category: "lifestyle",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    imageAlt: "A calm bedroom prepared for sleep",
    featured: true,
  },
];
