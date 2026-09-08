import type { Config } from "@react-router/dev/config";

export default {
  // Emit real HTML for every public route. This keeps the first paint from
  // waiting for the client bundle to download and boot.
  ssr: true,
  prerender: ["/", "/projects", "/team", "/writings", "/timeline"],
} satisfies Config;
