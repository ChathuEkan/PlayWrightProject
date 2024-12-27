const { test, expect } = require('@playwright/test');

test('built in locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const hrmLogo = await page.getByAltText('company-branding');
    await expect(hrmLogo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{type:'submit'}).click();

    await expect(page.getByText('John Doe')).toBeVisible();

  await page.close();
})
