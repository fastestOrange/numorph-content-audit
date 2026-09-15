# Website Content Audit: numorph.ai

**Findings and recommendations · September 2026**

---

## Scope

numorph.ai was reviewed across all eight pages against the job the site has to do: explain
NuMorph's technology and direction to licensing partners and system integrators, to
investors, and to a technically literate general reader.

A **first-draft site** accompanies this report: a working eight-page rebuild applying the
recommendations below. It is linked from the audit index.

All figures below were measured directly from the published site and the rebuild.

This review was conducted without access to analytics, customer interviews or a content
discovery process, and without domain expertise in neuromorphic computing. It assesses how
the content performs for a reader, not whether the technical claims are correct. The
technology page in particular would benefit from a fuller discovery process than a review
of this kind can substitute for.

---

## Findings

### 1. The writing carries markers of machine-generated content

The site uses "eyebrow" captions throughout: small-caps labels set above a heading, such as
`WHY NUMORPH, WHY NOW`. There are **24 across the eight pages** (5 on the home page alone).
The same signature appears in the heavy use of em dashes (**87 site-wide**) and in the
recurring "it's not X, it's Y" construction.

Writing a well-formed headline is a skill. The eyebrow is a way around it: pose a fragment,
then answer it, and the pair stands in for a headline that neither half achieves alone.

This matters commercially rather than cosmetically. Readers who recognise the pattern
discount the content by association with low-effort sites, independently of whether the
substance is sound. Here the substance is sound.

### 2. Headings depend on the captions above them

The home page heading reads: _"The transition from frame-based perception to event-driven
intelligence, without replacing existing cameras."_ It is not a headline, and as a standalone
sentence it is not well formed. It is the second half of a thought the eyebrow began.

The diagnostic: remove the eyebrow and the sentence reads worse, not better. That dependency
recurs site-wide, so the captions cannot simply be deleted. Every affected heading has to be
rewritten.

Headings are also the site's visual hierarchy, and that hierarchy is a budget. The largest,
boldest elements are what a scanning reader retains. Spending that budget on repetition
(`Technology` above `Technology`, `Factory Automation` above `Factory Automation`) spends it
frivolously. Less at high quality beats more at low quality.

### 3. Numbers are presented without the context that makes them mean anything

The home page opens with four figures: ~500×, ~1000×, <5 lux, and $20B+. To a reader without
prior knowledge these are simply large numbers, and they get skipped.

Three describe measured technical results. The fourth, a $20B machine-vision market size, is
a different kind of claim altogether, with no stated derivation and no relationship to the
other three. Grouping them flattens the distinction between what NuMorph measured and what
NuMorph estimates.

The same pattern appears on the technology page, where `Tested 1×1, 3×3, 5×5, 7×7, 10×10`
is presented as a row of figures. A reader who does not already know what an array
configuration is learns nothing from it.

The proof-of-concept results have the same problem in a more costly place. Presented as a
summary grid, they read as a specification table rather than an argument. The persuasive
form states what was expected, then what was measured, then the difference.

### 4. The central comparison is asserted rather than shown

The frame-based versus event-driven contrast is the most important idea on the site. It is
presented as two columns of coloured text among a row of five cards, so the opposition
between them does not register. They read as two more items in a list.

This is the one place on the site where a diagram would do work prose cannot. The same is
true of the five-step pipeline, currently a numbered list, and of how blocks compose into
arrays, currently carried by illustrative imagery rather than a structural diagram.

### 5. Two navigation systems compete, and in-page links break orientation

On desktop the site presents both a hover-revealed inline menu and a mobile-style hamburger
menu simultaneously. These are alternative conventions, not complementary ones, and running
both leaves a reader unsure which is authoritative.

Inline cross-page links compound this. Following one from the home page lands the reader mid
way down another page with no indication of where they are or how they arrived. A reader
trying to understand the product is instead managing their own location.

The cost is the loss of a controlled sequence. A site should carry a reader through an
argument in an intended order; freedom of movement between fragments is not the same thing.

Two related defects: the solutions cards are clickable with no visual affordance indicating
it, and the in-page section navigation uses pill controls, which by convention are filters.

### 6. The introductory video is at the bottom of the page

The video explains the product and the vision, and does it well. It sits **68% of the way
down the home page**, second from last.

A non-technical reader, an investor for instance, would benefit most from watching it before
encountering the technical copy, since it frames everything that follows. Placed where it is,
most readers will never reach it.

