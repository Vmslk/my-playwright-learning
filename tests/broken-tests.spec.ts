
import { test, expect } from "@playwright/test";

test("Login should redirect to inventory", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");   // ← is this the real placeholder?
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory/);

/*
Root cause:   [wrong placeholder "User Name" instead of "Username"]
Fix:          [changed "User Name" to "Username"]
How I verified: 
[ called npx playwright test tests/broken-tests.spec.ts --project=chromium
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log: - waiting for getByPlaceholder('User Name') await page.getByPlaceholder("User Name").fill("standard_user");  
// ← is this the real placeholder?]
*/ 

});


test("Error message on wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByTestId("error")).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"   // ← is this the exact text?
  );
  /*
Root cause:   [wrong error message text "Username and password do not match any user in this service" instead of "Epic sadface: Username and password do not match any user in this service"]
Fix:          [changed the text]
How I verified: [run the test through testing pannel and got the error in the console:

Error: expect(locator).toHaveText(expected) failed
Locator:  getByTestId('error')
Expected: "Username and password do not match"
Received: "Epic sadface: Username and password do not match any user in this service"]
*/

});

test("cart badge appears after adding product", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await page.locator("[data-test=\"add-to-cart-sauce-labs-backpack\"]").click();   // ← something missing here

  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

  // the test passed without await, but I've added it :) 
});