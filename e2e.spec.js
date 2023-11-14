const { test, expect, Playwright } = require("@playwright/test");
const { count } = require("console");
const path = require("path");

test("end to end scenario", async ({ browser }) => {
  // create new context with fresh page
  const context = await browser.newContext();
  const page = await context.newPage();

  // variables
  const url = "https://rahulshettyacademy.com/client";
  const email = "divyanshu75@gmail.com";
  const password = "P~nN3IH!KSkg(`Gs";

  await page.goto(url);
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill(password);
  await page.locator("#login").click();
  await page.locator(".col-lg-4 .card b").first().waitFor();
  const products = await page.locator(".col-lg-4 .card b").allTextContents(); // returns array of multiple value
  console.log(products);
  const producttoget = await page.locator("h5 b").first().textContent();
  console.log(producttoget);
  await page.locator(".btn.w-10.rounded").first().click();
  await page.locator("button[routerlink*='cart']").click();
  await page.locator("h3").first().waitFor();
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
  await page.locator(".form-group .txt").pressSequentially("ind");
  const button = page.locator(".list-group button").getByText(" India").last();
  await button.click();
  await page.locator(".actions .btnn").click();
  console.log(page.url());
  await page.pause();
  await page.locator("td h1").textContent();
  const orderId = await page.locator("td label").last().textContent();
  console.log(orderId);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody tr th").last().waitFor();
  const orderids = await page.locator("tbody tr th").allTextContents();
  console.log(orderids);
});
