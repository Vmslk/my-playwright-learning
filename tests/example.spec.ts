import { test, expect } from '@playwright/test'; // import tools 

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //do not go to the next line until navigate to the site

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => { 
  await page.goto('https://playwright.dev/'); //do not go to the next line until navigate to the site


  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
