import { test, expect } from '@playwright/test';

test.describe('Cobait Bangladesh - UI & Link Assessment', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify section title typo corrections', async ({ page }) => {

    const sectionHeader = page.locator('h4', {
      hasText: 'Useful Link'
    });

    // Bug validation
    await expect(sectionHeader).toContainText('Useful Links');
  });

});