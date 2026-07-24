import {test, expect, Locator} from "@playwright/test"

test("verify the options",async({page})=>{

    await page.goto("https://www.bstackdemo.com/");
    await page.waitForTimeout(5000);


    // Locating the ele drp elements
    const sort_options:Locator=  page.locator(".sort>select>option");
    const sort_options_all:Locator=  page.locator("div.sort>select");

    await expect(sort_options_all).toBeEnabled();
    await expect(sort_options_all).toBeVisible();

    // selecting the Lowest to highest from the dropdown

    await sort_options_all.selectOption("Lowest to highest");

    // Price locator
    const price_txt:Locator = page.locator("div.val>b");

    let price_all:string[] = await price_txt.allTextContents();
    // sorted price details
    const sorted_price=[...price_all].sort();
    console.log(sorted_price);
    // const sortedAscending = rawPrices.map(price => parseFloat(price)) // Convert string to number.sort((a, b) => a - b);
    const ascArray=price_all.map(val=>parseInt(val)).sort((a,b)=>a-b);
    console.log(ascArray);



    // Product_name Locator
    const product_name:Locator = page.locator("p.shelf-item__title");
    let prod_name:string[] = await product_name.allTextContents();
    console.log(prod_name);
    const sorted_prod_name = [...prod_name].sort();
    console.log(sorted_prod_name);

    await page.waitForTimeout(2000);
    expect(price_txt.count).toEqual(product_name.count);
    
    // item price Locator
    const item_price_L:Locator = page.locator("p.shelf-item__title + div>div.val>b");

    for(const p of prod_name)
    {
        console.log(p);
        for(const pr in price_all)
        {
            
        }
    }

    await page.waitForTimeout(5000);
    page.close();




})