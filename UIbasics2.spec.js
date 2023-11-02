const { test, expect } = require("@playwright/test");

test("new test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Register page locators
  const firstname = page.locator("input#firstName");
  const lastname = page.locator("#lastName");
  const email = page.locator("[type='email']");
  const phonenumber = page.locator("#userMobile");
  const gender = page.locator("[value='Male']");
  const password = page.locator("#userPassword");
  const confirmpassword = page.locator("#confirmPassword");
  const checkbox = page.locator("[type='checkbox']");
  const register = page.locator("#login");

  //login page locators
  const enteremail = page.locator("#userEmail");
  const enterpassword = page.locator("#userPassword");
  const login = page.locator("#login");

  // values
  const validemail = "divyanshu75@gmail.com";
  const validfirstname = "divyanshu";
  const validlastname = "sharma";
  const validnumber = "1234567893";
  const validpassword = "P~nN3IH!KSkg(`Gs";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator(".login-wrapper-footer-text").click();

  await firstname.fill(validfirstname);
  await lastname.fill(validlastname);
  await email.fill(validemail);
  await phonenumber.fill(validnumber);
  await gender.click();
  await password.fill(validpassword);
  await confirmpassword.fill(validpassword);
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await register.click();

  await page.locator(".headcolor").waitFor();
  console.log(await page.locator(".headcolor").allTextContents());
  await page.pause();
  await page.locator("button[routerlink*='auth']").click();

  await enteremail.fill(validemail);
  await enterpassword.fill(validpassword);
  await login.click();
  console.log(page.url());
});
