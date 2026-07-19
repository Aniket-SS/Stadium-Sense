# Product Requirements Document
## Smart Stadiums & Tournament Operations — GenAI Platform

## 1. Context & Judging Alignment

The submission is scored by an AI evaluator against six fixed parameters. Every design and engineering decision in this PRD is traced back to one of these, because that traceability is itself what the evaluator rewards.

| Parameter | What the evaluator is actually checking | How this PRD addresses it |
|---|---|---|
| **Problem Statement Alignment** | Does the solution cover navigation, crowd management, accessibility, transportation, sustainability, multilingual assistance, operational intelligence, and real-time decision support — and is GenAI *load-bearing*, not decorative? | §4 defines 8 feature modules, one per required capability, each with a genuine LLM call in the critical path |
| **Code Quality** | Clean architecture, consistent naming, typed code, no dead code, documented | §7 tech stack, §8 repo structure, §9 coding standards |
| **Security** | No leaked secrets, input validation, auth on write paths, dependency hygiene | §10 |
| **Efficiency** | Bundle size, API latency, caching, avoids unnecessary LLM calls | §11 |
| **Testing** | Automated tests exist and are meaningful, not just present | §12 |
| **Accessibility** | WCAG 2.1 AA, keyboard nav, screen reader support, reduced motion | §13 |

**Design mandate:** the public-facing site must implement the attached `design.md` design system ("Substance Lab") and follow the structural pattern of the attached HTML reference (capsule nav, cinematic hero, project-panel reel, method grid, capability list, proof section, contact) — repurposed for stadium-operations content rather than a design studio's portfolio.

---

## 2. One-Line Pitch

**StadiumSense** — an AI operations layer for FIFA World Cup 2026 venues that gives fans a multilingual GenAI concierge for wayfinding, accessibility and transport, and gives organizers a real-time command view of crowd density, incidents, and sustainability metrics, all driven by a single LLM reasoning core.

---

## 3. Users & Jobs-to-be-Done

| Persona | Job to be done | Primary surface |
|---|---|---|
| **Fan (in-stadium)** | "Get me to my seat / the nearest accessible restroom / a bus, in my language, right now." | Concierge chat widget + mobile-first wayfinding view |
| **Fan (pre-arrival)** | "Tell me the best way to arrive and when to leave to avoid crowds." | Transport planner panel |
| **Accessibility user** | "Tell me a step-free route and confirm assistance is booked." | Accessibility mode toggle, screen-reader-first flows |
| **Volunteer / venue staff** | "Where are the current pressure points, and what should I do about them?" | Ops dashboard with AI-generated recommendations |
| **Tournament organizer** | "Give me a real-time operational summary I can act on and report upward." | Command center view with AI incident/operations digest |

---

## 4. Feature Modules (maps 1:1 to the challenge brief's required capabilities)

Each module must make a real call to the LLM reasoning core (not a static lookup) so the "GenAI-enabled" and "real-time decision support" criteria are unambiguously met.

1. **AI Wayfinding & Navigation** — natural-language "how do I get to Gate C" → step-by-step route reasoned over a venue graph (JSON graph of gates/zones/amenities), returned as text + highlighted path on an SVG stadium map.
2. **Crowd Management Intelligence** — ingests simulated zone occupancy feed (mocked sensor data, since real sensors are out of scope) → LLM classifies risk level per zone and drafts a plain-language mitigation recommendation ("reroute Gate B queue via Concourse 2").
3. **Accessibility Assistant** — dedicated flow: step-free routing, sensory-friendly zone info, assistance-request drafting, all screen-reader optimized; toggled via a persistent accessibility mode, not buried in a menu.
4. **Transportation Planner** — given kickoff time + user location, LLM composes a departure-time recommendation blending transit options and historical congestion patterns (mocked dataset).
5. **Sustainability Panel** — live-style dashboard of water/energy/waste metrics (seeded mock data) with an LLM-generated daily sustainability insight/summary.
6. **Multilingual Concierge** — single chat interface, auto-detects input language, responds in kind; minimum supported set: English, Spanish, Arabic, Hindi, French (World Cup host/audience languages).
7. **Operational Intelligence Digest** — for staff/organizer view: LLM synthesizes the last N minutes of mock event/incident logs into a structured situation report.
8. **Real-Time Decision Support** — a single "Ask Ops AI" box on the command center that takes a free-text staff question ("should we open overflow parking?") and returns a reasoned recommendation grounded in the current mock operational state (crowd + transport + weather).

**Explicitly out of scope for this submission** (state this in the README so alignment reviewers see intentional scoping, not an omission): live camera/CV crowd counting, real IoT sensor integration, payment processing, native mobile app. Mock/seeded data stands in for live feeds, clearly labeled as such in the UI.

---

## 5. Information Architecture (site map, following the reference HTML's structural rhythm)

