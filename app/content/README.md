# Content Maintenance Guide

Store editable site information in this directory so components can stay focused on rendering.

## Files

- `site.ts`: Shared brand copy, footer links, marquee text, and page meta.
- `team.ts`: Team section title, summary, and member list.
- `projects.ts`: Project list and external destinations.
- `timeline.ts`: Timeline title, legend categories, and event list.
- `writings.ts`: Writing entries and external article links.

## Editing Rules

- Prefer updating data here instead of hardcoding copy inside components.
- Keep objects stable and predictable so adding entries is mostly copy-paste.
- Store content fields, not JSX, unless a display requirement truly needs markup.
- Use short enums like `accent`, `theme`, and `category` for presentation variants.
- Keep `slug` values stable once published.

## Common Tasks

Add a team member:

1. Open `team.ts`.
2. Append one object to `members` with `name`, `description`, `github`, and `twitter` URLs.

Add a project:

1. Open `projects.ts`.
2. Append one object to `items`.
3. Fill in `slug`, `title`, `description`, `status`, and `url`.

Add a timeline event:

1. Open `timeline.ts`.
2. Append one object to `events`.
3. Use one of the existing `category` values.
