/**
 * Portfolio projects. Photo paths point to /public/projects/*.jpg which
 * is intentionally empty for now — pages render placeholder blocks until
 * real photography lands. Add or update entries here; the dynamic
 * /portfolio/[slug] route picks them up automatically.
 */

export type Project = {
  slug: string;
  title: string;
  town: string;       // matches a value in lib/towns.ts when applicable
  style: string;      // "Inset Shaker", "Two-tone", etc.
  year: number;
  scope: string[];
  summary: string;    // 1-sentence
  story: string;      // 2–3 paragraph story
  image: string;      // /projects/[slug].jpg (placeholder)
};

export const projects: Project[] = [
  {
    slug: "quakertown-farmhouse",
    title: "Quakertown 1920s Farmhouse",
    town: "Quakertown",
    style: "Inset Shaker, painted",
    year: 2025,
    scope: ["Kitchen", "Butler's pantry", "Mudroom"],
    summary: "A century-old Quaker farmhouse reorganized around how the owners actually cook.",
    story:
      "The house was older than the rest of the country. The walls were plaster, the ceiling sagged a quarter inch over six feet, and the kitchen had been laid out in 1948 for a different family entirely.\n\nWe scribed every cabinet to the wall, integrated panels on the refrigerator and dishwasher, and built a working island that runs almost the full length of the room. Inset shaker doors in a warm white paint, polished-nickel hardware, soapstone counter on the island and quartz on the perimeter.\n\nFinished in 11 weeks from contract to final walkthrough.",
    image: "/projects/quakertown-farmhouse.jpg",
  },
  {
    slug: "doylestown-victorian",
    title: "Doylestown Historic Victorian",
    town: "Doylestown",
    style: "Traditional raised panel",
    year: 2024,
    scope: ["Kitchen", "Original woodwork restoration"],
    summary: "A period-correct kitchen for a borough historic-district Victorian.",
    story:
      "Working in Doylestown's historic district means every detail gets weighed against what's already there. The original floor pattern, the casing profiles, the wood species choices — everything had to feel like it had always been part of the house.\n\nWe drew traditional raised-panel maple doors in a hand-mixed cream paint, hand-scribed every cabinet against the lath-and-plaster walls, and matched the island leg detail to the porch posts on the front of the house. The finish work alone took two weeks.\n\nA borough kitchen that looks like it was built with the house.",
    image: "/projects/doylestown-victorian.jpg",
  },
  {
    slug: "perkasie-two-tone",
    title: "Perkasie Two-Tone Family Kitchen",
    town: "Perkasie",
    style: "Two-tone (painted perimeter + stained island)",
    year: 2025,
    scope: ["Kitchen", "Breakfast nook"],
    summary: "A 1900s Perkasie Victorian, opened up, with the island anchoring the room.",
    story:
      "The original kitchen had been remodeled three times across three decades — and looked like it. The owners wanted a kitchen that finally felt like it belonged to the house.\n\nWe drew a transitional inset face-frame in painted maple, kept the original heart-pine floors, and built a long stained-walnut island that anchors the room. The plumbing got rerun, electrical relocated, and the breakfast nook turned into a window-bench reading corner.\n\nPainted perimeter, stained island, polished hardware. Family kitchen that lives up to the house.",
    image: "/projects/perkasie-two-tone.jpg",
  },
  {
    slug: "new-hope-modern-stone",
    title: "Solebury Stone Home — Modern Kitchen",
    town: "New Hope",
    style: "Rift-cut white oak, full-overlay",
    year: 2025,
    scope: ["Kitchen", "Wet bar", "Pantry"],
    summary: "Centuries-old stone walls meet minimalist Italian-modern cabinetry.",
    story:
      "Stone walls, original beam ceiling, and an owner who wanted a kitchen that looked like it had been parachuted in from Milan. The contrast is the design.\n\nMinimalist rift-cut white oak full-overlay cabinets with integrated handles, no upper cabinets, and a freestanding island that reads more like furniture than millwork. Hidden coffee station, integrated wet bar in the corner, and a pantry tucked behind a pivot door that matches the cabinetry.\n\nThe stone walls do the storytelling. The cabinetry stays out of their way.",
    image: "/projects/new-hope-modern-stone.jpg",
  },
  {
    slug: "emmaus-victorian-extension",
    title: "Emmaus Victorian — Kitchen in the Extension",
    town: "Emmaus",
    style: "Transitional shaker, painted",
    year: 2024,
    scope: ["Kitchen", "Pantry tower"],
    summary: "A downtown Emmaus Victorian's awkward 1950s extension turned into the most-used room in the house.",
    story:
      "Period-correct from the doorway, modern from inside. The original Victorian was beautiful, the 1950s extension awkward but full of light — a recurring problem in downtown Emmaus.\n\nWe drew tall shaker uppers to take advantage of the extra height, built a long island down the middle, and kept the original arched doorway as the visual anchor. Painted in a warm off-white with brushed-brass hardware.\n\nA pantry tower replaced the back wall. The light is the centerpiece.",
    image: "/projects/emmaus-victorian-extension.jpg",
  },
  {
    slug: "center-valley-colonial",
    title: "Center Valley Colonial — Same Footprint, New Kitchen",
    town: "Center Valley",
    style: "Painted shaker + stained island",
    year: 2025,
    scope: ["Kitchen"],
    summary: "A 2002 developer-grade kitchen rebuilt as proper custom cabinetry, same footprint, twice the storage.",
    story:
      "Original developer-grade cabinets — particle-board boxes, oak doors darkened over twenty years, awkward corners that wasted real space. The owners wanted custom storage in a contemporary palette without moving any walls.\n\nWe drew painted shaker fronts in a soft warm white, replaced every lower door with a drawer bank, added two pantry towers framing the breakfast nook, and finished the island in a deeper greige paint.\n\nNew cabinets, same footprint. Twice the working storage. The owners haven't put a thing in a top cabinet since.",
    image: "/projects/center-valley-colonial.jpg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