### 7. Key value is buried, and the FAQ is compensating for the pages above it

That ERN-AI requires no change to the hardware stack, and that it detects motion below 5 lux
without infrared, are among the strongest claims available. Both appear near the bottom of
the technology page.

Relatedly, the FAQ answers questions the main pages should answer. An FAQ has a legitimate
role for retrieval and search, but when a reader must go there to learn what the product is,
that indicates the primary pages are not doing their job.

### 8. Test results are reported without a reference range

The proof-of-concept results state what was achieved but not what would be expected
otherwise. A figure alone does not persuade: a blood test result is meaningless without the
reference range beside it, and the same applies here.

The persuasive structure is: these were the inputs, this is what conventional processing
would cost, this is what was measured instead. The material to do this appears to exist
already, and where the underlying claim is public, expressing it against a baseline costs
nothing in disclosure.

## Approach taken

Work proceeded in a deliberate order: establish what each section is _for_, agree that,
then write, then design.

The reason is economic. A disagreement about what a section is for costs a sentence to
resolve while it is still a statement of intent. The same disagreement costs a week once
the page is written and designed around it.

Changes concentrate on the top of the visual hierarchy: headlines, section titles, the
order of sections. These are what a reader takes in when scanning, and they carry
disproportionate weight in whether the rest gets read. Body copy is largely unchanged,
on the assumption that it does its job once the structure around it does.

The home page is written for the broadest audience the site serves, which includes
prospective licensees, investors and journalists alongside technically fluent readers.
That argues for plainer language there than on the technology page, which can assume more.

---

## What changed in the first draft

|                              | Before | After                |
| ---------------------------- | ------ | -------------------- |
| Eyebrow captions             | 24     | 0 on rewritten pages |
| ERN-AI on the home page      | 16     | 4                    |
| Distinct acronyms, home page | 7      | 3                    |
| Em dashes                    | 87     | 0                    |
| Glossary terms               | 20     | 23                   |
| Headings rewritten           |        | 39, across 8 pages   |

Headings were rewritten so that reading them in sequence conveys the argument without the
body copy. The home page now runs: _Intelligence that runs where the sensing happens →
Big AI models were never built for the edge → A honeybee navigates on a million neurons
and microwatts → Use cases → Vision first, then every sensor that moves._

The home headline deliberately does not lead with running on installed cameras. That is
phase one of a three-phase roadmap, and leading with it would position the company as a
retrofit vendor rather than an edge-intelligence company.

CMOS, GPU and IR were added to the glossary, and anchor links added so terms can be
referenced directly.

---

## Decisions required from NuMorph

**The comparison diagram.** The frame-versus-event contrast still needs a real
illustration. The rebuild improves its structure but does not solve it. This is the single
highest-value outstanding item.

**The four parts of the technology.** The technology page would benefit from being split
into a small number of named parts, but those parts are not named anywhere in the source
material, and the existing sub-blocks do not divide cleanly. What the divisions are, and
how many, is an open question.

**The solutions list.** The proposed ordering leads with NO IR Video Camera Operation,
which is currently a capability inside Machine Inspection rather than a section. It also
drops Machine Inspection and Smart Manufacturing, which between them carry the
cost-reduction argument. If they go, that argument needs a home.

**Market positioning language.** The company page states the relationship to chip vendors
directly: ERN-AI runs on their silicon. This reads as confident to a reader who knows the
neuromorphic hardware market and may read as obscure to one who does not.

**The "AI-Lego-Block" name.** LEGO is an actively enforced trademark, and the LEGO Group
has a documented history of objecting to third-party commercial use of the mark, including
in descriptive and metaphorical contexts. Using "AI-Lego-Block" as a product term in
marketing material carries risk that should be assessed by counsel. This audit is not
qualified to judge the exposure, only to flag that it exists before the name is used more
widely.

**Whether Smart Manufacturing and Factory Automation are one section.** To an outside
reader both describe camera infrastructure on a factory floor. They differ in framing, one
operational and one as a capital-project objection, rather than in application. If the
distinction is real to buyers it should be made explicit; if it is not, one section would
carry more weight than two.

**Whether the pages carry bylines at all.** Two pages are attributed to Dr. Srivastava,
two to "the NuMorph AI Team", and four carry none. Bylines are a convention of blogs and
signed commentary, where a named voice of authority is the point. Marketing pages speak in
the organisation's voice, and a byline there tends to read as an artifact rather than a
signal. The first draft removed them from two pages; the remaining two are a decision.

---
