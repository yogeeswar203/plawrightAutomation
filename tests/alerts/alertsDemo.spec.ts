import test, { expect } from "@playwright/test";

test.describe("Handling the alerts",()=>{

    test.beforeEach("Navigating to the Home page",async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/");
        await expect(page.getByText("Alerts & Popups")).toBeVisible();
    })

    test.skip("verifing the simple alert", async({page})=>{

        await page.waitForTimeout(2000);
        page.on("dialog",dailog=>dailog.accept());
        const simple_alert_locator = page.locator("#alertBtn");
        await simple_alert_locator.click();
        console.log("Alert is accepted");

    })

    test.skip("verifying the confirmation alert",async({page})=>{

        await page.waitForTimeout(2000);
        page.on("dialog",(dailog)=>{
            expect(dailog.type()).toBe("confirm")
            expect(dailog.message()).toContain("Press a button!")
            dailog.dismiss()});

        const confrim_alert = page.locator("#confirmBtn");
        await confrim_alert.click();
        console.log("Alert is accepted");


    })

    test("Prompt alert",async({page})=>{

        await page.waitForTimeout(2000);

        page.on("dialog",dailog=>{
            if(dailog.type()==="prompt")
            {
                dailog.accept("Test Entered");
            }else{
                dailog.dismiss();
            }
            
        })
        const prompt_locator = page.locator("#promptBtn");
        await prompt_locator.click();
        console.log("Entered the given text");
            })

    })
























