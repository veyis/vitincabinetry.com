/**
 * Town data for /custom-kitchen-cabinets/[town] dynamic SEO pages.
 *
 * Each entry powers a unique landing page. Real local content (housing
 * stock, township names, project narratives) is the whole reason these
 * pages avoid thin-content penalties. Don't shorten these to one-liners.
 */

export type TownData = {
  slug: string;
  name: string;
  intro: string;
  housing: string;
  projectTitle: string;
  projectBody: string;
  townships: string;
  permitsNote: string;
  popularStyleNote: string;
  whyLocalLine: string;
  extraFaqs?: { q: string; a: string }[];
};

export const towns: TownData[] = [
  {
    slug: "easton",
    name: "Easton",
    intro:
      "Easton is home â our bench sits right here where the Lehigh meets the Delaware. The housing runs from grand College Hill Victorians to West Ward brick rowhomes to the newer colonials out in Palmer and Forks, and every one of them asks something different of a kitchen. Being the local shop means we've measured most of those room types more than once.",
    housing: "College Hill Victorians, downtown and West Ward brick rowhomes, and 1990s–2000s colonials in Palmer and Forks",
    projectTitle: "A College Hill Victorian, cooked in for the next century.",
    projectBody:
      "The house had the bones College Hill is famous for — high ceilings, original casings, a butler's pantry that had been walled off in the 1970s. The owners wanted the pantry back and a kitchen that looked like it had always been there.\n\nWe drew inset shaker doors in a hand-mixed warm white, reopened the pantry with glass-front uppers, and scribed every cabinet to plaster that hadn't been square in a century. Unlacquered brass hardware that will darken with the house.\n\nBuilt at our bench a few minutes away. Installed by our own crew.",
    townships: "the City of Easton, Palmer Township, Forks Township, and Wilson Borough",
    permitsNote:
      "For projects that touch plumbing, electrical, structural walls, or HVAC, we coordinate with the city or township and pull permits in your name.",
    popularStyleNote:
      "Inset shaker leads on College Hill, painted transitional in the West Ward, and modern full-overlay in the newer Palmer and Forks builds.",
    whyLocalLine:
      "Our shop is in Easton. Not a corporate franchise office in another state, not a satellite branch — the actual workshop where your cabinets get built is a few minutes from your house.",
  },
  {
    slug: "bethlehem",
    name: "Bethlehem",
    intro:
      "Bethlehem's housing tells three centuries of history in a fifteen-minute drive: Moravian-era stone near the historic district, Southside rowhomes and twins built for steel families, 1920s brick semis on the west side, and newer construction out in the townships. Kitchens here have to answer to the house — and the houses have opinions.",
    housing: "Historic-district stone homes, Southside steel-era rowhomes and twins, west-side 1920s brick semis, and township new builds",
    projectTitle: "A west Bethlehem brick semi, opened to the back garden.",
    projectBody:
      "A 1920s brick semi with the classic problem: a proud little kitchen sealed off from the dining room and the yard. The owners wanted light, a place for two cooks, and cabinetry that respected the house's age without imitating it.\n\nWe opened the wall to the dining room, drew painted inset shaker with a quarter-sawn oak island, and ran cabinetry to the ceiling for storage the original room never had. The back door became a glass slider onto a new deck landing.\n\nThe neighbors in the other half of the semi asked for our card before the punch list was done.",
    townships: "the City of Bethlehem (both the Northampton and Lehigh county sides), Bethlehem Township, and Hanover Township",
    permitsNote:
      "Work near the historic district gets extra review — we plan the schedule around it. Standard plumbing and electrical permits are straightforward.",
    popularStyleNote:
      "Period-sympathetic inset near the historic district, transitional shaker on the west side, and modern flat-panel in Southside conversions and township builds.",
    whyLocalLine:
      "Bethlehem is about 15 minutes from our Easton bench. It's our most frequent install territory after our home city.",
  },
  {
    slug: "allentown",
    name: "Allentown",
    intro:
      "Allentown is the Lehigh Valley's biggest kitchen market — West End trolley-era Tudors and brick colonials, center-city rowhomes, postwar ranches toward South Mountain, and the suburban townships wrapping the city. Most of our Allentown work is giving solidly built rooms the storage and workflow they were never designed for.",
    housing: "West End Tudors and brick colonials, center-city rowhomes, postwar ranches, and South Whitehall/Salisbury suburban homes",
    projectTitle: "A West End brick colonial, twice the storage in the same room.",
    projectBody:
      "A 1930s West End colonial near the Rose Garden — beautiful proportions, dismal storage, and a peninsula that blocked the only path to the back door. The owners wanted a real island, drawers instead of doors, and a finish that fit the neighborhood.\n\nWe drew painted shaker fronts in a soft white with a stained white-oak island, replaced every lower door with a drawer bank, and turned the old broom closet into a full-height pantry with rollouts. The path to the back door is finally a straight line.\n\nSame footprint. Twice the working storage.",
    townships: "the City of Allentown, South Whitehall Township, and Salisbury Township",
    permitsNote:
      "City permits for plumbing and electrical scope are routine; the townships move quickly. We pull permits in your name and schedule the inspections.",
    popularStyleNote:
      "Painted shaker leads in the West End, modern full-overlay in newer township builds, and two-tone islands nearly everywhere.",
    whyLocalLine:
      "Allentown is about 25 minutes from our Easton bench, straight down Route 22. We install here every week.",
  },
  {
    slug: "quakertown",
    name: "Quakertown",
    intro:
      "Quakertown sits at the top of Bucks County, with housing that ranges from 1800s Quaker farmhouses to post-war ranches to newer construction along the Route 309 corridor. Almost every kitchen we build in town has to respect what's already there while delivering a modern function the original room never planned for.",
    housing: "1920s farmhouses, post-war ranches, and newer developments along Route 309",
    projectTitle: "A 1920s Quakertown farmhouse, brought up to date.",
    projectBody:
      "This project sits in a corner of upper Bucks where most of the houses are older than the rest of the country. The walls weren't square, the ceiling sloped a quarter inch over six feet, and the homeowner wanted period character without giving up modern function.\n\nWe drew inset shaker doors with a polished-nickel hardware suite, scribed every cabinet to the plaster, and integrated panels on the refrigerator and dishwasher so the only visible appliances are the range and hood. Built in our shop. Installed by our crew. Finished in 11 weeks.",
    townships: "Quakertown Borough, Richland Township, and Milford Township",
    permitsNote:
      "For projects that touch plumbing, electrical, structural walls, or HVAC, we coordinate with the municipality and pull permits in your name.",
    popularStyleNote:
      "Inset shaker leads the list, followed by two-tone islands and the occasional full traditional in older Quaker homes.",
    whyLocalLine:
      "Quakertown is about 35 minutes from our Easton bench, straight down Route 33 to 78. We've built for upper Bucks homes since the beginning and still install here regularly.",
  },
  {
    slug: "perkasie",
    name: "Perkasie",
    intro:
      "Perkasie is one of the most stylistically interesting towns in Bucks County. The cabinetry brief writes itself: 1900s Victorians on tree-lined streets, stone farmhouses on the township roads, and a layer of mid-century ranches in between. Every kitchen here is a conversation with the original house.",
    housing: "1900s Victorians, stone farmhouses, and mid-century ranches",
    projectTitle: "A turn-of-the-century Perkasie Victorian, opened up.",
    projectBody:
      "The kitchen in this Perkasie Victorian was where the previous owner had stuffed three different decades of remodels into one room. The brief: make it feel like it had always been there, just better.\n\nWe drew a transitional inset face-frame in painted maple, kept the original plaster details where they survived, and built a long island with the same dimension and proportion as the original work table the kitchen would have had a century ago. Plumbing and electrical were rerun. Original heart-pine floor stayed.",
    townships: "Perkasie Borough, Hilltown Township, and East Rockhill Township",
    permitsNote: "We work with Pennridge-area municipalities regularly and pull permits for any scope beyond a like-for-like cabinet swap.",
    popularStyleNote: "Painted shaker, two-tone with stained islands, and traditional raised panel for the older Victorian homes.",
    whyLocalLine: "Perkasie is about 45 minutes from our Easton bench. We've worked the Pennridge corridor for years and still install here regularly.",
  },
  {
    slug: "doylestown",
    name: "Doylestown",
    intro:
      "Doylestown is the Bucks County seat — a historic district, period Victorians, a walkable downtown, and newer-construction estates on the edges. The cabinetry brief here ranges from sensitive period work in the borough to modern open-plan kitchens in the surrounding townships.",
    housing: "Historic-district Victorians, Federal-era homes, downtown row houses, and newer estates",
    projectTitle: "A Doylestown borough Victorian, period-correct kitchen.",
    projectBody:
      "Working in the historic district means every detail gets weighed against what's already there — the original window casings, the plaster, the floor pattern. The owners wanted a kitchen that wouldn't feel grafted on.\n\nWe drew traditional raised-panel doors in painted maple, hand-scribed every cabinet against the lath-and-plaster walls, and made the island legs match the spacing of the porch posts on the front of the house. The finish work alone took two weeks. Worth it.",
    townships: "Doylestown Borough, Doylestown Township, and Plumstead Township",
    permitsNote: "Projects in the historic district require additional review. We've done the dance — we'll guide it.",
    popularStyleNote: "Traditional raised panel in the borough, inset shaker and modern flat panel in the surrounding townships.",
    whyLocalLine: "We make the drive to Doylestown often — about 45 minutes from our Easton bench.",
  },
  {
    slug: "sellersville",
    name: "Sellersville",
    intro:
      "Sellersville runs along Route 309 in the Pennridge corridor, with a mix of older Victorians around the borough center and 1950s ranches and split-levels filling out the surrounding townships. Most of our work here is modernizing rooms that haven't been touched since the original owners moved in.",
    housing: "Victorians near the borough, 1950s ranches, and split-levels through the surrounding townships",
    projectTitle: "A 1955 Sellersville ranch, finally opened up.",
    projectBody:
      "The original kitchen was tiny, dark, and walled off from the living room — typical of the period. The new layout opened a load-bearing wall, repositioned the sink to face the yard, and reworked the entire appliance layout.\n\nWe drew full-overlay flat-panel doors in rift-cut white oak with a brushed-bronze hardware suite. The waterfall island runs the length of where the old wall used to be. Bright, modern, and finally usable.",
    townships: "Sellersville Borough and West Rockhill Township",
    permitsNote: "Anything that moves a wall or rerunes plumbing needs a permit in Sellersville — we handle the application.",
    popularStyleNote: "Modern full-overlay leads here, with shaker as the second option for owners who prefer transitional.",
    whyLocalLine: "Sellersville is about 40 minutes from our Easton bench, and part of our regular install territory.",
  },
  {
    slug: "souderton",
    name: "Souderton",
    intro:
      "Souderton anchors the Indian Valley — a Pennsylvania Dutch town with brick homes, period millwork, and the kind of cabinetry detail that has to respect what's already there. The kitchens we build here tend to be traditional or transitional rather than starkly modern.",
    housing: "Pennsylvania Dutch brick homes, older twins, and post-war singles",
    projectTitle: "A Souderton Dutch-Colonial kitchen, modernized respectfully.",
    projectBody:
      "The kitchen in this Souderton Dutch Colonial had its original brick chimney chase running through one wall — beautiful, but built for a different layout. The owners wanted a modern, functional kitchen that kept the chimney as a feature.\n\nWe drew a transitional inset shaker face-frame in painted oak, built custom cabinetry around the chase, and added a coffee-station nook between the chimney and the breakfast area. The original brick is now the centerpiece.",
    townships: "Souderton Borough, Franconia Township, and Telford Borough",
    permitsNote: "Indian Valley municipalities are generally straightforward on cabinetry; permits land within a couple of weeks for plumbing/electrical scope.",
    popularStyleNote: "Transitional shaker in painted finishes leads, with traditional raised panel as a strong second.",
    whyLocalLine: "Souderton is about 50 minutes from our Easton bench — worth the drive, and we make it regularly.",
  },
  {
    slug: "coopersburg",
    name: "Coopersburg",
    intro:
      "Coopersburg straddles the Bucks-Lehigh line — a small town with a downtown core of older homes, surrounding farmhouses, and a recent layer of newer development. The cabinetry brief here is usually about respecting older bones while delivering a kitchen that finally works.",
    housing: "Older borough homes, farmhouses on the township roads, and newer-construction developments",
    projectTitle: "A 1940s Coopersburg cape, rebuilt around the cook.",
    projectBody:
      "A small kitchen footprint, two cooks in the household, and a clear ask: more storage, no walls moved. The constraints forced us to be precise.\n\nWe drew painted inset cabinets with a maximum number of drawers, custom-pull-out everything, and a pantry tower with full-extension shelves. Same footprint, twice the working storage. The owners haven't put a thing in a top cabinet since.",
    townships: "Coopersburg Borough and Upper Saucon Township",
    permitsNote: "Upper Saucon requires permits for plumbing and electrical changes — we coordinate the inspections.",
    popularStyleNote: "Painted inset shaker for the older homes, modern full-overlay for the newer construction.",
    whyLocalLine: "Coopersburg is about 30 minutes from our Easton bench via Route 78. We're in town regularly.",
  },
  {
    slug: "hellertown",
    name: "Hellertown",
    intro:
      "Hellertown is just south of Bethlehem — a mix of post-war ranches, split-levels, and older homes near the borough center. Most of the kitchens we build here are 1960s-era rooms that haven't been touched and are due for a complete rethink.",
    housing: "Post-war ranches, split-levels, and older borough homes",
    projectTitle: "A 1962 Hellertown split-level, modernized end-to-end.",
    projectBody:
      "The original galley kitchen was small, closed off, and stuck in the 1960s. The owners had been living with it for fifteen years. They wanted modern, open, and bright — but with cabinetry that would hold its style for the next twenty.\n\nWe drew flat-panel full-overlay doors in two-tone white-and-walnut, opened the half-wall to the dining room, and built a peninsula that doubles as a breakfast bar. Hidden coffee station, integrated pantry, single under-mount sink with a faucet you can fill a stockpot under.",
    townships: "Hellertown Borough and Lower Saucon Township",
    permitsNote: "Lower Saucon is fast on cabinetry permits — typical turnaround is a week or two.",
    popularStyleNote: "Modern full-overlay leads, with shaker still strong in the older borough homes.",
    whyLocalLine: "Hellertown is about 20 minutes from our Easton bench. We install here most months.",
  },
  {
    slug: "emmaus",
    name: "Emmaus",
    intro:
      "Emmaus has one of the most eclectic housing mixes in the Lehigh Valley — downtown Victorians, mid-century ranches, post-war split-levels, and contemporary new builds within a few blocks of each other. We tailor every kitchen to the bones of the specific house.",
    housing: "Downtown Victorians, mid-century ranches, split-levels, and contemporary new builds",
    projectTitle: "A downtown Emmaus Victorian, brought into this century.",
    projectBody:
      "This downtown Emmaus Victorian had an extension off the original footprint that had been added in the 1950s — awkward, low-ceilinged, but full of light. The owners wanted to keep the volume and rebuild the kitchen inside it.\n\nWe drew tall shaker uppers to take advantage of the extra height, built a long island down the middle, and kept the original arched doorway as the visual anchor. Painted in a warm off-white with brushed-brass hardware. Period-correct from the doorway, modern from inside.",
    townships: "Emmaus Borough, Salisbury Township, and Upper Milford Township",
    permitsNote: "Borough permits move quickly. Township scope occasionally needs HVAC review.",
    popularStyleNote: "Transitional shaker leads, with two-tone islands close behind.",
    whyLocalLine: "Emmaus is about 30 minutes from our Easton bench, and one of our most frequent install destinations.",
  },
  {
    slug: "harleysville",
    name: "Harleysville",
    intro:
      "Harleysville is suburban Montgomery County — mid-century ranches, split-levels, and 1990s developments. Most kitchens here need a genuine modernization rather than a period restoration, and the brief is usually about pulling the room out of the era it was built in.",
    housing: "Mid-century ranches, split-levels, and 1990s suburban developments",
    projectTitle: "A 1992 Harleysville colonial, finally modern.",
    projectBody:
      "The original kitchen had honey-oak cabinets, a small island, and a layout that hadn't accommodated the homeowners' actual cooking style in fifteen years. They wanted bigger workspace, more drawers, and finishes that would feel current without looking trendy.\n\nWe drew painted shaker cabinets with a stained-walnut island, expanded the working surface by 40%, and replaced every door with a paneled, soft-close cabinet sized to its contents.",
    townships: "Lower Salford Township and Towamencin Township",
    permitsNote: "Townships are straightforward on cabinetry permits. We pull them in your name.",
    popularStyleNote: "Painted shaker leads here — modernizing 1990s-era developments tends to land on a transitional palette.",
    whyLocalLine: "Harleysville is about 55 minutes from our Easton bench. We schedule installs here in efficient batches.",
  },
  {
    slug: "lansdale",
    name: "Lansdale",
    intro:
      "Lansdale leans post-war — solid 1950s and 1960s homes on quiet streets, with growing demand for the kind of kitchen renovation that brings them up to current standards without erasing what made the house feel substantial in the first place.",
    housing: "1950s and 1960s post-war homes, with newer developments on the edges",
    projectTitle: "A 1958 Lansdale ranch, opened up and warmed up.",
    projectBody:
      "Closed-off galley kitchen, single window, and a layout that pushed the cook into a corner. The owners wanted to keep the home's character but make the kitchen feel like 2020s living.\n\nWe took down a non-load wall, repositioned the range to a new exterior wall (with hood venting out the back), and built shaker cabinets in a warm white with walnut accents on the island. The room finally has the proportions it was always meant to have.",
    townships: "Lansdale Borough, Towamencin Township, and Hatfield Township",
    permitsNote: "Wall removal needs structural review. We coordinate engineering when the scope calls for it.",
    popularStyleNote: "Shaker in soft whites and warm woods leads, with two-tone islands as a close second.",
    whyLocalLine: "Lansdale is about 55 minutes from our Easton bench. We batch our Montgomery County installs to keep scheduling tight.",
  },
  {
    slug: "new-hope",
    name: "New Hope",
    intro:
      "New Hope is its own thing — riverside Victorians, historic stone homes, and contemporary estates up in the Solebury hills. The brief is almost always 'period character, modern function,' and the budget tier tends to land at the upper end of the custom range.",
    housing: "Riverside Victorians, historic stone homes, contemporary Solebury estates",
    projectTitle: "A Solebury stone home, contemporary kitchen.",
    projectBody:
      "Centuries-old stone walls, original beam ceiling, and an owner who wanted a kitchen that looked like it had been parachuted in from Milan. The contrast is the design.\n\nWe drew minimalist rift-cut white oak full-overlay cabinets with integrated handles, no upper cabinets, and a freestanding island that reads more like furniture than millwork. The stone walls do the storytelling. The cabinetry stays out of their way.",
    townships: "New Hope Borough and Solebury Township",
    permitsNote: "Solebury and the historic district are slower on permits — we plan for it.",
    popularStyleNote: "Modern full-overlay in oak or walnut leads up the hill; period work leads in the historic district.",
    whyLocalLine: "We make the drive to New Hope often — about 40 minutes from our Easton bench along the river.",
  },
  {
    slug: "center-valley",
    name: "Center Valley",
    intro:
      "Center Valley is one of the newer-construction corners of upper Saucon — planned communities, modern colonials, and the occasional older farmhouse from before the developers got there. Most kitchens here are 2000s-era rooms that look fine on the surface but never quite fit the cook.",
    housing: "Planned-community colonials, contemporary builds, and the occasional older farmhouse",
    projectTitle: "A 2002 Center Valley colonial, kitchen finally functional.",
    projectBody:
      "Original developer-grade cabinets — particle-board boxes, oak doors that had darkened over twenty years, awkward corners that wasted real space. The owners wanted custom storage in a contemporary palette.\n\nWe drew painted shaker fronts in a soft warm white, built drawer banks where the lower doors used to be, added two pantry towers framing the breakfast nook, and finished the island in a deeper greige paint. New cabinets, same footprint, a kitchen that finally works.",
    townships: "Upper Saucon Township",
    permitsNote: "Upper Saucon requires permits for plumbing and electrical scope. We pull and inspect.",
    popularStyleNote: "Painted shaker dominates here — most clients want a transitional look that won't date.",
    whyLocalLine: "Center Valley is about 30 minutes from our Easton bench. Frequent install territory.",
  },
];

export function getTown(slug: string): TownData | undefined {
  return towns.find((t) => t.slug === slug);
}
