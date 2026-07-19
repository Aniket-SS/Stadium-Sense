import { test, expect } from '@playwright/test';

test.describe('E2E: Critical Path Wayfinding & Concierge Flow', () => {
  test('User selects origin & destination and calculates step-free AI route', async ({ page }) => {
    await page.goto('/concierge');

    // Verify header and wayfinding panel loaded
    await expect(page.locator('h1')).toContainText('Fan Concierge & Wayfinding');

    // Select start and destination
    await page.selectOption('#source-select', 'gate-a');
    await page.selectOption('#target-select', 'section-101');

    // Click calculate route
    await page.click('button:has-text("Calculate AI Route")');

    // Verify step-by-step directions appear
    await expect(page.locator('text=Step-by-Step Directions')).toBeVisible();
    await expect(page.locator('ol li')).toHaveCount(3);
  });
});
