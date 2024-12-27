const { test, expect } = require('@playwright/test');

test('handle dropdowns',async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Multiple ways to select dropdowns

 //   await page.locator('#country').selectOption({label:'India'});//label
 //   await page.locator('#country').selectOption('India');//visible text
 //   await page.locator('#country').selectOption({value:'india'});//value attribute
 //   await page.locator('#country').selectOption({index:3});//index

  await page.selectOption('#country','India');//by text

  //Assertions:

  //1) Check number of options in the dropdown
    const options=await page.locator('//select[@id="country"]/option');
    await expect(options).toHaveCount(10);

    //elements in the form of array $$
    const optionsarr= await page.$$('//select[@id="country"]/option');
    console.log("Number of options :",options.length)
    await expect(options.length).toBe(10);

    //Check presence of value in the dropdown

})
