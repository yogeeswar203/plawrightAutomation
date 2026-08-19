import test from "@playwright/test";

test("Verifing auto selective dropdown",async({page})=>{


    // Myntra code:
    /*
    page.goto("https://www.myntra.com/");
    const search_locator = page.locator("div.desktop-query>.desktop-searchBar")
    await page.waitForTimeout(5000);

    const searchOptions = page.locator("ul.desktop-group>li");

    

    // clicking on the locator
    search_locator.fill("laptop");
    await page.waitForTimeout(6000);
    search_locator.click();
    
    console.log("No of suggested dropdowns: ",await searchOptions.count());
*/

    page.goto("https://www.google.com/");
    await page.waitForTimeout(5000);

    const search_locator = page.locator("#APjFqb");
    search_locator.fill("name");
    await page.waitForTimeout(4000);
    const list_elements = page.locator("ul.G43f7e>li");

    console.log("The number of elements are suggestive: ", await list_elements.count());

    console.log("The 5th element is:",await list_elements.nth(5).innerText());

    const opt_count = await list_elements.count();
    for(let i=0; i<opt_count; i++)
    {
        console.log("Element is:", await list_elements.nth(i).innerText());
        const value = await list_elements.nth(i).innerText();
        if(value=="name plate")
        {
            console.log("Name plate is matched")
            //list_elements.nth(i).click();
            break;
        }
        
    }


    // capturing all the values from the dropdown
    const opt_texts = await list_elements.allInnerTexts();
    console.log(opt_texts);

    for(const text of opt_texts)
    {
        console.log(text);
    }

    await page.waitForTimeout(6000);
    page.close();



})