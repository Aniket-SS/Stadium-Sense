import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility: Automated Axe-Core WCAG 2.1 AA Scan', () => {
  test('Marketing Home Page (/) conforms to WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Concierge & Wayfinding Page (/concierge) conforms to WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('/concierge');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Ops Command Dashboard (/ops) conforms to WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('/ops');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
