import type { Route } from "./+types/team";

import SiteChrome from "../components/SiteChrome";
import Team from "../components/Team";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.team);
}

export default function TeamPage() {
  return (
    <SiteChrome mainClassName="site-container page-main">
      <Team />
    </SiteChrome>
  );
}
