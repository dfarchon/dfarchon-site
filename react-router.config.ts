import type { Config } from "@react-router/dev/config";

export default {
  // Netlify serves this app as static files, so there is no runtime server for
  // SSR or lazy route-discovery requests such as /__manifest.
  ssr: false,
  prerender: ["/", "/projects", "/team", "/writings", "/timeline"],
  routeDiscovery: { mode: "initial" },
} satisfies Config;
