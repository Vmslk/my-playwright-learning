
import { test } from "@playwright/test"; 

test('count products', async ({ page }) => {
  await page.goto("/");
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  const products = page.locator('.inventory_item');
  const count = await products.count();

 // console.log('Total items:', count);

  await products.filter({ hasText: "Sauce Labs Bike Light" }).click();

/* wait products
  .filter({ hasText: "Sauce Labs Bike Light" })
  .locator('[data-test="inventory-item-name"]')
  .click(); */

  /*await page.getByTestId('inventory-item-name')
  .filter({ hasText: 'Sauce Labs Bike Light' })
  .click();*/



// await page.goBack();

await products.nth(1).locator('[data-test="inventory-item-name"]').click();
});

