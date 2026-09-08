import { Link } from "react-router";
import DFArchonLogo from "./DFArchonLogo";
import { siteContent } from "../content/site";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Selective Presence · DFArchon</div>
          <h1 className="hero-title">{siteContent.hero.title}</h1>
          <p className="hero-statement">{siteContent.brand.intro}</p>
          <div className="hero-actions">
            <Link to="/projects" prefetch="intent" className="primary-action">
              Explore projects
            </Link>
            <a
              href="https://onchainreality.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              Read Onchain Reality <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <DFArchonLogo className="hero-logo" />
      </section>
      <section className="principles" aria-label="Core principles">
        {siteContent.hero.principles.map((principle, index) => (
          <article className="principle" key={principle.title}>
            <div className="principle-number">0{index + 1}</div>
            <h2>{principle.title}</h2>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
