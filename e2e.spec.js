const { test, expect, Playwright } = require("@playwright/test");
const path = require("path");

test("end to end scenario", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const email = "divyanshu75@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("P~nN3IH!KSkg(`Gs");
  await page.locator("#login").click();
  await page.locator(".col-lg-4 .card b").first().waitFor();
  const products = await page.locator(".col-lg-4 .card b").allTextContents(); // returns array of multiple value
  console.log(products);
  const producttoget = await page.locator("h5 b").first().textContent();
  console.log(producttoget);
  await page.locator(".btn.w-10.rounded").first().click();
  await page.locator("button[routerlink*='cart']").click();
  await page.locator("h3").waitFor();
  console.log(page.url());
  const productincart = await page.locator(".cart h3").textContent();
  console.log(productincart);
  expect(producttoget).toEqual(productincart);
  await page.locator(".totalRow button").click();
  await page.screenshot({ path: "tests/screenshot.png", fullPage: true });
  expect(page.url()).toContain("client");
  const Email = await page.locator(".mt-5 [type='text']").first().textContent();
  console.log(Email);
  expect(email).toEqual(Email);
  await page.locator('[placeholder="Select Country"]').fill("ind", { delay: 100 });
  const country = await page
    .locator(".ta-item .ng-star-inserted")
    .textContent();
  console.log(country)
});
