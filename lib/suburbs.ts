export type Suburb = {
  slug: string;
  name: string;
  council: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  housingStock: string;
  typicalProjects: string[];
  pockets: string[];
  faqs: { question: string; answer: string }[];
};

export const suburbs: Suburb[] = [
  {
    slug: "paddington",
    name: "Paddington",
    council: "Brisbane City Council",
    metaTitle: "Builders Paddington Brisbane | Design Homes",
    metaDescription:
      "Queenslander renovation and character builders in Paddington. Raise and build under, rear extensions and steep-site builds under the character overlay.",
    keywords: [
      "builders Paddington Brisbane",
      "Queenslander renovation Paddington",
      "raise and build under Paddington",
      "character home builders Paddington",
      "renovation builders Paddington",
      "home extension Paddington",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Paddington",
    heroDescription:
      "Character renovation, raise-and-build-under and steep-site work in one of Brisbane's most tightly controlled character precincts.",
    heroImage: "/assets/images/queenslander-classic-new.webp",
    intro: [
      "Paddington is the hardest kind of Brisbane suburb to build in and one of the most rewarding. The blocks are narrow, the ground falls away sharply, the houses are close together, and almost all of it sits inside the Traditional Building Character Overlay.",
      "Those constraints are also what preserved the suburb, and they are why a well-executed character renovation here holds value the way it does. Working within them properly is a specialty rather than an inconvenience.",
    ],
    sections: [
      {
        heading: "Steep sites and tight frontages",
        body: [
          "Paddington runs across a series of ridges falling toward Milton and Red Hill, and very few blocks are flat. Cross-falls of three or four metres across a site are ordinary here, which means retaining, engineered footings, drainage design and careful management of where the house sits on the slope.",
          "Frontages are narrow by modern standards, and the houses were built close to their boundaries long before current setback provisions existed. That restricts machinery access, complicates scaffolding, and frequently means concrete has to be pumped rather than discharged directly.",
          "Access is the item most often underpriced on a Paddington job. A builder who has not walked the block and worked out how material actually reaches the work has not priced your site.",
        ],
      },
      {
        heading: "The character overlay here is strict",
        body: [
          "Most of Paddington sits within character areas, and much of it in Demolition Control Precincts. Demolition of a pre-1947 house is heavily restricted and, on a house contributing to the streetscape, unlikely to be approved.",
          "That is not the obstacle it first appears. The overlay is concerned with what the street sees — roof form, verandah, front setback, window proportions and materials. It leaves considerably more freedom at the rear.",
          "The approach that works is a restored, compliant street elevation with contemporary living in a rear addition, plus raising the house to build in underneath where the permitted height allows it.",
        ],
      },
      {
        heading: "The housing stock and what it hides",
        body: [
          "Paddington is dominated by timber workers' cottages and small colonial Queenslanders, many over a century old and most modified repeatedly since.",
          "The recurring finds are stumps at the end of their life, termite damage in bearers and joists, previous unapproved alterations done without engineering, undersized switchboards, failing plumbing and no insulation anywhere.",
          "A structural assessment before design is not optional here. It is the difference between a fixed price and a sequence of variations.",
        ],
      },
    ],
    housingStock:
      "Timber workers' cottages and small colonial Queenslanders, largely pre-1920, on narrow sloping allotments.",
    typicalProjects: [
      "Raise and build under",
      "Rear extensions to open the plan north",
      "Character-compliant street elevation restoration",
      "Structural repair of stumps, bearers and joists",
      "Full services replacement",
    ],
    pockets: [
      "Given Terrace & Latrobe Terrace",
      "Rosalie",
      "Baroona Road",
      "Fernberg Road",
      "Cook Terrace & the ridge",
    ],
    faqs: [
      {
        question: "Can I demolish and rebuild in Paddington?",
        answer:
          "Almost certainly not if the house is pre-1947 and contributes to the streetscape. Most of Paddington sits in character areas and Demolition Control Precincts where demolition is heavily restricted. The realistic path is raising the house and building in underneath, with a rear addition.",
      },
      {
        question: "How much does the slope add to a Paddington build?",
        answer:
          "It varies with the fall and the access, but retaining, engineered footings, drainage and concrete pumping are all normal here rather than exceptional. We price them as defined items at estimate stage rather than as allowances.",
      },
      {
        question: "Can I put a modern extension on the back?",
        answer:
          "Usually yes, and it is generally the best approach. The overlay is concerned primarily with the street elevation, so a clearly contemporary rear addition linked to a restored front tends to both work better and approve more easily than imitation detailing.",
      },
    ],
  },
  {
    slug: "ashgrove",
    name: "Ashgrove",
    council: "Brisbane City Council",
    metaTitle: "Builders Ashgrove Brisbane | Design Homes",
    metaDescription:
      "Character and Ashgrovian home builders in Ashgrove. Renovations, extensions, raise and build under, and new builds under the character overlay.",
    keywords: [
      "builders Ashgrove Brisbane",
      "Ashgrovian renovation",
      "Queenslander renovation Ashgrove",
      "home extension Ashgrove",
      "renovation builders Ashgrove",
      "raise and build under Ashgrove",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Ashgrove",
    heroDescription:
      "Ashgrovian and Queenslander renovation, extensions and new builds — with the character overlay and the suburb's distinctive housing stock handled properly.",
    heroImage: "/assets/images/stock/home-brick-twilight.webp",
    intro: [
      "Ashgrove has a housing type of its own. The Ashgrovian — an interwar timber home with a prominent front gable, a projecting entry portico and decorative gable detailing — is specific enough to this part of Brisbane that it carries the suburb's name.",
      "It is also a house that renovates extremely well, provided the front is treated with respect and the work happens at the rear. Blocks here are generally larger and less severely sloped than Paddington or Red Hill, which makes more ambitious projects viable.",
    ],
    sections: [
      {
        heading: "Working with an Ashgrovian",
        body: [
          "The value in these houses sits in the front elevation — the gable, the portico, the window proportions and the roof form. Alterations that disrupt that reading damage both the streetscape and the resale value that draws people to the suburb.",
          "The productive approach is to restore the front properly, keep the original front rooms, and put the open-plan living, the kitchen and the northern glazing in a rear addition.",
          "Where the permitted height allows it, raising the house and building in underneath roughly doubles the floor area without touching the street presentation beyond the change in height.",
        ],
      },
      {
        heading: "Larger blocks, gentler slope",
        body: [
          "Ashgrove blocks are generally more generous than the inner character suburbs, and while the suburb runs across ridges toward Enoggera and The Gap, the falls are usually manageable rather than severe.",
          "That opens up options the tighter suburbs do not have — a genuine rear pavilion, useful outdoor living, off-street parking that does not dominate the frontage, and in some cases a pool.",
          "It also means machinery access is generally easier, which takes real cost out of a project compared with a narrow inner-city block.",
        ],
      },
      {
        heading: "Overlays and site conditions",
        body: [
          "Character areas cover much of the suburb, so demolition of pre-1947 housing is restricted and new work is assessed against the streetscape provisions. The council property report shows exactly what applies to an address.",
          "Parts of Ashgrove near Enoggera Creek carry flood and overland flow mapping, which sets minimum habitable floor levels where it applies. This catches people out because the creek is not visible from most of the affected blocks.",
          "Reactive clay is common through the area, so the site classification under AS 2870 determines the footing system and should be established by test before design.",
        ],
      },
    ],
    housingStock:
      "Interwar Ashgrovians and traditional Queenslanders, with post-war housing through the outer parts, on generally larger blocks.",
    typicalProjects: [
      "Ashgrovian restoration with rear extension",
      "Raise and build under",
      "Second-storey additions where permitted",
      "New builds on non-character blocks",
      "Full internal reconfiguration",
    ],
    pockets: [
      "Ashgrove Avenue",
      "St Johns Wood",
      "Dorrington",
      "Waterworks Road corridor",
      "Enoggera Creek flats",
    ],
    faqs: [
      {
        question: "What is an Ashgrovian?",
        answer:
          "An interwar timber house characteristic of Ashgrove and surrounding suburbs, typically with a prominent front gable, a projecting entry portico and decorative gable detailing. The front elevation carries most of the character value, which is why renovations here work best at the rear.",
      },
      {
        question: "Is flooding an issue in Ashgrove?",
        answer:
          "In parts, yes. Blocks near Enoggera Creek carry flood and overland flow mapping that sets minimum habitable floor levels. It affects properties that are not obviously near water, so the council property report is worth checking before you buy.",
      },
      {
        question: "Can I add a second storey?",
        answer:
          "Sometimes, depending on the character overlay provisions, the building height limit and how the addition reads from the street. In many cases raising the existing house and building in underneath achieves more usable area with a better approval path.",
      },
    ],
  },
  {
    slug: "bardon",
    name: "Bardon",
    council: "Brisbane City Council",
    metaTitle: "Builders Bardon Brisbane | Design Homes",
    metaDescription:
      "Character home builders in Bardon. Queenslander renovation, raise and build under, sloping-site extensions and new builds. QBCC licensed.",
    keywords: [
      "builders Bardon Brisbane",
      "Queenslander renovation Bardon",
      "raise and build under Bardon",
      "sloping block builders Bardon",
      "home extension Bardon",
      "character renovation Bardon",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Bardon",
    heroDescription:
      "Elevated character blocks with real outlook — renovation, raising and rear extensions handled with the slope and the overlay in mind from the start.",
    heroImage: "/assets/images/stock/home-luxury-twilight.webp",
    intro: [
      "Bardon sits on the rising ground between Paddington and Mount Coot-tha, and the slope is the defining feature. Blocks are generally larger than Paddington's but the falls are frequently steeper, and the reward is outlook that flatter suburbs cannot offer.",
      "That combination — character housing on elevated sloping land — makes Bardon one of the better suburbs in Brisbane for a well-conceived raise-and-build-under, because the extra height buys a view rather than just floor area.",
    ],
    sections: [
      {
        heading: "Slope as the opportunity",
        body: [
          "On most sloping blocks the fall is a cost. In Bardon it is frequently the reason to build there at all, because elevation delivers outlook toward the city or across the western suburbs.",
          "Designs that work here follow the fall rather than flattening it. Split levels, an elevated rear deck oriented to the view, and living space that steps with the ground all reduce earthworks while producing a better house.",
          "The cost side remains real: retaining, engineered footings, drainage designed for genuine downpours, and access planning for concrete and crane deliveries on a steep driveway.",
        ],
      },
      {
        heading: "Character overlay and pre-war stock",
        body: [
          "Much of Bardon sits within character areas, so pre-1947 housing is protected and demolition is restricted. Assessment considers the contribution the building makes to the streetscape.",
          "The usual and best path is retaining and restoring the front of the house, raising it where the permitted height allows, and building a contemporary rear addition oriented to the north and the view.",
          "Establish the permitted height before designing anything. On a sloping block that height, combined with the fall, determines whether the space underneath becomes a genuine living level or a basement.",
        ],
      },
      {
        heading: "Bushfire and vegetation on the Mount Coot-tha side",
        body: [
          "Blocks toward Mount Coot-tha and the forest reserve can carry bushfire hazard overlays, which trigger a BAL assessment under AS 3959 with construction requirements for glazing, decks, screens, eaves and cladding.",
          "Protected vegetation is also more common on this side of the suburb, and it can restrict clearing and affect where a building or driveway can sit.",
          "Both are visible on the council property report. Both are far cheaper to establish before purchase than after design.",
        ],
      },
    ],
    housingStock:
      "Pre-war Queenslanders and interwar timber homes on elevated sloping blocks, with post-war housing toward the outer edges.",
    typicalProjects: [
      "Raise and build under with view-oriented living",
      "Split-level rear extensions",
      "Retaining and site remediation",
      "Character street elevation restoration",
      "New builds on non-character sloping blocks",
    ],
    pockets: [
      "Simpsons Road",
      "Macgregor Terrace",
      "Rainworth",
      "Jubilee Terrace",
      "Mount Coot-tha foothills",
    ],
    faqs: [
      {
        question: "Is Bardon good for raising a Queenslander?",
        answer:
          "It is one of the better suburbs for it. The elevated sloping ground means the additional height frequently buys outlook as well as floor area, which is not true on a flat block. The permitted height and the structural condition still determine whether it works on your specific house.",
      },
      {
        question: "Do bushfire rules apply in Bardon?",
        answer:
          "On blocks toward Mount Coot-tha and the forest reserve they can. A bushfire hazard overlay triggers a BAL assessment under AS 3959, which sets requirements for glazing, decks, eaves and cladding and can add meaningful cost. We check before design.",
      },
      {
        question: "How much does the slope add?",
        answer:
          "It depends on the fall, the access and the soil. Retaining, engineered footings, drainage and concrete pumping are all normal here. We assess and price them at estimate stage rather than carrying them as allowances.",
      },
    ],
  },
  {
    slug: "the-gap",
    name: "The Gap",
    council: "Brisbane City Council",
    metaTitle: "Builders The Gap Brisbane | Design Homes",
    metaDescription:
      "Home builders in The Gap. Renovations, extensions and new builds on sloping bushland blocks, with BAL assessment and vegetation overlays handled up front.",
    keywords: [
      "builders The Gap Brisbane",
      "home renovation The Gap",
      "sloping block builders The Gap",
      "home extension The Gap",
      "new home builders The Gap",
      "bushfire builders Brisbane",
    ],
    heroTitle: "Builders in",
    heroHighlight: "The Gap",
    heroDescription:
      "Bushland blocks with real slope and real bushfire exposure — assessed properly before design, so the construction requirements are in the first number.",
    heroImage: "/assets/images/stock/home-luxury-landscape.webp",
    intro: [
      "The Gap is Brisbane's bushland suburb, backing onto the D'Aguilar Range and Enoggera Reservoir. The blocks are large, the trees are the reason people live there, and the building conditions are closer to a hinterland acreage site than to inner Brisbane.",
      "That means two things drive every project here: the bushfire rating and the slope. Both are establishable before you buy, and both change the budget substantially.",
    ],
    sections: [
      {
        heading: "Bushfire is the first assessment",
        body: [
          "Large parts of The Gap sit within bushfire hazard overlays. Where they apply, the site is assessed for a Bushfire Attack Level under AS 3959, and that rating drives construction requirements for glazing, decks, screens, eaves, subfloor enclosure and external cladding.",
          "The difference between a low rating and a high one is substantial and cannot be designed away, only planned for. Where the block allows it, siting the building further from vegetation or on flatter ground can drop the rating a band and save a great deal.",
          "We establish the rating before design. A client who knows it at the start makes better decisions about siting, vegetation management and budget than one who discovers it at building approval.",
        ],
      },
      {
        heading: "Vegetation protection",
        body: [
          "Protected vegetation is common here and can restrict clearing, which in turn affects where a building, a driveway or a pool can sit.",
          "Root zones matter as much as canopies. Excavating for footings close to a mature protected tree can damage it and may be restricted, so extensions and new structures have to be planned around what must stay.",
          "There is a direct interaction with bushfire, too: the vegetation driving your BAL rating may be vegetation you are not permitted to remove. Resolving that tension is part of the design rather than an afterthought.",
        ],
      },
      {
        heading: "Slope, access and the 1970s housing stock",
        body: [
          "Much of The Gap was developed through the 1960s and 1970s, and the housing reflects it — brick and timber homes on sloping blocks, frequently split-level, often with poor insulation and living areas that ignore the aspect entirely.",
          "These renovate well. The highest-value work is usually environmental: reorienting living space, opening the plan to the bush outlook, adding proper shading and insulating a building envelope that never was.",
          "Access is the practical constraint. Long or steep driveways mean grading, drainage and a surface that carries a concrete truck rather than a car, and where it cannot, pumping is a cost per pour.",
        ],
      },
    ],
    housingStock:
      "1960s–1980s brick and timber homes, frequently split-level, on large sloping bushland blocks.",
    typicalProjects: [
      "Renovation and reorientation of 1970s homes",
      "Rear extensions opening to the bush outlook",
      "Bushfire-compliant new builds",
      "Retaining, drainage and access works",
      "Insulation and envelope upgrades",
    ],
    pockets: [
      "Payne Road",
      "Waterworks Road upper",
      "Settlement Road",
      "Enoggera Reservoir fringe",
      "D'Aguilar foothills",
    ],
    faqs: [
      {
        question: "Will I need a bushfire assessment in The Gap?",
        answer:
          "On much of the suburb, yes. Where a bushfire hazard overlay applies the site is assessed for a Bushfire Attack Level under AS 3959, and that rating sets construction requirements for glazing, decks, screens, eaves and cladding. It is checkable before you buy.",
      },
      {
        question: "Can I remove trees to reduce my bushfire rating?",
        answer:
          "Not always. Protected vegetation may not be removable, and the vegetation driving your rating is sometimes exactly the vegetation you cannot clear. Resolving that is part of the design, and it is why siting decisions matter so much here.",
      },
      {
        question: "Are 1970s homes here worth renovating?",
        answer:
          "Frequently yes. The structures are generally sound and the blocks are excellent. The highest-value work is environmental — reorienting living areas, opening to the outlook, shading and insulating an envelope that was never built for year-round comfort.",
      },
    ],
  },
  {
    slug: "camp-hill",
    name: "Camp Hill",
    council: "Brisbane City Council",
    metaTitle: "Builders Camp Hill Brisbane | Design Homes",
    metaDescription:
      "Home builders in Camp Hill. Queenslander and post-war renovations, extensions, raise and build under, and knockdown rebuilds where permitted.",
    keywords: [
      "builders Camp Hill Brisbane",
      "renovation builders Camp Hill",
      "Queenslander renovation Camp Hill",
      "home extension Camp Hill",
      "knockdown rebuild Camp Hill",
      "raise and build under Camp Hill",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Camp Hill",
    heroDescription:
      "A mix of protected pre-war character and post-war stock where more is possible — which is why the overlay check comes before anything else here.",
    heroImage: "/assets/images/stock/home-brick-contemporary.webp",
    intro: [
      "Camp Hill is one of the Brisbane suburbs where the overlay position genuinely varies street by street. Pre-war Queenslanders and workers' cottages sit alongside post-war brick and timber homes, and what you can do depends heavily on which you have bought.",
      "That makes the council property report the first step rather than a formality. Two apparently similar houses a block apart can have entirely different options.",
    ],
    sections: [
      {
        heading: "Check the overlay before you plan anything",
        body: [
          "Where a house is pre-1947 and sits in a character area, demolition is restricted and new work is assessed against the streetscape. Where it is post-war and outside those provisions, a knockdown rebuild is generally achievable.",
          "The difference determines the entire project — whether you are planning a raise-and-build-under or a new house — so it needs establishing before you pay for design.",
          "The property report is a free search and takes minutes. Doing it before you make an offer is better still.",
        ],
      },
      {
        heading: "Gentle ridges and workable blocks",
        body: [
          "Camp Hill runs across gentle ridges toward Whites Hill, and while the ground is rarely flat, the falls are generally manageable rather than severe.",
          "That makes a wider range of projects viable than in the steeper inner suburbs — rear extensions with genuine outdoor living, off-street parking, and in many cases a pool, without the earthworks bill that a Bardon or Paddington block would carry.",
          "Access is usually straightforward, which takes real cost out of a project compared with a narrow inner-city site.",
        ],
      },
      {
        heading: "What the post-war stock needs",
        body: [
          "The post-war housing here is generally structurally sound and almost universally under-insulated, with small separated rooms, living areas facing the wrong way, and no real connection to the yard.",
          "The high-value work is opening the rear of the plan, creating covered outdoor living, improving cross-ventilation and insulating properly. These change how the house lives far more than a new kitchen does.",
          "Asbestos is likely in anything built before the late 1980s, commonly in eaves and wet area sheeting, and requires licensed removal with documentation. We establish that position before contract rather than after demolition begins.",
        ],
      },
    ],
    housingStock:
      "Mixed pre-war Queenslanders and workers' cottages alongside post-war brick and timber homes, on gently sloping blocks.",
    typicalProjects: [
      "Raise and build under on character blocks",
      "Rear extensions and outdoor living",
      "Knockdown rebuild on post-war sites",
      "Post-war renovation and reorientation",
      "Insulation and envelope upgrades",
    ],
    pockets: [
      "Old Cleveland Road corridor",
      "Whites Hill",
      "Martha Street",
      "Bennetts Road",
      "Camp Hill village",
    ],
    faqs: [
      {
        question: "Can I knock down and rebuild in Camp Hill?",
        answer:
          "It depends entirely on the house and the street. Post-war homes outside character provisions can generally be replaced. Pre-1947 houses in character areas are protected and demolition is restricted. Check the council property report before you make an offer.",
      },
      {
        question: "Is Camp Hill steep?",
        answer:
          "Gently sloping rather than steep. The falls are usually manageable, which makes rear extensions, outdoor living and pools more viable here than in the steeper inner character suburbs, without the earthworks bill.",
      },
      {
        question: "What do post-war Camp Hill homes usually need?",
        answer:
          "Opening the rear of the plan, real outdoor living, better cross-ventilation and insulation. The structures are typically sound; the envelope and the layout are what let them down. Asbestos in eaves and wet areas is likely and needs licensed removal.",
      },
    ],
  },
  {
    slug: "wilston",
    name: "Wilston",
    council: "Brisbane City Council",
    metaTitle: "Builders Wilston Brisbane | Design Homes",
    metaDescription:
      "Character home builders in Wilston. Queenslander renovation, raise and build under, and rear extensions with flood and character overlays checked first.",
    keywords: [
      "builders Wilston Brisbane",
      "Queenslander renovation Wilston",
      "raise and build under Wilston",
      "home extension Wilston",
      "character renovation Wilston",
      "renovation builders Windsor",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Wilston",
    heroDescription:
      "A tightly held character precinct with a flood dimension most owners underestimate — both checked before we draw anything.",
    heroImage: "/assets/images/queenslander-classic-new.webp",
    intro: [
      "Wilston is a small, tightly held character precinct with some of the best-preserved Queenslander streetscapes on the north side. The housing stock is consistent, the streets are intact, and the character overlay is applied seriously.",
      "It also has a flood dimension that catches buyers out, because Enoggera Creek and its overland flow paths affect blocks that look nowhere near water.",
    ],
    sections: [
      {
        heading: "Character overlay and consistent streetscapes",
        body: [
          "Much of Wilston sits in character areas where pre-1947 houses are protected and demolition is heavily restricted. The streetscapes here are unusually intact, which is precisely why assessment takes the front elevation seriously.",
          "The productive path is the standard one for a well-preserved precinct: restore the front rooms and the verandah properly, raise the house where permitted, and put contemporary living in a rear addition.",
          "Rear additions read best when they are legibly new rather than imitating the original. In a street of consistent period houses, a competent contemporary rear pavilion is generally easier to approve than pastiche.",
        ],
      },
      {
        heading: "Enoggera Creek and overland flow",
        body: [
          "Flood mapping associated with Enoggera Creek affects parts of Wilston and neighbouring Windsor and Newmarket, and overland flow paths affect blocks well away from the creek itself.",
          "Where a flood overlay applies, a minimum habitable floor level is set. On a raise-and-build-under project that interacts directly with the permitted height, because the new ground floor has to sit above that level while the roof stays under the height limit.",
          "That squeeze is the specific technical problem in Wilston. Resolving it requires establishing both numbers before design rather than discovering the conflict afterwards.",
        ],
      },
      {
        heading: "What the houses need underneath",
        body: [
          "Wilston's Queenslanders are typically a century old and have been altered repeatedly. Stumps at the end of their life, termite damage in bearers and joists, and previous unapproved modifications are common.",
          "Services are generally a full replacement rather than an extension — wiring past its service life, switchboards with no capacity for a second level, failing plumbing and no insulation.",
          "A structural assessment before design establishes what can be lifted and what has to be replaced, which is what makes a fixed price meaningful on this kind of work.",
        ],
      },
    ],
    housingStock:
      "Well-preserved pre-war Queenslanders in consistent character streetscapes, on generally moderate blocks.",
    typicalProjects: [
      "Raise and build under above flood level",
      "Rear extensions and northern glazing",
      "Character street elevation restoration",
      "Structural repair and full services replacement",
      "Flood-aware ground floor design",
    ],
    pockets: [
      "Kedron Brook Road",
      "Wilston village",
      "Newmarket Road corridor",
      "Grantson Street",
      "Enoggera Creek flats",
    ],
    faqs: [
      {
        question: "Does flooding affect Wilston?",
        answer:
          "In parts, yes. Enoggera Creek flood mapping and overland flow paths affect blocks that are not obviously near water. Where an overlay applies, a minimum habitable floor level is set, and that interacts directly with how high you can raise a house under the character overlay.",
      },
      {
        question: "Can I raise my Wilston Queenslander?",
        answer:
          "Often yes, but the permitted height and any required flood level have to be established together. The ground floor must sit above the flood level while the roof stays under the height limit, and on some blocks that leaves less room than owners expect.",
      },
      {
        question: "Can I demolish and rebuild?",
        answer:
          "Unlikely on a pre-1947 house in a character area, and much of Wilston is. The streetscapes here are unusually intact, which makes demolition approval harder rather than easier.",
      },
    ],
  },
  {
    slug: "kenmore",
    name: "Kenmore",
    council: "Brisbane City Council",
    metaTitle: "Builders Kenmore Brisbane | Design Homes",
    metaDescription:
      "Home builders in Kenmore. Renovations, extensions and new builds on larger western-suburbs blocks, with flood and slope assessed before design.",
    keywords: [
      "builders Kenmore Brisbane",
      "home renovation Kenmore",
      "home extension Kenmore",
      "new home builders Kenmore",
      "builders Chapel Hill",
      "sloping block builders Kenmore",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Kenmore",
    heroDescription:
      "Larger western-suburbs blocks with 1970s and 1980s housing that renovates well — and a flood picture worth understanding before you buy.",
    heroImage: "/assets/images/stock/home-single-modern.webp",
    intro: [
      "Kenmore and the surrounding western suburbs were developed largely through the 1960s to 1980s, producing generous blocks with brick and timber homes that are structurally sound and thermally poor.",
      "Very little of the area carries character constraints, which means the full range of options is open — renovate, extend, or knock down and rebuild. The constraints here are physical rather than planning-based.",
    ],
    sections: [
      {
        heading: "Flood is the check that matters",
        body: [
          "The Brisbane River and Moggill Creek both affect parts of Kenmore, Chapel Hill and Kenmore Hills, and the 2011 and 2022 events are within living memory for the area.",
          "Where flood overlays apply, a minimum habitable floor level is set, and on a rebuild that level is frequently higher than the existing house sits. It determines slab height, driveway grade, entry sequence and sometimes whether a single-storey design works at all.",
          "It also affects insurance and how buyers assess the property later, which is why building comfortably above the required level rather than exactly at it is often worth the extra cost.",
        ],
      },
      {
        heading: "Slope and larger blocks",
        body: [
          "The area rises toward Chapel Hill and Kenmore Hills, and the elevated sections carry real fall. That means retaining, engineered footings and drainage designed for genuine downpours, but it also delivers outlook.",
          "The lower sections toward the river are flatter and the constraint shifts from slope to flood level.",
          "Block sizes here are generous by Brisbane standards, which makes extensions, outdoor living, pools and even secondary dwellings viable in ways that inner-suburban sites do not allow.",
        ],
      },
      {
        heading: "What the 1970s and 1980s stock needs",
        body: [
          "These houses are typically well built and badly oriented. Small separated rooms, living areas facing away from the best aspect, minimal insulation and no real connection to the yard are the recurring pattern.",
          "The highest-value work is environmental rather than cosmetic — reorienting the living space, opening the rear of the plan, adding covered outdoor living, improving cross-ventilation and insulating properly.",
          "Asbestos is likely in anything from this era, commonly in eaves and wet area sheeting, and requires licensed removal with documentation established before demolition begins.",
        ],
      },
    ],
    housingStock:
      "1960s–1980s brick and timber homes on generous blocks, with elevated sections toward Chapel Hill and Kenmore Hills.",
    typicalProjects: [
      "Renovation and reorientation of 1970s homes",
      "Rear extensions with covered outdoor living",
      "Knockdown rebuild above flood level",
      "Secondary dwellings and dual living",
      "Retaining and drainage on elevated blocks",
    ],
    pockets: [
      "Kenmore Hills",
      "Chapel Hill",
      "Moggill Road corridor",
      "Brookfield Road",
      "Fig Tree Pocket fringe",
    ],
    faqs: [
      {
        question: "Is Kenmore flood affected?",
        answer:
          "Parts of it are, from both the Brisbane River and Moggill Creek. Where overlays apply, a minimum habitable floor level is set, and on a rebuild that level is often higher than the existing house sits. Check the council property report before you buy.",
      },
      {
        question: "Can I knock down and rebuild in Kenmore?",
        answer:
          "Generally yes. Very little of the area carries character constraints, so demolition is usually achievable. The constraints here are flood level, slope and vegetation rather than heritage.",
      },
      {
        question: "Are 1970s Kenmore homes worth renovating?",
        answer:
          "Often, yes. The structures are generally sound and the blocks are excellent. What lets them down is orientation, insulation and the connection to outdoors, and all three are fixable. We will give you a straight renovate-versus-rebuild comparison.",
      },
    ],
  },
  {
    slug: "red-hill",
    name: "Red Hill",
    council: "Brisbane City Council",
    metaTitle: "Builders Red Hill Brisbane | Design Homes",
    metaDescription:
      "Character builders in Red Hill. Steep-site Queenslander renovation, raise and build under, and rear extensions under Brisbane's character overlay.",
    keywords: [
      "builders Red Hill Brisbane",
      "Queenslander renovation Red Hill",
      "raise and build under Red Hill",
      "steep block builders Brisbane",
      "character renovation Red Hill",
      "home extension Red Hill",
    ],
    heroTitle: "Builders in",
    heroHighlight: "Red Hill",
    heroDescription:
      "Some of the steepest character blocks in Brisbane — where retaining, access and permitted height decide the project before design begins.",
    heroImage: "/assets/images/stock/home-luxury-twilight.webp",
    intro: [
      "Red Hill is steep. Genuinely, consistently steep, in a way that shapes every project in the suburb. Combined with narrow allotments, tight access and a strictly applied character overlay, it is among the most demanding places to build in Brisbane.",
      "It is also close to the city with real outlook, which is why the work is worth doing properly. The suburbs that are hardest to build in tend to be the ones where a good result holds its value.",
    ],
    sections: [
      {
        heading: "The slope decides the budget",
        body: [
          "Falls of several metres across a block are ordinary here. That means retaining walls that are engineered structures rather than garden edging, footings designed for the slope and the soil, and drainage that handles subtropical downpours moving downhill toward your building.",
          "Retaining is frequently the largest single item outside the house itself, and it scales sharply with height. A wall retaining two metres costs several times per metre what one retaining half a metre does.",
          "Access compounds it. Narrow frontages, steep driveways and neighbours close on both sides mean concrete is usually pumped, materials are craned, and there is nowhere to stockpile spoil. All of it belongs in the estimate rather than the final invoice.",
        ],
      },
      {
        heading: "Character overlay on a steep site",
        body: [
          "Red Hill's pre-1947 housing is protected, and demolition of a contributing house is unlikely to be approved. The overlay governs the street elevation — roof form, verandah, setback, window proportions and materials.",
          "Raising and building under is the natural response, and on a steep block the space underneath is often already substantial. Establishing the permitted height first is essential, because it and the existing fall together decide whether the lower level becomes a genuine living space.",
          "Rear additions have more freedom, and on these blocks the rear is usually where the outlook is, which makes the contemporary rear pavilion approach particularly effective here.",
        ],
      },
      {
        heading: "Century-old timber on old stumps",
        body: [
          "The stock is predominantly timber workers' cottages and small Queenslanders, most over a hundred years old and nearly all modified repeatedly.",
          "Stumps at the end of their life, termite damage in bearers and joists, unapproved past alterations without engineering, undersized switchboards and failing plumbing are the recurring finds.",
          "On a steep site the structural assessment matters even more, because the sub-floor structure is taller, more exposed and carrying more load. It has to be assessed before anyone commits to a lift.",
        ],
      },
    ],
    housingStock:
      "Century-old timber workers' cottages and small Queenslanders on narrow, steeply sloping allotments.",
    typicalProjects: [
      "Raise and build under on steep sites",
      "Engineered retaining and site remediation",
      "Rear extensions oriented to the outlook",
      "Character street elevation restoration",
      "Structural repair of sub-floor framing",
    ],
    pockets: [
      "Enoggera Terrace",
      "Musgrave Road",
      "Waterworks Road lower",
      "Fulcher Road",
      "Normanby fringe",
    ],
    faqs: [
      {
        question: "How much does building in Red Hill cost compared to a flat block?",
        answer:
          "The slope-related items — retaining, engineered footings, drainage, concrete pumping and craned materials — are real and substantial, and they vary with the specific fall and access. We assess and price them at estimate stage rather than carrying them as an allowance.",
      },
      {
        question: "Can I demolish a Red Hill cottage?",
        answer:
          "Almost certainly not if it is pre-1947 and contributes to the streetscape. Red Hill's character provisions are applied seriously. The realistic path is raising the house and building in underneath, with a rear addition.",
      },
      {
        question: "Is the space under a Red Hill house usable already?",
        answer:
          "Often partially, because the slope means these houses already sit high at the rear. Whether it becomes a genuine living level depends on the permitted height, the existing fall and the structural condition of the sub-floor, all of which we assess before design.",
      },
    ],
  },
];

export function getSuburb(slug: string) {
  return suburbs.find((suburb) => suburb.slug === slug);
}
