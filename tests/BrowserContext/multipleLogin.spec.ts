import test, { chromium } from "@playwright/test";

test("Verify multiple login",async()=>{

    // Setting up the browser
    const browser = await chromium.launch();

    // setting up the context for admin and normal user
    const admin_user_context = await browser.newContext();
    const admin_page = await admin_user_context.newPage();

    // For normal user
    const normal_user_context = await browser.newContext();
    const normal_user_page = await normal_user_context.newPage();

    // Logging into the portal as a Admin user
    await admin_page.goto("https://www.saucedemo.com/");
    await admin_page.locator("#user-name").fill("standard_user");
    await admin_page.locator("#password").fill("secret_sauce");
    await admin_page.locator("#login-button").click();
    await admin_page.waitForTimeout(5000);
    await admin_page.close();
    await admin_user_context.close();


    // Logging into applocation as a normal user
   await normal_user_page.goto("https://www.saucedemo.com/");
   await normal_user_page.locator("#user-name").fill("problem_user");
   await normal_user_page.locator("#password").fill("secret_sauce");
   await normal_user_page.locator("#login-button").click();
   await normal_user_page.waitForTimeout(3000);
   await normal_user_page.close();
   await normal_user_context.close();

   





})