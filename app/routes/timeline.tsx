import type { Route } from "./+types/timeline";
import SiteChrome from "../components/SiteChrome";
import Timeline from "../components/Timeline";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.timeline);
}

export default function TimelinePage() {
  return (
    <SiteChrome mainClassName="site-container page-main">
      <Timeline />
    </SiteChrome>
  );
}
