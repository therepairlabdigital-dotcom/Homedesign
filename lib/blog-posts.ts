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
    image: "/assets/images/stock/home-stucco-twostory.webp",
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
      {
        heading: "How long each stage really takes",
        body: [
          "Design and approvals commonly run three to six months in South East Queensland, depending on the council and whether a development application is needed as well as building approval. Character overlays, impact assessable proposals and information requests all extend that front end.",
          "Construction then commonly runs nine to fourteen months for a detached home. Earthworks and footings take two to four weeks, frame two to four, lock-up four to eight, fixing and services eight to fourteen, and completion three to six.",
          "The stage that most often runs over is fixing, because almost every trade in it is waiting on a client decision. Selections made late do not just delay their own item \u2014 they stop the work that depends on them.",
        ],
      },
      {
        heading: "What you should be doing at each stage",
        body: [
          "During design, make the structural and dimensional decisions: window and door positions, ceiling heights, stair configuration and where the wet areas sit. These are effectively fixed once the frame is up.",
          "Before the slab pour, check that the plumbing penetrations match your plan, because once concrete is placed they define where wet areas can go.",
          "At frame stage, walk the house. Room sizes and ceiling heights are visible for the first time, and changes are still relatively cheap. Once plasterboard goes on, moving a power point means opening a wall.",
          "Before handover, walk through with the builder and record every item needing attention in writing. A written list agreed at inspection is the difference between a defect and a disagreement.",
        ],
      },
      {
        heading: "What to confirm before you sign",
        body: [
          "Ask what site classification the footings were priced to and whether a soil test has been done for your block. If the answer is that it will be confirmed later, the largest single variable in your build is unpriced.",
          "Ask how many provisional sums and prime cost items the contract carries, what each covers, and what happens if the actual cost exceeds them. A handful of specific allowances is normal; broad allowances covering most of the site work are not a fixed price.",
          "Check the QBCC licence on the public register, confirm the class covers the value and type of work, and confirm the deposit does not exceed the 5 per cent cap that applies to domestic building contracts over $20,000.",
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
    image: "/assets/images/stock/duplex-modern-dual.webp",
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
      {
        heading: "The services checks that decide feasibility",
        body: [
          "Sewer alignment is the highest-value search available to you. If the main crosses the middle of the block, building over or near it requires water authority approval and specific construction measures, and relocating a main can consume an entire development margin.",
          "Stormwater discharge is next. Every site needs a legal discharge point, and where the natural fall runs away from the street the answer may require an inter-allotment drainage easement \u2014 which means negotiating with a neighbour who is not obliged to agree.",
          "Then water meter sizing and electrical supply capacity, because two dwellings need more of both than one, and in older suburbs the existing infrastructure does not always deliver it without an upgrade paid for by you.",
        ],
      },
      {
        heading: "Plan the title path before the design",
        body: [
          "If you intend to sell the halves separately, decide the title path at the start. A standard format subdivision divides the land and creates two ordinary lots, which is what buyers and valuers prefer. A building format plan creates a community titles scheme with a body corporate.",
          "The choice affects the survey, the services layout, the fire separation requirements for the common wall, and where eaves and footings can sit relative to the new boundary.",
          "Retrofitting a title split onto a building designed as single-title dual occupancy ranges from expensive to impossible. It is the most common costly mistake in small-scale development and it is entirely avoidable.",
        ],
      },
      {
        heading: "Program certainty when finance is attached",
        body: [
          "Most duplex projects carry construction finance, with funds released against progress claims at defined stages. Program slippage is therefore an interest cost on a property earning nothing, not merely an inconvenience.",
          "Insist on a fixed-price contract with a documented stage schedule so progress claims are predictable and certificates arrive when the lender expects them. Variations should be priced and approved in writing before work proceeds.",
          "Speak to your lender before committing, because some apply tighter criteria or lower valuations to dual occupancy on a single title, and that can change the numbers materially.",
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
    image: "/images/renovation-kitchen.webp",
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
      {
        heading: "The structural test",
        body: [
          "The honest test is structural rather than aesthetic. If the existing frame, roof and foundations are sound and the layout can be reworked without relocating everything, renovation usually wins on cost per square metre and on time.",
          "If the plan requires moving the kitchen, the bathrooms, the stairs and the external walls, you are approaching rebuild cost for a compromised result \u2014 new work stitched into old geometry, with the old constraints still setting the limits.",
          "Get a structural assessment before deciding. Stump and bearer condition, termite damage, previous unapproved modifications and the state of the services all change the answer, and none of them are visible from the street.",
        ],
      },
      {
        heading: "What the planning rules may decide for you",
        body: [
          "In parts of inner Brisbane, the decision is not yours to make. Pre-1947 houses in character areas and Demolition Control Precincts are protected, and approval to demolish is assessed against the contribution the building makes to the streetscape.",
          "Where demolition is restricted, the project becomes a raise-and-build-under or a renovation. That is frequently a better outcome anyway, but it needs to be established before you pay for a design.",
          "The council property report shows which overlays apply to an address. It is a free search and it should be the first step in this decision.",
        ],
      },
      {
        heading: "Compliance and running costs",
        body: [
          "A rebuild delivers a house built to current standards throughout, including the energy efficiency provisions now applying to new Queensland homes. A renovation only brings the parts you touch up to current requirements.",
          "That is often the right trade, particularly where the existing house is well oriented and structurally sound. It is the wrong trade where the existing house faces the wrong way, has no insulation and cannot be economically improved.",
          "Factor the running cost difference over a twenty-year horizon rather than comparing construction cost alone. A cheaper renovation that leaves a hot, poorly oriented house is not the saving it appears to be.",
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
    image: "/assets/images/stock/home-brick-twilight.webp",
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
    image: "/assets/images/stock/construction-frame-new.webp",
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
    image: "/assets/images/stock/home-single-modern.webp",
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
      {
        heading: "What extends the front end",
        body: [
          "Design and approvals commonly take three to six months, and the variance is mostly about which approvals apply. A single dwelling on a straightforward block may need only building approval. A dual occupancy, or work in a character overlay, generally needs development approval first.",
          "Whether a development application is code assessable or impact assessable is the single biggest program variable. Impact assessable proposals go to public notification, neighbours can make submissions, and submissions carry appeal rights.",
          "Information requests during assessment are the other common delay, and they are largely avoidable by having the survey, soil test and property searches complete before lodgement.",
        ],
      },
      {
        heading: "The delays that happen during construction",
        body: [
          "Weather is the obvious one. Earthworks cannot proceed on saturated ground, and in a South East Queensland wet season a bad week can cost two.",
          "Selections are the less obvious one and cause more delay overall. Windows, external doors, stone benchtops and certain tiles have lead times measured in months, and a decision made late stops every trade that depends on it.",
          "Service connections can also stall a program, particularly where an upgrade is required or the connection point is distant. Establishing this at feasibility rather than at construction avoids a wait with a finished house.",
        ],
      },
      {
        heading: "How to hold a builder to a program",
        body: [
          "Ask for a written construction programme at contract signing, with defined stages rather than a single completion date. Progress claims should align to those stages, which gives both of you a shared measure of where the project actually is.",
          "Ask what the contract says about extensions of time, what qualifies as one, and how they are notified. Weather extensions are legitimate and normal; vague open-ended clauses are not.",
          "Then keep your own decisions ahead of the program. The most common cause of an overrun that owners can actually control is a selection made three weeks after it was needed.",
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
    image: "/assets/images/stock/blueprint-keys.webp",
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
      {
        heading: "What the register actually tells you",
        body: [
          "The QBCC public register shows whether a licence is current, what class it is, and what the licence permits the holder to do. Licence class matters \u2014 a builder may be licensed for work of a particular type or value, and taking on work outside it is a problem for both of you.",
          "It also shows directorship history, which is worth reading. A pattern of companies that ceased trading is a meaningful signal, and it is the kind of thing that only shows up if you look.",
          "Check the name on the licence matches the entity on your contract. A trading name that differs from the licensed entity is not automatically a problem, but it is something to have explained before you sign.",
        ],
      },
      {
        heading: "Home warranty insurance",
        body: [
          "The QBCC Home Warranty Scheme covers residential building work above the statutory threshold for defined defects and non-completion. The builder pays the premium and it should appear in your contract documentation.",
          "Ask to see evidence that the premium has been paid for your job specifically. Cover is job-by-job, not a general licence attribute, and the absence of it is a serious warning sign.",
          "Note the notification timeframes in the scheme. If a significant defect appears, raising it promptly in writing matters, because missing the timeframe can affect your entitlement.",
        ],
      },
      {
        heading: "Beyond the licence check",
        body: [
          "Ask for addresses of recent completed projects and go and look at them. Ask to visit a current site \u2014 how a builder runs an active job tells you more than a portfolio does.",
          "Ask who will actually supervise your build and how many other jobs that person is running. In a volume operation one supervisor may run many sites at once, which works when everything is standard and is tested when it is not.",
          "Ask what the deposit is. For domestic building contracts over $20,000 in Queensland it is capped at 5 per cent, and a request for more should prompt a careful read of everything else.",
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
    image: "/assets/images/stock/home-luxury-landscape.webp",
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
      {
        heading: "Where the money goes on a slope",
        body: [
          "Retaining is usually the largest single item, and it scales sharply with height. A wall retaining half a metre is a garden structure; a wall retaining two metres is an engineered structure with footings, drainage and reinforcement, costing several times as much per metre.",
          "Earthworks follow. Cut and fill has to balance, or excess material has to be removed from site by truck, which on a tight block with nowhere to stockpile is an immediate cost.",
          "Footings step up too. A sloping site frequently needs deeper or piered footings, and where the slope combines with reactive clay the engineering requirement compounds.",
          "Then access \u2014 whether concrete trucks and cranes can reach the work, or whether pumping and smaller loads are required on every pour.",
        ],
      },
      {
        heading: "Drainage is what fails",
        body: [
          "Water moves downhill, and on a sloping site it moves toward your building. Most retaining wall failures are drainage failures rather than structural ones: water builds up behind the wall, pressure increases dramatically, and the wall moves.",
          "A properly built wall has drainage aggregate behind it, filter fabric so that aggregate does not silt up, and a subsoil drain at the base taking water to a legal discharge point. None of it is visible when finished and all of it is essential.",
          "Surface drainage matters equally \u2014 falls away from the building, adequately sized grated drains where a driveway falls toward a garage, and downpipes discharging well clear of footings.",
        ],
      },
      {
        heading: "Using the slope rather than fighting it",
        body: [
          "The best outcomes on sloping sites do not flatten them. Split-level plans that follow the natural fall reduce earthworks and retaining substantially compared to carving out a single level platform.",
          "Elevation is the reward. A house stepping down a slope gets outlook, natural cross-ventilation and undercroft space that a flat block cannot offer, and the living areas can open to the view rather than to a retaining wall.",
          "The design decision that matters most is where on the slope the house sits. Get that right and the cost falls; get it wrong and you pay to move earth for no benefit.",
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
    image: "/assets/images/stock/home-entry-detail.webp",
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
      {
        heading: "Where a fixed price stops being fixed",
        body: [
          "Two mechanisms let a fixed-price contract move: prime cost items and provisional sums. Prime cost items are allowances for products not yet selected \u2014 tapware, tiles, appliances \u2014 and you control the outcome when you choose.",
          "Provisional sums are allowances for work whose extent cannot be determined at contract, such as site works on an uninvestigated block or repairs in a renovation. These are riskier because you do not control the outcome, and the builder's margin typically applies to any increase.",
          "A contract with a handful of specific provisional sums is normal. One where broad allowances cover most of the site work is not a fixed price in any meaningful sense, whatever the heading says.",
        ],
      },
      {
        heading: "When cost plus genuinely suits",
        body: [
          "Cost plus makes sense where the scope really cannot be defined \u2014 heritage restoration, a complex renovation where the structural condition is unknown, or work where the client wants to make decisions as the job progresses.",
          "It requires trust and transparency, because you are paying actual cost plus an agreed margin. Ask how costs are substantiated, how often you receive accounts, and whether there is a cap or an agreed estimate you will be notified against.",
          "The risk transfers to you. On a fixed price the builder carries the risk of underestimating; on cost plus you do. That is not automatically bad, but it should be a deliberate choice.",
        ],
      },
      {
        heading: "Reading a Queensland building contract",
        body: [
          "For domestic building work over $20,000, Queensland Level 2 contract requirements apply, the deposit is capped at 5 per cent, and variations must be documented. Those requirements exist for your protection \u2014 insist on them being followed rather than treating them as paperwork.",
          "Check the progress payment stages and whether they are proportionate to the work completed at each point. Front-loaded payment schedules leave you exposed if the job stalls.",
          "Check the extension of time clause, the defects liability period, and what happens at practical completion. If anything is unclear, ask for it to be explained and consider independent legal review before signing.",
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
      {
        heading: "What determines whether it is worth doing",
        body: [
          "Two things: the permitted height, and the condition of the existing structure. Both are checkable before you commit, and both can change the answer entirely.",
          "Permitted height comes from the overlay provisions, the building height limit for the zone and the relationship to neighbouring buildings. It sets your ground floor ceiling, and a constrained height produces a space that reads as a basement no matter how it is finished.",
          "Structural condition determines what has to be replaced rather than lifted. Stumps at the end of their life, damaged bearers and floor joists, and previous unapproved modifications all add cost and all are common in houses of this age.",
        ],
      },
      {
        heading: "Where the budget actually goes",
        body: [
          "Lifting the house is the headline and rarely the largest component. Fitting out the space underneath is where most of the money goes \u2014 slab, walls, insulation, windows, doors, a bathroom, often a second living area, and finishes throughout.",
          "Services are a full replacement rather than an extension. Old Queenslanders routinely carry wiring past its service life, switchboards with no capacity for a second level, failing plumbing and no insulation. Extending an inadequate system into a new floor is a false economy.",
          "New drainage for the ground floor, and reworking the sewer connection to suit the new levels, are further items that belong in the budget from the start.",
        ],
      },
      {
        heading: "The two details that decide the result",
        body: [
          "Daylight is the first. A ground floor lit only from the front and back will feel like a corridor. Light wells, a re-planned rear opening and careful use of the side setbacks transform the level.",
          "The stair is the second. It is the most expensive square metre in the house and the most commonly misplaced. Put it where it connects both levels without stealing the northern light or cutting the living space in half.",
          "Get both right and you have doubled your floor area on land you already own, in a suburb where land is the expensive part. Get either wrong and you have spent a great deal on a level nobody uses.",
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
    image: "/assets/images/stock/home-brick-contemporary.webp",
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
      {
        heading: "Questions about your specific block",
        body: [
          "What site classification have you priced the footings to, and have you done a soil test on this block? If the answer is an assumption, the largest single cost variable in the project is unpriced.",
          "What overlays apply to this address, and what do they require? Flood, bushfire, character and vegetation overlays each carry consequences, and a builder who has not checked the property report has not assessed your site.",
          "How will concrete trucks and cranes reach the work, and has pumping been allowed for? On sloping or long-approach blocks this is a real cost per pour rather than a one-off.",
        ],
      },
      {
        heading: "Questions about the contract",
        body: [
          "How many provisional sums and prime cost items does the contract carry, what does each cover, and what happens if the actual cost exceeds them? Ask to see what each allowance actually buys before signing, not after.",
          "What is the deposit, and is it within the 5 per cent cap that applies to domestic building contracts over $20,000 in Queensland?",
          "How are variations priced and approved, and will they always be documented in writing before work proceeds? A verbal variation is a dispute waiting to happen.",
          "What is the defects liability period, and what happens if something appears after it ends?",
        ],
      },
      {
        heading: "Questions about how the job will run",
        body: [
          "Who supervises the site day to day, how many other projects are they running, and who do I contact when something needs a decision?",
          "What is the construction programme, in stages, and how will progress claims align to it?",
          "Can I visit an active site and speak to a client whose house you finished in the last year? A builder confident in their work will arrange both without hesitation.",
          "Straight answers to these questions tell you more about how the build will go than any brochure will.",
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
    image: "/assets/images/stock/home-single-modern.webp",
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
    image: "/assets/images/stock/home-entry-detail.webp",
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
    image: "/assets/images/stock/townhouse-construction-new.webp",
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
      {
        heading: "Getting daylight into a narrow plan",
        body: [
          "The defining problem on a narrow block is that the long walls are close to boundaries, so most of your available light has to come from the two short ends or from above.",
          "The solutions are architectural rather than decorative: courtyards cut into the plan, high-level windows above eye line that bring light without sacrificing privacy, skylights over circulation and stairs, and a void connecting two levels so light reaches the ground floor.",
          "Room depth matters too. A living space more than about twice as deep as its window wall is tall will feel dim at the back regardless of how large the window is.",
        ],
      },
      {
        heading: "Privacy and the neighbours",
        body: [
          "On a narrow lot your windows and your neighbour's are close together, and the planning scheme will impose requirements about overlooking and privacy that shape where openings can go.",
          "Offsetting windows so they do not align directly, using high-level glazing on boundary-facing walls, and orienting outdoor living toward a courtyard rather than a shared fence line all resolve this without resorting to permanently closed blinds.",
          "Acoustic considerations follow the same logic. Placing bedrooms away from the neighbour's driveway and living areas is a free decision at design stage.",
        ],
      },
      {
        heading: "Construction access and cost",
        body: [
          "A narrow frontage restricts how machinery and materials reach the site. Concrete pumping instead of direct discharge, smaller loads, craning materials over the house, and having nowhere to stockpile spoil all add cost that does not appear on a wider block.",
          "Scaffolding within tight boundary setbacks and protecting neighbouring structures during excavation are further items that belong in the estimate rather than the final invoice.",
          "We price access as a defined item at estimate stage, because on a small lot it is one of the largest differences between an accurate quote and an optimistic one.",
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
    image: "/assets/images/stock/duplex-modern-dual.webp",
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
          "If you are weighing up a Brisbane site, our <a href=\"/locations/brisbane/duplex-townhouses/\">Brisbane duplex and townhouse page</a> sets out how we assess feasibility, and we are happy to review a block before you commit to it.",
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
    image: "/assets/images/stock/construction-frame-new.webp",
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
          "We get the soil test done before quoting on every project. It makes our first number slower to produce and much more likely to be the number you actually pay. If you are weighing up a site, our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> covers how we work through site conditions before design.",
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
          "This work rewards a builder who has done it before — nothing in a hundred-year-old house is square, and the surprises are structural rather than cosmetic. Our <a href=\"/locations/brisbane/queenslander-homes/\">Brisbane Queenslander renovation page</a> goes through raise-and-build-under in more detail.",
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
    image: "/assets/images/stock/home-luxury-landscape.webp",
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
          "We establish the rating before design on any site where the overlay applies, so the construction requirements appear in the first estimate rather than at approval. Our <a href=\"/locations/sunshine-coast/custom-builds/\">Sunshine Coast custom build page</a> covers how we handle bushfire, slope and acreage services together.",
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
    image: "/assets/images/stock/townhouse-construction-new.webp",
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
          "We run these checks before design on every dual occupancy project, and we will tell you plainly when a site does not stack up. That conversation costs nothing — our <a href=\"/locations/brisbane/duplex-townhouses/\">Brisbane duplex page</a> and <a href=\"/locations/logan/duplex-townhouses/\">Logan duplex page</a> set out how the numbers differ by area.",
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
    image: "/assets/images/stock/home-brick-twilight.webp",
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
          "We confirm the applicable levels before design on every project where an overlay applies, because it is one of the few inputs that can invalidate an entire design if it arrives late. Our <a href=\"/locations/gold-coast/new-home-builds/\">Gold Coast new home page</a> and <a href=\"/locations/moreton-bay/new-home-builds/\">Moreton Bay new home page</a> cover how this plays out in each area.",
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
          "The honest answer depends on the permitted height and the condition of the structure, both of which are checkable before you commit. Our <a href=\"/locations/brisbane/queenslander-homes/\">Brisbane Queenslander renovation page</a> sets out how we assess both, and we are happy to look at a house before you buy it.",
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
    image: "/assets/images/stock/blueprint-keys.webp",
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
          "We manage this sequence as part of the project. Our <a href=\"/locations/brisbane/duplex-townhouses/\">Brisbane duplex page</a> covers how the assessment path affects a dual occupancy program specifically.",
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
    image: "/assets/images/stock/construction-frame-new.webp",
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
          "If you are weighing up quotes on a specific block, we are happy to look at what you have been given and tell you what is missing. Our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> sets out the four checks we complete before pricing.",
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
    image: "/assets/images/stock/home-luxury-twilight.webp",
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
          "If you want a straight opinion on which suits your situation, send us the address and the brief. Our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> sets out how we assess a site, and we will tell you if we are not the right builder for it.",
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
    image: "/assets/images/stock/home-luxury-landscape.webp",
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
          "We establish all of this before design on acreage projects. Our <a href=\"/locations/sunshine-coast/custom-builds/\">Sunshine Coast custom build page</a> covers how bushfire, slope and rural services interact on hinterland blocks.",
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
    image: "/assets/images/stock/blueprint-keys.webp",
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
          "We run these checks as a matter of course before design, and we are happy to look at a block you are considering before you commit to it. Our <a href=\"/locations/brisbane/knockdown-rebuild/\">Brisbane knockdown rebuild page</a> covers the demolition question in more detail.",
        ],
      },
    ],
  },
  {
    slug: "retaining-walls-queensland-cost-and-approval",
    title: "Retaining Walls: What They Cost and When You Need Approval",
    description:
      "Why retaining is one of the largest hidden costs on a sloping Queensland block, what drives the price, and the height at which approval becomes mandatory.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "The cost people never see coming",
        body: [
          "On a sloping block, retaining is frequently the single largest line item outside the house itself. It rarely appears in an advertised build price, and it is the item most often carried as a token allowance in an optimistic quote.",
          "The reason it surprises people is that retaining is invisible in the finished product. You pay a significant sum for something that ends up buried, landscaped over, or reading as a garden edge. It feels like money that bought nothing.",
          "What it actually bought is a level building platform, a driveway that works, and ground that stays where it is during heavy rain. On a South East Queensland block, that last one is not optional.",
        ],
      },
      {
        heading: "What drives the price",
        body: [
          "Height is the main driver, and not linearly. A wall retaining half a metre is a simple garden structure. A wall retaining two metres is an engineered structure with footings, drainage and reinforcement, and it costs several times as much per metre of length.",
          "Length obviously matters, but so does the shape of the site. Stepping a wall down a slope, turning corners, and returning at boundaries all add cost relative to one straight run.",
          "Material changes the number substantially. Timber sleepers are cheapest and shortest-lived. Concrete sleepers between steel posts are the common middle ground. Besser block, reinforced concrete and stone are progressively more expensive and more durable.",
          "Then there is what sits on top. A wall supporting only garden is different to one supporting a driveway, and a wall with a structure near it needs to account for that load. This is called surcharge, and it changes the engineering.",
        ],
      },
      {
        heading: "When approval is required",
        body: [
          "Low retaining walls generally do not need building approval. Above a certain height they do, and the threshold varies with the local planning scheme, the location of the wall relative to boundaries, and whether there is a surcharge load nearby.",
          "As a practical rule, if the wall is around a metre or higher, or if it is close to a boundary, or if a driveway or structure sits above it, assume approval and engineering are required and confirm the specifics for your site.",
          "Retaining can also fall under operational work in the planning scheme, which is a separate approval to building approval. On a site with significant cut and fill, that is worth establishing early.",
          "Building an unapproved retaining wall is a genuine problem at resale, because it shows up in searches and the buyer's solicitor will raise it.",
        ],
      },
      {
        heading: "Drainage is the part that fails",
        body: [
          "Most retaining wall failures are drainage failures. Water builds up behind the wall, the pressure increases dramatically, and the wall moves or fails.",
          "A properly built wall has drainage aggregate behind it, a filter fabric to stop that aggregate silting up, and a subsoil drain at the base taking water to a legal discharge point. None of it is visible when finished and all of it is essential.",
          "This is why the cheapest quote for a retaining wall is worth reading carefully. The saving is almost always in what is behind the wall rather than in front of it.",
        ],
      },
      {
        heading: "Walls on the boundary",
        body: [
          "Retaining near or on a boundary involves the neighbour. Where a wall supports their land or yours, there can be shared responsibility, and the arrangements are worth agreeing in writing before construction rather than after.",
          "Access is the practical issue. Building a boundary wall usually needs access from both sides, and a neighbour is not obliged to grant it.",
          "We price retaining as a defined engineered scope at estimate stage rather than as an allowance. On a sloping site, our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> sets out how we handle slope, cut and fill before design.",
        ],
      },
    ],
  },
  {
    slug: "house-orientation-queensland-climate",
    title: "House Orientation: The Free Upgrade Most Queensland Homes Skip",
    description:
      "How north-facing living, eave depth and cross-ventilation decide whether a Queensland house is comfortable — and why orientation costs nothing at design stage.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.webp",
    category: "New Homes",
    content: [
      {
        heading: "The cheapest decision in the whole project",
        body: [
          "Orientation is the only significant performance upgrade in a house that costs nothing. Rotating a floor plan and repositioning windows at the drawing stage is a change of lines on paper.",
          "Get it right and the house is comfortable most of the year with the air conditioner off. Get it wrong and you pay for cooling every summer for as long as the building stands, and no amount of glazing specification fully recovers it.",
          "It is also the decision most commonly surrendered, because a standard plan gets placed on a block in whatever way suits the driveway rather than the sun.",
        ],
      },
      {
        heading: "Why north matters in Queensland",
        body: [
          "In the southern hemisphere the sun tracks through the northern sky. In summer it is high overhead; in winter it sits lower and further north.",
          "That difference is what makes north-facing glazing so useful here. A properly sized eave above a north window blocks the high summer sun almost entirely while still letting the lower winter sun in. The same overhang does two opposite jobs across the year without any moving parts.",
          "This is why living areas belong on the north side. It is the only aspect where sun can be controlled with a fixed overhang.",
        ],
      },
      {
        heading: "West is the problem",
        body: [
          "Western glazing is the single worst thermal decision available in a Queensland house. Afternoon summer sun comes in low from the west, at the hottest part of the day, at an angle no eave can block.",
          "The consequences are immediate. A west-facing living room with large glazing will be uncomfortable from mid-afternoon through evening in summer, exactly when the family is using it.",
          "The fixes, in order of effectiveness: do not put major glazing on the west at all; if you must, keep it small; then shade it externally with screens, louvres, a verandah or planting. External shading works because it stops heat before it enters. Internal blinds are far less effective because by then the heat is already inside.",
          "East is less severe but has the same character — morning sun, low angle, hard to shade with an overhang. Bedrooms on the east work well because the warmth arrives when you are getting up and leaves by mid-morning.",
        ],
      },
      {
        heading: "Cross-ventilation is half the answer",
        body: [
          "Queensland's traditional housing worked because air moved through it. High ceilings, openings on opposite walls, and plans one room deep let breeze do the cooling.",
          "Modern plans frequently block this without meaning to. A deep floor plan with openings on only one side, or an internal layout that walls off the path between two sides of the house, has no cross-flow no matter how many windows there are.",
          "The design rules are simple: openings on opposite or adjacent walls in every living space, a clear internal path between them, and openings sized so air can actually move rather than merely enter.",
          "Ceiling fans then extend the range considerably. They cost little to run and make a room feel several degrees cooler, which for much of the Queensland year is the entire requirement.",
        ],
      },
      {
        heading: "Meeting the energy standard the cheap way",
        body: [
          "New homes in Queensland are built to a raised energy performance standard under the National Construction Code. There are two ways to meet it.",
          "The cheap way is design: orient the living areas north, size the eaves properly, avoid or shade western glass, insulate well and plan for cross-ventilation. All of this is decided on paper and adds essentially nothing to the build cost.",
          "The expensive way is compensation: a poorly oriented house that meets the standard through high-performance glazing, additional insulation and mechanical systems. It complies, it costs more to build, and it costs more to run forever.",
          "We design to the site's aspect and prevailing breeze before anything else. Our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> covers how this fits into the rest of the site assessment.",
        ],
      },
    ],
  },
  {
    slug: "building-inspection-stages-queensland",
    title: "The Inspection Stages in a Queensland Build, and What Happens at Each",
    description:
      "The mandatory certifier inspections on a Queensland home, what is being checked at each one, and where owners should do their own walk-through.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Who inspects what",
        body: [
          "In Queensland, building work is inspected by a building certifier at defined stages set out in the building approval. Most residential certification is done by private certifiers rather than the council.",
          "These inspections are compliance checks against the approved documents, the National Construction Code and the relevant standards. They are not a quality review of the finish, and they are not a substitute for the builder's own supervision.",
          "Plumbing and drainage work is inspected separately, generally by the local authority's plumbing inspector, against its own approval.",
        ],
      },
      {
        heading: "Foundation and footing",
        body: [
          "Before concrete goes in, the excavation, steel reinforcement, formwork and any piering are inspected against the engineering design. On a reactive clay site this is where the engineered footing system gets verified.",
          "This inspection matters more than any other, because everything above it depends on it and nothing about it can be corrected later without enormous cost.",
          "As an owner this is worth attending if you can. You will not assess the steel, but you will see whether the site has been prepared properly and whether the set-out matches what you approved.",
        ],
      },
      {
        heading: "Slab",
        body: [
          "The slab inspection checks reinforcement placement and cover, the vapour barrier, service penetrations and the formwork before the pour.",
          "Once concrete is placed, anything in the wrong position stays in the wrong position. Plumbing penetrations set in the slab define where wet areas can go, so it is worth checking the set-out against your plan before the pour rather than after.",
        ],
      },
      {
        heading: "Frame",
        body: [
          "The frame inspection happens once the structure is up and the roof is on, but before internal linings cover anything. Bracing, tie-downs, beam sizes, lintels, and the structural connections are all checked against the engineering.",
          "This is the most valuable stage for an owner walk-through. With the frame open you can see room sizes and ceiling heights for the first time, check that window and door openings are where you expect, and verify that power and data rough-ins are in sensible positions.",
          "Changes are still relatively cheap at frame stage and become expensive immediately afterwards. Once plasterboard goes on, moving a power point means opening a wall.",
        ],
      },
      {
        heading: "Final",
        body: [
          "The final inspection confirms the completed building complies with the approval and the code, covering safety items such as smoke alarms, balustrade heights, glazing, wet area waterproofing documentation and the required certificates.",
          "A final certificate or certificate of occupancy follows. You should not be making final payment without it, and you should receive the accompanying documentation — Form 15 and Form 16 certificates, waterproofing certificates, termite protection documentation, warranties and manuals.",
          "Keep all of it. It is what a buyer's solicitor will ask for when you eventually sell, and reconstructing it years later is difficult.",
        ],
      },
      {
        heading: "Your own inspections",
        body: [
          "Certifier inspections check compliance. They do not check whether the tiling is level, the paint finish is acceptable or the doors close properly. That is the builder's responsibility and your interest.",
          "Many owners engage an independent building inspector at frame stage and again before handover. On a large project that is money well spent, and a good builder will not object to it.",
          "We walk clients through at frame stage as a matter of course, because it is the last cheap opportunity to change anything. Our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> sets out how we run the rest of the program.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-provisional-sum",
    title: "Provisional Sums and PC Items: Where Fixed Prices Stop Being Fixed",
    description:
      "The two contract mechanisms that let a fixed-price build increase, how to tell a reasonable allowance from a warning sign, and what to ask before signing.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "Two terms worth understanding before you sign",
        body: [
          "A fixed-price building contract is not entirely fixed, and the two mechanisms that let it move are provisional sums and prime cost items. Both are legitimate. Both are also where an optimistic quote quietly becomes an expensive one.",
          "Understanding the difference, and reading what yours cover, is the single most useful hour you can spend on a building contract.",
        ],
      },
      {
        heading: "Prime cost items: the thing is not chosen yet",
        body: [
          "A prime cost item is an allowance for a product that has not been selected. Tapware, tiles, appliances, door hardware, light fittings. The contract carries a supply figure, and when you choose the actual product the difference is adjusted up or down.",
          "These are normal and generally harmless, because you control the outcome. If the allowance for tapware is modest and you want something expensive, that is your decision and you can see the cost before committing.",
          "The trap is allowances set unrealistically low to reduce the headline contract price. An allowance that no real product meets is not an allowance, it is a deferred increase. Ask what the allowance actually buys, and go and look at what it buys before signing.",
        ],
      },
      {
        heading: "Provisional sums: the work is not fully known",
        body: [
          "A provisional sum is an allowance for work whose extent cannot be determined at contract. Site works on an unsurveyed block, rock excavation, connecting to services at an unconfirmed distance, or repairs in a renovation where the condition is hidden.",
          "These are riskier, because you do not control the outcome. If the actual work exceeds the allowance, the contract price increases, and typically the builder's margin applies to the increase as well.",
          "Genuine provisional sums exist because some things really cannot be known. Excavating a block that may contain rock is a fair example. A provisional sum for the entire site works package on a block that could have been surveyed and tested is not — it is an investigation the builder chose not to do.",
        ],
      },
      {
        heading: "How to read them",
        body: [
          "Count them. A contract with a handful of specific provisional sums is normal. A contract where provisional sums and prime cost items cover a large share of the value is not a fixed price in any meaningful sense.",
          "Read what each one covers and what happens if it is exceeded. Ask what basis the allowance was calculated on — a soil test and survey, or an assumption.",
          "Ask specifically whether a soil test has been done for your block and what site classification the footings were priced to. If the answer is that it will be confirmed later, the largest single cost in your site works is a provisional sum whether it is labelled as one or not.",
          "Compare quotes on the provisional sums, not just the totals. A higher quote with properly investigated site costs frequently ends up cheaper than a lower one carrying broad allowances.",
        ],
      },
      {
        heading: "What good practice looks like",
        body: [
          "Do the investigation before the contract. A soil test, a survey and a council property report cost a small fraction of what they can save, and they convert most provisional sums into fixed items.",
          "Where a provisional sum genuinely has to remain, it should be specific, realistically estimated, and clearly explained — you should understand exactly what circumstance would cause it to increase.",
          "In Queensland, domestic building contracts over $20,000 are Level 2 contracts with a deposit capped at 5 per cent, and variations must be documented. That documentation requirement is your protection; insist on it being followed.",
          "We complete the site investigation before quoting, which is why our contracts carry few provisional sums. Our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> explains what sits behind the fixed price.",
        ],
      },
    ],
  },
  {
    slug: "timber-vs-steel-frame-queensland",
    title: "Timber or Steel Frame: Which Suits a Queensland Home?",
    description:
      "An honest comparison of timber and steel framing for South East Queensland conditions — termites, coastal corrosion, thermal behaviour, cost and buildability.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "New Homes",
    content: [
      {
        heading: "Both work. They fail differently.",
        body: [
          "Timber and steel are both entirely capable of framing a Queensland house, and the industry has decades of experience with each. The question is not which is better in the abstract but which suits your site, your budget and your tolerance for particular risks.",
          "The useful way to compare them is by how each behaves badly, because that is what determines the long-term outcome.",
        ],
      },
      {
        heading: "Termites",
        body: [
          "This is the argument most often made for steel in Queensland, and it is a real one. Termites are active across the whole region and timber framing is a food source in a way that steel is not.",
          "The qualification is that a steel-framed house is not termite-proof as a building. Skirtings, architraves, door frames, cabinetry, flooring and roof battens may still be timber, and termites will happily reach them. What steel removes is the risk to the structure itself.",
          "Either way, termite management is mandatory for new Queensland homes and involves a system — physical or chemical barriers — plus ongoing inspection. Steel framing reduces the consequence of a failure. It does not remove the need for the system or the inspections.",
        ],
      },
      {
        heading: "Coastal corrosion",
        body: [
          "This is the argument in the other direction, and near the water it is decisive. Steel framing in a coastal environment needs appropriate protective coating, and the fixings and connections matter as much as the members.",
          "Timber does not corrode. In a salt-laden environment that is a genuine advantage, though the fixings and connectors in a timber frame still need appropriate corrosion resistance.",
          "For a beachfront or canal-front build, this consideration usually outweighs the termite argument. Several streets inland it matters much less.",
        ],
      },
      {
        heading: "Thermal behaviour",
        body: [
          "Steel conducts heat far more readily than timber, which creates thermal bridging — a path for heat to move through the wall via the frame, bypassing the insulation between it.",
          "This is a solved problem, addressed with thermal break strips and appropriate insulation detailing, and modern steel-framed houses meet the energy requirements comfortably. But it has to be detailed properly rather than assumed, and it is a place where a cheap steel-framed build can underperform.",
          "Timber's lower conductivity makes this easier by default, which is a small but real advantage in a hot climate.",
        ],
      },
      {
        heading: "Cost, buildability and practicalities",
        body: [
          "Costs move with commodity markets and the gap has narrowed and widened repeatedly over the years. Neither is reliably cheaper, and anyone claiming a fixed rule is quoting an old market.",
          "Steel frames arrive precision-made and dimensionally stable — they do not shrink, warp or twist, which produces straighter walls and fewer plasterboard cracks as the house settles. Timber moves with moisture, which is why nail pops and small cracks appear in the first year.",
          "Timber is easier to modify on site and easier to alter later. Hanging a heavy item on a steel-framed wall, or cutting an opening into one, requires more thought.",
          "Trade familiarity matters too. Both are common in South East Queensland, but on any given job the trades available may be more experienced with one.",
          "We build with both and choose based on the site rather than a preference. If you are weighing this up for a specific block, our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> covers the rest of the specification decisions.",
        ],
      },
    ],
  },
  {
    slug: "termite-protection-queensland-new-homes",
    title: "Termite Protection in Queensland: What Is Required and What Actually Works",
    description:
      "The termite management systems required on new Queensland homes, how each works, why the annual inspection matters more than the system, and what voids your cover.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-brick-twilight.webp",
    category: "New Homes",
    content: [
      {
        heading: "It is not optional",
        body: [
          "Termite management is a requirement for new residential construction in Queensland, and for good reason — subterranean termites are active across the entire region and cause more damage to Australian homes annually than fire.",
          "The National Construction Code and AS 3660 set out what is required. Your builder installs a system, and you receive documentation identifying what was installed, where, and what maintenance it needs.",
          "The critical point most owners miss: the system does not stop termites. It makes their entry detectable. The protection comes from the system plus regular inspection, and the inspection half is your responsibility after handover.",
        ],
      },
      {
        heading: "Physical barriers",
        body: [
          "Physical systems work by blocking concealed entry paths — the gaps between slab and wall, around service penetrations, and through construction joints — with material termites cannot pass through or chew.",
          "Stainless steel mesh and graded stone particle barriers are the common types. Installed correctly at slab stage, they force termites to build visible mud tunnels around the barrier rather than entering unseen.",
          "The advantage is longevity: a correctly installed physical barrier does not require chemical replenishment. The disadvantage is that installation quality is everything, and it happens at a stage you will never see again.",
        ],
      },
      {
        heading: "Chemical systems",
        body: [
          "Chemical barriers apply a termiticide to the soil around and beneath the building, creating a treated zone termites will not cross.",
          "Some are applied to soil before the slab. Reticulation systems install pipework around the perimeter so the chemical can be replenished without excavation, which is a significant practical advantage.",
          "The limitation is that chemicals deplete over time. A chemical system has a service life stated by the manufacturer, and it requires re-treatment at intervals. A house with a chemical barrier installed at construction and never re-treated has, after enough years, no chemical barrier.",
        ],
      },
      {
        heading: "What actually determines the outcome",
        body: [
          "Annual inspection by a licensed pest inspector is the single most important factor, more than which system you chose. AS 3660 recommends inspection at least annually, and more frequently in high-risk areas.",
          "Termites found early are a manageable treatment. Termites found after three years are a structural repair. The system's job is to make sure you find them early, and it only works if someone looks.",
          "The second factor is what you do to your own house. Garden beds and mulch piled against the wall, a slab edge covered by paving or soil, poor subfloor ventilation, leaking taps and air conditioning condensate discharging next to the footing all create the moisture and concealed access termites need.",
          "Bridging the barrier is the most common owner-caused failure. Building a garden bed, path or deck over the slab edge gives termites a concealed route straight past whatever you paid for.",
        ],
      },
      {
        heading: "Documentation and warranties",
        body: [
          "At handover you should receive a durable notice identifying the system installed, its location, the date and the maintenance required — typically fixed inside the meter box or a cupboard.",
          "Keep the certificates. They matter for insurance, for any warranty claim, and for the buyer's building and pest inspection when you sell.",
          "Note that standard home insurance generally excludes termite damage. Your protection is the system, the inspections and the documentation, not a claim after the fact.",
          "We install and document termite management as part of every new build. Our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> covers what else arrives in the handover pack.",
        ],
      },
    ],
  },
  {
    slug: "building-over-or-near-a-sewer-queensland",
    title: "Building Over or Near a Sewer: The Check That Kills Projects",
    description:
      "Why sewer alignment is the highest-value pre-purchase search in South East Queensland, what build-over approval involves, and when a main has to be relocated.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "The cheapest search with the largest consequence",
        body: [
          "Finding out where the sewer main runs across a block costs almost nothing and takes very little time. Discovering it after you have bought the land and paid for a design can cost more than everything else combined.",
          "This is the single highest-value pre-purchase check available in South East Queensland, and it is the one most consistently skipped.",
          "It matters most on duplex and dual occupancy projects, where the building footprint is large relative to the block and there is far less room to move the house away from the main.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "A sewer main is an asset owned by the water authority, and they need to be able to access, maintain and replace it. A building sitting on top of it interferes with that.",
          "There is generally a defined zone of influence around the main, related to its depth. Build inside that zone and the loads from your footings can transfer to the pipe, and any future excavation to reach the pipe could undermine your building.",
          "So the authority controls what can be built near it, and their consent is required before the building approval can proceed.",
        ],
      },
      {
        heading: "Build-over approval",
        body: [
          "Where the proposed building encroaches on the zone around the main, you apply for build-over or build-near approval from the water authority — Urban Utilities in the Brisbane, Ipswich, Lockyer, Scenic Rim and Somerset areas, Unitywater across Moreton Bay and the Sunshine Coast, and the council in the Gold Coast and Logan areas.",
          "Approval usually comes with conditions. Common ones are piered or deepened footings designed so the load bypasses the pipe, a CCTV inspection of the main before and after construction, restrictions on the type of structure permitted, and maintaining access to any manhole.",
          "These conditions cost money — engineered footings in that zone are meaningfully more expensive than standard ones — but they are manageable and predictable once known.",
        ],
      },
      {
        heading: "When the main has to move",
        body: [
          "Sometimes build-over is not achievable. If the main runs directly through the only viable building envelope, or the depth and condition make building over unacceptable, the alternative is relocating it.",
          "Relocation is expensive. It involves design, authority approval, excavation, new pipework, connection works and reinstatement, and the cost is borne by you, not the authority.",
          "On a duplex project a relocation can consume the entire development margin. This is why we treat it as a feasibility question rather than a construction detail — it can be the difference between a project and a block you now own for no reason.",
        ],
      },
      {
        heading: "How to check",
        body: [
          "Request a sewer or property services plan from the relevant water authority for the address. These are available on request and show the alignment and depth of mains on and near the property.",
          "Read it before you make an offer. If a main crosses the middle of the block, that is not necessarily fatal, but it changes what can be built and it should change what you are willing to pay.",
          "Also confirm your stormwater discharge point while you are at it, because a site with no legal discharge path has its own expensive problem.",
          "We run these searches before design on every project, and before purchase for clients who ask. Our <a href=\"/blog/dual-occupancy-feasibility-checklist/\">dual occupancy feasibility checklist</a> sets out the full list.",
        ],
      },
    ],
  },
  {
    slug: "council-or-private-certifier-queensland",
    title: "Council or Private Certifier: Who Approves Your Queensland Build?",
    description:
      "What a building certifier does, why most Queensland residential work uses a private certifier, who they act for, and what they do not check.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "A role most owners misunderstand",
        body: [
          "The building certifier is one of the most important people in a Queensland construction project and one of the least understood by the people paying for it.",
          "Owners frequently assume the certifier is a quality inspector working on their behalf, checking that the house is well built. That is not what the role is, and the gap between the assumption and the reality causes real disappointment at handover.",
        ],
      },
      {
        heading: "What a certifier does",
        body: [
          "A building certifier assesses your building work against the National Construction Code, the relevant Australian Standards, the planning scheme requirements and any development approval conditions.",
          "They issue the building approval, carry out the mandatory inspections at defined stages, and issue the final certificate when the work complies.",
          "Certifiers are licensed by the QBCC and their scope is set by their licence class. What they are certifying is compliance, not quality.",
        ],
      },
      {
        heading: "Council or private",
        body: [
          "Queensland allows building certification to be carried out by either the local council or a licensed private certifier, and the majority of residential work now uses private certifiers.",
          "The practical differences are speed and availability. Private certifiers are generally faster and more responsive, which matters when a program depends on an inspection happening promptly.",
          "The assessment standard is the same either way. A private certifier is not applying a softer rule — they are applying the same code, and they carry personal liability for doing so.",
          "The council retains a role regardless. Development approval, plumbing approval and operational work approvals remain council functions even where a private certifier handles building certification.",
        ],
      },
      {
        heading: "Who the certifier acts for",
        body: [
          "This is the part worth understanding clearly. The certifier is engaged by whoever appoints them — usually the builder on a residential contract — but they exercise a statutory function and must act independently. They are not the builder's employee and cannot simply be instructed.",
          "You are entitled to appoint the certifier yourself rather than leaving it to the builder. Some owners prefer this on larger projects for the independence it brings, and it is a reasonable request.",
          "Either way, ask who the certifier is, confirm their licence on the QBCC register, and keep their contact details. If a compliance concern arises during the build, they are the person to raise it with.",
        ],
      },
      {
        heading: "What a certifier does not check",
        body: [
          "This is where the disappointment usually comes from. A certifier does not check whether tiling is level, paint finish is acceptable, doors close properly, joinery is well made, or the house matches the finishes you selected.",
          "They do not check that the builder has followed your contract. They check that the building complies with the code.",
          "Workmanship and contract compliance are the builder's responsibility and your interest. Many owners engage an independent building inspector at frame stage and again before handover to cover exactly this gap, and on a significant project it is money well spent.",
          "A good builder will not object to an independent inspection. We walk clients through at frame stage as standard — our <a href=\"/blog/building-inspection-stages-queensland/\">guide to the inspection stages</a> explains what to look at and when.",
        ],
      },
    ],
  },
  {
    slug: "defects-liability-and-handover-queensland",
    title: "Handover and the Defects Period: What You Are Entitled To",
    description:
      "What should happen at handover on a Queensland home, what the defects liability period covers, the statutory warranty periods, and how to raise a claim.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Handover is a process, not a moment",
        body: [
          "The end of a build is not a set of keys and a handshake. It is a defined process with documents you are entitled to, an inspection you should insist on, and a period afterwards during which the builder remains responsible.",
          "Owners who treat handover as a formality tend to discover afterwards that raising an issue is harder than it would have been a week earlier.",
        ],
      },
      {
        heading: "The pre-handover inspection",
        body: [
          "Before final payment you should walk the completed house with the builder and record every item requiring attention. Take your time, bring a torch, open every door and window, run every tap, and test every switch.",
          "The items commonly found are paint finish, tiling and grout, door and window operation and adjustment, cabinetry alignment, silicone work, minor plasterboard defects and cleaning.",
          "Record the list in writing and agree it with the builder rather than mentioning items verbally. A written list agreed at inspection is the difference between a defect and a disagreement.",
          "Many owners engage an independent building inspector for this walk-through. It costs a modest amount relative to the project and they will find things you will not.",
        ],
      },
      {
        heading: "What you should receive",
        body: [
          "The final certificate or certificate of occupancy from the certifier, without which you should not be making final payment.",
          "Form 15 and Form 16 certificates covering design and inspection of building components, waterproofing certificates for wet areas, and the termite management notice identifying the system, its location and its maintenance requirements.",
          "Electrical and plumbing compliance certificates, appliance manuals and warranties, paint and finish schedules for future touch-ups, and your QBCC Home Warranty Scheme documentation.",
          "Keep all of it together. A buyer's solicitor will ask for this material when you sell, and reconstructing it years later is difficult and sometimes impossible.",
        ],
      },
      {
        heading: "The defects liability period",
        body: [
          "Your contract will specify a defects liability period after practical completion — commonly twelve months — during which the builder is obliged to rectify defects arising from their work.",
          "This period exists because some issues only appear once a house is lived in and has been through a full seasonal cycle. Timber shrinks, the slab settles, and small cracks and nail pops appear in the first year. These are normal and are rectified at the end of the period rather than one at a time.",
          "Keep a running list rather than calling about each item. Most builders prefer to attend once near the end of the period and address everything together, which is also less disruptive for you.",
        ],
      },
      {
        heading: "Statutory warranties beyond the contract",
        body: [
          "Contractual defects liability is not the limit of your protection. Queensland's QBCC Home Warranty Scheme provides cover for defective work and non-completion, with different time limits for structural and non-structural defects.",
          "The scheme has strict notification timeframes, and missing them can affect your entitlement. If you identify something significant, raise it in writing with the builder promptly and note the QBCC timeframes rather than waiting to see whether it worsens.",
          "Statutory warranties under the Queensland domestic building legislation also apply to the work regardless of what the contract says, and cannot be contracted out of.",
          "We stay available after handover because the alternative is a bad reference. Our <a href=\"/locations/brisbane/new-home-builds/\">Brisbane new home page</a> sets out how we run a project from contract through to this point.",
        ],
      },
    ],
  },
  {
    slug: "selections-process-new-home-build",
    title: "Selections: The Stage That Delays More Builds Than Weather",
    description:
      "How the selections process works on a custom build, why late decisions cost more than they appear to, and a practical order for making them.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "Custom Builds",
    content: [
      {
        heading: "The most underestimated part of building",
        body: [
          "Clients expect the difficult parts of building to be the budget, the approvals and the construction. In practice, the stage that most often causes delay is selections — choosing the hundreds of individual products and finishes that make up a house.",
          "It is underestimated because each decision seems small. Collectively they represent an enormous number of choices, many of which interact, and several of which have long lead times.",
          "A build waiting on a client decision is a build losing days it never recovers, because trades booked for a sequence do not simply wait.",
        ],
      },
      {
        heading: "Why late selections cost more than they look",
        body: [
          "Some products have lead times measured in months. Windows, external doors, specific tiles, imported tapware, stone benchtops and certain appliances all need to be ordered well ahead of when they are installed.",
          "The sequence is the other issue. A tile choice determines the screed depth, which affects floor levels. Tapware selection determines rough-in positions in the wall, which happens before plasterboard. An appliance choice determines cabinetry dimensions, which are manufactured weeks ahead of installation.",
          "So a decision made late does not just delay its own item. It stops the work that depends on it, and it can require rework of something already done.",
        ],
      },
      {
        heading: "A practical order",
        body: [
          "Start with anything structural or dimensional. Window and door sizes and positions, ceiling heights, stair configuration, and the location of wet areas. These are effectively fixed by frame stage.",
          "Next, anything with a long lead time, regardless of when it gets installed. Order early even if it sits in storage.",
          "Then rough-in-dependent items: tapware, shower configuration, power point and switch locations, data and television points, and lighting positions. All of these are set before the walls are lined.",
          "Then surfaces: floor tiles, wall tiles, benchtops, splashbacks, paint colours. Then fittings and hardware. Then landscaping.",
          "The rule underneath all of it is simple: decide anything that gets buried before it gets buried.",
        ],
      },
      {
        heading: "How to make the decisions easier",
        body: [
          "Choose a palette rather than individual items. Deciding the overall direction first — warm or cool, light or dark, matte or gloss — turns hundreds of open questions into a series of choices within a defined range.",
          "See things physically. Screen images misrepresent colour and completely misrepresent texture. Get samples of tiles, benchtops and flooring, and view them in the actual light conditions of the room, at the time of day you will use it.",
          "Decide with the whole house in view rather than room by room, so materials relate to each other rather than accumulating into a collection of individually good choices that do not sit together.",
          "Set a decision deadline for each item, agreed with your builder, and treat those dates as seriously as you would a payment date.",
        ],
      },
      {
        heading: "Selections and your contract",
        body: [
          "Your contract should carry a documented selections schedule listing what has been allowed for. Where items are prime cost allowances, you can adjust up or down, and the difference is applied to the contract.",
          "Check what those allowances actually buy before signing. An allowance that no real product meets is a deferred cost increase, not an allowance.",
          "Once selections are agreed and ordered, changing them costs money — sometimes the full value of the ordered item plus the new one. Changes at that point are not free even where nothing has been installed.",
          "We build the selections schedule into the contract so the fixed price genuinely reflects what you are getting. Our <a href=\"/blog/what-is-a-provisional-sum/\">guide to provisional sums and PC items</a> explains how these allowances work.",
        ],
      },
    ],
  },
  {
    slug: "multigenerational-home-design-queensland",
    title: "Designing a Multigenerational Home in Queensland",
    description:
      "Dual living, secondary dwellings and homes built for three generations — what the planning rules allow, and the design decisions that make shared living work.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/stock/home-stucco-twostory.webp",
    category: "Custom Builds",
    content: [
      {
        heading: "A growing share of what we build",
        body: [
          "Multigenerational households are increasing across South East Queensland, driven by housing costs, ageing parents, and adult children staying home longer. A significant proportion of custom build enquiries now involve accommodating more than one generation.",
          "The housing stock was not designed for this. A standard four-bedroom family home assumes one household with one kitchen and one set of living areas, which works poorly when two adult generations share it.",
          "Designing for it properly is not simply adding a bedroom. It is about independence — separate entry, separate living space, acoustic separation and, where permitted, separate facilities.",
        ],
      },
      {
        heading: "What the planning rules allow",
        body: [
          "This is where it gets technical, and it varies by council. Broadly there are three arrangements, and they are treated very differently.",
          "A dual living or secondary dwelling arrangement — a self-contained space with its own kitchen and bathroom, subordinate to the main house — is permitted in many South East Queensland councils subject to conditions. Those conditions commonly limit floor area, restrict whether it can be separately let, and may require it to be occupied by a household member.",
          "A dual occupancy is two independent dwellings and is assessed quite differently, generally requiring development approval and satisfying minimum lot size, frontage, parking and open space requirements.",
          "An extended family arrangement within a single dwelling — additional bedrooms, a second living area, a second bathroom, but no second kitchen — is usually the simplest path, because it remains one dwelling.",
          "The presence of a second kitchen is frequently the line councils draw. Before designing anything, confirm what your specific site and council permit.",
        ],
      },
      {
        heading: "Independence is the design objective",
        body: [
          "The arrangements that work give each generation the ability to live normally without negotiating. The ones that fail put everyone in the same living space with a bedroom door as the only boundary.",
          "Separate external entry is the most valuable single feature. Being able to come and go without walking through someone else's living area changes the relationship entirely.",
          "Separate living space matters nearly as much. Two adult generations watching television together every night is a strain regardless of how well they get on.",
          "Acoustic separation is the item most underestimated. Insulated internal walls, solid-core doors, and separating bedrooms from the other household's living areas prevent the low-level friction that erodes these arrangements. It is inexpensive during construction and impossible afterwards.",
        ],
      },
      {
        heading: "Designing for ageing in place",
        body: [
          "Where the arrangement exists to accommodate ageing parents, build for where they are going rather than where they are now.",
          "Single-level access to the secondary accommodation, with no steps between the parking and the entry. Doorways and corridors wide enough for a walker or wheelchair. A bathroom with a level-entry shower, and wall reinforcement behind the tiling so grab rails can be added later without opening the wall.",
          "That last one costs almost nothing at frame stage and saves a genuinely disruptive retrofit later. It is the clearest example of a decision that is trivial during construction and expensive afterwards.",
          "Lever handles rather than knobs, good lighting including at night, and avoiding level changes throughout complete the picture.",
        ],
      },
      {
        heading: "Think about the exit",
        body: [
          "Circumstances change. Parents' needs increase, children move out, and the household that the house was designed for may not be the household in it in ten years.",
          "The best multigenerational designs can be reconfigured — the secondary accommodation can become a home office, a teenager's retreat, a guest suite or, where permitted, a rental. That flexibility protects the value of what you built.",
          "It also affects resale. A well-designed dual living arrangement is a genuine selling point to a large and growing part of the market. A poorly integrated one that reads as an awkward extension is not.",
          "We design these regularly across South East Queensland. Our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> covers how we work through a brief like this, and our <a href=\"/blog/granny-flat-secondary-dwelling-queensland/\">secondary dwellings guide</a> covers the planning side.",
        ],
      },
    ],
  },
  {
    slug: "rainwater-tanks-queensland-requirements",
    title: "Rainwater Tanks on a Queensland Build: Sizing, Rules and Real Costs",
    description:
      "When a tank is required, how to size one properly for roof catchment and demand, the firefighting reserve on bushfire blocks, and what the full system costs.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-landscape.webp",
    category: "New Homes",
    content: [
      {
        heading: "Required, useful, or essential",
        body: [
          "Rainwater tanks on Queensland homes fall into three categories, and which one applies changes the budget considerably.",
          "On acreage outside reticulated supply, the tank is the water supply and the house does not function without it. On a serviced block, a tank may be required by the planning scheme or an estate covenant, or specified to help meet the sustainability provisions. And on many blocks it is simply worthwhile for garden and laundry use.",
          "The first thing to establish is which situation you are in, because a supplementary tank and a primary supply tank are entirely different pieces of infrastructure.",
        ],
      },
      {
        heading: "Sizing a primary supply",
        body: [
          "Three inputs determine the size: the roof catchment area, the household demand, and the length of dry period you need to survive.",
          "Roof catchment is straightforward — the plan area of roof draining to the tank, multiplied by rainfall, less a loss allowance. What surprises people is that only the connected roof counts. A large house with half its roof draining elsewhere has half the catchment.",
          "Demand varies enormously with household habits, and the honest planning figure is well above what optimistic calculators suggest, because it must survive a dry stretch rather than an average year.",
          "South East Queensland rainfall is seasonal and unreliable — long dry winters and spring periods are normal. Sizing to the annual average rather than the dry-period gap is the most common mistake, and the consequence is buying carted water.",
        ],
      },
      {
        heading: "Firefighting reserve on bushfire blocks",
        body: [
          "Where a bushfire hazard overlay applies, a dedicated firefighting water supply may be required, with a specified volume and fittings that emergency services can connect to.",
          "This volume sits on top of household use, not within it. A tank sized for the house and then nominated as the firefighting supply does not work, because the reserve must remain available when the household water has been consumed.",
          "In practice this means either a larger tank with the reserve drawn from a level the household outlet cannot reach, or a separate dedicated tank. Both have cost implications that belong in the budget from the start.",
        ],
      },
      {
        heading: "What the full system costs",
        body: [
          "The tank itself is the visible cost and rarely the largest one. The complete system includes the base or slab, plumbing from the roof, first-flush diverters, leaf screening, a pump, filtration where the water is used inside, and the switching arrangement between tank and mains where both exist.",
          "On a primary supply, filtration and treatment become significant, particularly for drinking water. On acreage, the pump and its power supply matter too.",
          "Placement affects both cost and appearance. A tank close to the house has shorter plumbing runs but has to be designed into the elevation rather than parked beside it as an afterthought.",
        ],
      },
      {
        heading: "Maintenance is the part nobody budgets",
        body: [
          "Gutters and leaf screens need clearing, first-flush diverters need emptying, and the tank itself needs periodic inspection and occasional desludging.",
          "Neglected tanks develop water quality problems, and on a primary supply that becomes a health issue rather than an inconvenience.",
          "None of this is difficult, but it is ongoing, and it is worth knowing before committing to an acreage block that depends on it.",
          "We design tank systems as part of the build rather than adding them afterwards. Our <a href=\"/blog/building-on-acreage-queensland/\">acreage building guide</a> covers water, wastewater and access together.",
        ],
      },
    ],
  },
  {
    slug: "solar-and-battery-new-build-queensland",
    title: "Solar and Battery on a New Queensland Home: What to Do at Build Stage",
    description:
      "Why the roof design decides your solar outcome, what to pre-wire even if you are not installing yet, and how to avoid the retrofit costs most owners pay later.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.webp",
    category: "New Homes",
    content: [
      {
        heading: "The decisions that are cheap now and expensive later",
        body: [
          "Queensland has the best solar conditions in the country and among the highest rooftop solar uptake in the world. Most new homes here will have solar at some point, whether it goes on at handover or five years afterwards.",
          "That makes solar a design decision rather than a purchase decision. The things that determine how well a system performs — roof orientation, roof pitch, unobstructed roof area, cable pathways and switchboard capacity — are all fixed during construction.",
          "Getting them right costs almost nothing at design stage. Correcting them afterwards ranges from expensive to impossible.",
        ],
      },
      {
        heading: "Roof design decides the outcome",
        body: [
          "North-facing roof area produces the most total energy across a day. West-facing produces less overall but generates in the late afternoon, which matches household peak demand and is often more valuable if you are consuming rather than exporting.",
          "The practical answer for most Queensland houses is north for total generation with some west if the roof allows it, and the decision should be made while the roof form is still on paper.",
          "Roof pitch matters less than orientation but still matters. So does keeping a usable expanse clear — a roof broken up by multiple hips, valleys, vents, skylights and air conditioning units may have very little contiguous area left for panels.",
          "Shading is the other factor. A neighbour's mature tree or a two-storey building to the north will cost you more generation than any equipment choice will recover.",
        ],
      },
      {
        heading: "What to pre-wire even if you are not installing yet",
        body: [
          "Conduit from the roof space to the switchboard is the obvious one, and it is trivial while the walls are open.",
          "Switchboard capacity and physical space for the additional equipment matters more than people expect. A board sized exactly for the initial load leaves no room for a solar inverter, a battery system or an EV charger later.",
          "Conduit from the switchboard to the garage for a future EV charger is worth doing at the same time. The cable run through a finished house is the expensive part, not the charger.",
          "If a battery is likely, plan its location now — a shaded, ventilated position with adequate clearances, not a west-facing external wall in full afternoon sun, which shortens battery life considerably.",
        ],
      },
      {
        heading: "Sizing and the economics",
        body: [
          "The economics of rooftop solar in Queensland have shifted. Feed-in tariffs are far lower than they once were, which means the value now comes from consuming your own generation rather than exporting it.",
          "That changes optimal system design. Rather than maximising total generation, the aim is matching generation to when the household actually uses power, which is what makes west-facing panels and batteries more attractive than they were a decade ago.",
          "It also means shifting usage — running the dishwasher, pool pump and washing machine during the day — is worth more than adding panels.",
          "Export limits imposed by the network in some areas can also cap what a system delivers, and they are worth checking before sizing.",
        ],
      },
      {
        heading: "Hot water is often the better first investment",
        body: [
          "Water heating is one of the largest single electricity uses in a typical home. A heat pump hot water system, or a solar hot water system, frequently delivers a better return than the equivalent spend on additional panels.",
          "A heat pump paired with a timer set to run in the middle of the day effectively turns your roof generation into stored hot water, which is a cheaper form of storage than a battery.",
          "Whatever you choose, decide the hot water system before plumbing rough-in, because the location and type affect the plumbing and electrical layout.",
          "We plan roof form, conduit and switchboard capacity for this on every new build. Our <a href=\"/blog/house-orientation-queensland-climate/\">guide to orientation</a> covers the design decisions that reduce the load in the first place.",
        ],
      },
    ],
  },
  {
    slug: "asbestos-in-queensland-homes",
    title: "Asbestos in Queensland Homes: Where It Is and What Removal Costs",
    description:
      "Which building eras contain asbestos, the materials it turns up in, the difference between bonded and friable, and what licensed removal actually involves.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "If it was built before the late 1980s, assume it is there",
        body: [
          "Asbestos was used extensively in Australian residential construction from the 1940s through to the 1980s. Its use was progressively restricted and a total ban took effect at the end of 2003.",
          "The practical rule for South East Queensland housing is straightforward. A house built before the mid-1980s very likely contains asbestos somewhere. A house from the late 1980s may. A house built after 1990 is unlikely to, and one built after 2003 will not.",
          "This matters for any renovation, extension or demolition, because disturbing it without proper handling is both a health risk and a legal problem.",
        ],
      },
      {
        heading: "Where it turns up",
        body: [
          "Eaves and soffit lining is the most common location in Queensland houses, and one of the most frequently disturbed during renovation because eaves get replaced when a roof is done.",
          "Wet area wall sheeting behind tiles in bathrooms and laundries is the second, which is why a bathroom renovation on an older house so often triggers a removal.",
          "Beyond those: external cladding, fencing, the backing on vinyl floor coverings, roof sheeting on sheds and carports, insulation around old hot water systems and flues, and sometimes textured ceiling coatings.",
          "It is frequently found in places nobody looked, which is exactly why investigation before contract matters on any older house.",
        ],
      },
      {
        heading: "Bonded versus friable",
        body: [
          "Bonded asbestos is fibres held within a solid matrix — the sheeting in eaves, cladding and wet areas. While it is intact and undisturbed it presents low risk, because the fibres are locked in.",
          "Friable asbestos is loose, crumbly material where fibres can become airborne easily. It is less common in ordinary housing but appears in old pipe lagging and some insulation products.",
          "The distinction matters because the handling requirements and the licensing differ significantly, and friable removal is considerably more involved and more expensive.",
          "Bonded material that is broken, weathered, drilled or cut stops behaving like bonded material. Cutting an asbestos sheet with a power tool is one of the more dangerous things an owner can do to their own house.",
        ],
      },
      {
        heading: "What removal involves",
        body: [
          "In Queensland, asbestos removal work is regulated and licensing requirements apply based on the type and quantity of material. Removal must be carried out safely with appropriate controls, and the waste must go to a facility licensed to receive it.",
          "The process typically involves identification, often with sampling and laboratory analysis, then a removal plan, then the removal itself with the area isolated and controls in place, then disposal with documentation, and a clearance before other trades return.",
          "Cost is driven by quantity, accessibility and type. Eaves on a single-storey house are relatively straightforward. Wet area sheeting behind tiling in a bathroom involves more work. Friable material is another level again.",
          "The item that most often surprises people is the delay. Removal has to happen before other trades can proceed, and it cannot be compressed.",
        ],
      },
      {
        heading: "Getting it into the budget",
        body: [
          "This is why we investigate before contract on any pre-1990 house. An asbestos position established at quoting stage is a defined cost. One discovered after demolition starts is a variation, a delay, and an unpleasant conversation.",
          "If you are buying an older property with renovation in mind, factor it in. A building and pest inspection may note the likelihood but will not usually quantify it.",
          "Do not remove it yourself to save money. The regulations exist for a reason, the disposal requirements are strict, and undocumented removal creates a problem at resale.",
          "We establish and price the asbestos position before contract on every renovation. Our <a href=\"/locations/brisbane/renovations/\">Brisbane renovations page</a> covers what else we look for before quoting.",
        ],
      },
    ],
  },
  {
    slug: "subdivision-or-community-title-queensland",
    title: "Splitting a Duplex: Subdivision or Community Title?",
    description:
      "The two ways to separately title a Queensland dual occupancy, how each affects the design and services, and why the decision has to be made before you build.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/duplex-modern-dual.webp",
    category: "Duplexes",
    content: [
      {
        heading: "Decide before you design",
        body: [
          "If you intend to sell the halves of a duplex separately, the title path has to be decided before the design is drawn. It affects where the boundary sits, how the services are laid out, and sometimes the structure of the building itself.",
          "Retrofitting a title split onto a building designed as a single-title dual occupancy ranges from expensive to impossible.",
          "This is the most common expensive mistake in small-scale development, and it is entirely avoidable by answering one question early: what do you intend to do with this when it is finished?",
        ],
      },
      {
        heading: "Standard format: dividing the land",
        body: [
          "A standard format subdivision divides the land itself, creating two separate lots each with its own title, defined by boundaries on the ground.",
          "Each dwelling sits wholly within its own lot, each has its own services connected independently, and each owner owns their land outright with no shared property and no body corporate.",
          "This is generally the cleanest outcome and the one buyers prefer, because it produces two ordinary houses on two ordinary lots. Valuers and lenders treat them straightforwardly.",
          "The catch is that it requires the site to support two compliant lots — each meeting minimum lot size, frontage and dimension requirements, each with its own legal access and its own services. Plenty of duplex sites cannot achieve this.",
        ],
      },
      {
        heading: "Building format: dividing the building",
        body: [
          "A building format plan defines lots by reference to the structure — floors, walls and ceilings — rather than by boundaries on the ground. This is how apartments and most townhouse developments are titled.",
          "It creates a community titles scheme with a body corporate, common property, shared insurance and ongoing administration.",
          "The advantage is that it works on sites where a standard format subdivision cannot, because the lots do not need to independently satisfy minimum land requirements in the same way.",
          "The disadvantages are the ongoing body corporate obligations, the shared insurance and maintenance arrangements, and the fact that some buyers and some lenders view a two-lot scheme less favourably than two freestanding titles.",
        ],
      },
      {
        heading: "What it changes in the build",
        body: [
          "Services are the biggest practical difference. Separate titles generally want fully independent connections — separate water meters, separate electrical supply, separate sewer connections — and running those independently has to be designed from the start.",
          "The common wall and its fire and acoustic separation requirements are affected by whether the dwellings are separately titled, and the requirements for a fire-separating wall between separately titled dwellings are specific.",
          "Access, driveways and where the boundary sits relative to eaves, gutters and footings all need to be resolved on the plan rather than discovered by the surveyor afterwards. An eave overhanging a boundary is a problem; a footing crossing one is a bigger problem.",
        ],
      },
      {
        heading: "The process",
        body: [
          "Both paths involve a surveyor preparing a plan, council approval of the reconfiguration or the scheme, and lodgement with the titles office. Both take time, and both should run in parallel with construction rather than starting at completion.",
          "Get a surveyor involved at design stage. They will tell you quickly whether a standard format subdivision is achievable on your site, which is the question that determines everything else.",
          "Speak to a lender early too if finance is involved, because how the project will be titled affects how it is valued and funded.",
          "We plan the title path into the design from the first meeting. Our <a href=\"/blog/dual-occupancy-feasibility-checklist/\">dual occupancy feasibility checklist</a> covers the other checks worth doing before you buy the block.",
        ],
      },
    ],
  },
  {
    slug: "pool-with-a-new-build-queensland",
    title: "Building a Pool With Your New Home: Sequencing, Access and Fencing",
    description:
      "Why building the pool with the house is usually cheaper, the access problem that catches people out, and what Queensland pool fencing law requires.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/villa-luxury-modern.webp",
    category: "New Homes",
    content: [
      {
        heading: "Do it now or plan for it properly",
        body: [
          "A pool is one of the few significant additions where doing it during the build is meaningfully cheaper than doing it afterwards, and the reason is access.",
          "During construction the site is already open, machinery is already coming and going, and there is nothing finished to protect. Afterwards, the same excavator has to get past a completed house, a finished driveway, established landscaping and a fence.",
          "If a pool is likely within a few years, either build it now or design the site so the access still exists later. The second option costs nothing on paper and saves a great deal.",
        ],
      },
      {
        heading: "The access problem",
        body: [
          "This is the item that most often turns an affordable pool into an expensive one. Excavation equipment, the shell or the concrete pump, and spoil removal all need a path to the backyard.",
          "On a wide block with side access, straightforward. On a narrow inner-suburban block with a house across most of the frontage, the options narrow quickly — craning equipment over the house, removing fencing and reinstating it, or using smaller machinery over more days.",
          "Craning a fibreglass shell over a completed house is routine but adds real cost, and it needs clearance from powerlines and neighbouring structures.",
          "Spoil removal is the forgotten one. A pool excavation produces a substantial volume of material that has to leave the site, and on a tight block with no room to stockpile, it leaves by truck immediately, which costs more.",
        ],
      },
      {
        heading: "Concrete or fibreglass",
        body: [
          "Fibreglass shells are faster to install, generally cheaper, and come in fixed shapes and sizes. Installation can be measured in weeks. The constraint is that you choose from what is manufactured, and the shell has to physically reach the hole.",
          "Concrete pools are formed on site, so shape, depth and size are unconstrained, and they suit sloping sites and unusual spaces where a shell would not fit. They take considerably longer and cost more.",
          "On a sloping block the structural requirements change substantially for either type, because a pool partly above ground is a retaining structure and needs engineering to match.",
        ],
      },
      {
        heading: "Fencing is not optional and not flexible",
        body: [
          "Queensland pool safety law is strict and enforced. Any pool capable of holding water above a shallow depth must be fenced to the standard, and the requirements cover barrier height, gaps, gate self-closing and self-latching, latch height, and the non-climbable zone on both sides of the barrier.",
          "The non-climbable zone is what catches people out. Objects near the fence that could be climbed — air conditioning units, planter boxes, retaining walls, pergola posts, even certain plants — can render an otherwise compliant fence non-compliant.",
          "This is why fencing belongs in the design rather than being added afterwards. Landscaping and service equipment positions have to work with the barrier, not against it.",
          "Pools must be registered, and a pool safety certificate is required when selling or leasing. Non-compliance carries penalties and, more importantly, real risk.",
        ],
      },
      {
        heading: "The costs beyond the pool",
        body: [
          "The pool itself is rarely the whole number. Surrounds and coping, paving or decking, the fence, filtration and pump equipment with its own screened location, electrical supply, water, and landscaping to make it look like part of the house rather than a hole in the yard.",
          "Heating, if you want it, is a further decision. In South East Queensland a heat pump or solar heating extends the usable season considerably.",
          "Ongoing costs — chemicals, power, cleaning and eventual resurfacing — are worth understanding before committing.",
          "We coordinate pools within the build program so access, services and fencing are planned rather than retrofitted. Our <a href=\"/locations/gold-coast/custom-builds/\">Gold Coast custom build page</a> covers how outdoor living gets designed into the site.",
        ],
      },
    ],
  },
  {
    slug: "driveway-crossover-and-site-access-queensland",
    title: "Driveways, Crossovers and Site Access: The Costs Nobody Quotes",
    description:
      "Why the driveway is a regulated structure, what a crossover approval involves, the gradient limits that catch steep blocks, and how access affects the whole build.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "More regulated than people expect",
        body: [
          "A driveway looks like landscaping and behaves like infrastructure. The section between the road and your boundary — the crossover or vehicle crossing — sits in the road reserve, which is council land, and building it requires council approval.",
          "That approval covers width, position, materials, levels, drainage and how it interacts with the kerb, the footpath, street trees and services. It is not a formality and the specifications are prescriptive.",
          "Council may also require an existing redundant crossover to be removed and the kerb reinstated, which is an additional cost that surprises people on knockdown rebuild projects where the driveway is moving.",
        ],
      },
      {
        heading: "Gradient limits and steep blocks",
        body: [
          "Australian Standards set limits on driveway gradients and, critically, on the rate at which gradient can change. The transition where a steep driveway meets a flatter road or garage is what determines whether a car scrapes.",
          "This is the constraint that causes real problems on steep blocks. Where a flood overlay requires a high floor level and the block also falls away from the road, reconciling a legal driveway gradient with the garage floor level can be genuinely difficult.",
          "The solutions are all design solutions: lengthening the driveway by curving it, moving the garage, splitting levels, or in some cases putting the garage at street level separate from the house.",
          "None of these can be applied after the house is designed. It is one of the reasons the driveway needs to be considered at the same time as the floor levels rather than afterwards.",
        ],
      },
      {
        heading: "Construction access is a different problem",
        body: [
          "Before the finished driveway exists, the site still needs to receive concrete trucks, cranes, delivery vehicles and machinery. On a sloping or long-approach block, the temporary access can be a significant cost in its own right.",
          "Where a concrete truck cannot reach the pour, the alternative is a concrete pump, and that is a cost per pour rather than once. Across footings, slab, driveway and any retaining, it accumulates.",
          "On acreage, the driveway often has to be constructed to a usable standard early simply so the build can proceed, then finished properly at the end.",
          "This is why access is one of the four things we establish before quoting. A builder who has not looked at how their trucks reach the work has not priced your site.",
        ],
      },
      {
        heading: "Drainage and what sits under it",
        body: [
          "A driveway is a large impervious surface, and the water has to go somewhere other than the neighbour's yard or your garage. Falls, grated drains at the garage entry, and connection to a legal stormwater discharge point all need designing.",
          "On a driveway that slopes toward the house, a properly designed and drained grate at the low point is the only thing between a heavy downpour and water in the garage.",
          "Service crossings under the driveway need to be in place before it is poured. Conduit for future needs — irrigation, lighting, an EV charger, a future shed — costs almost nothing to lay while the ground is open and is very expensive to add through finished concrete.",
        ],
      },
      {
        heading: "Getting it priced properly",
        body: [
          "Ask specifically what the quote includes for the crossover, the driveway itself, any redundant crossover removal, drainage and temporary construction access. These are frequently allowances rather than priced items.",
          "On a sloping or long-approach block, ask whether concrete pumping has been allowed for and on how many pours.",
          "We price access and the driveway as defined scope at estimate stage. Our <a href=\"/blog/what-are-site-costs-building-quote/\">guide to site costs</a> covers the other items that turn an advertised price into a real one.",
        ],
      },
    ],
  },
  {
    slug: "roof-design-queensland-climate",
    title: "Roof Design for the Queensland Climate: Pitch, Eaves and Material",
    description:
      "How roof form drives comfort, running cost and solar potential in a subtropical climate — and why eave depth is the most valuable dimension in the whole house.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-brick-contemporary.webp",
    category: "New Homes",
    content: [
      {
        heading: "The most consequential surface on the house",
        body: [
          "The roof takes the full intensity of Queensland sun for the life of the building, sheds subtropical downpours, carries the solar system, and through its eaves determines how much sun reaches the walls and windows below.",
          "It is also where a great deal of contemporary residential design goes wrong, because roof forms are frequently chosen for how they look in an elevation rather than for what they have to do in this climate.",
        ],
      },
      {
        heading: "Eaves are the highest-value dimension in the house",
        body: [
          "A generous eave shades the wall and window below from high summer sun while still admitting lower winter sun. On a north-facing elevation, a properly sized overhang does both jobs automatically with no moving parts and no running cost.",
          "It also protects the wall from driving rain, keeps water away from the window heads and the base of the wall, and reduces the thermal load on the building envelope.",
          "The contemporary preference for minimal or zero eaves is the single most climate-hostile trend in Australian housing. It looks crisp in a photograph and it produces a house that is hotter, wetter around the openings, and more expensive to run.",
          "If you are trading anything off in a Queensland design, do not trade the eaves.",
        ],
      },
      {
        heading: "Pitch, form and what each does",
        body: [
          "A traditional pitched roof creates roof space, which is thermally useful — a ventilated cavity between the hot roof surface and the ceiling below, with room for substantial insulation.",
          "A low-pitch or skillion roof gives a contemporary form and can be excellent for solar, but reduces or removes that buffer space, which makes ceiling insulation and roof space ventilation more critical rather than less.",
          "Flat roofs on residential buildings in a high-rainfall subtropical climate demand exceptional detailing. They can work, and they fail expensively when they do not.",
          "Complexity is worth watching. Every hip, valley and junction is a potential leak point and a break in the usable solar area. A simple roof form is cheaper to build, less likely to leak, and better for panels.",
        ],
      },
      {
        heading: "Material",
        body: [
          "Metal sheeting is the dominant choice in Queensland for good reasons — light, quick to install, works at low pitches, sheds heavy rain readily, and pairs naturally with rainwater collection.",
          "Colour matters more than people expect. A light-coloured roof reflects substantially more solar radiation than a dark one, and in this climate that difference is measurable in comfort and cooling cost. Dark roofs are popular and they are working against you every summer afternoon.",
          "Tiles have more thermal mass and can be quieter in rain, but are heavier, need a steeper minimum pitch, and the battens and sarking underneath do more of the weatherproofing work than the tiles themselves.",
          "Near the coast, corrosion resistance governs. Sheeting, fixings and flashings all need to be appropriate to the salt exposure, and mixing incompatible metals causes rapid corrosion at the junction.",
        ],
      },
      {
        heading: "Gutters, downpipes and the wet season",
        body: [
          "South East Queensland gets intense short-duration rainfall, and gutter and downpipe sizing needs to reflect that rather than an annual average. Undersized guttering overflows in exactly the storms that matter, usually back into the eaves.",
          "Gutter falls, adequate downpipe numbers, and overflow provisions that direct water away from the building are all detail decisions that show up only in a heavy event.",
          "Roof space ventilation is the companion item. A well-ventilated roof space runs dramatically cooler than a sealed one, which reduces the heat load on the ceiling below.",
          "We design roof form, eaves and orientation together, because they are the same decision. Our <a href=\"/blog/house-orientation-queensland-climate/\">guide to orientation</a> covers the other half of it.",
        ],
      },
    ],
  },
  {
    slug: "insulation-and-ventilation-queensland-homes",
    title: "Insulation and Ventilation in a Queensland Home: What Actually Matters",
    description:
      "Why insulating for heat exclusion differs from insulating for warmth, where to spend first, and why ventilation does more than insulation in a subtropical climate.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-stucco-twostory.webp",
    category: "New Homes",
    content: [
      {
        heading: "A different problem to southern Australia",
        body: [
          "Most insulation advice in Australia is written for cold-climate performance — keeping heat in during winter. In South East Queensland the dominant problem is the reverse: keeping heat out for eight months of the year, and dealing with humidity.",
          "That changes where the money should go and which products matter. A specification copied from a Melbourne project is not optimised for Brisbane.",
          "It also means ventilation carries more of the load here than it does further south, and in the shoulder seasons it does almost all of it.",
        ],
      },
      {
        heading: "The ceiling comes first",
        body: [
          "Heat load in a Queensland house comes overwhelmingly from above. The roof surface reaches extreme temperatures in summer sun and radiates into the roof space, which then radiates into the rooms below.",
          "Ceiling insulation is therefore the highest-value insulation in the building, and it is also the cheapest to install well and the easiest to upgrade later.",
          "Roof space ventilation works with it. A well-ventilated roof space stays significantly cooler, which reduces the temperature difference the insulation has to work against. Insulation and ventilation are complementary here, not alternatives.",
          "Reflective foil sarking under the roof sheeting adds a further layer by reflecting radiant heat before it enters the roof space at all — particularly effective under metal roofing.",
        ],
      },
      {
        heading: "Walls, and which ones",
        body: [
          "Wall insulation matters, but not equally on every elevation. The western and eastern walls take low-angle sun that eaves cannot block, so they carry the highest load. The southern wall takes the least.",
          "External shading beats insulation on the west. Stopping the sun before it reaches the wall is far more effective than resisting the heat afterwards, which is why screens, louvres, verandahs and planting on the western side earn their cost.",
          "Where steel framing is used, thermal bridging needs addressing with thermal break strips, otherwise the frame conducts heat straight through the insulation layer.",
        ],
      },
      {
        heading: "Ventilation and humidity",
        body: [
          "Cross-ventilation is the traditional Queensland cooling strategy and it still works. Openings on opposite or adjacent walls, a clear internal path between them, and openings large enough for air to actually move.",
          "Ceiling fans then extend the comfortable range considerably at negligible running cost. For a large part of the Queensland year, fans plus cross-ventilation are the entire cooling requirement.",
          "Humidity is the other half of comfort here, and it is why exhaust ventilation matters. Bathroom and kitchen exhausts must discharge outside the building, not into the roof space — venting moist air into a roof cavity is a reliable way to grow mould and degrade insulation.",
          "Subfloor ventilation matters on any suspended-floor house. Poor subfloor airflow produces damp, which attracts termites and rots timber.",
        ],
      },
      {
        heading: "Where to spend, in order",
        body: [
          "Design first — orientation, eave depth and cross-ventilation cost nothing and outperform everything else.",
          "Then ceiling insulation and roof space ventilation, which address the largest heat source. Then reflective sarking under the roof. Then external shading on western and eastern glazing. Then wall insulation. Then glazing performance.",
          "Glazing upgrades are frequently sold as the first move and are usually better value further down this list, because shading unglazed western wall and shading the glass externally both address the problem before it becomes one.",
          "New Queensland homes meet a raised energy performance standard under the National Construction Code, and this order is also the cheapest route to compliance. Our <a href=\"/blog/roof-design-queensland-climate/\">roof design guide</a> covers the eaves and ventilation side in more detail.",
        ],
      },
    ],
  },
  {
    slug: "duplex-or-house-which-performs-better-seq",
    title: "Duplex or Single House: Which Performs Better as an Investment?",
    description:
      "A straight comparison for South East Queensland investors — yield, land content, resale market, finance, and the situations where each wins.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/stock/duplex-modern-dual.webp",
    category: "Duplexes",
    content: [
      {
        heading: "Two different bets on the same block",
        body: [
          "The question comes up on almost every dual occupancy enquiry: is it better to build one house or two dwellings on this land?",
          "There is no universal answer, because the two options optimise for different things. A duplex generally produces more income from the same land. A single house generally produces stronger capital growth per dollar invested.",
          "Which matters more depends on your holding period, your cash flow position and your exit plan — not on which one sounds better in the abstract.",
        ],
      },
      {
        heading: "The yield argument for a duplex",
        body: [
          "Two dwellings on one block generate two rents from one land purchase, and the combined rent is typically well above what a single house on the same land would achieve.",
          "The build cost is not double a single house — the site works, the driveway, the services connection and the professional fees are largely shared, so the second dwelling costs less to add than the first did to build.",
          "That combination is why duplexes suit investors focused on cash flow, and why they work best in areas where land is affordable relative to rents. In Logan, Ipswich and the northern Gold Coast corridor, that ratio frequently works.",
          "It also gives you two tenancies rather than one, which halves your vacancy exposure. When one dwelling is empty you still have half the income, rather than none.",
        ],
      },
      {
        heading: "The capital growth argument for a house",
        body: [
          "Land appreciates. Buildings depreciate. A single house on a full block has a much higher land content per dollar invested than a duplex, where the same land is split across two structures and a larger share of your money sits in building.",
          "Over a long holding period in an appreciating area, that land content is what drives the return.",
          "A single house also has a broader buyer market at resale — owner-occupiers as well as investors. A duplex on a single title generally sells to investors only, which is a smaller pool and typically means a lower price relative to the combined value of two separate titles.",
          "That last point is why the title decision matters so much. Two separately titled dwellings can each sell to an owner-occupier; one title holding both cannot.",
        ],
      },
      {
        heading: "Finance, tax and practical differences",
        body: [
          "Lenders assess duplexes differently to houses, and some apply tighter lending criteria or lower valuations to dual occupancy on a single title. Speak to a lender before committing, because this can change the numbers materially.",
          "Construction finance on a duplex is drawn down against progress stages, so program certainty has a direct interest cost. A single house build is shorter and the exposure smaller.",
          "Depreciation is generally more favourable on a duplex, because a higher proportion of the total investment sits in the building rather than the land. That is the mirror image of the capital growth argument — the same fact working in the other direction.",
          "Management is more work. Two tenancies, two sets of maintenance, and a shared structure where an issue in one dwelling can affect the other.",
        ],
      },
      {
        heading: "Where each one wins",
        body: [
          "A duplex generally wins where land is affordable relative to rents, where the site comfortably supports two compliant dwellings, where cash flow matters more than growth, and where the site can be separately titled so the exit is not restricted.",
          "A single house generally wins where land is expensive relative to rents — most of inner and middle Brisbane — where the site is constrained, where the holding period is long, and where owner-occupier resale demand is strong.",
          "The site itself often decides it. A block that cannot achieve two compliant dwellings, or cannot be separately titled, removes most of the duplex advantage before you begin.",
          "We will run the feasibility and tell you which we think your site supports, including when the answer is one house. Our <a href=\"/blog/dual-occupancy-feasibility-checklist/\">feasibility checklist</a> covers the site tests, and our <a href=\"/blog/subdivision-or-community-title-queensland/\">title guide</a> covers the exit.",
        ],
      },
    ],
  },
  {
    slug: "construction-stages-explained-queensland",
    title: "The Construction Stages of a Queensland Home, Explained",
    description:
      "What happens at each stage of a build from site start to handover, roughly how long each takes, and what tends to cause delay at each point.",
    date: "2026-08-12",
    readTime: "7 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "New Homes",
    content: [
      {
        heading: "Why the stages matter to you",
        body: [
          "Construction is divided into defined stages, and those stages do more than organise the trades. They are the points at which certifier inspections happen and, on most contracts, the points at which progress payments fall due.",
          "Understanding the sequence helps you know what to expect, when your decisions are needed, and when the site will look busy versus deceptively idle.",
          "The timings below are typical for a South East Queensland detached home. Weather, site conditions and selections all move them.",
        ],
      },
      {
        heading: "Site start and earthworks",
        body: [
          "Site set-out, temporary fencing, sanitary and safety provisions, then clearing, cut and fill, and any retaining required to create a level building platform.",
          "On a sloping block this stage is far longer and more expensive than on a flat one, and it is where slope translates directly into cost.",
          "Wet weather is the main delay risk. Earthworks cannot proceed on saturated ground, and a wet week can cost two.",
        ],
      },
      {
        heading: "Footings and slab",
        body: [
          "Excavation for footings, steel reinforcement placement, service penetrations set in position, certifier inspection, then the pour.",
          "On a reactive clay site this is where the engineered footing system is installed, and it is the largest single cost variance between sites.",
          "Once poured, plumbing penetrations are fixed permanently, which determines where wet areas can go. Check the set-out against your plan before the pour, not after.",
          "Typically two to four weeks including cure time.",
        ],
      },
      {
        heading: "Frame",
        body: [
          "Wall frames and roof trusses erected, braced and tied down, then certifier inspection before anything is covered.",
          "This is the stage where the house suddenly looks like a house, and it is the most valuable time for you to walk through. Room sizes, ceiling heights, window positions and openings are all visible and still relatively cheap to change.",
          "Typically two to four weeks. Truss and frame lead times are a common cause of delay ahead of it.",
        ],
      },
      {
        heading: "Lock-up",
        body: [
          "Roof covering, external cladding or brickwork, windows and external doors installed. The building becomes weathertight and can be secured.",
          "Brickwork extends this stage considerably compared to lightweight cladding. Window lead times are a frequent bottleneck, which is why they are among the first selections that must be locked in.",
          "Typically four to eight weeks depending on external material.",
        ],
      },
      {
        heading: "Fixing and services",
        body: [
          "Electrical, plumbing and air conditioning rough-in inside the wall cavities, insulation, then plasterboard, then internal doors, skirting, architraves, cabinetry and wet area waterproofing and tiling.",
          "This is the longest stage and the one where selections delays bite hardest, because almost every trade is waiting on a product decision.",
          "It is also the stage where the site can look quiet while a great deal is happening, since most of the work is now inside.",
          "Typically eight to fourteen weeks.",
        ],
      },
      {
        heading: "Practical completion and handover",
        body: [
          "Painting, floor coverings, fit-off of tapware, fittings, appliances and hardware, external works including driveway and landscaping, final clean, certifier final inspection and the final certificate.",
          "Then your pre-handover walk-through, the defect list, rectification, final payment and keys.",
          "Typically three to six weeks, though the defect rectification loop can extend it if the list is long.",
          "The whole sequence commonly runs nine to fourteen months for a detached home, with design and approvals ahead of it. Our <a href=\"/blog/building-inspection-stages-queensland/\">inspection stages guide</a> covers what the certifier checks at each point.",
        ],
      },
    ],
  },
  {
    slug: "building-budget-contingency-queensland",
    title: "How Much Contingency Should a Building Budget Carry?",
    description:
      "Why a fixed-price contract still needs a contingency, how much to hold for a new build versus a renovation, and the costs outside the contract people forget.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "A fixed price is not your total cost",
        body: [
          "The most common budgeting mistake is treating the building contract sum as the project cost. It is the largest component, but a meaningful number of real costs sit outside it.",
          "Add the costs outside the contract, add a contingency for the things inside it that can move, and you get a project budget. Skip either and you get a shortfall at the least convenient point.",
        ],
      },
      {
        heading: "How much contingency",
        body: [
          "On a new build with a genuine fixed price, complete drawings, a documented selections schedule, a soil test and a survey already done, a contingency of around five per cent is reasonable. The investigation has removed most of the unknowns.",
          "On a new build where the site investigation has not been completed and site works sit behind provisional sums, hold considerably more — ten per cent or above — because the largest variable in the project has not been measured.",
          "On a renovation, hold more again. Fifteen to twenty per cent is realistic on an older house, because the condition behind the walls cannot be fully known until it is opened. On a pre-1950s character home, the higher end of that range.",
          "If your builder's contract carries no contingency at all on a renovation, that is not reassurance. It means the risk is either hidden in the margin or waiting for you as a variation.",
        ],
      },
      {
        heading: "The costs outside the building contract",
        body: [
          "Design and consultants: architect or building designer, engineer, surveyor, town planner where a development application is required, energy assessor, and the building certifier.",
          "Approval and authority fees: development application, building approval, plumbing approval, and any infrastructure charges the council levies, which on a dual occupancy can be substantial.",
          "Searches and investigations: soil test, contour survey, council property report, sewer plans, and a bushfire assessment where required.",
          "Legal and finance: conveyancing, contract review, loan establishment, valuation, and construction loan interest during the build — which on a twelve-month program is a real number people routinely omit.",
          "Then the items after the contract ends: landscaping, fencing, driveway where excluded, window furnishings, appliances if not included, and moving costs.",
          "And where you are rebuilding, the cost of renting somewhere for the duration.",
        ],
      },
      {
        heading: "What contingency is actually for",
        body: [
          "It is for genuine unknowns: rock encountered during excavation, a service connection further away or more complex than expected, an asbestos quantity above what was identified, structural condition worse than the inspection suggested, or a required authority condition that was not anticipated.",
          "It is not a budget for upgrading your tapware. Once a contingency becomes a discretionary spending allowance, it is no longer available for the thing it existed to cover.",
          "Keep it separate, mentally and ideally in your finance structure. Money you cannot easily reach is money that is still there when you need it.",
        ],
      },
      {
        heading: "How to need less of it",
        body: [
          "Do the investigation before the contract. A soil test, a contour survey, a council property report and sewer plans together cost a small fraction of what they routinely save, and each one converts an unknown into a fixed number.",
          "Complete your selections before signing, so provisional sums are few and specific rather than broad.",
          "Resist changes during construction. Variations are the most expensive way to buy anything, because you pay for the change plus the disruption plus the margin on both.",
          "And read what the provisional sums cover before signing rather than after. Our <a href=\"/blog/what-is-a-provisional-sum/\">guide to provisional sums</a> explains how to tell a reasonable allowance from a deferred increase.",
        ],
      },
    ],
  },
  {
    slug: "architect-building-designer-or-draftsperson",
    title: "Architect, Building Designer or Draftsperson: Who Do You Need?",
    description:
      "The three design professionals used on Queensland homes, what each is licensed to do, roughly what they cost, and which suits your project.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "Three different roles, often confused",
        body: [
          "Most people building a house in Queensland engage one of three professionals to produce the design: an architect, a building designer, or a draftsperson. The titles get used loosely, the fees differ substantially, and the right choice depends on the project rather than on prestige.",
          "The short version is that all three can produce drawings that get approved. What differs is the depth of design thinking, the level of documentation, and how much they carry the project through construction.",
        ],
      },
      {
        heading: "Architects",
        body: [
          "Architect is a protected title in Queensland \u2014 only those registered with the Board of Architects may use it. Registration requires an accredited degree, recorded practical experience and an examination.",
          "What you are paying for is design capability and documentation depth. On a difficult site, an unusual brief, or a project where the spatial outcome matters more than the square metre rate, that capability is the difference between an adequate house and a very good one.",
          "Architects typically charge a percentage of construction cost, and usually offer to administer the contract during construction as well. On a complex build that administration has real value.",
        ],
      },
      {
        heading: "Building designers",
        body: [
          "Building designers are licensed by the QBCC in Queensland, in classes that determine the scale and complexity of work they can take on. Many produce excellent residential work at a lower fee than an architect.",
          "For a straightforward new home, a renovation, or a duplex on a workable site, a good building designer is frequently the right answer \u2014 particularly one who knows the local council's requirements well.",
          "As with builders, check the licence class on the QBCC register and confirm it covers your project type.",
        ],
      },
      {
        heading: "Draftspeople",
        body: [
          "A draftsperson produces drawings, generally working from a design that already exists or from a fairly prescriptive brief. The fee is lowest and the design input is smallest.",
          "This works when you know exactly what you want and the site is uncomplicated. It works poorly when the project needs someone to solve a problem \u2014 a difficult slope, a character overlay, an awkward orientation.",
          "The risk is paying for drawings that get approved and produce a house nobody thought hard about.",
        ],
      },
      {
        heading: "How to choose",
        body: [
          "Match the professional to the difficulty of the problem. A flat block, a conventional brief and a clear idea of the outcome does not need an architect. A steep character block with a complex brief probably does.",
          "Whoever you engage, ask what the fee covers: concept only, or full documentation including engineering coordination and the detail a builder needs to price accurately. Thin documentation is the leading cause of provisional sums and variations.",
          "We are happy to review existing drawings for buildability and cost before you commit to construction, and to recommend designers where you do not have one. Our <a href=\"/locations/brisbane/custom-builds/\">Brisbane custom build page</a> explains how design and site investigation fit together.",
        ],
      },
      {
        heading: "What to agree before you engage anyone",
        body: [
          "Agree the scope in writing: concept design only, or full documentation including engineering coordination, energy assessment and the level of detail a builder needs to price accurately without provisional sums.",
          "Agree how many revisions are included. Design iteration is normal and open-ended iteration is expensive, so a defined number of rounds protects both sides.",
          "Agree who lodges the applications and who responds to information requests during assessment, because that work takes time and someone has to own it.",
          "And agree what happens during construction \u2014 whether they answer builder queries, review variations, or hand over entirely at approval. Thin documentation and no one available to clarify it is the most common cause of avoidable variations.",
        ],
      },
    ],
  },
  {
    slug: "how-to-read-a-building-quote",
    title: "How to Read a Building Quote and Compare Two Fairly",
    description:
      "Why the lowest number is frequently the most expensive, the six things to check line by line, and the questions that expose an incomplete price.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/blueprint-keys.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "Two quotes are rarely comparable",
        body: [
          "Owners routinely put two builders' numbers side by side and pick the lower one. That comparison only works if both quotes cover the same scope, priced on the same information, with the same assumptions about the site.",
          "In practice they almost never do. One builder may have a soil test and a survey; the other may have an assumption. One may include the driveway; the other may not. One may carry a realistic tiling allowance; the other may carry one no real tile meets.",
          "So the useful skill is not comparing totals. It is working out what each quote actually contains.",
        ],
      },
      {
        heading: "1. What site classification was priced?",
        body: [
          "Ask each builder what site classification under AS 2870 the footings were priced to, and whether they have a soil test for your block.",
          "If the answer is an assumption, the largest single cost variable in the project is unpriced, and the quote is provisional regardless of what the heading says. Reactive clay across South East Queensland means the difference between a conventional slab and an engineered footing runs into tens of thousands.",
        ],
      },
      {
        heading: "2. What is in the site works?",
        body: [
          "Earthworks, retaining, drainage, service connections, demolition and site access. Ask whether these are fixed items or allowances, and what basis was used \u2014 a contour survey, or an eyeball.",
          "Ask specifically whether concrete pumping has been allowed for and on how many pours. On a sloping or narrow block that is a real recurring cost.",
        ],
      },
      {
        heading: "3. Provisional sums and prime cost items",
        body: [
          "Count them and read what each covers. A handful of specific allowances is normal. Broad allowances covering most of the site work mean the price is not fixed in any meaningful sense.",
          "For prime cost items, go and look at what the allowance actually buys before signing. An allowance no real product meets is a deferred increase, not a saving.",
        ],
      },
      {
        heading: "4. What is excluded",
        body: [
          "The exclusions list is the most informative page in most quotes and the least read. Driveways, landscaping, fencing, window furnishings, letterboxes, clotheslines and appliances are commonly excluded.",
          "A quote that excludes the driveway and one that includes it are not comparable, and the difference is not small.",
        ],
      },
      {
        heading: "5. Payment stages and the deposit",
        body: [
          "Check the deposit is within the 5 per cent cap that applies to Queensland domestic building contracts over $20,000.",
          "Then check the progress payment stages are proportionate to the work completed at each point. A front-loaded schedule leaves you exposed if the job stalls.",
        ],
      },
      {
        heading: "6. What happens when something changes",
        body: [
          "Ask how variations are priced and approved, and confirm they will always be documented in writing before work proceeds.",
          "Ask what the defects liability period is, and confirm QBCC home warranty cover for your job specifically.",
          "A builder confident in their pricing will answer all of this without hesitation. Our <a href=\"/blog/what-are-site-costs-building-quote/\">guide to site costs</a> covers what turns an advertised price into a real one.",
        ],
      },
      {
        heading: "Ask for the quote to be broken down",
        body: [
          "A single lump sum tells you nothing about what is inside it. Ask for a breakdown by trade or stage \u2014 site works, footings and slab, frame, roof, external cladding, services, internal fit-out, external works.",
          "That breakdown lets you compare two quotes meaningfully and shows you immediately where they differ. It also reveals whether a low quote is genuinely more efficient or simply missing scope.",
          "A builder who has priced your job properly can produce this without difficulty, because they built the number that way. One who cannot is telling you something.",
        ],
      },
    ],
  },
  {
    slug: "second-storey-addition-or-raise-queensland",
    title: "Second-Storey Addition or Raise the House? A Queensland Comparison",
    description:
      "Two ways to add a level to an existing home, what each demands structurally, how the character overlay affects the choice, and which usually wins.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "The same goal, two very different projects",
        body: [
          "When a family outgrows a single-level house on a good block, there are two ways to add space upward: build a new storey on top, or lift the existing house and build underneath.",
          "They sound similar and they are not. They load the structure differently, they interact with the planning rules differently, and they produce different houses.",
        ],
      },
      {
        heading: "Adding a storey on top",
        body: [
          "A second-storey addition puts significant new load on the existing structure, which means the footings, the walls and the framing below all have to carry it. On a house that was not designed for a second level, that frequently means substantial underpinning and structural reinforcement.",
          "The existing roof comes off, which exposes the house to weather for a period and usually means moving out. It also means the new level's floor plan is constrained by where the load can be carried down.",
          "It works best on solidly built post-war homes with good footings, and where the existing ground floor layout is worth keeping.",
        ],
      },
      {
        heading: "Raising and building under",
        body: [
          "Lifting the house transfers it onto new engineered supports, so the new lower level is built fresh rather than squeezed into an existing structure. The original floor plan comes along largely intact.",
          "The constraint is height. How far the house can be lifted is set by the overlay provisions, the building height limit and the relationship to neighbours, and that height determines the ground floor ceiling. A constrained height produces a basement rather than a living level.",
          "It suits timber houses on stumps \u2014 which is most pre-war Queensland housing \u2014 and is far less applicable to a slab-on-ground brick home.",
        ],
      },
      {
        heading: "What the character overlay decides",
        body: [
          "Inside Brisbane's Traditional Building Character Overlay, the street elevation governs. A second-storey addition that changes how the house reads from the street is a difficult approval; raising the same house preserves the elevation and simply lifts it.",
          "That is why raise-and-build-under is the dominant approach in Paddington, Bardon, Ashgrove, Red Hill and Wilston, and why second-storey additions are more common in post-war suburbs outside the overlay.",
        ],
      },
      {
        heading: "Which usually wins",
        body: [
          "For a pre-war timber house on stumps, raising almost always wins \u2014 structurally simpler, better approval path, and it produces a genuine new level rather than a compromised one.",
          "For a slab-on-ground brick home, raising is not realistic and a second storey is the only upward option, provided the structure below can carry it.",
          "Either way, the assessment comes first: structural condition, permitted height and any flood level, all established before design. Our <a href=\"/blog/cost-to-raise-a-queenslander/\">guide to raising a Queenslander</a> covers the numbers in more detail.",
        ],
      },
      {
        heading: "Cost, disruption and program",
        body: [
          "Both projects mean vacating for a period. A second-storey addition removes the roof, which exposes the house to weather; raising lifts the whole structure, which disconnects services entirely. Budget for accommodation in either case.",
          "Programs are similar in length, commonly six to twelve months depending on scope and approvals, with the approval front end frequently longer for a second storey inside a character overlay.",
          "The cost comparison depends almost entirely on the existing structure. Where a house needs extensive underpinning to carry a second level, raising is usually cheaper. Where the existing footings are already adequate, the numbers converge.",
          "Get the structural assessment before choosing. It is the input that decides which project is actually cheaper on your house.",
        ],
      },
    ],
  },
  {
    slug: "windows-for-the-queensland-climate",
    title: "Choosing Windows for a Queensland Home",
    description:
      "Why window selection is a thermal decision before an aesthetic one, what the ratings mean, and where glazing money is well spent and wasted.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "New Homes",
    content: [
      {
        heading: "The largest thermal weakness in any house",
        body: [
          "Windows are where a building envelope is weakest. A wall assembly with insulation performs many times better than the glass beside it, so the size, orientation and specification of glazing does more to determine comfort than almost any other product decision.",
          "In Queensland the problem is heat gain rather than heat loss, which changes what you should be optimising for and where the money is worth spending.",
        ],
      },
      {
        heading: "What the ratings actually mean",
        body: [
          "Australian windows are rated for U-value and Solar Heat Gain Coefficient. U-value measures how readily heat conducts through the assembly. SHGC measures how much solar radiation passes through.",
          "In a cold climate you want a low U-value to keep heat in. In Queensland, SHGC generally matters more, because the dominant problem is solar radiation entering and heating the room.",
          "A low SHGC on west-facing glass is worth far more than the same spend on a north-facing window that is already shaded by an eave.",
        ],
      },
      {
        heading: "Shading beats glazing specification",
        body: [
          "This is the point most often missed. External shading stops solar radiation before it reaches the glass. Performance glazing reduces what gets through after it has arrived.",
          "A properly sized eave over a north-facing window blocks high summer sun while admitting lower winter sun, for no running cost and no product premium. That is a better outcome than expensive glass with no eave.",
          "On the west, where sun arrives low and no overhang works, external screens, louvres, a verandah or planting outperform any glass specification. Internal blinds are the least effective option because the heat is already inside.",
        ],
      },
      {
        heading: "Frames, operation and coastal exposure",
        body: [
          "Aluminium frames conduct heat readily; thermally broken aluminium and timber perform better, at higher cost. Whether that upgrade is worth it depends on how much glazing you have and how well shaded it is.",
          "Operation matters for ventilation. Casement and awning windows catch and direct breeze far better than sliding windows, which only ever open half their area. On a house relying on cross-ventilation, that difference is real.",
          "Near the coast, hardware and fixings need corrosion resistance matched to the exposure. This is a specification decision at design stage, not a substitution on site.",
        ],
      },
      {
        heading: "Where to spend, in order",
        body: [
          "First, get the orientation and the eave depth right, because both are free at design stage. Second, shade the western glazing externally. Third, choose operation types that actually ventilate. Fourth, upgrade glazing performance where glass is large or unavoidably exposed.",
          "Doing it in that order meets Queensland's energy requirements at the lowest cost and produces a more comfortable house than starting with the product catalogue. Our <a href=\"/blog/house-orientation-queensland-climate/\">orientation guide</a> covers the free half of this.",
        ],
      },
      {
        heading: "Sizing and placement",
        body: [
          "Bigger is not better in this climate. A large expanse of unshaded glass is a thermal liability, and the comfort penalty is felt every summer afternoon.",
          "What matters more than total area is placement: openings on opposite or adjacent walls so air can cross a room, high-level glazing that brings light without heat or privacy loss, and glass concentrated on the north where an eave can control it.",
          "Also consider what each window looks at. A window facing a boundary fence a metre away delivers heat and no outlook, and is usually better replaced with high-level glazing that gives light without the view.",
        ],
      },
    ],
  },
  {
    slug: "decks-patios-and-carport-approvals-queensland",
    title: "Decks, Patios, Carports and Sheds: What Needs Approval",
    description:
      "The rules that catch homeowners out on structures they assume are minor, and why an unapproved deck becomes a problem at resale.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "Renovations",
    content: [
      {
        heading: "The assumption that costs money later",
        body: [
          "Decks, patios, carports and sheds feel like minor additions, and a great many get built without approval on that basis. They are structures, they are assessable, and the consequences show up later.",
          "The problem surfaces at sale. A buyer's solicitor searches the property, finds a structure with no approval, and the sale stalls until it is either approved retrospectively or removed. Retrospective approval is possible but more expensive and occasionally refused.",
        ],
      },
      {
        heading: "Decks",
        body: [
          "A deck generally requires building approval, and the thresholds relate to height above ground and whether it is attached to the house. A low deck sitting close to ground level may be exempt; anything at floor level on a sloping block certainly is not.",
          "Balustrade requirements apply once a deck is above a certain height, covering height, gaps and the non-climbable zone. These are safety provisions and they are enforced.",
          "Structurally, an attached deck loads the existing house, and the connection back into the building is where badly built decks fail. On an older Queenslander that connection has to go into sound framing, which is not always what is there.",
        ],
      },
      {
        heading: "Patios and roofed outdoor areas",
        body: [
          "A roofed structure attached to the house requires approval, and it also affects site cover, setbacks and sometimes the private open space calculation the planning scheme applies to your lot.",
          "Where it is close to a boundary, fire separation requirements can apply. Where it extends the building footprint, overlays apply as they would on any addition.",
          "Stormwater is the practical item people forget. A new roof area needs guttering and a connection to a legal discharge point, not a downpipe discharging onto the lawn against the neighbour's fence.",
        ],
      },
      {
        heading: "Carports, garages and sheds",
        body: [
          "These need approval and are also assessed against setbacks, site cover and, for anything at the front, the streetscape provisions \u2014 which matter considerably inside a character overlay.",
          "A driveway to a new carport or garage needs a crossover approval from council for the section within the road reserve, and that is a separate approval with its own specifications.",
          "Larger sheds may also need engineering for wind loading, and on a sloping block, footings designed for the ground rather than a standard slab.",
        ],
      },
      {
        heading: "Pools and the fencing that follows",
        body: [
          "Any pool capable of holding water above a shallow depth must be fenced to the Queensland standard, and the non-climbable zone catches people out \u2014 air conditioning units, planter boxes, retaining walls and pergola posts near the fence can render a compliant barrier non-compliant.",
          "Pools must be registered, and a pool safety certificate is required when selling or leasing.",
          "If you are planning any of these alongside a build, do them under the same approval and the same contract. It is cheaper, faster and it leaves you with a clean set of documents. Our <a href=\"/blog/pool-with-a-new-build-queensland/\">pool guide</a> covers the sequencing.",
        ],
      },
      {
        heading: "If it is already built without approval",
        body: [
          "Retrospective approval is often possible. It generally involves engaging a certifier, having the structure assessed against current requirements, and providing engineering where the original work was not documented.",
          "The risk is that a structure built without approval was frequently built without engineering, and it may not meet current requirements. In that case the options are rectification or removal.",
          "Deal with it before you list the property rather than during a sale, when the timeline is against you and the buyer has leverage. It is almost always cheaper and less stressful handled in advance.",
        ],
      },
    ],
  },
  {
    slug: "air-conditioning-and-hot-water-queensland",
    title: "Air Conditioning and Hot Water: Sizing and Choosing for Queensland",
    description:
      "Two of the largest running costs in a Queensland home, why oversizing air conditioning makes comfort worse, and which hot water system suits a new build.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.webp",
    category: "New Homes",
    content: [
      {
        heading: "The two systems that dominate your power bill",
        body: [
          "In a South East Queensland home, cooling and water heating account for the largest share of electricity use. Both are specified during the build, and both are expensive to change afterwards.",
          "They are also where the most money is wasted, because both are commonly oversized on the assumption that bigger is safer.",
        ],
      },
      {
        heading: "Why oversized air conditioning performs worse",
        body: [
          "An oversized unit cools the air quickly, reaches its setpoint, and shuts off. In a humid climate that is a problem, because dehumidification requires sustained run time. Short cycles drop the temperature without removing moisture, and the room feels cold and clammy rather than comfortable.",
          "A correctly sized unit runs longer at lower output, removes humidity properly, uses less energy and lasts longer because it cycles less.",
          "Sizing should follow a load calculation based on the actual room \u2014 its volume, glazing area and orientation, insulation and shading \u2014 not a rule of thumb applied to floor area.",
        ],
      },
      {
        heading: "Reduce the load before sizing the system",
        body: [
          "Every improvement to the building envelope reduces the capacity you need to install and run. Shading western glazing, insulating the ceiling properly, ventilating the roof space and allowing cross-ventilation all shrink the cooling load.",
          "Ceiling fans then extend the comfortable range considerably at negligible running cost. For much of the Queensland year, fans and open windows are the entire requirement, and the air conditioner is for the worst weeks rather than the default.",
          "A house designed this way needs a smaller system, which costs less to buy and less to run for its whole life.",
        ],
      },
      {
        heading: "Ducted or split",
        body: [
          "Ducted systems condition the whole house from one unit and look tidier, but conditioning rooms nobody is in is wasteful unless the system is properly zoned. Zoning is worth the extra cost if you go ducted.",
          "Split systems in the rooms that actually need them are cheaper to install and often cheaper to run, at the cost of visible indoor units.",
          "Either way, decide before frame stage, because ducting routes, condensate drainage and electrical supply all have to be planned into the structure.",
        ],
      },
      {
        heading: "Hot water",
        body: [
          "Water heating is a large and constant load, and a heat pump system is generally the best fit for a new Queensland home. It uses considerably less electricity than resistive electric storage, and paired with a timer running in the middle of the day it effectively stores your rooftop solar generation as hot water.",
          "Solar hot water with electric or gas boosting also works well in this climate, at the cost of roof space that might otherwise carry panels.",
          "Whatever you choose, decide before plumbing rough-in, because the type and location affect the plumbing and electrical layout. Our <a href=\"/blog/solar-and-battery-new-build-queensland/\">solar guide</a> covers how these decisions interact.",
        ],
      },
      {
        heading: "Running cost and where the savings actually are",
        body: [
          "The cheapest energy is the energy you do not use. A house that stays comfortable through orientation, shading, insulation and ventilation runs its systems for fewer hours, which saves more than any efficiency rating upgrade.",
          "Where you do run equipment, shifting it to the middle of the day makes a large difference now that feed-in tariffs are low. A timer on a heat pump hot water system turns rooftop generation into stored hot water at no extra cost.",
          "Zoning a ducted system, and simply not conditioning rooms nobody is in, is the other large saving and it costs nothing beyond the initial setup.",
        ],
      },
    ],
  },
  {
    slug: "boundaries-neighbours-and-building-work-queensland",
    title: "Boundaries, Neighbours and Building Work in Queensland",
    description:
      "Fences, retaining walls, access, overshadowing and the conversations worth having before construction rather than during it.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "The relationship you cannot avoid",
        body: [
          "Building work affects the people either side of you, and on a narrow inner-suburban block it affects them a great deal. Noise, dust, machinery, scaffolding, and sometimes the need to physically enter their property.",
          "Handled early, most of this is straightforward. Handled badly, it produces objections during assessment, disputes during construction, and a neighbour you live beside for the next twenty years.",
        ],
      },
      {
        heading: "Access to a neighbour's land",
        body: [
          "Building close to a boundary frequently requires access from the other side \u2014 for scaffolding, for building the wall itself, or for a retaining wall that supports both properties.",
          "A neighbour is not obliged to grant that access. There are legal avenues in Queensland where agreement cannot be reached, but they take time and goodwill is far cheaper.",
          "Ask early, be specific about what you need and for how long, and offer to make good anything affected. Most people agree when asked properly and refuse when surprised.",
        ],
      },
      {
        heading: "Fences and retaining walls",
        body: [
          "Dividing fences in Queensland are generally a shared responsibility between adjoining owners, with a process for agreeing work and costs. If your build requires removing and reinstating a fence, that is a conversation to have before the fence comes down.",
          "Retaining walls are more complicated, because responsibility depends on which property the wall supports and why it exists. A wall built to support your cut is your wall; one supporting their fill is a different question.",
          "Where a retaining wall sits on or near the boundary, agree the arrangement in writing before construction. This is one of the most common sources of neighbour disputes in sloping suburbs.",
        ],
      },
      {
        heading: "Overshadowing, privacy and objections",
        body: [
          "Where a development application is impact assessable, it goes to public notification and neighbours can make submissions, which carry appeal rights and can add months.",
          "The issues that generate objections are predictable: overshadowing, overlooking into private space, building height and bulk close to a boundary, and parking.",
          "Designing to address these before lodgement is far cheaper than defending them afterwards. So is telling your neighbours what you are planning before they read about it in a notice on the fence.",
        ],
      },
      {
        heading: "During construction",
        body: [
          "Site management matters here. Keeping the site tidy, controlling dust and mud, keeping work within reasonable hours, protecting shared structures and parking considerately all reduce friction enormously.",
          "It is one of the practical benefits of an owner-run site \u2014 a builder who is there daily notices when something is causing a problem next door.",
          "If damage does occur, deal with it immediately and in writing. Our <a href=\"/blog/retaining-walls-queensland-cost-and-approval/\">retaining wall guide</a> covers the boundary questions in more detail.",
        ],
      },
      {
        heading: "Get agreements in writing",
        body: [
          "Verbal agreements between neighbours are made in good faith and remembered differently. Where access, a shared fence, a retaining wall or a cost split is involved, put it in writing \u2014 an email confirming what was agreed is enough.",
          "It matters more than it seems, because properties change hands. An arrangement agreed with a neighbour who sells two years later is worth nothing if there is no record of it.",
          "Photograph the condition of shared structures and the neighbouring property before work begins. If damage is later alleged, a dated set of photographs resolves the question immediately.",
        ],
      },
    ],
  },
  {
    slug: "building-on-a-tight-budget-queensland",
    title: "Building on a Tight Budget: Where to Save and Where Not To",
    description:
      "The savings that cost nothing later, the ones that cost a great deal, and how to stage a build so the expensive-to-change items get done first.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-brick-contemporary.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "Not all savings are equal",
        body: [
          "Every build involves trade-offs, and the useful distinction is between decisions you can revisit and decisions you cannot.",
          "A kitchen can be replaced in ten years. A ceiling height cannot. Flooring can be changed; orientation cannot. The discipline is to spend on what is permanent and economise on what is replaceable.",
          "Owners frequently do the reverse, because the replaceable items are the ones you see in a showroom.",
        ],
      },
      {
        heading: "Where saving costs you nothing",
        body: [
          "Finishes and fittings. Tapware, floor coverings, light fittings, appliances, joinery hardware and paint colours can all start modest and be upgraded later without touching the structure.",
          "Landscaping, fencing and the driveway surface can be staged, provided the underground services and conduit are laid while the ground is open.",
          "Reducing floor area is also usually a clean saving. A smaller, well-planned house with good ceiling heights and proper daylight lives better than a larger one with neither.",
        ],
      },
      {
        heading: "Where saving costs you later",
        body: [
          "Ceiling height, window size and position, and the orientation of living areas are effectively permanent. Getting these wrong produces a house that is uncomfortable for its whole life, and no later spend fully recovers it.",
          "Insulation and roof space ventilation are buried and cheap during construction. Retrofitting wall insulation means opening walls.",
          "Waterproofing in wet areas is the classic false economy. A waterproofing failure means removing tiling, screed and sometimes framing, and it is the most common serious defect in Australian housing.",
          "Conduit and rough-in for things you might add later \u2014 solar, an EV charger, irrigation, a future shed \u2014 costs almost nothing while the walls are open and a great deal afterwards.",
        ],
      },
      {
        heading: "Do not economise on the investigation",
        body: [
          "A soil test, a contour survey and the council property report are among the smallest costs in the project and they prevent the largest surprises.",
          "Skipping them does not save money, it defers a cost into construction where it arrives as a variation with margin applied.",
          "The same applies to documentation. Thin drawings produce provisional sums, and provisional sums are where budgets go.",
        ],
      },
      {
        heading: "Staging properly",
        body: [
          "If the full brief does not fit the budget, stage it rather than degrading everything. Build the structure, the envelope and the buried services to the standard you want, and finish fewer areas now.",
          "An unfinished but well-built house is a much better position than a fully finished, poorly built one.",
          "Design the stages together so the later work connects cleanly, and get approvals for the whole thing where practical. Our <a href=\"/blog/building-budget-contingency-queensland/\">contingency guide</a> covers what else belongs in a project budget.",
        ],
      },
      {
        heading: "Simplicity is the largest saving available",
        body: [
          "Complexity costs money in construction more than materials do. A simple roof form with fewer hips and valleys is cheaper to build, less likely to leak and better for solar. A rectangular footprint costs less per square metre than an articulated one.",
          "Fewer wet areas, stacked plumbing so the bathrooms share walls or sit above each other, and a compact services layout all reduce cost substantially without affecting how the house lives.",
          "None of these compromises are visible to the occupant. They are the cheapest savings available, and they are made at design stage rather than by degrading the specification later.",
        ],
      },
    ],
  },
  {
    slug: "waterproofing-and-wet-areas-queensland",
    title: "Waterproofing and Wet Areas: The Most Common Serious Defect",
    description:
      "Why waterproofing failures dominate building defect claims, what the standard requires, and what to check before the tiler starts.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "New Homes",
    content: [
      {
        heading: "The defect that costs the most to fix",
        body: [
          "Waterproofing failures in wet areas are consistently among the most common serious defects in Australian residential construction, and among the most expensive to rectify.",
          "The reason is that the failure is invisible for a long time and the repair is destructive. By the time water appears in the room next door or in the ceiling below, the fix involves removing tiling, screed, sometimes wall linings and occasionally framing.",
          "It is also entirely preventable, which is what makes it worth understanding as an owner.",
        ],
      },
      {
        heading: "What the standard requires",
        body: [
          "Wet area waterproofing is governed by the National Construction Code and AS 3740. It sets out which surfaces must be waterproof and which must be water resistant, how far up walls the membrane must extend, and how junctions, penetrations and floor wastes must be treated.",
          "Shower areas have the most demanding requirements, with the membrane extending up the walls and across the floor, and particular attention at the junction between them.",
          "In Queensland, waterproofing is licensable work and you should receive a certificate at completion. Keep it \u2014 a buyer's solicitor will ask for it.",
        ],
      },
      {
        heading: "Where failures actually happen",
        body: [
          "Junctions, almost always. The floor-to-wall junction, internal corners, and the joints around penetrations are where movement concentrates and where membranes tear if they were not detailed with the right reinforcement.",
          "Penetrations are next: tap bodies, shower outlets and floor wastes. Each is a hole through the membrane and each has to be sealed properly.",
          "Falls to the floor waste matter too. Water that ponds instead of draining sits against the membrane and finds any weakness eventually.",
          "Insufficient curing time is a quiet cause. Membranes need to cure before tiling begins, and a program under pressure is where that gets compressed.",
        ],
      },
      {
        heading: "What to check as an owner",
        body: [
          "Waterproofing happens after the wet area is prepared and before tiling, so there is a window of a few days when you can see it. Ask to be told when it is done and go and look before the tiler starts.",
          "You will not assess it technically, but you can see whether the membrane is continuous, whether it extends up the walls, whether corners look reinforced, and whether it has been left to cure.",
          "Ask which product was used and whether it is being applied to the manufacturer's specification, including the number of coats. Ask for the certificate at completion.",
        ],
      },
      {
        heading: "Why it is worth the attention",
        body: [
          "Almost every other defect in a house is visible and arguable. Waterproofing is neither. It is covered immediately and it fails silently.",
          "It is also the one where a builder under time pressure has the greatest incentive to move on quickly, which is exactly why an owner-run site matters \u2014 the person deciding whether the membrane has cured is the person whose reputation the job carries.",
          "Our <a href=\"/blog/defects-liability-and-handover-queensland/\">handover guide</a> covers the certificates you should receive and what the defects period covers.",
        ],
      },
      {
        heading: "Design decisions that reduce the risk",
        body: [
          "Falls to the floor waste have to be built into the screed, and a shower floor that ponds is a design and workmanship failure rather than a maintenance issue.",
          "Where a wet area sits above a habitable room, the consequence of failure is far greater. That is worth reflecting in both the detailing and the attention paid during construction.",
          "Niches, hobless showers and wall-hung fixtures all involve additional penetrations or more demanding detailing. They are entirely achievable and they need to be detailed deliberately rather than improvised on site.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-and-storage-planning-new-build",
    title: "Planning a Kitchen and Real Storage in a New Build",
    description:
      "The layout rules that survive fashion, why storage is the most complained-about omission in new homes, and the decisions that must happen before frame stage.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-entry-detail.webp",
    category: "Custom Builds",
    content: [
      {
        heading: "The room that gets the most attention and the least planning",
        body: [
          "The kitchen absorbs a disproportionate share of the selections budget and the emotional energy in a build, mostly directed at finishes. Meanwhile the decisions that determine whether it works \u2014 where it sits, how it relates to the living space, and where the services are \u2014 get settled almost by default.",
          "Those decisions happen at design and frame stage. The benchtop material can change; the plumbing position in the slab cannot.",
        ],
      },
      {
        heading: "Layout fundamentals",
        body: [
          "The working relationship between sink, cooktop and refrigerator determines how the kitchen feels to use. Keeping those three in a comfortable working relationship, without a major traffic route cutting through it, matters more than the shape of the room.",
          "Bench space beside the cooktop and beside the sink is where preparation actually happens, and it is the thing most often sacrificed to fit an island.",
          "Islands are excellent when the room is wide enough for genuine clearance around them and a poor idea when they are squeezed in. If the walkway is tight, the island is making the kitchen worse.",
          "Where the kitchen opens to living space, think about what is visible from the sofa. A raised bench, or simply positioning the sink and preparation zone away from the sight line, is what stops an open-plan kitchen dominating the room.",
        ],
      },
      {
        heading: "Storage is the most common regret",
        body: [
          "Storage is the single most complained-about omission in new homes, and it is almost always the thing that got value-engineered out late.",
          "A walk-in pantry is the highest-value kitchen storage available, and it is far cheaper to plan in than to add. Beyond that: a genuine linen cupboard, a laundry with bench space and storage rather than just appliance space, built-in robes in every bedroom, and somewhere for bulky items.",
          "Under-stair space, the space above a hallway, and the depth beside a fridge are all commonly wasted. Planning them costs nothing at drawing stage.",
        ],
      },
      {
        heading: "Services and appliance decisions come early",
        body: [
          "Appliance selections determine cabinetry dimensions, and cabinetry is manufactured weeks before installation. Choosing appliances late is one of the most common causes of delay in the fixing stage.",
          "Plumbing and electrical positions are set at rough-in, before the walls are lined. Power points on the island, the position of the dishwasher, whether there is a filtered water tap, and where the rangehood ducts to all have to be decided before then.",
          "Rangehood ducting in particular has to discharge outside rather than recirculate, and the route has to be planned into the structure.",
        ],
      },
      {
        heading: "Light and ventilation",
        body: [
          "A kitchen with no natural light is unpleasant regardless of its finishes. A window over the sink, a skylight, or borrowed light from an adjacent opening all change the room fundamentally.",
          "In the Queensland climate, a kitchen that can be ventilated matters too \u2014 cooking heat and humidity in a sealed room is a genuine comfort issue in summer.",
          "Our <a href=\"/blog/selections-process-new-home-build/\">selections guide</a> sets out the order these decisions have to happen in.",
        ],
      },
      {
        heading: "Budget realistically",
        body: [
          "Kitchens absorb a large share of a fit-out budget, and the range between a competent kitchen and a high-end one is very wide. Decide early roughly where you sit, because it affects cabinetry, benchtop material and appliance selections together.",
          "Where the budget is tight, spend on layout, storage volume and bench space rather than on finish. A well-planned kitchen in modest materials works better every day than a beautiful one that functions poorly.",
          "Benchtops and appliances are also the easiest items to upgrade later, whereas the layout and the services positions are effectively permanent.",
        ],
      },
    ],
  },
  {
    slug: "queenslander-or-modern-home-brisbane",
    title: "Buying in Brisbane: Queenslander or Modern Home?",
    description:
      "What each type actually costs to own and improve, the constraints that come with character housing, and how to decide which suits you.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "Two different propositions",
        body: [
          "Buyers in Brisbane's inner suburbs frequently face a choice between a period Queenslander needing work and a more modern house that is ready to live in.",
          "They are not the same purchase. One is a project with upside and constraints attached; the other is a finished product with less headroom. Which suits you depends on your tolerance for a building program and your time horizon.",
        ],
      },
      {
        heading: "What you get with a Queenslander",
        body: [
          "The housing type is genuinely well suited to the climate. High ceilings, verandahs, elevated floors, and plans that let breeze move through were designed for exactly this weather, before air conditioning existed.",
          "The location tends to be better, because the character suburbs are the older ones closest to the city. And the raise-and-build-under option means significant additional floor area is available on land you already own.",
          "Character housing in intact streetscapes also holds value well, because supply is fixed \u2014 no more of them are being built and the overlay stops them being removed.",
        ],
      },
      {
        heading: "What comes with it",
        body: [
          "Constraints, principally. Inside a character area, demolition is restricted and any work to the street elevation is assessed against the streetscape. You do not have a free hand.",
          "Condition, too. A hundred-year-old timber house will have stumps at or near the end of their life, likely termite damage, previous unapproved alterations, wiring past its service life, failing plumbing and no insulation. All of it is fixable and none of it is cheap.",
          "And ongoing maintenance. Timber, paint and roofing on a period house need more attention than a twenty-year-old brick home.",
        ],
      },
      {
        heading: "What a modern home offers",
        body: [
          "Predictability. A house built in the last twenty years is built to modern standards, with insulation, compliant wiring and plumbing, and no asbestos.",
          "Lower immediate cost of ownership, and none of the overlay constraints \u2014 extensions, second storeys and knockdown rebuilds are all generally achievable.",
          "The trade-offs are location, since the newer stock is generally further out, and design quality, since a great deal of it was built quickly with living areas facing the wrong way and minimal eaves.",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "If you want to be in a specific inner suburb, have the appetite for a building project, and intend to hold long term, the Queenslander is usually the better proposition. The constraints protect the value.",
          "If you need to move in and get on with life, or the budget cannot carry both purchase and renovation, the modern house is the honest answer.",
          "Before committing to either, pull the council property report. It tells you what is permitted, and on a character block that determines your options entirely. Our <a href=\"/blog/character-overlay-brisbane-what-it-restricts/\">character overlay guide</a> covers what is actually restricted.",
        ],
      },
      {
        heading: "Budget for the whole picture",
        body: [
          "If you are considering a Queenslander needing work, budget the purchase and the renovation together, and get a structural assessment before committing rather than after.",
          "The items that consistently surprise buyers are stumps, subfloor framing, full services replacement and asbestos removal, none of which are visible at an open home and all of which are substantial.",
          "Also confirm the overlay position and any flood mapping before you make an offer. On a character block those two numbers determine what you are permitted to do, and therefore whether the project you have in mind exists at all.",
        ],
      },
    ],
  },
  {
    slug: "moving-into-a-new-build-checklist",
    title: "Moving Into a New Build: A Practical First-Year Checklist",
    description:
      "What to check at handover, what will move and crack in the first year, and the maintenance that protects your warranty.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/home-single-modern.webp",
    category: "New Homes",
    content: [
      {
        heading: "The first year is different",
        body: [
          "A new house settles. Timber shrinks as it dries to equilibrium, the slab cures and moves slightly, and the building comes through its first full seasonal cycle.",
          "That produces small cracks in plasterboard, nail pops, doors that need adjustment and gaps opening at skirtings and architraves. Almost all of it is normal, expected, and rectified at the end of the defects liability period rather than one item at a time.",
          "Knowing which of it is normal and which is not is the useful part.",
        ],
      },
      {
        heading: "At handover",
        body: [
          "Walk the house with the builder before final payment and record every item in writing. Bring a torch, open every door and window, run every tap, test every switch and check every drawer and cupboard.",
          "Collect the documentation: final certificate or certificate of occupancy, Form 15 and Form 16 certificates, waterproofing certificates, the termite management notice, electrical and plumbing compliance certificates, appliance manuals and warranties, and your QBCC home warranty documentation.",
          "Get the paint and finish schedule too, so touch-ups years later match.",
        ],
      },
      {
        heading: "What is normal in the first year",
        body: [
          "Hairline cracks in plasterboard, particularly at corners of door and window openings. Nail pops in ceilings and walls. Doors and windows needing adjustment as timber moves. Small gaps at skirtings and cornices. Minor settlement cracking in the slab edge or paths.",
          "Keep a running list rather than calling about each one. Most builders prefer to attend once near the end of the defects period and address everything together, which is also far less disruptive for you.",
        ],
      },
      {
        heading: "What is not normal",
        body: [
          "Water where water should not be \u2014 damp patches, staining on ceilings, moisture at the base of a shower wall, or water penetrating around windows. Report these immediately rather than adding them to a list.",
          "Cracks wider than hairline, cracks that are growing, stepped cracking in brickwork, or doors that were fine and are now binding badly can indicate movement rather than shrinkage.",
          "Anything electrical that trips repeatedly, and any plumbing that leaks. These are immediate items.",
        ],
      },
      {
        heading: "Maintenance that protects your position",
        body: [
          "Termite management requires annual inspection by a licensed pest inspector. This is your responsibility after handover, and the system only works if someone looks. It also matters for any warranty position.",
          "Keep garden beds, mulch and paving clear of the slab edge, because bridging the termite barrier gives termites a concealed route past everything you paid for.",
          "Clear gutters, keep downpipes discharging away from footings, and keep the drainage falls around the house working. On reactive clay, uneven moisture against a slab is what causes movement.",
          "Our <a href=\"/blog/defects-liability-and-handover-queensland/\">handover and defects guide</a> covers the warranty periods in more detail.",
        ],
      },
      {
        heading: "Practical first-week items",
        body: [
          "Find and label the water shut-off valve, the electrical switchboard and the gas isolation if you have gas. You want to know where these are before you need them.",
          "Test every smoke alarm and note the type and replacement interval. Queensland has specific requirements for interconnected photoelectric alarms in homes, and they are your responsibility to maintain.",
          "Photograph the house thoroughly while it is empty and undamaged. It is a useful record for insurance and for any later defect discussion.",
          "Register any appliance warranties, and put the annual termite inspection in your calendar now rather than intending to remember it.",
        ],
      },
    ],
  },
  {
    slug: "dual-key-and-secondary-dwellings-investment",
    title: "Dual Key and Secondary Dwellings: A Middle Path for Investors",
    description:
      "Where a secondary dwelling beats a full duplex on cost and approvals, the restrictions that apply in Queensland, and how it affects valuation.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/duplex-modern-dual.webp",
    category: "Duplexes",
    content: [
      {
        heading: "Between one dwelling and two",
        body: [
          "Not every site that cannot support a duplex is limited to a single dwelling. A secondary dwelling \u2014 a self-contained space subordinate to the main house \u2014 sits between the two, and on the right block it delivers much of the income benefit for considerably less cost and a simpler approval.",
          "It is not a duplex, and confusing the two is where investors get into trouble. The restrictions are real and they vary by council.",
        ],
      },
      {
        heading: "What is generally permitted",
        body: [
          "Councils across South East Queensland allow secondary dwellings subject to conditions, typically covering maximum floor area, the requirement that it be subordinate to and associated with the main dwelling, car parking, and private open space.",
          "The condition that matters most for investors is whether it can be separately let to an unrelated household. Some councils permit this, some restrict occupancy to a member of the same household, and the position has changed over time.",
          "Check the current provisions for your specific council and zone before you plan anything around rental income. Assuming the rules from a different council is a common and expensive error.",
        ],
      },
      {
        heading: "Why the cost is lower than a duplex",
        body: [
          "A secondary dwelling is smaller, and it usually shares the site works, the driveway, the services connection and the professional fees with the main house.",
          "The approval path is generally simpler than a dual occupancy, which frequently needs development approval and may be impact assessable with public notification.",
          "Where it is built at the same time as the main house, the marginal cost is lower again, because everything is already mobilised on site.",
        ],
      },
      {
        heading: "What it does to yield and value",
        body: [
          "A second income stream from one land purchase improves yield materially, and it gives you two tenancies rather than one, which halves your vacancy exposure.",
          "On valuation, treatment varies. Some valuers reflect the additional income; others value the property as a house with an ancillary structure. Speak to a lender before assuming it will be valued as two dwellings.",
          "Critically, a secondary dwelling cannot generally be sold separately, because it is not a separate title. If your exit involves selling two properties, this is the wrong structure and a duplex with a title split is the right one.",
        ],
      },
      {
        heading: "Design decisions that matter",
        body: [
          "Separate external entry is the single most valuable feature. Being able to come and go without passing through the main house changes the arrangement entirely.",
          "Acoustic separation between the two, real storage in the smaller dwelling, and private outdoor space that is genuinely private are the items that determine whether it leases well.",
          "Build it so it can change use later \u2014 home office, guest accommodation, or accommodation for ageing parents \u2014 because circumstances shift. Our <a href=\"/blog/granny-flat-secondary-dwelling-queensland/\">secondary dwellings guide</a> covers the planning side and our <a href=\"/blog/duplex-or-house-which-performs-better-seq/\">duplex comparison</a> covers the alternative.",
        ],
      },
      {
        heading: "Get the position in writing before you build",
        body: [
          "Because the rules vary by council and have changed over time, do not rely on what applied in another local government area or on what someone built five years ago.",
          "Confirm the current provisions for your zone in writing, including whether the secondary dwelling may be separately let, and what the maximum floor area and parking requirements are.",
          "Then confirm with your lender how it will be treated for valuation and serviceability. A structure that improves yield but is valued as an ancillary building changes the finance picture, and that is better known before construction than after.",
        ],
      },
    ],
  },
  {
    slug: "site-supervision-what-good-looks-like",
    title: "Site Supervision: What Good Looks Like on a Residential Build",
    description:
      "How to tell whether a site is being run well, the warning signs worth acting on early, and what to do when something is going wrong.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "Choosing a Builder",
    content: [
      {
        heading: "The variable that decides your experience",
        body: [
          "Two builders can use the same trades, the same materials and the same contract and deliver very different experiences. The difference is supervision.",
          "Supervision is what sequences the trades so nobody is waiting, catches errors while they are cheap, keeps the site safe and tidy, and tells you what is happening before you have to ask.",
          "It is also the thing least visible when you are choosing a builder, which is why it is worth asking about specifically.",
        ],
      },
      {
        heading: "What to ask before signing",
        body: [
          "Who supervises the site day to day, and how many other projects is that person running at the same time? In a volume operation the answer may be a dozen, which works when everything is standard and is tested when it is not.",
          "How often will they be on site? Will the person who quoted the job be involved in running it, or does it hand over to someone you have not met?",
          "Who do you contact when a decision is needed, and what is the expected response time?",
        ],
      },
      {
        heading: "What a well-run site looks like",
        body: [
          "Materials stored off the ground and protected from weather. Offcuts and waste contained rather than spread. Safety measures in place \u2014 edge protection, penetrations covered, the site secured at the end of the day.",
          "Work that looks deliberate: frames straight and properly braced, services rough-in tidy and logically routed, set-out lines visible and followed.",
          "Trades arriving in sequence rather than tripping over each other, and the site not sitting idle for long stretches without explanation.",
          "Ask to visit an active site before you sign. It tells you more than any finished project photograph.",
        ],
      },
      {
        heading: "Warning signs worth acting on",
        body: [
          "Long unexplained periods with nobody on site. Trades arriving to find the previous stage incomplete. The same defect appearing repeatedly. Requests for payment ahead of the stage actually reached.",
          "Difficulty getting a straight answer about program, or a builder who becomes hard to contact.",
          "Variations arriving after the work has been done rather than priced and approved before. In Queensland, variations to a domestic building contract must be documented, and this requirement exists for your protection.",
        ],
      },
      {
        heading: "What to do when something is wrong",
        body: [
          "Raise it early, in writing, and specifically. A dated email describing the issue is worth far more than a conversation on site, both for resolution and for any later claim.",
          "Escalate to the builder rather than the trade. The trade works to the builder's instruction and putting them in the middle rarely helps.",
          "For compliance concerns, the building certifier is the right person, and you are entitled to their contact details. For unresolved disputes, the QBCC has a process, and its timeframes matter.",
          "This is the reason we run a small number of jobs with the sites run personally \u2014 our <a href=\"/about/our-builder/\">builder profile</a> explains why the model is set up that way.",
        ],
      },
      {
        heading: "Communication is the leading indicator",
        body: [
          "The most reliable early signal of how a build will go is how a builder communicates before construction starts. Responsiveness during the quoting and contract stage tends to predict responsiveness during the job.",
          "Agree a rhythm at the outset \u2014 a weekly update, a site meeting at each major stage, and a clear channel for decisions. Written updates are worth more than phone calls, because they create a record.",
          "A builder who volunteers bad news early is more valuable than one who only reports progress. Problems on a construction site are normal; problems disclosed late are what become expensive.",
        ],
      },
    ],
  },
  {
    slug: "what-drives-resale-value-queensland-homes",
    title: "What Actually Drives Resale Value in a Queensland Home",
    description:
      "The features buyers pay for, the expensive ones they do not, and how to spend a renovation budget so it comes back at sale.",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/assets/images/stock/villa-luxury-modern.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "Not everything you spend comes back",
        body: [
          "Renovation spending does not convert evenly into value. Some work returns more than it cost, some returns roughly what it cost, and some returns very little regardless of how well it was done.",
          "The distinction is broadly between work that fixes something buyers are pricing against you, and work that adds something only you wanted.",
        ],
      },
      {
        heading: "What buyers consistently pay for",
        body: [
          "Functional layout is first. A plan where living areas connect to the outdoors, bedrooms are separated from living space, and there is somewhere to put things beats a larger house with none of that.",
          "A second bathroom in a house that only has one is among the highest-returning renovations available, because it moves the property into a different search filter for a large group of buyers.",
          "Covered outdoor living in this climate is genuinely valued rather than a nice extra. So is off-street parking, and storage.",
          "In character suburbs specifically, an intact and well-restored street presentation carries real weight, because it is the thing buyers cannot add.",
        ],
      },
      {
        heading: "What returns less than it costs",
        body: [
          "Highly personal design choices \u2014 unusual colour schemes, very specific joinery, distinctive fixtures \u2014 narrow the buyer pool rather than widening it.",
          "Over-capitalising relative to the street is the classic error. A renovation that takes a house well beyond the price ceiling of its suburb rarely recovers the difference, because buyers at that price look in different suburbs.",
          "Swimming pools are genuinely divided. Some buyers pay for them and others see maintenance and fencing obligations. On a small block where the pool consumes the yard, they can reduce appeal.",
          "Removing bedrooms to create larger spaces almost always costs value, because bedroom count is a search filter.",
        ],
      },
      {
        heading: "The invisible work that still matters",
        body: [
          "Structural repair, rewiring, replumbing, insulation and drainage do not show in photographs and do not add a premium on their own. But their absence shows up in a building and pest inspection and it reduces offers.",
          "So the honest framing is that this work protects value rather than adding it. On an older house it is not optional if you want a clean sale.",
          "Documentation matters here too. Approvals, certificates and warranties for work done are what let a buyer's solicitor proceed without hesitation. Unapproved structures stall sales.",
        ],
      },
      {
        heading: "How to spend a renovation budget",
        body: [
          "Fix what is being priced against you first \u2014 condition, layout problems, a missing second bathroom, poor outdoor connection.",
          "Then spend on permanent items that cannot be changed later: daylight, ceiling height, orientation and outdoor living. Then finishes, which the next owner may change anyway.",
          "And know the ceiling for your street before you start. Our <a href=\"/blog/renovation-or-new-build/\">renovate-or-rebuild guide</a> covers which path suits an existing house.",
        ],
      },
      {
        heading: "Presentation and documentation at sale",
        body: [
          "Buyers assess condition emotionally and then verify it with an inspection. Deferred maintenance visible at an open home \u2014 peeling paint, damaged decking, blocked gutters, poor drainage \u2014 reduces offers by more than it costs to fix.",
          "In this climate, the outdoor space is part of the presentation. A usable, shaded outdoor living area photographs well and shows well, and it is one of the features buyers here genuinely pay for.",
          "Have the paperwork ready: approvals and certificates for all work done, the termite management notice and inspection history, and warranties. A clean documentation set removes the friction that stalls sales.",
        ],
      },
    ],
  },
  {
    slug: "how-long-does-a-knockdown-rebuild-take-queensland",
    title: "How Long Does a Knockdown Rebuild Take in Queensland?",
    description: "The realistic timeline for a knockdown rebuild in South East Queensland, stage by stage, and the decisions that add months if they are made late.",
    date: "2026-09-01",
    readTime: "6 min read",
    image: "/assets/images/stock/construction-frame-new.webp",
    category: "New Homes",
    content: [
      {
        heading: "Two programs, not one",
        body: [
          "A knockdown rebuild is really two projects joined end to end: getting the old house off the block lawfully, then building a new one. People tend to estimate the second and forget the first, which is why the overall timeline surprises them. The construction period for the new home is usually the most predictable part. The months before demolition are where the variation lives.",
          "The honest answer to how long it takes is that the pre-construction phase depends on your council, your overlays and how quickly design decisions get made, while the construction phase depends on the size and complexity of the new home and the ground conditions found once the site is cleared. Both can be planned. Neither should be guessed.",
          "This article walks the stages in order. For what the service involves as a whole, see our <a href=\"/services/knockdown-rebuild/\">knockdown rebuild page</a>.",
        ],
      },
      {
        heading: "Stage one: feasibility and overlays",
        body: [
          "Before any drawing is worth paying for, the block has to be checked for anything that stops or shapes demolition. In Brisbane that means the Traditional building character overlay, which generally protects pre-1947 houses from removal. Elsewhere it means heritage listings, flood and storm tide overlays that set the new floor level, bushfire overlays and vegetation protection.",
          "This stage takes days, not months, if it is done properly at the start. Skipping it is the single most common cause of a stalled rebuild, because a design gets developed for a house that cannot be demolished or a floor level that cannot be built.",
          "If the overlay check says demolition is unlikely to be supported, the practical alternative is often <a href=\"/services/house-raising-build-under/\">raising and building under</a> rather than replacing the house.",
        ],
      },
      {
        heading: "Stage two: design, engineering and selections",
        body: [
          "Concept design, then developed drawings, then engineering and energy assessment. The pace here is set by how quickly you make decisions. A brief that keeps changing adds weeks each time; a brief that is settled early lets the drawings move through in a straightforward sequence.",
          "Selections belong in this stage as well. Fixtures, finishes, windows and roofing all need to be chosen before contract so that the price is a real fixed price rather than a set of allowances. Leaving selections until after signing is how a fixed price stops being fixed, and it is also how programs slip once construction has started.",
          "A soil test cannot be done properly until the old house is gone, so engineering is usually finalised in two passes: a design based on the expected site classification, then confirmation after demolition. That is normal and is built into a well-run program.",
        ],
      },
      {
        heading: "Stage three: approvals",
        body: [
          "Demolition needs its own approval, issued through a building certifier and, in some areas, requiring council assessment first. The new dwelling needs building approval and sometimes development approval, depending on zoning, lot size, overlays and whether the design relies on any performance outcomes rather than the standard acceptable outcomes.",
          "Building approval through a private certifier for a compliant design is usually a matter of weeks. Development approval through council is measured in months and depends on the council, the complexity of the application and whether further information is requested. Knowing which path applies before design starts is what keeps this stage predictable.",
          "Services disconnection, asbestos identification and demolition contractor scheduling run alongside approvals, so that the day the demolition permit is issued is the day work can start.",
        ],
      },
      {
        heading: "Stage four: demolition and site preparation",
        body: [
          "Demolition itself is quick. Asbestos removal, if required, comes first and is done by a licensed removalist with clearance certification. Then the house comes down, the slab and footings come out, and the site is levelled and cleared. Depending on access and the size of the house this is typically a matter of days to a couple of weeks.",
          "Once the site is clear the soil test is taken, engineering is confirmed, and set-out can begin. This is also when anything unexpected under the old house is found: fill of unknown depth, old tanks, abandoned services. Good contracts carry a stated contingency for exactly this, so a discovery becomes a line item rather than a dispute.",
        ],
      },
      {
        heading: "Stage five: construction",
        body: [
          "From footings to handover, a new home follows the normal sequence of slab, frame, roof, lock-up, fit-out and finishing. A single-storey home of moderate size on a straightforward site sits at the shorter end; a two-storey custom home on a sloping block with retaining and a suspended slab sits at the longer end.",
          "Weather is the variable nobody controls. South East Queensland's wet season, roughly December to March, can add weeks to the early stages when the site is open. Programs that start the slab in late spring tend to run more smoothly than those that pour in January.",
          "Because you are living elsewhere for the duration, the construction period is the number that matters most for your rental lease. We set the demolition date and the target handover before contract so both can be planned. The same logic applies to our <a href=\"/locations/brisbane/knockdown-rebuild/\">Brisbane knockdown rebuild</a> projects, where inner-city access adds its own scheduling constraints.",
        ],
      },
      {
        heading: "What adds months, and how to avoid it",
        body: [
          "Late overlay discovery, an unsettled brief, selections left until after contract, and a development application that could have been avoided by designing to the code. All four are decisions, not accidents, and all four are made before a single trade arrives on site.",
          "The rebuild that runs to program is the one where the boring work was done first: overlays checked, soil understood, drawings complete, selections locked, approvals path chosen. That front-loading is what an owner-run builder brings, because the person pricing the job is the same person who will be standing on the block when the questions come up.",
        ],
      },
    ],
  },
  {
    slug: "cut-and-fill-vs-split-level-sloping-block",
    title: "Cut and Fill or Split-Level? Designing for a Sloping Block",
    description: "How the three main approaches to a sloping block compare on cost, drainage, access and liveability, and which one suits a typical South East Queensland fall.",
    date: "2026-08-31",
    readTime: "6 min read",
    image: "/assets/images/stock/home-luxury-landscape.webp",
    category: "Custom Builds",
    content: [
      {
        heading: "The fall decides the design before you do",
        body: [
          "Every sloping block in South East Queensland pushes the design towards one of three answers: flatten the site and build a conventional home, step the home down the slope as a split-level, or lift the home off the ground on posts and a suspended floor. Each has a cost profile, a drainage story and a way of living that follows from it.",
          "The wrong answer is choosing a plan first and then forcing the site to accept it. The right answer starts with a contour survey and a soil classification, because the amount of fall across the building footprint and the ground you are cutting into decide which of the three is even sensible.",
          "This article compares them. For the way we approach these sites end to end, see our <a href=\"/services/sloping-block-homes/\">sloping block homes page</a>.",
        ],
      },
      {
        heading: "Cut and fill: the conventional answer",
        body: [
          "Cut and fill excavates the high side, pushes the material to the low side and creates a level platform for a standard slab-on-ground home. It is the default on gentle slopes because the house itself is the cheapest kind of house to build: no suspended floors, no split structure, standard trades.",
          "The cost lives outside the house. Retaining walls are needed on the cut and often on the fill, and once a wall passes a certain height or carries a surcharge it needs engineering and approval. Fill has to be placed and compacted in controlled layers to be classified as engineered fill; uncontrolled fill under a slab is a footing problem waiting to happen.",
          "Drainage is the other trap. Cutting into a slope intercepts subsurface water that used to move under the surface, and if it is not collected with agricultural drains behind the retaining it ends up under the slab or in the neighbour's yard. On reactive clay the moisture change alone can move the footings.",
        ],
      },
      {
        heading: "Split-level: working with the fall",
        body: [
          "A split-level home steps the floor plates down the slope, typically by half a storey at a time, so that each part of the house sits close to natural ground. Less soil is moved, retaining is lower and shorter, and the house gains natural separation between living, sleeping and utility zones.",
          "Structurally it is more complex. There are more slab edges, more step-downs, more junctions where waterproofing and termite management have to be detailed carefully. Internal stairs of a few risers between levels are a design feature for many owners and a barrier for others; if ageing in place matters, a split-level needs to be planned with that in mind.",
          "On a moderate fall, the extra structure is usually cheaper than the retaining and fill it replaces, and the result is a home that feels designed for the block rather than dropped on it.",
        ],
      },
      {
        heading: "Suspended and pole construction: lifting off the ground",
        body: [
          "On steep falls, or where the ground is poor, the most economical answer is often to leave the slope alone. The home sits on piers or poles with a suspended timber or concrete floor, and the undercroft becomes a carport, storage or, with the right head height, additional living space later.",
          "Earthworks and retaining almost disappear, drainage stays close to natural, and the building sits above overland flow paths. The trade-off is in the structure: piers to a depth set by the engineer, a stiffer floor system, and services that run under the house rather than through a slab.",
          "This is the traditional Queensland answer for a reason. Elevated homes catch breeze, avoid damp and handle water well. On hinterland and coastal escarpment sites it is frequently the only approach that makes financial sense.",
        ],
      },
      {
        heading: "Access, driveways and the cost nobody quotes early",
        body: [
          "Whichever approach you choose, the car has to get from the street to the garage, and driveway gradient limits are set by council standards. A steep block can rule out a garage at the high side, force a long switchback driveway, or push the garage to street level with the house above or below it.",
          "Construction access matters too. Concrete pumps, cranes for frames and trusses, and delivery trucks all need somewhere to stand. A block with no level area near the street costs more to build on regardless of design, and that cost belongs in the fixed price rather than in a variation.",
        ],
      },
      {
        heading: "How to choose",
        body: [
          "Gentle fall on stable ground: cut and fill is usually right, provided the retaining and drainage are designed properly. Moderate fall: split-level tends to win on both cost and outcome. Steep fall or poor ground: suspended construction. The ground classification under AS 2870 and the <a href=\"/blog/retaining-walls-queensland-cost-and-approval/\">retaining wall requirements</a> tip the balance in individual cases.",
          "We price all three where the site allows, so you are comparing real numbers rather than guessing. The comparison is part of the feasibility work described on our <a href=\"/blog/building-on-a-sloping-block/\">sloping block guide</a>, and it is the reason a sloping block does not have to mean an expensive build.",
        ],
      },
    ],
  },
  {
    slug: "legal-head-height-building-under-queenslander",
    title: "Legal Head Height When You Build Under a Queenslander",
    description: "What the National Construction Code requires for ceiling height under a raised Queenslander, how much lift that means, and what limits how high you can go.",
    date: "2026-08-30",
    readTime: "5 min read",
    image: "/assets/images/queenslander-classic-new.webp",
    category: "Renovations",
    content: [
      {
        heading: "The number that decides the whole project",
        body: [
          "Building under a Queenslander only works if the space underneath can lawfully be lived in, and that comes down to ceiling height. The National Construction Code sets minimum heights for habitable rooms and for other spaces, and the difference between what you have now and what you need is the amount the house has to be raised.",
          "Habitable rooms such as bedrooms, living areas and kitchens need a higher ceiling than non-habitable spaces such as bathrooms, laundries, hallways and garages. Measure from the finished floor to the underside of the floor structure above, allow for the new lower-level ceiling lining and the new slab, and the required lift becomes clear.",
          "For the process as a whole, see our <a href=\"/services/house-raising-build-under/\">house raising and build under page</a>.",
        ],
      },
      {
        heading: "Measuring what you actually have",
        body: [
          "Most pre-war Queenslanders sit on stumps that give somewhere between a crawl space and a usable but low undercroft. The existing height is measured from the ground to the underside of the bearers, and it varies across the footprint because the ground under an old house is rarely level.",
          "The new floor is a concrete slab, which sits above the current ground level, and the new ceiling is lined below the existing bearers and joists. Both eat into the clear height. The habitable-height requirement applies to the finished space, so the raise has to account for slab thickness, ceiling lining, and any beams that will drop below the joists to carry the old floor across the new rooms.",
          "A builder who quotes a raise in round figures without measuring is guessing. The lift required is a specific number for each house.",
        ],
      },
      {
        heading: "What limits how high you can go",
        body: [
          "Council height limits apply to the overall building, measured from natural ground. In a character or low-density residential zone the limit is generally set in storeys and metres, and a raised Queenslander with a full lower level is a two-storey house. On sloping sites the measurement point matters and can work for or against you.",
          "Inside Brisbane's Traditional building character overlay, the raised house also has to remain recognisably a Queenslander from the street. Very high raises with a lower level that dominates the facade are unlikely to be supported. The usual answer is a lower level set back or screened so the original house still reads as the primary form.",
          "Check the current requirements for your council and zone before committing to a design, because the height limit and the character provisions together set the maximum lift, and the code sets the minimum. The project has to fit between them.",
        ],
      },
      {
        heading: "Flood levels can force the raise higher",
        body: [
          "In flood-affected parts of Brisbane, Ipswich, Logan and the Gold Coast, the new habitable floor has to sit at or above a minimum level set from the defined flood level. That level can require a raise well beyond what head height alone would need, and it decides what the lower level can be used for.",
          "Where the required floor level cannot be achieved for the lower level, it may be limited to non-habitable uses such as garage, storage and laundry, with the habitable rooms staying upstairs. Our article on <a href=\"/blog/flood-levels-minimum-floor-height-seq/\">flood levels and minimum floor heights</a> covers how the level is set.",
        ],
      },
      {
        heading: "Stairs, structure and services once the height is settled",
        body: [
          "Once the raise is fixed, the lower level has to work as a house. Internal stairs need a compliant rise and going, with sufficient headroom at the top landing under the old floor. The new posts, whether steel or concrete, are engineered to carry the raised house and are founded to suit the soil classification, which on Brisbane's clay soils often means piers rather than pad footings.",
          "Services move as well. Plumbing that dropped straight to ground now runs through a lived-in space and has to be relocated into walls and bulkheads; the switchboard usually needs upgrading; and termite management has to be reinstated for the whole building. None of this is difficult, but all of it belongs in the fixed price.",
        ],
      },
      {
        heading: "The short version",
        body: [
          "Measure the existing height, work out the lift to achieve habitable head height after slab and ceiling, check that the result sits under the council height limit and within character controls, then check the flood level. If all four line up, building under is usually the most efficient way to double a Queenslander's living area. If they do not, the alternative is often a rear extension or a second-storey approach, which we compare in <a href=\"/blog/second-storey-addition-or-raise-queensland/\">second-storey addition or raise</a>.",
        ],
      },
    ],
  },
  {
    slug: "built-to-boundary-walls-small-lots-brisbane",
    title: "Built-to-Boundary Walls on Small Lots in Brisbane",
    description: "When a wall can sit on the boundary of a small lot, what fire rating and neighbour access it triggers, and how it changes the plan of a narrow-block home.",
    date: "2026-08-29",
    readTime: "5 min read",
    image: "/assets/images/townhouse-facade.webp",
    category: "Custom Builds",
    content: [
      {
        heading: "Why the boundary wall exists",
        body: [
          "On a narrow lot every metre of width counts. A standard side setback on both sides can take a fifth or more of the frontage before the house starts. Small lot provisions in Brisbane and other South East Queensland councils generally allow one side wall, within limits on length and height, to be built at or very near the boundary so the plan can use the full width where it matters.",
          "That single allowance is what makes a comfortable home possible on a lot that would otherwise only fit a corridor. It also carries construction consequences that have to be designed in from the start, not discovered on site.",
          "The design approach for these lots is covered on our <a href=\"/services/small-lot-narrow-block-homes/\">small lot and narrow block homes page</a>.",
        ],
      },
      {
        heading: "What the codes generally allow",
        body: [
          "Small lot codes and the Queensland Development Code siting provisions typically permit a built-to-boundary wall on one side, up to a maximum length and height, provided it is not on the street frontage and the other side keeps a compliant setback. The exact figures depend on the council, the zone and the lot size, so check the current code rather than relying on what was done next door.",
          "Where both neighbours build to the same boundary you get a party-wall arrangement, which is common in townhouse developments and possible on freehold small lots with agreement. Where only one side builds to the boundary, the neighbour's setback and windows are protected by the code's provisions for light and privacy.",
        ],
      },
      {
        heading: "Fire separation",
        body: [
          "A wall close to a boundary has to protect the neighbouring property from fire spread. Within a set distance of the boundary the external wall needs a fire-resistance level, and openings such as windows and vents are restricted or prohibited in that zone. This changes the construction from a standard framed wall to a fire-rated system, usually with specific linings, and it changes the cost of that wall accordingly.",
          "It also changes the plan. A boundary wall with no windows means the rooms along it rely on the other side, the front, the rear or the roof for light and ventilation. On a well-designed narrow home this is where courtyards, light wells, clerestory windows and skylights earn their place.",
        ],
      },
      {
        heading: "Neighbour access and construction",
        body: [
          "You cannot build a boundary wall without standing on the neighbour's side to do it. Access for scaffolding, cladding and finishing has to be agreed in writing before work starts, and the neighbour's fences, gardens and services protected. Where agreement cannot be reached, the design may have to move the wall inboard enough to work from your own side, which is a decision to make before drawings are finalised.",
          "Stormwater cannot discharge onto the neighbour either. A boundary wall usually means a box gutter or a parapet with internal drainage, both of which need careful detailing to avoid the overflow problems that show up in the first major storm.",
          "Our article on <a href=\"/blog/boundaries-neighbours-and-building-work-queensland/\">boundaries, neighbours and building work</a> covers the broader legal side.",
        ],
      },
      {
        heading: "How it reshapes the plan",
        body: [
          "The boundary side becomes the service spine: garage, laundry, bathrooms, stairs and storage line up along the blank wall, while living rooms and bedrooms turn towards the open side, the rear yard or an internal courtyard. Garages on small lots are often on the boundary for exactly this reason, which frees the frontage for the entry and a habitable room with a window to the street.",
          "Two storeys are the norm because floor area has to come from height once width is capped. The upper level typically steps back from the boundary wall to satisfy height and overshadowing provisions, which produces the familiar profile of a two-storey narrow home with a single-storey element hard on one side.",
        ],
      },
      {
        heading: "Why a plan-library home rarely fits",
        body: [
          "Standard plans assume setbacks on both sides, windows on every wall and a driveway width the lot may not allow. Fitting one onto a narrow lot usually means shaving rooms until the house no longer works. Designing from the lot outward, with the boundary wall as a deliberate move rather than a compromise, produces a better home for the same money. That is the case for a custom design on these sites, and it is why we treat small lots as <a href=\"/services/custom-builds/\">custom builds</a> rather than adaptations.",
        ],
      },
    ],
  },
  {
    slug: "hstp-vs-septic-acreage-queensland",
    title: "HSTP or Septic? Wastewater for a Queensland Acreage Build",
    description: "How on-site wastewater works on unsewered land in South East Queensland, the soil evaluation that decides the system, and what it means for siting the house.",
    date: "2026-08-28",
    readTime: "6 min read",
    image: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
    category: "New Homes",
    content: [
      {
        heading: "No sewer means the block treats its own waste",
        body: [
          "Most acreage and rural-residential lots across the Sunshine Coast hinterland, the Gold Coast hinterland, Samford, Dayboro and the outer parts of Logan and Ipswich have no council sewer. Wastewater from the house has to be treated and dispersed on the block, and the system that does it is approved by council as plumbing work separate from the building approval.",
          "The choice of system, and where the treated water goes, is decided by a site and soil evaluation rather than by preference. That evaluation should happen before the house is sited, because the land application area competes with the house, the shed, the driveway and the pool for the usable parts of the block.",
          "For the wider picture on rural lots, see our <a href=\"/services/acreage-homes/\">acreage homes page</a>.",
        ],
      },
      {
        heading: "The site and soil evaluation",
        body: [
          "A qualified assessor tests the soil's ability to absorb water, checks the slope, the distance to boundaries, watercourses, bores and buildings, and sizes the land application area for the number of bedrooms the house will have. Heavy clay soils common through parts of South East Queensland absorb slowly and need larger areas or a system that produces cleaner effluent; sandy soils drain fast and can need controls for the opposite reason.",
          "The output is a report specifying a system type, a land application method and an area. Council approval of the plumbing follows the report, and the house cannot be occupied until the system is installed, inspected and commissioned.",
        ],
      },
      {
        heading: "Septic tank and trenches",
        body: [
          "A conventional septic tank separates solids and passes the liquid to absorption trenches or beds in the ground, where soil bacteria complete the treatment. It is simple, has no moving parts and needs no power. The trade-off is space and soil: trenches need a large area of suitable ground, they cannot be built on, planted with trees or driven over, and on slow-draining clay they can be impractical.",
          "Where the soil evaluation supports it and the block is large, a septic system is often the lowest-maintenance answer. Desludging of the tank at intervals is the main ongoing task.",
        ],
      },
      {
        heading: "Home sewage treatment plant",
        body: [
          "A home sewage treatment plant, usually called an HSTP or aerated wastewater treatment system, treats the wastewater to a much higher standard using aeration and disinfection, then disperses it through irrigation over a designated area. Because the effluent is cleaner, the land application area can be smaller and can be lawn or garden rather than a fenced-off trench field.",
          "The system needs power, has pumps and blowers that wear, and requires a service contract with regular inspections, which councils typically make a condition of approval. On smaller acreage lots, sloping blocks or poor soils it is often the only approach that fits, and the irrigation area doubles as landscaping.",
        ],
      },
      {
        heading: "Setbacks and where the house can go",
        body: [
          "Both systems come with minimum distances from the land application area to boundaries, dwellings, watercourses, dams, bores and rainwater tanks. On a large lot these are easy to meet. On a smaller rural-residential lot they can decide where the house sits, which way the fall runs from the tanks, and whether the pool or shed has to move.",
          "This is why the wastewater report belongs at the start of the design process. It is the same logic that applies to bushfire assessment on these blocks, covered in our article on <a href=\"/blog/bushfire-attack-level-bal-queensland/\">Bushfire Attack Level</a>: the site constraints have to be known before the plan is drawn.",
        ],
      },
      {
        heading: "What it means for the build",
        body: [
          "The system, tanks, pumps, irrigation or trenches, and the electrical and plumbing connections are part of the build scope and belong in the fixed price with the approval fees. Site establishment on acreage also has to allow for the excavation and access the installation needs, which is straightforward when planned and disruptive when it is not.",
          "We treat the wastewater design, the water supply and the <a href=\"/blog/rainwater-tanks-queensland-requirements/\">rainwater tank requirements</a> as one package of site services on an acreage build, resolved before the house design is finalised so the block works as a whole.",
        ],
      },
    ],
  },
  {
    slug: "can-my-house-take-a-second-storey",
    title: "Can Your House Take a Second Storey? Structural Checks First",
    description: "The engineering questions that decide whether an existing Queensland home can carry a second storey, and what happens when the answer is partly no.",
    date: "2026-08-27",
    readTime: "5 min read",
    image: "/images/home-extension.webp",
    category: "Renovations",
    content: [
      {
        heading: "The question comes before the design",
        body: [
          "A second-storey addition puts the weight of a new floor, new walls and a new roof onto a house that was designed to carry a roof and nothing else. Whether the existing structure can take it, and what has to change so it can, is an engineering question that should be answered before any concept drawing is commissioned.",
          "The good news is that most post-war brick and timber homes in South East Queensland can be extended upwards. The realistic news is that almost all of them need some strengthening to do it, and the extent of that work is what decides whether going up is the right call compared with extending out.",
          "For how we approach both, see our <a href=\"/services/home-extensions-second-storey-additions/\">extensions and second storey additions page</a>.",
        ],
      },
      {
        heading: "Footings and slab",
        body: [
          "Everything ends up in the ground. The existing footings were sized for a single-storey load on whatever soil classification applied, and a second storey roughly doubles the load on the walls that carry it. The engineer needs to know the footing size and depth, which usually means a few test holes at the base of the external walls, and the soil classification, which means a soil test.",
          "On reactive clays across Brisbane's western and southern suburbs the existing footings may already be working hard. Where they are inadequate, the answer is underpinning or new footings alongside, both of which are established techniques but neither of which is cheap. Where the house is on stumps, new posts and footings for the upper structure are usually simpler.",
        ],
      },
      {
        heading: "Walls and load paths",
        body: [
          "The upper floor has to land on something. In a brick veneer home the brick skin is not structural; the timber frame behind it carries the load, and it was not designed for a floor above. In a double-brick home the walls can often carry more, but the connections and the lintels over openings need checking. In a timber home the frame is typically light and will need new posts and beams to bring the upper loads down to the footings.",
          "The engineer maps a load path from the new roof, through the new walls and floor, down through the existing house to the ground, and identifies every element that needs to be added or strengthened. Steel posts hidden in walls, new beams over living areas and new footings under them are the usual result.",
        ],
      },
      {
        heading: "Roof, stairs and the ground floor plan",
        body: [
          "The existing roof comes off, which exposes the house to weather until the new floor is on and the new roof is up. Staging this, with temporary roofing or a rapid enclosure sequence, is a construction planning issue rather than a structural one, but it decides whether you can live in the house during the work.",
          "The stair is the other big change. It takes floor space on the ground level and has to land somewhere sensible upstairs, and it often forces a rework of the ground floor plan around it. A second storey that is designed without the stair location settled tends to produce a ground floor nobody wanted.",
        ],
      },
      {
        heading: "Services and compliance",
        body: [
          "New bathrooms upstairs need drainage stacks that come down through the ground floor, a switchboard that can handle the added circuits, and hot water capacity for more people. The upper level must meet current energy efficiency, safety glazing, smoke alarm and balustrade requirements even though the lower level was built to older standards.",
          "Approval is normally building approval through a certifier, with development approval triggered where the addition affects height limits, setbacks, small-lot provisions or a character overlay. The distinction is covered in our article on <a href=\"/blog/development-approval-vs-building-approval-qld/\">development approval versus building approval</a>.",
        ],
      },
      {
        heading: "When the answer is partly no",
        body: [
          "Sometimes the engineering says the house can take a second storey only with strengthening that approaches the cost of a new structure. At that point the honest comparison is between going up, extending out on the ground, or, if the house is a Queenslander on stumps, <a href=\"/services/house-raising-build-under/\">raising it and building under</a>. Each delivers the same extra floor area by a different route, and the right one depends on the block, the house and the budget.",
          "We put those options side by side with real pricing rather than steering towards one. The assessment costs far less than committing to the wrong approach, and it is the first thing we do on any extension enquiry.",
        ],
      },
    ],
  },
  {
    slug: "granny-flat-cost-drivers-queensland",
    title: "What Drives the Cost of a Granny Flat in Queensland",
    description: "The factors that actually decide what a secondary dwelling costs to build in South East Queensland, from services and access to size limits and finish level.",
    date: "2026-08-26",
    readTime: "5 min read",
    image: "/assets/images/stock/home-single-modern.webp",
    category: "Cost & Budget",
    content: [
      {
        heading: "A small house is still a house",
        body: [
          "A granny flat has a kitchen, a bathroom, a laundry, a bedroom and a living space, plus the footings, frame, roof, plumbing, electrical and finishes to make them work. Per square metre it is often more expensive than a large home for exactly that reason: the expensive rooms are all there, and the cheap floor area that dilutes them in a big house is not.",
          "This article is about what moves the number, not the number itself, because the range between a simple attached flat on a level block with services nearby and a detached flat at the bottom of a sloping yard is wide enough that a single figure would mislead.",
          "For what we build and how, see our <a href=\"/services/granny-flats-secondary-dwellings/\">granny flats and secondary dwellings page</a>.",
        ],
      },
      {
        heading: "Services: the biggest hidden variable",
        body: [
          "Sewer, water, power and stormwater all have to reach the new dwelling. Where the flat is attached to the house or close to it, the connections are short and simple. Where it sits at the rear of a deep block, trenching for sewer at the right fall, a new water line, a sub-board fed from the main switchboard and a stormwater path to a lawful point of discharge can together become a significant part of the cost.",
          "Sewer is the one to check first. If the flat's drainage cannot reach the existing connection by gravity, a pump station is needed, and that adds both capital cost and ongoing maintenance. A quick check of where the sewer connection is and the levels between it and the proposed flat is worth doing before any design work.",
        ],
      },
      {
        heading: "Access and the block",
        body: [
          "Getting materials, concrete and tradespeople to the back of a block past an existing house is slower than building on an open site. Narrow side access can mean hand-carrying materials, pumping concrete over the house and smaller equipment, all of which add labour. A sloping rear yard adds retaining, stepped footings or a suspended floor.",
          "Soil matters as much as it does for a full home. Reactive clays need engineered footings regardless of how small the building is. Our article on <a href=\"/blog/reactive-clay-soil-brisbane-footings/\">reactive clay soil and footings</a> explains why the same slab can cost very different amounts on two nearby blocks.",
        ],
      },
      {
        heading: "Size caps and what they do to design",
        body: [
          "Councils cap the floor area of a secondary dwelling, with the figure varying by council and zone, so check the current limit before designing. The cap forces efficiency: every square metre has to work, corridors disappear, and storage has to be built in rather than added later. Good small design costs more per square metre in thought and detailing, and it is the difference between a flat that rents or houses a parent comfortably and one that does not.",
          "Attached and above-garage options share structure with the existing building and can be cheaper for the same floor area than a fully detached flat, but they bring fire separation, sound separation and sometimes structural strengthening into scope.",
        ],
      },
      {
        heading: "Finish level and fixtures",
        body: [
          "A flat for an elderly parent might prioritise a level entry, a hobless shower, wider doors and good lighting. A flat for rental income might prioritise durability and low maintenance. A flat for adult children might sit somewhere between. The specification follows the purpose, and the purpose should be settled before selections start, because the kitchen and bathroom are where the cost concentrates in a small building.",
          "The same logic applies to the compliance items that are easy to overlook: energy efficiency, termite management, smoke alarms interconnected with the main house where required, and the 2022 change that allows secondary dwellings in Queensland to be rented to people outside the household. Our article on <a href=\"/blog/granny-flat-secondary-dwelling-queensland/\">what is allowed for secondary dwellings</a> covers the planning side.",
        ],
      },
      {
        heading: "How to get a real price",
        body: [
          "Locate the sewer and check the levels. Get a soil test. Confirm the council cap and the setbacks for your lot. Decide the purpose and the finish level. With those four settled, a builder can give you a fixed price that means something, with any genuine unknown carried as a stated contingency rather than buried in the margin.",
          "Without them, any figure is an allowance dressed up as a quote, and the difference tends to arrive as variations once the ground is open. We would rather do the checks first and price once.",
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

export function slugifyCategory(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCategories() {
  const counts = new Map<string, number>();
  for (const post of blogPosts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugifyCategory(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getCategoryBySlug(slug: string) {
  return getCategories().find((category) => category.slug === slug);
}

export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category === category);
}

/** Same-category posts first, then most recent, so every post links onward. */
export function getRelatedPosts(slug: string, limit = 4) {
  const post = getBlogPost(slug);
  if (!post) return [];
  const others = blogPosts.filter((other) => other.slug !== slug);
  const sameCategory = others.filter((other) => other.category === post.category);
  const rest = others.filter((other) => other.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
