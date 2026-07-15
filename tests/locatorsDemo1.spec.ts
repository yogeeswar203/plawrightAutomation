import {test, expect, Locator} from "@playwright/test";
/*   
        page.getByAltText()
        page.getByText()
        page.getByrole()
        page.getByRole()
        page.getByLabel()
        page.getByPlaceholder();
        page.getByTitle();
        page.getByTestId();

*/
test("locators Demo", async ({page})=>
    {
        /*
        await page.goto("https://demo.nopcommerce.com/");
        
        //const logo:Locator = page.getByAltText("nopCommerce demo store")
       // await expect(logo).toBeVisible();
        //await expect(logo).toBeDisabled();
        //const text_logo:Locator = page.getByText("Welcome to our store")
        //await expect(page.getByText("Welcome to ")).toBeVisible();
        //await expect(page.getByText(/Welcome\s+To\s+Our\s+Strore/)).toBeVisible();

        const btn_1:Locator = page.getByRole('link',{name:'Register'});
        await btn_1.click();
        expect(page.getByRole('heading',{name: 'Register'})).toBeVisible;
        //page.getByLabel

        // Demo 2 for the select by label

        await page.getByLabel("First name:").fill("Yogeeswar");
        await page.getByLabel("Last name:").fill("Achari");
        await page.getByLabel("Email:").fill("test@gmail.com");
        await page.getByLabel("Company name:").fill("MSN");

        // Demo for the getByPlaceholder

        await page.getByPlaceholder("Search store").fill("test");

        */
       
       await page.goto("https://automationexercise.com/")
       await page.getByRole("link", {name:' Signup / Login'}).click();
       
       await page.locator('[data-qa="login-email"]').fill("test@email.com");
       await page.locator('[data-qa="login-password"]').fill("test@123");

       await page.getByRole("textbox", {name:'name'}).fill("My Name");
       await page.locator('[data-qa="signup-email"]').fill("testsignup@email.com")


    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

)