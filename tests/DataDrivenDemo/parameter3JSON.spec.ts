import test, { expect } from "@playwright/test";
import fs from 'fs';

const file_path = "TestData/testdata1.json";
const loginTestData:any =  JSON.parse(fs.readFileSync(file_path, "utf-8"));

test.describe("Data driven test using JSON File",async()=>{

    for(const [email, pwd, status] of loginTestData)
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

