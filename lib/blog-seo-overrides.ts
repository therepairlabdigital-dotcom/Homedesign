/**
 * SEO overrides for blog posts. Post titles are editorial and often run past the
 * ~60-character SERP limit; these shorter variants are used for <title> / og:title
 * only. The on-page H1 keeps the full editorial title. Descriptions here replace
 * ones that exceeded ~155 characters.
 */
export const blogMetaTitles: Record<string, string> = {
  "custom-home-building-process-seq":
    "Custom Home Build Process in South East Queensland",
  "duplex-townhouse-building-guide":
    "Duplex & Townhouse Builds: What Investors Plan Early",
  "cost-to-build-a-house-brisbane":
    "What Drives the Cost of Building a House in Brisbane",
  "granny-flat-secondary-dwelling-queensland":
    "Granny Flats & Secondary Dwellings in Queensland",
  "energy-efficient-home-design-queensland":
    "Energy Efficient Home Design for Queensland",
  "reactive-clay-soil-brisbane-footings":
    "Reactive Clay Soil in Brisbane and Your Footing Budget",
  "character-overlay-brisbane-what-it-restricts":
    "Brisbane Character Overlay: What Is Restricted",
  "dual-occupancy-feasibility-checklist":
    "Dual Occupancy Feasibility: Check Before You Buy",
  "flood-levels-minimum-floor-height-seq":
    "Flood Levels & Minimum Floor Heights in SEQ",
  "building-on-acreage-queensland":
    "Building on Acreage in Queensland: Water & Access",
  "house-orientation-queensland-climate":
    "House Orientation: The Upgrade Queensland Homes Skip",
  "building-inspection-stages-queensland":
    "Inspection Stages in a Queensland Home Build",
  "what-is-a-provisional-sum":
    "Provisional Sums & PC Items in a Fixed-Price Contract",
  "termite-protection-queensland-new-homes":
    "Termite Protection for New Queensland Homes",
  "council-or-private-certifier-queensland":
    "Council or Private Certifier for a Queensland Build?",
  "rainwater-tanks-queensland-requirements":
    "Rainwater Tanks on a Queensland Build: Sizing & Rules",
  "solar-and-battery-new-build-queensland":
    "Solar & Battery on a New Queensland Home",
  "asbestos-in-queensland-homes":
    "Asbestos in Queensland Homes: Where It Is & Removal",
  "pool-with-a-new-build-queensland":
    "Building a Pool With Your New Home in Queensland",
  "driveway-crossover-and-site-access-queensland":
    "Driveways, Crossovers & Site Access Costs in QLD",
  "roof-design-queensland-climate":
    "Roof Design for the Queensland Climate",
  "insulation-and-ventilation-queensland-homes":
    "Insulation & Ventilation in a Queensland Home",
  "duplex-or-house-which-performs-better-seq":
    "Duplex or House: Which Investment Performs Better?",
  "architect-building-designer-or-draftsperson":
    "Architect, Building Designer or Draftsperson?",
  "second-storey-addition-or-raise-queensland":
    "Second-Storey Addition or Raise the House? (QLD)",
  "air-conditioning-and-hot-water-queensland":
    "Air Conditioning & Hot Water Sizing for Queensland",
  "dual-key-and-secondary-dwellings-investment":
    "Dual Key & Secondary Dwellings for Investors",
  "site-supervision-what-good-looks-like":
    "Site Supervision: What Good Looks Like on a Build",
};

export const blogMetaDescriptions: Record<string, string> = {
  "knockdown-rebuild-brisbane":
    "How to judge whether demolishing and rebuilding beats renovating a Brisbane home: approvals, character protection and the cost logic behind it.",
  "energy-efficient-home-design-queensland":
    "Orientation, ventilation, shading, insulation and glazing choices that keep a South East Queensland home comfortable without constant air conditioning.",
  "building-on-a-small-lot-brisbane":
    "Design strategies for narrow and small lots in South East Queensland: setbacks, light, privacy, parking and the plan moves that make compact homes generous.",
  "cost-to-build-a-duplex-brisbane":
    "The cost drivers that decide a Brisbane duplex budget, from site conditions, approvals and services to specification, and where investors get caught.",
  "reactive-clay-soil-brisbane-footings":
    "Why identical houses on one Brisbane street can differ by tens of thousands in footing cost, how AS 2870 classification works and when to get a soil test.",
  "bushfire-attack-level-bal-queensland":
    "How Bushfire Attack Level assessment works under AS 3959, what each rating changes about construction, and why to check it before buying hinterland land.",
  "dual-occupancy-feasibility-checklist":
    "The eight checks that decide whether a South East Queensland site supports a duplex, from zone, frontage and services to title path, before you commit.",
  "flood-levels-minimum-floor-height-seq":
    "How flood and storm tide overlays set minimum habitable floor levels, what that does to your design and driveway, and why to check before drawing anything.",
  "cost-to-raise-a-queenslander":
    "The real cost components in a raise-and-build-under project: height limits, stumps, services and the ground-floor decisions that decide if it was worth it.",
  "check-overlays-on-your-block-before-you-buy":
    "A pre-purchase checklist for South East Queensland land covering flood, bushfire, character, vegetation and infrastructure overlays with low-cost searches.",
  "termite-protection-queensland-new-homes":
    "The termite management systems required on new Queensland homes, how each works, why the annual inspection matters most, and what voids your cover.",
  "driveway-crossover-and-site-access-queensland":
    "Why the driveway is a regulated structure, what a crossover approval involves, the gradient limits that catch steep blocks, and how access shapes the build.",
  "insulation-and-ventilation-queensland-homes":
    "Why insulating for heat exclusion differs from insulating for warmth, where to spend first, and why ventilation beats insulation in a subtropical climate.",
};

