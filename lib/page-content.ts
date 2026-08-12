export type PageProse = {
  title: string;
  sections: { heading: string; body: string[] }[];
};

export const pageProse: Record<string, PageProse> = {
  about: {
    title: "How we work, and why it is set up this way",
    sections: [
      {
        heading: "Owner-run sites",
        body: [
          "Harj runs our sites personally. That is not a marketing line, it is the operating model, and it is the practical difference between us and a volume builder running many jobs through a rotating supervisor.",
          "It means decisions on your project get made by someone who was on the job that morning, and that problems reach you when they appear rather than when they have become expensive. On character renovations and difficult sites it matters more than anything else, because nothing is square and the surprises are structural.",
          "It also sets a natural limit on how many projects we take on at once. We would rather run a small number of jobs properly than a large number at arm's length.",
        ],
      },
      {
        heading: "Investigation before price",
        body: [
          "We complete the site investigation before quoting — soil test, contour survey and council property report. That establishes the footing system, the applicable overlays, the required floor levels and the access constraints before a number is issued.",
          "It makes our first estimate slower to produce and occasionally higher than a competitor's opening figure. It also makes it far more likely to be the number you actually pay, which is the only comparison that matters at the end.",
          "A quote issued without a soil test is a quote for a hypothetical block. The correction arrives later, during construction, when correcting it is most expensive.",
        ],
      },
      {
        heading: "Experience brought from New Zealand",
        body: [
          "Harj's background includes the delivery of new build homes in New Zealand, including award-winning recognition for excellence in construction, alongside more than a decade of broader residential construction experience as a carpenter.",
          "That trade background is the reason the site management works the way it does. Someone who has done the work knows when something is going wrong before it shows, and knows which corners genuinely do not matter and which ones cost you in five years.",
          "The same standard now applies to every Design Homes project across South East Queensland.",
        ],
      },
      {
        heading: "What we will tell you honestly",
        body: [
          "If a volume builder is the better answer for your block and your brief, we will say so. On a flat, serviced estate lot with a standard plan that genuinely suits you, they will beat us on price for a result you would be happy with.",
          "If renovating is a better project than rebuilding, we will say that too, even though it is less work for us. If a duplex site does not stack up, we will tell you before you buy rather than after.",
          "That conversation costs you nothing and it is the reason most of our work comes from referral.",
        ],
      },
    ],
  },

  services: {
    title: "Choosing the right service for your project",
    sections: [
      {
        heading: "Start with what the site allows",
        body: [
          "The right service is usually determined by the block rather than by preference. A pre-1947 house in a Brisbane character area cannot simply be demolished, which turns a knockdown rebuild enquiry into a raise-and-build-under project. A block that fails on frontage cannot support a duplex regardless of its area.",
          "So the first step on any enquiry is the same: we check the zone, the overlays, the soil classification, the services and the access. That tells us what is achievable, and often answers the question of which service applies.",
          "The council property report is free and shows most of it. If you send us an address we will pull it and tell you what your options actually are.",
        ],
      },
      {
        heading: "New build, renovation or rebuild",
        body: [
          "If the existing structure is sound and the layout can be reworked without relocating everything, renovation usually wins on cost per square metre and on time. If you are moving the kitchen, the bathrooms and the external walls, you are approaching rebuild cost for a compromised result.",
          "A rebuild delivers a house built to current standards throughout, including the energy efficiency provisions now applying to new Queensland homes. A renovation only brings the parts you touch up to current requirements.",
          "Where demolition is restricted by a character overlay, raising the existing house and building in underneath frequently delivers more usable floor area than either, while retaining the character value that drives resale in those suburbs.",
        ],
      },
      {
        heading: "Building for investment rather than to live in",
        body: [
          "Duplex and townhouse projects are development projects, and they are assessed differently. Feasibility comes before design: zone, frontage, sewer alignment, stormwater discharge and services capacity all decide whether a site works before anyone draws anything.",
          "The intended exit then shapes the design. Holding and renting rewards durability and practical layout. Selling to owner-occupiers rewards finish level and street appeal. And if the halves are to be sold separately, the title path has to be planned from the start.",
          "We will run the feasibility and tell you plainly when a site does not support the project, including when the better answer is a single house.",
        ],
      },
      {
        heading: "Every service runs the same way",
        body: [
          "Fixed-price contracts backed by complete working drawings, engineering and a documented selections schedule, so provisional sums stay few and specific.",
          "A defined stage program with progress claims aligned to it, and variations priced and approved in writing before any work proceeds.",
          "QBCC licensed, with work covered under the Home Warranty Scheme. We will give you our licence details so you can check the register yourself before signing anything.",
        ],
      },
    ],
  },

  locations: {
    title: "Building across South East Queensland",
    sections: [
      {
        heading: "The conditions change more than people expect",
        body: [
          "South East Queensland is not one building environment. Inner Brisbane brings character overlays, reactive clay and narrow frontages. The Gold Coast brings salt exposure, storm tide levels and canal revetment walls. The Sunshine Coast hinterland brings bushfire ratings, slope and rural services.",
          "Ipswich brings Bremer River flood mapping and, in the Ripley Valley, a Priority Development Area assessed by Economic Development Queensland rather than the council. Logan brings uncontrolled fill from earlier subdivision. Redlands brings vegetation and koala habitat overlays that can determine the building envelope.",
          "A builder who applies the same suburban detail everywhere will get some of these wrong, and the corrections happen during construction.",
        ],
      },
      {
        heading: "What we check on every site",
        body: [
          "Soil classification under AS 2870, because it determines the footing system and is the single largest cost variable between two apparently similar blocks.",
          "The council property report, which shows the zone and every overlay applying to the address — flood, bushfire, character, heritage, vegetation and coastal hazard.",
          "Services: sewer alignment across the block, the available stormwater discharge point, and water and electrical supply capacity.",
          "Then slope, required earthworks and whether concrete trucks and cranes can physically reach the work.",
        ],
      },
      {
        heading: "Not on the list?",
        body: [
          "The regions below are where we work most often, but the boundaries are not rigid. If your block sits just outside one of them, send us the address and we will tell you straight away whether we can help.",
          "We will also tell you honestly when a site is far enough away that our supervision model would not serve you well. Being on site regularly is the whole point of how we work, and stretching that too thin would defeat it.",
        ],
      },
    ],
  },

  portfolio: {
    title: "What to look for when you review a builder's work",
    sections: [
      {
        heading: "Ask what the site required",
        body: [
          "A photograph shows the finish. It does not show whether the block sloped four metres, whether the footings were engineered for reactive clay, whether a character overlay governed the street elevation, or whether the required flood level forced the whole house up a metre.",
          "Those constraints are what separate a straightforward build from a difficult one, and they are the part worth asking about. A builder who can explain what a site demanded and how it was resolved is telling you something a gallery cannot.",
          "When you look through any builder's work, ask which projects were on difficult sites and what made them difficult.",
        ],
      },
      {
        heading: "Go and see a current site",
        body: [
          "A finished project has been cleaned, styled and photographed. An active site has not, and it tells you considerably more about how a builder actually operates.",
          "Look at how the site is kept, how materials are stored and protected, whether the work is tidy, and whether the frame and the services rough-in look considered. Ask who supervises the job and how many others they are running at the same time.",
          "We are happy to arrange a site visit, and to put you in touch with a client whose house we finished recently.",
        ],
      },
      {
        heading: "Look at the parts that are hard to fix later",
        body: [
          "Finishes can be changed. Orientation, ceiling heights, window placement, daylight into the middle of the plan and the position of the stair cannot.",
          "In a Queensland house specifically, look at where the living areas face, how deep the eaves are, whether the western glazing is shaded, and whether air can move through the plan. These decide whether a house is comfortable, and they are settled on paper long before anything is built.",
          "A well-photographed house with living areas facing west and minimal eaves is a house that will be uncomfortable every summer afternoon.",
        ],
      },
    ],
  },

  contact: {
    title: "What happens after you get in touch",
    sections: [
      {
        heading: "Send the address, not just the brief",
        body: [
          "The most useful first message includes the property address and a short description of what you have in mind. The address lets us pull the council property report and see the zone, the overlays and the constraints before we speak.",
          "That means the first conversation is about your actual site rather than a general discussion, and it frequently answers the biggest question straight away — whether what you are planning is achievable there at all.",
          "If you are still looking at blocks, send us the ones you are considering. Checking them before you buy costs nothing and has saved several clients from an expensive purchase.",
        ],
      },
      {
        heading: "The first assessment",
        body: [
          "We review the zoning, the overlays and the visible site conditions, and come back with a straight assessment. Where a project is not viable, or where a different approach would serve you better, we will say so at this stage.",
          "There are no fees involved in that conversation. It is in both our interests to find out early whether the project makes sense.",
        ],
      },
      {
        heading: "Then investigation, design and a fixed price",
        body: [
          "If the project proceeds, we complete the site investigation — soil test, contour survey and the relevant property searches — before design begins, so the footing system, the required levels and the access constraints are known rather than assumed.",
          "Design follows the site. Then a fixed price built on complete working drawings, engineering and a documented selections schedule, so provisional sums stay few and specific.",
          "You will have our QBCC licence details throughout, so you can check the register, the class and the history yourself before signing anything.",
        ],
      },
      {
        heading: "Areas we cover",
        body: [
          "Brisbane, the Gold Coast, the Sunshine Coast, Ipswich, Logan, Moreton Bay and Redlands. If your block sits just outside those areas, ask anyway — we will tell you honestly whether we can serve you properly.",
        ],
      },
    ],
  },
};
