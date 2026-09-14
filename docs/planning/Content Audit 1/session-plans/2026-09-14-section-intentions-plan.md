# Section Intentions stack — audit step 2

## Context

`docs/planning/Content Audit 1/audit.md` defines a three-step content-audit process. Step 1
(current-site audit) is done. This plan builds **step 2: the Section Intentions stack**.

The purpose, per the audit: strip the site back to its *ideas*. Each section becomes a large
block of whitespace with a small amount of centered text stating what that section is **for**
— what concept it must communicate — before anyone argues about copy, layout or diagrams.
It is a thinking tool, deliberately content-free.

This supersedes the previous plan in this file (the seed-docs rebuild), which is complete.
The rebuilt site now lives in `site/` and is the reference the stack abstracts.

### Audit findings already resolved by the rebuild

Worth recording so the audit gets updated against reality rather than re-litigated:

| Audit finding | Status |
| --- | --- |
| Eyebrow tags as LLM tell-tale | **Resolved** on the 5 revised pages — verified 0 remaining on home/company/technology/solutions/faq. Still present on blog (2), glossary (4), careers (1), whose seed docs still specify them. |
| Nomenclature overload (TAM, NESA on home) | **Partly resolved** — TAM and NESA are now 0 on home (removed with the stat band and ALB/NESA cards). ERN-AI still appears 36×, CMOS 9×. |
| "Lazy visual representation" (the `image.png` two-column block) | **Still present** — `FRAME-BASED CAPTURE` / `ERN-AI · EVENT-DRIVEN` on `index.html` only. |
| Conversational headline ("The transition from frame-based…") | **Still present** on home. Note the audit's critique rests partly on the eyebrow above it, which is now gone — so the headline now stands alone and reads *worse*, not better. Flag for the rewrite step. |
| Verbose / redundant copy | **Still present** — "perception-native" 3× on home (6× site-wide), "point where the sensing happens" 2×, "without replacing" 8×. |
| Vertical sprawl | **Still present** — home references smart city, aviation, medical, agriculture, space, automotive, humanoid, drones. |

These are content-rewrite and design problems, out of scope for step 2, which is
structure-only.

## Decisions

| Decision | Choice |
| --- | --- |
| Pages | Home, Technology, Solutions only — the three the audit specifies |
| Undefined slots | Render as explicit TBD blocks; do not invent content |
| Vertical rhythm | Uniform tall blocks (100vh), not measured per-section heights |

## Deliverable

```
site/intentions/
  index.html        Home — 6 intention blocks
  technology.html   Technology — 7 intention blocks
  solutions.html    Solutions — 4 intention blocks
```

Separate from the live rebuild so both can be viewed side by side; `site/` is untouched.

## Implementation

### 1. Page shell
Each page is standalone HTML in the site's visual language, so the stack reads as the same
product rather than a foreign wireframe:

- Background `#080b11`, text `#e9edf4` (from `site/css/style.css` line 5)
- Google Fonts link copied from `site/index.html` — Space Grotesk + IBM Plex Sans/Mono
- **No** site nav, footer, progress bar or scroll-reveal. The stack is a thinking tool; the
  chrome would imply a finished page. Simple prev/next links between the three pages instead.

### 2. Block structure
One `<section>` per intention, each:

- `min-height:100vh`, flex-centered both axes — the audit's "large blocks of whitespace"
- Hairline bottom border `1px solid rgba(255,255,255,.06)` so block boundaries are legible
  while scrolling
- Centered stack, `max-width:680px`:
  - **Number** — IBM Plex Mono, `#5f6a7b`, e.g. `01 / 06`
  - **Intention** — Space Grotesk 28–32px, the audit's wording verbatim
  - **Nothing else.** No body copy, no images, no CTAs.

Use `min-height` rather than fixed `height` so long TBD notes can't overflow.

### 3. Content — verbatim from the audit

**Home** (6): Overview of company, product and vision in simplest terms · What is the
technology in simplest terms · What problem does it solve in simplest terms · Overview of
Applications · What is NuMorph AI's competitive advantage · Book a demo

**Technology** (7): Detailed statement of the technology, broken into 4 parts · Acronym
definition + links to glossary · Restatement of part 1 with technical drill-down · part 2 ·
part 3 · part 4 · Further resources, technical details, book a demo

**Solutions** (4), each with the audit's three sub-points (current unmet need → NuMorph
solution → projected outcomes and test confirmations), rendered as three small mono lines
beneath the title: NO IR Video Camera Operation · Warehouse Robotics · Factory Automation ·
**Solution 4 — to be defined**

### 4. TBD blocks
Two places the audit leaves genuinely undefined. Render them visibly unresolved — amber
`#f0b429`, dashed border — rather than filling them in:

- **Solutions #4** — the audit literally says "Solution 4". Current site has Machine
  Inspection and Smart Manufacturing as candidates, but the audit's reordering (leading with
  NO IR) suggests a deliberate rethink, so this is the team's call.
- **Technology parts 1–4** — the audit assumes "4 parts … for purposes of this audit" but
  never names them. The seed doc's technology sub-blocks (ALB, how ALBs compose, NESA, IP
  status; plus the 5-step pipeline) do not map cleanly onto 4 parts. Each of blocks 3–6 gets
  a "part N of 4 — to be defined" note.

Also note on Solutions: the audit drops **Machine Inspection** and **Smart Manufacturing**
(both on the current site) and adds **NO IR Video Camera Operation** — which is currently a
capability mentioned inside Machine Inspection, not a section. That reordering is a real
content decision; the stack should surface it, not smooth it over.

## Verification

1. `open site/intentions/index.html` — dark themed, one full-viewport block per intention,
   centered text, matches the site's typography.
2. Scroll each page: block count is 6 / 7 / 4 and numbering runs `01 / 06` … correctly.
3. TBD blocks are visually distinct (amber, dashed) — 1 on Solutions, 4 on Technology.
4. Prev/next links move between the three pages.
5. Narrow to phone width: text stays centered and readable, no horizontal scroll, blocks
   still full-height.
6. Confirm the stack contains **no** body copy lifted from `site/` — it should be intentions
   only: `grep -ci "ERN-AI is a perception-native" site/intentions/*.html` → 0.
7. `site/` itself is unmodified: the 8 rebuilt pages still render as before.
