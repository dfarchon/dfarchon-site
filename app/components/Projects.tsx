import { projectsContent } from "../content/projects";

export default function Projects() {
  return (
    <section id="projects">
      <header className="section-head section-head-text">
        <div>
          <div className="eyebrow">Public work</div>
          <h1 className="page-title">{projectsContent.title}</h1>
          <p className="page-intro">
            Experiments, infrastructure, and persistent worlds built around
            verifiable rules, privacy, and community stewardship.
          </p>
        </div>
      </header>
      <div className="card-grid">
        {projectsContent.items.map((project) => (
          <a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-card"
          >
            <div className="card-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-meta">
                <span>{project.status || "View project"}</span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
