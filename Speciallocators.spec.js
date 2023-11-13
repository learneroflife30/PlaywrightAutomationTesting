const { test, expect } = require("@playwright/test");


test('playwright special locators', async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

//https://playwright.dev/docs/locators

await page.goto('https://rahulshettyacademy.com/angularpractice/');
console.log(await page.title());
expect(await page.title()).toContain('Proto')
await page.locator("form .form-group [name='name']").fill('tester')
await page.locator('input.ng-dirty').fill('test@gmail.com')
await page.getByPlaceholder('Password').fill('test2#413ac');
await page.getByLabel('Check me out if you Love IceCreams!').check();
await page.getByLabel('Gender').selectOption('Female');
await page.getByLabel('Student').check();
await page.locator("h4 .ng-pristine").fill('testing');
await page.getByRole("button", {name:'Submit'}).click();
    
});