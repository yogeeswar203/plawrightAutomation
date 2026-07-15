import{test, expect, Locator} from "@playwright/test";

test("verify playwright locators",async({page})=>{

    await page.goto("https://sauce-demo.myshopify.com/");
    
    const logo:Locator = page.getByAltText("Grey jacket");

    await logo.click();
    const titl = await page.title();
    await page.waitForTimeout(3000);
    console.log(`Title of the page is: ${titl}`)









})