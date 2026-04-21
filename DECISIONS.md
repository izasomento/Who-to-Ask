# Architecture Decision Record

> Log every significant technical or design decision here.
> This file is **append-only** — never edit or remove past decisions.
> A decision is significant if a future session would benefit from knowing why it was made.

**Format for each entry:**

```
## Decision NNN — [Short title]
**Date**: YYYY-MM-DD
**Decision**: [What was decided, in one sentence]
**Rationale**: [Why this was the right choice for this project]
**Alternatives considered**: [What else was on the table]
**Trade-offs**: [What we gain, what we give up]

**Guardrails Alignment**:
- **Privacy & IP**: [How does this decision protect student data and clarify ownership?]
- **Disclosure**: [How will this choice be disclosed to users/stakeholders?]
- **Responsibility**: [Who is the human responsible for this decision's impact?]
- **Bias & Trust**: [What measures mitigate bias in this specific choice?]
- **Values**: [Which core Minerva value does this align with?]
```

---

## Decision 001 — Vanilla HTML/CSS/JS, no framework

**Date**: 2026-04-20
**Decision**: Use plain HTML, CSS, and JavaScript with no build step and no framework.
**Rationale**: GitHub Pages hosts static files directly. No framework means no build pipeline, no dependencies to update, no abstraction between the code and the browser. The project remains readable and modifiable by anyone with basic web knowledge, which aligns with the learning-orientation principle of clarity over cleverness.
**Alternatives considered**: React, Vue, Svelte — all require a build step or CDN dependency; Astro — adds complexity for a single-page app
**Trade-offs**: We lose component reuse patterns and reactive state management. We gain zero setup friction, full control over output, and a codebase that doesn't rot when npm packages break.

## Decision 002 — Ethical AI & Data Privacy Guardrails

**Date**: 2026-04-20
**Decision**: Adoption of Minerva University's AI Guardrails for all project development and deployment.
**Rationale**: To protect data privacy (especially student PII), ensure intellectual property integrity, and maintain human-centered learning. This project prioritizes human agency and accountability, treating AI as a "thinking partner" rather than a substitute.
**Specific Guardrails for this Project**:
1. **No Sensitive Data**: The app will not store or process real student records or PII.
2. **Human-in-the-Loop**: All AI-suggested code and content are reviewed by the human developer before commit.
3. **Mandatory Disclosure**: AI use is logged in `SCRATCHPAD.md`.
**Trade-offs**: Development may be slower due to mandatory human review and documentation overhead, but the resulting system is more ethical, secure, and aligned with institutional values.

## Decision 004 — Transparent Scoring and Mission Alignment

**Date**: 2026-04-20
**Decision**: Incorporate a transparent scoring breakdown into the UI (specifically restricted to the comparison/ranking view) and frame the tool explicitly as "structured decision-support" for students with limited access to counseling.
**Rationale**: This moves the project from a simple "quiz" to a more serious tool for "information equity." By showing the "why" behind the scores in the final comparison stage, we educate the user on the underlying factors that admissions officers value when they are most likely to be weighing different options. Restricting it to the ranking view keeps the initial results screen focused and uncluttered.
**Alternatives considered**: Showing the breakdown on both screens (decided against to minimize cognitive load on initial result).
**Trade-offs**: Slightly more complex UI in the ranking views, but higher educational impact during the decision-making phase.

**Guardrails Alignment**:
- **Privacy & IP**: No student data is at risk.
- **Disclosure**: Explicitly discloses the model's assumptions and limits.
- **Responsibility**: The user is empowered to exercise their own judgment on the final score.
- **Bias & Trust**: Transparency reduces the "black box" feel of the algorithm.
- **Values**: Directly aligns with the mission of supporting student agency and educational access.

