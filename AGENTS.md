# AGENTS.md: Collaboration Guide

This repository is Mohammed Siddique's **personal** portfolio
(`MohammedSiddique8998/mohammed-siddique-data-ai-portfolio`). It is unrelated to any
employer or organisation account. Only use the `MohammedSiddique8998` GitHub identity here.

## Setup

- Plain HTML, CSS and vanilla JavaScript. **No dependencies, no package install.**
- Local preview (optional): `npm run dev` → http://localhost:4173, or `python -m http.server 4173`.
- Validation and build: `npm run build` (runs `scripts/build.mjs` checks, then copies the site to `dist/`).
- Hosting: Vercel, connected to this repo.
  - `main` → **production** (https://mohammed-siddique-data-ai-portfolio.vercel.app)
  - any other branch → Vercel **preview** URL (shown on the PR / commit status)
- Do not commit `dist/`, `node_modules/` or `build-output.txt`.

## Ownership

| Agent | Owns | Main files |
|---|---|---|
| **Antigravity** | Visual design, layout, typography, mascot/character, 3D, motion, UI components, accessibility of UI | `styles.css`, motion/canvas/UI code in `app.js`, markup structure and classes in `index.html`, `assets/visual/` |
| **Codex** | Biography, project narratives, content organisation, social-link integration | Text content in `index.html`, the `projects` array and `policyCopy` in `app.js`, `docs/linkedin-post-drafts.md`, `docs/project-repo-polishing-plan.md`, `README.md` content |

If a change has to cross into the other agent's area, keep it minimal and note it in the PR description.

## Workflow

1. Never commit directly to `main`. `main` is production.
2. Branch naming: `feature/visual-*` (Antigravity), `content/*` (Codex).
3. Small, reviewable commits; open a pull request into `main`.
4. Merge only after the owner (Mohammed) reviews the Vercel preview and approves.
5. Before starting, rebase or merge the latest `main` into your branch to avoid conflicts.
6. Log notable changes and open tasks in `docs/design-refresh-log.md`.

## Guardrails

- Keep `scripts/build.mjs` checks passing (section IDs, CV links, `mailto:` contact, `a[download]` handler,
  980px/640px breakpoints, `motion-portal` + `replayMotion`).
- Respect `prefers-reduced-motion`; every animation needs a static fallback.
- Decorative visuals (canvases, mascot) must be `aria-hidden="true"` and never block content.
- No secrets, API keys or tracking scripts.
