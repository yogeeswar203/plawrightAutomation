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

   test.skip("Verify the select dropdown", async({page})=>{

    
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

    let all_countryOptions2:string[] = await country_locator_all.allInnerTexts();
    console.log(`Options in the dropdown: ${all_countryOptions2}`);
    
   });

   test.skip("Verify the sorted array functionality", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    const animal_loc_all = page.locator("#animals>option");
    const animal_loc = page.locator("#animals");

    const color_all_loc = page.locator("#colors>option");
    const color_loc = page.locator("#colors>option");

    
    //
    // for(let op of await animal_loc_all.all()){
    //     let msg = await op.innerText();
    //     console.log(msg);
    // }

    let allAnimals:string[] = await animal_loc_all.allInnerTexts();
    let allColors:string[] = await color_all_loc.allInnerTexts();
    
    console.log(`${allColors}`);
    const sr = [...allColors].sort();
    console.log(`${sr}`);
    expect(allColors).toEqual(sr);

   });

   test("Verify the dropdown without select option", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(1000);
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(4000);
    await page.getByRole('link',{name:'PIM'}).click();

    const all_emp_status_loc = page.locator("div[role='listbox']>div");
    const empstatus_loc = page.locator("div[class='oxd-select-text--after']>i").first();
    await empstatus_loc.click();
    await page.waitForTimeout(2000);
    console.log(await all_emp_status_loc.allInnerTexts());

    for(let op of await all_emp_status_loc.all())
    {
        const op1 = await op.textContent();
        //console.log(op1);
        if(op1 === "Part-Time Contract")
        {
            op.click();
            console.log("Part-Time Contract is selected succussfully");
            break;
        }

    }
    



   })








})