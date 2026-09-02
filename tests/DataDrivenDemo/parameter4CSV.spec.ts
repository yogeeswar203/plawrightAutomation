import {test,expect} from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';


const csvPath = "tests/TestData/testData.csv";
/*
// File path 

interface UserRecord {
  username: string;
  password: string;
  expected_status: 'success' | 'locked'; // You can even strictly type the expected values
};

*/
const file_content = fs.readFileSync(csvPath, 'utf-8');

const records:any[] = parse(file_content,
    { 
        columns:true,
        skip_empty_lines:true
    }
);


test.describe("Reading the data from the CS file",async()=>
    {
       
for(const data of records)
{
        test(`Verify the log in test for ${data.username} and ${data.password}`,async({page})=>{
        
                    await page.goto("https://demowebshop.tricentis.com/login");
                    await page.waitForTimeout(3000);
        
                    // finding the locators and filling the data
                    await page.locator("#Email").fill(data.username);
                    await page.locator("#Password").fill(data.password);
                    await page.locator("input[value='Log in']").click();
        
                    if(data.expected_status.toLowerCase() === "valid")
                    {
                        const logout_locator = page.locator("a[href='/logout']");
                        await expect(logout_locator).toBeVisible({timeout:5000});
                        await logout_locator.click();
                        console.log("Clicked on log out page")
                    }else{
                        const error_msg = page.locator(".validation-summary-errors");
                        await expect(error_msg).toBeVisible({timeout:5000});
                        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
                    }
        
                })


}
   

    });
