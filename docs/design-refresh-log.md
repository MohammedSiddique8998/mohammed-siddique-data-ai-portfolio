# Design Refresh Log

Branch: `feature/visual-refresh` · Base: `main` @ `ca4d02f` · Owner: Antigravity (visual/UI/motion)

Direction: **"Signal Lab"**, an evolution of the existing dark data-lab look with clearer typography,
better performance and accessibility, and a small mascot ("Orbit", a glass data-orb).

## Stages

| # | Stage | Status |
|---|---|---|
| 0 | Hand-off docs (`AGENTS.md`, this log) | Done |
| 1 | Foundations: typography, tokens, focus styles, labelled theme toggle, skip link | Done |
| 2 | Performance + reduced motion for canvases/JS, WebGL fallback | To do |
| 3 | Hero layout + Orbit mascot (SVG + CSS 3D, static fallback) | To do |
| 4 | Section layouts, project-card tilt, modal polish (Escape key, focus return) | To do |
| 5 | QA (build checks, Lighthouse on preview, keyboard + reduced-motion), PR to `main` | To do |

## Change record

### Stage 1: Foundations
- Added *Space Grotesk* display font for headings; Inter stays for body, JetBrains Mono for labels.
- Added design tokens: `--display`, spacing scale, easing curves.
- Tightened heading letter-spacing and line-height for clearer hierarchy.
- Added visible `:focus-visible` outlines for links, buttons and form fields.
- Theme toggle now shows the current theme name; `aria-label` reflects the active theme.
- Menu button now exposes `aria-expanded`; added a "Skip to content" link.
- No copy, project data or links changed.

## Remaining tasks / notes for Codex
- Content items noticed (not changed, Codex scope): timeline entries contain "date to confirm" / "Dates to confirm".
