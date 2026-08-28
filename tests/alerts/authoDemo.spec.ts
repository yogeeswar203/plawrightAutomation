import test from "@playwright/test";

test("Verifying the basic authentication", async({browser})=>{

    // Verifying the basic authentication pop-up
    console.log("**************** Executing the basic authentication POP-UP handling scenario ****************")
    console.log();
    const mycontext = await browser.newContext(
        {
            httpCredentials:{
                username:"admin",
                password:"admin"

            }
        }
    );
    const page1=await mycontext.newPage();
    await page1.goto("https://the-internet.herokuapp.com/basic_auth");
    await page1.waitForTimeout(2000);
    console.log("Basic authentication is completed successfully");


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    await page1.waitForTimeout(2000);
    await page1.close();
    console.log();
    console.log("**************** End Of the basic authentication POP-UP handling scenario ****************")
})