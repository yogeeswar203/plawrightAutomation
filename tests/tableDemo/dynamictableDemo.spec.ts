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

    test.skip("TC 002: Verify the Disk Space",async ({page})=>{

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

    });

    test("reading the data from the table",async({page})=>
    {   
        const no_rows = page.locator("table[name='BookTable']>tbody>tr");
        const no_clos = page.locator("table[name='BookTable']>tbody>tr>th");
        const allTableData = page.locator("table[name='BookTable']>tbody>tr>td");

/*
        const all_data = await allTableData.all();
        for(let op of all_data)
        {
            const op_data = await op.innerText();
            console.log(op_data);
        }
 */

        let row_count = await no_rows.count();
        let col_count = await no_clos.count();
        console.log(`The no of row present ${row_count} and colums present ${col_count}`);
        const allrows = await no_rows.all();

        const tableData:string[][] = [];

        for(let r=1; r<row_count; r++)
        {
            const cell_value = await no_rows.nth(r).locator('td').allTextContents();
            tableData.push(cell_value);
        }

        console.log(tableData);

        const prod_names =[];
        const sub_names = [];
        for(let r=0; r<tableData.length; r++)
        {
            prod_names.push(tableData[r][1]);
            if(prod_names[r] === "Mukesh")
            {
                sub_names.push(tableData[r][3]);
            }
            
        }
        console.log(prod_names);
        console.log(sub_names);
        let total_price = 0;
        for(let rq of sub_names)
        {
            total_price = parseFloat(rq)+total_price;
        }

        console.log(`The total price of the books by Mukesh: ${total_price}`);
    })


})