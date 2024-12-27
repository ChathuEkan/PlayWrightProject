const { test, expect } = require('@playwright/test');

test('handle inputs',async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Single checkboxes

  const sundayChkBox = page.locator('//input[@id="sunday"]');
  const mondayChkBox = page.locator('//input[@id="monday"]');
  const tuedayChkBox = page.locator('//input[@id="tuesday"]');

  const chkboxesarr = [sundayChkBox,mondayChkBox,tuedayChkBox];

  await sundayChkBox.check();
  await expect(sundayChkBox).toBeChecked();
  await expect(sundayChkBox.isChecked()).toBeTruthy();

  for(const locators of chkboxesarr){

    await locators.check();

  }

})
