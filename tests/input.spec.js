const { test, expect } = require('@playwright/test');

test('handle inputs',async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");



  const enterNameTxt = page.locator('//input[@id="name"]');

  await expect(enterNameTxt).toBeVisible();
  await expect(enterNameTxt).toBeEmpty();
  await expect(enterNameTxt).toBeEditable();
  await expect(enterNameTxt).toBeEnabled();

  await enterNameTxt.fill('chathu');

  await page.close();
})
