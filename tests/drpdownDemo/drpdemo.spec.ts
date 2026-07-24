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

    let allOptions:string[] = (await noOfOptions.allTextContents()).map(value=>value.trim());
   
    console.log(allOptions)

    expect(allOptions).toContain('China');

    // printing options from the dropdown

    for(let op of allOptions)
    {
        console.log(op);
    }
    

    






    await page.waitForTimeout(5000);
    page.close();
    


})

test("Verify multi select dropdown",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(5000);



        // selecting the multiple options from the dropdown

        // By using visible text
        await page.locator('#colors').selectOption(['Red','Green']);
        await page.waitForTimeout(2000);

        // By usning value
        await page.locator('#colors').selectOption(['red', 'green', 'white']);
        await page.waitForTimeout(2000);
        await page.locator('#colors').selectOption({value:'green'});

        // By using the label
        await page.locator('#colors').selectOption([{label:'Red'},{label:'White'}]);


        // getting the no of elements in the dropdown
        const drp_element:Locator = page.locator("select[id='colors']>option");

        let color_options:string[] = (await page.locator("select[id='colors']>option").allTextContents()).map(text=>text.trim());
        //let color_options:string[] = await page.locator("select[id='colors']>option").allTextContents();
        let c:string[]=(await drp_element.allTextContents()).map(tc=>tc.trim());
        console.log(color_options);

        // printing the data one by one
        for(let op of color_options)
        {
            console.log(op);
        }

        const leng:number = await drp_element.count();
        console.log(`The number of elements present in the given dropdown: ${leng}`)
        await expect(drp_element).toHaveCount(7);
        // How to check number of elements present in the select dropdown


        await page.waitForTimeout(5000);
        await page.close();

})

test.only("verify elements are sorted",async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(5000);

        // getting all the elements in the dropdown
        //const drp_element1:Locator= page.locator("#animals>option");
        const drp_element1:Locator= page.locator("#colors>option");
        console.log(await drp_element1.allTextContents());

        let all_elements:string[] = (await drp_element1.allTextContents()).map(tc=>tc.trim());

        const original_list:string[] =[...all_elements];
        const sorted_array:string[] = [...all_elements].sort(); 

        console.log(all_elements);
        console.log(original_list);
        console.log(sorted_array);

        // verifying the both the arrays
        //expect(all_elements).toEqual(sorted_array);

        const myset = new Set<string>();
        const dp_arry:string[] = [];

        for(const op of all_elements)
        {
            if(myset.has(op))
            {
                dp_arry.push(op);
            }else
            {
                myset.add(op);
            }
        }

        console.log("These are unique values: ",myset);
        console.log("These are the duplcate values:",dp_arry);


        await page.waitForTimeout(5000);
        await page.close();

})