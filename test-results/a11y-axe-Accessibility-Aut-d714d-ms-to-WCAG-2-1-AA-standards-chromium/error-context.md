# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y\axe.spec.ts >> Accessibility: Automated Axe-Core WCAG 2.1 AA Scan >> Concierge & Wayfinding Page (/concierge) conforms to WCAG 2.1 AA standards
- Location: tests\a11y\axe.spec.ts:14:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 183

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
+                 "html": "<div class=\"flex items-center justify-between border-b border-[#1E4D33]/10 bg-canvas px-6 py-4\">",
+                 "target": Array [
+                   ".border-b",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.18 (foreground color: #6f7c72, background color: #fbfaf7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[11px] text-obsidian/60\">Auto-detects language · World Cup 2026</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-obsidian\\/60",
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
+     "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
+     "help": "Interactive controls must not be nested",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright",
+     "id": "nested-interactive",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "no-focusable-content",
+             "impact": "serious",
+             "message": "Element has focusable descendants",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Gate A (North Plaza Entrance) (gate)\">",
+                 "target": Array [
+                   "g:nth-child(5)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Gate B (East Concourse Entrance) (gate)\">",
+                 "target": Array [
+                   "g:nth-child(6)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Gate C (South Gate Express) (gate)\">",
+                 "target": Array [
+                   "g:nth-child(7)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Gate D (West VIP & Accessible Gate) (gate)\">",
+                 "target": Array [
+                   "g:nth-child(8)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"North Main Concourse Level 1 (concourse)\">",
+                 "target": Array [
+                   "g:nth-child(9)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"East Concourse Level 1 (concourse)\">",
+                 "target": Array [
+                   "g:nth-child(10)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"South Concourse Level 1 (concourse)\">",
+                 "target": Array [
+                   "g:nth-child(11)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"West Concourse Level 1 (concourse)\">",
+                 "target": Array [
+                   "g:nth-child(12)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Section 101 Lower Bowl North (seating_zone)\">",
+                 "target": Array [
+                   "g:nth-child(13)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Section 115 East Midfield (seating_zone)\">",
+                 "target": Array [
+                   "g:nth-child(14)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Section 128 Lower Bowl South (seating_zone)\">",
+                 "target": Array [
+                   "g:nth-child(15)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Section 140 West Club & Accessible Tier (seating_zone)\">",
+                 "target": Array [
+                   "g:nth-child(16)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"Sensory Haven Quiet Suite (West) (sensory_room)\">",
+                 "target": Array [
+                   "g:nth-child(17)",
+                 ],
+               },
+               Object {
+                 "html": "<g class=\"cursor-pointer transition-transform duration-200 hover:scale-125\" role=\"button\" tabindex=\"0\" aria-label=\"North Plaza Accessible Family Restroom (restroom)\">",
+                 "target": Array [
+                   "g:nth-child(18)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has focusable descendants",
+         "html": "<svg viewBox=\"0 0 100 100\" class=\"w-full h-auto aspect-[16/10]\" role=\"img\" aria-label=\"NYNJ MetLife Stadium 2026 Interactive Vector Map\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".h-auto",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "wcag2a",
+       "wcag412",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
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
          - img [ref=e25]
          - generic [ref=e28]: AI Fan Operations Layer
        - heading "Fan Concierge & Wayfinding" [level=1] [ref=e29]
        - paragraph [ref=e30]: Get instant multilingual answers, book step-free sensory assistance, or generate custom stadium routes for FIFA World Cup 2026.
      - generic [ref=e32]:
        - img [ref=e34]
        - generic [ref=e40]:
          - heading "WCAG 2.1 AA & Sensory Accommodations" [level=2] [ref=e41]
          - paragraph [ref=e42]: Sensory Haven Quiet Suite is open at West Concourse Level 1. Toggle “A11y Mode” in the top navigation bar for enlarged typography and priority step-free routing.
      - generic [ref=e44]:
        - generic [ref=e45]:
          - generic [ref=e46]:
            - generic [ref=e47]:
              - img [ref=e48]
              - heading "Interactive Stadium Wayfinding" [level=2] [ref=e50]
            - generic [ref=e51]:
              - generic [ref=e52]:
                - generic [ref=e53]: Start Location (Origin)
                - combobox "Start Location (Origin)" [ref=e54]:
                  - option "Gate A (North Plaza Entrance)" [selected]
                  - option "Gate B (East Concourse Entrance)"
                  - option "Gate C (South Gate Express)"
                  - option "Gate D (West VIP & Accessible Gate)"
                  - option "North Main Concourse Level 1"
                  - option "East Concourse Level 1"
                  - option "South Concourse Level 1"
                  - option "West Concourse Level 1"
                  - option "Section 101 Lower Bowl North"
                  - option "Section 115 East Midfield"
                  - option "Section 128 Lower Bowl South"
                  - option "Section 140 West Club & Accessible Tier"
                  - option "Sensory Haven Quiet Suite (West)"
                  - option "North Plaza Accessible Family Restroom"
              - generic [ref=e55]:
                - generic [ref=e56]: Destination (Target Zone / Gate / Amenity)
                - combobox "Destination (Target Zone / Gate / Amenity)" [ref=e57]:
                  - option "Gate A (North Plaza Entrance)"
                  - option "Gate B (East Concourse Entrance)"
                  - option "Gate C (South Gate Express)"
                  - option "Gate D (West VIP & Accessible Gate)"
                  - option "North Main Concourse Level 1"
                  - option "East Concourse Level 1"
                  - option "South Concourse Level 1"
                  - option "West Concourse Level 1"
                  - option "Section 101 Lower Bowl North" [selected]
                  - option "Section 115 East Midfield"
                  - option "Section 128 Lower Bowl South"
                  - option "Section 140 West Club & Accessible Tier"
                  - option "Sensory Haven Quiet Suite (West)"
                  - option "North Plaza Accessible Family Restroom"
              - generic [ref=e58] [cursor=pointer]:
                - checkbox "Require Step-Free Accessible Route (Elevators & Ramps Only)" [ref=e59]
                - img [ref=e60]
                - generic [ref=e66]: Require Step-Free Accessible Route (Elevators & Ramps Only)
          - button "Calculate AI Route" [ref=e67]:
            - generic [ref=e68]: Calculate AI Route
            - img [ref=e69]
        - generic [ref=e72]:
          - img "NYNJ MetLife Stadium 2026 Interactive Vector Map" [ref=e73]:
            - button "Gate A (North Plaza Entrance) (gate)" [ref=e77] [cursor=pointer]:
              - generic: Gate
            - button "Gate B (East Concourse Entrance) (gate)" [ref=e79] [cursor=pointer]:
              - generic: Gate
            - button "Gate C (South Gate Express) (gate)" [ref=e81] [cursor=pointer]:
              - generic: Gate
            - button "Gate D (West VIP & Accessible Gate) (gate)" [ref=e83] [cursor=pointer]:
              - generic: Gate
            - button "North Main Concourse Level 1 (concourse)" [ref=e85] [cursor=pointer]:
              - generic: North
            - button "East Concourse Level 1 (concourse)" [ref=e87] [cursor=pointer]:
              - generic: East
            - button "South Concourse Level 1 (concourse)" [ref=e89] [cursor=pointer]:
              - generic: South
            - button "West Concourse Level 1 (concourse)" [ref=e91] [cursor=pointer]:
              - generic: West
            - button "Section 101 Lower Bowl North (seating_zone)" [ref=e93] [cursor=pointer]:
              - generic: Section
            - button "Section 115 East Midfield (seating_zone)" [ref=e95] [cursor=pointer]:
              - generic: Section
            - button "Section 128 Lower Bowl South (seating_zone)" [ref=e97] [cursor=pointer]:
              - generic: Section
            - button "Section 140 West Club & Accessible Tier (seating_zone)" [ref=e99] [cursor=pointer]:
              - generic: Section
            - button "Sensory Haven Quiet Suite (West) (sensory_room)" [ref=e101] [cursor=pointer]:
              - generic: Sensory
            - button "North Plaza Accessible Family Restroom (restroom)" [ref=e103] [cursor=pointer]:
              - generic: North
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]: Active AI Route
              - generic [ref=e109]: Step-Free Node
            - generic [ref=e111]: Click or tap any node to inspect stadium amenities
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]:
            - img [ref=e117]
            - generic [ref=e120]:
              - heading "Multilingual GenAI Concierge" [level=2] [ref=e121]
              - paragraph [ref=e122]: Auto-detects language · World Cup 2026
          - generic [ref=e123]:
            - img [ref=e124]
            - generic [ref=e127]: Select Language
            - combobox "Language Selector" [ref=e128] [cursor=pointer]:
              - option "English" [selected]
              - option "Español"
              - option "العربية"
              - option "हिन्दी"
              - option "Français"
              - option "Português"
              - option "Deutsch"
              - option "日本語"
        - generic [ref=e130]:
          - img [ref=e132]
          - generic [ref=e135]: Welcome to FIFA World Cup 2026! Ask me for directions, step-free routes, sensory accommodations, or transit info in any language.
        - generic [ref=e136]:
          - button "How do I get from Gate B to Section 115 step-free?" [ref=e137]
          - button "¿Dónde está la sala sensorial tranquila?" [ref=e138]
          - button "أين يقع المصعد المخصص للكراسي المتحركة؟" [ref=e139]
          - button "What time should I leave for transit after kickoff?" [ref=e140]
        - generic [ref=e141]:
          - generic [ref=e142]: Ask concierge
          - textbox "Ask concierge" [ref=e143]:
            - /placeholder: Ask about gates, accessibility, restrooms, or transit...
          - button "Send Message" [disabled] [ref=e144]:
            - img [ref=e145]
  - alert [ref=e148]
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
> 20 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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