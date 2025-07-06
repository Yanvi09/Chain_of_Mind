import { test, expect } from '@playwright/test';

test('shows streamed agent response', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('textarea', 'Build my portfolio');
  await page.click('text=Generate Plan');
  await expect(page.locator('.agent-card')).toHaveCount(1, { timeout: 15000 });
});
