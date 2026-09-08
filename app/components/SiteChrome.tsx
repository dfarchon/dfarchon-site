import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface SiteChromeProps {
  children: ReactNode;
  mainClassName?: string;
}

export default function SiteChrome({
  children,
  mainClassName = "site-container",
}: SiteChromeProps) {
  return (
    <div className="site-wrap">
      <Navbar />

      <main className={mainClassName}>{children}</main>

      <Footer />
    </div>
  );
}
