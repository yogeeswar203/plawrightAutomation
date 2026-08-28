import {test,chromium} from "@playwright/test";

test("Verify the browser context",async()=>{

    // creating the chromium browser
    const browser = await chromium.launch();


    // Creating 2 constants
    const context_1 = await browser.newContext();
    const context_2 = await browser.newContext();


    // creating the new pages
    const context_1_page = await context_1.newPage();
    const context_2_page = await context_2.newPage();

    // Launching the different web pages in pages

    await context_1_page.goto("https://www.google.com");
    await context_1_page.waitForTimeout(2000);
    await context_2_page.goto("https://www.amazon.com");
    await context_2_page.waitForTimeout(2000);


    await context_1.close();
    await context_2.close();
    await browser.close();

    console.log("All the browsers and contexts are closed succesuccsfully")


})