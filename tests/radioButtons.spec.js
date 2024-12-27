const { test, expect } = require('@playwright/test');

test('radio buttons',async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");



  const maleRadioBtn = page.locator('//input[@id="male"]');


  await maleRadioBtn.check();

  await expect(maleRadioBtn).toBeChecked();
  await expect(maleRadioBtn.isChecked()).toBeTruthy();

  await page.close();
})
