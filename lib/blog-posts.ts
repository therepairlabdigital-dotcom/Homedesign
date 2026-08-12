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
  {
    slug: "cost-to-build-a-duplex-brisbane",
    title: "What Does It Cost to Build a Duplex in Brisbane?",
    description:
      "The cost drivers that actually decide a Brisbane duplex budget — site conditions, approvals, services and specification — and where investors most often get caught.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/stock/duplex-modern-dual.jpg",
    category: "Duplexes",
    content: [
      {
        heading: "Why nobody can quote you a number over the phone",
        body: [
          "The first thing to understand about duplex costing is that the building is often the predictable part. Two dwellings of a given size, to a given specification, cost roughly what two dwellings of that size should cost. What moves a Brisbane duplex budget by six figures is everything around the building.",
          "Site conditions, required approvals, service connections and title path account for most of the variance between two projects that look identical on paper. A builder quoting a rate per square metre before seeing the block is quoting a hypothetical.",
          "That is not evasiveness. It is the difference between a number you can plan around and a number that gets corrected during construction, when correcting it is most expensive.",
        ],
      },
      {
        heading: "Site conditions: the largest single variable",
        body: [
          "Soil classification under AS 2870 is the biggest one. Much of Brisbane sits on reactive clay, and a site classified H1 or H2 requires an engineered footing system — a stiffened raft or piered slab — rather than a conventional slab. Across two dwellings, that difference compounds.",
          "Slope is next. A cross-fall across the block means retaining, cut and fill, drainage design and often a split-level approach. Retaining walls near a boundary can also require engineering and neighbour agreement.",
          "Then access. A duplex needs concrete trucks, cranes and material deliveries on a site that may have a single narrow frontage and neighbours a metre away. Where a pump is required instead of direct discharge, that is a per-pour cost across the whole project.",
          "None of these are avoidable by choosing a different builder. They are functions of the ground and the geometry, and the only real choice is whether they appear in your first estimate or your final invoice.",
        ],
      },
      {
        heading: "Approvals and holding costs",
        body: [
          "Most Brisbane duplexes need a development approval before building approval. Whether the proposal is code assessable or impact assessable changes both the timeframe and the risk, because impact assessable proposals go to public notification and can attract submissions.",
          "Approval time is a real cost when construction finance is involved. Every additional month is interest on a property producing no income. Investors routinely budget the build and forget the holding cost of a longer approval.",
          "Consultant fees also add up: town planner, surveyor, engineer, energy assessor, and building certifier. Individually modest, collectively significant, and almost always underestimated in a first budget.",
        ],
      },
      {
        heading: "Services — the item that sinks projects",
        body: [
          "Sewer alignment is the one to check first. If the sewer runs across the middle of your block, building over or near it requires approval and specific construction measures, and in some cases the main has to be relocated. That single item can consume an entire project margin.",
          "Stormwater discharge is the second. Every site needs a legal discharge point, and where the natural fall goes the wrong way the solution may involve an inter-allotment drainage easement — which means negotiating with a neighbour.",
          "Water meter sizing and electrical supply capacity round it out. Two dwellings need more of both than one, and in older suburbs the existing infrastructure sometimes cannot deliver it without an upgrade.",
          "We check all four before design on any duplex project. They are cheap to establish and catastrophic to discover late.",
        ],
      },
      {
        heading: "Specification: match it to the exit",
        body: [
          "The right specification depends entirely on what you intend to do with the property. If you are holding and renting, durability beats luxury — hard-wearing floors, robust joinery and fittings that survive tenant turnover. If you are selling to owner-occupiers, the kitchen, bathrooms and outdoor living are what buyers compare.",
          "Over-specifying a rental duplex is the most common way investors lose money on an otherwise sound project. Under-specifying one intended for sale is the second.",
          "The items worth paying for in every case are acoustic separation between the dwellings, real storage, and genuinely usable private outdoor space. These drive both rental performance and resale, and none can be added after the walls close.",
        ],
      },
      {
        heading: "How to get a number you can rely on",
        body: [
          "Send the address before you buy, not after. A property report, a look at the zone and the frontage, and a check on where the sewer runs will tell you more about the project's viability than any amount of floor plan discussion.",
          "Then get a soil test and a survey before design. They cost very little relative to the redesign that follows a wrong assumption.",
          "A fixed-price contract is only meaningful when the scope behind it is complete — full working drawings, engineering and a documented selections schedule. A low contract price with a thin specification is not a saving, it is a deferral.",
          "If you are weighing up a Brisbane site, our <a href=\"/locations/brisbane/duplex-townhouses\">Brisbane duplex and townhouse page</a> sets out how we assess feasibility, and we are happy to review a block before you commit to it.",
        ],
      },
    ],
  },
  {
    slug: "reactive-clay-soil-brisbane-footings",
    title: "Reactive Clay Soil in Brisbane: What It Does to Your Footing Budget",
    description:
      "Why two identical houses on the same Brisbane street can differ by tens of thousands in footing cost, how AS 2870 site classification works, and when to get the soil test.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.jpg",
    category: "Cost & Budget",
    content: [
      {
        heading: "The cost nobody mentions until slab stage",
        body: [
          "Clients regularly ask why one builder's quote is well below another's for what looks like the same house. Often the answer is that one of them has a soil test and the other has an assumption.",
          "Large parts of Brisbane sit on reactive clay — soil that expands when it takes on moisture and contracts when it dries out. That movement is seasonal, it is significant, and a slab that is not designed for it will crack, along with the walls sitting on top of it.",
          "The engineering response is a footing system stiff enough to resist that movement. It costs considerably more than a conventional slab, and it is not optional.",
        ],
      },
      {
        heading: "How site classification works",
        body: [
          "Australian Standard AS 2870 sets out how residential sites are classified for footing design. A geotechnical engineer takes bore samples, assesses the soil profile, and assigns a classification based on the expected surface movement.",
          "Stable sand and rock sites sit at the low end and take a straightforward slab. Moderately reactive clay sites need more. Highly reactive sites need a stiffened raft with deeper beams and more reinforcement, or a piered system taking the load down to stable material.",
          "Sites with uncontrolled fill, previous excavation, or abnormal moisture conditions fall into a category that needs specific engineering rather than a standard solution — and these turn up more often than people expect on blocks that have been subdivided or previously built on.",
        ],
      },
      {
        heading: "Why the existing house tells you nothing",
        body: [
          "This is the trap in knockdown rebuild projects. Owners reasonably assume that because the old house has stood for sixty years without problems, the ground must be fine.",
          "Old Queenslanders and post-war homes are typically on stumps or piers. A stumped house tolerates ground movement because the structure is flexible and individual stumps can be adjusted. A concrete slab cannot. It is a single rigid element, and reactive ground under it has nowhere to go.",
          "So a block that has happily supported a timber house on stumps for decades may still be classified as highly reactive, and the slab for the replacement house may need an engineered footing system costing several times a standard slab.",
        ],
      },
      {
        heading: "Trees, drainage and moisture",
        body: [
          "Large trees near a building make reactive soil worse. They draw moisture out of the clay in dry periods, causing localised shrinkage, and when they are removed the soil rehydrates and swells. Both movements are uneven, which is what causes damage.",
          "Poor drainage produces the same problem from the other direction. Water pooling against one side of a slab keeps that clay expanded while the other side dries, and differential movement follows.",
          "This is why site drainage, downpipe discharge and paving falls are not finishing details. On a reactive site they are part of the structural strategy, and getting them wrong can undo an expensive footing system.",
        ],
      },
      {
        heading: "When to get the test",
        body: [
          "Before design, and ideally before purchase if you have the option. A soil test costs a small fraction of what an engineered footing system costs, and knowing the classification early lets you make sensible decisions about house size, siting and budget.",
          "If you are comparing builder quotes, ask each one what site classification they have priced to. If they cannot tell you, they have not priced your block — they have priced a generic one, and the difference will appear as a variation.",
          "We get the soil test done before quoting on every project. It makes our first number slower to produce and much more likely to be the number you actually pay. If you are weighing up a site, our <a href=\"/locations/brisbane/custom-builds\">Brisbane custom build page</a> covers how we work through site conditions before design.",
        ],
      },
    ],
  },
  {
    slug: "character-overlay-brisbane-what-it-restricts",
    title: "Building in a Brisbane Character Overlay: What Is Actually Restricted",
    description:
      "What the Traditional Building Character Overlay controls, what it leaves alone, and why the back of the house is where inner-Brisbane renovations are won.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "The overlay is about the street, not the house",
        body: [
          "The most useful thing to understand about Brisbane's Traditional Building Character Overlay is what it is actually trying to protect. It is not trying to preserve your floor plan, your kitchen, or the back half of your house. It is trying to preserve what the street looks like.",
          "That single distinction explains most of what follows. The overlay is concerned with roof form, the verandah, front setback, window proportions, materials and the rhythm of buildings along the street. It is far less concerned with what happens behind that.",
          "Owners who treat the overlay as a blanket prohibition give up on projects that would have been approved. Owners who ignore it entirely spend money on designs that get refused.",
        ],
      },
      {
        heading: "The 1947 line",
        body: [
          "The overlay applies to houses built before 1947, in areas identified under Brisbane City Plan. The date is not arbitrary — it separates the pre-war timber-and-tin housing stock that defines inner Brisbane from the post-war construction that followed.",
          "Where the overlay applies, demolition is heavily restricted. Assessment considers whether the building contributes to the character of the street, and a house that does is unlikely to be approved for removal.",
          "If you are buying with a knockdown rebuild in mind, this is the check to do before you sign a contract, not after. The council property report will tell you whether the overlay applies, and it is a free search.",
        ],
      },
      {
        heading: "What you can generally do",
        body: [
          "Rear extensions are the main opportunity. Because the overlay is focused on the street elevation, a contemporary addition at the back — open-plan living, a modern kitchen, northern glazing, connection to the yard — is usually achievable.",
          "Raising the house and building in underneath is also common and often the single best value move available on these blocks. It roughly doubles the floor area on land you already own, without touching the street presentation beyond the change in height.",
          "Internal reconfiguration is largely unrestricted. The overlay does not dictate where your bathrooms go.",
          "Sympathetic restoration of the front is generally encouraged. Reinstating a verandah, replacing aluminium windows with casements, and returning the roof form to its original profile all tend to help an application rather than hinder it.",
        ],
      },
      {
        heading: "Where applications get into trouble",
        body: [
          "The most common failure is a rear addition that overwhelms the original house — taller, wider, and visible from the street in a way that changes the reading of the building. The fix is usually setting the addition back and dropping its ridge below the original.",
          "The second is pastiche. Additions that imitate the original detailing but get the proportions wrong tend to read worse than a clean contemporary addition and can be harder to approve. Assessment generally prefers new work that is legibly new.",
          "The third is removing character elements without approval. Replacing timber windows with aluminium, enclosing a front verandah, or re-cladding in a modern sheet product can each constitute assessable work, and doing it first and asking later is an expensive sequence.",
        ],
      },
      {
        heading: "How to approach a character project",
        body: [
          "Pull the property report first and confirm exactly which overlay provisions apply to your address. Character areas and Demolition Control Precincts are not identical, and the difference matters.",
          "Then establish the permitted height before designing anything, because on a raise-and-build-under project that height determines your ground floor ceiling and therefore whether the new level is a home or a basement.",
          "Then design the street elevation to satisfy the overlay and spend your creative budget at the back, where you have room to move.",
          "This work rewards a builder who has done it before — nothing in a hundred-year-old house is square, and the surprises are structural rather than cosmetic. Our <a href=\"/locations/brisbane/queenslander-homes\">Brisbane Queenslander renovation page</a> goes through raise-and-build-under in more detail.",
        ],
      },
    ],
  },
  {
    slug: "bushfire-attack-level-bal-queensland",
    title: "What a BAL Rating Means for Your Queensland Build",
    description:
      "How Bushfire Attack Level assessment works under AS 3959, what each rating changes about construction, and why hinterland buyers should check it before purchase.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-landscape.jpg",
    category: "New Homes",
    content: [
      {
        heading: "The cost that arrives at building approval",
        body: [
          "If your block is in a bushfire hazard overlay — common through the Sunshine Coast hinterland, the Gold Coast hinterland, and bushland-fringe suburbs across South East Queensland — the site will be assessed for a Bushfire Attack Level.",
          "That rating drives construction requirements under Australian Standard AS 3959, and the difference between a low rating and a high one is a substantial and entirely unavoidable cost.",
          "Buyers regularly discover this at building approval stage, after the block is purchased and the design is drawn. It is checkable before purchase, and it should be.",
        ],
      },
      {
        heading: "How the rating is determined",
        body: [
          "A bushfire assessor looks at three things: the classification of the vegetation near the site, the distance from that vegetation to the proposed building, and the effective slope of the ground beneath it.",
          "Slope matters because fire travels faster uphill. The same vegetation at the same distance produces a higher rating on an upslope site than on flat ground.",
          "The output is a rating band, from the lowest exposure through to sites subject to direct flame contact. Each band steps up the construction requirements.",
        ],
      },
      {
        heading: "What changes at each level",
        body: [
          "At lower ratings the requirements focus on ember protection: sealing gaps, screening vents and weepholes, and preventing ember entry into the roof space and subfloor. This is relatively inexpensive.",
          "As the rating rises, glazing requirements increase — toughened glass, screened windows, and eventually fire-rated assemblies. Decks, external cladding, eaves, gutters and subfloor enclosure all come under progressively stricter requirements.",
          "At the highest ratings, the construction becomes specialised and expensive, and in some cases the practical answer is to site the building differently rather than build to that standard.",
          "That last point is the useful one. Where the block allows it, moving the building envelope further from the vegetation or onto flatter ground can drop the rating a band and save a great deal.",
        ],
      },
      {
        heading: "What it means for water and access",
        body: [
          "Bushfire-affected sites frequently carry additional requirements beyond the building itself. A dedicated firefighting water supply may be required, with specific tank capacity and fittings that emergency services can connect to.",
          "Access may also need to meet standards for width, gradient, surface and turning provision so that a fire appliance can reach the building and turn around. On a long hinterland driveway that can be a meaningful cost.",
          "Vegetation management around the building may be required on an ongoing basis, which is worth understanding before purchase if you bought the block for the trees.",
        ],
      },
      {
        heading: "Check it before you buy",
        body: [
          "The overlay itself is visible on the council property report, which is free to obtain. That tells you whether an assessment will be required.",
          "A preliminary assessment before purchase is inexpensive relative to what a high rating adds to a build, and it gives you the option to negotiate on price or walk away.",
          "We establish the rating before design on any site where the overlay applies, so the construction requirements appear in the first estimate rather than at approval. Our <a href=\"/locations/sunshine-coast/custom-builds\">Sunshine Coast custom build page</a> covers how we handle bushfire, slope and acreage services together.",
        ],
      },
    ],
  },
  {
    slug: "dual-occupancy-feasibility-checklist",
    title: "Dual Occupancy Feasibility: What to Check Before You Buy the Block",
    description:
      "The eight checks that decide whether a South East Queensland site supports a duplex — zone, frontage, services, title path and more — before you commit any money.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/stock/townhouse-construction-new.jpg",
    category: "Duplexes",
    content: [
      {
        heading: "Feasibility is a yes-or-no answer",
        body: [
          "The purpose of a feasibility check is to produce a straight answer: this site supports two dwellings of roughly this size, at roughly this cost, over roughly this program. Anything vaguer than that is not feasibility, it is optimism with a spreadsheet attached.",
          "The checks below cost very little and can all be done before you commit to a purchase. Skipping them is how investors end up owning a block that will not support the project they bought it for.",
        ],
      },
      {
        heading: "1. Zone and dual occupancy provisions",
        body: [
          "Start with what the planning scheme permits on the site. Each South East Queensland council has its own scheme — Brisbane City Plan, Gold Coast City Plan, the Logan and Ipswich schemes — and the provisions differ.",
          "The relevant question is not only whether dual occupancy is permitted in the zone, but whether it is code assessable or impact assessable. Impact assessable proposals go to public notification, which adds time, cost and the risk of submissions.",
          "In Ipswich there is an extra step: parts of the area, notably the Ripley Valley, sit in a Priority Development Area assessed by Economic Development Queensland rather than the council. Confirm which authority applies before anything else.",
        ],
      },
      {
        heading: "2. Frontage — the most common failure",
        body: [
          "Frontage kills more duplex projects than lot area does. It determines the driveway, the parking layout, the setbacks, and whether two dwellings can be arranged on the block at all.",
          "A site can comfortably satisfy the minimum lot size and still fail on frontage. Check it specifically rather than assuming that adequate area implies adequate width.",
        ],
      },
      {
        heading: "3. Sewer alignment",
        body: [
          "Find out where the sewer main runs. If it crosses the middle of the block, building over or near it requires approval and specific construction measures, and relocating a main is expensive enough to end a project.",
          "This information is obtainable from the water authority before purchase. It is the single highest-value check on this list relative to what it costs.",
        ],
      },
      {
        heading: "4. Stormwater discharge",
        body: [
          "Every site needs a legal point of stormwater discharge. Where the natural fall runs away from the street, the solution may require an inter-allotment drainage easement — which means negotiating with a neighbour who has no obligation to agree.",
          "Check where the water goes before you assume it goes somewhere.",
        ],
      },
      {
        heading: "5. Soil and fill",
        body: [
          "A geotechnical investigation establishes the site classification under AS 2870, which determines the footing system for both dwellings. Reactive clay is common across South East Queensland and an engineered footing system costs substantially more than a standard slab.",
          "Uncontrolled fill from earlier subdivision is a specific risk in some growth suburbs. It has to be either removed or spanned, and both cost money.",
        ],
      },
      {
        heading: "6. Overlays: flood, storm tide, bushfire",
        body: [
          "Flood and storm tide overlays set minimum habitable floor levels, and on a duplex those levels apply to both dwellings. A high required level changes slab height, driveway grade and sometimes the whole structural approach.",
          "Bushfire overlays trigger a BAL assessment with construction requirements attached. Both are visible on the council property report.",
        ],
      },
      {
        heading: "7. Services capacity",
        body: [
          "Two dwellings need more water and electrical capacity than one. In older suburbs the existing infrastructure sometimes cannot deliver it without an upgrade, and upgrade costs are borne by the developer, which is you.",
        ],
      },
      {
        heading: "8. Title path and exit",
        body: [
          "Decide before design whether you intend to hold both, sell both, sell one, or live in one. The answer changes the design, the specification and sometimes the structure.",
          "If the halves are to be sold separately, the survey plan and the subdivision or community titles path has to be planned from the start. Retrofitting a title split onto a design that was not built for one is expensive and occasionally impossible.",
          "We run these checks before design on every dual occupancy project, and we will tell you plainly when a site does not stack up. That conversation costs nothing — our <a href=\"/locations/brisbane/duplex-townhouses\">Brisbane duplex page</a> and <a href=\"/locations/logan/duplex-townhouses\">Logan duplex page</a> set out how the numbers differ by area.",
        ],
      },
    ],
  },
  {
    slug: "flood-levels-minimum-floor-height-seq",
    title: "Flood Levels and Minimum Floor Heights in South East Queensland",
    description:
      "How flood and storm tide overlays set minimum habitable floor levels, what that does to your design and driveway, and why it has to be checked before you draw anything.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-brick-twilight.jpg",
    category: "New Homes",
    content: [
      {
        heading: "A number that reshapes the whole house",
        body: [
          "If your block sits within a flood or storm tide overlay, the planning scheme will set a minimum level for habitable floors. That number is not a guideline and it is not negotiable through good design.",
          "It determines your slab height, which determines your entry sequence, your driveway grade, your step-down to the garage, your relationship to the street, and frequently whether a single-storey design works at all.",
          "Discovering the required level after the plans are drawn does not mean adjusting the design. It usually means redrawing it.",
        ],
      },
      {
        heading: "Where these overlays apply",
        body: [
          "In Brisbane, the flood overlays cover riverine flooding along the Brisbane River and its tributaries, creek flooding through the catchments, and overland flow paths that can affect blocks nowhere near obvious water.",
          "On the Gold Coast, flood is joined by storm tide along the coastal and canal areas, which reflects the combination of tide, surge and wave action rather than rainfall.",
          "Around Ipswich, the Bremer River and its tributaries drive the mapping. Across Moreton Bay, both the bay itself and the Caboolture River catchment matter.",
          "The overland flow category catches the most people out. A block can be well away from any river or creek and still sit in a path that water takes when the drainage system is overwhelmed.",
        ],
      },
      {
        heading: "What the level does to your design",
        body: [
          "The most immediate effect is that the house sits higher. On a modest required level that means more fill or a taller slab edge. On a significant one it means an elevated structure, a suspended floor, or a design that puts non-habitable uses at ground level and living above.",
          "The driveway then has to climb to meet the garage, and there are limits on how steep a driveway can be and how it transitions at the street. On a short setback, a high floor level and a legal driveway grade can be genuinely difficult to reconcile.",
          "Entry and accessibility follow. More steps to the front door, more retaining around the perimeter, and more attention needed to how the house meets the ground.",
          "Underneath all of it, more fill and more retaining means more cost, and it is cost that appears in earthworks and structure rather than in anything you can see when the house is finished.",
        ],
      },
      {
        heading: "It also affects insurance and resale",
        body: [
          "Flood mapping affects insurance availability and premium, and it affects how buyers assess the property later. Building above the required level rather than exactly at it is sometimes worth the extra cost for that reason alone.",
          "Buyers increasingly check flood mapping themselves before making an offer. A house that visibly sits well above the required level is easier to sell than one that just scrapes it.",
        ],
      },
      {
        heading: "Check it before you design",
        body: [
          "The council property report shows which overlays apply to an address, and the required levels can be confirmed from there. It is a free search and takes minutes.",
          "If you are buying, do it before you sign. If you already own, do it before you pay anyone to draw anything.",
          "We confirm the applicable levels before design on every project where an overlay applies, because it is one of the few inputs that can invalidate an entire design if it arrives late. Our <a href=\"/locations/gold-coast/new-home-builds\">Gold Coast new home page</a> and <a href=\"/locations/moreton-bay/new-home-builds\">Moreton Bay new home page</a> cover how this plays out in each area.",
        ],
      },
    ],
  },
  {
    slug: "cost-to-raise-a-queenslander",
    title: "What Does It Cost to Raise a Queenslander?",
    description:
      "The real cost components in a raise-and-build-under project — height limits, stumps, services, and the ground floor decisions that decide whether it was worth it.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "Why the quotes vary so much",
        body: [
          "Raising a Queenslander is one of the highest-value moves available on an inner-Brisbane block, and one of the hardest to price without inspecting the house. Two apparently similar Queenslanders on the same street can differ enormously, because the cost sits in things you cannot see from the footpath.",
          "The lift itself — jacking the house, installing new supports, and setting it at the new height — is a relatively predictable component. Everything around it is not.",
          "What varies is the condition of the existing structure, how much of the ground floor you are fitting out, what the services need, and how far the house is permitted to go up in the first place.",
        ],
      },
      {
        heading: "Height is decided for you, and it decides everything else",
        body: [
          "The permitted height comes from the overlay provisions, the building height limit for the zone, and the relationship to neighbouring buildings. It is not a design choice.",
          "That height then sets your ground floor ceiling. A generous height produces a genuine second living level. A constrained one produces a space that reads as a basement no matter how it is finished, and no amount of specification rescues it.",
          "This is why the sequence matters so much. Establish the permitted height first, then decide whether the project is worth doing, then design to the space you actually have. Designing a floor plan and discovering the height afterwards is the most common and most expensive mistake in this work.",
        ],
      },
      {
        heading: "What the existing structure adds",
        body: [
          "Stumps are the first item. Timber stumps at the end of their life have to be replaced, and on a house being lifted, the new supports are engineered rather than like-for-like replacements.",
          "Bearers and floor joists come next. A house cannot be lifted safely if the structure carrying it has gone, and in older Queenslanders termite damage and rot in the sub-floor are common enough to assume until proven otherwise.",
          "Previous modifications are the wildcard. Many Queenslanders have been altered over a century — enclosed verandahs, added rooms, replaced sections — sometimes without approval and often without engineering. Each one has to be assessed and frequently corrected.",
          "This is why a structural assessment before design is not optional. It is the difference between a fixed price and a sequence of variations.",
        ],
      },
      {
        heading: "Services are a full replacement, not a patch",
        body: [
          "Old Queenslanders routinely carry wiring well past its service life, undersized switchboards with no capacity for a second level, failing galvanised plumbing, and no insulation anywhere.",
          "Budget for full replacement of electrical and plumbing services rather than extending what is there. Extending an inadequate system into a new floor is a false economy that shows up as a fault a year later.",
          "The new ground floor also needs its own drainage, and where the house is being lifted, the existing sewer connection may need to be reworked to suit the new levels.",
        ],
      },
      {
        heading: "The ground floor is where the budget actually goes",
        body: [
          "Lifting the house is the headline. Fitting out the space underneath is where most of the money goes — slab, walls, insulation, windows, doors, a bathroom, often a kitchenette or second living area, and finishes throughout.",
          "The decisions that most affect the result are daylight and the stair. A ground floor lit only from the front and back feels like a corridor, so light wells, a re-planned rear opening and careful use of the side setbacks matter enormously.",
          "The stair is the most expensive square metre in the house and the most commonly misplaced. Put it where it connects both levels without consuming the northern light or splitting the living space.",
        ],
      },
      {
        heading: "Is it worth it?",
        body: [
          "On an inner-Brisbane character block, usually yes. You roughly double the floor area on land you already own, in a suburb where land is the expensive part, and you keep the character that drives resale in those streets.",
          "In a character area you may not have the alternative anyway, because demolition of a pre-1947 house is restricted and frequently refused.",
          "The honest answer depends on the permitted height and the condition of the structure, both of which are checkable before you commit. Our <a href=\"/locations/brisbane/queenslander-homes\">Brisbane Queenslander renovation page</a> sets out how we assess both, and we are happy to look at a house before you buy it.",
        ],
      },
    ],
  },
  {
    slug: "development-approval-vs-building-approval-qld",
    title: "Development Approval vs Building Approval in Queensland",
    description:
      "Two different approvals, two different assessors, two different timeframes — and why confusing them is one of the most common causes of program delay.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.jpg",
    category: "Choosing a Builder",
    content: [
      {
        heading: "They are not the same thing",
        body: [
          "Clients frequently use the phrase \"council approval\" as though it describes a single event. In Queensland it usually describes two separate processes, assessed against different criteria, often by different people, on different timeframes.",
          "Development approval is about land use and planning. Building approval is about construction standards. You can hold one and still be unable to start.",
          "Understanding which your project needs, and in what order, is the difference between a program that runs and one that stalls for months.",
        ],
      },
      {
        heading: "Development approval: can you do this here?",
        body: [
          "Development approval is assessed against the local planning scheme — Brisbane City Plan, Gold Coast City Plan, the Logan, Ipswich or Sunshine Coast schemes, and so on. It considers whether the proposed use and built form are acceptable at that location.",
          "Zone, density, height, setbacks, site cover, private open space, car parking, overlays and streetscape all get assessed here. A single dwelling on a straightforward suburban block frequently does not need one. A dual occupancy usually does. Work in a character overlay generally does.",
          "The critical distinction within development approval is whether the proposal is code assessable or impact assessable. Code assessable proposals are measured against the relevant codes. Impact assessable proposals go to public notification, which means neighbours can make submissions, and submissions carry appeal rights. That difference can add months.",
        ],
      },
      {
        heading: "Building approval: is it built properly?",
        body: [
          "Building approval is assessed against the National Construction Code and the relevant Australian Standards. It considers structural adequacy, fire safety, health and amenity, energy efficiency, and access.",
          "In Queensland this is generally handled by a private building certifier rather than the council. The certifier issues the approval, carries out mandatory inspections at defined stages, and issues the final certificate at completion.",
          "Building approval cannot be issued in a way that conflicts with a development approval. If your project needs both, the development approval comes first, and the building approval must be consistent with it.",
        ],
      },
      {
        heading: "The other approvals people forget",
        body: [
          "Plumbing and drainage work generally requires its own approval and inspections. Demolition may need approval in its own right, and in a character area that approval is far from guaranteed.",
          "Operational work — earthworks, retaining above certain heights, vegetation clearing, driveway crossovers — can require separate approval depending on the scheme and the site.",
          "In a Priority Development Area, such as the Ripley Valley near Ipswich, the assessment runs under a development scheme administered by Economic Development Queensland rather than the council entirely. Different rules, different process.",
        ],
      },
      {
        heading: "How to keep the program moving",
        body: [
          "Establish early which approvals your project actually needs, and whether the development application is code or impact assessable. That single question drives your program more than any other.",
          "Get the site information — survey, soil test, property report — before design, because information requests during assessment are a common and entirely avoidable cause of delay.",
          "Do not sign a construction contract with a start date that assumes an approval you do not yet hold. And do not let anyone start work that requires an approval that has not issued, because unapproved work has to be either approved retrospectively or removed.",
          "We manage this sequence as part of the project. Our <a href=\"/locations/brisbane/duplex-townhouses\">Brisbane duplex page</a> covers how the assessment path affects a dual occupancy program specifically.",
        ],
      },
    ],
  },
  {
    slug: "what-are-site-costs-building-quote",
    title: "What Are Site Costs, and Why Were They Not in My Quote?",
    description:
      "The line items that turn an attractive advertised price into a much larger final number, and how to get them priced properly before you sign anything.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.jpg",
    category: "Cost & Budget",
    content: [
      {
        heading: "The gap between the advertised price and the real one",
        body: [
          "Advertised build prices generally describe a house on a hypothetical block: flat, stable soil, services at the boundary, clear access, no overlays. Very few real blocks are that block.",
          "Everything required to make your actual site buildable falls under what the industry calls site costs, and on a difficult block they can add a substantial fraction to the total.",
          "This is not automatically dishonest. It becomes dishonest when a builder knows the site costs will be significant, prices them as a token allowance to win the job, and adjusts later when you are committed.",
        ],
      },
      {
        heading: "What is actually in a site cost",
        body: [
          "Footings are usually the largest component. The site classification under AS 2870 determines whether you need a conventional slab or an engineered system, and reactive clay across much of South East Queensland pushes many sites into the expensive category.",
          "Earthworks and retaining follow. A cross-fall means cut and fill, retaining walls, and drainage design, and retaining near a boundary may need engineering and neighbour agreement.",
          "Service connections come next: water, sewer, electricity, stormwater, and gas where used. Distance to the connection point, and whether the existing infrastructure has capacity, both matter.",
          "Then demolition where an existing house is involved, including licensed asbestos removal. Then access — whether concrete trucks and cranes can reach the work, or whether pumping and smaller loads are required.",
          "Finally, anything an overlay imposes: a higher floor level for flood, bushfire construction requirements from a BAL assessment, or vegetation constraints on where the house can sit.",
        ],
      },
      {
        heading: "Why some builders leave them out",
        body: [
          "Partly because a lower headline number wins more enquiries, and partly because pricing site costs properly requires investigation the builder has to pay for before they have a signed contract.",
          "A soil test, a survey and a property report cost real money, and a builder quoting five jobs to win one has an obvious incentive to skip them and use an allowance instead.",
          "The result is a quote that looks competitive and is not comparable to a quote that includes properly investigated site costs. Comparing the two on price alone is comparing different things.",
        ],
      },
      {
        heading: "How to compare quotes fairly",
        body: [
          "Ask every builder what site classification they have priced to, and whether they have a soil test for your block or are using an assumption. If it is an assumption, the quote is provisional regardless of what it says at the top.",
          "Ask what the allowance is for earthworks and retaining, and whether it is based on a survey. Ask how service connections are priced and whether the distances have been confirmed.",
          "Ask which items are provisional sums or prime cost items, and what happens if the actual cost exceeds them. Provisional sums are where an optimistic quote quietly becomes an expensive one.",
          "A quote with a small number of specific provisional sums is normal. A quote with broad allowances covering most of the site work is not a fixed price in any meaningful sense.",
        ],
      },
      {
        heading: "What we do instead",
        body: [
          "We complete the site investigation before quoting — soil test, survey and property report — so the footing system, the earthworks and the overlay requirements are in the first number you see.",
          "It makes our estimate slower to produce and occasionally higher than a competitor's opening figure. It also makes it far more likely to be the number you actually pay, which is the only comparison that matters at the end.",
          "If you are weighing up quotes on a specific block, we are happy to look at what you have been given and tell you what is missing. Our <a href=\"/locations/brisbane/new-home-builds\">Brisbane new home page</a> sets out the four checks we complete before pricing.",
        ],
      },
    ],
  },
  {
    slug: "volume-builder-or-custom-builder",
    title: "Volume Builder or Custom Builder: Which Suits Your Block?",
    description:
      "An honest comparison of the two models — what each does well, what each costs, and the block and brief conditions that should push you toward one or the other.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-twilight.jpg",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Two different products, not two grades of the same one",
        body: [
          "A volume builder sells a refined product: a plan built many times, with established supplier pricing, a known program, and a process designed for repeatability. A custom builder sells a process: a house designed for one site and one brief.",
          "Neither is better in the abstract. They suit different situations, and the mistake is buying one when your circumstances call for the other.",
          "We are a custom builder, and the honest position is that on some blocks a volume builder will beat us on price for a result you would be perfectly happy with. It is worth knowing which situation you are in.",
        ],
      },
      {
        heading: "When a volume builder is the right answer",
        body: [
          "A flat, stable, serviced block in a new estate, with no significant overlays and no demolition, is the situation the volume model was built for. If a standard plan genuinely suits your family and your block, you will get a competent house at a price a custom builder cannot match.",
          "If the timeline matters more than the specifics, the volume model is also generally faster, because the plan is already documented and the trades already know it.",
          "And if you are building to rent or to sell in a corridor where the comparable sales do not reward extra specification, the disciplined cost control of the volume model is an advantage rather than a compromise.",
        ],
      },
      {
        heading: "When the volume model struggles",
        body: [
          "Sloping blocks, narrow frontages, awkward orientation and challenging access are all situations where a standard plan has to be modified until the savings disappear and the compromises remain.",
          "Overlays are the other trigger. A character overlay, a significant flood level, a high bushfire rating or vegetation constraints all impose requirements that a plan library was not drawn around.",
          "Established blocks with existing houses, mature trees and neighbours on both sides also tend to defeat the model, because the standard process assumes a clear site.",
          "And if your brief is genuinely specific — multi-generational living, a home office that actually works, a response to a particular view or breeze — a customisation menu will get you close and not all the way.",
        ],
      },
      {
        heading: "The differences that show up during the build",
        body: [
          "Site management is the practical one. In a volume operation a supervisor typically runs many jobs at once, which works when everything is standard and is tested when it is not. On a custom build the person managing the site is managing far fewer projects.",
          "Variations behave differently too. In a volume contract the plan is fixed and changes are expensive by design, which is part of how the price is held. On a custom build changes are more feasible, which is an advantage and also a discipline you have to impose on yourself.",
          "Selections work differently. Volume builders offer defined ranges with upgrade pricing. Custom builds are specified item by item, which gives more control and requires more decisions from you.",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "Look at your block first. If it is flat, clear, serviced and unencumbered by overlays, get quotes from both and compare honestly. If it slopes, sits under an overlay, has an existing house on it, or has an unusual shape, the custom path will usually cost less than a heavily modified standard plan.",
          "Then look at your brief. If you can see a standard plan that genuinely suits how you live, that is a real answer and you should take it.",
          "Whichever way you go, check the QBCC licence, confirm the deposit does not exceed the 5 per cent cap for contracts over $20,000, and read what the provisional sums cover. Those apply equally to both models.",
          "If you want a straight opinion on which suits your situation, send us the address and the brief. Our <a href=\"/locations/brisbane/custom-builds\">Brisbane custom build page</a> sets out how we assess a site, and we will tell you if we are not the right builder for it.",
        ],
      },
    ],
  },
  {
    slug: "building-on-acreage-queensland",
    title: "Building on Acreage in Queensland: Water, Wastewater and Access",
    description:
      "The three costs that separate an acreage build from a suburban one, plus bushfire, power and the driveway question nobody budgets for.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-landscape.jpg",
    category: "Custom Builds",
    content: [
      {
        heading: "The block is cheaper. The build is not.",
        body: [
          "Acreage buyers often arrive with a budget shaped by suburban comparisons: land cost per square metre looks favourable, so the overall project looks affordable.",
          "The gap appears in everything the suburban block gets for free. Reticulated water, sewer, a short power connection, a sealed road to the boundary and a flat approach are all included in a suburban land price and none are guaranteed on acreage.",
          "None of these are unmanageable. All of them need to be in the budget from the beginning rather than discovered at construction.",
        ],
      },
      {
        heading: "Water",
        body: [
          "Outside reticulated supply, the house runs on rainwater. Tank capacity has to be sized to the roof catchment, the household demand and the local rainfall pattern, with enough reserve for a dry stretch.",
          "Where a bushfire hazard overlay applies, a dedicated firefighting reserve may be required, with specific fittings that emergency services can connect to. That is capacity on top of household use, not part of it.",
          "Pumps, filtration and first-flush systems add cost, and the tank location affects both plumbing runs and how the site looks. It is worth designing rather than adding at the end.",
        ],
      },
      {
        heading: "Wastewater",
        body: [
          "Without sewer, the property needs an on-site wastewater treatment system, and it has to be designed for the soil conditions, the household size and the land available for disposal.",
          "That design requires a site and soil evaluation, and the land application area has to be genuinely available — clear of the building, the driveway, the tanks and any protected vegetation. On a constrained block this can influence where the house goes.",
          "These systems require council approval and ongoing servicing. Both belong in the project budget and the running-cost expectation.",
        ],
      },
      {
        heading: "Access",
        body: [
          "The driveway is the item most consistently underestimated. A long approach over sloping ground needs grading, drainage, culverts where it crosses a watercourse, and a surface that will carry a concrete truck rather than a car.",
          "If a truck cannot reach the slab, the alternatives are pumping, smaller loads or upgrading the access, and all three cost money per delivery rather than once.",
          "Where a bushfire overlay applies, access may also have to meet standards for width, gradient and turning provision so that a fire appliance can reach the building and turn around. That can drive the driveway specification well beyond what you would otherwise build.",
        ],
      },
      {
        heading: "Power, bushfire and the rest",
        body: [
          "Where the connection point is distant, extending supply can be a significant cost, and a standalone system is sometimes the better answer. Either way it is a decision to make at feasibility, not at construction.",
          "Bushfire rating drives construction requirements under AS 3959 for glazing, decks, screens, eaves and cladding. Where the block allows it, siting the building further from vegetation or on flatter ground can drop the rating a band and save a great deal.",
          "Soil classification still applies, and acreage sites are no more likely to be stable than suburban ones. A geotechnical investigation determines the footing system.",
          "We establish all of this before design on acreage projects. Our <a href=\"/locations/sunshine-coast/custom-builds\">Sunshine Coast custom build page</a> covers how bushfire, slope and rural services interact on hinterland blocks.",
        ],
      },
    ],
  },
  {
    slug: "check-overlays-on-your-block-before-you-buy",
    title: "How to Check the Overlays on a Block Before You Buy",
    description:
      "A short pre-purchase checklist for South East Queensland land — flood, bushfire, character, vegetation and infrastructure — using searches that are free or close to it.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.jpg",
    category: "Cost & Budget",
    content: [
      {
        heading: "Almost everything expensive is knowable in advance",
        body: [
          "The costly surprises in residential construction are rarely genuine surprises. Flood levels, bushfire ratings, demolition restrictions, vegetation constraints and sewer alignments are all recorded, and most can be checked before you make an offer.",
          "The reason people get caught is sequence. They buy, then design, then discover. Reversing the first two steps costs very little and occasionally saves the entire project.",
          "Here is what to check and roughly what each one tells you.",
        ],
      },
      {
        heading: "1. The council property report",
        body: [
          "Every South East Queensland council publishes property information showing the zone and the overlays applying to an address. It is free, it takes minutes, and it is the single most useful document in this list.",
          "It will tell you whether flood, bushfire, character, heritage, vegetation or coastal hazard overlays apply. Each one carries consequences ranging from a higher floor level to a restriction on demolishing the existing house.",
          "Read it before you make an offer, not during the cooling-off period when you are already emotionally committed.",
        ],
      },
      {
        heading: "2. Flood and overland flow",
        body: [
          "If flood mapping applies, find out the required minimum habitable floor level. That number determines slab height, driveway grade and sometimes whether a single-storey design is viable.",
          "Do not assume that distance from a river means safety. Overland flow paths — the routes water takes when the drainage system is overwhelmed — affect blocks nowhere near an obvious watercourse.",
          "Flood mapping also affects insurance availability and premium, and how buyers assess the property when you eventually sell.",
        ],
      },
      {
        heading: "3. Bushfire hazard",
        body: [
          "If a bushfire overlay applies, the site will need a Bushfire Attack Level assessment under AS 3959, and the resulting rating drives requirements for glazing, decks, screens, eaves and cladding.",
          "A high rating adds substantial, unavoidable cost. A preliminary assessment before purchase is inexpensive relative to what that adds, and it gives you room to negotiate or walk.",
          "Bushfire overlays may also impose access and water supply requirements, which matter most on acreage.",
        ],
      },
      {
        heading: "4. Character, heritage and demolition",
        body: [
          "If you are buying with a knockdown rebuild in mind, this is the check that decides whether your plan is possible. In Brisbane, pre-1947 houses in character areas and Demolition Control Precincts are protected, and approval to demolish is far from guaranteed.",
          "Where demolition is restricted, the project becomes a raise-and-build-under or a renovation. That is often a good outcome, but it needs to be a decision rather than a discovery.",
          "Heritage listing, where it applies, is a stronger constraint again.",
        ],
      },
      {
        heading: "5. Vegetation and habitat",
        body: [
          "Vegetation protection and, in some areas, koala habitat overlays restrict clearing and can determine where the building sits on the block. In parts of Redland City and elsewhere these constraints materially shape the building envelope.",
          "On a treed block this can decide whether the house you have in mind fits at all, and it affects driveway alignment and machinery access during construction.",
        ],
      },
      {
        heading: "6. Services and soil",
        body: [
          "Find out where the sewer main runs. If it crosses the block, building over or near it requires approval and specific measures, and relocating a main can end a project. The water authority holds this information.",
          "Confirm there is a legal stormwater discharge point. Where the fall runs the wrong way, the answer may involve an easement over a neighbour's land, and neighbours are not obliged to agree.",
          "A soil test gives you the site classification under AS 2870, which determines the footing system. On reactive clay the difference between a conventional slab and an engineered one is significant.",
          "We run these checks as a matter of course before design, and we are happy to look at a block you are considering before you commit to it. Our <a href=\"/locations/brisbane/knockdown-rebuild\">Brisbane knockdown rebuild page</a> covers the demolition question in more detail.",
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
