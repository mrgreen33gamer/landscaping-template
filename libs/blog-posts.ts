// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-your-irrigation-system-needs-repair-waco-tx',
    title:    '5 Signs Your Irrigation System Needs Repair (Waco, TX)',
    excerpt:  'A failing irrigation system rarely announces itself loudly. Here are the five signs Waco homeowners should watch for before small issues become expensive ones.',
    category: 'Irrigation',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/irrigation-repair-signs.svg',
    imageAlt: 'Signs your irrigation system needs repair in Waco, TX',
    featured: true,
  },
  {
    slug:     'when-to-schedule-seasonal-lawn-cleanup',
    title:    'When to Schedule Seasonal Lawn Cleanup in Central Texas',
    excerpt:  "Timing seasonal cleanup wrong wastes money. Here's the actual fall and spring cleanup windows for Central Texas properties, and what to watch for if you're already overdue.",
    category: 'Seasonal Care',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/seasonal-cleanup-timing.svg',
    imageAlt: 'Seasonal lawn cleanup timing guide for Central Texas properties',
  },
  {
    slug:     'xeriscaping-vs-traditional-lawn-texas',
    title:    "Xeriscaping vs. Traditional Lawn: What's Right for Your Waco Yard?",
    excerpt:  "Central Texas summers push traditional turf to its limit. Here's what xeriscaping actually costs and saves compared to a traditional lawn for a Waco-area property.",
    category: 'Landscape Design',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/xeriscaping.svg',
    imageAlt: 'Xeriscaping vs traditional lawn comparison for Waco, TX yards',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }