# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y\axe.spec.ts >> Accessibility: Automated Axe-Core WCAG 2.1 AA Scan >> Ops Command Dashboard (/ops) conforms to WCAG 2.1 AA standards
- Location: tests\a11y\axe.spec.ts:23:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 324

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
+               "bgColor": "#1c4227",
+               "contrastRatio": 3.76,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#42a85d",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.76 (foreground color: #42a85d, background color: #1c4227, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"rounded-full bg-pulse/20 px-3 py-1 text-xs font-mono text-pulse\">Command Access Active</span>",
+                 "target": Array [
+                   ".bg-pulse\\/20",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"rounded-3xl bg-obsidian p-6 sm:p-8 text-surface shadow-xl\">",
+                 "target": Array [
+                   ".bg-obsidian",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.76 (foreground color: #42a85d, background color: #1c4227, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"rounded-full bg-pulse/20 px-3 py-1 text-xs font-mono text-pulse\">Command Access Active</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-pulse\\/20",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10 flex items-center justify-between\">",
+                 "target": Array [
+                   ".bg-surface.rounded-3xl.p-6:nth-child(2) > div > .space-y-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Next departures: <!-- -->3, 9, 15<!-- --> mins</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(1) > div > .mt-0\\.5.text-obsidian\\/60.text-\\[11px\\] > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10 flex items-center justify-between\">",
+                 "target": Array [
+                   ".bg-surface.rounded-3xl.p-6:nth-child(2) > div > .space-y-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Next departures: <!-- -->2, 6, 10, 14<!-- --> mins</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(2) > div > .mt-0\\.5.text-obsidian\\/60.text-\\[11px\\] > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10 flex items-center justify-between\">",
+                 "target": Array [
+                   ".bg-surface.rounded-3xl.p-6:nth-child(2) > div > .space-y-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Next departures: <!-- -->8, 18, 28<!-- --> mins</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(3) > div > .mt-0\\.5.text-obsidian\\/60.text-\\[11px\\] > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10\">",
+                 "target": Array [
+                   ".grid-cols-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Water</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(1) > .mb-1.gap-1\\.5.text-obsidian\\/60 > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10\">",
+                 "target": Array [
+                   ".grid-cols-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Solar Offset</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(2) > .mb-1.gap-1\\.5.text-obsidian\\/60 > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfaf7",
+               "contrastRatio": 4.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f7c72",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-xl bg-canvas p-3 border border-[#1E4D33]/10\">",
+                 "target": Array [
+                   ".grid-cols-3 > .p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Diverted</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.rounded-xl.border-\\[\\#1E4D33\\]\\/10:nth-child(3) > .mb-1.gap-1\\.5.text-obsidian\\/60 > span",
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
+   Object {
+     "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
+     "help": "Scrollable region must have keyboard access",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/scrollable-region-focusable?application=playwright",
+     "id": "scrollable-region-focusable",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "focusable-content",
+             "impact": "serious",
+             "message": "Element should have focusable content",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "focusable-element",
+             "impact": "serious",
+             "message": "Element should be focusable",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element should have focusable content
+   Element should be focusable",
+         "html": "<div class=\"space-y-2.5 max-h-44 overflow-y-auto pr-1\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-2\\.5",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag211",
+       "wcag213",
+       "TTv5",
+       "TT4.a",
+       "EN-301-549",
+       "EN-9.2.1.1",
+       "EN-9.2.1.3",
+       "RGAAv4",
+       "RGAA-7.3.2",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - navigation "Main Navigation" [ref=e4]:
        - link "StadiumSense FIFA 2026" [ref=e5] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]: StadiumSense
          - generic [ref=e8]: FIFA 2026
        - generic [ref=e9]:
          - link "Overview" [ref=e10] [cursor=pointer]:
            - /url: /
          - link "Fan Concierge" [ref=e11] [cursor=pointer]:
            - /url: /concierge
          - link "Ops Command" [ref=e12] [cursor=pointer]:
            - /url: /ops
        - generic [ref=e13]:
          - generic [ref=e14]:
            - img [ref=e15]
            - text: Live GenAI Core
          - button "Toggle Persistent Accessibility Mode (Larger text and step-free routing priority)" [ref=e17]:
            - img [ref=e18]
            - generic [ref=e21]: A11y Mode
    - main [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - img [ref=e26]
            - generic [ref=e28]: Real-Time Command Telemetry
          - heading "Tournament Operations Command" [level=1] [ref=e29]
          - paragraph [ref=e30]: "FIFA World Cup 2026 Final: Match 104 · Expected Attendance: 82,500"
        - generic [ref=e31]:
          - img [ref=e32]
          - generic [ref=e35]: Evaluator Demo Mode:Staff Role Unlocked
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - img [ref=e39]
            - generic [ref=e41]:
              - heading "Ask Ops AI — Real-Time Decision Support" [level=2] [ref=e42]
              - paragraph [ref=e43]: Grounded in current crowd, transit, weather, and venue telemetry
          - generic [ref=e44]: Command Access Active
        - generic [ref=e45]:
          - button "Should we open overflow parking lot C2 to relieve rail congestion?" [ref=e46]
          - button "How should we balance turnstile queues between Gate B and Gate A?" [ref=e47]
          - button "Recommend staff marshal deployment for post-match departure." [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]: Ask Ops AI Question
          - textbox "Ask Ops AI Question" [ref=e51]:
            - /placeholder: Ask free-text strategic question (e.g. Should we open overflow parking?)...
          - button "Reason" [disabled] [ref=e52]:
            - img [ref=e53]
            - generic [ref=e56]: Reason
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - generic [ref=e61]:
                - img [ref=e62]
                - heading "Crowd Management Intelligence" [level=3] [ref=e67]
              - generic [ref=e68]: 1 High Risk Zone
            - generic [ref=e69]:
              - generic [ref=e71]:
                - generic [ref=e72]: Gate B East Transit Hub Plaza
                - generic [ref=e73]: 88% (420 pax/min)
              - generic [ref=e77]:
                - generic [ref=e78]: Gate A North Plaza Express
                - generic [ref=e79]: 42% (310 pax/min)
              - generic [ref=e83]:
                - generic [ref=e84]: South Concourse Lower Bowl Ring
                - generic [ref=e85]: 67% (290 pax/min)
              - generic [ref=e89]:
                - generic [ref=e90]: Gate D West Accessible & VIP Portal
                - generic [ref=e91]: 28% (85 pax/min)
          - button "Generate AI Crowd Mitigation Strategy" [ref=e94]:
            - img [ref=e95]
            - generic [ref=e97]: Generate AI Crowd Mitigation Strategy
        - generic [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e100]:
              - generic [ref=e101]:
                - img [ref=e102]
                - heading "Transportation & Departure Planner" [level=3] [ref=e106]
              - generic [ref=e107]: Kickoff 20:00
            - generic [ref=e108]:
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - generic [ref=e111]: Secaucus Meadowlands Express Rail
                  - generic [ref=e112]:
                    - img [ref=e113]
                    - generic [ref=e116]: "Next departures: 3, 9, 15 mins"
                - generic [ref=e117]: 92% Load
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Zero-Emission Fan Shuttle Route 4
                  - generic [ref=e121]:
                    - img [ref=e122]
                    - generic [ref=e125]: "Next departures: 2, 6, 10, 14 mins"
                - generic [ref=e126]: 45% Load
              - generic [ref=e127]:
                - generic [ref=e128]:
                  - generic [ref=e129]: Midtown Direct Transit Bus Line
                  - generic [ref=e130]:
                    - img [ref=e131]
                    - generic [ref=e134]: "Next departures: 8, 18, 28 mins"
                - generic [ref=e135]: 78% Load
          - button "Optimize Multi-Modal Departure Timing" [ref=e136]:
            - img [ref=e137]
            - generic [ref=e141]: Optimize Multi-Modal Departure Timing
        - generic [ref=e142]:
          - generic [ref=e143]:
            - generic [ref=e144]:
              - generic [ref=e145]:
                - img [ref=e146]
                - heading "Sustainability & ESG Telemetry" [level=3] [ref=e149]
              - generic [ref=e150]: Live Sensors
            - generic [ref=e151]:
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - img [ref=e154]
                  - generic [ref=e156]: Water
                - generic [ref=e157]: 185k L
                - generic [ref=e158]: Within target
              - generic [ref=e159]:
                - generic [ref=e160]:
                  - img [ref=e161]
                  - generic [ref=e163]: Solar Offset
                - generic [ref=e164]: 64.5%
                - generic [ref=e165]: Canopy active
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - img [ref=e168]
                  - generic [ref=e175]: Diverted
                - generic [ref=e176]: 88.2%
                - generic [ref=e177]: 1420 kg comp.
          - button "Generate AI Daily ESG Insight" [ref=e178]:
            - img [ref=e179]
            - generic [ref=e182]: Generate AI Daily ESG Insight
        - generic [ref=e183]:
          - generic [ref=e184]:
            - generic [ref=e185]:
              - generic [ref=e186]:
                - img [ref=e187]
                - heading "Operational Intelligence Digest" [level=3] [ref=e190]
              - generic [ref=e191]: 3 Logged Events
            - generic [ref=e192]:
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - generic [ref=e195]:
                    - img [ref=e196]
                    - text: INC-2026-1041 (CROWD)
                  - generic [ref=e198]: active
                - paragraph [ref=e199]: Temporary bottleneck due to ticketing barcode scanner surge; queue extended 45 meters.
              - generic [ref=e200]:
                - generic [ref=e201]:
                  - generic [ref=e202]:
                    - img [ref=e203]
                    - text: INC-2026-1039 (ACCESSIBILITY)
                  - generic [ref=e205]: resolved
                - paragraph [ref=e206]: Wheelchair assistance escort requested for family of 4 arriving from Gate D.
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - img [ref=e210]
                    - text: INC-2026-1035 (TRANSIT)
                  - generic [ref=e212]: mitigated
                - paragraph [ref=e213]: Platform crowd density reached 80%; overflow holding pens activated.
          - button "Generate AI Situation Report (SITREP)" [ref=e214]:
            - img [ref=e215]
            - generic [ref=e218]: Generate AI Situation Report (SITREP)
  - alert [ref=e219]
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
  11 |     expect(accessibilityScanResults.violations).toEqual([]);
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
> 29 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  30 |   });
  31 | });
  32 | 
```