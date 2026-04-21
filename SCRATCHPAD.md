# SCRATCHPAD

## Current State

**Status**: IN PROGRESS
**Active milestone**: M3 — Polish & Finalize
**Last session**: 2026-04-20

**Next actions**:
- [ ] User testing with target audience (first-gen/international)
- [ ] Accessibility audit (WCAG AA)

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

### 2026-04-20 (Evening)

**State found**: App is functional with multi-recommender comparison.
**Action taken**: Strengthened project framing and transparent decision support.
- Updated `index.html` (Home) with "How the model works" and "Assumptions & limits" sections.
- Implemented `Scoring Breakdown` in `js/app.js` and UI to show factors behind every score.
- Rewrote `README.md` to frame the tool as a structured decision-support aid for educational access.
- Updated homepage copy to specifically address students with limited guidance access.
- Refined CSS for info blocks and scoring breakdown cards.
**State left**: Project is now a mission-aligned, transparent decision-support tool.

**Disclosure**:
**AI Tool(s) Used**: Gemini CLI
**Purpose**: Content strategy, UI refinement, and README rewrite.
**Modifications & Verification**: Verified that scoring breakdown correctly reflects `js/questions.js` logic.
**Learning Reflection**: Product thinking in education means moving from "just a quiz" to "information equity" by making the "hidden curriculum" visible through transparency.
