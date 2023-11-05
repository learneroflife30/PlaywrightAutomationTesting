const { test, expect } = require("@playwright/test");

test("browser context playwright test", async ({ browser }) => {
  // with preinjected cookies / plugins
  const context = await browser.newContext();
  const page = await context.newPage();

  // store values in variables
  const username = page.locator("input#username");
  const password = page.locator("[name*='pass']");
  const signin = page.locator("#signInBtn");
  const productname = page.locator("div.card-body a");
  const checkmark = page.locator(".checkmark");
  const terms = page.locator("#terms");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  console.log(page.url());

  // css
  await username.fill("Divyanshu");
  await password.fill("learning");
  await checkmark.last().check();
  expect(await checkmark.last().isChecked());
  console.log(await page.locator(".modal-body").textContent());
  await page.locator("button#okayBtn").click();
  const person = page.locator("select.form-control");
  await person.selectOption("consult");
  await person.selectOption("stud");
  await person.selectOption("teach");
  await terms.check();
  expect(await terms.isChecked()).toBeTruthy();
  await terms.uncheck();
  expect(await terms.isChecked()).toBeFalsy();
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

test.only("multiple tests ", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // switching to new page/tab using promise concept
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator("a.blinkingText").click(),
  ]);

  console.log(await newPage.locator("p.im-para.red").textContent());

  // taking text from  new page and saving it and then printing it to another page
  const email = await newPage.locator("p.im-para.red").textContent();

  const splitemail = email.split("@");

  const splittwoemail = splitemail[1];
  console.log(splittwoemail);

  const domain = splittwoemail.split(" ")[0];
  console.log(domain);

  // switch context back to previous page
  console.log(page.url());
  await page.locator("input#username").fill(domain);
  console.log(await page.locator("input#username").textContent());
  console.log(await page.title());
});
