import { test, expect } from "@playwright/test"; 

test.describe('Sauce Demo', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

  });

// 1) Login Test   

test('positive Login data', async ({ page }) => {
await expect(page).toHaveURL(/inventory/);
await expect(page, 'User should be redirected to inventory page after login')
  .toHaveURL(/inventory/); });

// 2) Add to Cart Test

test('Add to Cart', async ({ page }) => {

await expect(page).toHaveURL(/inventory/);
await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

await expect(page.locator(".shopping_cart_badge"), "Cart badge should show 1 after adding a product").toHaveText("1");

});

// 3) Remove from Cart Test

test('Remove from Cart', async ({ page }) => {

await expect(page).toHaveURL(/inventory/);
await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

await expect(
  page.locator(".shopping_cart_badge"),
  "Cart badge should show 1 after adding a product"
).toHaveText("1");

await page.getByTestId("remove-sauce-labs-backpack").click();
await expect(
  page.locator(".shopping_cart_badge"),
  "Cart badge should not be visible after removing product"
).not.toBeVisible();});

});

test.describe('Negative tests', () => {
   test.beforeEach(async ({ page }) => {
    await page.goto("/");});

// 4) Negative Login Test

test('negative Login', async ({ page }) => {

await page.getByPlaceholder("Username").fill("standard_user");
await page.getByPlaceholder("Password").fill("secret");
await page.getByRole("button", { name: "Login" }).click();

  await expect(
  page.getByTestId("error"),
  "Error should appear for wrong credentials"
).toBeVisible();}); 

// 5) Empty Form Validation Test

test.only('Empty form validation', async ({ page }) => {

await page.getByRole("button", { name: "Login" }).click();

  await expect(
  page.getByTestId("error"),
  "Error should appear for empty fields"
).toBeVisible();});

//6 Locked user test

test('locked user test', async ({ page }) => {

await page.getByPlaceholder("Username").fill("locked_out_user");
await page.getByPlaceholder("Password").fill("secret_sauce");
await page.getByRole("button", { name: "Login" }).click();

await expect(page.getByTestId("error")).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."  
  );

});

});


/*
test('locators', async ({ page }) => {
  await page.goto("/");
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

await expect(page).toHaveURL(/inventory/);}); */


//adding a new commen ted line for git practice

//conflict line