| Reference section | Repurposed for StadiumSense |
|---|---|
| Fixed capsule nav | Nav: Concierge · Live Ops · Accessibility · About |
| Hero (video/parallax + word-reveal headline) | Hero: "Stadiums that think in real time" + live-style status strip (crowd level, next kickoff, weather) instead of decorative video |
| Project reel (panels 01–04) | Feature showcase: Wayfinding / Crowd Intelligence / Transport / Sustainability, each a panel with a short demo GIF or animated SVG instead of stock video |
| Studio Method (3-column grid) | "How it works": Sense → Reason → Act, mapped to data ingestion → LLM reasoning → recommendation surfaced |
| Capabilities list (hover rows) | The 8 modules from §4, listed as rows with cursor-preview mini visualizations |
| Proof / quote block | Judging-parameter scorecard or a "sample AI recommendation" transcript in place of a testimonial |
| Contact form | Replaced with a working **live demo entry point**: "Try the Concierge" / "Open Ops Dashboard" — this is the functional core, not a lead-gen form |
| Footer | Standard, with GitHub link, and explicit mock-data disclosure |

This keeps the aesthetic system intact while making the content and the primary CTA task-real rather than portfolio-decorative — important because a marketing-only site would score poorly on Problem Statement Alignment no matter how well it follows `design.md`.

---

## 6. Design System Application (from `design.md`)

