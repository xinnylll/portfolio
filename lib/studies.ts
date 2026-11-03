export type Board = {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
};

export type Study = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  line: string;
  note: string;
  cover: Board;
  boards: Board[];
};

const fitmatch = (file: string, caption: string, alt: string): Board => ({
  src: `/images/fitmatch/${file}`,
  width: 2400,
  height: 1600,
  caption,
  alt,
});

const wide = (folder: string, file: string, caption: string, alt: string): Board => ({
  src: `/images/${folder}/${file}`,
  width: 2400,
  height: 1350,
  caption,
  alt,
});

export const studies: Study[] = [
  {
    slug: "acticraft",
    title: "ActiCraft",
    category: "AI & Learning Experience Design",
    line: "Guidance that fades during maths play.",
    note: "A working prototype, studied with parents guiding children through maths, where the guidance fades.",
    cover: wide("acticraft", "01-cover.jpg", "Cover", "ActiCraft cover. Interaction design researched through play."),
    boards: [
      wide("acticraft", "01-cover.jpg", "Cover", "ActiCraft cover. Interaction design researched through play."),
      wide("acticraft", "02-research.jpg", "Research and design goals", "ActiCraft board: research and design goals."),
      wide("acticraft", "03-strategies.jpg", "Teacher talk and parent strategies", "ActiCraft board: teacher talk and parent strategies."),
      wide("acticraft", "04-layers.jpg", "Three layers and fading", "ActiCraft board: three layers and fading."),
      wide("acticraft", "05-blueprint.jpg", "System and service blueprint", "ActiCraft board: system and service blueprint."),
      wide("acticraft", "06-engine.jpg", "Adaptive guidance engine", "ActiCraft board: adaptive guidance engine."),
      wide("acticraft", "07-study.jpg", "User study and results", "ActiCraft board: user study and results."),
      wide("acticraft", "08-insights.jpg", "Insights and reflection", "ActiCraft board: insights and reflection."),
    ],
  },
  {
    slug: "fitmatch",
    title: "FitMatch",
    category: "Interaction Design",
    line: "A map-first app for a game nearby.",
    note: "Flows, screens, and a visual system for finding a game you can join.",
    cover: fitmatch("01-overview.jpg", "Overview", "FitMatch overview. Find a game. Find your people."),
    boards: [
      fitmatch("01-overview.jpg", "Overview", "FitMatch overview. Find a game. Find your people."),
      fitmatch("02-problem.jpg", "Problem and framing", "FitMatch board: problem and framing."),
      fitmatch("03-strategy.jpg", "Strategy and structure", "FitMatch board: strategy and structure."),
      fitmatch("04-discover.jpg", "Discover to join", "FitMatch board: discover to join."),
      fitmatch("05-retention.jpg", "Retention", "FitMatch board: retention."),
      fitmatch("06-system.jpg", "System and reflection", "FitMatch board: system and reflection."),
      fitmatch("07-prototype.jpg", "Prototype iteration", "FitMatch board: prototype iteration."),
    ],
  },
  {
    slug: "synthwave",
    title: "Synthwave",
    category: "Exhibition",
    year: "2025",
    line: "A future that arrived in 1980.",
    note: "Film, music, then one measured room.",
    cover: wide("synth-grid", "00-prologue.jpg", "Prologue", "Synthwave exhibition prologue. A future that arrived in 1980."),
    boards: [
      wide("synth-grid", "00-prologue.jpg", "Prologue", "Synthwave exhibition prologue. A future that arrived in 1980."),
      wide("synth-grid", "01-question.jpg", "The question", "Synthwave board: the question."),
      wide("synth-grid", "02-concept.jpg", "The concept", "Synthwave board: the concept."),
      wide("synth-grid", "03-world.jpg", "The world", "Synthwave board: the world."),
      wide("synth-grid", "04-space.jpg", "The space", "Synthwave board: the space."),
      wide("synth-grid", "05-experience.jpg", "The experience", "Synthwave board: the experience."),
      wide("synth-grid", "06-process.jpg", "The process", "Synthwave board: the process."),
    ],
  },
];

export function getStudy(slug: string) {
  return studies.find((study) => study.slug === slug);
}
