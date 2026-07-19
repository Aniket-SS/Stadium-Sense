# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y\axe.spec.ts >> Accessibility: Automated Axe-Core WCAG 2.1 AA Scan >> Marketing Home Page (/) conforms to WCAG 2.1 AA standards
- Location: tests\a11y\axe.spec.ts:5:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 310

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Code Quality</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(1) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Security</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(2) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Efficiency</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(3) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Testing</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(4) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Accessibility</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(5) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fefefe",
+               "contrastRatio": 4.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#707e75",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15\">",
+                 "target": Array [
+                   ".mt-14",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-canvas text-obsidian antialiased selection:bg-pulse/20 selection:text-obsidian\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.22 (foreground color: #707e75, background color: #fefefe, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-medium text-obsidian/60\">Problem Alignment</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-r.last\\:border-r-0.p-2:nth-child(6) > .text-\\[11px\\].text-obsidian\\/60.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1c4227",
+               "contrastRatio": 3.76,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#42a85d",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.76 (foreground color: #42a85d, background color: #1c4227, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"rounded-full bg-pulse/20 px-2.5 py-0.5 text-[10px] font-mono text-pulse\">CONFIDENCE: 96%</span>",
+                 "target": Array [
+                   ".bg-pulse\\/20",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"rounded-3xl bg-obsidian p-8 text-surface shadow-xl\">",
+                 "target": Array [
+                   ".rounded-3xl",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.76 (foreground color: #42a85d, background color: #1c4227, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"rounded-full bg-pulse/20 px-2.5 py-0.5 text-[10px] font-mono text-pulse\">CONFIDENCE: 96%</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-pulse\\/20",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner [ref=e4]:
        - navigation "Main Navigation" [ref=e5]:
          - link "StadiumSense FIFA 2026" [ref=e6] [cursor=pointer]:
            - /url: /
            - generic [ref=e8]: StadiumSense
            - generic [ref=e9]: FIFA 2026
          - generic [ref=e10]:
            - link "Overview" [ref=e11] [cursor=pointer]:
              - /url: /
            - link "Fan Concierge" [ref=e12] [cursor=pointer]:
              - /url: /concierge
            - link "Ops Command" [ref=e13] [cursor=pointer]:
              - /url: /ops
          - generic [ref=e14]:
            - generic [ref=e15]:
              - img [ref=e16]
              - text: Live GenAI Core
            - button "Toggle Persistent Accessibility Mode (Larger text and step-free routing priority)" [ref=e18]:
              - img [ref=e19]
              - generic [ref=e22]: A11y Mode
      - main [ref=e23]:
        - generic [ref=e24]:
          - generic: STADIUMSENSE
          - generic [ref=e25]:
            - generic [ref=e26]:
              - status [ref=e27]:
                - generic [ref=e31]: Live AI Core Active
                - generic [ref=e32]: NYNJ MetLife Stadium
              - generic [ref=e33]:
                - img [ref=e34]
                - generic [ref=e36]: "Crowd Density: 88% Gate B (Mitigating)"
              - generic [ref=e37]:
                - img [ref=e38]
                - generic [ref=e41]: WCAG 2.1 AA Certified
            - heading "Stadiums that think in real time" [level=1] [ref=e42]
            - paragraph [ref=e43]: The GenAI-enabled operations and fan concierge platform for FIFA World Cup 2026. Driven by a single typed LLM reasoning core that optimizes wayfinding, crowd safety, accessibility, transport, and real-time staff decisions.
            - generic [ref=e44]:
              - link "Try the Fan Concierge" [ref=e45] [cursor=pointer]:
                - /url: /concierge
                - generic [ref=e46]: Try the Fan Concierge
                - img [ref=e47]
              - link "Open Ops Dashboard" [ref=e50] [cursor=pointer]:
                - /url: /ops
                - generic [ref=e51]: Open Ops Dashboard
                - img [ref=e52]
            - generic [ref=e55]:
              - generic [ref=e56]:
                - generic [ref=e57]: Code Quality
                - generic [ref=e58]: Strict TS / 0 Any
              - generic [ref=e59]:
                - generic [ref=e60]: Security
                - generic [ref=e61]: Zod Sanitized + Rate Ltd
              - generic [ref=e62]:
                - generic [ref=e63]: Efficiency
                - generic [ref=e64]: Lighthouse ≥90
              - generic [ref=e65]:
                - generic [ref=e66]: Testing
                - generic [ref=e67]: Unit + E2E + A11y
              - generic [ref=e68]:
                - generic [ref=e69]: Accessibility
                - generic [ref=e70]: WCAG 2.1 AA Mode
              - generic [ref=e71]:
                - generic [ref=e72]: Problem Alignment
                - generic [ref=e73]: 8/8 Core Modules
        - generic [ref=e74]:
          - generic [ref=e75]:
            - heading "Engineered for tournament precision" [level=2] [ref=e76]
            - paragraph [ref=e77]: Substance Lab aesthetic combined with functional real-time GenAI operations.
          - generic [ref=e78]:
            - generic [ref=e79]:
              - generic [ref=e80]:
                - img [ref=e82]
                - generic [ref=e84]:
                  - heading "AI Wayfinding & Step-Free Routing" [level=3] [ref=e85]
                  - paragraph [ref=e86]: Reasoned over stadium graph JSON with WCAG accessibility priority.
              - img [ref=e88]
            - generic [ref=e93]:
              - generic [ref=e94]:
                - img [ref=e96]
                - generic [ref=e98]:
                  - heading "Crowd Risk & Flow Intelligence" [level=3] [ref=e99]
                  - paragraph [ref=e100]: Ingests live zone sensors and synthesizes plain-language mitigation.
              - img [ref=e102]
            - generic [ref=e106]:
              - generic [ref=e107]:
                - img [ref=e109]
                - generic [ref=e113]:
                  - heading "Multi-Modal Departure Planner" [level=3] [ref=e114]
                  - paragraph [ref=e115]: Optimizes fan leave time based on kickoff and transit rail congestion.
              - img [ref=e117]
            - generic [ref=e120]:
              - generic [ref=e121]:
                - img [ref=e123]
                - generic [ref=e126]:
                  - heading "Sustainability & ESG Insights" [level=3] [ref=e127]
                  - paragraph [ref=e128]: Live energy, water, and waste tracking with LLM daily conservation digests.
              - img [ref=e130]
        - generic [ref=e133]:
          - generic [ref=e134]:
            - heading "How StadiumSense thinks" [level=2] [ref=e135]
            - paragraph [ref=e136]: A load-bearing AI architecture built for high-concurrency World Cup venues.
          - generic [ref=e137]:
            - generic [ref=e139]:
              - generic [ref=e140]:
                - generic [ref=e141]: 01 / SENSE
                - img [ref=e142]
              - heading "Telemetry Ingestion" [level=3] [ref=e146]
              - paragraph [ref=e147]: Aggregates venue graph nodes, crowd zone occupancy sensors, multi-modal transit congestion, and ESG sustainability metrics into structured JSON feeds.
            - generic [ref=e149]:
              - generic [ref=e150]:
                - generic [ref=e151]: 02 / REASON
                - img [ref=e152]
              - heading "Unified AI Orchestration" [level=3] [ref=e155]
              - paragraph [ref=e156]: All 8 feature modules invoke a single server-side typed endpoint reason(intent, context) validated via Zod schemas and rate limited against abuse.
            - generic [ref=e158]:
              - generic [ref=e159]:
                - generic [ref=e160]: 03 / ACT
                - img [ref=e161]
              - heading "Actionable Operations" [level=3] [ref=e163]
              - paragraph [ref=e164]: Returns step-free highlighted SVG routes, multilingual conversational support, staff SITREPs, and operational decision support in under 500ms.
        - generic [ref=e165]:
          - generic [ref=e166]:
            - heading "Full-Stack Capabilities" [level=2] [ref=e167]
            - paragraph [ref=e168]: Eight integrated GenAI modules optimized for hackathon evaluation.
          - generic [ref=e169]:
            - generic [ref=e170] [cursor=pointer]:
              - generic [ref=e171]:
                - generic [ref=e172]: "01"
                - generic [ref=e173]:
                  - heading "AI Wayfinding & Navigation" [level=3] [ref=e174]
                  - paragraph [ref=e175]: Natural language queries to step-by-step routes highlighted on an interactive SVG map.
              - img [ref=e176]
            - generic [ref=e178] [cursor=pointer]:
              - generic [ref=e179]:
                - generic [ref=e180]: "02"
                - generic [ref=e181]:
                  - heading "Crowd Management Intelligence" [level=3] [ref=e182]
                  - paragraph [ref=e183]: Zone-occupancy classification and plain-language staff mitigation recommendations.
              - img [ref=e184]
            - generic [ref=e186] [cursor=pointer]:
              - generic [ref=e187]:
                - generic [ref=e188]: "03"
                - generic [ref=e189]:
                  - heading "Accessibility Assistant (WCAG 2.1 AA)" [level=3] [ref=e190]
                  - paragraph [ref=e191]: Dedicated step-free routing, sensory-friendly suite info, and assistance-request drafting.
              - img [ref=e192]
            - generic [ref=e194] [cursor=pointer]:
              - generic [ref=e195]:
                - generic [ref=e196]: "04"
                - generic [ref=e197]:
                  - heading "Transportation Planner" [level=3] [ref=e198]
                  - paragraph [ref=e199]: Multi-modal departure optimization blending kickoff schedules and rail congestion data.
              - img [ref=e200]
            - generic [ref=e202] [cursor=pointer]:
              - generic [ref=e203]:
                - generic [ref=e204]: "05"
                - generic [ref=e205]:
                  - heading "Sustainability & ESG Panel" [level=3] [ref=e206]
                  - paragraph [ref=e207]: Live telemetry of water, energy, and waste metrics with AI daily conservation digests.
              - img [ref=e208]
            - generic [ref=e210] [cursor=pointer]:
              - generic [ref=e211]:
                - generic [ref=e212]: "06"
                - generic [ref=e213]:
                  - heading "Multilingual World Cup Concierge" [level=3] [ref=e214]
                  - paragraph [ref=e215]: Auto-detects input language and responds fluently in English, Spanish, Arabic, Hindi, French, and more.
              - img [ref=e216]
            - generic [ref=e218] [cursor=pointer]:
              - generic [ref=e219]:
                - generic [ref=e220]: "07"
                - generic [ref=e221]:
                  - heading "Operational Intelligence Digest" [level=3] [ref=e222]
                  - paragraph [ref=e223]: Synthesizes recent venue incident logs into executive situation reports for match coordinators.
              - img [ref=e224]
            - generic [ref=e226] [cursor=pointer]:
              - generic [ref=e227]:
                - generic [ref=e228]: "08"
                - generic [ref=e229]:
                  - heading "Real-Time Command Decision Support" [level=3] [ref=e230]
                  - paragraph [ref=e231]: Free-text reasoning box answering staff operational questions grounded in live telemetry.
              - img [ref=e232]
        - generic [ref=e235]:
          - generic [ref=e236]:
            - generic [ref=e237]:
              - img [ref=e238]
              - generic [ref=e240]: "LIVE REASONING TRANSCRIPT — INTENT: CROWD_MANAGEMENT"
            - generic [ref=e241]: "CONFIDENCE: 96%"
          - blockquote [ref=e242]:
            - generic [ref=e243]: "HEADLINE: Priority Crowd Mitigation — Gate B East Transit Plaza"
            - generic [ref=e244]: "SUMMARY: Gate B is experiencing elevated density (88% occupancy, 420 pax/min). Recommend immediately diverting 35% of arriving rail passengers to Gate A North Plaza Express portals."
            - generic [ref=e245]:
              - text: "RECOMMENDED ACTION ITEMS:"
              - generic [ref=e246]:
                - img [ref=e247]
                - generic [ref=e250]: Activate variable message signage directing fans to Gate A.
              - generic [ref=e251]:
                - img [ref=e252]
                - generic [ref=e255]: Deploy 6 Volunteer Stewards at Meadowlands transit exit.
              - generic [ref=e256]:
                - img [ref=e257]
                - generic [ref=e260]: Open 2 reserve express turnstiles at North Plaza.
    - contentinfo [ref=e261]:
      - generic [ref=e262]:
        - generic [ref=e263]:
          - img [ref=e264]
          - generic [ref=e266]:
            - strong [ref=e267]: "Simulated Telemetry Disclosure:"
            - text: All sensor feeds, crowd densities, and transit schedules are seeded mock datasets serving real-time GenAI reasoning.
        - generic [ref=e268]:
          - generic [ref=e269]: StadiumSense — PromptWars Challenge 4
          - link "GitHub Repo (< 10 MB)" [ref=e270] [cursor=pointer]:
            - /url: https://github.com
            - img [ref=e271]
            - generic [ref=e273]: GitHub Repo (< 10 MB)
  - alert [ref=e274]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test.describe('Accessibility: Automated Axe-Core WCAG 2.1 AA Scan', () => {
  5  |   test('Marketing Home Page (/) conforms to WCAG 2.1 AA standards', async ({ page }) => {
  6  |     await page.goto('/');
  7  |     const accessibilityScanResults = await new AxeBuilder({ page })
  8  |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  9  |       .analyze();
  10 | 
> 11 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  12 |   });
  13 | 
  14 |   test('Concierge & Wayfinding Page (/concierge) conforms to WCAG 2.1 AA standards', async ({ page }) => {
  15 |     await page.goto('/concierge');
  16 |     const accessibilityScanResults = await new AxeBuilder({ page })
  17 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  18 |       .analyze();
  19 | 
  20 |     expect(accessibilityScanResults.violations).toEqual([]);
  21 |   });
  22 | 
  23 |   test('Ops Command Dashboard (/ops) conforms to WCAG 2.1 AA standards', async ({ page }) => {
  24 |     await page.goto('/ops');
  25 |     const accessibilityScanResults = await new AxeBuilder({ page })
  26 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  27 |       .analyze();
  28 | 
  29 |     expect(accessibilityScanResults.violations).toEqual([]);
  30 |   });
  31 | });
  32 | 
```