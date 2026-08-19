import { expect, Locator, test } from "@playwright/test";

test("Verify Xpath", async({page})=>{

    await page.waitForTimeout(5000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(6000);
    const uname:Locator = page.locator("//input[@name='username']");
    const pwd:Locator = page.locator("//input[@name='password']");
    const log_btn:Locator = page.locator("//button[@type='submit']");
    
    await expect(uname).toBeVisible();
    uname.fill("name");





}

)