/**
 * Which money page a post should send readers to. Rendered as a "Related service"
 * box in the post template so informational traffic is routed to a conversion page.
 */
export const blogRelatedService: Record<string, { href: string; label: string; blurb: string }> = {
  "knockdown-rebuild-brisbane": { href: "/services/knockdown-rebuild/", label: "Knockdown Rebuild", blurb: "Demolition approvals, overlay checks and a fixed-price rebuild on your existing block." },
  "renovation-or-new-build": { href: "/services/knockdown-rebuild/", label: "Knockdown Rebuild", blurb: "When the numbers favour starting again, this is how we run it." },
  "granny-flat-secondary-dwelling-queensland": { href: "/services/granny-flats-secondary-dwellings/", label: "Granny Flats & Secondary Dwellings", blurb: "Attached, detached and above-garage secondary dwellings across SEQ." },
  "dual-key-and-secondary-dwellings-investment": { href: "/services/granny-flats-secondary-dwellings/", label: "Granny Flats & Secondary Dwellings", blurb: "Dual-key and secondary dwelling builds on a fixed-price contract." },
  "building-on-a-sloping-block": { href: "/services/sloping-block-homes/", label: "Sloping Block Homes", blurb: "Split-level, suspended and cut-and-fill designs priced honestly for the fall." },
  "retaining-walls-queensland-cost-and-approval": { href: "/services/sloping-block-homes/", label: "Sloping Block Homes", blurb: "Retaining, footings and drainage handled inside one fixed-price build." },
  "raising-and-building-under-a-queenslander": { href: "/services/house-raising-build-under/", label: "House Raising & Build Under", blurb: "Lift, build under and bring the whole house up to standard." },
  "cost-to-raise-a-queenslander": { href: "/services/house-raising-build-under/", label: "House Raising & Build Under", blurb: "What a raise-and-build-under actually involves, from stumps to slab." },
  "second-storey-addition-or-raise-queensland": { href: "/services/home-extensions-second-storey-additions/", label: "Extensions & Second Storey Additions", blurb: "Go up or go out, with the existing structure assessed first." },
  "building-on-a-small-lot-brisbane": { href: "/services/small-lot-narrow-block-homes/", label: "Small Lot & Narrow Block Homes", blurb: "Custom plans for tight frontages and high site cover in Brisbane infill suburbs." },
  "building-on-acreage-queensland": { href: "/services/acreage-homes/", label: "Acreage Homes", blurb: "Wastewater, water supply, bushfire rating and access designed in from the start." },
  "bushfire-attack-level-bal-queensland": { href: "/services/acreage-homes/", label: "Acreage Homes", blurb: "BAL-rated construction on hinterland and rural-residential lots." },
  "cost-to-build-a-duplex-brisbane": { href: "/services/duplex-townhouses/", label: "Duplex & Townhouses", blurb: "Dual occupancy builds for owner-occupiers and investors." },
  "dual-occupancy-feasibility-checklist": { href: "/services/duplex-townhouses/", label: "Duplex & Townhouses", blurb: "We tell you whether the site stacks up before you spend on drawings." },
  "duplex-or-house-which-performs-better-seq": { href: "/services/duplex-townhouses/", label: "Duplex & Townhouses", blurb: "Dual occupancy builds for owner-occupiers and investors." },
  "cost-to-build-a-house-brisbane": { href: "/services/new-home-builds/", label: "New Home Builds", blurb: "Fixed-price new homes across Brisbane, Gold Coast and Sunshine Coast." },
  "character-overlay-brisbane-what-it-restricts": { href: "/services/queenslander-homes/", label: "Queenslander Homes", blurb: "Character-compliant renovations, raises and extensions." },
  "queenslander-or-modern-home-brisbane": { href: "/services/queenslander-homes/", label: "Queenslander Homes", blurb: "Traditional character with modern performance." },
  "reactive-clay-soil-brisbane-footings": { href: "/services/custom-builds/", label: "Custom Builds", blurb: "Homes engineered for the block, not adapted to it afterwards." },
  "fixed-price-vs-cost-plus-contracts": { href: "/services/new-home-builds/", label: "New Home Builds", blurb: "Every Design Homes project runs on a fixed-price contract with a documented scope." },
  "multigenerational-home-design-queensland": { href: "/services/granny-flats-secondary-dwellings/", label: "Granny Flats & Secondary Dwellings", blurb: "Independent living for parents or adult kids on the block you already own." },
  "building-over-or-near-a-sewer-queensland": { href: "/services/small-lot-narrow-block-homes/", label: "Small Lot & Narrow Block Homes", blurb: "Tight sites, boundary walls and service constraints resolved in the design." },
};