- **Palette:** background `#FBFAF7`, text `#12281A`, brand `#1E4D33`, accent `#42A85D` used specifically for AI-active/live states (pulsing dot on live crowd data, active chat indicator) — this reuses the doc's own description of accent green as a "digital pulse."
- **Typography:** Geist/Space Grotesk for structural headings at font-weight 300, `-0.05em` tracking; Instrument Serif italic for exactly one emphasized word per major heading (e.g., "Stadiums that think in *real time*"); Inter for body and all AI-generated text output (readability matters most here since it's live-generated content).
- **Components to reuse verbatim:** capsule nav, capsule primary button, project-card panel (16:10, 16px radius, gradient overlay), capability-row hover pattern.
- **Components to add (not in reference, needed for function):** chat bubble component, status-pulse badge, data card (for crowd/sustainability metrics), route-step list, language switcher pill — all built using the existing spacing/rounded/color tokens so they feel native to the system rather than bolted on.
- **Motion:** keep `reveal_y` / `reveal_blur` scroll reveals and word-stagger headline animation; keep drift shapes in the hero but reduce to 2 (cost vs. payoff at low opacity); **must** respect `prefers-reduced-motion` exactly as already implemented in the reference HTML's CSS block — reuse that block as-is.

---

## 7. Technical Architecture

**Stack**
- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS, matching the design tokens above as a `tailwind.config` theme extension (not inline magic-number classes)
- **AI layer:** single server-side reasoning service wrapping one LLM provider (OpenRouter or direct Anthropic/OpenAI API — consistent with the OpenRouter pattern already used in AuditOS AI), with **one shared prompt-orchestration module** so all 8 feature modules call through the same typed interface (`reason(intent, context): Promise<Recommendation>`), not 8 separate ad-hoc fetches
- **Data:** static/seeded JSON for venue graph, mock sensor feed, mock transport data — served from an API route so the AI layer treats it like a real data source (keeps architecture honest and swappable for real sensors later)
- **State:** React Server Components for static content, client components only where interaction is required (chat, dashboard)
- **Deployment:** Vercel (or equivalent) with environment variables for API keys — never committed

**Why this matters for score:** a single orchestration module, typed end-to-end, with a clean seam between "mock data source" and "AI reasoning" is what a code-quality reviewer (human or AI) reads as intentional architecture rather than a stitched-together demo.

---

## 8. Repository Structure

```
/app
  /(marketing)          # hero, features, method, capabilities, proof — per §5
  /concierge            # fan-facing chat + wayfinding UI
  /ops                  # staff/organizer dashboard
  /api
    /reason             # POST — single entry point into the AI orchestration module
    /venue-graph        # GET — mock wayfinding data
    /ops-feed           # GET — mock crowd/incident/sustainability data
/lib
  /ai                   # orchestration module, prompt templates, provider client
  /data                 # seeded JSON + typed loaders
  /design               # design tokens mirrored from design.md as TS constants
/components              # capsule-nav, project-panel, capability-row, chat-bubble, data-card...
/tests
  /unit
  /integration
  /a11y
README.md                # problem statement recap, architecture diagram, mock-data disclosure, setup steps
```

Keep the repo lean (media as lightweight SVG/CSS animation rather than stock video, per the 10 MB submission limit — this also directly improves the Efficiency score).

---

## 9. Coding Standards (Code Quality)

- TypeScript strict mode on; no `any` in `/lib/ai`
- ESLint + Prettier, enforced via a pre-commit hook (document this in README even if CI isn't wired — shows rigor)
- One component = one responsibility; no page-level files over ~200 lines — extract
- All AI prompt templates live in `/lib/ai/prompts/*.ts` as named, documented functions — never inline strings scattered across components
- Meaningful commit history (avoid a single "final submission" commit — evaluators and humans both read commit history as a quality signal)

---

## 10. Security Requirements

- API keys read only from server-side environment variables, never exposed to the client bundle
- All `/api/*` routes validate and sanitize input (zod schemas) before constructing prompts — prevents prompt injection from free-text fields (chat, ops question box) leaking system instructions or corrupting output
- Rate limiting on `/api/reason` (simple in-memory or edge-based token bucket) to prevent abuse and control API cost
- No use of `dangerouslySetInnerHTML` for AI-generated text — render as plain text/markdown through a sanitizing renderer
- Dependencies kept minimal and current; document a `npm audit` pass in the README
- No hardcoded demo/bypass credentials anywhere in the repo (this is a direct, deliberate contrast to known gaps flagged in your SkillForge LMS work — carry that lesson here from the start)

---

## 11. Efficiency Requirements

- Lighthouse performance ≥ 90 on the marketing pages
- Cache venue-graph and mock-feed responses (static JSON, safe to cache aggressively)
- Debounce/throttle chat input; stream LLM responses token-by-token rather than waiting for full completion, both for perceived speed and for a more impressive live demo
- Avoid redundant LLM calls: memoize identical wayfinding queries within a session
- Image/video assets replaced with SVG or CSS-driven visuals where the reference HTML used stock video, to keep both bundle size and repo size down

---

## 12. Testing Plan

| Layer | What to test | Tooling |
|---|---|---|
| Unit | Prompt-builder functions produce expected structured input for each of the 8 modules; venue-graph pathfinding logic | Vitest |
| Integration | `/api/reason`, `/api/venue-graph`, `/api/ops-feed` — request validation, error handling, mocked LLM response handling | Vitest + supertest-style route testing |
| Accessibility | Automated axe-core scan on every page; manual keyboard-only pass on concierge and ops dashboard | `@axe-core/playwright` |
| E2E (light) | One critical path: user asks a wayfinding question → gets a route response | Playwright |

Include a `npm test` script and a short "Testing" section in the README showing what's covered — evaluators reward *visible* testing discipline, not just a passing suite.

---

## 13. Accessibility Requirements (WCAG 2.1 AA)

- Full keyboard operability for chat, dashboard, and language switcher
- Visible focus states using the design system's accent green (already specified in `design.md`'s Accessibility section — implement exactly as documented)
- Screen-reader labels on all icon-only controls (nav dots, arrow-up-right CTA icons, etc.)
- Color contrast checked for all text-on-background combinations, especially white-on-video overlays in the hero — since the hero content is now functional status data, not decorative headline text, contrast here needs to be verified, not assumed
- Respect `prefers-reduced-motion` — reuse the reference HTML's existing media query block, which already disables drift/parallax and simplifies reveals correctly
- Dedicated Accessibility Mode (persistent, not a one-time toggle) that simplifies layout, increases text size, and prioritizes step-free routing by default

---

## 14. Build Plan (7-day window)

| Day | Focus |
|---|---|
| 1 | Repo scaffold, design tokens from `design.md`, nav + hero + marketing shell |
| 2 | AI orchestration module (`/lib/ai`) + `/api/reason`, mock data sources |
| 3 | Concierge module: wayfinding + multilingual chat |
| 4 | Accessibility Assistant + Transportation Planner |
| 5 | Ops dashboard: Crowd Intelligence, Sustainability Panel, Operational Digest, Real-Time Decision Support |
| 6 | Testing pass (unit/integration/a11y), Lighthouse + bundle-size pass, security review |
| 7 | README, architecture diagram, demo script, final polish, submission |

---

## 15. Submission Checklist (map directly to rubric before submitting)

- [ ] All 8 required capabilities present and each demonstrably calls the LLM (Problem Statement Alignment)
- [ ] TypeScript strict, linted, documented, clean repo structure (Code Quality)
- [ ] No secrets in repo, input validation on every API route, rate limiting in place (Security)
- [ ] Lighthouse ≥ 90, streaming responses, no redundant calls, repo under 10 MB (Efficiency)
- [ ] Unit + integration + accessibility tests present and passing, documented in README (Testing)
- [ ] axe-core clean, full keyboard nav, reduced-motion respected, dedicated Accessibility Mode (Accessibility)
- [ ] README clearly states what's mocked vs. real, includes architecture diagram and setup steps
- [ ] GitHub repo link is public and under 10 MB, per submission instructions

---

## 16. Open Decisions to Confirm Before Build

- Which LLM provider/key to wire up (OpenRouter, matching your AuditOS AI pattern, is the fastest path given existing familiarity)
- Whether the ops dashboard needs auth/role-gating for this submission, or can stay open given the demo context
- Final language list for the multilingual concierge beyond the five suggested
