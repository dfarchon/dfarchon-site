import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { writingsContent, type WritingEntry } from "../content/writings";

function ArticleModal({
  entry,
  onClose,
}: {
  entry: WritingEntry;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="article-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        <div className="modal-header">
          <div className="modal-title" id="article-modal-title">
            {entry.title}
          </div>
          <div className="modal-actions">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              Open article ↗
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="modal-close"
              aria-label="Close article"
            >
              ×
            </button>
          </div>
        </div>
        <iframe
          src={entry.url}
          className="article-frame"
          title={entry.title}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>,
    document.body
  );
}

export default function Writings() {
  const [activeEntry, setActiveEntry] = useState<WritingEntry | null>(null);
  const openEntry = useCallback(
    (entry: WritingEntry) => setActiveEntry((current) => current ?? entry),
    []
  );

  return (
    <section id="writings">
      <header className="section-head section-head-text">
        <div>
          <div className="eyebrow">Ideas and practice</div>
          <h1 className="page-title">{writingsContent.title}</h1>
          <p className="page-intro">
            Notes from building verifiable worlds and exploring privacy,
            coordination, and onchain reality.
          </p>
        </div>
      </header>
      <div className="writing-list">
        {writingsContent.entries.map((entry) => (
          <button
            key={entry.number}
            type="button"
            onClick={() => openEntry(entry)}
            className="writing-row"
          >
            <span className="writing-number">{entry.number}</span>
            <span className="writing-title">{entry.title}</span>
            <span className="writing-date">{entry.date.replace("_", " ")}</span>
          </button>
        ))}
      </div>
      {activeEntry ? (
        <ArticleModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />
      ) : null}
    </section>
  );
}
