import test, { expect, Locator } from "@playwright/test";

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


    // Method 3 all()
    const all_locators:Locator[] = await product_locator.all();
    console.log(all_locators);

    for(let ts of all_locators)
    {
        const name1:string = await ts.innerText();
        console.log(name1);
    }

    await page.waitForTimeout(5000);
    page.close();

})


test("Verify static table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);

    // Total table element
    const table_element = page.locator("table[name='BookTable']>tbody")
    await expect(table_element).toBeVisible();

    // finding the no of rows
    const rows_table_locator = page.locator("table[name='BookTable']>tbody>tr");
    console.log("No of rows are present: ",await rows_table_locator.count());
    await expect(rows_table_locator).toHaveCount(7);

    // finding cols 
    // chaing of the locator
    const col_table_locator = table_element.locator("tr");
    const col_count = await col_table_locator.count();
    console.log("No of columns are present: ",col_count);

    console.log("Printing all the table data")
    for(let text of await col_table_locator.allInnerTexts()){
        console.log(text);
    }

    // Reading the data from the 2nd cols
    const secRow=await rows_table_locator.nth(2).locator("td").allInnerTexts();
    //console.log(secRow.allInnerTexts());
    console.log("Printing only second row cells")
    //const secrowData:string[] = await secRow.allInnerTexts();
    console.log(secRow);

    // reading all the rows and cols
    const all_data=await rows_table_locator.all();
    console.log(all_data);
      
    for(let ts of all_data)
    {
        const text = await ts.locator("td").allInnerTexts();
        console.log(text.join('\t'));
    }


    for(let rows of all_data)
    {
        const cell_data = await rows.locator("td").allInnerTexts();
        const author = cell_data[1];
        const book = cell_data[0];

        if(author==="Mukesh")
        {
            console.log(`Author Name is: ${author} and Written the book is: ${book}`);
        }
    }

    let total_price:number = 0;
    
    for(let rows of all_data.slice(1))
    {
        const cell_data = await rows.locator("td").allInnerTexts();
        const price = cell_data[3];
        //console.log(price)
        total_price = total_price + parseInt(price);        
    }
    console.log(`Total price of the books: ${total_price}`)












    await page.waitForTimeout(5000);
    await page.close();


})


test.only("verify static table 2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);

    //getting table element
    const table_locator1 = page.locator("table[name='BookTable']");
    const table_rows = page.locator("table[name='BookTable'] tr");
    const table_cols = page.locator("table[name='BookTable'] tr th");
    const table_data = page.locator("table[name='BookTable'] tr td")

    // getting the count of the no of rows and cols
    const no_rows = await table_rows.count();
    const no_cols = await table_cols.count();
    console.log(`No of rows present: ${no_rows}`);
    console.log(`No of columns are present: ${no_cols}`);


    // getting the data from the rows and cols

    console.log("Printing all the data using the td tag")
    for(let text of await table_data.allInnerTexts())
    {
        console.log(text);
    }


    console.log("Printing the data in method 2");
    console.log("Getting all the tr paths");
    const all_rows = await table_rows.all();
    console.log(all_rows);

    for(let text of all_rows.slice(1))
    {
        const col_data = await text.locator("td").allInnerTexts();
        console.log(col_data);
    }

    let toatl_price1:number = 0;
    for(let text of all_rows.slice(1))
    {
        const col_data = await text.locator("td").allInnerTexts();
        const author =  col_data[1];
        const price = col_data[3];
        if(author==="Mukesh")
        {
            toatl_price1 = parseInt(price) + toatl_price1;
        }

    }
    console.log(`The total price by MUkesh ${toatl_price1}`);


    


































    await page.waitForTimeout(5000);
    await page.close();
})