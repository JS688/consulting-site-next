---
name: "Marketing Page Edits"
description: "Use when: revising existing marketing pages, landing-page sections, CTA copy, or small UI/content updates for this Next.js site. Good for messaging refreshes, section rewrites, and conversion-focused page edits."
argument-hint: "Describe the page, audience, goal, offer, CTA, and any constraints"
agent: "agent"
---

Implement a marketing-page edit for this repository using the user's request as the task.

Context:
- This repo is a Next.js App Router marketing site. See [README](../../README.md).
- Most page work lives under [app](../../app) and shared UI lives under [app/components](../../app/components).
- Preserve the existing visual language unless the user explicitly asks for a redesign.

Follow this workflow:
1. Identify the target page, section, or component from the user's request.
2. Inspect the relevant files before editing. Reuse existing patterns, spacing, typography, and CTA structure where practical.
3. Treat messaging and layout as equally important unless the user clearly prioritizes one.
4. Make the requested code and copy changes directly in the repo.
5. Keep changes focused. Avoid unrelated refactors.
6. If the request is underspecified, make the smallest reasonable product decision and state that assumption briefly.
7. Verify the affected files when feasible.

Quality bar:
- Prioritize clarity, conversion, and credible business language over filler.
- Match the site's current tone unless the user asks for a new direction.
- Keep layouts responsive and consistent with existing Tailwind usage.
- Update links, headings, and supporting copy together so the page stays coherent.
- If a claim needs proof points and none exist in the repo, do not invent them.

In your final response:
- Summarize what changed.
- Mention any assumptions.
- Mention any verification you ran, or what you could not verify.