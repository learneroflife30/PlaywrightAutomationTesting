const { test, expect, chromium } = require("@playwright/test");

test.beforeAll(() => {
  test.setTimeout(1200000);
});

test("Bypasslogin", async () => {
  // with preinjected cookies / plugins
  const browser = await chromium.launch();
  const context = await browser.newContext({
    storageState: "bypassloginstate.json",
  });
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.pause();
});
