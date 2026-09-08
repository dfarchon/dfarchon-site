import { useEffect, useState } from "react";
import { teamContent, type TeamMember } from "../content/team";

function shuffleMembers(items: TeamMember[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

export default function Team() {
  const [members, setMembers] = useState(teamContent.members);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() =>
      setMembers(shuffleMembers(teamContent.members))
    );
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="team">
      <header className="section-head section-head-text">
        <div>
          <div className="eyebrow">Contributors</div>
          <h1 className="page-title">{teamContent.title}</h1>
          <p className="page-intro">{teamContent.summary}</p>
          <p className="page-intro">{teamContent.note}</p>
        </div>
      </header>
      <div className="card-grid team-grid">
        {members.map((member) => (
          <article key={member.name} className="brand-card">
            <div className="card-body">
              <h2 className="member-name">{member.name}</h2>
              <p>{member.description}</p>
              <div className="member-links">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
