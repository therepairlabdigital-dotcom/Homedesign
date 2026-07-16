export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-home-building-process-seq",
    title: "What to Expect During a Custom Home Build in South East Queensland",
    description:
      "A practical walkthrough of the custom home building process, from first consultation and design to approvals, construction, and handover.",
    date: "2026-07-16",
    readTime: "5 min read",
    image: "/assets/images/stock/home-stucco-twostory.jpg",
    category: "New Homes",
    content: [
      {
        heading: "Start with the brief",
        body: [
          "A successful build starts with a clear brief. Before drawings or pricing, your builder needs to understand how you live, what matters most, the block constraints, your budget, and your preferred timeline.",
          "This early stage is where practical decisions save money later. Site access, orientation, slope, drainage, council requirements, and finish expectations all shape the final scope.",
        ],
      },
      {
        heading: "Design, approvals, and pricing",
        body: [
          "Once the brief is clear, the design can move into plans, engineering, selections, and approval documentation. In South East Queensland, approvals can vary by council, site conditions, overlays, and whether the project needs additional reports.",
          "A fixed-price contract is only useful when the scope is properly defined. The more complete the drawings and selections are before signing, the fewer surprises there should be during construction.",
        ],
      },
      {
        heading: "Construction and handover",
        body: [
          "Construction moves through site preparation, foundations, framing, lock-up, services, finishes, inspections, and final defects. Good project management keeps decisions moving before they hold up trades.",
          "At handover, you should receive keys, warranties, certificates, and clear guidance on maintenance. A quality builder stays available after handover for practical support.",
        ],
      },
    ],
  },
  {
    slug: "duplex-townhouse-building-guide",
    title: "Duplex and Townhouse Builds: What Investors Should Plan Early",
    description:
      "Key planning points for duplexes and townhouses, including site feasibility, approvals, layouts, budget control, and resale appeal.",
    date: "2026-07-16",
    readTime: "4 min read",
    image: "/assets/images/stock/duplex-modern-dual.jpg",
    category: "Duplexes",
    content: [
      {
        heading: "Check the site before the design",
        body: [
          "Duplex and townhouse projects depend heavily on the site. Frontage, slope, services, access, parking, setbacks, private open space, and council zoning can decide whether a project is feasible.",
          "Before committing to a design, confirm the planning rules and likely build constraints. A layout that looks good on paper still needs to work for approvals, construction access, and market demand.",
        ],
      },
      {
        heading: "Design for both approval and value",
        body: [
          "The strongest multi-dwelling projects balance compliance with liveability. Natural light, storage, privacy, acoustic separation, parking, and outdoor space make a big difference to end value.",
          "Avoid squeezing the site so hard that the homes become hard to live in. Better layouts usually sell, rent, and hold value more comfortably.",
        ],
      },
      {
        heading: "Control scope early",
        body: [
          "Multi-dwelling projects have more repeated decisions than a single home. Small upgrades can multiply quickly across two or more dwellings, so selections and inclusions should be documented early.",
          "A clear scope helps compare quotes properly and reduces avoidable variation costs once the build starts.",
        ],
      },
    ],
  },
  {
    slug: "renovation-or-new-build",
    title: "Renovation or New Build: How to Choose the Right Path",
    description:
      "A simple way to compare renovation and new build options when planning a major home upgrade in Queensland.",
    date: "2026-07-16",
    readTime: "4 min read",
    image: "/images/renovation-kitchen.jpg",
    category: "Renovations",
    content: [
      {
        heading: "Start with the structure",
        body: [
          "A renovation makes sense when the existing structure is sound and the layout can be improved without fighting the building. If the foundations, frame, roof, plumbing, or electrical systems need major work, the numbers can change quickly.",
          "Before deciding, get a realistic assessment of what must be kept, what can be changed, and what hidden work is likely.",
        ],
      },
      {
        heading: "Compare total cost, not just headline cost",
        body: [
          "Renovations can appear cheaper at first, but temporary accommodation, demolition, unknown defects, staged works, and finish matching can add complexity. New builds can offer cleaner pricing when the scope is defined from scratch.",
          "The right option is usually the one that gets you the home you actually want without carrying too many compromises.",
        ],
      },
      {
        heading: "Think about long-term use",
        body: [
          "If your needs have changed significantly, a new build may solve more problems at once. If you love the location, character, and core structure, a renovation can preserve what works while modernising the rest.",
          "A builder can help compare both paths against budget, approvals, timing, and resale value before you commit.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string, options: Intl.DateTimeFormatOptions) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-AU", options);
}
