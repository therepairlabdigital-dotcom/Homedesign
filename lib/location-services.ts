export type LocationService = {
  locationSlug: string;
  serviceSlug: string;
  locationName: string;
  serviceName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  highlights: { title: string; body: string }[];
  suburbs: string[];
  faqs: { question: string; answer: string }[];
  parentServiceHref: string;
  parentServiceName: string;
};

export const locationServices: LocationService[] = [
  // ---------------------------------------------------------------- BRISBANE
  {
    locationSlug: "brisbane",
    serviceSlug: "custom-builds",
    locationName: "Brisbane",
    serviceName: "Custom Home Builds",
    region: "Greater Brisbane",
    metaTitle: "Custom Home Builders Brisbane | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders in Brisbane. Bespoke designs for sloping, narrow and character-overlay blocks, on fixed-price contracts. Talk to Harj direct.",
    keywords: [
      "custom home builders Brisbane",
      "custom home builder Brisbane",
      "bespoke home builders Brisbane",
      "architectural builders Brisbane",
      "sloping block builders Brisbane",
      "luxury home builders Brisbane",
    ],
    heroTitle: "Custom Home Builders in",
    heroHighlight: "Brisbane",
    heroDescription:
      "One-off homes designed around your block and the way you actually live — delivered on a fixed-price contract by a QBCC licensed builder who runs his own sites.",
    heroImage: "/assets/images/stock/home-luxury-twilight.jpg",
    intro: [
      "A custom build only makes sense when the block, the brief or the budget rules out anything off a standard plan. In Brisbane that describes a lot of sites: a 12-metre frontage in Paddington, a cross-fall of four metres in The Gap, a character overlay in Bardon that dictates what the street elevation can look like before a single line is drawn.",
      "Design Homes builds one-off homes across Greater Brisbane. We are not a volume builder running a plan library with a customisation menu — every project starts with the site and the brief, and the drawings follow. That is slower at the front end and considerably cheaper at the back end, because the expensive decisions get made on paper rather than on site.",
    ],
    sections: [
      {
        heading: "Start with the block, not the plan",
        body: [
          "The single most expensive mistake in a custom build is designing before you understand the site. Slope, soil classification, orientation, services, easements, overlays and access all set hard limits on what can be built and what it will cost to build it.",
          "Brisbane sites in particular carry reactive clay soils across large parts of the city. A site classified H1 or H2 under AS 2870 needs a stiffened raft or piered footing system, and the difference between that and a standard slab can run into tens of thousands of dollars. That number belongs in your budget before you fall in love with a floor plan, not after.",
          "We walk the block, pull the council property report, review the overlays and get a soil test done early. Only then do we talk about design. It is a less exciting first meeting and a much better outcome.",
        ],
      },
      {
        heading: "Character overlays and what they actually restrict",
        body: [
          "Large parts of inner Brisbane sit inside the Traditional Building Character Overlay under Brisbane City Plan. If your house was built before 1947 and is in a character area, demolition is heavily restricted and any new work has to respect the existing streetscape — roof form, verandah line, materials, and the relationship to the footpath.",
          "That does not mean you cannot build something contemporary. It means the front of the house has to hold the character reading while the back can be entirely modern. Most of the best inner-Brisbane homes we see work exactly that way: a restored or replicated street elevation, and a completely new rear pavilion opening to the north.",
          "The mistake is treating the overlay as an obstacle to argue with. Councils rarely lose those arguments. Designing with the overlay from day one gets approvals through faster and avoids a redesign cycle that can add months.",
        ],
      },
      {
        heading: "Sloping and narrow blocks",
        body: [
          "Brisbane is a city of ridges and gullies, and the flat rectangular block is the exception rather than the rule. Slope adds cost through retaining, drainage, engineered footings and site access — but it also delivers the views and the sub-floor volume that make a custom home worth building in the first place.",
          "Narrow inner-suburban frontages bring a different set of problems: crane and truck access, boundary setbacks, privacy to neighbours, and getting natural light into the middle of a long thin plan. These are solvable, but they are solved in design, not on site.",
          "We price slope and access honestly at the estimate stage. A builder who quotes a sloping block as though it were flat is not being competitive, they are setting up a variation.",
        ],
      },
      {
        heading: "Fixed price means the scope is finished",
        body: [
          "Every Design Homes project runs on a fixed-price contract. That is only meaningful if the scope behind it is complete — full working drawings, engineering, and a documented selections schedule covering finishes, fixtures and appliances.",
          "A cheap contract price with a thin specification is the oldest trick in residential construction. The provisional sums and prime cost items absorb the difference, and the final number lands well above the contract. We would rather spend longer nailing down the specification and hand you a number you can plan around.",
          "In Queensland, domestic building contracts above $20,000 are Level 2 contracts, the deposit is capped at 5 per cent, and the work is covered by the QBCC Home Warranty Scheme. Any builder who wants a larger deposit up front is worth asking hard questions about.",
        ],
      },
    ],
    highlights: [
      {
        title: "Site-first design",
        body: "Soil test, overlay check and survey before drawings, so the budget reflects the block you actually own.",
      },
      {
        title: "Character overlay experience",
        body: "Pre-1947 streetscapes handled properly — contemporary living behind a compliant street elevation.",
      },
      {
        title: "Fixed-price contracts",
        body: "Complete drawings and a documented selections schedule behind every number we quote.",
      },
      {
        title: "Owner-run sites",
        body: "You deal with Harj, not a call centre and not a rotating supervisor.",
      },
    ],
    suburbs: [
      "Paddington & Bardon",
      "Ashgrove & The Gap",
      "New Farm & Teneriffe",
      "Indooroopilly & Kenmore",
      "Carindale & Mansfield",
      "Holland Park & Camp Hill",
      "Wynnum & Manly",
      "Chermside & Aspley",
      "Sunnybank & Sunnybank Hills",
    ],
    faqs: [
      {
        question: "How much does a custom home cost to build in Brisbane?",
        answer:
          "It depends almost entirely on the block and the specification, which is why we do not publish a rate. Slope, soil classification, access, demolition, overlays and finish level move the number more than floor area does. We will give you a realistic range after we have looked at the site and understood the brief, before any fees are involved.",
      },
      {
        question: "Do you build on sloping blocks?",
        answer:
          "Yes, and a large share of our Brisbane work is on sloping sites. Slope means engineered footings, retaining, drainage design and careful site access planning. We price those elements up front rather than treating them as variations later.",
      },
      {
        question: "Can you build in a character overlay area?",
        answer:
          "Yes. We work within the Traditional Building Character Overlay regularly. The usual approach is a compliant, character-respecting street elevation with a fully contemporary rear addition. We check the overlay on the council property report before design starts.",
      },
      {
        question: "Do you work with my own architect or designer?",
        answer:
          "Yes. We are happy to build to drawings you already have, and we will review them for buildability and cost before you commit. If you do not have a designer yet, we can bring one in.",
      },
      {
        question: "How long does a custom home take in Brisbane?",
        answer:
          "Design and approvals typically run three to six months depending on council and whether overlays apply, and construction commonly runs nine to fourteen months for a custom home. Weather, site conditions and selections delays are the usual causes of variance.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "brisbane",
    serviceSlug: "duplex-townhouses",
    locationName: "Brisbane",
    serviceName: "Duplex & Townhouse Builds",
    region: "Greater Brisbane",
    metaTitle: "Duplex Builders Brisbane | Design Homes",
    metaDescription:
      "QBCC licensed duplex and townhouse builders in Brisbane. Site feasibility, council approvals and fixed-price dual occupancy builds for investors and families.",
    keywords: [
      "duplex builders Brisbane",
      "dual occupancy builders Brisbane",
      "townhouse builders Brisbane",
      "duplex construction Brisbane",
      "duplex build cost Brisbane",
      "small lot housing Brisbane",
    ],
    heroTitle: "Duplex & Townhouse Builders in",
    heroHighlight: "Brisbane",
    heroDescription:
      "Dual occupancy and small multi-dwelling projects across Greater Brisbane — feasibility first, then a fixed-price build with a program you can hold subcontractors and lenders to.",
    heroImage: "/assets/images/stock/duplex-modern-dual.jpg",
    intro: [
      "A duplex is a development project wearing the clothes of a house. It has to satisfy a lender, a planning scheme, a market and a builder's program all at once, and the margin lives or dies on decisions made before construction starts.",
      "Design Homes builds duplexes and small townhouse projects across Greater Brisbane for investors, developers and families building for two generations. We will tell you early and directly if a site does not stack up. That conversation costs you nothing and has saved several clients a great deal.",
    ],
    sections: [
      {
        heading: "Feasibility before design",
        body: [
          "The first question is not what to build, it is whether the site permits it. Under Brisbane City Plan, dual occupancy is assessed against the zone, the minimum lot size, frontage, setbacks, site cover, private open space, car parking and deep planting requirements. A block that looks generous on a map can fail on frontage alone.",
          "Services matter just as much. Sewer alignment, stormwater discharge point, water meter capacity and electrical supply can each add a five-figure line item or, in the worst case, sink the project. We check these before anyone pays for a design.",
          "The output of feasibility should be a straight answer: this site supports two dwellings of roughly this size, at roughly this cost, over roughly this program. Anything vaguer is not feasibility, it is optimism.",
        ],
      },
      {
        heading: "Design for approval, rental and resale at once",
        body: [
          "A duplex has three audiences. The assessment manager has to approve it, a tenant or buyer has to want to live in it, and a valuer has to put a number on it. Designs that chase only one of those tend to disappoint on the other two.",
          "The details that consistently pay for themselves are acoustic separation between dwellings, genuine privacy in the outdoor space, real storage, a usable second bathroom, and off-street parking that does not dominate the frontage. These are not luxuries. They are the difference between a property that leases in a week and one that sits.",
          "Squeezing maximum floor area onto the block is usually the wrong optimisation. Two well-planned dwellings almost always outperform two cramped ones on both rent and resale.",
        ],
      },
      {
        heading: "Approvals, staging and titles",
        body: [
          "Most Brisbane duplex projects need a development approval before building approval, and the assessment timeframe depends on whether the proposal is code assessable or impact assessable. Impact assessable proposals trigger public notification, which adds time and risk.",
          "If you intend to sell the halves separately, the survey plan and community titles or subdivision path needs to be planned from the start. Retrofitting a title split onto a design that was not built for it is expensive and sometimes impossible.",
          "We work backwards from your intended exit — hold and rent, sell both, or live in one and rent the other — because that decision changes the design, the specification and sometimes the structure.",
        ],
      },
      {
        heading: "Cost control on a project with a lender attached",
        body: [
          "Duplex projects usually carry construction finance, and lenders release funds against progress claims at defined stages. That makes program certainty a financial issue, not just a convenience — every month of overrun is another month of interest against a property earning nothing.",
          "We run duplexes on fixed-price contracts with a documented stage schedule so your progress claims are predictable and your lender is not chasing us for certificates. Where variations do arise, they are priced and approved in writing before the work happens.",
          "In Queensland the QBCC Home Warranty Scheme applies to residential building work above the statutory threshold, which covers both dwellings. Confirm your builder's licence class actually permits the value and type of work you are asking for — it is a two-minute check on the QBCC register and it matters.",
        ],
      },
    ],
    highlights: [
      {
        title: "Feasibility first",
        body: "Zone, frontage, setbacks, site cover and services checked before you spend money on design.",
      },
      {
        title: "Built for the exit",
        body: "Hold, sell or split — the intended outcome shapes the design from day one, not after approval.",
      },
      {
        title: "Lender-ready programs",
        body: "Documented stage schedules so progress claims and drawdowns stay predictable.",
      },
      {
        title: "Acoustic and privacy detail",
        body: "Separation done properly, because it drives both rental performance and resale value.",
      },
    ],
    suburbs: [
      "Chermside & Aspley",
      "Sunnybank & Sunnybank Hills",
      "Mount Gravatt & Holland Park",
      "Carindale & Mansfield",
      "Wynnum & Manly",
      "Nundah & Northgate",
      "Moorooka & Salisbury",
      "Everton Park & Stafford",
      "Coorparoo & Greenslopes",
    ],
    faqs: [
      {
        question: "What size block do I need for a duplex in Brisbane?",
        answer:
          "It depends on the zone and the specific provisions that apply to your site under Brisbane City Plan, not on a single citywide number. Minimum lot size, frontage, site cover and private open space all interact. Send us the address and we will check the property report and give you a straight answer.",
      },
      {
        question: "Do I need a development approval as well as a building approval?",
        answer:
          "In most cases yes. Dual occupancy generally requires a development approval from council before building approval can be issued. Whether it is code assessable or impact assessable affects the timeframe, and impact assessable proposals go through public notification.",
      },
      {
        question: "Can I sell the two halves separately?",
        answer:
          "Often yes, but the title path has to be planned from the start. Whether it is a subdivision or a community titles scheme changes the survey, the services layout and sometimes the structure. Tell us your intended exit before design begins.",
      },
      {
        question: "How long does a duplex take to build in Brisbane?",
        answer:
          "Construction commonly runs ten to fourteen months for a standard two-dwelling project, with design and approvals ahead of that. Impact assessable approvals, service upgrades and wet weather are the usual causes of extension.",
      },
      {
        question: "Do you build townhouses as well as duplexes?",
        answer:
          "Yes, we build small townhouse projects. For larger schemes we will tell you honestly whether we are the right builder for the scale rather than stretch a program we cannot hold.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "brisbane",
    serviceSlug: "knockdown-rebuild",
    locationName: "Brisbane",
    serviceName: "Knockdown Rebuild",
    region: "Greater Brisbane",
    metaTitle: "Knockdown Rebuild Brisbane | Design Homes",
    metaDescription:
      "Knockdown rebuild specialists in Brisbane. Demolition approvals, character overlay checks, soil and slope assessment, and fixed-price rebuilds on your existing block.",
    keywords: [
      "knockdown rebuild Brisbane",
      "knock down rebuild Brisbane",
      "demolish and rebuild Brisbane",
      "rebuild cost Brisbane",
      "knockdown rebuild builders Brisbane",
      "demolition approval Brisbane",
    ],
    heroTitle: "Knockdown Rebuild in",
    heroHighlight: "Brisbane",
    heroDescription:
      "Stay in the suburb you already chose and replace the house that no longer works — demolition, approvals and a fixed-price rebuild handled end to end.",
    heroImage: "/assets/images/stock/construction-frame-new.jpg",
    intro: [
      "Knockdown rebuild is the most common path for Brisbane owners who like their street, their school catchment and their commute, and dislike their floor plan. You keep the land you already own — which in most inner and middle-ring Brisbane suburbs is the majority of the asset value — and replace the part that is failing you.",
      "It is not automatically the right answer. On a character-overlay block or a well-built post-war home with good bones, a renovation can deliver more for less. We will tell you which way we would go before you commit to either.",
    ],
    sections: [
      {
        heading: "The first question: are you allowed to demolish?",
        body: [
          "In Brisbane this is not a formality. If the house was built before 1947 and sits in a character area or a Demolition Control Precinct under Brisbane City Plan, demolition is restricted and approval is far from guaranteed. Councils protect pre-war streetscapes seriously, and the assessment looks at whether the building contributes to the character of the street.",
          "Before you plan anything, we pull the council property report and check the overlays. If demolition is restricted, the conversation shifts to what is usually a better project anyway — raising the existing house, building in underneath, and adding a rear extension.",
          "Finding this out at the start costs nothing. Finding it out after you have paid for design and a demolition quote is an expensive way to learn.",
        ],
      },
      {
        heading: "What demolition actually involves",
        body: [
          "Demolition is more than a machine and a skip. Service disconnections for power, water, sewer and gas have to be arranged and certified. Asbestos is likely in anything built before the late 1980s and requires licensed removal and disposal with documentation. Any protected vegetation on the site adds another approval layer.",
          "Site conditions drive the cost as much as the building does. A tight inner-suburban block with no side access, overhead powerlines and neighbours a metre away is a different job to a flat suburban lot with a wide driveway.",
          "We price demolition as a defined scope with the asbestos position established up front, rather than as a provisional sum that quietly grows.",
        ],
      },
      {
        heading: "Rebuilding on an established block",
        body: [
          "The advantage of a rebuild over a greenfield build is that the services are already there and the neighbourhood is established. The disadvantage is that everything else is constrained — access, storage, neighbouring structures, mature trees, and existing levels that may not suit a modern slab.",
          "Soil is the item most people underestimate. Much of Brisbane sits on reactive clay, and a site classified H1 or H2 under AS 2870 requires an engineered footing system considerably more expensive than a standard slab. An old house sitting happily on stumps tells you nothing about what a slab will need.",
          "We get the soil test and the survey done before design so the footing system, the retaining and the levels are in the budget from the first number you see.",
        ],
      },
      {
        heading: "Rebuild or renovate — how to decide",
        body: [
          "The honest test is structural. If the existing frame, roof and foundations are sound and the layout can be reworked without moving everything, renovation usually wins on cost per square metre. If you are moving the kitchen, the bathrooms, the stairs and the external walls, you are paying rebuild prices for a compromised result.",
          "The other factor is compliance. A rebuild delivers a house built to current standards throughout — including the energy efficiency provisions now applying to new homes in Queensland — while a renovation only brings the touched parts up to current requirements.",
          "We give clients a straight comparison on both paths, including the cases where we recommend renovating and therefore doing less work. That is a better outcome for you and a better reference for us.",
        ],
      },
    ],
    highlights: [
      {
        title: "Overlay check first",
        body: "We confirm whether demolition is even permitted before you spend a dollar on design.",
      },
      {
        title: "Demolition scoped properly",
        body: "Service disconnections, asbestos and vegetation established up front, not left as a provisional sum.",
      },
      {
        title: "Soil and slope in the first number",
        body: "Reactive clay and cross-fall priced at estimate stage, not discovered at slab stage.",
      },
      {
        title: "Straight rebuild-vs-renovate advice",
        body: "If renovating is the better project for your house, we will say so.",
      },
    ],
    suburbs: [
      "Ashgrove & The Gap",
      "Bardon & Paddington",
      "Camp Hill & Coorparoo",
      "Carindale & Mansfield",
      "Holland Park & Tarragindi",
      "Wynnum & Manly",
      "Kenmore & Chapel Hill",
      "Everton Park & Stafford",
      "Wavell Heights & Nundah",
    ],
    faqs: [
      {
        question: "Can I demolish a pre-1947 house in Brisbane?",
        answer:
          "Often not without a fight. Pre-1947 houses in character areas and Demolition Control Precincts are protected under Brisbane City Plan, and approval is assessed against the contribution the building makes to the streetscape. We check the overlays on the council property report before anything else.",
      },
      {
        question: "How long does a knockdown rebuild take?",
        answer:
          "Allow roughly two to four months for demolition approval and the demolition itself, plus design and building approval, then nine to fourteen months of construction. Character overlay assessments and asbestos removal are the usual causes of a longer front end.",
      },
      {
        question: "Is a knockdown rebuild cheaper than renovating?",
        answer:
          "Sometimes. If the existing structure is sound and you are keeping the general layout, renovating usually costs less. If you are relocating the kitchen, bathrooms and external walls, you are close to rebuild cost with more compromise. We will give you a comparison rather than a sales pitch.",
      },
      {
        question: "Do you handle the demolition as well?",
        answer:
          "Yes. We manage demolition, service disconnections, licensed asbestos removal and the associated approvals as part of the project, so you have one contract and one point of contact.",
      },
      {
        question: "Can I live on site during the rebuild?",
        answer:
          "No. Once demolition begins the site is a construction site and cannot be occupied. Most clients rent nearby for the duration, and it is worth budgeting that alongside the build cost.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "brisbane",
    serviceSlug: "queenslander-homes",
    locationName: "Brisbane",
    serviceName: "Queenslander Renovations",
    region: "Greater Brisbane",
    metaTitle: "Queenslander Renovation Brisbane | Design Homes",
    metaDescription:
      "Queenslander renovation specialists in Brisbane. Raise and build under, rear extensions and character-compliant restorations under the Traditional Building Character Overlay.",
    keywords: [
      "Queenslander renovation Brisbane",
      "raise and build under Brisbane",
      "Queenslander builders Brisbane",
      "character home renovation Brisbane",
      "house raising Brisbane",
      "Queenslander extension Brisbane",
    ],
    heroTitle: "Queenslander Renovations in",
    heroHighlight: "Brisbane",
    heroDescription:
      "Raise and build under, rear extensions and character restorations — modern family living behind a street elevation that still reads as the house it always was.",
    heroImage: "/assets/images/queenslander-classic-new.webp",
    intro: [
      "The Queenslander is the best housing stock Brisbane has, and the most commonly ruined. Done well, raising the house and building in underneath roughly doubles the floor area on the land you already own, keeps the character the suburb is valued for, and produces a home that suits the climate better than most new builds.",
      "Done badly, it produces a dark ground floor with two-metre ceilings, a rear addition that fights the roof line, and a street elevation that has lost the proportions that made the house worth keeping. The difference is almost entirely in the planning.",
    ],
    sections: [
      {
        heading: "Raise and build under — what governs the outcome",
        body: [
          "Height is the constraint that decides everything. How far the house can be lifted is limited by the overlay provisions, the building height limit for the zone, and the relationship to neighbouring buildings and the street. That height then determines your ground floor ceiling, which determines whether the new level feels like a home or a basement.",
          "This is why the sequence matters. Establish the permitted height first, then design the ground floor to the space you genuinely have. Designing the floor plan first and discovering the height later is how people end up with 2.4-metre ceilings squeezed under an existing floor structure and a stair that eats the best room in the house.",
          "The existing structure also has a say. Stump condition, floor framing, bearer and joist sizes, and whether the house has been previously modified all affect what can be lifted safely and what has to be replaced. A proper structural assessment before design is not optional.",
        ],
      },
      {
        heading: "Working inside the Traditional Building Character Overlay",
        body: [
          "Most Brisbane Queenslanders in Paddington, Bardon, Ashgrove, Red Hill, Highgate Hill and similar suburbs sit within the Traditional Building Character Overlay. The overlay is concerned with what the street sees: roof form, verandah, front setback, window proportions, materials and the pattern of the streetscape.",
          "What it is far less concerned with is what happens at the back. That asymmetry is the key to a good Queenslander renovation. Restore and retain the front two rooms and the verandah properly, and put the contemporary open-plan living, the kitchen and the northern glazing in a rear addition where the overlay gives you room to move.",
          "Rear additions work best when they are legibly new rather than pretending to be original. A clearly contemporary rear pavilion, linked to the original house, generally reads better and approves more easily than a heavy-handed pastiche.",
        ],
      },
      {
        heading: "The details that make or break the result",
        body: [
          "Under-floor daylight is the first one. A ground floor that only gets light from the front and back will feel like a corridor. Light wells, a re-planned rear opening and careful use of the side setbacks change the entire feel of the level.",
          "Second is the stair. It is the most expensive square metre in the house and the most commonly badly placed. Put it where it connects both levels without stealing the northern light or cutting the living space in half.",
          "Third is matching the original fabric. VJ boards, chamferboard, casement windows, hoop pine floors and pressed metal all still exist and can be sourced or replicated, but they need to be specified early. Substituting modern equivalents at the last minute is where character renovations lose their character.",
          "Fourth is services. Old Queenslanders often carry knob-and-tube-era wiring remnants, undersized switchboards, failing galvanised plumbing and no insulation whatsoever. Budget for the full replacement of services rather than hoping to patch around them.",
        ],
      },
      {
        heading: "Why this work suits an owner-run builder",
        body: [
          "Character renovation is the least standardised work in residential construction. Nothing is square, dimensions vary across a single room, and the surprises are structural rather than cosmetic. It rewards a builder who is on site making decisions, and punishes one who is running it from a spreadsheet.",
          "That is the reason we do a lot of it. Harj runs the sites, and the trades on our character jobs are people who have done this work before and know what a 1920s bearer looks like when it has gone.",
          "It also means we are honest about contingency. A fixed-price contract on a character renovation should still carry a sensible allowance for what is behind the walls, and we will tell you what we found before we act on it.",
        ],
      },
    ],
    highlights: [
      {
        title: "Height established first",
        body: "Permitted height drives the ground floor design, not the other way around.",
      },
      {
        title: "Overlay-compliant elevations",
        body: "Street frontage that satisfies the character overlay, contemporary living at the rear.",
      },
      {
        title: "Original fabric matched",
        body: "VJ, chamferboard, casements and hoop pine specified early rather than substituted late.",
      },
      {
        title: "Structural assessment up front",
        body: "Stumps, bearers and floor framing checked before anyone commits to a lift.",
      },
    ],
    suburbs: [
      "Paddington & Red Hill",
      "Bardon & Ashgrove",
      "Highgate Hill & West End",
      "New Farm & Teneriffe",
      "Wilston & Windsor",
      "Camp Hill & Coorparoo",
      "Annerley & Yeronga",
      "Wooloowin & Clayfield",
      "Norman Park & Hawthorne",
    ],
    faqs: [
      {
        question: "How high can I raise a Queenslander in Brisbane?",
        answer:
          "It depends on the overlay provisions, the building height limit for your zone and the relationship to neighbouring properties, so there is no single citywide figure. We establish the permitted height from the council property report before design begins, because that height sets your ground floor ceiling.",
      },
      {
        question: "Do I need approval to raise and build under?",
        answer:
          "Yes. Raising a house and building in underneath generally requires both development approval and building approval, and inside the Traditional Building Character Overlay the assessment considers the effect on the streetscape.",
      },
      {
        question: "Can I put a modern extension on the back of a Queenslander?",
        answer:
          "Usually yes, and it is often the best approach. The character overlay is primarily concerned with what the street sees, which leaves considerable freedom at the rear. A clearly contemporary rear addition generally works better than an imitation of the original.",
      },
      {
        question: "Is it cheaper to raise a Queenslander or knock it down?",
        answer:
          "In a character area the choice is frequently made for you, because demolition of a pre-1947 house is restricted. Where both are permitted, raising and building under often delivers more usable floor area for the money and retains the character value that drives resale in these suburbs.",
      },
      {
        question: "What usually goes wrong with old Queenslanders?",
        answer:
          "Stumps and bearers at the end of their life, previous unapproved modifications, undersized electrical switchboards, failing plumbing, termite damage and no insulation. We assess all of it before design so the budget is honest.",
      },
    ],
    parentServiceHref: "/services/queenslander-homes",
    parentServiceName: "Queenslander Homes",
  },

  // ------------------------------------------------------------- GOLD COAST
  {
    locationSlug: "gold-coast",
    serviceSlug: "custom-builds",
    locationName: "Gold Coast",
    serviceName: "Custom Home Builds",
    region: "Gold Coast",
    metaTitle: "Custom Home Builders Gold Coast | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders on the Gold Coast. Canal-front, hinterland and sloping site builds on fixed-price contracts, from Coomera to Currumbin.",
    keywords: [
      "custom home builders Gold Coast",
      "luxury home builders Gold Coast",
      "canal front home builders Gold Coast",
      "hinterland builders Gold Coast",
      "acreage builders Gold Coast",
      "architectural builders Gold Coast",
    ],
    heroTitle: "Custom Home Builders on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "One-off homes for waterfront, hinterland and hillside sites — designed around the block, the aspect and the climate, and delivered on a fixed-price contract.",
    heroImage: "/assets/images/stock/villa-luxury-modern.jpg",
    intro: [
      "Gold Coast custom builds split roughly into two worlds. There is the coastal and canal strip, where the constraints are salt, wind, flood and storm tide, and the hinterland, where they are slope, bushfire, access and water supply. Both reward a builder who understands the specific conditions rather than applying a standard suburban detail.",
      "Design Homes builds one-off homes from Coomera down to Currumbin and back through the hinterland. Every project starts with the site conditions, because on the Gold Coast the site drives more of the cost than the floor plan does.",
    ],
    sections: [
      {
        heading: "Coastal and canal-front sites",
        body: [
          "Building near the water changes the specification throughout. Salt-laden air drives corrosion, so fixings, balustrades, window hardware, roof fixings and structural connections all need appropriate corrosion protection. Getting this wrong does not show up for five years and then shows up everywhere at once.",
          "Low-lying canal and estuarine land across the Gold Coast frequently sits over acid sulfate soils. Disturbing them without a management plan can trigger both an environmental problem and a compliance problem, so the soil investigation needs to happen before earthworks are designed.",
          "Canal frontages add revetment walls, which are a structural asset with their own condition, maintenance history and repair liability. Any purchase or build on a canal block should include an assessment of the existing wall — replacing one is a serious cost that buyers routinely fail to anticipate.",
        ],
      },
      {
        heading: "Flood, storm tide and overlay checks",
        body: [
          "Gold Coast City Plan applies flood and storm tide overlays across large parts of the city, and where they apply they set minimum habitable floor levels. That level is not a suggestion — it determines your slab height, your driveway grade, your entry sequence and often whether a single-storey design is viable at all.",
          "We pull the property report and confirm the applicable levels before design. Designing to the wrong level and correcting it later means redrawing the house, not adjusting it.",
          "Coastal erosion overlays apply along parts of the beachfront and carry their own restrictions on what can be built and where it can sit on the block. These are checkable in advance and expensive to discover late.",
        ],
      },
      {
        heading: "Hinterland and hillside builds",
        body: [
          "The hinterland behind Mudgeeraba, Bonogin, Tallai and Currumbin Valley delivers the best outlooks on the Gold Coast and the most demanding sites. Slope means engineered footings, retaining, cut and fill balance, and drainage design that has to handle genuine subtropical downpours.",
          "Bushfire is the overlay that most often catches people out. Where a bushfire hazard overlay applies, the site is assessed for a Bushfire Attack Level under AS 3959, and that rating drives construction requirements for windows, decks, screens, eaves and external cladding. A high BAL rating can add a substantial and entirely unavoidable amount to the build.",
          "Access is the other hinterland cost. If a concrete truck cannot get up the driveway, the solution is pumping, smaller loads or an upgraded access track, and all three cost money that belongs in the original estimate.",
        ],
      },
      {
        heading: "Designing for the subtropical climate",
        body: [
          "The Gold Coast climate rewards orientation more than equipment. North-facing living, cross-ventilation through the plan, deep eaves and shaded western glazing do more for comfort and running cost than any amount of added air conditioning capacity.",
          "New homes in Queensland are now built to the current National Construction Code energy efficiency provisions, which raised the performance requirement for new dwellings. Meeting it through design — orientation, glazing selection, shading and insulation — is considerably cheaper than meeting it through mechanical systems bolted on at the end.",
          "We design to the site's aspect and prevailing breeze first. It costs nothing at the drawing stage and it is the difference between a house that is pleasant in February and one that runs the air conditioning continuously.",
        ],
      },
    ],
    highlights: [
      {
        title: "Coastal-grade specification",
        body: "Corrosion protection specified properly for salt exposure, not treated as an upgrade.",
      },
      {
        title: "Flood and storm tide levels first",
        body: "Minimum habitable floor levels confirmed before design, because they reshape the whole house.",
      },
      {
        title: "BAL assessment for hinterland sites",
        body: "Bushfire rating established early so the construction requirements are in the first number.",
      },
      {
        title: "Orientation-led design",
        body: "Comfort through aspect, shading and cross-ventilation before mechanical cooling.",
      },
    ],
    suburbs: [
      "Coomera & Upper Coomera",
      "Helensvale & Hope Island",
      "Broadbeach & Mermaid Waters",
      "Burleigh Heads & Miami",
      "Palm Beach & Currumbin",
      "Robina & Varsity Lakes",
      "Mudgeeraba & Bonogin",
      "Tallai & Currumbin Valley",
      "Southport & Labrador",
    ],
    faqs: [
      {
        question: "Do you build on canal-front blocks?",
        answer:
          "Yes. Canal sites need a coastal-grade specification for corrosion, an assessment of the existing revetment wall, and confirmation of the applicable flood and storm tide levels. We check all three before design rather than after.",
      },
      {
        question: "What is a BAL rating and will it affect my build?",
        answer:
          "Bushfire Attack Level is a rating assessed under AS 3959 where a bushfire hazard overlay applies. It sets construction requirements for windows, decks, screens, eaves and cladding. Hinterland sites frequently carry a rating, and it can add meaningfully to cost, so we establish it early.",
      },
      {
        question: "Can you build on steep hinterland blocks?",
        answer:
          "Yes. Slope means engineered footings, retaining, drainage design and access planning for concrete and crane deliveries. We price those items at estimate stage rather than treating them as variations.",
      },
      {
        question: "How much does a custom home cost on the Gold Coast?",
        answer:
          "The site drives the number more than the floor area does. Flood levels, slope, bushfire rating, access and coastal specification all move it substantially. We will give you a realistic range once we have looked at the block and the brief.",
      },
      {
        question: "Do you work from Coomera to Currumbin?",
        answer:
          "Yes, we build across the Gold Coast local government area including the hinterland. Send us the address and we will confirm straight away.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "gold-coast",
    serviceSlug: "duplex-townhouses",
    locationName: "Gold Coast",
    serviceName: "Duplex & Townhouse Builds",
    region: "Gold Coast",
    metaTitle: "Duplex Builders Gold Coast | Design Homes",
    metaDescription:
      "QBCC licensed duplex and townhouse builders on the Gold Coast. Site feasibility, City Plan approvals and fixed-price dual occupancy builds for investors.",
    keywords: [
      "duplex builders Gold Coast",
      "dual occupancy Gold Coast",
      "townhouse builders Gold Coast",
      "duplex construction Gold Coast",
      "investment property builders Gold Coast",
      "duplex Coomera Pimpama",
    ],
    heroTitle: "Duplex & Townhouse Builders on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "Dual occupancy projects across the Gold Coast growth corridor and established suburbs — feasibility first, then a fixed-price build with a program your lender can rely on.",
    heroImage: "/assets/images/stock/townhouse-construction-new.jpg",
    intro: [
      "The Gold Coast has two very different duplex markets. In the northern growth corridor around Coomera, Pimpama and Ormeau, the land is newer, flatter and cheaper, and the play is volume and rental yield. In established suburbs closer to the beach, the land costs more, the sites are tighter, and the play is resale value.",
      "The feasibility maths is different in each, and so is the design. Design Homes builds dual occupancy across both, and we will tell you early if a site does not support the project you have in mind.",
    ],
    sections: [
      {
        heading: "Feasibility on Gold Coast sites",
        body: [
          "Under Gold Coast City Plan, whether a site supports dual occupancy depends on the zone, the minimum lot size, frontage, site cover, setbacks, private open space and car parking. A block that meets the area requirement can still fail on frontage, and frontage is the constraint that most often kills otherwise sensible projects.",
          "On the Gold Coast there is an extra layer that inland councils do not have. Flood and storm tide overlays set minimum habitable floor levels, and on a duplex those levels apply to both dwellings. A high required floor level can force a step up in structure, change the driveway grade, and quietly remove your margin.",
          "Low-lying sites may also sit over acid sulfate soils, which affects how the site can be excavated and what management is required. We check the overlays and the soil position before design.",
        ],
      },
      {
        heading: "The northern growth corridor",
        body: [
          "Coomera, Pimpama, Ormeau and Upper Coomera have absorbed a large share of the Gold Coast's population growth, and dual occupancy is common there. The advantage is straightforward sites with services already in place and a rental market with genuine depth.",
          "The risk is sameness. When a corridor fills with near-identical dual occupancy product, the ones that lease fastest and hold value best are the ones with something the others lack — genuine storage, a usable third bedroom, proper acoustic separation, real outdoor space, and a frontage not dominated by two garage doors.",
          "We design against the corridor default rather than to it. It costs very little at the drawing stage and it is the difference between competing on price and competing on quality.",
        ],
      },
      {
        heading: "Established suburbs and tighter sites",
        body: [
          "Closer to the coast, in suburbs like Miami, Mermaid Waters, Palm Beach and Labrador, dual occupancy sites are typically older, smaller and surrounded by existing homes. That brings demolition, neighbour management, restricted access and often a more demanding council assessment.",
          "It also brings a better exit. Well-designed dual occupancy in an established beachside suburb generally attracts owner-occupier buyers rather than only investors, and owner-occupiers pay more.",
          "For those sites the specification matters more. The finishes, the kitchen, the bathrooms and the outdoor living are what a buyer compares, and under-specifying to hit a budget usually costs more at resale than it saved during construction.",
        ],
      },
      {
        heading: "Program certainty and progress claims",
        body: [
          "Almost every duplex we build carries construction finance. Lenders release funds against defined stages, so a program that slips is an interest cost, not just an inconvenience.",
          "We run duplex projects on fixed-price contracts with a documented stage schedule, so progress claims are predictable and certificates arrive when your lender expects them. Variations get priced and approved in writing before any work happens.",
          "Check your builder's QBCC licence class covers the value and type of work before you sign. It takes two minutes on the QBCC register and it is the cheapest due diligence available to you.",
        ],
      },
    ],
    highlights: [
      {
        title: "Overlay-aware feasibility",
        body: "Flood, storm tide and acid sulfate soil positions confirmed before design starts.",
      },
      {
        title: "Designed against the corridor default",
        body: "Storage, separation and frontage detail that lifts a project above identical neighbours.",
      },
      {
        title: "Lender-ready staging",
        body: "Documented progress stages so drawdowns and certificates stay on schedule.",
      },
      {
        title: "Exit-led specification",
        body: "Finish level matched to whether you are holding, renting or selling to owner-occupiers.",
      },
    ],
    suburbs: [
      "Coomera & Upper Coomera",
      "Pimpama & Ormeau",
      "Helensvale & Oxenford",
      "Southport & Labrador",
      "Miami & Mermaid Waters",
      "Palm Beach & Elanora",
      "Nerang & Highland Park",
      "Robina & Varsity Lakes",
      "Burleigh Waters",
    ],
    faqs: [
      {
        question: "Is dual occupancy allowed on my Gold Coast block?",
        answer:
          "It depends on the zone and the specific provisions under Gold Coast City Plan, including minimum lot size, frontage, site cover and parking. Frontage is the constraint that most often rules a site out. Send us the address and we will check the property report.",
      },
      {
        question: "Do flood levels affect a duplex build?",
        answer:
          "Significantly. Where flood or storm tide overlays apply, minimum habitable floor levels are set for both dwellings, which affects slab height, driveway grade and sometimes the structure. We confirm the levels before design.",
      },
      {
        question: "Where on the Gold Coast do duplexes stack up best?",
        answer:
          "The northern corridor around Coomera, Pimpama and Ormeau offers straightforward sites and rental depth. Established beachside suburbs cost more but attract owner-occupier buyers at resale. Which suits you depends on whether you are holding or selling.",
      },
      {
        question: "How long does a Gold Coast duplex take?",
        answer:
          "Construction commonly runs ten to fourteen months, with design and approvals ahead of that. Impact assessable approvals, service upgrades and wet season weather are the usual causes of extension.",
      },
      {
        question: "Can I sell the two dwellings separately?",
        answer:
          "Often yes, but the title path has to be planned from the start because it affects the survey, services layout and sometimes the structure. Tell us your intended exit before design begins.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "gold-coast",
    serviceSlug: "new-home-builds",
    locationName: "Gold Coast",
    serviceName: "New Home Builds",
    region: "Gold Coast",
    metaTitle: "New Home Builders Gold Coast | Design Homes",
    metaDescription:
      "New home builders on the Gold Coast. Fixed-price contracts, flood and BAL checks handled up front, and hands-on site management from slab to handover.",
    keywords: [
      "new home builders Gold Coast",
      "home builders Gold Coast",
      "house builders Gold Coast",
      "new build Gold Coast",
      "knockdown rebuild Gold Coast",
      "QBCC builder Gold Coast",
    ],
    heroTitle: "New Home Builders on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "New homes across the Gold Coast on fixed-price contracts — with the flood levels, soil classification and bushfire rating established before you see a number.",
    heroImage: "/assets/images/stock/home-brick-contemporary.jpg",
    intro: [
      "Building a new home on the Gold Coast is straightforward on a flat, serviced, unencumbered block, and considerably less so on everything else. Since a large share of remaining Gold Coast land is either low-lying, sloping, bushfire-affected or near the water, most projects fall into the second category.",
      "We handle that by doing the investigation before the estimate. Flood and storm tide levels, soil classification, bushfire rating and access are all checked before we give you a price, so the number you receive reflects your block rather than a generic one.",
    ],
    sections: [
      {
        heading: "What actually drives the price",
        body: [
          "Clients are often surprised that two houses of the same floor area on the same street can differ by a six-figure sum. The variables are almost always site-related: footing system, retaining, required floor level, access, demolition, service connections and bushfire construction requirements.",
          "Soil classification under AS 2870 is the biggest single swing. A stable site takes a conventional slab. A reactive or problem site requires an engineered footing system that can cost several times as much. No amount of shopping around changes this — it is a function of the ground, not the builder.",
          "Anyone who quotes a Gold Coast block without a soil test and an overlay check is quoting a guess. That guess will be corrected later, at your expense.",
        ],
      },
      {
        heading: "House and land, or your own block",
        body: [
          "If you are buying into a new estate in the northern corridor, the block is likely to be flat, serviced and covenanted, and the main constraints are the developer's design guidelines — facade requirements, minimum floor area, materials, fencing and landscaping timeframes.",
          "If you are building on your own block in an established suburb, the constraints are the opposite: no covenant, but real site conditions, possible demolition, and neighbours. That is generally the more interesting project and the one where a custom approach earns its keep.",
          "We build in both situations. In estates we will make sure the design satisfies the covenant before it goes to council, because a covenant refusal after building approval is a genuinely painful sequence.",
        ],
      },
      {
        heading: "Energy efficiency and running cost",
        body: [
          "New homes in Queensland are built to the current National Construction Code energy provisions, which lifted the performance standard for new dwellings. On the Gold Coast the practical implications are glazing selection, shading, insulation and ceiling fans doing more of the work.",
          "The cheapest compliance is design compliance. Orienting living space to the north, shading western glass, planning for cross-ventilation and using eaves properly gets most of the way there before any product decision is made.",
          "The alternative — a poorly oriented house with high-performance glazing and a large air conditioning system bolted on — meets the standard and costs you every summer for the life of the house.",
        ],
      },
      {
        heading: "How we run a build",
        body: [
          "Fixed-price contract, complete drawings, documented selections schedule, and a program with defined stages. Progress claims follow the stages, and variations are priced and signed before work proceeds.",
          "Harj runs the sites. That is the practical difference between us and a volume builder — decisions get made by someone who has been on the job, and problems get raised with you when they appear rather than when they become expensive.",
          "Work is covered under the QBCC Home Warranty Scheme, and we are happy to give you our licence details so you can check the register yourself before you sign anything.",
        ],
      },
    ],
    highlights: [
      {
        title: "Investigation before estimate",
        body: "Soil, flood level, BAL and access established before we hand you a price.",
      },
      {
        title: "Estate covenants checked",
        body: "Design guidelines satisfied before council lodgement, not after building approval.",
      },
      {
        title: "Design-led energy compliance",
        body: "Orientation and shading before mechanical systems, so running costs stay low.",
      },
      {
        title: "One point of contact",
        body: "Harj runs the site and you deal with him directly, start to finish.",
      },
    ],
    suburbs: [
      "Coomera & Pimpama",
      "Ormeau & Yatala",
      "Helensvale & Oxenford",
      "Nerang & Highland Park",
      "Robina & Varsity Lakes",
      "Burleigh Waters & Miami",
      "Palm Beach & Elanora",
      "Southport & Labrador",
      "Mudgeeraba & Reedy Creek",
    ],
    faqs: [
      {
        question: "How much does it cost to build a new home on the Gold Coast?",
        answer:
          "The site drives it more than the size does. Footing system, required floor level, retaining, access, demolition and bushfire requirements can move the number substantially between two apparently similar blocks. We give a realistic range after checking the site.",
      },
      {
        question: "Do you build in new estates with design covenants?",
        answer:
          "Yes. We check the developer's design guidelines before lodging with council, so the facade, materials and floor area requirements are satisfied up front rather than causing a redesign later.",
      },
      {
        question: "How long does a new home take to build?",
        answer:
          "Nine to fourteen months of construction is typical, with design and approvals ahead of that. Wet season weather, service connections and selections delays are the common causes of variance.",
      },
      {
        question: "What is covered by QBCC home warranty?",
        answer:
          "The QBCC Home Warranty Scheme covers residential building work above the statutory threshold for defined defects and non-completion. Your builder pays the premium and it should appear in your contract documentation. Ask to see it.",
      },
      {
        question: "Can you build on my existing block after demolition?",
        answer:
          "Yes. We handle demolition, service disconnections, licensed asbestos removal and the rebuild under one contract so you have a single point of responsibility.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },

  // ---------------------------------------------------------- SUNSHINE COAST
  {
    locationSlug: "sunshine-coast",
    serviceSlug: "custom-builds",
    locationName: "Sunshine Coast",
    serviceName: "Custom Home Builds",
    region: "Sunshine Coast",
    metaTitle: "Custom Home Builders Sunshine Coast | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders on the Sunshine Coast. Acreage, hinterland and coastal builds with bushfire, slope and water supply handled up front.",
    keywords: [
      "custom home builders Sunshine Coast",
      "acreage builders Sunshine Coast",
      "hinterland builders Sunshine Coast",
      "luxury home builders Sunshine Coast",
      "sloping block builders Sunshine Coast",
      "Buderim custom home builder",
    ],
    heroTitle: "Custom Home Builders on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "Acreage, hinterland and coastal homes designed around the site — bushfire rating, slope, access and water supply established before the first number.",
    heroImage: "/assets/images/stock/home-luxury-landscape.jpg",
    intro: [
      "The Sunshine Coast attracts custom builds for a simple reason: the sites are worth designing for. Acreage in the hinterland, elevated blocks with genuine outlooks, and coastal land with real climate advantages all justify a one-off home rather than a plan pulled from a catalogue.",
      "They also carry constraints that suburban builders often underestimate. Bushfire hazard, slope, rural water and wastewater, and access for heavy deliveries are all normal parts of a Sunshine Coast project, and each carries real cost that belongs in the first estimate.",
    ],
    sections: [
      {
        heading: "Bushfire is the first thing to establish",
        body: [
          "A large proportion of Sunshine Coast hinterland and bushland-fringe land sits within a bushfire hazard overlay under the Sunshine Coast planning scheme. Where it applies, the site is assessed for a Bushfire Attack Level under AS 3959.",
          "The BAL rating drives construction requirements for glazing, decks, screens, eaves, subfloor enclosure and external cladding. The difference between a low rating and a high one is a substantial cost that cannot be designed away, only planned for.",
          "We establish the BAL before design. A client who knows the rating at the start makes better decisions about siting, vegetation management and budget than one who discovers it at building approval.",
        ],
      },
      {
        heading: "Acreage: water, wastewater and access",
        body: [
          "Acreage blocks frequently sit outside reticulated water and sewer. That means rainwater tanks sized to the dwelling and the fire requirements, and an on-site wastewater treatment system designed for the soil and the land available. Both need to be designed and approved, not assumed.",
          "Access is the second acreage cost. Long driveways over sloping ground need grading, drainage and a surface that concrete trucks and cranes can actually use. A driveway that works for a car does not necessarily work for a delivery.",
          "Power can be a third. Where the connection point is distant, the cost of extending supply or specifying a standalone system is a genuine budget line, and it is far better established at feasibility than at construction.",
        ],
      },
      {
        heading: "Hinterland slope and coastal aspect",
        body: [
          "The hinterland around Buderim, Maleny, Montville and the ranges delivers the outlooks that draw people to the region, on ground that demands engineered footings, retaining and drainage designed for serious rainfall.",
          "Slope is not only a cost. Used properly it produces the split-level and elevated designs that make these sites worth building on, with living space that opens to the view and service areas tucked into the cut.",
          "Closer to the coast, at Caloundra, Maroochydore, Coolum and Buderim's eastern side, the constraints shift to salt exposure, wind rating and, on low-lying land, flood levels. Coastal proximity means corrosion protection has to be specified properly throughout.",
        ],
      },
      {
        heading: "Designing for the climate, not against it",
        body: [
          "The Sunshine Coast climate is the reason people move there and the thing most new houses ignore. North-facing living, deep eaves, cross-ventilation and shaded western glass produce a house that is comfortable most of the year without mechanical help.",
          "Queensland new homes now meet a raised energy performance standard under the National Construction Code. Reaching it through orientation, shading and insulation costs far less than reaching it through equipment, and it keeps working after the warranty expires.",
          "On acreage in particular, where power may be limited or expensive, passive design is not an aesthetic preference. It is the difference between a house that runs cheaply and one that does not.",
        ],
      },
    ],
    highlights: [
      {
        title: "BAL rating established first",
        body: "Bushfire construction requirements priced into the first estimate, not discovered at approval.",
      },
      {
        title: "Acreage services planned",
        body: "Rainwater, on-site wastewater, power and driveway access designed and costed up front.",
      },
      {
        title: "Slope used, not fought",
        body: "Split-level and elevated designs that turn a difficult site into the reason you built there.",
      },
      {
        title: "Passive design first",
        body: "Orientation, eaves and ventilation before mechanical systems, especially on acreage.",
      },
    ],
    suburbs: [
      "Buderim & Mons",
      "Maroochydore & Alexandra Headland",
      "Caloundra & Currimundi",
      "Coolum Beach & Peregian",
      "Maleny & Montville",
      "Nambour & Woombye",
      "Palmwoods & Eudlo",
      "Mooloolaba & Buddina",
      "Beerwah & Landsborough",
    ],
    faqs: [
      {
        question: "Do you build on acreage?",
        answer:
          "Yes. Acreage builds need rainwater supply, an on-site wastewater system, driveway access suitable for heavy deliveries and sometimes a power supply extension. We design and cost all of it before construction rather than treating it as extras.",
      },
      {
        question: "How does a bushfire rating affect my build?",
        answer:
          "Where a bushfire hazard overlay applies, the site is assessed for a Bushfire Attack Level under AS 3959. That rating sets requirements for glazing, decks, screens, eaves and cladding, and a high rating adds substantial unavoidable cost. We establish it before design.",
      },
      {
        question: "Can you build in the hinterland?",
        answer:
          "Yes, including Maleny, Montville and the ranges. Slope means engineered footings, retaining and drainage designed for heavy rainfall, plus access planning for concrete and crane deliveries.",
      },
      {
        question: "Do I need a rainwater tank?",
        answer:
          "On acreage outside reticulated supply, yes, and it needs to be sized for the dwelling and any firefighting requirement that applies. Even on serviced land, tanks are commonly required or worthwhile.",
      },
      {
        question: "How much does a custom home cost on the Sunshine Coast?",
        answer:
          "Site conditions drive it more than floor area. Bushfire rating, slope, access, water and wastewater can each move the number materially. We give a realistic range after assessing the block.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "sunshine-coast",
    serviceSlug: "new-home-builds",
    locationName: "Sunshine Coast",
    serviceName: "New Home Builds",
    region: "Sunshine Coast",
    metaTitle: "New Home Builders Sunshine Coast | Design Homes",
    metaDescription:
      "New home builders on the Sunshine Coast. Fixed-price contracts with bushfire, soil and flood checks done before you see a price. QBCC licensed.",
    keywords: [
      "new home builders Sunshine Coast",
      "home builders Sunshine Coast",
      "house builders Sunshine Coast",
      "new build Sunshine Coast",
      "Caloundra home builders",
      "Maroochydore home builders",
    ],
    heroTitle: "New Home Builders on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "New homes from Caloundra to Coolum and back through the hinterland — fixed-price contracts, honest site assessment, and a builder who runs his own jobs.",
    heroImage: "/assets/images/stock/home-single-modern.jpg",
    intro: [
      "The Sunshine Coast has absorbed steady population growth, and much of the new housing has gone up quickly and generically. That is fine if you are buying a product. It is a poor outcome if you are building a home you intend to live in for twenty years on a site that deserved better.",
      "We build new homes across the region on fixed-price contracts, with the site investigation done before the estimate so the number reflects your block. On the Sunshine Coast that usually means checking bushfire, slope and soil before anything else.",
    ],
    sections: [
      {
        heading: "The site investigation that should happen first",
        body: [
          "Four checks determine most of the cost variance on a Sunshine Coast new build: soil classification under AS 2870, the applicable planning overlays including bushfire and flood, slope and required earthworks, and access for heavy vehicles.",
          "None of these are expensive to establish and all of them are expensive to discover late. A soil test and a council property report cost very little compared to the redesign that follows a wrong assumption about either.",
          "We do this work before quoting. It means our first number takes slightly longer to produce and is considerably more likely to be the number you end up paying.",
        ],
      },
      {
        heading: "Estates, covenants and design guidelines",
        body: [
          "Many new Sunshine Coast homes are built in master-planned estates that impose their own design guidelines on top of council requirements — facade treatments, roof pitch, materials, minimum floor area, driveway finishes, fencing and landscaping deadlines.",
          "These are contractual obligations to the developer, separate from the building approval. A design that satisfies council can still be rejected by the estate, and correcting that after approval wastes both time and money.",
          "We check the covenant before lodgement. It is a simple step that avoids one of the more frustrating delays in estate building.",
        ],
      },
      {
        heading: "Building for the coastal subtropical climate",
        body: [
          "Comfort on the Sunshine Coast comes from orientation, shading and ventilation. North-facing living areas, deep eaves, protected western glazing and a plan that allows breeze to pass through do more than any equipment specification.",
          "Proximity to the coast also means salt exposure. Fixings, hardware, roof sheeting, balustrades and structural connections all need corrosion protection appropriate to the distance from the water. This is a specification decision made at design stage, not a product substitution made on site.",
          "Queensland's current energy efficiency requirements for new homes are met most cheaply through design. Getting the orientation right costs nothing and pays every summer.",
        ],
      },
      {
        heading: "What a fixed-price contract should include",
        body: [
          "A fixed price is only as good as the scope behind it. Ours are built on complete working drawings, engineering, and a documented selections schedule covering finishes, fixtures and appliances, so provisional sums are minimal and specific.",
          "In Queensland, domestic building contracts over $20,000 are Level 2 contracts with a deposit capped at 5 per cent, and the work is covered under the QBCC Home Warranty Scheme. If a builder asks for a larger deposit, that is a signal worth taking seriously.",
          "We are happy to provide our QBCC licence details so you can check the register, the licence class and the history yourself before signing anything.",
        ],
      },
    ],
    highlights: [
      {
        title: "Four checks before quoting",
        body: "Soil, overlays, slope and access established before the estimate is issued.",
      },
      {
        title: "Covenant compliance up front",
        body: "Estate design guidelines satisfied before council lodgement.",
      },
      {
        title: "Coastal corrosion specified",
        body: "Fixings and hardware rated for salt exposure at design stage, not substituted on site.",
      },
      {
        title: "Minimal provisional sums",
        body: "Complete drawings and a documented selections schedule behind the fixed price.",
      },
    ],
    suburbs: [
      "Caloundra & Currimundi",
      "Maroochydore & Kuluin",
      "Buderim & Mountain Creek",
      "Coolum Beach & Peregian Springs",
      "Mooloolaba & Buddina",
      "Nambour & Woombye",
      "Palmwoods & Chevallum",
      "Sippy Downs & Sippy Creek",
      "Beerwah & Landsborough",
    ],
    faqs: [
      {
        question: "What does it cost to build a new home on the Sunshine Coast?",
        answer:
          "Site conditions drive the variance more than floor area does. Soil classification, bushfire rating, slope, earthworks and access can each move the number materially between similar-looking blocks. We give a realistic range after the site checks.",
      },
      {
        question: "Do you build in master-planned estates?",
        answer:
          "Yes. We check the estate's design guidelines before lodging with council so the facade, materials and floor area requirements are satisfied up front.",
      },
      {
        question: "How long does a new home take?",
        answer:
          "Typically nine to fourteen months of construction, plus design and approvals ahead of that. Wet weather, service connections and delayed selections are the common causes of extension.",
      },
      {
        question: "Do you build near the beach?",
        answer:
          "Yes. Coastal proximity means specifying corrosion protection appropriate to the exposure, and on low-lying sites confirming the applicable flood levels before design.",
      },
      {
        question: "What deposit can a builder ask for in Queensland?",
        answer:
          "For domestic building contracts over $20,000, the deposit is capped at 5 per cent. A request for more than that is worth questioning before you sign.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },

  // ------------------------------------------- LOGAN / IPSWICH / MORETON BAY
  {
    locationSlug: "logan",
    serviceSlug: "duplex-townhouses",
    locationName: "Logan",
    serviceName: "Duplex & Townhouse Builds",
    region: "Logan & Redlands",
    metaTitle: "Duplex Builders Logan QLD | Design Homes",
    metaDescription:
      "QBCC licensed duplex builders in Logan. Dual occupancy feasibility, Logan Planning Scheme approvals and fixed-price builds for investors and family projects.",
    keywords: [
      "duplex builders Logan",
      "dual occupancy Logan",
      "townhouse builders Logan",
      "duplex Springwood Marsden",
      "investment property builders Logan",
      "duplex construction Logan",
    ],
    heroTitle: "Duplex & Townhouse Builders in",
    heroHighlight: "Logan",
    heroDescription:
      "Dual occupancy across Logan's growth suburbs — larger blocks, better feasibility, and a fixed-price build with a program your lender can rely on.",
    heroImage: "/assets/images/stock/townhouse-construction-new.jpg",
    intro: [
      "Logan is one of the more sensible places in South East Queensland to build a duplex, for an unglamorous reason: the blocks are generally larger and cheaper than equivalent sites closer to Brisbane, which means the feasibility maths has room to work.",
      "That does not make every Logan site a project. Zone, frontage, services and slope still decide it, and plenty of blocks that look ideal on a listing fail on one of them. We check before you commit.",
    ],
    sections: [
      {
        heading: "Why Logan feasibility often works",
        body: [
          "Duplex feasibility comes down to land cost against combined end value. In much of inner and middle Brisbane the land has appreciated to the point where two modest dwellings no longer justify the site cost. In Logan the ratio is frequently still favourable.",
          "Logan blocks are also often wider. Frontage is the constraint that kills more duplex projects than any other, because it drives the driveway, the parking layout, the setbacks and whether two dwellings can be arranged sensibly at all. An extra three metres of frontage changes what is possible.",
          "The rental market has genuine depth, driven by proximity to both Brisbane and the Gold Coast along the M1 corridor. That matters if you are holding rather than selling.",
        ],
      },
      {
        heading: "What we check under the Logan Planning Scheme",
        body: [
          "Zone and the dual occupancy provisions that apply to it, minimum lot size, frontage, site cover, setbacks, private open space, deep planting and car parking. These interact, and a site can satisfy four of them and fail the fifth.",
          "Services next. Sewer alignment across the block, the available stormwater discharge point, water meter sizing and electrical supply capacity. In older Logan suburbs, service upgrades are a real and occasionally project-ending cost.",
          "Then the physical site: slope, fill, existing structures, vegetation and access. Some Logan blocks carry uncontrolled fill from earlier subdivision, which affects the footing design and needs to be identified by a geotechnical investigation rather than assumed.",
        ],
      },
      {
        heading: "Designing for the Logan rental market",
        body: [
          "The Logan rental market rewards practical design over finish level. Three genuine bedrooms, two bathrooms, real storage, a functional laundry and secure off-street parking outperform an upgraded kitchen in the same building.",
          "Acoustic separation between dwellings is the item most worth spending on. It is the single most common complaint in dual occupancy, it directly affects tenant retention, and it cannot be fixed after the fact without opening walls.",
          "Durability matters more in a rental than in an owner-occupied home. Specifying harder-wearing floor finishes, robust joinery and fittings that survive turnover reduces maintenance cost over a hold period substantially.",
        ],
      },
      {
        heading: "Running the project",
        body: [
          "Fixed-price contract, documented stage schedule, and progress claims that line up with your lender's drawdown schedule. Variations priced and approved in writing before work proceeds.",
          "If you intend to sell the halves separately, tell us at the start. The title path affects the survey, the services layout and sometimes the structure, and retrofitting it later is expensive.",
          "Check the QBCC register for your builder's licence class before signing. It takes two minutes and it is the cheapest protection available to you.",
        ],
      },
    ],
    highlights: [
      {
        title: "Feasibility that works",
        body: "Larger, cheaper blocks mean the land-to-end-value ratio still supports dual occupancy.",
      },
      {
        title: "Fill and geotech checked",
        body: "Uncontrolled fill from earlier subdivision identified before footings are designed.",
      },
      {
        title: "Built for tenants",
        body: "Acoustic separation, storage and durable finishes that hold up across turnovers.",
      },
      {
        title: "Lender-aligned staging",
        body: "Progress claims matched to drawdown schedules so finance stays on track.",
      },
    ],
    suburbs: [
      "Springwood & Rochedale South",
      "Marsden & Waterford West",
      "Browns Plains & Regents Park",
      "Beenleigh & Eagleby",
      "Loganholme & Shailer Park",
      "Crestmead & Berrinba",
      "Daisy Hill & Underwood",
      "Jimboomba & Park Ridge",
      "Logan Central & Woodridge",
    ],
    faqs: [
      {
        question: "Is Logan a good place to build a duplex?",
        answer:
          "Often yes. Blocks are generally larger and cheaper than comparable Brisbane sites, which keeps the land-cost-to-end-value ratio workable, and the rental market along the M1 corridor has real depth. The specific site still has to pass zone, frontage and services checks.",
      },
      {
        question: "What size block do I need?",
        answer:
          "It depends on the zone and the provisions applying to your site under the Logan Planning Scheme. Minimum lot size, frontage, site cover and parking all interact. Send us the address and we will check the property report.",
      },
      {
        question: "What is uncontrolled fill and why does it matter?",
        answer:
          "Some Logan blocks were filled during earlier subdivision without engineering control. Building on it requires either removal or a footing system designed to span it, both of which cost money. A geotechnical investigation identifies it before design.",
      },
      {
        question: "Should I build to rent or to sell?",
        answer:
          "That decision changes the design and the specification, so make it first. Rentals reward durability and practical layout; a sale rewards finish level and street appeal. We will design to whichever you choose.",
      },
      {
        question: "How long does a Logan duplex take?",
        answer:
          "Ten to fourteen months of construction is typical, with design and approvals ahead of that. Service upgrades and impact assessable approvals are the usual causes of a longer program.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "ipswich",
    serviceSlug: "duplex-townhouses",
    locationName: "Ipswich",
    serviceName: "Duplex & Townhouse Builds",
    region: "Ipswich & West Moreton",
    metaTitle: "Duplex Builders Ipswich | Design Homes",
    metaDescription:
      "QBCC licensed duplex builders in Ipswich. Dual occupancy feasibility, Ripley Valley and Springfield growth-area builds, and fixed-price contracts.",
    keywords: [
      "duplex builders Ipswich",
      "dual occupancy Ipswich",
      "townhouse builders Ipswich",
      "duplex Ripley Valley",
      "duplex Springfield Lakes",
      "investment builders Ipswich",
    ],
    heroTitle: "Duplex & Townhouse Builders in",
    heroHighlight: "Ipswich",
    heroDescription:
      "Dual occupancy across Ipswich and the western growth corridor — feasibility checked against the right planning authority, then a fixed-price build.",
    heroImage: "/assets/images/stock/duplex-modern-dual.jpg",
    intro: [
      "Ipswich has been one of South East Queensland's fastest-growing local government areas, and the western corridor through Ripley Valley and Springfield has absorbed much of that growth. For duplex investors this creates the same opportunity and the same risk as any fast-growing corridor: workable land economics, and the danger of building the same product as everyone around you.",
      "There is also a planning wrinkle specific to Ipswich that catches people out. Not every part of the area is assessed by the city council, and knowing which authority applies to your block changes the process entirely.",
    ],
    sections: [
      {
        heading: "Know which planning authority applies",
        body: [
          "Most Ipswich sites are assessed under the Ipswich planning scheme by the city council. But the Ripley Valley is a Priority Development Area, and development in a PDA is assessed under a development scheme administered by Economic Development Queensland rather than the council.",
          "The requirements, the assessment process and the timeframes differ. Assuming council rules apply to a Ripley Valley block, or vice versa, produces a design that has to be reworked and a program that slips.",
          "This is the first thing we check on an Ipswich site, before zone, before frontage, before anything else. It determines every step that follows.",
        ],
      },
      {
        heading: "Feasibility in the western corridor",
        body: [
          "Ipswich land remains among the more affordable in South East Queensland, which is what makes duplex feasibility work here. The trade-off is that end values are correspondingly lower, so the margin depends on controlling build cost rather than on capturing a high sale price.",
          "That makes design discipline more important, not less. Over-specifying a duplex in a corridor where the comparable sales do not support it is the fastest way to build a project that does not clear its costs.",
          "We model the build against realistic local comparables rather than aspirational ones, and we will say so if the numbers do not work.",
        ],
      },
      {
        heading: "Site conditions in Ipswich",
        body: [
          "Parts of the Ipswich area carry flood overlays associated with the Bremer River and its tributaries, and where they apply they set minimum habitable floor levels for both dwellings. That affects slab height, driveway grade and sometimes the structural approach.",
          "Soil conditions in the area frequently include reactive clays, so the footing system needs to follow a proper site classification under AS 2870 rather than an assumption carried over from another project.",
          "In older parts of Ipswich, service capacity and alignment need checking early — sewer position across the block and the available stormwater discharge point are the two that most often force a design change.",
        ],
      },
      {
        heading: "Building to compete in a new corridor",
        body: [
          "In a corridor filling with similar dual occupancy product, the projects that lease first and resell best are the ones with the practical advantages the others skipped: genuine storage, a usable third bedroom, proper acoustic separation between dwellings, real private outdoor space, and a frontage that is not just two garage doors.",
          "None of these are expensive at design stage. All of them are impossible to add later.",
          "We run every project on a fixed-price contract with a documented stage schedule so progress claims stay predictable, which matters when construction finance is attached.",
        ],
      },
    ],
    highlights: [
      {
        title: "Right authority identified first",
        body: "Council scheme or Ripley Valley PDA — we confirm which applies before anything else.",
      },
      {
        title: "Feasibility against real comparables",
        body: "Build cost modelled against actual local sales, not aspirational ones.",
      },
      {
        title: "Flood levels confirmed",
        body: "Bremer catchment overlays checked before design, because they reshape the build.",
      },
      {
        title: "Designed to stand out",
        body: "Storage, separation and frontage detail that lifts the project above corridor default.",
      },
    ],
    suburbs: [
      "Ripley & South Ripley",
      "Springfield & Springfield Lakes",
      "Redbank Plains & Bellbird Park",
      "Booval & Bundamba",
      "Brassall & North Ipswich",
      "Goodna & Gailes",
      "Yamanto & Raceview",
      "Karalee & Barellan Point",
      "Augustine Heights & Brookwater",
    ],
    faqs: [
      {
        question: "Who assesses my Ipswich duplex application?",
        answer:
          "It depends on where the block is. Most of the area is assessed by Ipswich City Council under the city planning scheme, but the Ripley Valley is a Priority Development Area assessed under a development scheme administered by Economic Development Queensland. The process and requirements differ, so this is the first thing we confirm.",
      },
      {
        question: "Does duplex development stack up financially in Ipswich?",
        answer:
          "It can, because land remains relatively affordable. End values are also lower, so the margin depends on controlling build cost. We model against actual local comparables and will tell you if a project does not clear.",
      },
      {
        question: "Are there flood issues in Ipswich?",
        answer:
          "Parts of the area carry flood overlays associated with the Bremer River and its tributaries. Where they apply, minimum habitable floor levels are set and they affect slab height, driveway grade and sometimes structure. We check before design.",
      },
      {
        question: "What size block do I need for a duplex in Ipswich?",
        answer:
          "It depends on the zone, the applicable scheme and the provisions for your specific site. Minimum lot size, frontage, site cover and parking interact. Send the address and we will check it.",
      },
      {
        question: "Can you build in Springfield and Ripley?",
        answer:
          "Yes. We build across the Ipswich area including the western growth corridor. Ripley Valley projects follow the PDA process, which we handle as part of the project.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "moreton-bay",
    serviceSlug: "new-home-builds",
    locationName: "Moreton Bay",
    serviceName: "New Home Builds",
    region: "Moreton Bay",
    metaTitle: "New Home Builders Moreton Bay | Design Homes",
    metaDescription:
      "QBCC licensed new home builders across Moreton Bay. Fixed-price contracts, estate covenant checks and honest site assessment from North Lakes to Caboolture.",
    keywords: [
      "new home builders Moreton Bay",
      "home builders North Lakes",
      "home builders Caboolture",
      "house builders Redcliffe",
      "new home builders Narangba",
      "QBCC builder Moreton Bay",
    ],
    heroTitle: "New Home Builders across",
    heroHighlight: "Moreton Bay",
    heroDescription:
      "New homes from Redcliffe to Caboolture and out through the growth suburbs — fixed-price contracts with the site work checked before you see a number.",
    heroImage: "/assets/images/stock/home-stucco-twostory.jpg",
    intro: [
      "Moreton Bay has been one of the busiest new-housing markets in South East Queensland, and most of that housing has come from volume builders working to a plan library. That model produces a competent house at a competitive price, and it produces very little that responds to the specific block it sits on.",
      "We build new homes across the region for people who want the second thing. Fixed-price contracts, complete drawings, and a builder who is on the site rather than managing it from a schedule.",
    ],
    sections: [
      {
        heading: "The estate question",
        body: [
          "A large share of Moreton Bay's new housing is in master-planned estates through North Lakes, Mango Hill, Narangba, Burpengary and Caboolture. Estates come with design covenants that sit on top of council requirements: facade treatment, roof pitch, materials, minimum floor area, driveway finish, fencing and landscaping deadlines.",
          "These are contractual obligations to the developer and they are enforced. A design that passes council can still be knocked back by the estate, and unwinding that after building approval costs both time and money.",
          "We review the covenant before lodgement. It is a small step that avoids one of the more common and avoidable delays in estate building.",
        ],
      },
      {
        heading: "Established suburbs and coastal sites",
        body: [
          "Around Redcliffe, Scarborough, Margate and the peninsula, the picture changes. Blocks are older and often smaller, many projects involve demolition of an existing house, and coastal proximity means salt exposure has to be addressed in the specification.",
          "Low-lying land around the bay and the Caboolture River catchment can carry flood overlays that set minimum habitable floor levels. Where they apply they affect slab height, entry sequence and driveway grade, so they need to be confirmed before design rather than during it.",
          "These sites generally reward a custom approach, because a standard plan rarely suits an older block with existing levels, mature trees and neighbours on both sides.",
        ],
      },
      {
        heading: "What moves the price",
        body: [
          "Soil classification under AS 2870 is the largest single variable. Reactive clay is common through parts of the region and an engineered footing system costs substantially more than a conventional slab. This is a function of the ground, not the builder, and no amount of quote shopping changes it.",
          "After that: required floor level where flood overlays apply, slope and earthworks, demolition where an existing house is involved, service connections, and access for concrete and crane deliveries.",
          "We establish all of it before quoting. A price issued without a soil test and a property report is an estimate of a hypothetical block.",
        ],
      },
      {
        heading: "How the build runs",
        body: [
          "Fixed-price contract backed by complete working drawings, engineering and a documented selections schedule, so provisional sums stay minimal and specific. Progress claims follow defined stages, and variations are priced and signed before any work happens.",
          "Queensland domestic building contracts over $20,000 are Level 2 contracts with the deposit capped at 5 per cent, and the work is covered under the QBCC Home Warranty Scheme. We will give you our licence details so you can check the register yourself.",
          "Harj runs the sites. On a Moreton Bay build that means the person making decisions on your job is the person you signed with.",
        ],
      },
    ],
    highlights: [
      {
        title: "Covenant reviewed first",
        body: "Estate design guidelines checked before council lodgement, not after approval.",
      },
      {
        title: "Flood levels confirmed",
        body: "Bay and Caboolture River catchment overlays established before design.",
      },
      {
        title: "Soil test before pricing",
        body: "Footing system based on an actual site classification, not an assumption.",
      },
      {
        title: "The person you signed with",
        body: "Harj runs the site, so decisions come from someone who has been on the job.",
      },
    ],
    suburbs: [
      "North Lakes & Mango Hill",
      "Redcliffe & Scarborough",
      "Margate & Woody Point",
      "Narangba & Burpengary",
      "Caboolture & Morayfield",
      "Petrie & Kallangur",
      "Strathpine & Bray Park",
      "Albany Creek & Eatons Hill",
      "Samford & Dayboro",
    ],
    faqs: [
      {
        question: "Do you build in North Lakes and the northern estates?",
        answer:
          "Yes. We review the estate's design covenant before lodging with council so facade, materials and floor area requirements are satisfied up front rather than causing a redesign after approval.",
      },
      {
        question: "How much does a new home cost in Moreton Bay?",
        answer:
          "Site conditions drive most of the variance. Soil classification, required flood level, slope, demolition and service connections can move the number substantially between similar blocks. We give a realistic range after the site checks.",
      },
      {
        question: "Can you build on the Redcliffe peninsula?",
        answer:
          "Yes. Peninsula sites need corrosion protection specified for salt exposure, and on low-lying land the applicable flood levels confirmed before design. Many also involve demolition of an existing house, which we handle under the same contract.",
      },
      {
        question: "How long does a new home take to build?",
        answer:
          "Typically nine to fourteen months of construction, with design and approvals ahead of that. Wet weather, service connections and delayed selections are the usual causes of extension.",
      },
      {
        question: "What deposit is a builder allowed to ask for?",
        answer:
          "For Queensland domestic building contracts over $20,000 the deposit is capped at 5 per cent. A request for more is worth questioning before you sign anything.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },

  // ------------------------------------------------------- SECOND EXPANSION
  {
    locationSlug: "brisbane",
    serviceSlug: "new-home-builds",
    locationName: "Brisbane",
    serviceName: "New Home Builds",
    region: "Greater Brisbane",
    metaTitle: "New Home Builders Brisbane | Design Homes",
    metaDescription:
      "QBCC licensed new home builders in Brisbane. Fixed-price contracts with soil, slope, flood and overlay checks completed before you receive a price.",
    keywords: [
      "new home builders Brisbane",
      "house builders Brisbane",
      "new build Brisbane",
      "home construction Brisbane",
      "residential builders Brisbane",
      "fixed price home builders Brisbane",
    ],
    heroTitle: "New Home Builders in",
    heroHighlight: "Brisbane",
    heroDescription:
      "New homes across Greater Brisbane on fixed-price contracts — with the site investigation done before the estimate, so the number reflects your block.",
    heroImage: "/assets/images/stock/home-brick-twilight.jpg",
    intro: [
      "Most new homes in Brisbane are built by volume builders working from a plan library. That model produces a competent house at a competitive price, and it works well on a flat, serviced block in a new estate. On an established Brisbane block it works considerably less well, because the plan was not drawn for your site.",
      "We build new homes across Greater Brisbane for people whose block, brief or budget makes a standard plan the wrong answer. Fixed-price contracts, complete drawings, and a builder who is on the site rather than managing it from a schedule.",
    ],
    sections: [
      {
        heading: "The four checks that decide your budget",
        body: [
          "Soil classification under AS 2870 comes first. Reactive clay is widespread across Brisbane, and a site classified H1 or H2 needs an engineered footing system rather than a conventional slab. This single item can move a budget by tens of thousands and it is a function of the ground, not the builder.",
          "Overlays come second. Flood, overland flow, character and bushfire overlays each carry consequences — minimum floor levels, demolition restrictions, or construction requirements. All of them are visible on the council property report before you spend anything.",
          "Slope and earthworks are third. Brisbane is built on ridges and gullies, and a cross-fall means retaining, drainage and cut-and-fill balance. Fourth is access: whether a concrete truck and a crane can actually reach the work.",
          "We complete all four before quoting. Our first number takes longer to produce and is far more likely to be the number you pay.",
        ],
      },
      {
        heading: "Building on an established block",
        body: [
          "An established Brisbane block usually means an existing house, mature trees, neighbours on both sides, and services already connected but not necessarily where you want them.",
          "If the existing house is pre-1947 and in a character area, demolition is restricted and may not be approved at all. That check has to happen before design, because it can change the project from a new build into a raise-and-build-under.",
          "Where demolition is permitted, it brings its own scope: service disconnections, licensed asbestos removal for anything built before the late 1980s, and vegetation approvals where protected trees are involved. We handle all of it under one contract.",
        ],
      },
      {
        heading: "Designing for the Brisbane climate",
        body: [
          "Brisbane summers are humid and the sun is high. The houses that work here orient living space to the north, shade western glazing properly, use eaves rather than relying on glass performance alone, and allow breeze to move through the plan.",
          "New homes in Queensland now meet a raised energy performance standard under the National Construction Code. Meeting it through orientation and shading costs nothing at the drawing stage. Meeting it through mechanical systems costs you every summer for the life of the house.",
          "Cross-ventilation is the item most commonly designed out of modern plans and most missed afterwards. Openings on opposite sides of a living space, and a plan that does not block the path between them, do more for comfort than any amount of added cooling capacity.",
        ],
      },
      {
        heading: "What a fixed price should be built on",
        body: [
          "Complete working drawings, engineering, and a documented selections schedule covering finishes, fixtures and appliances. Where provisional sums exist they should be few and specific, not a broad allowance absorbing the gap between a low quote and reality.",
          "In Queensland, domestic building contracts over $20,000 are Level 2 contracts with the deposit capped at 5 per cent, and the work is covered under the QBCC Home Warranty Scheme. A request for a larger deposit is worth questioning.",
          "We will give you our QBCC licence details so you can check the register, the class and the history yourself before signing anything.",
        ],
      },
    ],
    highlights: [
      {
        title: "Four checks before the quote",
        body: "Soil, overlays, slope and access established before we issue a price.",
      },
      {
        title: "Demolition handled",
        body: "Service disconnections, licensed asbestos removal and approvals under one contract.",
      },
      {
        title: "Climate-led design",
        body: "North-facing living, real eaves and cross-ventilation before mechanical cooling.",
      },
      {
        title: "Minimal provisional sums",
        body: "Complete drawings and a documented selections schedule behind the fixed price.",
      },
    ],
    suburbs: [
      "Ashgrove & The Gap",
      "Carindale & Mansfield",
      "Chermside & Aspley",
      "Kenmore & Chapel Hill",
      "Wynnum & Manly",
      "Everton Park & Stafford",
      "Camp Hill & Coorparoo",
      "Sunnybank & Sunnybank Hills",
      "Bridgeman Downs & Bald Hills",
    ],
    faqs: [
      {
        question: "What does it cost to build a new home in Brisbane?",
        answer:
          "Site conditions drive the variance more than floor area does. Soil classification, required flood level, slope, demolition and access can each move the number substantially between two blocks on the same street. We give a realistic range after the site checks, before any fees are involved.",
      },
      {
        question: "Do you build on established blocks with an existing house?",
        answer:
          "Yes. We handle demolition, service disconnections, licensed asbestos removal and the rebuild under one contract. The first step is checking whether demolition is permitted, because pre-1947 houses in character areas are restricted.",
      },
      {
        question: "How long does a new home take in Brisbane?",
        answer:
          "Nine to fourteen months of construction is typical, with design and approvals ahead of that. Character overlay assessments, service connections, wet weather and delayed selections are the usual causes of variance.",
      },
      {
        question: "Do you use standard plans?",
        answer:
          "No. Every project starts with the site and the brief, and the drawings follow. If a standard plan genuinely suits your block and budget, a volume builder will beat us on price and we will tell you so.",
      },
      {
        question: "What is the maximum deposit a Queensland builder can ask for?",
        answer:
          "For domestic building contracts over $20,000 the deposit is capped at 5 per cent. If a builder asks for more, that is worth questioning before you sign anything.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "brisbane",
    serviceSlug: "renovations",
    locationName: "Brisbane",
    serviceName: "Home Renovations",
    region: "Greater Brisbane",
    metaTitle: "Home Renovations Brisbane | Design Homes",
    metaDescription:
      "Renovation and extension builders in Brisbane. Structural renovations, rear extensions and full home transformations on fixed-price contracts. QBCC licensed.",
    keywords: [
      "home renovations Brisbane",
      "renovation builders Brisbane",
      "house extension Brisbane",
      "home extension builders Brisbane",
      "structural renovation Brisbane",
      "renovation contractor Brisbane",
    ],
    heroTitle: "Home Renovations in",
    heroHighlight: "Brisbane",
    heroDescription:
      "Extensions, structural renovations and full transformations across Greater Brisbane — scoped properly before contract, so the surprises stay behind the walls where they belong.",
    heroImage: "/assets/images/stock/home-entry-detail.jpg",
    intro: [
      "Renovation is harder to price than new construction and easier to get wrong. You are working with a structure someone else built, to standards that have changed, with conditions you cannot fully see until demolition starts.",
      "That is exactly why the investigation matters more here than anywhere else. We open up, inspect and scope before contract rather than pricing optimistically and issuing variations later.",
    ],
    sections: [
      {
        heading: "When renovating beats rebuilding",
        body: [
          "The honest test is structural. If the existing frame, roof and foundations are sound and the layout can be reworked without relocating everything, renovation usually wins on cost per square metre and on time.",
          "If the plan requires moving the kitchen, the bathrooms, the stairs and the external walls, you are approaching rebuild cost for a compromised result — new work stitched into old geometry, with the old constraints still setting the limits.",
          "There is a compliance dimension too. A rebuild delivers a house built to current standards throughout. A renovation only brings the parts you touch up to current requirements, which is often the right trade but should be a decision rather than a surprise.",
          "We give clients a straight comparison, including the cases where we recommend doing less work than they came in asking for.",
        ],
      },
      {
        heading: "What is usually behind the walls",
        body: [
          "In Brisbane housing stock, the recurring finds are termite damage in timber framing, previous unapproved work that does not comply, undersized electrical switchboards, failing galvanised plumbing, and no insulation at all.",
          "Asbestos is likely in anything built before the late 1980s — commonly in eaves, wet area sheeting, and sometimes vinyl flooring backing. It requires licensed removal with documentation, and it is not something to discover after the demolition crew has started.",
          "Stump and bearer condition matters on any older Brisbane home, particularly where the house has been previously altered without engineering. We inspect before quoting, not after.",
        ],
      },
      {
        heading: "Extensions and structural work",
        body: [
          "A rear extension is the most common Brisbane renovation and the most commonly underestimated. Connecting new to old means matching floor levels, tying in roof structure, dealing with an existing wall that may not be load-bearing where you assumed, and managing the junction where two building systems meet.",
          "Removing internal walls to open up a plan is straightforward when the wall is not structural and considerably less so when it is. Where it is, the answer is a beam sized by an engineer, with supports carried down to adequate footings — which sometimes means new footings in the middle of a finished house.",
          "Where an extension increases the building footprint, setbacks, site cover and overlays apply just as they do on a new build. Character overlay provisions in particular affect what can be done to the front and sides.",
        ],
      },
      {
        heading: "How we contract renovation work",
        body: [
          "Fixed price where the scope can genuinely be defined, with a clearly stated and sensible contingency for what is behind the walls. We tell you what we find before we act on it, and we price it in writing before proceeding.",
          "A renovation contract that carries no contingency at all is either priced with a hidden margin or set up for variations. Neither is honest, and both cost you more than a stated allowance would.",
          "Renovation is the work that most rewards an owner-run builder. Nothing is square, dimensions vary across a single room, and decisions have to be made on site by someone with the authority to make them.",
        ],
      },
    ],
    highlights: [
      {
        title: "Investigation before contract",
        body: "We open up and inspect before pricing, rather than issuing variations later.",
      },
      {
        title: "Straight renovate-vs-rebuild advice",
        body: "If rebuilding is the better project, we will tell you before you spend on design.",
      },
      {
        title: "Asbestos handled properly",
        body: "Licensed removal and documentation, established before demolition begins.",
      },
      {
        title: "Honest contingency",
        body: "A stated allowance for what is behind the walls, not a hidden margin or a variation trap.",
      },
    ],
    suburbs: [
      "Camp Hill & Coorparoo",
      "Paddington & Red Hill",
      "Ashgrove & Bardon",
      "Wilston & Windsor",
      "Holland Park & Tarragindi",
      "Kenmore & Chapel Hill",
      "Wynnum & Manly",
      "Clayfield & Hendra",
      "Norman Park & Hawthorne",
    ],
    faqs: [
      {
        question: "Is it cheaper to renovate or rebuild in Brisbane?",
        answer:
          "It depends on the existing structure. If the frame, roof and foundations are sound and you are keeping the general layout, renovating usually costs less per square metre. If you are relocating the kitchen, bathrooms and external walls, you are close to rebuild cost with more compromise.",
      },
      {
        question: "Do I need approval for a renovation?",
        answer:
          "Structural work, extensions and anything altering the building footprint generally need building approval, and often development approval as well. Inside a character overlay, work to the front and sides is assessed against the streetscape provisions. We confirm what applies before design.",
      },
      {
        question: "How do you price work when you cannot see behind the walls?",
        answer:
          "We investigate before contract — opening up where we can, inspecting stumps, framing and services — then price on a fixed basis with a clearly stated contingency for what remains hidden. Anything we find gets reported and priced in writing before we act on it.",
      },
      {
        question: "Will you find asbestos?",
        answer:
          "In anything built before the late 1980s, very likely — commonly in eaves and wet area sheeting. It requires licensed removal and disposal with documentation, which we establish and price before demolition rather than after.",
      },
      {
        question: "Can you do a rear extension on a character home?",
        answer:
          "Usually yes. The character overlay is mainly concerned with what the street sees, which generally leaves room for a contemporary rear addition. We check the specific provisions for your address first.",
      },
    ],
    parentServiceHref: "/services/renovations",
    parentServiceName: "Renovations",
  },
  {
    locationSlug: "gold-coast",
    serviceSlug: "knockdown-rebuild",
    locationName: "Gold Coast",
    serviceName: "Knockdown Rebuild",
    region: "Gold Coast",
    metaTitle: "Knockdown Rebuild Gold Coast | Design Homes",
    metaDescription:
      "Knockdown rebuild builders on the Gold Coast. Demolition, asbestos removal, flood level checks and a fixed-price rebuild on your existing block.",
    keywords: [
      "knockdown rebuild Gold Coast",
      "demolish and rebuild Gold Coast",
      "rebuild Gold Coast",
      "knockdown rebuild builders Gold Coast",
      "demolition Gold Coast",
      "rebuild cost Gold Coast",
    ],
    heroTitle: "Knockdown Rebuild on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "Keep the location and replace the house — demolition, approvals and a fixed-price rebuild handled end to end, with flood levels confirmed before design.",
    heroImage: "/assets/images/stock/construction-frame-new.jpg",
    intro: [
      "Gold Coast land near the water, the beach or an established school catchment is worth considerably more than the house sitting on it. For many owners the sensible move is to keep the land and replace the building, rather than pay a premium to buy the same location again with someone else's floor plan.",
      "The Gold Coast adds two constraints that inland rebuilds do not have: flood and storm tide levels that set your minimum floor height, and coastal exposure that changes the specification throughout.",
    ],
    sections: [
      {
        heading: "Confirm the floor level before anything else",
        body: [
          "Where a flood or storm tide overlay applies, the planning scheme sets a minimum level for habitable floors. On a rebuild this is frequently higher than the level the existing house sits at, because the mapping and the requirements have changed since it was built.",
          "That number determines the slab height, the entry sequence, the driveway grade and sometimes whether a single-storey design is viable. Designing before confirming it means redrawing, not adjusting.",
          "The council property report shows which overlays apply. It is a free search and it should be the first step in any Gold Coast rebuild.",
        ],
      },
      {
        heading: "What demolition involves here",
        body: [
          "Service disconnections for power, water, sewer and gas have to be arranged and certified. Asbestos is likely in anything built before the late 1980s and requires licensed removal and disposal with documentation.",
          "On canal and waterfront blocks there is an extra item: the revetment wall. Its condition should be assessed before you commit, because replacing one is a serious cost and demolition works nearby can affect it.",
          "Protected vegetation adds an approval layer, and on tighter beachside blocks, access for demolition machinery and skips can drive the cost as much as the building does.",
        ],
      },
      {
        heading: "Rebuilding to coastal specification",
        body: [
          "Salt-laden air drives corrosion, and proximity to the water changes what is required of fixings, roof sheeting, balustrades, window hardware and structural connections. Under-specifying this does not fail immediately — it fails in five years, everywhere at once.",
          "Low-lying and estuarine land across the Gold Coast frequently sits over acid sulfate soils, which affects how the site can be excavated and what management is required. The soil investigation needs to happen before earthworks are designed.",
          "Wind rating also applies. The exposure of the site determines the structural requirements, and a beachfront block is not rated the same as one several streets back.",
        ],
      },
      {
        heading: "Rebuild or renovate on the Gold Coast",
        body: [
          "Where the existing house sits below the current required floor level, renovation becomes considerably less attractive — you are investing in a structure that does not meet the standard the replacement would.",
          "Where the structure is sound and the level is compliant, renovation may well be the better project, and we will say so.",
          "The other factor is the specification. A 1970s or 1980s Gold Coast house near the water frequently has corrosion damage through fixings and frames that is not visible until you open it up. That discovery mid-renovation is what turns a renovation budget into a rebuild budget without the rebuild benefits.",
        ],
      },
    ],
    highlights: [
      {
        title: "Floor level confirmed first",
        body: "Flood and storm tide levels established before design, because they reshape the whole house.",
      },
      {
        title: "Revetment wall assessed",
        body: "Canal-front wall condition checked before you commit — replacement is a serious cost.",
      },
      {
        title: "Coastal specification",
        body: "Corrosion protection rated for actual exposure, not treated as an optional upgrade.",
      },
      {
        title: "Demolition under one contract",
        body: "Disconnections, licensed asbestos removal and approvals handled with the rebuild.",
      },
    ],
    suburbs: [
      "Palm Beach & Elanora",
      "Burleigh Heads & Miami",
      "Mermaid Waters & Broadbeach Waters",
      "Southport & Labrador",
      "Currumbin & Tugun",
      "Bilinga & Coolangatta",
      "Runaway Bay & Paradise Point",
      "Mudgeeraba & Reedy Creek",
      "Nerang & Carrara",
    ],
    faqs: [
      {
        question: "Will my new house have to sit higher than the old one?",
        answer:
          "Often yes. Flood and storm tide mapping and the required minimum habitable floor levels have changed since much of the Gold Coast's older housing was built. We confirm the applicable level from the council property report before design.",
      },
      {
        question: "How long does a Gold Coast knockdown rebuild take?",
        answer:
          "Allow roughly two to four months for demolition approval and the demolition itself, plus design and building approval, then nine to fourteen months of construction. Asbestos removal and service disconnections are the usual front-end variables.",
      },
      {
        question: "Do I need to worry about the revetment wall?",
        answer:
          "On a canal or waterfront block, yes. The wall is a structural asset with its own condition and repair liability, and replacing one is expensive. It should be assessed before you commit to the project.",
      },
      {
        question: "What is acid sulfate soil and does it affect me?",
        answer:
          "It is soil containing iron sulfides, common in low-lying coastal and estuarine land. Disturbing it without a management plan can cause environmental and compliance problems. The soil investigation identifies it before earthworks are designed.",
      },
      {
        question: "Do you handle the demolition?",
        answer:
          "Yes — service disconnections, licensed asbestos removal, vegetation approvals and the demolition itself, all under the same contract as the rebuild.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "sunshine-coast",
    serviceSlug: "duplex-townhouses",
    locationName: "Sunshine Coast",
    serviceName: "Duplex & Townhouse Builds",
    region: "Sunshine Coast",
    metaTitle: "Duplex Builders Sunshine Coast | Design Homes",
    metaDescription:
      "QBCC licensed duplex and townhouse builders on the Sunshine Coast. Dual occupancy feasibility, planning scheme approvals and fixed-price builds.",
    keywords: [
      "duplex builders Sunshine Coast",
      "dual occupancy Sunshine Coast",
      "townhouse builders Sunshine Coast",
      "duplex Caloundra",
      "duplex Maroochydore",
      "investment builders Sunshine Coast",
    ],
    heroTitle: "Duplex & Townhouse Builders on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "Dual occupancy across the Sunshine Coast — feasibility checked against the planning scheme and the site before design, then a fixed-price build.",
    heroImage: "/assets/images/stock/duplex-modern-dual.jpg",
    intro: [
      "Sunshine Coast dual occupancy is driven by a different market to the Brisbane and Logan corridors. Demand here is shaped by lifestyle migration, an ageing demographic looking to downsize without leaving the region, and a rental market with strong seasonal characteristics.",
      "That changes what is worth building. A duplex designed purely for yield in a growth corridor is not necessarily the right product on the Sunshine Coast, where owner-occupier downsizers often represent the better exit.",
    ],
    sections: [
      {
        heading: "Feasibility under the planning scheme",
        body: [
          "Whether a Sunshine Coast site supports dual occupancy depends on the zone and the provisions applying to it — minimum lot size, frontage, site cover, setbacks, private open space and car parking. As everywhere, frontage rules out more sites than area does.",
          "The region carries overlays that inland areas do not. Bushfire hazard applies through the hinterland and bushland fringes, and where it does, a BAL assessment under AS 3959 sets construction requirements for both dwellings. Coastal and low-lying land carries flood mapping that sets minimum habitable floor levels.",
          "Note also that Noosa Shire is a separate local government area with its own planning scheme. If your site is in Noosa, different provisions apply and the assessment goes to a different council.",
        ],
      },
      {
        heading: "Designing for downsizers, not just tenants",
        body: [
          "The strongest Sunshine Coast dual occupancy product often targets owner-occupier downsizers rather than investors. That means single-level living where the site allows it, wider doorways and level thresholds, a genuine second bedroom rather than a study, and outdoor space that is usable and private.",
          "Storage matters disproportionately to this buyer. Someone moving from a four-bedroom family home to a duplex needs somewhere for the things they are keeping, and a plan without real storage loses that sale.",
          "Acoustic separation between dwellings is non-negotiable in this market. Downsizers who have owned a detached house their whole lives notice it immediately, and it cannot be fixed after the walls close.",
        ],
      },
      {
        heading: "Site conditions across the region",
        body: [
          "Coastal sites at Caloundra, Maroochydore, Mooloolaba and Coolum bring salt exposure, which changes the corrosion specification for fixings, hardware and roof sheeting. Low-lying land carries flood levels that apply to both dwellings.",
          "Hinterland and bushland-fringe sites at Buderim, Palmwoods, Nambour and further inland bring slope, bushfire rating and sometimes access constraints for heavy deliveries.",
          "Soil classification under AS 2870 varies widely across the region and determines the footing system for both dwellings. It should be established by test rather than assumed from a neighbouring project.",
        ],
      },
      {
        heading: "Running the build",
        body: [
          "Fixed-price contract, complete drawings, documented selections schedule and a defined stage program so progress claims line up with your lender's drawdown schedule.",
          "If you intend to sell the halves separately, say so before design. The title path affects the survey, the services layout and sometimes the structure, and adding it later is expensive.",
          "Check your builder's QBCC licence class covers the value and type of work before signing. It is a two-minute search and the cheapest due diligence available.",
        ],
      },
    ],
    highlights: [
      {
        title: "Right council confirmed",
        body: "Sunshine Coast or Noosa Shire — different schemes, different provisions, checked first.",
      },
      {
        title: "Built for downsizers",
        body: "Single-level living, real storage and acoustic separation for the owner-occupier exit.",
      },
      {
        title: "Bushfire and flood assessed",
        body: "BAL rating and minimum floor levels established for both dwellings before design.",
      },
      {
        title: "Lender-aligned staging",
        body: "Documented progress stages so drawdowns and certificates stay on schedule.",
      },
    ],
    suburbs: [
      "Caloundra & Currimundi",
      "Maroochydore & Kuluin",
      "Buderim & Mountain Creek",
      "Mooloolaba & Buddina",
      "Coolum Beach & Peregian Springs",
      "Nambour & Woombye",
      "Palmwoods & Chevallum",
      "Sippy Downs",
      "Beerwah & Landsborough",
    ],
    faqs: [
      {
        question: "Is dual occupancy allowed on my Sunshine Coast block?",
        answer:
          "It depends on the zone and the provisions applying to your site. Minimum lot size, frontage, site cover and parking all interact, and frontage rules out more sites than area does. Send the address and we will check the property report.",
      },
      {
        question: "Does my site fall under Sunshine Coast Council or Noosa?",
        answer:
          "Noosa Shire is a separate local government area with its own planning scheme. If your block is in Noosa, different provisions apply and a different council assesses it. We confirm which applies before anything else.",
      },
      {
        question: "Should I build for tenants or downsizers?",
        answer:
          "On the Sunshine Coast, owner-occupier downsizers frequently represent the better exit. That changes the design toward single-level living, genuine storage and strong acoustic separation. Decide before design, because it affects the whole plan.",
      },
      {
        question: "Will bushfire requirements apply?",
        answer:
          "On hinterland and bushland-fringe sites, often yes. A BAL assessment under AS 3959 sets construction requirements for glazing, decks, eaves and cladding across both dwellings, and a high rating adds substantial cost. We establish it early.",
      },
      {
        question: "How long does a Sunshine Coast duplex take?",
        answer:
          "Ten to fourteen months of construction is typical, with design and approvals ahead of that. Bushfire assessment, impact assessable approvals and wet weather are the usual causes of extension.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "logan",
    serviceSlug: "new-home-builds",
    locationName: "Logan",
    serviceName: "New Home Builds",
    region: "Logan & Redlands",
    metaTitle: "New Home Builders Logan | Design Homes",
    metaDescription:
      "QBCC licensed new home builders in Logan. Fixed-price contracts, estate covenant checks and honest site assessment across Logan's growth suburbs.",
    keywords: [
      "new home builders Logan",
      "home builders Logan",
      "house builders Logan",
      "new build Logan",
      "builders Springwood Marsden",
      "home builders Jimboomba",
    ],
    heroTitle: "New Home Builders in",
    heroHighlight: "Logan",
    heroDescription:
      "New homes across Logan on fixed-price contracts — with soil, fill, overlays and estate covenants checked before you receive a price.",
    heroImage: "/assets/images/stock/home-single-modern.jpg",
    intro: [
      "Logan offers what much of South East Queensland no longer does: land at a price that leaves room in the budget for the house. That is why so much new housing has gone up here, and why so much of it looks the same.",
      "We build new homes across Logan for people who would rather spend the saving on a better house than on a bigger one. Fixed-price contracts, complete drawings, and a builder who runs his own sites.",
    ],
    sections: [
      {
        heading: "Fill is the local issue to check",
        body: [
          "Parts of Logan were subdivided and filled at a time when fill placement was not always engineered or documented. Building on uncontrolled fill means either removing it or designing a footing system that spans it, and both cost money.",
          "A geotechnical investigation identifies it, along with the site classification under AS 2870 that determines the footing system. Reactive clay is also present across parts of the area.",
          "This is the check most worth doing before purchase. A block that looks identical to its neighbour can carry a very different footing cost.",
        ],
      },
      {
        heading: "Estates, covenants and established blocks",
        body: [
          "Much of Logan's new housing is in estates with design covenants sitting on top of council requirements — facade treatment, roof pitch, materials, minimum floor area, driveway finish and landscaping deadlines. These are contractual obligations to the developer and they are enforced.",
          "We review the covenant before council lodgement, because a design that passes council can still be rejected by the estate.",
          "On established blocks in the older suburbs the situation reverses: no covenant, but real site conditions, possible demolition, and services that may need upgrading. Those blocks generally reward a custom approach.",
        ],
      },
      {
        heading: "Overlays across the Logan area",
        body: [
          "Flood mapping applies along the Logan and Albert Rivers and their tributaries, and overland flow paths affect blocks away from obvious watercourses. Where flood overlays apply they set minimum habitable floor levels.",
          "Bushfire hazard overlays apply through the more rural western and southern parts of the area, including around Jimboomba and Park Ridge, triggering a BAL assessment under AS 3959.",
          "Vegetation protection applies in parts of the area and can restrict clearing. All of it is visible on the council property report before you spend anything.",
        ],
      },
      {
        heading: "Spending the saving well",
        body: [
          "The advantage of building in Logan is that the land cost leaves room in the budget. The mistake is spending that room on floor area alone.",
          "Ceiling height, window size and placement, insulation, natural light and genuine storage do more for how a house feels to live in than another two metres of hallway. So does orientation, which costs nothing at design stage.",
          "New homes in Queensland now meet a raised energy performance standard under the National Construction Code. Meeting it through orientation and shading rather than equipment keeps running costs down for the life of the house — which matters more in a hotter western suburb than a coastal one.",
        ],
      },
    ],
    highlights: [
      {
        title: "Fill and geotech checked",
        body: "Uncontrolled fill from earlier subdivision identified before footings are designed.",
      },
      {
        title: "Covenant reviewed first",
        body: "Estate design guidelines satisfied before council lodgement, not after approval.",
      },
      {
        title: "Flood and bushfire mapped",
        body: "Logan and Albert River overlays and western BAL ratings confirmed up front.",
      },
      {
        title: "Saving spent on quality",
        body: "Ceiling height, light, insulation and storage rather than another two metres of hallway.",
      },
    ],
    suburbs: [
      "Springwood & Daisy Hill",
      "Marsden & Waterford West",
      "Browns Plains & Regents Park",
      "Jimboomba & Park Ridge",
      "Beenleigh & Eagleby",
      "Loganholme & Shailer Park",
      "Rochedale South & Underwood",
      "Crestmead & Berrinba",
      "Cornubia & Carbrook",
    ],
    faqs: [
      {
        question: "What does it cost to build a new home in Logan?",
        answer:
          "Land is generally cheaper than comparable Brisbane sites, which leaves more of the budget for the house. Build cost still varies with soil classification, fill, required flood level, slope and access, so we check the site before quoting.",
      },
      {
        question: "What is uncontrolled fill and why does it matter?",
        answer:
          "Some Logan blocks were filled during earlier subdivision without engineering control or documentation. Building on it requires either removal or a footing system designed to span it. A geotechnical investigation identifies it before design.",
      },
      {
        question: "Do you build in estates with design covenants?",
        answer:
          "Yes. We review the covenant before lodging with council so facade, materials and floor area requirements are satisfied up front rather than causing a redesign after approval.",
      },
      {
        question: "Are there bushfire requirements in Logan?",
        answer:
          "In the more rural western and southern parts, including around Jimboomba and Park Ridge, bushfire hazard overlays apply and trigger a BAL assessment. That rating sets construction requirements and can add meaningful cost.",
      },
      {
        question: "How long does a new home take to build in Logan?",
        answer:
          "Nine to fourteen months of construction is typical, with design and approvals ahead of that. Service connections, wet weather and delayed selections are the usual causes of variance.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "ipswich",
    serviceSlug: "new-home-builds",
    locationName: "Ipswich",
    serviceName: "New Home Builds",
    region: "Ipswich & West Moreton",
    metaTitle: "New Home Builders Ipswich | Design Homes",
    metaDescription:
      "QBCC licensed new home builders in Ipswich. Ripley Valley and Springfield builds, flood and soil checks, estate covenants and fixed-price contracts.",
    keywords: [
      "new home builders Ipswich",
      "home builders Ipswich",
      "house builders Ipswich",
      "builders Ripley Valley",
      "builders Springfield Lakes",
      "new build Ipswich",
    ],
    heroTitle: "New Home Builders in",
    heroHighlight: "Ipswich",
    heroDescription:
      "New homes across Ipswich and the western corridor — with the right planning authority identified, the site checked, and a fixed-price contract behind it.",
    heroImage: "/assets/images/stock/home-stucco-twostory.jpg",
    intro: [
      "Ipswich has been among the fastest-growing local government areas in South East Queensland, and the western corridor through Ripley Valley and Springfield has taken much of that growth. Land remains among the most affordable in the region.",
      "There is a planning quirk here that catches people out, and it is worth knowing before you buy: not every part of the area is assessed by the city council.",
    ],
    sections: [
      {
        heading: "Which authority assesses your block",
        body: [
          "Most Ipswich sites are assessed under the Ipswich planning scheme by the city council. The Ripley Valley, however, is a Priority Development Area, assessed under a development scheme administered by Economic Development Queensland rather than the council.",
          "The requirements, the process and the timeframes differ. Assuming council rules apply to a Ripley Valley block — or the reverse — produces a design that has to be reworked and a program that slips.",
          "This is the first thing we check on any Ipswich site, before zone, before frontage, before anything else. It determines every step that follows.",
        ],
      },
      {
        heading: "Flood mapping across the area",
        body: [
          "Ipswich has a long and well-documented flood history, and flood overlays associated with the Bremer River and its tributaries apply across parts of the area. Where they apply, a minimum habitable floor level is set.",
          "That level determines slab height, driveway grade, entry sequence and sometimes whether a single-storey design works at all. It also affects insurance and how the property is assessed at resale.",
          "It is visible on the council property report, it costs nothing to check, and it should be confirmed before design rather than during it.",
        ],
      },
      {
        heading: "Soil, and what else to check",
        body: [
          "Reactive clay is common through the Ipswich area, and the site classification under AS 2870 determines the footing system. An engineered footing costs substantially more than a conventional slab, and the difference is a function of the ground rather than the builder.",
          "In some parts of the broader area, historical mining activity means additional investigation is warranted. Where that applies it is identified through the property searches, which is another reason to do them before purchase.",
          "In older Ipswich suburbs, service capacity and alignment need checking early. Ipswich also has its own character housing stock and heritage areas, so if you are buying an older home with demolition in mind, confirm what is permitted first.",
        ],
      },
      {
        heading: "Building well on an affordable block",
        body: [
          "The advantage of Ipswich land prices is that they leave room in the budget. The temptation is to spend it all on floor area, which is usually the wrong call.",
          "Ipswich summers are hotter than the coast, and the difference between a well-oriented, properly shaded, well-insulated house and a poorly oriented one is significant in both comfort and running cost.",
          "New Queensland homes meet a raised energy performance standard under the National Construction Code. Meeting it through orientation, eaves and insulation costs nothing extra at design stage and keeps paying afterwards.",
        ],
      },
    ],
    highlights: [
      {
        title: "Right authority identified",
        body: "Council scheme or Ripley Valley PDA — confirmed before design begins.",
      },
      {
        title: "Flood levels confirmed",
        body: "Bremer catchment overlays and minimum floor levels established before drawings.",
      },
      {
        title: "Soil classified by test",
        body: "Footing system based on an actual site classification, not a neighbouring assumption.",
      },
      {
        title: "Built for a hot inland summer",
        body: "Orientation, eaves and insulation doing the work instead of the air conditioner.",
      },
    ],
    suburbs: [
      "Ripley & South Ripley",
      "Springfield & Springfield Lakes",
      "Redbank Plains & Bellbird Park",
      "Brassall & North Ipswich",
      "Booval & Bundamba",
      "Yamanto & Raceview",
      "Karalee & Barellan Point",
      "Goodna & Gailes",
      "Augustine Heights & Brookwater",
    ],
    faqs: [
      {
        question: "Who assesses my building application in Ipswich?",
        answer:
          "Most of the area is assessed by Ipswich City Council under the city planning scheme, but the Ripley Valley is a Priority Development Area assessed under a development scheme administered by Economic Development Queensland. The process and requirements differ, so we confirm which applies first.",
      },
      {
        question: "Is flooding a concern in Ipswich?",
        answer:
          "Parts of the area carry flood overlays associated with the Bremer River and its tributaries. Where they apply, a minimum habitable floor level is set, which affects slab height, driveway grade and sometimes the whole design. We confirm it before drawing anything.",
      },
      {
        question: "What does it cost to build a new home in Ipswich?",
        answer:
          "Land is among the more affordable in South East Queensland, which leaves more budget for the house. Build cost varies with soil classification, required flood level, slope and access, so we check the site before quoting.",
      },
      {
        question: "Do you build in Ripley Valley and Springfield?",
        answer:
          "Yes. Ripley Valley projects follow the PDA process, which we handle as part of the project. Springfield and the surrounding estates generally carry design covenants, which we review before council lodgement.",
      },
      {
        question: "How long does a new home take in Ipswich?",
        answer:
          "Nine to fourteen months of construction is typical, with design and approvals ahead of that. PDA assessment timeframes, service connections and wet weather are the usual variables.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "moreton-bay",
    serviceSlug: "duplex-townhouses",
    locationName: "Moreton Bay",
    serviceName: "Duplex & Townhouse Builds",
    region: "Moreton Bay",
    metaTitle: "Duplex Builders Moreton Bay | Design Homes",
    metaDescription:
      "QBCC licensed duplex and townhouse builders across Moreton Bay. Dual occupancy feasibility, flood checks and fixed-price builds from Redcliffe to Caboolture.",
    keywords: [
      "duplex builders Moreton Bay",
      "dual occupancy Moreton Bay",
      "townhouse builders Moreton Bay",
      "duplex Caboolture",
      "duplex North Lakes",
      "investment builders Moreton Bay",
    ],
    heroTitle: "Duplex & Townhouse Builders across",
    heroHighlight: "Moreton Bay",
    heroDescription:
      "Dual occupancy from Redcliffe to Caboolture — feasibility checked against the scheme and the site, then a fixed-price build with predictable progress claims.",
    heroImage: "/assets/images/stock/townhouse-construction-new.jpg",
    intro: [
      "Moreton Bay has absorbed sustained population growth across two quite different markets: the established peninsula suburbs around Redcliffe, and the northern corridor through Narangba, Burpengary and Caboolture. Dual occupancy works in both, for different reasons.",
      "The peninsula offers older, smaller blocks close to the water with an owner-occupier resale market. The northern corridor offers larger, cheaper land with rental depth. The feasibility maths and the right design differ between them.",
    ],
    sections: [
      {
        heading: "Feasibility across two markets",
        body: [
          "Whether a site supports dual occupancy depends on the zone and the provisions applying to it — minimum lot size, frontage, site cover, setbacks, private open space and car parking. Frontage rules out more sites than area does.",
          "In the northern corridor, land cost relative to combined end value generally leaves the numbers workable, and the rental market has genuine depth driven by commuter access to Brisbane.",
          "On the peninsula, land is more expensive but the exit is stronger, because well-designed dual occupancy near the water attracts owner-occupier buyers rather than only investors. Owner-occupiers pay more.",
        ],
      },
      {
        heading: "Flood and coastal conditions",
        body: [
          "Low-lying land around the bay and through the Caboolture River catchment carries flood mapping, and where overlays apply, minimum habitable floor levels are set for both dwellings. That affects slab height, driveway grade and sometimes the structural approach.",
          "On the peninsula, coastal proximity means salt exposure. Fixings, hardware, roof sheeting and structural connections need corrosion protection appropriate to the distance from the water, specified at design stage rather than substituted on site.",
          "Soil classification under AS 2870 varies across the region and determines the footing system for both dwellings. It should be established by test.",
        ],
      },
      {
        heading: "Design decisions that pay",
        body: [
          "In the northern corridor, where a great deal of similar product has been built, the projects that lease fastest and resell best are the ones with what the others skipped — genuine storage, a usable third bedroom, proper acoustic separation, real private outdoor space, and a frontage that is not simply two garage doors.",
          "On the peninsula, targeting owner-occupier downsizers changes the brief: single-level living where the site allows, level thresholds, real storage, and a finish level that stands up to comparison with detached houses in the same street.",
          "Acoustic separation is the item worth spending on in both markets. It drives tenant retention and it is the first thing an owner-occupier notices.",
        ],
      },
      {
        heading: "Contracting and finance",
        body: [
          "Fixed-price contract, complete drawings, documented selections schedule and a defined stage program so progress claims align with your lender's drawdown schedule. Variations priced and approved in writing before work proceeds.",
          "If the halves are to be sold separately, the title path has to be planned from the start, because it affects the survey, the services layout and sometimes the structure.",
          "Check the QBCC register for your builder's licence class before signing. Two minutes, and it is the cheapest protection available.",
        ],
      },
    ],
    highlights: [
      {
        title: "Two markets, two designs",
        body: "Corridor rental product and peninsula downsizer product are not the same brief.",
      },
      {
        title: "Flood levels for both dwellings",
        body: "Bay and Caboolture River catchment overlays confirmed before design.",
      },
      {
        title: "Coastal corrosion specified",
        body: "Peninsula sites detailed for salt exposure at design stage, not on site.",
      },
      {
        title: "Lender-aligned staging",
        body: "Documented progress stages so drawdowns and certificates stay on schedule.",
      },
    ],
    suburbs: [
      "North Lakes & Mango Hill",
      "Narangba & Burpengary",
      "Caboolture & Morayfield",
      "Redcliffe & Margate",
      "Scarborough & Woody Point",
      "Petrie & Kallangur",
      "Strathpine & Bray Park",
      "Deception Bay & Rothwell",
      "Albany Creek & Eatons Hill",
    ],
    faqs: [
      {
        question: "Is dual occupancy allowed on my Moreton Bay block?",
        answer:
          "It depends on the zone and the provisions applying to your site — minimum lot size, frontage, site cover and parking all interact, and frontage rules out more sites than area does. Send the address and we will check the property report.",
      },
      {
        question: "Where does duplex development work best in Moreton Bay?",
        answer:
          "The northern corridor around Narangba, Burpengary and Caboolture offers cheaper land and rental depth. The Redcliffe peninsula costs more but attracts owner-occupier buyers at resale. Which suits you depends on whether you are holding or selling.",
      },
      {
        question: "Do flood levels affect a duplex here?",
        answer:
          "On low-lying land around the bay and through the Caboolture River catchment, yes. Minimum habitable floor levels apply to both dwellings and affect slab height, driveway grade and sometimes the structure.",
      },
      {
        question: "Can I sell the two dwellings separately?",
        answer:
          "Often yes, but the title path has to be planned from the start because it affects the survey, services layout and sometimes the structure. Tell us your intended exit before design.",
      },
      {
        question: "How long does a Moreton Bay duplex take?",
        answer:
          "Ten to fourteen months of construction is typical, with design and approvals ahead of that. Service upgrades, impact assessable approvals and wet weather are the usual causes of extension.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "redland",
    serviceSlug: "new-home-builds",
    locationName: "Redlands",
    serviceName: "New Home Builds",
    region: "Redland City",
    metaTitle: "New Home Builders Redlands | Design Homes",
    metaDescription:
      "QBCC licensed new home builders in Redland City. Koala and vegetation overlay checks, coastal specification and fixed-price contracts from Cleveland to Redland Bay.",
    keywords: [
      "new home builders Redlands",
      "home builders Redland City",
      "house builders Cleveland",
      "home builders Victoria Point",
      "builders Redland Bay",
      "new build Redlands",
    ],
    heroTitle: "New Home Builders in",
    heroHighlight: "Redlands",
    heroDescription:
      "New homes across Redland City — with vegetation and koala habitat overlays, coastal exposure and soil conditions checked before you receive a price.",
    heroImage: "/assets/images/stock/home-brick-contemporary.jpg",
    intro: [
      "Redland City is the bayside part of South East Queensland that has kept its trees, and that is both its appeal and its principal building constraint. Vegetation protection and koala habitat overlays apply across a number of suburbs, and they shape where a house can go on a block well before anyone talks about floor plans.",
      "We build new homes across Redland City on fixed-price contracts, with the overlay position established before design so the building envelope is known rather than assumed.",
    ],
    sections: [
      {
        heading: "Vegetation and koala habitat overlays",
        body: [
          "Redland City applies vegetation protection and koala habitat overlays across parts of the local government area. Where they apply, clearing is restricted and the position of the building on the block may be constrained by what can and cannot be removed.",
          "This is not a minor consideration. On a treed block it can determine the building envelope, the driveway alignment, and sometimes whether the house you have in mind fits at all.",
          "It is visible on the council property report. We check it before design, and on a block you are considering buying, it is worth checking before you sign.",
        ],
      },
      {
        heading: "Bayside conditions",
        body: [
          "Proximity to Moreton Bay means salt exposure, and the corrosion specification for fixings, hardware, roof sheeting and structural connections needs to reflect the actual distance from the water. This is a design-stage decision, not a site substitution.",
          "Low-lying land around the bay carries flood and storm tide mapping, and where overlays apply a minimum habitable floor level is set. That determines slab height, driveway grade and entry sequence.",
          "Wind exposure on more open bayside sites also affects the structural requirements, and it varies more across Redland City than people expect.",
        ],
      },
      {
        heading: "Soil and site conditions",
        body: [
          "Site classification under AS 2870 determines the footing system, and conditions vary across the area. Reactive clay is present in parts, and an engineered footing system costs substantially more than a conventional slab.",
          "Slope is a factor in the more elevated suburbs, bringing retaining, drainage design and cut-and-fill balance into the budget.",
          "Access matters on treed and sloping blocks, because vegetation restrictions can limit how machinery reaches the work. We assess this before quoting rather than discovering it at slab stage.",
        ],
      },
      {
        heading: "Building for the bayside climate",
        body: [
          "Bayside Redlands gets genuine sea breeze, and a house designed to use it needs far less mechanical cooling. Openings on opposite sides of living areas, a plan that does not block the path between them, and shading on the western side do most of the work.",
          "New homes in Queensland meet a raised energy performance standard under the National Construction Code, and reaching it through orientation and shading is considerably cheaper than reaching it through equipment.",
          "On a treed Redlands block there is a further advantage: retained mature vegetation provides real summer shading, which is worth designing around rather than working against.",
        ],
      },
    ],
    highlights: [
      {
        title: "Overlays checked first",
        body: "Vegetation and koala habitat constraints establish the building envelope before design.",
      },
      {
        title: "Bayside specification",
        body: "Corrosion protection and wind rating matched to actual exposure across the city.",
      },
      {
        title: "Soil classified by test",
        body: "Footing system based on a real site classification, because conditions vary locally.",
      },
      {
        title: "Designed for sea breeze",
        body: "Cross-ventilation and retained shade doing the work instead of the air conditioner.",
      },
    ],
    suburbs: [
      "Cleveland & Ormiston",
      "Victoria Point & Redland Bay",
      "Capalaba & Alexandra Hills",
      "Thornlands & Wellington Point",
      "Birkdale & Wynnum West",
      "Sheldon & Mount Cotton",
      "Thorneside & Lota",
      "Coochiemudlo & bay islands",
      "Mount Cotton & Carbrook",
    ],
    faqs: [
      {
        question: "Will vegetation overlays stop me building?",
        answer:
          "Rarely stop, frequently constrain. Redland City applies vegetation protection and koala habitat overlays across parts of the area, which restrict clearing and can determine where the building sits on the block. We check the council property report before design.",
      },
      {
        question: "What does it cost to build a new home in Redlands?",
        answer:
          "Site conditions drive most of the variance — soil classification, required flood level, slope, vegetation constraints and access. We complete the checks before quoting so the number reflects your block.",
      },
      {
        question: "Do bayside sites need special construction?",
        answer:
          "Yes. Proximity to Moreton Bay means corrosion protection specified for salt exposure, and more open sites carry a higher wind rating. Both are design-stage decisions rather than site substitutions.",
      },
      {
        question: "Which Redlands suburbs do you build in?",
        answer:
          "Across Redland City, including Cleveland, Ormiston, Victoria Point, Redland Bay, Capalaba, Alexandra Hills, Thornlands, Wellington Point, Birkdale, Sheldon and Mount Cotton.",
      },
      {
        question: "How long does a new home take to build?",
        answer:
          "Nine to fourteen months of construction is typical, with design and approvals ahead of that. Vegetation approvals, service connections and wet weather are the usual causes of variance.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },

  // -------------------------------------------------------- THIRD EXPANSION
  {
    locationSlug: "sunshine-coast",
    serviceSlug: "knockdown-rebuild",
    locationName: "Sunshine Coast",
    serviceName: "Knockdown Rebuild",
    region: "Sunshine Coast",
    metaTitle: "Knockdown Rebuild Sunshine Coast | Design Homes",
    metaDescription:
      "Knockdown rebuild builders on the Sunshine Coast. Demolition, asbestos removal, bushfire and flood checks, and a fixed-price rebuild on your existing block.",
    keywords: [
      "knockdown rebuild Sunshine Coast",
      "demolish and rebuild Sunshine Coast",
      "rebuild Caloundra",
      "rebuild Buderim",
      "knockdown rebuild builders Sunshine Coast",
      "demolition Sunshine Coast",
    ],
    heroTitle: "Knockdown Rebuild on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "Replace the house, keep the location — demolition, approvals and a fixed-price rebuild, with bushfire and flood conditions established before design.",
    heroImage: "/assets/images/stock/construction-frame-new.jpg",
    intro: [
      "A great deal of Sunshine Coast housing dates from the 1970s and 1980s, built when the region was a holiday destination rather than a place people lived year-round. Those houses sit on land that has since become very valuable, and many of them no longer suit how the block could be used.",
      "For owners already in a suburb they like, replacing the building is usually better value than buying the same location again with someone else's floor plan attached. The question is what the site now requires that it did not when the original house went up.",
    ],
    sections: [
      {
        heading: "The requirements have changed since the house was built",
        body: [
          "This is the central issue in a Sunshine Coast rebuild. Bushfire hazard mapping, flood mapping and energy efficiency requirements have all been introduced or tightened since much of the region's older housing was constructed.",
          "A house built in 1978 on a bushland-fringe block was built to no bushfire standard at all. The replacement will be assessed for a Bushfire Attack Level under AS 3959, and the resulting rating drives requirements for glazing, decks, screens, eaves and cladding.",
          "Similarly, a low-lying block may now carry a minimum habitable floor level that the existing house sits below. The replacement has to meet it, which changes the slab height, the driveway grade and sometimes the whole structural approach.",
          "None of this makes a rebuild a bad idea. It does mean the budget has to reflect current requirements rather than the cost of replacing what is there.",
        ],
      },
      {
        heading: "What demolition involves",
        body: [
          "Service disconnections for power, water, sewer and gas have to be arranged and certified before demolition starts. Asbestos is very likely in a house from this era — commonly in eaves, wet area sheeting and sometimes flooring — and requires licensed removal and disposal with documentation.",
          "Vegetation is a bigger factor here than in most regions. Protected trees may require approval to remove, and on bushland-fringe blocks the vegetation is also what drives the bushfire rating, so clearing decisions interact with construction requirements.",
          "Access varies enormously. A flat coastal block with a wide driveway is straightforward. A steep hinterland block with a long approach means machinery access has to be planned rather than assumed.",
        ],
      },
      {
        heading: "Rebuilding to suit the site properly",
        body: [
          "The advantage of a rebuild over the original house is that you can finally use the site as it deserves. Older Sunshine Coast houses frequently ignore their own orientation, put living areas on the wrong side, and waste the outlook entirely.",
          "North-facing living, deep eaves, protected western glazing and a plan that lets the sea breeze through will make the replacement dramatically more comfortable than what it replaced, at no extra construction cost.",
          "On coastal blocks, corrosion protection needs specifying for salt exposure throughout — fixings, hardware, roof sheeting, balustrades and structural connections. This is a specification decision at design stage, not a substitution on site.",
        ],
      },
      {
        heading: "Rebuild or renovate",
        body: [
          "Where the existing house sits below a current required flood level, renovation becomes much less attractive, because you would be investing in a structure that does not meet the standard the replacement would.",
          "Where the structure is sound, the level is compliant and the layout can be reworked without moving everything, renovation may well be the better project. We will say so.",
          "The common trap on 1970s and 1980s coastal housing is corrosion in fixings and frames that is invisible until you open the building up. That discovery mid-renovation is what turns a renovation budget into a rebuild budget without any of the rebuild benefits.",
        ],
      },
    ],
    highlights: [
      {
        title: "Current requirements priced",
        body: "Bushfire rating and flood level assessed against today's standards, not the old house's.",
      },
      {
        title: "Demolition under one contract",
        body: "Disconnections, licensed asbestos removal and vegetation approvals handled with the rebuild.",
      },
      {
        title: "Site finally used properly",
        body: "Orientation, breeze and outlook designed for, which most original houses here ignored.",
      },
      {
        title: "Coastal specification",
        body: "Corrosion protection rated for actual salt exposure across the whole build.",
      },
    ],
    suburbs: [
      "Caloundra & Currimundi",
      "Maroochydore & Alexandra Headland",
      "Buderim & Mountain Creek",
      "Mooloolaba & Buddina",
      "Coolum Beach & Marcoola",
      "Nambour & Woombye",
      "Palmwoods & Eudlo",
      "Sippy Downs",
      "Beerwah & Landsborough",
    ],
    faqs: [
      {
        question: "Will my rebuild have to meet bushfire requirements the old house did not?",
        answer:
          "Very likely, if a bushfire hazard overlay applies. The site is assessed for a Bushfire Attack Level under AS 3959 and that rating sets requirements for glazing, decks, screens, eaves and cladding. Older houses were built before these requirements existed.",
      },
      {
        question: "How long does a knockdown rebuild take here?",
        answer:
          "Allow roughly two to four months for demolition approval and demolition, plus design and building approval, then nine to fourteen months of construction. Bushfire assessment, asbestos removal and vegetation approvals are the usual front-end variables.",
      },
      {
        question: "Do I need approval to remove trees?",
        answer:
          "Often yes. Protected vegetation requires approval to remove, and on bushland-fringe blocks the vegetation also drives the bushfire rating, so clearing and construction requirements interact. We check both before design.",
      },
      {
        question: "Is rebuilding better than renovating a 1980s coastal house?",
        answer:
          "Frequently, because corrosion in fixings and framing on older coastal housing is often invisible until you open it up, and because flood and bushfire requirements have changed. Where the structure is genuinely sound, we will tell you renovating is the better project.",
      },
      {
        question: "Do you handle the demolition?",
        answer:
          "Yes — service disconnections, licensed asbestos removal, vegetation approvals and demolition, all under the same contract as the rebuild.",
      },
    ],
    parentServiceHref: "/services/new-home-builds",
    parentServiceName: "New Home Builds",
  },
  {
    locationSlug: "gold-coast",
    serviceSlug: "renovations",
    locationName: "Gold Coast",
    serviceName: "Home Renovations",
    region: "Gold Coast",
    metaTitle: "Home Renovations Gold Coast | Design Homes",
    metaDescription:
      "Renovation and extension builders on the Gold Coast. Structural renovations, coastal corrosion repair and fixed-price contracts. QBCC licensed.",
    keywords: [
      "home renovations Gold Coast",
      "renovation builders Gold Coast",
      "house extension Gold Coast",
      "home extension Gold Coast",
      "apartment renovation Gold Coast",
      "structural renovation Gold Coast",
    ],
    heroTitle: "Home Renovations on the",
    heroHighlight: "Gold Coast",
    heroDescription:
      "Extensions, structural renovations and full transformations across the Gold Coast — investigated before contract, so what is behind the walls does not become a variation.",
    heroImage: "/assets/images/stock/home-entry-detail.jpg",
    intro: [
      "Gold Coast renovation has one characteristic that inland work does not: a large share of the housing stock has spent decades in salt air, and what that does to a building is not visible from the outside.",
      "That makes investigation before contract more important here than almost anywhere. We open up and inspect before pricing rather than quoting optimistically and issuing variations once the walls are off.",
    ],
    sections: [
      {
        heading: "What salt air does over forty years",
        body: [
          "Corrosion is the defining issue in older Gold Coast housing. Fixings, structural connections, roof sheeting, balustrade fixings, window and door hardware and reinforcement in concrete all degrade at a rate that depends on distance from the water and how the original work was specified.",
          "Much of the region's 1970s and 1980s housing was built to a standard that did not anticipate this. Galvanised fixings that would last indefinitely inland can be substantially degraded within sight of the beach.",
          "The practical consequence for a renovation is that the scope frequently expands once the building is opened. A kitchen renovation becomes a structural repair when the wall behind it is opened and the framing connections have gone.",
          "We inspect for this specifically before quoting. It is the single most common cause of Gold Coast renovation budgets doubling.",
        ],
      },
      {
        heading: "Concrete, balconies and balustrades",
        body: [
          "Concrete cancer — where reinforcement corrodes, expands and spalls the surrounding concrete — is common in older coastal buildings, particularly on balconies and exposed slab edges.",
          "It is repairable, but the repair is specialised and the extent is rarely obvious until investigation. A balcony that looks tired may need structural remediation rather than a new tile finish.",
          "Balustrades are the related safety item. Fixings corrode where they penetrate the slab, and a balustrade that feels solid can be poorly attached. On any coastal renovation involving a balcony, this should be checked as a matter of course.",
        ],
      },
      {
        heading: "Extensions and structural work",
        body: [
          "Connecting new to old means matching floor levels, tying in roof structure and dealing with an existing wall that may not be load-bearing where you assumed. Where the wall is structural, the answer is an engineered beam with supports carried down to adequate footings, which sometimes means new footings inside a finished house.",
          "Where the extension increases the building footprint, setbacks, site cover and overlays apply as on a new build. On the Gold Coast that means checking flood and storm tide levels, because an addition generally has to meet the current required floor level even where the existing house does not.",
          "That last point catches people out regularly. A ground-level rear extension on a low-lying block may have to sit noticeably higher than the floor it connects to.",
        ],
      },
      {
        heading: "How we contract renovation work",
        body: [
          "Fixed price where the scope can genuinely be defined, with a clearly stated contingency for what is behind the walls. We report what we find before acting on it, and price it in writing before proceeding.",
          "A coastal renovation contract with no contingency at all is either carrying a hidden margin or set up to generate variations. A stated allowance is more honest and usually cheaper.",
          "This is work that rewards an owner-run builder. Decisions have to be made on site, quickly, by someone with the authority to make them.",
        ],
      },
    ],
    highlights: [
      {
        title: "Corrosion investigated first",
        body: "Fixings, connections and framing inspected before pricing, not discovered mid-job.",
      },
      {
        title: "Concrete and balcony checks",
        body: "Spalling and balustrade fixings assessed as standard on older coastal buildings.",
      },
      {
        title: "Extension floor levels confirmed",
        body: "New work generally has to meet current flood levels even where the old house does not.",
      },
      {
        title: "Honest contingency",
        body: "A stated allowance for hidden conditions rather than a variation trap.",
      },
    ],
    suburbs: [
      "Burleigh Heads & Miami",
      "Palm Beach & Currumbin",
      "Mermaid Beach & Broadbeach",
      "Southport & Labrador",
      "Main Beach & Surfers Paradise",
      "Robina & Varsity Lakes",
      "Runaway Bay & Paradise Point",
      "Nerang & Carrara",
      "Coolangatta & Tugun",
    ],
    faqs: [
      {
        question: "Why do Gold Coast renovations so often go over budget?",
        answer:
          "Corrosion. Decades of salt air degrade fixings, structural connections and reinforcement in ways that are invisible until the building is opened. A cosmetic renovation becomes a structural repair. We investigate for this specifically before quoting.",
      },
      {
        question: "What is concrete cancer and should I be worried?",
        answer:
          "It is where reinforcement inside concrete corrodes, expands and cracks the surrounding concrete. It is common on older coastal balconies and exposed slab edges. It is repairable but the repair is specialised, and the extent is rarely obvious without investigation.",
      },
      {
        question: "Will my extension have to sit higher than the existing house?",
        answer:
          "On a low-lying block, quite possibly. New work generally has to meet the current required minimum habitable floor level even where the existing house predates it. We confirm the level before design.",
      },
      {
        question: "Do I need approval for a renovation?",
        answer:
          "Structural work, extensions and anything changing the building footprint generally need building approval, and often development approval. We confirm what applies to your address before design.",
      },
      {
        question: "Can you renovate a unit or townhouse?",
        answer:
          "Yes, though body corporate approval is required for anything affecting common property or the building exterior, and that process should start early because it can take time.",
      },
    ],
    parentServiceHref: "/services/renovations",
    parentServiceName: "Renovations",
  },
  {
    locationSlug: "sunshine-coast",
    serviceSlug: "renovations",
    locationName: "Sunshine Coast",
    serviceName: "Home Renovations",
    region: "Sunshine Coast",
    metaTitle: "Home Renovations Sunshine Coast | Design Homes",
    metaDescription:
      "Renovation and extension builders on the Sunshine Coast. Structural renovations, extensions and full transformations on fixed-price contracts. QBCC licensed.",
    keywords: [
      "home renovations Sunshine Coast",
      "renovation builders Sunshine Coast",
      "house extension Sunshine Coast",
      "renovation Buderim",
      "renovation Caloundra",
      "home extension Maroochydore",
    ],
    heroTitle: "Home Renovations on the",
    heroHighlight: "Sunshine Coast",
    heroDescription:
      "Extensions and structural renovations from the coast to the hinterland — scoped properly before contract, with the conditions behind the walls investigated first.",
    heroImage: "/assets/images/stock/home-entry-detail.jpg",
    intro: [
      "Much of the Sunshine Coast's housing stock was built for a different purpose than it now serves. Holiday houses from the 1970s and 1980s are now permanent family homes, and the mismatch between how they were designed and how they are used is what most renovations here are trying to fix.",
      "That usually means opening up the plan, connecting living space to outdoors properly, and dealing with a building envelope that was never insulated or oriented with year-round living in mind.",
    ],
    sections: [
      {
        heading: "The holiday-house problem",
        body: [
          "Houses built as holiday accommodation were designed for short stays in good weather. They tend to have small windows in the wrong places, minimal or no insulation, poor cross-ventilation, and living areas that ignore the aspect entirely.",
          "The highest-value renovation moves are usually environmental rather than cosmetic: reorienting living space toward the north, adding proper eaves or shading, insulating the roof and walls, and creating a genuine indoor-outdoor connection.",
          "These changes do far more for how the house feels to live in than a new kitchen does, and they reduce running costs permanently. A kitchen in a hot, dark, poorly ventilated house is still in a hot, dark, poorly ventilated house.",
        ],
      },
      {
        heading: "What we usually find",
        body: [
          "Asbestos in anything built before the late 1980s, typically in eaves and wet area sheeting, requiring licensed removal with documentation. Termite damage in timber framing, particularly in the hinterland and anywhere with subfloor moisture.",
          "Previous unapproved work is common in this region — enclosed carports, added rooms, converted subfloor space — done without approval and often without engineering. Each instance has to be assessed and frequently corrected as part of the renovation.",
          "Undersized electrical switchboards with no capacity for modern loads, failing plumbing, and no insulation whatsoever round out the usual list.",
        ],
      },
      {
        heading: "Extensions, overlays and approvals",
        body: [
          "Where an extension increases the footprint, setbacks, site cover and overlays apply as they would on a new build. On the Sunshine Coast that most often means bushfire on bushland-fringe and hinterland blocks, and flood on low-lying coastal land.",
          "Where a bushfire hazard overlay applies, new work may need to meet requirements under AS 3959 that the existing house does not. That affects glazing, decks, screens, eaves and cladding on the addition.",
          "It is also worth confirming which council assesses your block — Noosa Shire is a separate local government area with its own planning scheme, and the provisions differ from Sunshine Coast Council's.",
        ],
      },
      {
        heading: "How we contract this work",
        body: [
          "Fixed price where the scope can genuinely be defined, with a clearly stated contingency for hidden conditions. We report what we find before acting on it and price it in writing before proceeding.",
          "Renovation is the least standardised work in residential construction. Nothing is square, dimensions vary across a single room, and the surprises are structural rather than cosmetic.",
          "That is why it suits a builder who is on site rather than running the job from a schedule. Harj runs our sites, so decisions come from someone who has seen the actual condition.",
        ],
      },
    ],
    highlights: [
      {
        title: "Environmental fixes first",
        body: "Orientation, shading, insulation and ventilation before cosmetic upgrades.",
      },
      {
        title: "Unapproved work assessed",
        body: "Enclosed carports and converted subfloors identified and corrected properly.",
      },
      {
        title: "Bushfire rules on new work",
        body: "Additions may need to meet AS 3959 requirements the existing house never did.",
      },
      {
        title: "Right council confirmed",
        body: "Sunshine Coast or Noosa Shire — different schemes, checked before design.",
      },
    ],
    suburbs: [
      "Buderim & Mountain Creek",
      "Caloundra & Currimundi",
      "Maroochydore & Alexandra Headland",
      "Mooloolaba & Buddina",
      "Coolum Beach & Peregian",
      "Nambour & Woombye",
      "Palmwoods & Eudlo",
      "Maleny & Montville",
      "Sippy Downs & Chevallum",
    ],
    faqs: [
      {
        question: "What is the highest-value renovation on an older coastal house?",
        answer:
          "Usually the environmental work rather than the cosmetic work — reorienting living space, adding shading and eaves, insulating properly, and creating a real indoor-outdoor connection. These change how the house feels year-round and reduce running costs permanently.",
      },
      {
        question: "Will you find asbestos?",
        answer:
          "In anything built before the late 1980s, very likely, commonly in eaves and wet area sheeting. It requires licensed removal and disposal with documentation, which we establish and price before demolition begins.",
      },
      {
        question: "What if previous work was done without approval?",
        answer:
          "It is common here — enclosed carports, added rooms, converted subfloor space. Each instance has to be assessed and frequently corrected or approved retrospectively as part of the renovation. We identify it during investigation, before contract.",
      },
      {
        question: "Do bushfire requirements apply to an extension?",
        answer:
          "Where a bushfire hazard overlay applies, new work may need to meet AS 3959 requirements the existing house never did. That affects glazing, decks, screens, eaves and cladding on the addition. We check before design.",
      },
      {
        question: "Is my block assessed by Sunshine Coast Council or Noosa?",
        answer:
          "Noosa Shire is a separate local government area with its own planning scheme and different provisions. We confirm which applies to your address before anything else.",
      },
    ],
    parentServiceHref: "/services/renovations",
    parentServiceName: "Renovations",
  },
  {
    locationSlug: "logan",
    serviceSlug: "custom-builds",
    locationName: "Logan",
    serviceName: "Custom Home Builds",
    region: "Logan & Redlands",
    metaTitle: "Custom Home Builders Logan | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders in Logan. Acreage, sloping and larger-lot builds designed around the site, on fixed-price contracts.",
    keywords: [
      "custom home builders Logan",
      "custom builder Logan",
      "acreage builders Logan",
      "custom home Jimboomba",
      "sloping block builders Logan",
      "architectural builders Logan",
    ],
    heroTitle: "Custom Home Builders in",
    heroHighlight: "Logan",
    heroDescription:
      "One-off homes on Logan's larger and rural-residential blocks — where the land finally leaves enough budget to build the house properly.",
    heroImage: "/assets/images/stock/home-luxury-landscape.jpg",
    intro: [
      "Logan is where a custom build becomes affordable for people who could not justify one closer to Brisbane. Land here costs less per square metre than the inner and middle ring, and rural-residential blocks around Jimboomba, Park Ridge, Cedar Grove and Munruben offer genuine acreage within commuting distance.",
      "That changes the arithmetic. Money that would have gone entirely into land in Brisbane can go into the building instead, which is the situation where a one-off home makes obvious sense.",
    ],
    sections: [
      {
        heading: "Larger blocks change what is worth designing",
        body: [
          "On a 400-square-metre suburban lot, the design problem is fitting a house onto the block. On a 4,000-square-metre rural-residential block, the problem is choosing where on the site the house should go, and that is a much better problem.",
          "Siting decisions on a larger block have real consequences: aspect and northern sun, prevailing breeze, the outlook, distance from the road and its noise, the driveway length, and where the wastewater land application area can sit.",
          "This is where a custom approach earns its money. A standard plan dropped anywhere on a large block wastes most of what you paid for.",
        ],
      },
      {
        heading: "Rural-residential services",
        body: [
          "Many Logan acreage blocks sit outside reticulated water and sewer. That means rainwater tanks sized to the roof catchment, household demand and any firefighting requirement, plus an on-site wastewater treatment system designed for the soil and the available land.",
          "The wastewater land application area has to be genuinely available — clear of the building, driveway, tanks and any protected vegetation. On a constrained block it can influence where the house goes, which is another reason to establish it before design.",
          "Power connection distance matters too. Where the connection point is far from the building envelope, extending supply is a real cost and a standalone system is sometimes the better answer.",
        ],
      },
      {
        heading: "Site conditions across the area",
        body: [
          "Soil classification under AS 2870 determines the footing system, and reactive clay is present across parts of Logan. Uncontrolled fill from earlier subdivision is a specific risk in some suburbs and requires either removal or a footing system designed to span it.",
          "Bushfire hazard overlays apply through the more rural western and southern parts of the area, triggering a BAL assessment under AS 3959 with construction requirements attached. On acreage these can also extend to access width and gradient, and a dedicated firefighting water supply.",
          "Flood mapping applies along the Logan and Albert Rivers and their tributaries. Where it applies, minimum habitable floor levels are set.",
        ],
      },
      {
        heading: "Designing for an inland climate",
        body: [
          "Logan runs hotter than the coast. It is further from the moderating sea breeze and the summer difference is noticeable, which makes orientation, shading and insulation more valuable here, not less.",
          "North-facing living areas, deep eaves, protected western glazing and cross-ventilation through the plan do the work that an air conditioner otherwise does continuously.",
          "New homes in Queensland meet a raised energy performance standard under the National Construction Code. Meeting it through design costs nothing at the drawing stage and keeps paying every summer afterwards — which matters more on a hot western block than almost anywhere.",
        ],
      },
    ],
    highlights: [
      {
        title: "Siting as a design decision",
        body: "On acreage, where the house sits matters more than the floor plan does.",
      },
      {
        title: "Rural services designed",
        body: "Rainwater, on-site wastewater, power and driveway access costed before construction.",
      },
      {
        title: "Fill and bushfire checked",
        body: "Uncontrolled fill and BAL rating established before footings and design.",
      },
      {
        title: "Built for inland heat",
        body: "Orientation, eaves and insulation carrying the load instead of the air conditioner.",
      },
    ],
    suburbs: [
      "Jimboomba & Cedar Grove",
      "Park Ridge & Munruben",
      "Chambers Flat & Logan Reserve",
      "Greenbank & New Beith",
      "Cornubia & Carbrook",
      "Daisy Hill & Shailer Park",
      "Springwood & Rochedale South",
      "Veresdale & Undullah",
      "Stockleigh & Flagstone",
    ],
    faqs: [
      {
        question: "Do you build on acreage in Logan?",
        answer:
          "Yes. Acreage builds need rainwater supply, an on-site wastewater treatment system, driveway access suitable for heavy deliveries and sometimes a power supply extension. We design and cost all of it before construction rather than treating it as extras.",
      },
      {
        question: "Why build custom in Logan rather than use a volume builder?",
        answer:
          "On a flat suburban lot with a standard plan, a volume builder will often beat us on price and we will say so. On a larger or rural-residential block, where siting, aspect, slope and services all matter, a standard plan wastes most of what the land offers.",
      },
      {
        question: "Are there bushfire requirements?",
        answer:
          "In the more rural western and southern parts, yes. A BAL assessment under AS 3959 sets construction requirements, and on acreage it can also affect access width and gradient and require a dedicated firefighting water supply.",
      },
      {
        question: "What is uncontrolled fill?",
        answer:
          "Fill placed during earlier subdivision without engineering control or documentation. Building on it requires either removal or a footing system designed to span it. A geotechnical investigation identifies it before design.",
      },
      {
        question: "How much does a custom home cost in Logan?",
        answer:
          "Land is generally cheaper than comparable Brisbane sites, which leaves more budget for the house. Build cost varies with soil classification, fill, bushfire rating, slope, services and access, so we check the site before quoting.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "ipswich",
    serviceSlug: "custom-builds",
    locationName: "Ipswich",
    serviceName: "Custom Home Builds",
    region: "Ipswich & West Moreton",
    metaTitle: "Custom Home Builders Ipswich | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders in Ipswich. Acreage and larger-lot builds, character housing, flood-aware design and fixed-price contracts.",
    keywords: [
      "custom home builders Ipswich",
      "custom builder Ipswich",
      "acreage builders Ipswich",
      "custom home Karalee",
      "builders Brookwater",
      "architectural builders Ipswich",
    ],
    heroTitle: "Custom Home Builders in",
    heroHighlight: "Ipswich",
    heroDescription:
      "One-off homes across Ipswich and West Moreton — where affordable land leaves room in the budget to build something designed for the site rather than the catalogue.",
    heroImage: "/assets/images/stock/home-luxury-twilight.jpg",
    intro: [
      "Ipswich land prices are among the most accessible in South East Queensland, and that creates an unusual opportunity: a custom home here can cost less in total than a standard house-and-land package closer to Brisbane.",
      "It also has genuine character housing stock in the older parts of the city, and rural-residential land at Karalee, Barellan Point, Chuwar and further west that suits acreage building within commuting distance.",
    ],
    sections: [
      {
        heading: "Confirm which authority assesses your block",
        body: [
          "This is the first check on any Ipswich site. Most of the area is assessed under the Ipswich planning scheme by the city council, but the Ripley Valley is a Priority Development Area assessed under a development scheme administered by Economic Development Queensland.",
          "The requirements, the process and the timeframes differ. Assuming the wrong one produces a design that has to be reworked and a program that slips.",
          "Getting this right at the start costs nothing. Getting it wrong after paying for design is an expensive way to learn how Queensland planning works.",
        ],
      },
      {
        heading: "Flood is the design constraint here",
        body: [
          "Ipswich has a long and well-documented flood history, and flood overlays associated with the Bremer River and its tributaries apply across parts of the area. Where they apply, a minimum habitable floor level is set.",
          "On a custom build that level is a design input rather than an obstacle. An elevated house with non-habitable uses at ground level, living above, and a proper relationship to the driveway can be a considerably better house than a slab-on-ground alternative would have been.",
          "It also affects insurance and how buyers assess the property later, so building comfortably above the required level rather than exactly at it is often worth the extra cost.",
        ],
      },
      {
        heading: "Acreage and rural-residential building",
        body: [
          "Blocks at Karalee, Barellan Point, Chuwar and further west frequently sit outside reticulated services. That means rainwater tanks sized to catchment and demand, and an on-site wastewater treatment system designed for the soil and available land.",
          "Driveway access is the cost most often underestimated. A long approach over sloping ground needs grading, drainage, and a surface that carries a concrete truck rather than a car.",
          "Soil classification under AS 2870 still applies. Reactive clay is common through the area and an engineered footing system costs substantially more than a conventional slab, so the test happens before design.",
        ],
      },
      {
        heading: "Designing for a hot inland summer",
        body: [
          "Ipswich is further inland than the rest of South East Queensland and it runs hotter. Summer temperatures here are consistently above the coastal averages, which makes passive design more valuable rather than less.",
          "North-facing living, generous eaves, well-protected western glazing, good insulation and cross-ventilation do most of the work. Getting the orientation right costs nothing at the drawing stage.",
          "The alternative — a poorly oriented house meeting the energy standard through equipment — complies on paper and costs you every summer for the life of the building.",
        ],
      },
    ],
    highlights: [
      {
        title: "Right authority identified",
        body: "Council scheme or Ripley Valley PDA confirmed before any design work begins.",
      },
      {
        title: "Flood level as a design input",
        body: "An elevated house designed around the required level, not fighting it.",
      },
      {
        title: "Rural services costed",
        body: "Rainwater, on-site wastewater and driveway access designed before construction.",
      },
      {
        title: "Built for inland heat",
        body: "Orientation and shading doing the work in the hottest part of South East Queensland.",
      },
    ],
    suburbs: [
      "Karalee & Barellan Point",
      "Chuwar & Muirlea",
      "Brookwater & Augustine Heights",
      "Springfield & Springfield Lakes",
      "Ripley & South Ripley",
      "Yamanto & Deebing Heights",
      "Brassall & Pine Mountain",
      "Walloon & Thagoona",
      "Rosewood & Marburg",
    ],
    faqs: [
      {
        question: "Who assesses my Ipswich building application?",
        answer:
          "Most of the area is assessed by Ipswich City Council under the city planning scheme, but the Ripley Valley is a Priority Development Area assessed under a development scheme administered by Economic Development Queensland. We confirm which applies before design.",
      },
      {
        question: "Can I build on a flood-affected block?",
        answer:
          "Usually yes, to a minimum habitable floor level set by the overlay. On a custom build that level is a design input — an elevated house with living above and non-habitable uses below can be a better house than a slab-on-ground alternative.",
      },
      {
        question: "Do you build on acreage around Ipswich?",
        answer:
          "Yes, including Karalee, Barellan Point, Chuwar and further west. Acreage builds need rainwater supply, an on-site wastewater system and driveway access suitable for heavy deliveries, all designed and costed before construction.",
      },
      {
        question: "Is a custom home affordable in Ipswich?",
        answer:
          "More so than almost anywhere else in South East Queensland, because land costs less and leaves more of the budget for the building. A custom home here can total less than a standard package closer to Brisbane.",
      },
      {
        question: "How hot does it get compared to the coast?",
        answer:
          "Consistently hotter, because Ipswich is inland and away from the moderating sea breeze. That makes orientation, eaves, insulation and cross-ventilation more valuable here, not less, and they cost nothing extra at design stage.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "moreton-bay",
    serviceSlug: "custom-builds",
    locationName: "Moreton Bay",
    serviceName: "Custom Home Builds",
    region: "Moreton Bay",
    metaTitle: "Custom Home Builders Moreton Bay | Design Homes",
    metaDescription:
      "QBCC licensed custom home builders across Moreton Bay. Bayside, acreage and hinterland builds designed around the site, on fixed-price contracts.",
    keywords: [
      "custom home builders Moreton Bay",
      "custom builder North Lakes",
      "acreage builders Samford",
      "custom home Redcliffe",
      "builders Dayboro",
      "architectural builders Moreton Bay",
    ],
    heroTitle: "Custom Home Builders across",
    heroHighlight: "Moreton Bay",
    heroDescription:
      "One-off homes from the bayside peninsula to the Samford and Dayboro hinterland — designed around the site, its aspect and its constraints.",
    heroImage: "/assets/images/stock/villa-luxury-modern.jpg",
    intro: [
      "Moreton Bay covers an unusually wide range of building conditions for a single local government area. The Redcliffe peninsula is coastal and established. The northern corridor is flat, serviced estate land. Samford, Dayboro and the western hinterland are acreage with slope, bushfire and rural services.",
      "A standard plan can work in one of those three. It rarely works in the other two, which is why custom building here is more common than the volume-heavy housing statistics suggest.",
    ],
    sections: [
      {
        heading: "Bayside sites",
        body: [
          "On the peninsula around Redcliffe, Scarborough, Margate and Woody Point, the constraints are salt exposure, wind rating and, on low-lying land, flood and storm tide levels.",
          "Corrosion protection has to be specified throughout for fixings, hardware, roof sheeting, balustrades and structural connections, matched to the actual distance from the water. This is a design-stage decision, not a substitution on site.",
          "These are also generally older, smaller blocks with existing houses, which means demolition, licensed asbestos removal and neighbours a few metres away. They reward a custom approach because a standard plan rarely suits an established block with its own levels and mature trees.",
        ],
      },
      {
        heading: "Acreage in the western hinterland",
        body: [
          "Samford, Dayboro, Closeburn, Mount Nebo and the surrounding areas offer genuine acreage within reach of Brisbane, on land with slope, vegetation and outlooks worth designing for.",
          "Rural services apply: rainwater tanks sized to catchment, demand and any firefighting requirement, plus an on-site wastewater treatment system designed for the soil and the available land application area.",
          "Bushfire hazard overlays apply across much of this country, triggering a BAL assessment under AS 3959. That rating drives glazing, deck, screen, eave and cladding requirements, and can also impose access standards so a fire appliance can reach and turn.",
          "Access is the other acreage cost. If a concrete truck cannot climb the driveway, the answer is pumping, smaller loads or an upgraded track, and each costs money per delivery.",
        ],
      },
      {
        heading: "Site conditions to establish first",
        body: [
          "Soil classification under AS 2870 determines the footing system and varies widely across the region. Reactive clay is present in parts, and an engineered footing costs substantially more than a conventional slab.",
          "Flood mapping applies around the bay and through the Caboolture River catchment, setting minimum habitable floor levels where it applies.",
          "Vegetation protection applies in parts of the area and can restrict clearing, which on a treed hinterland block may determine the building envelope before any design work happens.",
          "All of it is visible on the council property report, and all of it belongs in the first estimate rather than the final invoice.",
        ],
      },
      {
        heading: "Designing for the site you bought",
        body: [
          "People buy acreage and bayside blocks for a reason — the outlook, the trees, the breeze, the water. The most common failure is a house that ignores all of it.",
          "Siting on a larger block is the highest-value decision in the project: where the northern sun falls, where the breeze comes from, what the outlook is, how far from the road, and where the wastewater application area can sit.",
          "On the peninsula the equivalent decision is orientation against a small block and close neighbours, which needs careful thought about privacy, light and where the outdoor space actually works.",
        ],
      },
    ],
    highlights: [
      {
        title: "Three very different conditions",
        body: "Bayside, corridor and hinterland need genuinely different designs, not one plan.",
      },
      {
        title: "Coastal specification",
        body: "Corrosion protection and wind rating matched to actual peninsula exposure.",
      },
      {
        title: "Acreage services designed",
        body: "Rainwater, on-site wastewater, BAL rating and driveway access costed up front.",
      },
      {
        title: "Siting done properly",
        body: "On a large block, where the house sits decides more than the floor plan does.",
      },
    ],
    suburbs: [
      "Samford & Closeburn",
      "Dayboro & Mount Nebo",
      "Redcliffe & Scarborough",
      "Margate & Woody Point",
      "North Lakes & Mango Hill",
      "Albany Creek & Eatons Hill",
      "Narangba & Burpengary",
      "Petrie & Kallangur",
      "Caboolture & Wamuran",
    ],
    faqs: [
      {
        question: "Do you build acreage around Samford and Dayboro?",
        answer:
          "Yes. Those blocks need rainwater supply, an on-site wastewater treatment system, a BAL assessment where bushfire overlays apply, and driveway access suitable for concrete and crane deliveries. We design and cost all of it before construction.",
      },
      {
        question: "What is different about building on the Redcliffe peninsula?",
        answer:
          "Salt exposure, wind rating and, on low-lying land, flood and storm tide levels. Corrosion protection has to be specified throughout at design stage. Most peninsula projects also involve demolition of an existing house, which we handle under the same contract.",
      },
      {
        question: "Will vegetation rules affect where I can build?",
        answer:
          "On treed hinterland blocks, often yes. Vegetation protection can restrict clearing and effectively determine the building envelope before design begins. We check the council property report first.",
      },
      {
        question: "How much does a custom home cost in Moreton Bay?",
        answer:
          "The site drives it more than the floor area. Soil classification, bushfire rating, required flood level, slope, rural services and access can each move the number materially. We give a realistic range after assessing the block.",
      },
      {
        question: "Should I use a volume builder in the northern estates?",
        answer:
          "On a flat, serviced estate block with a standard plan that genuinely suits you, quite possibly, and we will say so. On acreage, bayside or any block with real constraints, a modified standard plan usually costs more than a purpose-designed one.",
      },
    ],
    parentServiceHref: "/services/custom-builds",
    parentServiceName: "Custom Builds",
  },
  {
    locationSlug: "redland",
    serviceSlug: "duplex-townhouses",
    locationName: "Redlands",
    serviceName: "Duplex & Townhouse Builds",
    region: "Redland City",
    metaTitle: "Duplex Builders Redlands | Design Homes",
    metaDescription:
      "QBCC licensed duplex and townhouse builders in Redland City. Dual occupancy feasibility, vegetation and koala overlay checks, and fixed-price builds.",
    keywords: [
      "duplex builders Redlands",
      "dual occupancy Redland City",
      "townhouse builders Cleveland",
      "duplex Capalaba",
      "duplex Victoria Point",
      "investment builders Redlands",
    ],
    heroTitle: "Duplex & Townhouse Builders in",
    heroHighlight: "Redlands",
    heroDescription:
      "Dual occupancy across Redland City — with the vegetation and koala habitat constraints checked before design, because they decide the building envelope.",
    heroImage: "/assets/images/stock/townhouse-construction-new.jpg",
    intro: [
      "Redland City is a harder place to build a duplex than its neighbours, and the reason is trees. Vegetation protection and koala habitat overlays apply across parts of the local government area, and on a two-dwelling project they constrain the building envelope in ways that can decide whether the site works at all.",
      "That is not a reason to avoid the area. It is a reason to do the overlay work before you buy, because a Redlands block that clears these checks is a good place to build.",
    ],
    sections: [
      {
        heading: "Vegetation and koala habitat come first",
        body: [
          "On a single dwelling, vegetation constraints shape where the house sits. On a duplex they can determine whether two dwellings, their private open space, their parking and their driveway fit at all.",
          "Where the overlays apply, clearing is restricted, and the retained vegetation has to be worked around rather than through. That interacts directly with the site cover, deep planting and private open space requirements the planning scheme imposes on dual occupancy.",
          "This check comes before zone, before frontage, before anything. It is visible on the council property report and it costs nothing.",
        ],
      },
      {
        heading: "Then the standard feasibility checks",
        body: [
          "Zone and the dual occupancy provisions applying to the site — minimum lot size, frontage, site cover, setbacks, private open space, deep planting and car parking. Frontage rules out more sites than area does.",
          "Sewer alignment across the block, because building over or near a main requires approval and specific measures, and relocating one can end a project. Stormwater discharge next, because every site needs a legal discharge point and the answer sometimes involves an easement over a neighbour's land.",
          "Then water meter sizing and electrical supply capacity, since two dwellings need more of both than one, and in older Redlands suburbs the existing infrastructure does not always deliver it without an upgrade.",
        ],
      },
      {
        heading: "Bayside site conditions",
        body: [
          "Proximity to Moreton Bay means salt exposure, and corrosion protection has to be specified for fixings, hardware, roof sheeting and structural connections across both dwellings, matched to the actual distance from the water.",
          "Low-lying land carries flood and storm tide mapping. Where overlays apply, minimum habitable floor levels are set for both dwellings, affecting slab height, driveway grade and sometimes the structural approach.",
          "Soil classification under AS 2870 determines the footing system, and conditions vary across the city. It should be established by test rather than carried over from a neighbouring project.",
        ],
      },
      {
        heading: "Designing for the local market",
        body: [
          "Redlands attracts a mix of families and downsizers, and dual occupancy here frequently performs better aimed at owner-occupier downsizers than at pure rental yield. That means single-level living where the site allows, level thresholds, genuine storage and real private outdoor space.",
          "Retained mature vegetation, which starts as a constraint, is a genuine asset in this market. A duplex with established trees and real shade sells better than one on a cleared block, and it is worth designing around rather than merely working around.",
          "Acoustic separation between dwellings matters more for downsizer buyers than for tenants, because they have usually owned a detached house and notice it immediately.",
        ],
      },
    ],
    highlights: [
      {
        title: "Overlays checked before anything",
        body: "Vegetation and koala habitat constraints decide whether two dwellings fit at all.",
      },
      {
        title: "Services confirmed early",
        body: "Sewer alignment, stormwater discharge and supply capacity verified before design.",
      },
      {
        title: "Bayside specification",
        body: "Corrosion protection and flood levels applied across both dwellings.",
      },
      {
        title: "Trees as an asset",
        body: "Retained vegetation designed around, because this market pays for real shade.",
      },
    ],
    suburbs: [
      "Cleveland & Ormiston",
      "Capalaba & Alexandra Hills",
      "Victoria Point & Redland Bay",
      "Thornlands & Wellington Point",
      "Birkdale & Thorneside",
      "Sheldon & Mount Cotton",
      "Wynnum West & Lota",
      "Carbrook & Redland Bay",
      "Point Lookout & bay islands",
    ],
    faqs: [
      {
        question: "Will vegetation overlays stop me building a duplex?",
        answer:
          "Sometimes, and more often than on a single dwelling. Where vegetation protection or koala habitat overlays apply, retained trees plus the scheme's site cover, deep planting and private open space requirements can leave insufficient room for two dwellings. We check before you buy.",
      },
      {
        question: "What size block do I need?",
        answer:
          "It depends on the zone and the provisions applying to your site, and in Redlands also on what vegetation has to be retained. Minimum lot size, frontage, site cover and parking all interact. Send the address and we will check the property report.",
      },
      {
        question: "Should I build for tenants or downsizers?",
        answer:
          "In Redlands, owner-occupier downsizers frequently represent the better exit. That changes the design toward single-level living, level thresholds, genuine storage and strong acoustic separation. Decide before design, because it shapes the whole plan.",
      },
      {
        question: "Do flood levels apply?",
        answer:
          "On low-lying land around the bay, yes. Minimum habitable floor levels apply to both dwellings and affect slab height, driveway grade and sometimes the structure. We confirm them before design.",
      },
      {
        question: "Can I sell the two dwellings separately?",
        answer:
          "Often yes, but the title path has to be planned from the start because it affects the survey, the services layout and sometimes the structure. Tell us your intended exit before design begins.",
      },
    ],
    parentServiceHref: "/services/duplex-townhouses",
    parentServiceName: "Duplex & Townhouses",
  },
  {
    locationSlug: "redland",
    serviceSlug: "renovations",
    locationName: "Redlands",
    serviceName: "Home Renovations",
    region: "Redland City",
    metaTitle: "Home Renovations Redlands | Design Homes",
    metaDescription:
      "Renovation and extension builders in Redland City. Structural renovations, extensions and bayside repairs on fixed-price contracts. QBCC licensed.",
    keywords: [
      "home renovations Redlands",
      "renovation builders Cleveland",
      "house extension Redlands",
      "renovation Capalaba",
      "home extension Victoria Point",
      "structural renovation Redland City",
    ],
    heroTitle: "Home Renovations in",
    heroHighlight: "Redlands",
    heroDescription:
      "Extensions and structural renovations across Redland City — investigated before contract, with vegetation and bayside conditions accounted for from the start.",
    heroImage: "/assets/images/stock/home-entry-detail.jpg",
    intro: [
      "Most Redlands housing dates from the growth decades of the 1970s through the 1990s, built on generous blocks with mature planting that has since become the suburb's defining feature. The houses have aged less well than the gardens.",
      "The typical renovation here is about connecting a closed-off plan to the outdoor space that surrounds it, and dealing with a building envelope that was never insulated for year-round comfort.",
    ],
    sections: [
      {
        heading: "The Redlands renovation brief",
        body: [
          "Houses from this era tend to have small, separated rooms, living areas that face away from the best aspect, minimal insulation, and a poor connection to the garden — which on a Redlands block is usually the best thing the property has.",
          "The highest-value work is generally opening the rear of the plan, creating a genuine covered outdoor living space, improving cross-ventilation and insulating properly.",
          "Retained mature trees make this more rewarding here than in most places. A rear living space that opens onto established shade is a genuinely different house to live in, and it costs no more than a poorly placed one.",
        ],
      },
      {
        heading: "Vegetation constraints apply to renovations too",
        body: [
          "Where vegetation protection or koala habitat overlays apply, they affect extensions as well as new builds. An addition that requires removing a protected tree may need approval that is not granted.",
          "Root zones matter as much as canopies. Excavating for footings close to a mature tree can damage it and may be restricted, which affects where an extension can physically go.",
          "We check the overlays before design so the extension is planned around what has to stay, rather than redesigned after a refusal.",
        ],
      },
      {
        heading: "What we usually find",
        body: [
          "Asbestos in anything built before the late 1980s, typically in eaves and wet area sheeting, requiring licensed removal with documentation. Termite damage in timber framing, particularly where subfloor ventilation is poor or garden beds sit against the building.",
          "Previous unapproved work — enclosed carports, added rooms, converted patios — is common and each instance has to be assessed and frequently corrected or approved retrospectively.",
          "Undersized switchboards, failing plumbing and no insulation are the standard list. On bayside properties, corrosion in fixings and roof sheeting is added to it.",
        ],
      },
      {
        heading: "How we contract renovation work",
        body: [
          "Fixed price where the scope can genuinely be defined, with a clearly stated contingency for hidden conditions. We report what we find before acting on it and price it in writing before proceeding.",
          "Where an extension increases the footprint, setbacks, site cover and overlays apply as on a new build, and on low-lying bayside land the new work generally has to meet the current required floor level even where the existing house does not.",
          "Renovation is the work that most rewards a builder who is on site. Nothing in a forty-year-old house is square, and the decisions have to be made by someone who can see the actual condition.",
        ],
      },
    ],
    highlights: [
      {
        title: "Designed around the garden",
        body: "Opening the plan to established planting is the highest-value move on these blocks.",
      },
      {
        title: "Tree constraints checked",
        body: "Protected canopies and root zones assessed before an extension is designed.",
      },
      {
        title: "Hidden conditions investigated",
        body: "Asbestos, termite damage and unapproved work found before contract, not after.",
      },
      {
        title: "New work meets current levels",
        body: "Bayside additions built to today's flood requirements even where the house predates them.",
      },
    ],
    suburbs: [
      "Cleveland & Ormiston",
      "Alexandra Hills & Capalaba",
      "Thornlands & Wellington Point",
      "Victoria Point & Redland Bay",
      "Birkdale & Thorneside",
      "Sheldon & Mount Cotton",
      "Wynnum West & Lota",
      "Coochiemudlo & bay islands",
      "Carbrook & Cornubia",
    ],
    faqs: [
      {
        question: "Can I extend if there are protected trees on my block?",
        answer:
          "Often yes, but the extension has to be planned around what must stay. Root zones matter as much as canopies, because excavating for footings near a mature tree can damage it and may be restricted. We check the overlays before design.",
      },
      {
        question: "What is the highest-value renovation on a 1980s Redlands house?",
        answer:
          "Usually opening the rear of the plan to the garden, adding genuine covered outdoor living, improving cross-ventilation and insulating properly. On these blocks the established planting is the best asset the property has, and most original plans ignore it.",
      },
      {
        question: "Will you find asbestos?",
        answer:
          "In anything built before the late 1980s, very likely — commonly in eaves and wet area sheeting. It requires licensed removal and disposal with documentation, established and priced before demolition begins.",
      },
      {
        question: "Does my extension have to sit higher than the house?",
        answer:
          "On low-lying bayside land, possibly. New work generally has to meet the current required minimum habitable floor level even where the existing house predates that requirement. We confirm the level before design.",
      },
      {
        question: "How do you price work you cannot see?",
        answer:
          "We investigate before contract — opening up where we can, inspecting framing, subfloor and services — then price on a fixed basis with a stated contingency for what remains hidden. Anything found is reported and priced in writing before we act on it.",
      },
    ],
    parentServiceHref: "/services/renovations",
    parentServiceName: "Renovations",
  },
];

export function getLocationService(locationSlug: string, serviceSlug: string) {
  return locationServices.find(
    (entry) => entry.locationSlug === locationSlug && entry.serviceSlug === serviceSlug,
  );
}

export function getServicesForLocation(locationSlug: string) {
  return locationServices.filter((entry) => entry.locationSlug === locationSlug);
}
