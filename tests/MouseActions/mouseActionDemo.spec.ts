import test from "@playwright/test";
import { link } from "node:fs";

test.describe("Verifying the mouse actions",()=>{

    test.beforeEach("Navigating to Home page before the test case executions",async({page})=>{
        console.log("Before each block is executed")
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(2000);
    })

    test.skip("TC_001: Verifing the dynamic button 1",async({page})=>{

        const start_btn = page.locator("button[name='start']");
        const stop_btn = page.locator("button[name='stop']");

        const startText = await start_btn.innerText();
        console.log(`The text before clicking on the button ${startText}`);

        //await page.waitForTimeout(1000);
        await start_btn.click();
        //await page.waitForTimeout(1000);

        const stopText = await stop_btn.innerText();
        console.log(`The text before clicking on the button ${stopText}`);

        //await page.waitForTimeout(1000);
        await stop_btn.click();
        //await page.waitForTimeout(1000);
        console.log("Clicked on buttons successfully");


    


    });

    test("TC 002: Verify the drga ang drop functionality", async({page})=>{

        const mouseHover_loc = page.locator("button[class='dropbtn']");

        await mouseHover_loc.hover();

        await page.waitForTimeout(2000);
        console.log("Mouse is hovered on the given element");

        const lap_link = page.locator('a',{hasText:'Laptops'});

        await lap_link.click();
        await page.waitForTimeout(2000);

    })





})