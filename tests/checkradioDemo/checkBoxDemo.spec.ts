import{test, expect, Locator} from "@playwright/test"

test("validate checkboxes", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Finding the name, email & phone Locators
    const name_txt:Locator = page.locator("#name");
    const emal_txt:Locator = page.locator("#email");
    const phone_txt:Locator = page.locator("#phone");


    // Entering the values in the text boxes

    await name_txt.fill("Jhon");
    await emal_txt.fill("test@hotmail.com");
    await phone_txt.fill("84521500");

    await page.waitForTimeout(3000);

    await name_txt.clear();
    await emal_txt.clear();
    await phone_txt.clear();

    await name_txt.fill("Jhon");
    await emal_txt.fill("test@hotmail.com");
    await phone_txt.fill("84521500");

    await page.waitForTimeout(3000);

    await expect(name_txt).toBeEditable();
    await expect(name_txt).toBeVisible();

    const len=await name_txt.getAttribute("maxlength");
    
    expect(len).toBe(15);







})


test("Verify Radio buttons",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    // radio button element

    const male_raio:Locator = page.locator("#male");
    const fmale_raio:Locator = page.locator("#male");

    expect(await male_raio.isEnabled());
    expect(await male_raio.isVisible());
    await male_raio.click();

    await page.waitForTimeout(2000);

    expect(await fmale_raio.isEnabled());
    expect(await fmale_raio.isVisible());
    await fmale_raio.click();


    await page.waitForTimeout(4000);
})


test.only("Verify Check boxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    
    const sun_chk_box = page.getByLabel("Sunday");
    expect(await sun_chk_box.isEnabled()).toBe(true);
    await sun_chk_box.click();
    await page.waitForTimeout(2000);
    await sun_chk_box.click();

    if(await sun_chk_box.isChecked())
    {
        console.log("check box is checked already")
    }else
    {
        await sun_chk_box.click();
        console.log("check box is checked now")
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    await page.waitForTimeout(5000);
})