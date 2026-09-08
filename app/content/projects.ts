export interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  status: string;
  url: string;
}

export const projectsContent = {
  title: "PROJECTS",
  items: [
    {
      slug: "dark-forest-aztec",
      title: "Dark Forest On Aztec",
      description:
        "Porting Dark Forest to the Aztec privacy-focused L2 using Noir. Native private execution for fog of war.",
      status: "",
      url: "https://github.com/dfarchon/dark-forest-aztec",
    },
    {
      slug: "dark-forest-punk",
      title: "Dark Forest Punk",
      description:
        "Ported Dark Forest to the MUD engine and introduced many new mechanics and iterative upgrades, including artifacts, guilds, time management module, and more.",
      status: "dfpunk.xyz",
      url: "https://github.com/dfarchon/darkforest-punk",
    },
    {
      slug: "dark-forest-aress",
      title: "Dark Forest Ares",
      description:
        "Built on the ERC-2535 architecture, it introduced a wide range of new features and was actively maintained for about a year and a half.",
      status: "",
      url: "https://github.com/dfarchon/DFARES-v0.1",
    },
    {
      slug: "onchain-reality",
      title: "Onchain Reality",
      description:
        "Essays, projects, and philosophy at the intersection of blockchain, verifiable truth, and crypto-native culture.",
      status: "",
      url: "https://onchainreality.xyz",
    },
    {
      slug: "df-gaia",
      title: "DF GAIA",
      description: "A user-friendly Dark Forest plugin development library.",
      status: "",
      url: "https://github.com/dfarchon/DF-GAIA",
    },
    {
      slug: "df-artemis",
      title: "DF ARTEMIS",
      description: "Planet-targeted bounty mercenary system for Dark Forest.",
      status: "",
      url: "https://github.com/dfarchon/DF-ARTEMIS",
    },
    {
      slug: "df-apollo",
      title: "DF APOLLO",
      description: "Automated assisted operating System for Dark Forest.",
      status: "",
      url: "https://www.youtube.com/watch?v=Edm1SR8mIl8",
    },
    {
      slug: "replay-time-machine",
      title: "Replay Time Machine",
      description: "Replay system for Dark Forest v0.6.3.",
      status: "",
      url: "https://dark-forest-replay.netlify.app/",
    },
  ] satisfies ProjectEntry[],
} as const;
