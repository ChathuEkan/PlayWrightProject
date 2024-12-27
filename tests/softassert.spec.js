 const { test, expect } = require('@playwright/test');

test('login',async({page})=>{

  await page.goto('https://demoblaze.com/');

  //click on login button - property
  //await page.locator('id=login2').click();
  //else
  await page.click('id=login2');

  //provide username - CSS
  //await page.locator('#loginusername').fill('chathu');
  await page.fill('#loginusername','pavanol');
  await page.fill ('#loginpassword','test@123');
  await page.click("//button[text()='Log in']");

  const logoutLink= await page.locator('#logout2');
  await expect.soft(logoutLink).toBeVisible();

  await page.close();
})
