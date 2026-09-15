import test, { expect } from "@playwright/test";


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

    test.skip("TC 002: Verify the drga ang drop functionality", async({page})=>{

        const mouseHover_loc = page.locator("button[class='dropbtn']");
        const lap_link = page.locator('a',{hasText:'Laptops'});
        const double_clickText = page.locator('button',{hasText:'Copy Text'});
        const field2 = page.locator("#field2");
        const field1 = page.locator("#field1");

        await mouseHover_loc.hover();
        await page.waitForTimeout(2000);
        console.log("Mouse is hovered on the given element");

       
        await field1.fill("this");
        //await lap_link.click();
        await page.waitForTimeout(2000);

        // Verifying the double click option
        await double_clickText.dblclick();

        await page.waitForTimeout(3000);

        console.log("The text present in the field 2 text box is:",await field2.textContent());
        await expect(field2).toHaveValue("this");


    });

    test.skip("TC 003: Drag and drop functionality", async({page})=>{
        const src_loc = page.locator("#draggable");
        const trg_loc = page.locator("#droppable");
        const drp_confirm_loc = page.locator("#droppable>p");
        await page.waitForTimeout(2200);
        await src_loc.dragTo(trg_loc);
        await page.waitForTimeout(3000);
        console.log("Element is drgarred from source Location to target Location");
        console.log(await drp_confirm_loc.innerText());

    })


    test("TC:004 slider example demo",async({page})=>{
        const slider_loc = page.locator("#slider-range");
        const slider_loc_1 = page.locator("#slider-range>span").first();
        const slider_loc_2 = page.locator("#slider-range>span").last();

        await page.waitForTimeout(2000);
        await slider_loc_1.focus();
        await page.waitForTimeout(1000);
        await page.keyboard.press('Home');

        await slider_loc_2.focus();
        await page.waitForTimeout(1000);
        await page.keyboard.press('End');
        await page.waitForTimeout(1000);

        await slider_loc_1.focus();
        const mov = 50;
        for(let i=0; i<50; i++)
        {
            await page.keyboard.press('ArrowRight');
        }
        
        await page.waitForTimeout(1000);




    })






})