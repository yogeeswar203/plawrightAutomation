import test, { expect } from "@playwright/test";

test.describe("Dynamic tables",()=>{

    test.beforeEach("Navigate to home page",async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com");
        await page.waitForTimeout(5000);

    })

    // Test case 1 verifying the chrome load
    test("TC01: Chrome CPU validation",async({page})=>{

        // table locator
        const table_rows_locator = await page.locator("#taskTable tbody tr").all();
        // expect(table_rows_locator).toBeGreaterThan(0);

        let cpu_load;
        for(const row of table_rows_locator){
            const processName = await row.locator("td").nth(0).innerText();

            if(processName === "Chrome")
            {
                   cpu_load= await row.locator('td',{hasText:"%"}).innerText();
                   const exCpuLoad = await page.locator("p>.chrome-cpu").innerText();
                   expect(cpu_load).toBe(cpu_load);
                   break;
            }
                       

        }
       


    })


    test("TC002: Verify CPU memory",async({page})=>{

        // table locator 
        const rows_loactor = await page.locator("#taskTable>tbody>tr").all();
        console.log("No of rows present:",rows_loactor.length);

        let memoryUsage;
        for(const row of rows_loactor)
        {
            const processName = await row.locator("td").nth(0).innerText();
            //console.log(processName);
            if(processName === "Firefox"){
                memoryUsage = await row.locator('td',{hasText:/MB$/}).innerText();
                console.log(memoryUsage);
                const ex_memory = await page.locator("strong.firefox-memory").innerText();
                expect(memoryUsage).toBe(ex_memory);
                break;
            }
        }
    })

    test.only("TC:003 Verify Network Speed",async({page})=>{
        console.log("*********************** TC:003 start Of the Execution *****************************")
        console.log();
        // locating the table element
        const table_row = await page.locator("#taskTable>tbody>tr").all();

        let NSpeed;
        for(const row of table_row)
        {
            const processName = await row.locator('td').nth(0).innerText();
            if(processName === 'Chrome')
            {
                const actul_netSpeed = await row.locator('td',{hasText:"Mbps"}).innerText();
                //console.log(actul_netSpeed);
                const expSpeed = await page.locator("strong.chrome-network").innerText();
                expect(actul_netSpeed).toBe(expSpeed);
                console.log(`Actual network speed: ${actul_netSpeed} and expected network Speed: ${expSpeed} is matching`)
                break;
            }

        }






        console.log();
        console.log("*********************** End Of the Execution *****************************")
    })

})