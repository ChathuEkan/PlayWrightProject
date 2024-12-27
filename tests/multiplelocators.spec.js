const { test, expect } = require('@playwright/test');

test('locate multiple elements',async({page})=>{

  await page.goto('https://demoblaze.com/');
  const links =await page.$$('a');

  for(const link of links){
        const linktext=await link.textContent();
        console.log(linktext);
  }

  page.waitForSelector("//div[@id='tbodyid']//div/h4/a");
  const products=await page.$$("//div[@id='tbodyid']//div/h4/a");

  for(const product of products){
        const productnames=await product.textContent();
        console.log(productnames);

  }

  await page.close();
})
