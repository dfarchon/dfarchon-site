export type TimelineCategory = "launch" | "milestone" | "community";

export interface TimelineCategoryDefinition {
  key: TimelineCategory;
  label: string;
  shape: "diamond" | "circle" | "circle-outline";
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  category: TimelineCategory;
}

export const timelineContent = {
  title: "TIMELINE",
  intro:
    "From Dark Forest players to builders of community rounds, advancing toward the Onchain Reality Universe.",
  categories: [
    { key: "launch", label: "LAUNCH", shape: "diamond" },
    {
      key: "milestone",
      label: "MILESTONE",
      shape: "circle",
    },
    {
      key: "community",
      label: "COMMUNITY",
      shape: "circle-outline",
    },
  ] satisfies TimelineCategoryDefinition[],
  events: [
    {
      date: "2025-Q4",
      title: "DevconnectARG 2025",
      description:
        "DFArchon exhibits at Devconnect 2025 Gaming District for a full week, showcasing Dark Forest Punk and the broader onchain gaming vision.",
      category: "community",
    },
    {
      date: "2025-Q4",
      title: "DF-PUNK v0.1.1 - New Materials",
      description:
        "Introduced 11 biome-based materials generated from perlin-driven planet attributes, laying the foundation for a future technology tree, while adding a purchasable space junk mechanic that lets players expand planet ownership capacity and routes all proceeds into the prize pool.",
      category: "launch",
    },
    {
      date: "2025-Q4",
      title: "ETH Singapore - d/acc Day",
      description:
        "Our community member participated in d/acc Day during ETH Singapore 2025 (organized by Vitalik Buterin), attending a talk on the decentralized development of Dark Forest.",
      category: "community",
    },
    {
      date: "2025-Q3",
      title: "Dark Forest Redux",
      description:
        "It faithfully recreates the classic Dark Forest v0.5 experience, followed by a two-week public playtest.",
      category: "milestone",
    },
    {
      date: "2025-Q2",
      title: "DF-MUD v0.1.4 - New Junk Mechanic",
      description:
        "Introduced a new junk mechanic that caps the number of planets each player can control, narrowing the gap between veteran and new players and improving fairness across the universe. Artifact parameters were also rebalanced to further optimize combinations across different functions.",
      category: "milestone",
    },
    {
      date: "2025-Q1",
      title: "DF-MUD v0.1.3 - Cross-Round Artifacts & AI Agent",
      description:
        "Public roadmap advances with cross-round artifact support, AI-assisted decision tooling, and onboarding improvements, showing the project maturing beyond a straight Dark Forest port.",
      category: "milestone",
    },
    {
      date: "2024-Q4",
      title: "DF-MUD v0.1.2 - Guilds, Delegation & Artifacts",
      description:
        "The MUD rebuild adds guilds, account delegation, and modular artifact development, turning the project into a more social and extensible onchain game stack.",
      category: "milestone",
    },
    {
      date: "2024-Q3",
      title: "DF-MUD v0.1.1 - Engine Migration",
      description:
        "Core Dark Forest gameplay is migrated to the MUD engine, including planet types, space types, and silver mining, alongside a dynamic tick-rate system.",
      category: "milestone",
    },
    {
      date: "2023-Q1 - 2024-Q2",
      title: "DF-ARES v0.1.1 - DF-ARES v0.1.4",
      description:
        "The DF-ARES series marked DFArchon's transition from plugins and experiments to community-operated game rounds with original gameplay mechanics and progression systems. Since then, DFArchon has continued to launch public DF-ARES community rounds, using them as open testbeds for new artifacts, economic mechanics, and early alliance-based collaboration systems.",
      category: "launch",
    },
    {
      date: "2022-Q3",
      title: "DF-ARTEMIS - Bounty System",
      description:
        "Released DF-ARTEMIS, a planet-targeted bounty and mercenary system that introduced a secondary player economy on top of Dark Forest gameplay.",
      category: "launch",
    },
    {
      date: "2022-Q2",
      title: "DF-GAIA Plugin Framework",
      description:
        "Released DF-GAIA, a public plugin development library for Dark Forest that packaged utility functions and modular sections for players and builders.",
      category: "launch",
    },
    {
      date: "2021-Q3 - 2022-Q2",
      title: "Dark Forest Plugins",
      description:
        "We developed a variety of Dark Forest plugins for different purposes, such as Highlight Friends, Capture Wait Time, Abandon Area Planets, Map Filter Export, Peace Dove, Towards Center, Claim Best, and more.",
      category: "launch",
    },
    {
      date: "2021-Q3",
      title: "DFArchon Founded",
      description:
        "DFArchon was originally formed by active Dark Forest players. This marked the beginning of its open community work.",
      category: "milestone",
    },
  ] satisfies TimelineEntry[],
} as const;
