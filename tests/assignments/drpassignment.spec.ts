import {test, expect, Locator} from "@playwright/test"

test("verify the options",async({page})=>{

    await page.goto("https://www.bstackdemo.com/");
    await page.waitForTimeout(5000);


    // Locating the ele drp elements
    const sort_options:Locator=  page.locator(".sort>select>option");
    const sort_options_all:Locator=  page.locator("div.sort>select");
    const product_name:Locator = page.locator("p.shelf-item__title");
    const price_txt:Locator = page.locator("div.val>b");
    const pLocator:Locator = page.locator('p.shelf-item__title + div>div.val>b');

    await expect(sort_options_all).toBeEnabled();
    await expect(sort_options_all).toBeVisible();

    // selecting the Lowest to highest from the dropdown
    await sort_options_all.selectOption("Lowest to highest");

    // Price locator
    let price_all:string[] = await price_txt.allTextContents();

    
    // sorted price details 
    // const sortedAscending = rawPrices.map(price => parseFloat(price)) // Convert string to number.sort((a, b) => a - b);
    const ascArray=price_all.map(val=>parseInt(val)).sort((a,b)=>a-b);
    console.log(ascArray);



    // Product_name Locator
    let prod_name:string[] = await product_name.allTextContents();
    const sorted_prod_name = [...prod_name].sort();
    console.log(sorted_prod_name);


    // Mapping the Phone name and price of the product

    const price_name= prod_name.map((pnames, i)=> (
        {   prod_name:pnames.trim(), 
            price:price_all[i]?.trim()

        }));
    //console.log(price_name);
    



    await page.waitForTimeout(2000);
    expect(price_txt.count).toEqual(product_name.count);
    const phoneNames = await page.locator('p.shelf-item__title').allInnerTexts();
    const phonePrices = await page.locator('p.shelf-item__title + div>div.val>b').allInnerTexts();
    
    //const catalog = phoneNames.map((name1,i)=> ({phoneNames:name1.trim(),price:phonePrices[i]?.trim()}));

    console.log("Lowest Price",ascArray[0]);

    
    















    await page.waitForTimeout(5000);
    page.close();




})