import{Page, test} from "@playwright/test";

test.describe("Date picker Demo", async function(){

    test("Verify the date picker demo 1", async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(2000);

        // Locators 
        const datePick1 = page.locator("#datepicker");
        const prev_lnk = page.locator("a[data-handler='prev']>span");
        const nextMnth =page.locator("a[data-handler='next']>span")
        const disp_month = page.locator("span[class='ui-datepicker-month']");
        const dis_year = page.locator("span[class='ui-datepicker-year']");


        // await datePick1.fill("05/2/1994");
        // await datePick1.focus();
        // await page.keyboard.press('Escape');
        await datePick1.click();
        datePickFunction(page,"2025", "September", "23", false);
        await page.waitForTimeout(5000);
        await page.close();
    })

}) 

async function datePickFunction(page:Page, trgYear:string, trgMonth: string, trgDay:string, isFuture:boolean){
    
    while(true)
    {
        const disp_month =await page.locator("span[class='ui-datepicker-month']").innerText();
        const dis_year = await page.locator("span[class='ui-datepicker-year']").innerText();

        if(disp_month === trgMonth && dis_year === trgYear)
        {
            console.log("current month is matched");
            break;
            
        }

        if(isFuture)
        {
           await page.locator("a[data-handler='next']>span").click();
        }else{
           const prev_lnk = page.locator("a[data-handler='prev']>span");
           await prev_lnk.click();
        }
    }

    // selecting date now 
    const date_el = page.locator(".ui-datepicker-calendar>tbody>tr>td>a");
    for(let op of await date_el.all())
    {
        if(await op.innerText() == trgDay)
        {
           op.click();
           break;
        }
    }
}

