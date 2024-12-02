const {test}=require('@playwright/test')


test("browser context",async ({browser})=>{
    const context=await browser.newContext();
    const page=await browser.newPage();
})
test("My Test Case",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
})