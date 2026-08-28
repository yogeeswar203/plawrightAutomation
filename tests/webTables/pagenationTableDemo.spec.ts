import test from "@playwright/test";
import fs from "fs";


test("Verify the pagenatio table",async({page})=>{
        console.log("*********************** TC 004 Execution started *************************");
        console.log();

        // Storing the data into a text file
        let filepath = "./tests/webTables/testdata.txt";
        if(fs.existsSync(filepath))
        {
            fs.unlinkSync(filepath);
        }




        await page.goto("https://datatables.net/");
        await page.waitForTimeout(3000);

        // getting the rows
        const table_rows = page.locator("#myTable>tbody>tr");
        const next_btn = page.getByRole('link',{name:'Next'});
        


        // clicking on the next button
        //await next_btn.click();
        //console.log("Next buttong got clicked");
        await page.waitForTimeout(3000);
        //console.log(await table_rows.count());

        const rows_path = await table_rows.all();

        let hasNext = true;
        let page_count =1;
        

        while(hasNext)
        {
            console.log(`Page no:${page_count}`);
            // wait for the first element to be visible
            await table_rows.first().waitFor({state:"visible"});
            const row_data = await table_rows.all();
            let page_data_Strings=`--- Page ${page_count}----\n`;
            console.log(page_data_Strings);


            // getting the data by row wise
            
            // Extracting the data from row by row
            for(let row of row_data)
            {
                let cell_data = await row.locator("td").allInnerTexts();
                if(cell_data.length>0)
                {
                    //console.log(cell_data);
                    page_data_Strings+= cell_data.join(', ')+'\n';
                    console.log(page_data_Strings);
                }
               
            }
            fs.appendFileSync(filepath,page_data_Strings);

            // clicking on the next page
            if(await next_btn.isVisible() &&  await next_btn.isEnabled())
            {
                await page.waitForTimeout(1000);
                next_btn.click();
                page_count++;
            }else{
                console.log("End of page reached");
                hasNext = false;
            }

           

        }

            
        

































        console.log();
        console.log("*********************** End Of the Execution *****************************")

})