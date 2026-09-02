import{test, expect} from "@playwright/test"

// test data 
const searchItems:string[] = ["Laptop", "Gift Card","smartphone","monitor"];



// Approch 1
for(let item of searchItems)
{
    test(`Verify search item ${item}`,async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true});   
     


})
}

