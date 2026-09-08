import type { Route } from "./+types/writings";

import SiteChrome from "../components/SiteChrome";
import Writings from "../components/Writings";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.writings);
}

export default function WritingsPage() {
  return (
    <SiteChrome mainClassName="site-container page-main">
      <Writings />
    </SiteChrome>
  );
}
