# numorph.ai — Consolidated Page Content

Site content extracted from https://numorph.ai/ (fetched Sep 3, 2026), one file per page, sections defined inside.

## Files

| # | File | URL | Sections |
| - | ---- | --- | -------- |
| 0 | `00-home.md` | `/` | Hero · Why NuMorph, Why Now · The Problem (preview) · Solutions (preview) · Built for Physical AI · Introductory Video · Request a Briefing |
| 1 | `01-company.md` | `/company` | Hero · About · Leadership Team · Roadmap |
| 2 | `02-technology.md` | `/technology` | Hero · The Problem · ERN-AI · How It Works · PoC Results |
| 3 | `03-solutions.md` | `/solutions` | Hero · Factory Automation · Machine Inspection · Warehouse Robotics · Smart Manufacturing |
| 4 | `04-blog.md` | `/blog` | Hero · Featured (RAINCLOUD DEFENSE) · Recent Posts · Newsletter |
| 5 | `05-faq.md` | `/faq` | Hero · Questions |
| 6 | `06-glossary.md` | `/glossary` | Hero · Core Terms · Proprietary Architecture · Abbreviations |
| 7 | `07-careers.md` | `/careers` | Hero · What We're Building · Areas of Interest · How to Reach Out |

## File structure convention

Each page file follows the same shape so a downstream rebuild can parse them consistently:

```
# Page: [Name]

**URL:** ...
**Meta title:** ...
**Meta description:** ...

---

## Section: [Section Name]
**anchor:** #anchor-id  (or "(top of page)" or "(none)")

### Eyebrow
Small-caps caption text as it appears on the page.

### H1 / H2
Main heading for the section.

### Body
Paragraph copy.

### Sub-block: [Name]
Nested content within a section (cards, columns, bios, steps, etc.)

### CTA / Bullets / Image (alt) / Embed / Form / etc.
Named blocks for structured elements.
```

**Parsing rules:**
- `---` horizontal rules separate sections. Each `## Section:` heading opens one.
- Anchor IDs match the site's existing `#foo` fragment URLs — used by in-page nav.
- `### Eyebrow` = the small uppercase caption above the main heading (e.g. `WHY NUMORPH, WHY NOW`).
- Image `alt` text is preserved because it describes what the section visually shows.
- Video embed URLs and their spoken transcripts are kept in full.

## What's excluded

- Site-wide header nav and mobile drawer (identical every page).
- Site-wide footer (logo, address, LinkedIn, repeated column links, © line).
- Actual image files and asset URLs beyond `alt` text and video embeds.
- OG / Twitter meta duplicates beyond the primary meta description.

## Notes worth flagging for the rebuild

- **Byline inconsistency:** Company and Technology are attributed to Dr. Srivastava; the other six pages are all "By the NuMorph AI Team." Decide whether to unify or lean into it.
- **Home duplicates Technology and Solutions:** the `The Problem (preview)` and `Solutions (preview)` sections on Home restate content that lives in full on `/technology` and `/solutions`. Common landing pattern, but worth deciding whether to shorten, rewrite, or keep parity.
- **Stale copyright:** footer reads © 2024 despite 2025 posts.
- **Blog is thin:** one featured piece + two award announcements.
- **Careers is a stub:** no roles, just an "open door" note.
- **Meta descriptions repeat the same phrases** across most pages ("500×", "bio-inspired", "existing CMOS").
