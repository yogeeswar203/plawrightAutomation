import{test, expect, Locator} from "@playwright/test";

test("verify playwright locators",async({page})=>{

    await page.goto("https://sauce-demo.myshopify.com/");
    
    // demo for the get by label
     
    // const sinup_btn2 = page.getByRole("link", {name:'Sign up'});
    // await sinup_btn2.click();
    // await page.waitForTimeout(2000);
    // const fname:Locator= page.locator("[name='customer[first_name]']");
    // await fname.fill("test")
    // await page.locator("[name='customer[last_name]']").fill("LAST NAME");
    // await page.locator("[name='customer[email]']").fill("Lname@gmail.com");
    // await page.locator("[name='customer[password]']").fill("Lname");
    
    // await page.waitForTimeout(2000);

    // get by title
    await page.getByTitle('Search').click();
    await page.waitForTimeout(2000);
      


















/*

    const logo:Locator = page.getByAltText("Grey jacket");
    
      // verifying the logo present or not 
    await expect(logo).toBeVisible();
    await logo.click();
    const titl = await page.title();
    await page.waitForTimeout(3000);
    console.log(`Title of the page is: ${titl}`)


    // Next element getByText

    //const catalog_btn: Locator =page.getByText("You Might Also Like...");
    const catalog_btn: Locator =page.getByText(/You\s+Might\s+Also\s+Like/); 
    await expect(catalog_btn).toBeVisible();
    console.log("Given text is getting displayed")


    // Example for the get by Role

    const login_btn:Locator = page.getByRole('link').and(page.locator('#customer_login_link'));
    await login_btn.click();
    await page.waitForTimeout(3000);

    // finding the login locator
    const uname_text_field = page.getByRole("textbox").and (page.locator("#customer_email"));
    const pwd_text_field = page.getByRole("textbox").and (page.locator("#customer_password"));

    //const pwd_text_field2 = page.getByRole("textbox",{name:'customer[email]'});

    
    uname_text_field.fill("test12345")
    await page.waitForTimeout(2000);
    pwd_text_field.fill("test@123")
    await page.waitForTimeout(3000);

    const sinup_btn = page.getByRole("link", {name:'Sign up'});
    await sinup_btn.click();

    await page.waitForTimeout(3000);
    console.log(await page.title());

    await expect(page.getByRole("heading",{name:'Create Account'})).toBeVisible();


    



*/



})