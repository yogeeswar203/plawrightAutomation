import {test, expect} from "@playwright/test";
import fs from 'fs';
import * as XLSX from 'xlsx';

// file --> workbook --> sheet --> rows & cols
const excelPath = "tests/TestData/testDataxl.xlsx";
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const workSheet = workbook.Sheets[sheetName];

// convert sheet into JSON 
const loginData:any[] = XLSX.utils.sheet_to_json(workSheet);
console.log(loginData);

test.describe("Reading the data from the CS file",async()=>
    {
       
for(const {email, pwd, status} of loginData)
{
        test(`Verify the log in test for ${email} and ${pwd}`,async({page})=>{
        
                    await page.goto("https://demowebshop.tricentis.com/login");
                    await page.waitForTimeout(3000);
        
                    // finding the locators and filling the data
                    await page.locator("#Email").fill(email);
                    await page.locator("#Password").fill(pwd);
                    await page.locator("input[value='Log in']").click();
        
                    if(status.toLowerCase() === "valid")
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
