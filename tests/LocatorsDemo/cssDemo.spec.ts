import{test, expect} from "@playwright/test"

test("Verify CSS Locators",async({page})=>{


    await page.goto("https://sauce-demo.myshopify.com/");
    await page.waitForTimeout(3000);

    // clicking on the Sign UP button
    await page.getByRole("link",{name:'Sign up'}).click();
    await page.waitForTimeout(3000);

    // Entering the values in the text box 

    await page.locator("input[id='first_name']").fill("RAMA");
    await page.locator("input[id='last_name']").fill("SITA");
    await page.locator("input[id='email']").fill("RAMA@test");
    await page.locator("input[id='password']").fill("RAMA@test");

    await page.waitForTimeout(2000);

})