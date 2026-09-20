import SiteChrome from "../components/SiteChrome";
import Team from "../components/Team";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta() {
  return getPageMetaDescriptors(siteContent.pageMeta.team);
}

export default function TeamPage() {
  return (
    <SiteChrome mainClassName="site-container page-main">
      <Team />
    </SiteChrome>
  );
}
