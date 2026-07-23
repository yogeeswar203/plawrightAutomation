import {test, expect, Locator} from "@playwright/test"



test("Verify dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);
    
    // below options are to select the static dropdowns which have select label
    
    // await page.locator('#country').selectOption('India');
    // await page.waitForTimeout(2000);
    // await page.locator("#country").selectOption({value:'uk'});
    // await page.waitForTimeout(2000);
    // await page.locator('#country').selectOption({label:'India'});
    // await page.waitForTimeout(2000);
    // await page.locator('#country').selectOption({index:2});


    // check the number of options present in the selection dropdown

    let noOfOptions:Locator =page.locator('#country>option');
    let len=await noOfOptions.count();
    console.log("No of options are present:",len);

    // getting all the options from the dropdown

    let allOptions:string[] = (await noOfOptions.allTextContents()).map(text=>text.trim());
    console.log(allOptions);

    expect(allOptions).toContain('China');

    // printing options from the dropdown

    for(let op of allOptions)
    {
        console.log(op);
    }
    

    






    await page.waitForTimeout(5000);
    page.close();
    


})