import {test,expect} from "@playwright/test";

// common URL 
const url = "https://sdetqa.vercel.app/fd-calculator";

test.describe("Verifying the annotations",()=>{

    test.skip("Skipping the test",async({page})=>{
        await page.goto(url);
    
    })

    test.fail("Verifying the failedannotation",async({page})=>{
        await page.goto(url);
        await expect(page).toHaveTitle("WorngTit");
        //await expect(page).toHaveTitle("Fixed Deposit Calculator");


    })

    // fix me automatically skip the test case without any execution
    test.fixme("fix me verification",async({page})=>{
        await page.goto(url);
        //await expect(page).toHaveTitle("WorngTit");
        await expect(page).toHaveTitle("Fixed Deposit Calculator");
    })

    test("Verifying the SLOW method",async({page})=>{
        test.slow();
        await page.goto(url);
        //await expect(page).toHaveTitle("WorngTit");
        await expect(page).toHaveTitle("Fixed Deposit Calculator");
    })
})