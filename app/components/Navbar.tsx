import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { href: "/", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  // { href: "/writings", label: "WRITINGS" },
  { href: "/timeline", label: "TIMELINE" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="site-header site-container">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" prefetch="intent" className="wordmark">
          DFArchon
        </Link>
        <div className="nav-items">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                prefetch="intent"
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
