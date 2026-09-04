import test from "@playwright/test";

test.describe("This is demo page 1",async()=>{
    
    test("verify Login",async({page})=>{
        await page.goto("https://www.google.com/");
        await page.locator("textarea[name='q']").fill("SendKeys");
    });

    test("verify page title1",async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        const username:string = "test123338756@gmail.com";
        const password:string = "test@203";
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(username);
        await page.locator("#Password").fill(password)
        await page.locator("input[value='Log in']").click();

    })

    test.skip("verify page title2",async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        const username:string = "test123338756@gmail.com";
        const password:string = "test@203";
        await page.locator(".ico-logieen").click();
        await page.locator("#Email").fill(username);
        await page.locator("#Password").fill(password)
        await page.locator("input[value='Log in']").click();

    })

    test.fail("verify page title3",async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        const username:string = "test123338756@gmail.com";
        const password:string = "test@203";
        await page.locator(".ico-login").click();
        await page.locator("#Eail").fill(username);
        await page.locator("#Password").fill(password)
        await page.locator("input[value='Log in']").click();

    })

});