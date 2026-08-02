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
  {
    slug: "cost-to-build-a-house-brisbane",
    title: "What Actually Drives the Cost of Building a House in Brisbane",
    description:
      "The site, design, inclusions, and contract terms that move a Brisbane build budget up or down — and where owners most often get caught out.",
    date: "2026-08-01",
    readTime: "7 min read",
    image: "/assets/images/stock/home-brick-twilight.jpg",
    category: "Cost & Budget",
    content: [
      {
        heading: "Why two similar homes can cost very different amounts",
        body: [
          "Owners often compare two builds of the same floor area and assume they should cost the same. In practice, the land does as much to set the budget as the house does. A flat, cleared, rectangular block with services at the boundary is the cheapest scenario a builder can quote. Anything that departs from that adds cost before a single wall goes up.",
          "The second driver is specification. A home is roughly the same shell whether you finish it with builder-standard fittings or imported stone and joinery, but the finishing trades and materials are where budgets move fastest. Two identical footprints can differ substantially once selections are locked in.",
          "The third is how the contract is written. A price that excludes items you will certainly need is not a lower price — it is a deferred one. Comparing quotes only works when the scope behind each number is the same.",
        ],
      },
      {
        heading: "Site costs: the part most people underestimate",
        body: [
          "Site costs cover everything needed to make a block ready to build on. Slope is the biggest single factor. A fall across the block means retaining, cut and fill, engineered footings, or a suspended slab — each of which brings engineering and extra trades with it.",
          "Soil classification matters just as much. Reactive clay soils, common through parts of Brisbane, require deeper or stiffer footing systems than sandy or rock sites. A soil test and engineering design early in the process is what turns a guess into a real figure.",
          "Then there is access and services. Narrow frontage, overhead powerlines, protected trees, easements, stormwater connection points, and the distance to sewer and water all affect what the build costs. Demolition, if you are removing an existing dwelling, is its own line item with asbestos testing attached.",
        ],
      },
      {
        heading: "Design decisions with outsized budget effects",
        body: [
          "Two storeys generally cost more per square metre than a single-storey home of the same area because of the stair, the upper floor structure, extra scaffolding, and more complex services. That said, on a small or expensive block, going up can still be the better value decision overall.",
          "Roof and facade complexity add up quietly. Every change of roof plane, every additional corner in the external wall, and every non-standard window adds labour and flashing detail without adding usable floor area. Simpler forms deliver more house for the same money.",
          "Wet areas are the most expensive rooms per square metre in any home. Kitchens, bathrooms, and laundries concentrate plumbing, electrical, waterproofing, tiling, and cabinetry into small spaces. Adding a bathroom is never just the tile cost.",
        ],
      },
      {
        heading: "Where budgets blow out after signing",
        body: [
          "Provisional sums and prime cost items are the usual culprits. These are allowances for work or products not yet finalised at contract signing — often site works, tiling, appliances, or tapware. If the allowance was set optimistically, the difference becomes a variation you pay later.",
          "Late changes are the other. Moving a wall during framing is inexpensive; moving it after services are roughed in is not. Every decision made before construction starts is cheaper than the same decision made on site.",
          "Ask for the provisional sums and prime cost schedule with any quote, and ask how each allowance was arrived at. A builder who has actually priced the site will be able to answer that specifically.",
        ],
      },
      {
        heading: "How to compare quotes properly",
        body: [
          "Put the quotes side by side and check the inclusions list first, not the total. Look for driveway, fencing, landscaping, letterbox, clothesline, floor coverings, window furnishings, air conditioning, and site works — these are the items most often left out of a headline price.",
          "Confirm what type of contract is proposed and what the variation process looks like. A fixed-price contract is only meaningful when the scope behind it is fully documented.",
          "If you would like a figure specific to your block and brief rather than a general range, we can look at the site, the design intent, and the inclusions you actually want, and prepare a fixed-price proposal from there.",
        ],
      },
    ],
  },
  {
    slug: "knockdown-rebuild-brisbane",
    title: "Knockdown Rebuild in Brisbane: When It Beats Renovating",
    description:
      "How to judge whether demolishing and rebuilding makes more sense than renovating an existing Brisbane home, including approvals, character protection, and cost logic.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.jpg",
    category: "New Homes",
    content: [
      {
        heading: "The case for staying on your block",
        body: [
          "A knockdown rebuild keeps what is usually the most valuable and least replaceable part of the equation — the location. You keep the school catchment, the commute, the neighbours, and the street. What changes is the house.",
          "It also avoids the transaction costs of moving. Stamp duty, agent commission, and marketing costs on a sale and purchase are significant, and they buy you nothing physical. Redirecting that money into the build is often the more efficient path.",
          "The trade-off is that you need somewhere to live during construction, and the block has to actually support the home you want to build.",
        ],
      },
      {
        heading: "When renovation is the better answer",
        body: [
          "Renovation makes sense when the existing structure is fundamentally sound and the problem is layout rather than condition. If the frame, roof, and footings are in good order and you mainly need to open up living areas or add a room, working with the building is usually cheaper than replacing it.",
          "It is also the right answer when the home has genuine character value that a new build cannot replicate, or when planning controls make demolition difficult or impossible.",
          "The signal to stop and reconsider is when the scope keeps growing. If restumping, rewiring, replumbing, reroofing, and reframing all appear on the list, you are paying new-build money for a compromised result.",
        ],
      },
      {
        heading: "Character and demolition controls in Brisbane",
        body: [
          "Brisbane City Council applies specific controls to houses in character residential zones and to dwellings built before a defined cut-off period. In these areas, demolition of a pre-war dwelling is generally not straightforward and may be refused, even where the building is in poor condition.",
          "Before committing to a knockdown rebuild, check the zoning, any overlays, and the age of the dwelling on the council property search. This is the single check that most often changes a project's direction.",
          "Where full demolition is restricted, there are usually still options — raising and building under, retaining and extending to the rear, or partial demolition — but the design has to be shaped around the rules rather than fighting them.",
        ],
      },
      {
        heading: "What the process actually looks like",
        body: [
          "The sequence is generally: feasibility and planning checks, design and documentation, demolition approval, building approval, service disconnections, demolition, then construction. Demolition itself is quick; the approvals in front of it are what set the timeline.",
          "You will need asbestos assessment on older homes, service disconnection from each utility, and a demolition contractor with the appropriate licensing. These steps run in parallel with design where possible.",
          "Budget for a rental period covering the full construction window plus a buffer. Building programmes move, and a lease that ends before handover is an expensive problem.",
        ],
      },
      {
        heading: "Deciding with numbers rather than instinct",
        body: [
          "Get a builder to assess both paths against the same brief. Not a renovation quote and a separate new build quote, but a single comparison of what each option delivers for the money and what compromises remain afterwards.",
          "Weigh the result over how long you intend to stay. A renovation that solves eighty per cent of the problem may be right for a five-year horizon and wrong for a twenty-year one.",
          "We are happy to walk a site and give a straight assessment of which path suits the block and the brief — including telling you when renovating is the better call.",
        ],
      },
    ],
  },
  {
    slug: "how-long-to-build-a-house-queensland",
    title: "How Long Does It Take to Build a House in Queensland?",
    description:
      "A realistic timeline for a new home build in South East Queensland, stage by stage, and the factors that most often extend it.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.jpg",
    category: "New Homes",
    content: [
      {
        heading: "Two timelines, not one",
        body: [
          "People usually ask how long construction takes, but the period before construction is often longer. Design, engineering, selections, approvals, and contract preparation all happen before a builder is on site, and that pre-construction phase regularly runs several months.",
          "Construction itself, for a standard single-storey home on a straightforward block, is typically measured in months rather than weeks. Two-storey homes, difficult sites, and highly customised specifications extend it.",
          "Planning against the full timeline rather than just the build period is what keeps rental arrangements and finance drawdowns aligned with reality.",
        ],
      },
      {
        heading: "The construction stages in order",
        body: [
          "Site preparation and foundations come first — clearing, cut and fill where required, service trenching, footings, and slab. Wet weather affects this stage more than any other, because you cannot pour into saturated ground.",
          "Frame follows, then roof and lock-up, at which point the building is weatherproof and internal trades can work regardless of weather. Rough-in for plumbing and electrical happens inside the frame before linings go on.",
          "Fixing covers linings, cabinetry, doors, and trim. Then finishes — tiling, painting, flooring, tapware, appliances, and external works. Practical completion, inspections, and defect rectification close out the job before handover.",
        ],
      },
      {
        heading: "What most often causes delays",
        body: [
          "Weather is the obvious one in South East Queensland. A wet summer can stall earthworks and slab pours for weeks, and the effect cascades through the programme because trades are booked in sequence.",
          "Late client decisions are the second. Selections that are not finalised before they are needed hold up ordering, and long-lead items such as windows, cabinetry, and imported tiles can add weeks if they are confirmed late.",
          "Variations after work has started are the third. Every change requires repricing, sometimes re-approval, and often rework. The cheapest and fastest variations are the ones decided during design.",
        ],
      },
      {
        heading: "How to keep a build moving",
        body: [
          "Finalise selections before construction starts, not during. A complete selections schedule at contract stage removes the single most common source of delay.",
          "Respond to builder queries quickly. A question waiting on an answer usually means a trade waiting on a decision, and trades that are stood down have to be rebooked around other jobs.",
          "Ask for a construction programme at contract signing and regular progress updates against it. Knowing which stage you are in and what is next makes it obvious early when something is slipping.",
        ],
      },
    ],
  },
  {
    slug: "check-builder-qbcc-licence",
    title: "How to Check a Builder's QBCC Licence Before You Sign",
    description:
      "A short, practical guide to verifying that a Queensland builder is licensed for the work you are asking them to do, and what else to check alongside it.",
    date: "2026-08-01",
    readTime: "4 min read",
    image: "/assets/images/stock/blueprint-keys.jpg",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Why the licence check matters",
        body: [
          "In Queensland, building work above a set value must be carried out by a licensed contractor. The Queensland Building and Construction Commission licenses builders and trade contractors, and the licence class determines what work a contractor is permitted to perform and up to what value.",
          "Using an unlicensed contractor puts you outside the statutory home warranty scheme. If something goes wrong, the protections that would normally apply may not be available to you.",
          "The check takes a couple of minutes and should happen before you sign anything, not after.",
        ],
      },
      {
        heading: "How to run the check",
        body: [
          "Search the QBCC's online licence register using the company name, the individual's name, or the licence number. Ask the builder for their licence number directly — a licensed builder will provide it without hesitation.",
          "Confirm three things: that the licence is current, that the class covers the type and value of work you are proposing, and that the name on the licence matches the entity that will sign your contract. A licence held by a director personally is not the same as one held by the company you are contracting with.",
          "The register also shows licence history, including any directions to rectify or disciplinary action. Worth reading rather than skipping.",
        ],
      },
      {
        heading: "What else to verify at the same time",
        body: [
          "Ask about the statutory home warranty insurance premium and confirm it will be paid for your job before work starts. This is a requirement for residential building work above the relevant threshold, and the certificate should be issued in your name.",
          "Check public liability insurance and, where relevant, contract works insurance. Ask for current certificates of currency rather than a verbal assurance.",
          "Finally, ask to see recent completed work and speak to a past client. A licence confirms a builder is permitted to do the work; it does not tell you how well they do it.",
        ],
      },
      {
        heading: "Questions worth asking directly",
        body: [
          "Who will actually be running my site day to day, and how often will they be on it? Who do I contact when I have a question? How are variations priced and approved?",
          "How many jobs will you have running at the same time as mine? What is your defect and warranty process after handover?",
          "Clear, specific answers to those questions tell you more about how the build will go than any brochure. Design Homes is a QBCC licensed builder and we are happy to answer all of them before you commit to anything.",
        ],
      },
    ],
  },
  {
    slug: "building-on-a-sloping-block",
    title: "Building on a Sloping Block in South East Queensland",
    description:
      "How slope affects foundations, cost, and design — plus the split-level and suspended-slab approaches that turn a difficult site into an advantage.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-landscape.jpg",
    category: "Custom Builds",
    content: [
      {
        heading: "Slope is a design problem before it is a cost problem",
        body: [
          "Sloping blocks are common through South East Queensland, and they are often cheaper to buy than flat land because buyers assume they are difficult. Handled well, the slope is what makes the finished home better — elevation, outlook, breeze, and natural separation between living zones.",
          "Handled badly, it is expensive. The difference is almost always whether the design responds to the land or fights it. A standard flat-block floor plan dropped onto a slope requires enormous cut and fill or retaining to make the site suit the house, which is the wrong way round.",
          "The first step is a contour survey. You cannot design or price a sloping site properly without one.",
        ],
      },
      {
        heading: "Cut and fill, retaining, and drainage",
        body: [
          "Cut removes soil to create a level platform; fill builds one up. Both cost money, and fill has to be engineered and compacted properly because you will be building on it. Excess spoil has to be removed from site, which is its own cost.",
          "Retaining walls hold the change in level. Above certain heights they require engineering design and approval, and their cost rises quickly with height because of the loads involved.",
          "Drainage is the part people forget. Water moves downhill, and a house on a slope sits in its path. Subsoil drainage, surface falls, and stormwater management need to be designed rather than improvised, or you will spend the life of the house managing moisture.",
        ],
      },
      {
        heading: "Design approaches that suit slope",
        body: [
          "Split-level designs step the floor plate down with the land, reducing excavation while creating natural zoning between living and sleeping areas. They usually deliver the best value on moderate slopes.",
          "Suspended slabs and pole or pier construction lift the building above the ground rather than cutting into it. This minimises earthworks, works well on steeper sites, and creates usable undercroft space, but the structural system costs more than a slab on ground.",
          "On steeper blocks, a combination is common — cut into the high side for the entry level, suspend the low side. The right approach depends on the contour survey, the soil report, and where you want the outlook.",
        ],
      },
      {
        heading: "What to check before you buy a sloping block",
        body: [
          "Get the contour survey and a soil test, and have a builder or designer look at both before settlement if you can. The difference between a five per cent and a fifteen per cent grade is not linear in cost terms.",
          "Check access for construction. A steep or narrow driveway affects whether concrete trucks, cranes, and delivery vehicles can reach the building platform, and workarounds are expensive.",
          "Look at overlays — landslide hazard, vegetation, waterway corridors, and bushfire — since these are more common on sloping land and can materially change what you are allowed to build.",
          "We are happy to walk a block with you before you commit and give an honest read on what it will take to build there.",
        ],
      },
    ],
  },
  {
    slug: "fixed-price-vs-cost-plus-contracts",
    title: "Fixed Price vs Cost Plus Building Contracts in Queensland",
    description:
      "The practical difference between fixed-price and cost-plus residential building contracts, where each one suits, and the clauses to read closely.",
    date: "2026-08-01",
    readTime: "5 min read",
    image: "/assets/images/stock/home-entry-detail.jpg",
    category: "Choosing a Builder",
    content: [
      {
        heading: "What each contract actually commits to",
        body: [
          "A fixed-price contract sets a total price for a defined scope of work. The builder carries the risk of their own pricing being wrong, provided the scope does not change. Most residential new builds in Queensland are written this way.",
          "A cost-plus contract charges the actual cost of labour and materials plus an agreed margin. The owner carries the pricing risk, and the final figure is not known until the work is complete.",
          "Neither is inherently better. What matters is how well the scope can be defined before work starts.",
        ],
      },
      {
        heading: "When fixed price is the right choice",
        body: [
          "Fixed price suits new builds and any project where the design can be fully documented in advance. If the drawings, engineering, and selections are complete, there is little reason for the builder to price contingency into the number, and you get certainty.",
          "The critical caveat is that a fixed price only covers the scope described. Provisional sums and prime cost items are estimates within the contract, not fixed amounts, and they are the most common source of unexpected cost.",
          "Before signing, read the provisional sum and prime cost schedule closely and ask how each figure was derived. Well-researched allowances are the difference between a fixed price that holds and one that drifts.",
        ],
      },
      {
        heading: "When cost plus makes sense",
        body: [
          "Cost plus suits work where the scope genuinely cannot be known in advance — renovations to older homes where the extent of hidden damage is unknown, heritage work, or projects where the owner wants to make decisions as the job proceeds.",
          "In those situations a fixed price would include a large risk margin to cover the unknown, and you may pay for a contingency that never eventuates. Cost plus can be cheaper in practice, but only with a builder you trust and with proper reporting.",
          "If you use cost plus, insist on open-book invoicing, an agreed margin percentage, a written estimate updated as the job progresses, and a mechanism to pause and reassess if costs exceed a defined threshold.",
        ],
      },
      {
        heading: "Clauses worth reading carefully in either case",
        body: [
          "The variation clause: how changes are priced, who has to approve them in writing, and what happens if you disagree on a price after the work is done.",
          "The progress payment schedule: whether payments are tied to defined stages of work completed, and whether the deposit and stage amounts sit within the limits that apply to residential building contracts in Queensland.",
          "Delay and extension of time provisions, the defects liability period, and the dispute resolution process. Also confirm the statutory warranty insurance is in place before work commences.",
          "If a contract is put in front of you and something is unclear, ask the builder to explain it and consider independent legal review. A builder confident in their contract will not object.",
        ],
      },
    ],
  },
  {
    slug: "raising-and-building-under-a-queenslander",
    title: "Raising and Building Under a Queenslander: What to Know",
    description:
      "Approvals, structural work, height limits, and design considerations when lifting a traditional Queenslander to create living space underneath.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "Why raising works so well on these homes",
        body: [
          "Queenslanders were designed to sit off the ground on stumps, which makes them unusually well suited to being lifted. The structure is timber-framed and relatively light, and the existing underfloor space means the building already expects to be elevated.",
          "Raising typically creates a full additional level of living space without extending the building's footprint or losing yard. On a compact inner-suburban block, that is often the only way to add significant area.",
          "It also solves practical problems — flood levels, drainage, ventilation, and car accommodation — while preserving the character of the original house above.",
        ],
      },
      {
        heading: "Approvals and height limits",
        body: [
          "Most councils apply a maximum overall building height and, in character areas, additional controls on how the raised house presents to the street. There is usually a limit on how tall the resulting building can be and on the appearance of the new lower level.",
          "In Brisbane's character residential zones, the traditional building character overlay influences what you can do to the front of the house and how new work must be detailed. Enclosing under the house is generally expected to sit behind the front setback and read as subordinate to the original dwelling.",
          "Flood overlays are also relevant in many suburbs, and a minimum habitable floor level may apply. Check the property report and overlays before spending money on design.",
        ],
      },
      {
        heading: "The structural work involved",
        body: [
          "The house is jacked up and supported temporarily while new footings and structural posts are installed. This is specialist work carried out by house raising contractors and requires engineering design.",
          "Existing stumps are almost always replaced. Older timber stumps will not meet current requirements, and once the house is in the air, replacing them is the logical and much cheaper time to do it.",
          "Expect some remedial work to the original structure. Lifting reveals conditions that were previously hidden, and older floor framing, bearers, and joists sometimes need attention. Allow for it in the budget rather than being surprised by it.",
        ],
      },
      {
        heading: "Designing the new lower level",
        body: [
          "Ceiling height under the raised house is the constraint that shapes everything. Work out early what height you can achieve within the overall height limit, because it determines whether the space becomes genuine living area or storage and garage.",
          "Think about how the two levels connect. An internal stair takes floor area from both levels, and where it lands affects the plan upstairs as well as down. Getting this right early avoids compromising the original layout.",
          "Natural light and cross-ventilation need deliberate attention downstairs, since the space sits lower and is often more enclosed than the level above. Window placement, light wells, and floor levels relative to the ground all matter.",
          "If you have a Queenslander you are considering raising, we can assess the structure, the overlays affecting the property, and what is realistically achievable on the block.",
        ],
      },
    ],
  },
  {
    slug: "questions-to-ask-a-home-builder",
    title: "Questions to Ask a Home Builder Before You Sign",
    description:
      "The questions that reveal how a build will actually run — covering licensing, pricing, site management, communication, and what happens after handover.",
    date: "2026-08-01",
    readTime: "5 min read",
    image: "/assets/images/stock/home-brick-contemporary.jpg",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Licensing, insurance, and financial standing",
        body: [
          "What is your QBCC licence number, what class is it, and does it cover work of this type and value? Is the licence held by the entity that will sign my contract?",
          "Will statutory home warranty insurance be taken out for my job, and when will I receive the certificate? Can I see current public liability and contract works insurance certificates?",
          "How long have you been operating under this entity? A builder with a short trading history under a new company name is worth asking about, even where the explanation is entirely reasonable.",
        ],
      },
      {
        heading: "Pricing and the contract",
        body: [
          "What is included and, more importantly, what is excluded? Ask specifically about driveway, fencing, landscaping, floor coverings, window furnishings, air conditioning, and site works.",
          "What provisional sums and prime cost items are in the contract, and how were those allowances calculated? Are they based on my actual site and my actual selections, or on standard figures?",
          "How are variations priced and approved, and will I always see a written price before work proceeds? What happens if I disagree with a variation price?",
        ],
      },
      {
        heading: "How the site will actually run",
        body: [
          "Who is my day-to-day contact, and who supervises the site? How often will they be on it? How many other jobs will be running at the same time as mine?",
          "Are your trades regular subcontractors you work with repeatedly, or are they engaged job by job? Consistent trades usually mean consistent quality.",
          "How will you communicate progress, and how quickly can I expect an answer to a question? Can I visit the site, and under what arrangements?",
        ],
      },
      {
        heading: "Timeline and completion",
        body: [
          "What is the realistic construction programme, and what are the main risks to it on my site? What grounds allow an extension of time under the contract?",
          "What does practical completion mean in this contract, and how is the defects process handled? How long is the defects liability period?",
          "What happens after handover — who do I call in six months if something needs attention, and what does the warranty cover?",
        ],
      },
      {
        heading: "The answers that should reassure you",
        body: [
          "Good answers are specific. A builder who has genuinely priced your job can talk about your block, your soil report, and your selections rather than speaking in generalities.",
          "Be wary of pressure to sign quickly, reluctance to put things in writing, quotes that are dramatically lower than others without an explanation you can verify, and vague responses about who is actually running the site.",
          "You are choosing someone you will work with for months on the largest purchase most people make. Take the time to ask, and expect straight answers. We are happy to sit down and go through every one of these questions before you commit to anything.",
        ],
      },
    ],
  },
  {
    slug: "granny-flat-secondary-dwelling-queensland",
    title: "Granny Flats and Secondary Dwellings in Queensland: What's Allowed",
    description:
      "How secondary dwellings work in South East Queensland — size limits, council rules, whether you can rent them out, and what they cost to build properly.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.jpg",
    category: "Duplexes",
    content: [
      {
        heading: "What counts as a secondary dwelling",
        body: [
          "A secondary dwelling — commonly called a granny flat — is a self-contained dwelling on the same lot as a house. It has its own kitchen, bathroom, living and sleeping areas, but it is not on a separate title and cannot be sold independently of the main house.",
          "That is the key distinction from a duplex. A duplex is two dwellings that can often be separately titled and sold. A secondary dwelling stays attached to the parent lot, which makes it simpler to approve but limits what you can do with it later.",
          "Secondary dwellings can be attached to the main house, built underneath it, converted from an existing garage or undercroft, or built as a detached structure in the yard.",
        ],
      },
      {
        heading: "The rules vary by council",
        body: [
          "Queensland does not apply one set of secondary dwelling rules statewide. Each local government sets its own controls through its planning scheme, and they differ meaningfully between Brisbane, Gold Coast, Logan, Moreton Bay, Ipswich, Sunshine Coast and Redland.",
          "The controls that usually matter are maximum gross floor area, minimum lot size, setbacks, height, car parking, private open space, and site cover. Some councils allow a larger secondary dwelling than others, and some are more restrictive about detached structures than attached ones.",
          "Queensland also removed the statewide restriction that previously limited who could occupy a secondary dwelling, which opened up renting to the general market in many areas. Whether that applies to your property still depends on your council's current planning scheme, so it needs to be confirmed for the specific lot rather than assumed.",
        ],
      },
      {
        heading: "Why people build them",
        body: [
          "The most common reasons are multi-generational living — accommodating ageing parents or adult children while keeping independence on both sides — and rental income from an existing block.",
          "There is also a resale argument. A well-built secondary dwelling adds usable, flexible space to a property, and buyers value the optionality even if they do not intend to rent it out.",
          "The economics work best where the block already has services, reasonable access, and room for the structure without compromising the main house's yard or outlook.",
        ],
      },
      {
        heading: "What drives the cost",
        body: [
          "Services are the first consideration. Extending water, sewer, stormwater and power to a detached structure at the rear of a block costs more than building an attached dwelling that ties into existing service points.",
          "Access is the second. If a concrete truck and delivery vehicles cannot reach the build location, materials have to be handled differently, and that adds labour to every stage.",
          "The rest is standard building cost, concentrated into a small footprint. A secondary dwelling has a kitchen, a bathroom and a laundry in a fraction of the area of a house, which makes its cost per square metre higher than the main dwelling even though the total is much lower.",
        ],
      },
      {
        heading: "Before you commit",
        body: [
          "Check the zoning, minimum lot size, and secondary dwelling provisions in your council's planning scheme against your specific property. Confirm setbacks, maximum floor area and parking requirements before paying for design.",
          "Check for overlays — flooding, character, vegetation, bushfire — since these can restrict where a structure can be placed even where a secondary dwelling is otherwise permitted.",
          "If you would like us to check your block and give an honest read on whether a secondary dwelling works there, send through the address and what you have in mind.",
        ],
      },
    ],
  },
  {
    slug: "energy-efficient-home-design-queensland",
    title: "Designing an Energy Efficient Home for the Queensland Climate",
    description:
      "Orientation, ventilation, shading, insulation and glazing decisions that keep a South East Queensland home comfortable without running the air conditioning year round.",
    date: "2026-08-01",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.jpg",
    category: "New Homes",
    content: [
      {
        heading: "The free decisions come first",
        body: [
          "The most effective energy efficiency measures in a subtropical climate cost nothing at design stage and everything to retrofit later. Orientation, room placement, window position and eave depth are all decided on paper, and they determine most of a home's comfort before a single product is specified.",
          "In South East Queensland the priority is keeping summer heat out while still capturing winter sun and prevailing breezes. That is a different problem to the one southern climates solve, and a plan designed for Melbourne conditions will not perform well here.",
          "Get these right and the mechanical systems become a supplement rather than the primary means of staying comfortable.",
        ],
      },
      {
        heading: "Orientation and shading",
        body: [
          "North-facing living areas are the goal. Northern sun is high in summer and easily shaded by an eave, and low in winter where it provides useful warmth. Western glazing is the opposite — low afternoon sun that is difficult to shade and delivers heat at the hottest part of the day.",
          "Where western exposure is unavoidable, the answer is external shading rather than glass performance alone. Once sun has passed through the glazing, the heat is inside. Awnings, screens, deep verandahs and landscaping all work; internal blinds do comparatively little.",
          "Eave depth is worth calculating rather than defaulting. An eave designed for the site's latitude blocks summer sun and admits winter sun on the same window.",
        ],
      },
      {
        heading: "Ventilation and layout",
        body: [
          "Cross-ventilation is the traditional Queensland answer to summer heat, and it still works. It requires openings on opposite sides of the space, an unobstructed path between them, and a plan that does not block airflow with a corridor of closed doors.",
          "High-level openings help hot air escape, and ceiling fans extend the comfortable temperature range significantly for a fraction of the running cost of air conditioning.",
          "Ceiling height matters too. Higher ceilings let warm air rise above the occupied zone, which is why older Queenslanders remain comfortable without mechanical cooling.",
        ],
      },
      {
        heading: "Insulation, glazing and the building envelope",
        body: [
          "Roof and ceiling insulation delivers the most benefit in this climate because the roof takes the greatest heat load. Roof colour and ventilation of the roof space both contribute as well.",
          "Glazing performance matters most on unshaded windows. Where a window is properly shaded, standard glazing may be sufficient; where it is exposed, performance glass earns its cost. Specifying high-performance glass across the whole house regardless of orientation is a common way to spend money without proportional benefit.",
          "Sealing the envelope against air leakage is the least visible measure and one of the more effective ones. Gaps around penetrations, downlights and junctions undermine insulation that has been paid for.",
        ],
      },
      {
        heading: "Systems and running costs",
        body: [
          "Once the building envelope is doing its job, the systems can be sized realistically. An efficient air conditioning system sized to a well-designed house costs less to install and far less to run than a large system compensating for a poor envelope.",
          "Hot water is often the largest single energy use in a home. Heat pump and solar hot water systems both suit the Queensland climate well.",
          "Solar generation pairs naturally with a subtropical climate, where the peak cooling load and peak generation broadly coincide. Planning roof space and orientation for panels at design stage is easier than retrofitting around an existing roof layout.",
        ],
      },
    ],
  },
  {
    slug: "building-on-a-small-lot-brisbane",
    title: "Building on a Small Lot: Getting More From a Narrow Block",
    description:
      "Design strategies for narrow and small lots in South East Queensland — setbacks, light, privacy, parking, and the plan decisions that make a compact home feel generous.",
    date: "2026-08-01",
    readTime: "5 min read",
    image: "/assets/images/stock/townhouse-construction-new.jpg",
    category: "Custom Builds",
    content: [
      {
        heading: "Small lots are a design problem, not a compromise",
        body: [
          "Infill development and subdivision have made narrow lots common through inner and middle-ring South East Queensland suburbs. They deliver location at a lower land cost, and the trade-off is that the house has to work harder.",
          "A well-designed compact home on a good street beats a poorly planned large one further out for most buyers. The determining factor is whether the plan was designed for the lot or adapted from a wider one.",
          "Standard project home plans rarely translate well. They assume side setbacks and window positions that a narrow lot cannot provide.",
        ],
      },
      {
        heading: "Getting light into a narrow plan",
        body: [
          "The central problem on a narrow lot is that the long side walls are close to the boundaries, which limits where windows can go and what they can look at. Rooms in the middle of the plan risk having no natural light at all.",
          "Courtyards, light wells, skylights and high-level clerestory windows are the standard responses. A small internal courtyard placed correctly can light and ventilate several rooms at once, and it costs less floor area than most people expect.",
          "Double-height voids over living areas bring light down from the upper level and make a narrow space feel considerably larger. They cost floor area on the upper level, so they need to be a deliberate trade rather than a default.",
        ],
      },
      {
        heading: "Privacy and boundary relationships",
        body: [
          "On a narrow lot your neighbours are close, and window-to-window alignment is the most common privacy failure. Offsetting window positions from the adjoining dwelling, using high-level glazing in bedrooms, and orienting outdoor living away from the shared boundary all help.",
          "Planning schemes generally include privacy provisions for windows and balconies near boundaries, so these decisions are partly regulated and partly design judgement.",
          "Acoustic separation matters too, particularly on attached or near-boundary walls. Getting the wall construction right during design costs far less than trying to improve it afterwards.",
        ],
      },
      {
        heading: "Parking, storage and the practical details",
        body: [
          "Parking consumes a large proportion of a small lot's frontage, and how it is handled affects the whole street presentation. A garage that dominates the facade makes a home look smaller than it is.",
          "Storage is the thing most often sacrificed on compact plans and most missed afterwards. Built-in joinery, considered laundry design, under-stair space and a genuine linen provision are worth planning early rather than adding later.",
          "Outdoor space should be usable rather than leftover. A single well-proportioned, well-shaded courtyard connected to the living area beats several narrow strips of unusable yard around the perimeter.",
          "If you are looking at a narrow block and want to know what it can realistically accommodate, we are happy to review the lot and the planning controls before you commit.",
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
