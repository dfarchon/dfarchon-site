import { siteContent } from "../content/site";

export default function Footer() {
  return (
    <footer className="site-footer site-container">
      <div className="footer-surface">
        <div className="footer-grid">
          <div>
            <div className="wordmark">{siteContent.brand.name}</div>
            <p className="footer-statement">{siteContent.brand.intro}</p>
          </div>
          <div className="footer-links">
            {siteContent.footer.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-meta">
          Founded in {siteContent.brand.foundedYear} · Built for selective
          presence.
        </div>
      </div>
    </footer>
  );
}
