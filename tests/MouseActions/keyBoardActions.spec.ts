import test, { expect } from "@playwright/test";


test.describe("Verifying the mouse actions",()=>{

    test.beforeEach("Navigating to Home page before the test case executions",async({page})=>{
        await page.goto("https://gotranscript.com/text-compare");
        console.log("Navigated to Home page")
        await page.waitForTimeout(2000);
    });

    test.skip("TC 001: Verify key board actions 1", async({page})=>{
        const input1_loc = page.locator("textarea[name='text1']");
        const input2_loc = page.locator("textarea[name='text2']");

        // focusing on the input 1 element
        await input1_loc.focus();

        // passing the text through the insertText

        // InsertText will automatically insert the text at a time all and it override the text
        await page.keyboard.insertText("Welcome");

        // type will enter the character by character and it will append the text to existing text 
        //await page.keyboard.type("Welcome");

        // Performing the Control A operation
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        // Performing the Control C operation
        await page.keyboard.down('Control');
        await page.keyboard.press('C');
        await page.keyboard.up('Control');

        // Moving the focus to element 2
        await page.keyboard.press('Tab');

        // Performing the Control V Operation
        await page.keyboard.down('Control');
        await page.keyboard.press('V');
        await page.keyboard.up('Control');

        await page.waitForTimeout(2000);
        expect(await input1_loc.innerText()).toEqual(await input2_loc.innerText());


    });

    test("TC 002: Verifying the keyboard actions in method 2",async({page})=>{

        const input1_loc = page.locator("textarea[name='text1']");
        const input2_loc = page.locator("textarea[name='text2']");

        // focusing on the input 1 element
        await input1_loc.focus();

        await page.keyboard.type("Welcome to Home");

        await page.keyboard.press('Control+A');
        await page.keyboard.press('Control+C');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+V');


        await page.waitForTimeout(2000);
        await expect(input1_loc).toHaveValue("Welcome to Home")

    });

    



})