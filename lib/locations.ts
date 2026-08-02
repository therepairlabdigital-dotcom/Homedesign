export type Location = {
  slug: string;
  name: string;
  region: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  intro: string[];
  suburbs: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const locations: Location[] = [
  {
    slug: "brisbane",
    name: "Brisbane",
    region: "Greater Brisbane",
    title: "Home Builders Brisbane",
    metaTitle: "Home Builders Brisbane | New Homes, Duplexes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders in Brisbane. New home builds, duplexes, townhouses, custom builds and Queenslander renovations across Greater Brisbane. Fixed-price contracts.",
    keywords: [
      "home builders Brisbane",
      "new home builders Brisbane",
      "custom home builders Brisbane",
      "duplex builders Brisbane",
      "knockdown rebuild Brisbane",
      "Queenslander renovation Brisbane",
    ],
    heroTitle: "Home Builders in",
    heroHighlight: "Brisbane",
    heroDescription:
      "New homes, duplexes, townhouses and custom builds across Greater Brisbane — delivered by a QBCC licensed builder with fixed-price contracts and hands-on site management.",
    heroImage: "/assets/images/stock/home-brick-twilight.jpg",
    intro: [
      "Brisbane building sites are rarely simple. Character overlays, reactive clay soils, sloping blocks, narrow inner-suburban frontages, and flood levels all shape what can be built and how it has to be built. A builder who knows the city plan and the ground conditions saves you money long before construction starts.",
      "Design Homes builds new homes, duplexes, townhouses and custom projects across Greater Brisbane. Every project runs on a fixed-price contract with a documented scope, so the number you sign is the number you plan around.",
    ],
    suburbs: [
      "Brisbane CBD & Inner North",
      "Paddington & Bardon",
      "New Farm & Teneriffe",
      "Ashgrove & The Gap",
      "Chermside & Aspley",
      "Carindale & Mansfield",
      "Sunnybank & Sunnybank Hills",
      "Wynnum & Manly",
      "Indooroopilly & Kenmore",
      "Mount Gravatt & Holland Park",
    ],
    sections: [
      {
        heading: "Character overlays and pre-war housing",
        body: [
          "Large parts of inner Brisbane sit within character residential zoning, where demolition of pre-war dwellings is restricted and new work has to respond to traditional building character. If you are buying in Paddington, Bardon, Ashgrove, Wooloowin or similar suburbs, the overlay is the first thing to check.",
          "Where full demolition is not available, the practical options are usually raising and building under, retaining the front of the dwelling and extending to the rear, or a sympathetic renovation. All three can produce an excellent result, but the design has to be shaped around the controls from the beginning rather than adjusted after a refusal.",
        ],
      },
      {
        heading: "Soil, slope and site costs",
        body: [
          "Brisbane's reactive clay soils are common through the western and southern suburbs, and they influence the footing system directly. A soil classification and engineering design early in the process converts a rough allowance into a real figure, which is what makes a fixed price meaningful.",
          "Slope is the other major cost driver. Many Brisbane blocks fall away from the street, which brings retaining, cut and fill, engineered footings or a suspended slab into the scope. Designing with the slope rather than flattening the site is almost always the better value approach.",
        ],
      },
      {
        heading: "Duplexes and small-lot development",
        body: [
          "Brisbane's low-medium density zoning supports dual occupancy and small-lot housing in defined areas, and duplexes remain one of the most efficient ways to increase yield on a well-located block. Frontage, setbacks, private open space, parking and site cover decide feasibility before design begins.",
          "We build duplexes and townhouse projects for owner-occupiers and investors, with the same fixed-price approach used on single dwellings. Where a site does not stack up, we will tell you before you spend money on drawings.",
        ],
      },
      {
        heading: "What working with us looks like",
        body: [
          "We start with the block and the brief, not a standard plan. That means a site assessment, a review of zoning and overlays, and an honest conversation about what the budget will realistically deliver on that particular piece of land.",
          "From there the process moves through design and documentation, engineering, selections, approvals, and a fully scoped fixed-price contract. During construction you deal with the people actually running your site, not a call centre.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build across all of Greater Brisbane?",
        answer:
          "Yes. We work throughout Greater Brisbane, from the inner suburbs out to the northern, southern, western and bayside areas, and we also build on the Gold Coast and Sunshine Coast.",
      },
      {
        question: "Can I demolish a pre-war house in Brisbane and rebuild?",
        answer:
          "It depends on the zoning and overlays applying to the property. Homes in character residential areas built before the relevant cut-off period are generally protected, and demolition may not be approved. We check the council property report and overlays before any design work begins so you know where you stand.",
      },
      {
        question: "Do you offer fixed-price contracts in Brisbane?",
        answer:
          "Yes. Every residential project we take on is written as a fixed-price contract against a fully documented scope, with provisional sums and prime cost items priced against your actual site and selections rather than generic allowances.",
      },
      {
        question: "How do I get a price for my Brisbane block?",
        answer:
          "Get in touch with the address and a description of what you want to build. We will review the site, the zoning and the overlays, discuss the brief with you, and prepare a proposal specific to that block.",
      },
    ],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    region: "Gold Coast",
    title: "Home Builders Gold Coast",
    metaTitle: "Home Builders Gold Coast | New Homes, Duplexes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders on the Gold Coast. New home builds, duplexes, townhouses and custom homes from Coomera to Coolangatta. Fixed-price contracts.",
    keywords: [
      "home builders Gold Coast",
      "new home builders Gold Coast",
      "custom home builders Gold Coast",
      "duplex builders Gold Coast",
      "luxury home builders Gold Coast",
    ],
    heroTitle: "Home Builders on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "Custom homes, duplexes and townhouses built from Coomera to Coolangatta — coastal-appropriate detailing, fixed-price contracts, and a builder on site.",
    heroImage: "/assets/images/stock/villa-luxury-modern.jpg",
    intro: [
      "Building on the Gold Coast means designing for the coast. Salt exposure, wind loading, high water tables in canal and beachside suburbs, and strong demand for indoor-outdoor living all shape the specification well beyond what an inland build requires.",
      "Design Homes builds new homes, duplexes, townhouses and custom projects across the Gold Coast, from the northern growth corridor through to the southern beaches, with fixed-price contracts and direct site supervision.",
    ],
    suburbs: [
      "Southport & Labrador",
      "Broadbeach & Mermaid Beach",
      "Burleigh Heads & Miami",
      "Palm Beach & Currumbin",
      "Robina & Varsity Lakes",
      "Coomera & Upper Coomera",
      "Pimpama & Ormeau",
      "Helensvale & Hope Island",
      "Nerang & Carrara",
      "Coolangatta & Tugun",
    ],
    sections: [
      {
        heading: "Building for a coastal environment",
        body: [
          "Proximity to the ocean determines the corrosion environment, and that flows through to fixings, fasteners, roof sheeting, gutters, window hardware, balustrades and reinforcement cover. Specifying the right materials for the exposure category is not an upgrade — it is what stops a five-year-old house looking twenty.",
          "Wind loading is the second consideration. Coastal sites and elevated hinterland blocks attract higher wind classifications, which affects bracing, tie-down and glazing. Getting the wind classification right at design stage avoids expensive redesign later.",
        ],
      },
      {
        heading: "Canal, beachside and low-lying blocks",
        body: [
          "Many Gold Coast suburbs sit on filled or low-lying land with a high water table. That affects footing design, slab type, drainage and, in some locations, the minimum habitable floor level required by flood or storm tide controls.",
          "Canal-front sites bring additional considerations — revetment wall condition, setbacks from the waterway, and access for construction. These are worth confirming before purchase, because remediation of an aging revetment wall is a significant cost that sits outside the build.",
        ],
      },
      {
        heading: "Duplexes and dual occupancy in the growth corridor",
        body: [
          "The northern Gold Coast corridor through Coomera, Pimpama and Ormeau continues to attract dual occupancy and townhouse development, and duplexes remain a strong option for investors seeking two incomes from one title.",
          "Feasibility comes down to lot dimensions, zoning, setbacks, private open space, parking and site cover. We assess a site against those controls before design starts, so you are not paying for drawings on a block that cannot support the project.",
        ],
      },
      {
        heading: "Designing for how people live here",
        body: [
          "Gold Coast homes live outdoors. Orientation for breeze and shade, generous covered outdoor space, wide openings between inside and out, and pool integration matter more here than almost anywhere else in the country.",
          "Getting that right is design work, not a selections decision. We plan the outdoor living relationship early, alongside the site's aspect and prevailing breezes, rather than treating the alfresco as a leftover space at the back.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Gold Coast suburbs do you build in?",
        answer:
          "We build across the Gold Coast, from the northern corridor around Coomera, Pimpama and Ormeau through the central suburbs to the southern beaches at Palm Beach, Currumbin and Coolangatta, as well as the hinterland.",
      },
      {
        question: "Do you build homes on canal or waterfront blocks?",
        answer:
          "Yes. Waterfront and canal sites need particular attention to footing design, corrosion protection, drainage and setbacks from the waterway, and we assess the revetment wall and access constraints as part of the site review.",
      },
      {
        question: "Can you build a duplex on the Gold Coast?",
        answer:
          "Yes, where the site supports it. Dual occupancy feasibility depends on zoning, lot dimensions, setbacks, parking and site cover. We check those controls against your block before any design work begins.",
      },
      {
        question: "Do you offer fixed-price contracts?",
        answer:
          "Yes. Every project is written as a fixed-price contract against a documented scope, with site costs and allowances priced against your actual block rather than a standard figure.",
      },
    ],
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    region: "Sunshine Coast",
    title: "Home Builders Sunshine Coast",
    metaTitle: "Home Builders Sunshine Coast | New Homes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders on the Sunshine Coast. New home builds, custom homes, duplexes and acreage builds from Caloundra to Noosa. Fixed-price contracts.",
    keywords: [
      "home builders Sunshine Coast",
      "new home builders Sunshine Coast",
      "custom home builders Sunshine Coast",
      "acreage builders Sunshine Coast",
      "builders Noosa",
      "builders Caloundra",
    ],
    heroTitle: "Home Builders on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "New homes, custom builds and acreage projects from Caloundra to Noosa and out to the hinterland — built by a QBCC licensed builder on fixed-price contracts.",
    heroImage: "/assets/images/stock/home-luxury-landscape.jpg",
    intro: [
      "The Sunshine Coast covers an unusually wide range of building conditions in a short distance — coastal sand, low-lying canal estates, elevated hinterland slopes, and large acreage sites with their own water and wastewater requirements. What suits a block at Kawana rarely suits one at Maleny.",
      "Design Homes builds new homes, custom projects, duplexes and acreage builds across the Sunshine Coast, with a fixed-price contract and hands-on supervision on every job.",
    ],
    suburbs: [
      "Caloundra & Currimundi",
      "Kawana & Birtinya",
      "Maroochydore & Mooloolaba",
      "Buderim & Sippy Downs",
      "Coolum & Peregian",
      "Noosa & Noosaville",
      "Nambour & Woombye",
      "Palmwoods & Eudlo",
      "Maleny & Montville",
      "Beerwah & Landsborough",
    ],
    sections: [
      {
        heading: "Coastal strip versus hinterland",
        body: [
          "Along the coast, the priorities are corrosion protection, wind classification, sandy soil conditions and, in low-lying areas, flood or storm tide levels. Specification decisions here are about durability in a salt environment.",
          "In the hinterland the constraints change entirely — slope, access for construction vehicles, bushfire overlays, vegetation controls, and often no reticulated water or sewer. Both are straightforward to build in, but they need different design responses and different budgets.",
        ],
      },
      {
        heading: "Acreage and rural residential builds",
        body: [
          "Acreage blocks bring infrastructure into the build scope. Water supply is usually rainwater tanks with the storage sized to the household and the roof catchment. Wastewater is typically an on-site treatment system requiring council approval and a suitable land application area.",
          "Power connection distance, driveway length and construction, bushfire attack level assessment, and access for concrete and delivery vehicles all need to be costed as part of the project rather than discovered later. We scope these upfront so the contract price reflects the real site.",
        ],
      },
      {
        heading: "Designing for climate and outlook",
        body: [
          "Sunshine Coast blocks frequently have a view or an aspect worth designing around — ocean, hinterland ranges, or bushland. Placing the living areas to capture that while still managing western sun and summer heat is the core design challenge.",
          "Cross-ventilation, deep eaves, appropriate glazing, and shaded outdoor living do more for year-round comfort than mechanical cooling, and they cost less to run. These decisions belong in the plan, not the selections list.",
        ],
      },
      {
        heading: "How we work on the Coast",
        body: [
          "Every project starts with the site. We look at contours, soil, overlays, services and access, then talk through the brief and what the budget will genuinely deliver on that block before any drawings are produced.",
          "The build then runs on a documented fixed-price contract with regular progress updates and a single point of contact who is actually across your job.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build on acreage on the Sunshine Coast?",
        answer:
          "Yes. Acreage builds need water supply, on-site wastewater treatment, power connection, driveway and bushfire assessment scoped as part of the project, and we price those items against the actual site rather than leaving them as open allowances.",
      },
      {
        question: "How far north do you build?",
        answer:
          "We build across the Sunshine Coast from Caloundra through to Noosa, and inland through the hinterland to Maleny, Montville and the Glass House Mountains area.",
      },
      {
        question: "Do hinterland blocks cost more to build on?",
        answer:
          "Often, yes. Slope, access, bushfire requirements, and the absence of reticulated water and sewer all add to site costs. The offset is that hinterland land is usually cheaper and larger. We assess both sides before you commit.",
      },
      {
        question: "Can you build a custom design rather than a standard plan?",
        answer:
          "Yes. Most of our work is custom, designed around the block, the outlook and how you actually want to live rather than adapted from a fixed catalogue.",
      },
    ],
  },
  {
    slug: "ipswich",
    name: "Ipswich",
    region: "Ipswich & West Moreton",
    title: "Home Builders Ipswich",
    metaTitle: "Home Builders Ipswich | New Homes, Duplexes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders in Ipswich. New home builds, duplexes, townhouses and custom homes across Ipswich, Springfield and Ripley. Fixed-price contracts.",
    keywords: [
      "home builders Ipswich",
      "new home builders Ipswich",
      "duplex builders Ipswich",
      "builders Springfield Lakes",
      "builders Ripley Valley",
    ],
    heroTitle: "Home Builders in",
    heroHighlight: "Ipswich",
    heroDescription:
      "New homes, duplexes and custom builds across Ipswich, Springfield and the Ripley Valley — fixed-price contracts from a QBCC licensed builder.",
    heroImage: "/assets/images/stock/home-single-modern.jpg",
    intro: [
      "Ipswich is one of the fastest growing parts of South East Queensland, and the building conditions vary sharply across it — established suburbs with character housing and older infrastructure on one side, greenfield estates at Ripley and Springfield on the other.",
      "Design Homes builds new homes, duplexes, townhouses and custom projects throughout the Ipswich region on fixed-price contracts, with direct supervision on every site.",
    ],
    suburbs: [
      "Ipswich Central & Booval",
      "Springfield & Springfield Lakes",
      "Ripley & South Ripley",
      "Redbank Plains & Bellbird Park",
      "Brassall & Karalee",
      "Goodna & Collingwood Park",
      "Yamanto & Deebing Heights",
      "Rosewood & Walloon",
      "Karana Downs & Barellan Point",
      "Augustine Heights & Camira",
    ],
    sections: [
      {
        heading: "Greenfield estates and covenant requirements",
        body: [
          "Estates through Ripley, Springfield and Redbank Plains typically carry design covenants covering facade treatment, roof pitch, materials, driveway finish, fencing, landscaping and build commencement timeframes. These are contractual obligations on top of council requirements.",
          "Covenants are not a problem, but they need to be read before design starts. A plan that satisfies council and fails the estate's design review costs time and money to fix. We check the covenant against the design at concept stage.",
        ],
      },
      {
        heading: "Soil conditions and site preparation",
        body: [
          "Much of the Ipswich region has reactive clay soils that require appropriate footing design. A soil classification determines the slab and footing system, and it is the single most important input into an accurate site cost.",
          "Some parts of the region also have fill from previous earthworks, or mine subsidence history, both of which affect footing design. Establishing the ground conditions early is what allows a fixed price to hold.",
        ],
      },
      {
        heading: "Duplexes and dual living",
        body: [
          "Ipswich supports strong rental demand, and duplexes and dual-living homes are popular with investors as a result. Feasibility depends on the zoning, lot dimensions, setbacks, parking and private open space, plus any estate covenant restricting dual occupancy.",
          "We assess those controls against the specific block before design begins, and we will tell you when a site does not support the project you have in mind.",
        ],
      },
      {
        heading: "Building in established Ipswich suburbs",
        body: [
          "Older Ipswich suburbs include significant character housing, and some properties sit within heritage or character controls affecting demolition and alterations. Confirming this before purchase avoids an expensive surprise.",
          "Established blocks also tend to have mature trees, existing services in unexpected locations, and narrower access than a greenfield lot. These are all manageable, but they belong in the site assessment rather than the variations list.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build in Ripley Valley and Springfield estates?",
        answer:
          "Yes. We build throughout the Ipswich growth areas including Ripley, South Ripley, Springfield, Springfield Lakes and Redbank Plains, and we review the estate design covenant alongside council requirements at concept stage.",
      },
      {
        question: "What are typical site costs in Ipswich?",
        answer:
          "Site costs depend on soil classification, slope, fill, services and access, which vary considerably across the region. We price site costs against an actual soil test and contour survey for your block rather than using a standard allowance.",
      },
      {
        question: "Can you build a dual occupancy or duplex in Ipswich?",
        answer:
          "Where the zoning, lot dimensions and any estate covenant allow it, yes. We check those controls against your specific block before any design work starts.",
      },
      {
        question: "Do you build house and land, or only on land I already own?",
        answer:
          "We build on land you own or are purchasing. If you are still looking, we are happy to review a block before you commit so you know what it will realistically cost to build on.",
      },
    ],
  },
  {
    slug: "logan",
    name: "Logan",
    region: "Logan & Redlands",
    title: "Home Builders Logan",
    metaTitle: "Home Builders Logan | New Homes, Duplexes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders in Logan. New home builds, duplexes, townhouses and custom homes across Logan, Beenleigh and Park Ridge. Fixed-price contracts.",
    keywords: [
      "home builders Logan",
      "new home builders Logan",
      "duplex builders Logan",
      "builders Springwood",
      "builders Park Ridge",
    ],
    heroTitle: "Home Builders in",
    heroHighlight: "Logan",
    heroDescription:
      "New homes, duplexes and townhouses across the Logan region — a QBCC licensed builder delivering fixed-price contracts and proper site supervision.",
    heroImage: "/assets/images/stock/home-brick-contemporary.jpg",
    intro: [
      "Logan sits between Brisbane and the Gold Coast and carries characteristics of both. It has established suburbs with generous older blocks, strong investor demand supporting duplex and dual-living projects, and active greenfield growth areas at Park Ridge, Yarrabilba and Flagstone.",
      "Design Homes builds new homes, duplexes, townhouses and custom projects throughout Logan on fixed-price contracts with a documented scope.",
    ],
    suburbs: [
      "Springwood & Underwood",
      "Shailer Park & Loganholme",
      "Beenleigh & Eagleby",
      "Park Ridge & Regents Park",
      "Browns Plains & Hillcrest",
      "Marsden & Waterford West",
      "Jimboomba & Cedar Grove",
      "Yarrabilba & Logan Reserve",
      "Rochedale South & Daisy Hill",
      "Logan Village & Flagstone",
    ],
    sections: [
      {
        heading: "Duplexes and dual living",
        body: [
          "Logan is one of the more active dual occupancy markets in South East Queensland, driven by consistent rental demand and lot sizes in older suburbs that can support two dwellings. Duplexes and dual-key homes are both common.",
          "Feasibility is decided by zoning, minimum lot size, frontage, setbacks, parking, private open space and site cover. We assess a block against those controls first, so you know whether the project works before you commit to design fees.",
        ],
      },
      {
        heading: "Larger established blocks",
        body: [
          "Many established Logan suburbs have block sizes that are generous by current standards. That creates options — a larger single dwelling, a home with genuine yard, or a dual occupancy where the zoning permits it.",
          "Older blocks also come with mature trees, existing structures, and services that may not sit where the plans suggest. Establishing what is actually on site, and what protected vegetation exists, is part of the initial assessment.",
        ],
      },
      {
        heading: "Greenfield growth areas",
        body: [
          "Yarrabilba, Flagstone, Park Ridge and Logan Reserve continue to release new land, and these estates generally carry design covenants alongside council requirements. Facade treatment, materials, fencing, landscaping and commencement timeframes are typically covered.",
          "Reading the covenant before the design is drawn avoids rework at estate design review. We build within these estates regularly and factor their requirements into the concept.",
        ],
      },
      {
        heading: "Flooding and drainage",
        body: [
          "Parts of Logan sit near the Logan and Albert rivers and their tributaries, and flood overlays apply in a number of suburbs. Where they do, a minimum habitable floor level and specific construction requirements may apply.",
          "Checking the flood overlay on the council property report is a straightforward step that materially affects design and cost. It should happen before purchase wherever possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build duplexes in Logan?",
        answer:
          "Yes. Duplexes and dual-living homes are a significant part of our work in Logan. We assess zoning, lot dimensions, setbacks, parking and site cover against your specific block before design work begins.",
      },
      {
        question: "Which Logan suburbs do you cover?",
        answer:
          "We build across the Logan region, including Springwood, Shailer Park, Beenleigh, Browns Plains, Marsden, Park Ridge, Jimboomba, Yarrabilba, Logan Village and Flagstone.",
      },
      {
        question: "Is my Logan block affected by flooding?",
        answer:
          "Some parts of Logan carry flood overlays, particularly near the Logan and Albert rivers. The council property report will show any overlay, and we check it as part of the initial site assessment.",
      },
      {
        question: "Can you build in Yarrabilba or Flagstone estates?",
        answer:
          "Yes. We build in the Logan greenfield estates and design to the estate covenant as well as council requirements, so the plan clears design review the first time.",
      },
    ],
  },
  {
    slug: "moreton-bay",
    name: "Moreton Bay",
    region: "Moreton Bay",
    title: "Home Builders Moreton Bay",
    metaTitle: "Home Builders Moreton Bay | New Homes & Custom Builds",
    metaDescription:
      "QBCC licensed home builders in the Moreton Bay region. New home builds, custom homes, duplexes and acreage projects from North Lakes to Caboolture. Fixed-price contracts.",
    keywords: [
      "home builders Moreton Bay",
      "new home builders North Lakes",
      "builders Caboolture",
      "builders Redcliffe",
      "acreage builders Moreton Bay",
    ],
    heroTitle: "Home Builders in",
    heroHighlight: "Moreton Bay",
    heroDescription:
      "New homes, custom builds and acreage projects across the Moreton Bay region — from Redcliffe and North Lakes through to Caboolture and the hinterland.",
    heroImage: "/assets/images/stock/home-stucco-twostory.jpg",
    intro: [
      "The Moreton Bay region spans bayside suburbs, established residential areas, fast-growing estates and genuine acreage within a relatively small area. Site conditions change quickly across it, and so do the costs of building.",
      "Design Homes builds new homes, custom projects, duplexes and acreage builds across the region, always on a fixed-price contract priced against the actual block.",
    ],
    suburbs: [
      "North Lakes & Mango Hill",
      "Redcliffe & Scarborough",
      "Kallangur & Murrumba Downs",
      "Caboolture & Morayfield",
      "Narangba & Burpengary",
      "Petrie & Lawnton",
      "Strathpine & Bray Park",
      "Samford & Dayboro",
      "Bribie Island & Ningi",
      "Albany Creek & Eatons Hill",
    ],
    sections: [
      {
        heading: "Bayside and low-lying sites",
        body: [
          "Redcliffe, Scarborough, Bribie Island and the bayside suburbs bring a salt exposure environment, which affects fixings, roofing, gutters, hardware and reinforcement cover. Specifying to the correct corrosion category is what keeps maintenance costs down over the life of the home.",
          "Low-lying land around the bay and near waterways may also carry flood or storm tide overlays with minimum habitable floor levels attached. This is checked on the council property report as part of the initial assessment.",
        ],
      },
      {
        heading: "Growth corridors and estate covenants",
        body: [
          "North Lakes, Mango Hill, Narangba, Burpengary and the Caboolture corridor continue to release land, and most estates apply design covenants alongside council requirements — facade materials, roof pitch, driveway and fencing standards, and commencement timeframes.",
          "We design to the covenant and council requirements together so the plan clears both without rework.",
        ],
      },
      {
        heading: "Acreage in the western hinterland",
        body: [
          "Samford, Dayboro, Mount Nebo and the surrounding rural residential areas offer larger blocks with outlook, but they bring their own scope — rainwater storage, on-site wastewater treatment, longer driveways, power connection distance, bushfire attack level assessment and construction access.",
          "These items belong in the contract price from the start. We scope and price them against the actual site rather than leaving them as open allowances that grow later.",
        ],
      },
      {
        heading: "Established suburbs and knockdown rebuilds",
        body: [
          "Older suburbs through Strathpine, Bray Park, Lawnton and Petrie have well-located blocks with dated housing, which makes knockdown rebuild an appealing option for owners who like the area but not the house.",
          "The assessment is straightforward — check zoning and overlays, confirm demolition is available, assess the block for slope, soil and services, and compare the rebuild against a renovation on the same brief. We are happy to run that comparison honestly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build acreage homes at Samford and Dayboro?",
        answer:
          "Yes. Acreage builds require water storage, on-site wastewater treatment, power connection, driveway construction and bushfire assessment to be scoped as part of the project, and we price those against the actual site.",
      },
      {
        question: "Which Moreton Bay areas do you build in?",
        answer:
          "We build across the region, including North Lakes, Mango Hill, Redcliffe, Kallangur, Murrumba Downs, Narangba, Burpengary, Caboolture, Morayfield, Strathpine, Petrie, Samford and Bribie Island.",
      },
      {
        question: "Does building near the bay cost more?",
        answer:
          "Coastal exposure requires higher corrosion-resistance specifications for fixings, roofing and hardware, and low-lying sites may have minimum floor level requirements. Both affect cost, and both are identified during the site assessment rather than during construction.",
      },
      {
        question: "Can you handle a knockdown rebuild?",
        answer:
          "Yes. We manage the process from feasibility and demolition approval through to construction and handover, and we will give you a straight comparison against renovating before you commit.",
      },
    ],
  },
  {
    slug: "redland",
    name: "Redlands",
    region: "Redland City",
    title: "Home Builders Redlands",
    metaTitle: "Home Builders Redlands | New Homes & Custom Builds Redland City",
    metaDescription:
      "QBCC licensed home builders in the Redlands. New home builds, custom homes and renovations across Cleveland, Victoria Point, Capalaba and Thornlands.",
    keywords: [
      "home builders Redlands",
      "builders Cleveland",
      "builders Victoria Point",
      "builders Capalaba",
      "custom home builders Redland City",
    ],
    heroTitle: "Home Builders in the",
    heroHighlight: "Redlands",
    heroDescription:
      "New homes, custom builds and renovations across Redland City — bayside detailing, fixed-price contracts, and a builder you can actually reach.",
    heroImage: "/assets/images/stock/home-luxury-twilight.jpg",
    intro: [
      "Redland City combines bayside suburbs, established residential areas and semi-rural pockets, with a strong emphasis on outdoor living and, in many suburbs, significant protected vegetation.",
      "Design Homes builds new homes, custom projects and renovations across the Redlands on fixed-price contracts with a fully documented scope.",
    ],
    suburbs: [
      "Cleveland & Ormiston",
      "Victoria Point & Redland Bay",
      "Capalaba & Alexandra Hills",
      "Thornlands & Wellington Point",
      "Birkdale & Thorneside",
      "Sheldon & Mount Cotton",
      "Coochiemudlo & Russell Island",
      "Redland Bay & Bay Islands",
    ],
    sections: [
      {
        heading: "Vegetation and koala habitat controls",
        body: [
          "Redland City applies significant vegetation protection, and koala habitat overlays affect a number of suburbs. These controls can restrict clearing, influence building envelope placement, and require assessment before approval.",
          "Checking the overlays and any protected vegetation on the block early is essential. It shapes where the house can sit, which in turn shapes the design and the site costs.",
        ],
      },
      {
        heading: "Bayside exposure and detailing",
        body: [
          "Suburbs close to Moreton Bay sit in a marine environment, which affects the specification of fixings, roof sheeting, gutters, external hardware and reinforcement cover. Getting this right is a durability decision rather than a cosmetic one.",
          "Orientation for bay breezes and afternoon sun is the other significant design factor, and it is best resolved in the plan rather than compensated for later with mechanical cooling.",
        ],
      },
      {
        heading: "Established blocks and renovations",
        body: [
          "Much of the Redlands housing stock dates from periods when block sizes were generous, which makes extensions, renovations and knockdown rebuilds all viable options depending on the condition of the existing home.",
          "We assess the structure honestly. Where a renovation delivers the better outcome for the budget, we will say so rather than pushing toward a larger project.",
        ],
      },
      {
        heading: "Sloping and semi-rural sites",
        body: [
          "Areas around Mount Cotton, Sheldon and parts of Thornlands include sloping and semi-rural blocks with their own requirements — retaining, engineered footings, longer service runs, bushfire assessment and construction access.",
          "These are all normal parts of building in the area, but they need to be identified and priced before the contract rather than after.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do vegetation controls affect what I can build in the Redlands?",
        answer:
          "They can. Redland City applies vegetation protection and koala habitat overlays across a number of suburbs, which may restrict clearing and influence where the building can sit. We check the overlays on the council property report before design begins.",
      },
      {
        question: "Which Redlands suburbs do you build in?",
        answer:
          "We build across Redland City, including Cleveland, Ormiston, Victoria Point, Redland Bay, Capalaba, Alexandra Hills, Thornlands, Wellington Point, Birkdale, Sheldon and Mount Cotton.",
      },
      {
        question: "Do you do renovations as well as new builds?",
        answer:
          "Yes. We handle renovations, extensions and new builds, and we will give you a straight comparison of which path suits the existing structure, the brief and the budget.",
      },
      {
        question: "How do I get started?",
        answer:
          "Contact us with the property address and what you are hoping to build. We will review the site, the zoning and any overlays, and come back to you with a realistic assessment before any fees are involved.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
