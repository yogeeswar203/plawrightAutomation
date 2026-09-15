import {test, Page, Expect, expect} from "@playwright/test"


test.describe("Validation for the Dynamic table", async()=>{

    test.beforeEach("Navigating to Home page", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");

    });

    test.skip("TC 001: Validating the dynamic tabel",async({page})=>{

        const rows_loc = page.locator("#taskTable tbody tr");
        const no_rows = await rows_loc.all();
        expect(no_rows.length).toBeGreaterThan(0);
        console.log(`The total no of rows present: ${await rows_loc.count()}`);

        let cpuload;

        for(const d1 of no_rows)
        {
           const process_name = await d1.locator('td').nth(0).innerText();
           if(process_name==='Chrome')
           {    
            cpuload = await d1.locator('td',{hasText:'%'}).innerText();
            const exp_cpuload = await page.locator(".chrome-cpu").innerText();
            expect(cpuload).toBe(exp_cpuload);
            console.log(`Chrome CPU percentage is: ${cpuload} and expected CPU Load is ${exp_cpuload}`);
            break;
           }
        }

        


    });

    test("TC 002: Verify the Disk Space",async ({page})=>{

        const rows_loc = page.locator("#taskTable tbody tr");
        const col_loc = page.locator("#taskTable tbody tr td");
        const allrows = await rows_loc.all();

        let act_memory;
       for(const data of allrows)
       {
            const process_name = await data.locator('td').nth(0).innerText();
            if(process_name === 'Firefox')
            {
                act_memory = await data.locator('td',{hasText:/MB$/}).innerText();
                let exp_memory = await page.locator(".firefox-memory").innerText();
                console.log(`Chrome CPU percentage is: ${act_memory} and expected CPU Load is ${exp_memory}`);
                break;
            }
       }

    })

})