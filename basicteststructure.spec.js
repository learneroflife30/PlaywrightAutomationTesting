const {test, expect} = require('@playwright/test');

test('test name', async({browser})=>{

  // with preinjected cookies / plugins
  const context = await browser.newContext();
  const page = await context.newPage();

  // if only use page, use page instead of browser
  await page();

});