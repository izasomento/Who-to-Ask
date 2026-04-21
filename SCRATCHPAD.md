# SCRATCHPAD

## Current State

**Status**: IN PROGRESS
**Active milestone**: M3 — Polish & Finalize
**Last session**: 2026-04-20

**Next actions**:
- [ ] User testing with target audience (first-gen/international)
- [ ] Accessibility audit (WCAG AA)
- [ ] Final content review for the new 'How it Works' page

**Open questions**:
- [None]

---

## Milestones

### M0 — Project Initialization

- [x] Fill in GEMINI.md project identity section
- [x] **Define AI Guardrails**: Documented in `DECISIONS.md`.
- [x] Define milestones M1–M3 below
- [ ] Push initial commit to GitHub (User action)
- [ ] Enable GitHub Pages (User action)
- [ ] Confirm live URL (User action)

### M1 — Core Questionnaire & Logic

Build the core questionnaire and scoring logic so users can evaluate whether someone is a strong recommender choice.

**Values checklist**:
- [x] **Learning**: Deepens understanding of what makes a strong recommender.
- [x] **Agency**: Provides reflection prompts for student decision-making.
- [x] **Privacy**: No PII stored or transmitted.
- [x] **Transparency**: AI use disclosed.

**Acceptance criteria**:
- [x] Home page with clear purpose and "Start" button.
- [x] 8-question guided questionnaire.
- [x] Working scoring logic based on user answers.

### M2 — Results & Guidance

Create the results page with personalized guidance, next steps, and a checklist of what to prepare before asking.

**Values checklist**:
- [x] Learning
- [x] Agency
- [x] Privacy
- [x] Transparency

**Acceptance criteria**:
- [x] Results page showing one of three categories (Strong Choice, Could Work, Not the Best Fit).
- [x] Personalized explanation and next steps.
- [x] Checklist of materials to prepare.

### M3 — Polish & Finalize

Polish the design, improve responsiveness/accessibility, and finalize the content and README.

**Values checklist**:
- [x] Learning
- [x] Agency
- [x] Privacy
- [x] Transparency

**Acceptance criteria**:
- [x] Mobile-responsive and accessible UI.
- [x] Clean, student-friendly visual style.
- [x] Complete README and finalized app content.
- [x] **Comparison Feature**: Users can name, save, and rank multiple recommenders in a session.
- [x] **Structured Decision Support**: Transparent scoring breakdown and explicit model assumptions.
- [x] **Mission-Aligned Framing**: Content focused on educational access and supporting underserved students.

---

## Session Log

### 2026-04-20 (Afternoon)

**State found**: Multi-recommender comparison is functional.
**Action taken**: Implemented the "Edit" flow for evaluated recommenders.
- Added `editingId` to app state to track update operations.
- Modified data structure to store raw question responses for re-populating the form.
- Added "Edit" action to the ranking list for each recommender.
- Updated Questionnaire UI with "Editing Mode" badge and context-aware button text.
- Ensured "Add Another" actions reset the edit state to prevent state carry-over.
**State left**: Edit flow complete and integrated into the comparison feature.

### 2026-04-20 (Night)

**State found**: App has collapsible scoring breakdown on both results and ranking screens.
**Action taken**: Moved the scoring breakdown exclusively to the final comparison/ranking view.
- Removed "Why this score" toggle and container from `index.html` results section.
- Cleaned up `js/app.js` to remove redundant breakdown rendering in the individual result flow.
- Verified that the breakdown remains fully functional and collapsible within each recommender's detail view in the ranking section.
**State left**: Initial results screen is focused on immediate guidance; strategic breakdown is reserved for the comparison stage.

**Disclosure**:
**AI Tool(s) Used**: Gemini CLI
**Purpose**: UI/UX optimization.
**Modifications & Verification**: Confirmed individual results screen is clean. Confirmed ranking view still allows "Why this score" inspection.
**Learning Reflection**: Good product design sometimes means withholding information until the moment it is most useful for decision-making (comparison) to avoid overwhelming the user during the initial evaluation.

### 2026-04-20 (Late Night)

**State found**: App has collapsible methodology on the home page.
**Action taken**: Simplified the homepage by moving deep explanatory content to a separate page.
- Created `how-it-works.html` with full methodology, pillars, and assumptions content.
- Removed the collapsible methodology section from `index.html`.
- Added a `footer-nav` with links to "How it Works" and "Apply to Minerva" (external).
- Refined CSS for footer navigation and separator.
- Cleaned up `js/app.js` by removing now-unused methodology toggle logic.
**State left**: Homepage is extremely focused and high-conversion; deeper methodology is accessible via footer.

**Disclosure**:
**AI Tool(s) Used**: Gemini CLI
**Purpose**: Information architecture and multi-page reorganization.
**Modifications & Verification**: Verified internal link between pages. Verified external link opens in new tab.
**Learning Reflection**: Progressive disclosure (moving secondary content to subpages) is a powerful way to maintain a "mission-critical" focus on the primary user journey while still providing depth for those who seek it.
