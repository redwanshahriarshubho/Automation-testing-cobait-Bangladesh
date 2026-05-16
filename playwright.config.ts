import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  // Dual-reporter registration setup
  reporter: [
    ['html', { outputFolder: 'playwright-html-report', open: 'never' }],
    ['allure-playwright', { detail: true, outputFolder: 'allure-results' }]
  ],

  use: {
    baseURL: 'https://cobaitbangladesh.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});