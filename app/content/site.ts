export interface PageMeta {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface SiteSeoConfig {
  defaultKeywords: string[];
  ogImagePath: string;
  twitterHandle: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteContent = {
  brand: {
    name: "DFArchon",
    displayName: "DFArchon",
    foundedYear: 2021,
    intro:
      "DFArchon researches technologies for Selective Presence. We enable people to participate, create, and coordinate without surrendering identity, attention, or private life.",
  },
  hero: {
    title: "Participate without becoming fully visible.",
    principles: [
      {
        title: "Verifiable Participation",
        description:
          "Create, collaborate, and act in public worlds whose rules and outcomes anyone can verify.",
      },
      {
        title: "Minimum Disclosure",
        description:
          "Reveal only what an action requires. Participation should not demand a complete identity or history.",
      },
      {
        title: "Credible Exit",
        description:
          "Keep the ability to move identities, data, assets, and clients without asking a platform for permission.",
      },
    ],
  },
  footer: {
    socialLinks: [
      { label: "TWITTER", href: "https://x.com/DFArchon" },
      { label: "GITHUB", href: "https://github.com/dfarchon" },
      { label: "BLOG", href: "https://paragraph.com/@dfarchon" },
    ] satisfies SocialLink[],
  },
  seo: {
    defaultKeywords: [
      "DFArchon",
      "Dark Forest",
      "onchain gaming",
      "fully onchain games",
      "crypto gaming",
      "zk gaming",
      "onchain reality",
      "web3 community",
    ],
    ogImagePath: "/logo.jpg",
    twitterHandle: "@DFArchon",
  } satisfies SiteSeoConfig,
  pageMeta: {
    home: {
      title: "DFArchon | About",
      description:
        "DFArchon researches technologies for Selective Presence: the ability to participate, create, and coordinate without surrendering identity, attention, or private life.",
      path: "/",
      keywords: [
        "DFArchon about",
        "Dark Forest community",
        "onchain research collective",
      ],
    },
    projects: {
      title: "DFArchon | Projects",
      description:
        "Explore DFArchon projects spanning Dark Forest experiments, community rounds, and fully onchain game infrastructure.",
      path: "/projects",
      keywords: [
        "DFArchon projects",
        "Dark Forest tools",
        "fully onchain game projects",
      ],
    },
    team: {
      title: "DFArchon | Team",
      description:
        "Meet the DFArchon contributors building community rounds, experimental systems, and onchain gaming experiences.",
      path: "/team",
      keywords: [
        "DFArchon team",
        "onchain builders",
        "Dark Forest contributors",
      ],
    },
    timeline: {
      title: "DFArchon | Timeline",
      description:
        "Follow the DFArchon timeline from early Dark Forest plugins to public community rounds, MUD migration, and onchain game releases.",
      path: "/timeline",
      keywords: [
        "DFArchon timeline",
        "Dark Forest history",
        "onchain gaming roadmap",
      ],
    },
    writings: {
      title: "DFArchon | Writings",
      description:
        "Read DFArchon writings on onchain reality, decentralized worlds, Dark Forest, and the future of fully onchain games.",
      path: "/writings",
      keywords: ["DFArchon writings", "onchain essays", "Dark Forest articles"],
    },
  } satisfies Record<string, PageMeta>,
} as const;

export function getPageMetaDescriptors(page: PageMeta) {
  const keywords = [
    ...siteContent.seo.defaultKeywords,
    ...(page.keywords ?? []),
  ].join(", ");

  return [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
  ];
}
