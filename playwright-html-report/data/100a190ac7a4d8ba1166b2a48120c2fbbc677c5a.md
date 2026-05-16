# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: footer.spec.ts >> Cobait Bangladesh - UI & Link Assessment >> Verify section title typo corrections
- Location: tests\footer.spec.ts:21:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('text="Useful Link"')
Timeout: 5000ms
- Expected  - 1
+ Received  + 2

- Useful Links
+ Useful Link
+

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('text="Useful Link"')
    13 × locator resolved to <h4 class="elementor-heading-title elementor-size-default">Useful Link↵</h4>
       - unexpected value "Useful Link
"

```

```yaml
- heading "Useful Link" [level=4]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Cobait Bangladesh - UI & Link Assessment', () => {
  4  |   
  5  |   test.beforeEach(async ({ page }) => {
  6  |     await page.goto('/about/');
  7  |     await page.waitForLoadState('networkidle');
  8  |   });
  9  | 
  10 |   test('Verify social media anchor links are non-empty', async ({ page }) => {
  11 |     const socialLinks = page.locator('footer a[href*="facebook"], footer a[href*="linkedin"], footer a[href*="instagram"]');
  12 |     const count = await socialLinks.count();
  13 |     
  14 |     for (let i = 0; i < count; i++) {
  15 |       const href = await socialLinks.nth(i).getAttribute('href');
  16 |       expect(href).not.toBeNull();
  17 |       expect(href?.trim()).not.toBe('#');
  18 |     }
  19 |   });
  20 | 
  21 |   test('Verify section title typo corrections', async ({ page }) => {
  22 |     const sectionHeader = page.locator('text="Useful Link"');
  23 |     // Intentional assertion check mapping back to your bug discovery template
> 24 |     await expect(sectionHeader).toHaveText('Useful Links');
     |                                 ^ Error: expect(locator).toHaveText(expected) failed
  25 |   });
  26 | });
```