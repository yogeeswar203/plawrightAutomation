import {test, expect, Page, Locator} from "@playwright/test";


test.describe("Verify the dropdown options",async()=>{

    test.beforeEach("TC001 Verify the dropdown options ",async({page})=>{

        // await page.goto("https://practice.expandtesting.com/dropdown");
        // const dropdown_text = await page.locator("li:text-is('Dropdown List')").innerText();
        // console.log(`Navigated to the dropdown box ${dropdown_text}`);
        

    

    });

    test.skip("verify single select dropdown ", async({page})=>{
         const selectdrp_loc = page.locator("#dropdown");
         await expect(selectdrp_loc).toBeVisible();
         selectdrp_loc.selectOption({label:'Option 2'});
         await page.waitForTimeout(2000);
         selectdrp_loc.selectOption({value:'1'});
         await page.waitForTimeout(2000);
         selectdrp_loc.selectOption({index:2});
         await page.waitForTimeout(2000);
    });

    test.skip("Verify dropdown in flight search", async ({page})=>{

        await page.goto("https://www.google.com/travel/flights?gl=IN&hl=en");
        const page_title = await page.title();
        console.log(`The title of the page is: ${page_title}`);
        expect(page_title).toEqual("Find Cheap Flights Worldwide & Book Your Ticket - Google Flights");
        await page.waitForTimeout(2000);
        const fp =  page.getByRole('combobox');
        await page.waitForTimeout(2000);
        await fp.click();
        await page.waitForTimeout(2000);
        await fp.clear();
        await page.waitForTimeout(2000);
        await fp.fill("Testing");
   });

   test("Verify the select dropdown", async({page})=>{

    await page.waitForTimeout(2000);
    await page.goto("https://phptravels.com/demo");
    const country_locator_all = page.locator("select>option");
    const country_locator= page.locator("div>select");
    await page.waitForTimeout(1000);
    country_locator.selectOption({value:'200'});
    await page.waitForTimeout(1000);
    country_locator.selectOption({label:'India +91'});
    await page.waitForTimeout(1000);


    let options_count = await country_locator_all.count();
    console.log(`The total no of options present in the dropdown: ${options_count}`);

    let all_countryOptions:Locator[] = await country_locator.all();
    
    for(let option of all_countryOptions)
    {
        console.log((await option.innerText()).trim());
    };




   });


})