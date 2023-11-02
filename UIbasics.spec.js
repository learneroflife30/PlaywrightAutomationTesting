const { test, expect } = require("@playwright/test");

test.only("browser context playwright test", async ({ browser }) => {
  // with preinjected cookies / plugins
  const context = await browser.newContext();
  const page = await context.newPage();

  // store values in variables
  const username = page.locator("input#username");
  const password = page.locator("[name*='pass']");
  const signin = page.locator("#signInBtn");
  const productname = page.locator("div.card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  console.log(page.url());

  // css
  await username.fill("Divyanshu");
  await password.fill("learning");
  await page.locator(".checkmark").last().click();
  console.log(await page.locator(".modal-body").textContent());
  await page.locator("button#okayBtn").click();
  await page.locator("#terms").click();
  await signin.click();
  console.log(await page.locator("[style*='block']").textContent());
  await username.clear();
  await username.fill("rahulshettyacademy");
  await signin.click();
  console.log(page.url());
  await productname.last().waitFor(); // to ensure all elements are returned in array
  console.log(await productname.allTextContents());
  console.log(await productname.nth(0).textContent());
  console.log(await productname.last().textContent());
});

test("page playwright test", async ({ page }) => {
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
