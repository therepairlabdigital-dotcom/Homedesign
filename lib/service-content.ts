export type ServiceContent = {
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "new-home-builds": {
    sections: [
      {
        heading: "We start with the block, not the plan",
        body: [
          "The most expensive mistake in a new build is designing before you understand the site. Slope, soil classification, orientation, services, easements, overlays and access all set hard limits on what can be built and what it costs to build it.",
          "Across South East Queensland, soil classification under AS 2870 is the single largest cost variable. Reactive clay is widespread, and a site classified H1 or H2 needs an engineered footing system rather than a conventional slab. That difference can run into tens of thousands, and it is a function of the ground rather than the builder.",
          "So we complete the investigation before quoting — soil test, contour survey and council property report. Our first number takes longer to produce and is far more likely to be the number you actually pay.",
        ],
      },
      {
        heading: "What a fixed price should be built on",
        body: [
          "A fixed-price contract is only meaningful when the scope behind it is complete. Ours are built on full working drawings, engineering, and a documented selections schedule covering finishes, fixtures and appliances.",
          "A low contract price with a thin specification is the oldest trick in residential construction. Provisional sums and prime cost allowances absorb the difference, and the final figure lands well above what you signed. We would rather spend longer nailing down the specification and hand you a number you can plan around.",
          "In Queensland, domestic building contracts above $20,000 are Level 2 contracts, the deposit is capped at 5 per cent, and the work is covered by the QBCC Home Warranty Scheme. Any builder asking for a larger deposit is worth questioning before you sign.",
        ],
      },
      {
        heading: "Designed for the climate, not against it",
        body: [
          "Comfort in a Queensland home comes from orientation, shading and ventilation far more than from equipment. North-facing living areas, deep eaves, protected western glazing and a plan that lets breeze pass through do most of the work before any product decision is made.",
          "New homes here are built to a raised energy performance standard under the National Construction Code. Meeting it through design costs essentially nothing at the drawing stage. Meeting it through mechanical systems bolted on at the end costs you every summer for the life of the house.",
          "Western glazing is the decision we push back on hardest. Afternoon summer sun arrives low from the west at the hottest part of the day, at an angle no eave can block, and it is the most common reason a new house is uncomfortable in the room the family uses most.",
        ],
      },
      {
        heading: "How the build runs",
        body: [
          "One contract, one program with defined stages, and progress claims that follow those stages. Variations are priced and approved in writing before any work proceeds, never after.",
          "Harj runs the sites. That is the practical difference between us and a volume builder — decisions get made by someone who has been on the job that morning, and problems reach you when they appear rather than when they become expensive.",
          "Where an existing house has to come down first, we handle demolition, service disconnections, licensed asbestos removal and the associated approvals under the same contract, so there is one point of responsibility rather than three.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to build a new home in South East Queensland?",
        answer:
          "The site drives the variance more than the floor area does. Footing system, required flood level, slope, retaining, demolition, service connections and access can each move the number substantially between two apparently similar blocks. We give a realistic range after assessing the site, before any fees are involved.",
      },
      {
        question: "How long does a new home take to build?",
        answer:
          "Nine to fourteen months of construction is typical for a detached home, with design and approvals ahead of that. Wet weather, service connections and delayed selections are the usual causes of variance.",
      },
      {
        question: "Do you use standard plans?",
        answer:
          "No. Every project starts with the site and the brief, and the drawings follow. If a standard plan genuinely suits your block and budget, a volume builder will beat us on price and we will tell you so.",
      },
      {
        question: "What areas do you build in?",
        answer:
          "Across South East Queensland — Brisbane, the Gold Coast, Sunshine Coast, Ipswich, Logan, Moreton Bay and Redlands. Send us the address and we will confirm straight away.",
      },
    ],
  },

  "duplex-townhouses": {
    sections: [
      {
        heading: "Feasibility before design",
        body: [
          "A duplex is a development project wearing the clothes of a house. The first question is never what to build, it is whether the site permits it at all.",
          "We check the zone and the dual occupancy provisions, minimum lot size, frontage, site cover, setbacks, private open space, deep planting and car parking. Frontage rules out more projects than lot area does, because it drives the driveway, the parking layout and whether two dwellings can be arranged sensibly.",
          "Then services. Sewer alignment across the block, the available stormwater discharge point, water meter sizing and electrical supply capacity. A sewer main running through the middle of a site can consume an entire development margin, and it is checkable before you buy.",
          "The output should be a straight answer: this site supports two dwellings of roughly this size, at roughly this cost, over roughly this program. We will tell you plainly when a site does not stack up.",
        ],
      },
      {
        heading: "Design for approval, tenancy and resale at once",
        body: [
          "A duplex has three audiences. The assessment manager has to approve it, a tenant or buyer has to want to live in it, and a valuer has to put a number on it. Designs that satisfy only one tend to disappoint on the other two.",
          "The details that consistently pay for themselves are acoustic separation between dwellings, genuine privacy in the outdoor space, real storage, a usable second bathroom, and off-street parking that does not dominate the frontage.",
          "Squeezing maximum floor area onto the block is usually the wrong optimisation. Two well-planned dwellings almost always outperform two cramped ones on both rent and resale.",
        ],
      },
      {
        heading: "Plan the exit before the drawings",
        body: [
          "Whether you intend to hold and rent, sell both, or live in one and rent the other changes the design, the specification and sometimes the structure.",
          "If the halves are to be sold separately, the title path has to be planned from the start. Whether it is a standard format subdivision or a community titles scheme affects the survey, the services layout and the fire separation requirements for the common wall. Retrofitting a title split onto a design that was not built for one is expensive and occasionally impossible.",
          "Specification follows the same logic. Rentals reward durability and practical layout. A sale to owner-occupiers rewards finish level and street appeal. Over-specifying a rental is the fastest way to lose money on an otherwise sound project.",
        ],
      },
      {
        heading: "Program certainty when finance is attached",
        body: [
          "Most duplex projects carry construction finance, and lenders release funds against progress claims at defined stages. That makes program certainty a financial issue rather than a convenience — every month of overrun is another month of interest on a property earning nothing.",
          "We run duplexes on fixed-price contracts with documented stage schedules, so progress claims are predictable and certificates arrive when your lender expects them.",
          "Check your builder's QBCC licence class actually permits the value and type of work before you sign. It is a two-minute check on the QBCC register and it is the cheapest due diligence available to you.",
        ],
      },
    ],
    faqs: [
      {
        question: "What size block do I need for a duplex?",
        answer:
          "It depends on the zone and the provisions applying to your specific site under the relevant council's planning scheme, not on a single regional number. Minimum lot size, frontage, site cover and private open space all interact. Send us the address and we will check the property report.",
      },
      {
        question: "Do I need a development approval as well as a building approval?",
        answer:
          "In most cases yes. Dual occupancy generally requires development approval before building approval can be issued. Whether it is code assessable or impact assessable affects the timeframe, and impact assessable proposals go through public notification.",
      },
      {
        question: "Can I sell the two halves separately?",
        answer:
          "Often yes, but the title path has to be planned from the start because it affects the survey, the services layout and sometimes the structure. Tell us your intended exit before design begins.",
      },
      {
        question: "How long does a duplex take to build?",
        answer:
          "Construction commonly runs ten to fourteen months for a standard two-dwelling project, with design and approvals ahead of that. Impact assessable approvals, service upgrades and wet weather are the usual causes of extension.",
      },
    ],
  },

  "custom-builds": {
    sections: [
      {
        heading: "When a custom build is the right answer",
        body: [
          "A custom build makes sense when the block, the brief or the budget rules out anything off a standard plan. Sloping sites, narrow frontages, awkward orientation, difficult access, character overlays and genuinely specific briefs all defeat the volume model.",
          "It is worth being honest about the reverse. On a flat, serviced, unencumbered block in a new estate, where a standard plan genuinely suits how you live, a volume builder will beat us on price for a result you would be happy with. We will tell you when that is your situation.",
          "Where a standard plan has to be modified until the savings disappear and the compromises remain, a purpose-designed house usually costs less and delivers more.",
        ],
      },
      {
        heading: "The site decides more than the floor plan",
        body: [
          "On a constrained block the design problem is fitting a house onto the land. On acreage it is choosing where on the site the house should sit — and that decision carries more consequence than the floor plan does.",
          "Aspect and northern sun, prevailing breeze, the outlook, distance from road noise, driveway length and where a wastewater application area can go all follow from siting. A standard plan dropped anywhere on a large block wastes most of what you paid for.",
          "Slope is not only a cost. Used properly it produces the split-level and elevated designs that make difficult sites worth building on, with living space opening to the view and service areas tucked into the cut.",
        ],
      },
      {
        heading: "Overlays and constraints we establish first",
        body: [
          "Character overlays across inner Brisbane restrict demolition and govern what the street elevation can look like. Flood and storm tide mapping sets minimum habitable floor levels that reshape the entire house. Bushfire hazard overlays trigger a BAL assessment under AS 3959 with construction requirements attached. Vegetation and habitat overlays can determine the building envelope before design begins.",
          "All of these are visible on the council property report, and all of them are far cheaper to establish than to discover. We check them before design rather than during assessment.",
          "On acreage we add rainwater supply sizing, on-site wastewater design and driveway access for heavy deliveries, because none of those are included in a rural block the way they are in a serviced one.",
        ],
      },
      {
        heading: "Working with your designer, or ours",
        body: [
          "We are happy to build to drawings you already have, and we will review them for buildability and cost before you commit. That review frequently saves more than it costs, because it catches the details that are cheap on paper and expensive on site.",
          "If you do not have a designer yet, we can bring one in and run the design and construction as a single process, which keeps the budget and the drawings honest with each other from the beginning.",
          "Either way the sequence is the same: site investigation, then design, then a fixed price built on complete documentation. Reversing that order is how custom builds acquire their reputation for cost overruns.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a custom home cost?",
        answer:
          "It depends almost entirely on the block and the specification, which is why we do not publish a rate. Slope, soil classification, access, demolition, overlays and finish level move the number more than floor area does. We give a realistic range after looking at the site and understanding the brief.",
      },
      {
        question: "Do you build on sloping or difficult blocks?",
        answer:
          "Yes, and a large share of our work is on them. Slope means engineered footings, retaining, drainage design and careful access planning for concrete and crane deliveries. We price those elements up front rather than treating them as variations.",
      },
      {
        question: "Can you work with my own architect?",
        answer:
          "Yes. We will review existing drawings for buildability and cost before you commit, and build to them. If you do not have a designer, we can bring one in.",
      },
      {
        question: "How long does design and approval take?",
        answer:
          "Typically three to six months depending on the council and whether overlays apply, before construction begins. Impact assessable applications and character overlay assessments extend the front end.",
      },
    ],
  },

  "queenslander-homes": {
    sections: [
      {
        heading: "Raise and build under: height decides everything",
        body: [
          "Raising a Queenslander and building in underneath roughly doubles the floor area on land you already own, keeps the character the suburb is valued for, and produces a home better suited to the climate than most new builds.",
          "The constraint that decides the outcome is height. How far the house can be lifted is governed by the overlay provisions, the building height limit for the zone, and the relationship to neighbouring buildings. That height then sets your ground floor ceiling, which determines whether the new level reads as a home or a basement.",
          "This is why the sequence matters. Establish the permitted height first, then design the ground floor to the space you genuinely have. Designing a floor plan and discovering the height afterwards is the most common and most expensive mistake in this work.",
        ],
      },
      {
        heading: "Working inside the character overlay",
        body: [
          "Most Brisbane Queenslanders in Paddington, Bardon, Ashgrove, Red Hill and similar suburbs sit within the Traditional Building Character Overlay. It is concerned with what the street sees — roof form, verandah, front setback, window proportions, materials and the rhythm of the streetscape.",
          "It is far less concerned with what happens at the back, and that asymmetry is the key to a good result. Restore and retain the front rooms and the verandah properly, and put the contemporary open-plan living, the kitchen and the northern glazing in a rear addition where there is room to move.",
          "Rear additions work best when they are legibly new rather than imitating the original. A clearly contemporary rear pavilion linked to the original house generally reads better and approves more easily than heavy-handed pastiche.",
        ],
      },
      {
        heading: "What the existing structure adds",
        body: [
          "Stumps at the end of their life have to be replaced, and on a house being lifted the new supports are engineered rather than like-for-like. Bearers and floor joists have to be sound enough to carry the lift, and in older Queenslanders termite damage and rot in the subfloor are common enough to assume until proven otherwise.",
          "Previous modifications are the wildcard. Many of these houses have been altered over a century — enclosed verandahs, added rooms, replaced sections — sometimes without approval and often without engineering. Each one has to be assessed and frequently corrected.",
          "Services are a full replacement rather than a patch. Old Queenslanders routinely carry wiring past its service life, undersized switchboards with no capacity for a second level, failing plumbing and no insulation anywhere.",
        ],
      },
      {
        heading: "The details that make the result",
        body: [
          "Under-floor daylight comes first. A ground floor lit only from the front and back will feel like a corridor, so light wells, a re-planned rear opening and careful use of the side setbacks change the entire feel of the level.",
          "The stair is the most expensive square metre in the house and the most commonly misplaced. Put it where it connects both levels without stealing the northern light or cutting the living space in half.",
          "Matching original fabric matters. VJ boards, chamferboard, casement windows, hoop pine floors and pressed metal can all still be sourced or replicated, but they have to be specified early. Substituting modern equivalents late is where character renovations lose their character.",
        ],
      },
    ],
    faqs: [
      {
        question: "How high can I raise a Queenslander?",
        answer:
          "It depends on the overlay provisions, the building height limit for your zone and the relationship to neighbouring properties, so there is no single figure. We establish the permitted height from the council property report before design begins, because it sets your ground floor ceiling.",
      },
      {
        question: "Do I need approval to raise and build under?",
        answer:
          "Yes. Raising a house and building in underneath generally requires both development approval and building approval, and inside the character overlay the assessment considers the effect on the streetscape.",
      },
      {
        question: "Can I put a modern extension on the back?",
        answer:
          "Usually yes, and it is often the best approach. The character overlay is primarily concerned with what the street sees, which leaves considerable freedom at the rear.",
      },
      {
        question: "Is it cheaper to raise a Queenslander or knock it down?",
        answer:
          "In a character area the choice is frequently made for you, because demolition of a pre-1947 house is restricted. Where both are permitted, raising and building under often delivers more usable floor area for the money and retains the character value that drives resale in these suburbs.",
      },
    ],
  },

  renovations: {
    sections: [
      {
        heading: "When renovating beats rebuilding",
        body: [
          "The honest test is structural. If the existing frame, roof and foundations are sound and the layout can be reworked without relocating everything, renovation usually wins on cost per square metre and on time.",
          "If the plan requires moving the kitchen, the bathrooms, the stairs and the external walls, you are approaching rebuild cost for a compromised result — new work stitched into old geometry, with the old constraints still setting the limits.",
          "There is a compliance dimension too. A rebuild delivers a house built to current standards throughout, while a renovation only brings the parts you touch up to current requirements. That is often the right trade, but it should be a decision rather than a surprise.",
          "We give clients a straight comparison on both paths, including the cases where we recommend doing less work than they came in asking for.",
        ],
      },
      {
        heading: "What is usually behind the walls",
        body: [
          "In South East Queensland housing the recurring finds are termite damage in timber framing, previous unapproved work that does not comply, undersized electrical switchboards, failing galvanised plumbing, and no insulation at all.",
          "Asbestos is likely in anything built before the late 1980s — commonly in eaves, wet area sheeting and sometimes vinyl flooring backing. It requires licensed removal with documentation, and it is not something to discover after the demolition crew has started.",
          "Near the coast, add corrosion. Decades of salt air degrade fixings, structural connections and reinforcement in ways that are invisible until the building is opened, which is why a cosmetic renovation can turn into a structural repair.",
        ],
      },
      {
        heading: "Extensions and structural work",
        body: [
          "Connecting new to old means matching floor levels, tying in roof structure, and dealing with an existing wall that may not be load-bearing where you assumed. Where it is, the answer is an engineered beam with supports carried down to adequate footings, which sometimes means new footings inside a finished house.",
          "Where an extension increases the building footprint, setbacks, site cover and overlays apply as they would on a new build. On low-lying land the new work generally has to meet the current required floor level even where the existing house predates it, so a rear extension may sit noticeably higher than the floor it connects to.",
          "Inside a character overlay, work to the front and sides is assessed against the streetscape provisions, which usually leaves the rear as the place to spend your creative budget.",
        ],
      },
      {
        heading: "How we contract renovation work",
        body: [
          "We investigate before contract — opening up where we can, inspecting stumps, framing and services — then price on a fixed basis with a clearly stated and sensible contingency for what remains hidden.",
          "A renovation contract that carries no contingency at all is either priced with a hidden margin or set up for variations. Neither is honest, and both cost you more than a stated allowance would. Anything we find gets reported and priced in writing before we act on it.",
          "This is the work that most rewards an owner-run builder. Nothing is square, dimensions vary across a single room, and decisions have to be made on site by someone with the authority to make them.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to renovate or rebuild?",
        answer:
          "It depends on the existing structure. If the frame, roof and foundations are sound and you are keeping the general layout, renovating usually costs less per square metre. If you are relocating the kitchen, bathrooms and external walls, you are close to rebuild cost with more compromise.",
      },
      {
        question: "How do you price work when you cannot see behind the walls?",
        answer:
          "We investigate before contract, then price on a fixed basis with a clearly stated contingency for what remains hidden. Anything we find is reported and priced in writing before we act on it.",
      },
      {
        question: "Do I need approval for a renovation?",
        answer:
          "Structural work, extensions and anything altering the building footprint generally need building approval, and often development approval as well. Inside a character overlay, work to the front and sides is assessed against the streetscape provisions.",
      },
      {
        question: "Will you find asbestos?",
        answer:
          "In anything built before the late 1980s, very likely — commonly in eaves and wet area sheeting. It requires licensed removal and disposal with documentation, which we establish and price before demolition rather than after.",
      },
    ],
  },

  "interior-design": {
    sections: [
      {
        heading: "Interiors decided with the build, not after it",
        body: [
          "The decisions that determine how a house feels to live in are made long before anyone chooses a paint colour. Ceiling heights, window sizes and positions, how daylight reaches the middle of the plan, where the stair sits and how rooms connect are all fixed at design stage.",
          "Treating interiors as a decorating exercise that begins after lock-up means inheriting whatever the drawings produced. Treating them as part of the design means the finished rooms were intended rather than discovered.",
          "We run interior selections alongside the build program so the decisions land in the right order — anything that gets buried is decided before it gets buried.",
        ],
      },
      {
        heading: "The order decisions have to happen in",
        body: [
          "Structural and dimensional items first: window and door sizes and positions, ceiling heights, stair configuration and the location of wet areas. These are effectively fixed by frame stage.",
          "Then anything with a long lead time, regardless of when it is installed — windows, external doors, stone benchtops, imported tapware and specific tiles all need ordering well ahead.",
          "Then rough-in dependent items: tapware, shower configuration, power point and switch positions, data points and lighting layout, all of which are set before the walls are lined. Then surfaces, then fittings and hardware.",
          "A build waiting on a client decision is a build losing days it never recovers, because trades booked for a sequence do not simply wait.",
        ],
      },
      {
        heading: "Choosing a palette rather than items",
        body: [
          "Deciding the overall direction first — warm or cool, light or dark, matte or gloss — turns hundreds of open questions into a series of choices within a defined range. It is the single most useful thing you can do to make selections manageable.",
          "See materials physically. Screen images misrepresent colour and completely misrepresent texture. Get samples of tiles, benchtops and flooring and view them in the actual light of the room, at the time of day you will use it.",
          "Decide with the whole house in view rather than room by room, so materials relate to each other rather than accumulating into a collection of individually good choices that do not sit together.",
        ],
      },
      {
        heading: "Specifying for the Queensland climate",
        body: [
          "Material choices behave differently here. Dark surfaces in west-facing rooms hold heat. High-gloss finishes show every mark in the strong subtropical light. Timber moves with humidity, which affects joinery tolerances and flooring installation.",
          "Window furnishings do real thermal work rather than decorative work. External shading on western glazing outperforms any internal blind, because it stops heat before it enters the building.",
          "Near the coast, hardware and fixings need corrosion resistance appropriate to the salt exposure, including on items chosen for appearance rather than performance. A beautiful handle that pits within two years was the wrong specification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer interior design separately from building?",
        answer:
          "Our interior work runs alongside our builds, because the decisions that matter most are made during design and construction rather than after. If you are building with us, interiors are part of the same process.",
      },
      {
        question: "When do I need to make my selections?",
        answer:
          "Earlier than most people expect. Anything structural or dimensional is fixed by frame stage, anything with a long lead time needs ordering months ahead, and rough-in dependent items are set before the walls are lined.",
      },
      {
        question: "What happens if I change my mind after selections are made?",
        answer:
          "Once items are ordered, changing them costs money — sometimes the full value of the ordered item plus the replacement. Changes at that point are not free even where nothing has been installed.",
      },
      {
        question: "Are finishes included in the fixed price?",
        answer:
          "Yes, through a documented selections schedule in the contract. Where items are prime cost allowances you can adjust up or down, and the difference is applied to the contract. We will show you what each allowance actually buys before you sign.",
      },
    ],
  },

  commercial: {
    sections: [
      {
        heading: "Our focus is residential",
        body: [
          "Design Homes is a residential builder. New homes, duplexes and townhouses, custom builds, Queenslander renovations and home extensions across South East Queensland are what we do, and what our licence, our trades and our project management are built around.",
          "We are straightforward about that because choosing a builder whose experience matches your project matters more than almost any other decision you make. A residential builder taking on unfamiliar commercial work serves nobody well.",
          "If you have a project in mind, the fastest way to a useful answer is to send us the address and a description. We will tell you honestly whether it is work we are the right builder for.",
        ],
      },
      {
        heading: "Small-scale work we do take on",
        body: [
          "Where a project is residential in character and scale, we are generally the right fit. Multi-dwelling residential projects, dual occupancy developments and small townhouse schemes sit comfortably within what we do.",
          "The same disciplines apply as on any of our work — fixed-price contracts backed by complete documentation, site investigation before quoting, and defined stage programs so that progress claims and finance drawdowns stay predictable.",
          "For projects beyond that scale, we will say so rather than stretch a program we cannot hold. That is a better outcome for you and a better reference for us.",
        ],
      },
      {
        heading: "How we assess any enquiry",
        body: [
          "We start with the site. Zone and planning provisions, overlays, soil classification, services capacity and access all determine what is achievable and what it costs, regardless of the building type.",
          "Then the brief and the program, because a realistic timeframe is part of a realistic price. Then whether our licence class, our trades and our capacity genuinely suit the work.",
          "That conversation costs nothing and it is worth having early, because the most expensive version of this discussion is the one that happens after a contract is signed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you take on commercial construction?",
        answer:
          "Our focus is residential — new homes, duplexes and townhouses, custom builds, Queenslander renovations and extensions across South East Queensland. Send us details of your project and we will tell you honestly whether we are the right builder for it.",
      },
      {
        question: "Do you build multi-dwelling residential projects?",
        answer:
          "Yes. Dual occupancy developments and small townhouse schemes sit comfortably within what we do, on the same fixed-price contracts and defined stage programs as our other work.",
      },
      {
        question: "What licence do you hold?",
        answer:
          "We are QBCC licensed, and we are happy to provide our licence details so you can check the register, the class and the history yourself before signing anything.",
      },
      {
        question: "How do I find out if my project suits you?",
        answer:
          "Send us the address and a description of what you have in mind. We will look at the site, the zoning and the overlays, and come back with a straight assessment before any fees are involved.",
      },
    ],
  },
};
