import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import {
  formatBlogDate,
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/blog-posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

/** Intro copy per category so each hub is a real page, not a bare list. */
const intros: Record<string, { blurb: string; body: string[] }> = {
  "new-homes": {
    blurb:
      "Everything that decides the cost, comfort and program of a new home build in South East Queensland, from a QBCC licensed builder who runs his own sites.",
    body: [
      "Most of what determines whether a new home is good is settled before construction starts. Soil classification sets the footing system. Orientation and eave depth set whether the house is comfortable. Overlays set the floor level and, on some blocks, whether you can build at all.",
      "These articles cover the decisions in the order they actually have to be made, and the checks worth doing before you buy a block rather than after.",
    ],
  },
  "cost-and-budget": {
    blurb:
      "Where the money actually goes on a Queensland build, what drives site costs, and how to read a building quote that looks cheaper than it really is.",
    body: [
      "The largest cost variances between two apparently similar projects are almost never in the building. They are in the ground, the overlays, the services and the access — the items an optimistic quote carries as an allowance.",
      "These articles explain what drives the numbers, what provisional sums really mean, and how to compare two builders fairly.",
    ],
  },
  "choosing-a-builder": {
    blurb:
      "QBCC licence checks, fixed-price versus cost-plus contracts, site supervision and the questions that tell you how a Queensland build will actually go.",
    body: [
      "Choosing a builder is mostly a due diligence exercise, and almost all of it can be done before you sign. The QBCC register, the contract terms, the deposit cap and the way a builder answers specific questions about your block are all available to you up front.",
      "These articles cover what to check, what the answers should sound like, and what to do when something goes wrong during construction.",
    ],
  },
  renovations: {
    blurb:
      "Character-overlay work, extensions, second storeys, raising and building under a Queenslander, and what usually hides behind the walls of an older home.",
    body: [
      "Renovation is the least standardised work in residential construction. Nothing is square, the surprises are structural, and the scope frequently changes once the building is opened up.",
      "These articles cover Brisbane's character overlay, raise-and-build-under, what older Queensland houses typically need, and how to decide between renovating and rebuilding.",
      "The honest test for whether to renovate is structural rather than aesthetic. If the frame, roof and foundations are sound and the layout can be reworked without relocating everything, renovation usually wins on cost per square metre. If you are moving the kitchen, the bathrooms and the external walls, you are approaching rebuild cost for a compromised result.",
      "In much of inner Brisbane the decision is not entirely yours. Pre-1947 houses in character areas are protected, demolition is restricted, and the project becomes a raise-and-build-under or an extension whether or not that was the plan.",
      "What is behind the walls decides the budget. Termite damage, stumps at the end of their life, previous unapproved work, failing services and asbestos in anything pre-1990 are the recurring finds, and they are why investigation before contract matters more on renovation than on any other kind of build.",
    ],
  },
  duplexes: {
    blurb:
      "Feasibility checks, approvals, titling and design for duplexes and dual occupancy across Brisbane, Gold Coast, Sunshine Coast, Logan and Ipswich.",
    body: [
      "A duplex is a development project wearing the clothes of a house. The margin is decided before design, by the zone, the frontage, the sewer alignment and the services capacity.",
      "These articles cover the feasibility checks worth doing before you buy, how the title path affects the build, and whether a duplex or a single house performs better on a given site.",
      "Feasibility should produce a straight answer rather than an encouraging one: this site supports two dwellings of roughly this size, at roughly this cost, over roughly this program. Anything vaguer is optimism with a spreadsheet attached.",
      "The checks that most often rule a site out are frontage and sewer alignment, and both can be established before you buy. Frontage drives the driveway, the parking and whether two dwellings can be arranged at all. A sewer main crossing the block can consume an entire development margin.",
      "The other decision that has to happen early is the exit. Holding and renting rewards durability and practical layout; selling to owner-occupiers rewards finish level and street appeal; and selling the halves separately requires the title path to be designed in from the start rather than retrofitted.",
    ],
  },
  "custom-builds": {
    blurb:
      "One-off homes for sloping, narrow and character-overlay blocks: design decisions, site costs and the trade-offs between architect, designer and builder.",
    body: [
      "A custom build makes sense when the block, the brief or the budget rules out a standard plan. On acreage the design problem is where the house should sit; on a constrained site it is how it fits at all.",
      "These articles cover the decisions that come with designing from scratch, from selections and storage planning through to acreage services.",
      "The trade-off is honest: on a flat, serviced estate block where a standard plan genuinely suits how you live, a volume builder will beat a custom builder on price for a result you would be happy with. It is worth knowing which situation you are in before you start paying for design.",
      "Where a standard plan has to be modified until the savings disappear and the compromises remain, a purpose-designed house usually costs less and delivers considerably more. Sloping sites, narrow frontages, character overlays, acreage services and genuinely specific briefs all fall into that category.",
      "The sequence that keeps a custom build on budget is always the same: investigate the site, then design to what you found, then price on complete documentation. Reversing those steps is how custom building earned its reputation for cost overruns.",
    ],
  },
};

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  const intro = intros[category.slug];

  return {
    title: `${category.name} Guides | Design Homes`,
    description:
      intro?.blurb ??
      `${category.name} articles for South East Queensland homeowners, from a QBCC licensed builder.`,
    alternates: { canonical: `${siteUrl}/blog/category/${category.slug}/` },
    robots: { index: true, follow: true },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const posts = getPostsByCategory(category.name);
  const intro = intros[category.slug];
  const categories = getCategories();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} guides`,
    description: intro?.blurb,
    url: `${siteUrl}/blog/category/${category.slug}/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${siteUrl}/blog/${post.slug}/`,
      })),
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNavbar />
      <MobileCTA />

      <PageHero
        title={category.name}
        highlight="Guides"
        description={intro?.blurb ?? `${category.name} articles from a QBCC licensed builder.`}
        image="/assets/images/stock/blueprint-keys.webp"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category.name, href: `/blog/category/${category.slug}` },
        ]}
      />

      {intro && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-6 lg:px-10">
            <div className="space-y-5">
              {intro.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-black/68">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F7F6F4] py-14 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in {category.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all hover:-translate-y-1 hover:border-[#B69560]/40 hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-black/45">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatBlogDate(post.date, { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-sora text-lg font-semibold leading-snug text-black">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-black/60">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-lg font-semibold text-black">Other topics</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {categories
              .filter((other) => other.slug !== category.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/category/${other.slug}`}
                  className="rounded-full border border-black/12 bg-[#FAFAF9] px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                >
                  {other.name} ({other.count})
                </Link>
              ))}
            <Link
              href="/blog"
              className="rounded-full border border-black/12 bg-[#FAFAF9] px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
            >
              All articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Got a question about your own block?"
        highlight="Ask us directly."
        description="Send through the address and what you have in mind. We will review the zoning, the overlays and the site conditions and come back with a straight assessment."
      />

      <SiteFooter />
    </main>
  );
}
