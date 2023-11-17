const { test, expect } = require("@playwright/test");

test("Bypasslogin", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  test.setTimeout(1200000);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("divyanshu75@gmail.com");
  await page.locator("#userPassword").fill("P~nN3IH!KSkg(`Gs");
  await page.locator("#login").click();
  await page.locator(".btn.w-10.rounded").first().click(); // add one product
  await page.locator("button[routerlink*='cart']").click(); // go to cart
  await page.pause();
  await context.storageState({ path: "bypassloginstate.json" });
});
