import { timelineContent, type TimelineCategory } from "../content/timeline";

function CategoryMarker({ category }: { category: TimelineCategory }) {
  const definition = timelineContent.categories.find(
    (entry) => entry.key === category
  )!;
  return (
    <span
      className="timeline-marker"
      data-shape={definition.shape}
      aria-hidden="true"
    />
  );
}

export default function Timeline() {
  return (
    <section>
      <div className="timeline-overview">
        <header className="section-head section-head-text">
          <div>
            <div className="eyebrow">History</div>
            <h1 className="page-title">{timelineContent.title}</h1>
            <p className="page-intro">{timelineContent.intro}</p>
          </div>
        </header>
        <div className="timeline-legend" aria-label="Timeline categories">
          {timelineContent.categories.map((category) => (
            <div className="legend-item" key={category.key}>
              <CategoryMarker category={category.key} />
              {category.label}
            </div>
          ))}
        </div>
      </div>
      <div className="timeline-list">
        {timelineContent.events.map((event) => (
          <article
            className="timeline-event"
            key={`${event.date}-${event.title}`}
          >
            <CategoryMarker category={event.category} />
            <div className="event-date">{event.date}</div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
