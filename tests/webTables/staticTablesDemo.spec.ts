import test, { Locator } from "@playwright/test";

test("Comaring Methods",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(8000);

    const product_locator:Locator = page.locator(".product-title");
    await page.waitForTimeout(5000);

    // innerText() vs textContent()
    // innerText() will return always retuns only string 
    // textContent() will return along with strings also white spaces 

    console.log("Printing the product names using innerText",await product_locator.nth(2).innerText()); 

    console.log("Printing the product names using the text contains",await product_locator.nth(2).textContent());
    //console.log("Printing the product names using the text contains",product_locator.textContent());

    const no_elements = await product_locator.count();

    //using for loop getting the product names
    for(let i=0; i<no_elements; i++)
    {
        console.log(await product_locator.nth(i).innerText());
    }

    for(let text of await product_locator.allInnerTexts())
    {
        console.log(text);
    }

    let productNames1:string[] = ((await product_locator.allTextContents()).map(test=>test.trim()));

    console.log("Printing the names using the allTextContents")
    //let c:string[]=(await drp_element.allTextContents()).map(tc=>tc.trim());
    for(let pn of productNames1)
    {
        console.log(pn);
    }


    await page.waitForTimeout(5000);
    page.close();

})