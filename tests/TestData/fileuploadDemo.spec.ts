import test from "@playwright/test";

test.beforeEach("File upload test case:",async({page})=>{

    await page.goto("https://practice.expandtesting.com/upload");
    await page.waitForTimeout(5000);
})


test.afterEach("Closing the page after the test",async({page})=>{
    await page.waitForTimeout(5000);
    await page.close();
})


test("TC001: Verify single file upload", async({page})=>{
    console.log("**************** Executing the handling upload single file scenario ****************")
    console.log();

    // Locating the file upload element
    const upload_locator = page.locator("#fileInput");
    const btn_upload_locator = page.locator("#fileSubmit");
    const success_text_locator = page.locator("div h1");

    // uloading the single file
    await upload_locator.setInputFiles("tests/Uploads/test_file1.txt");
    await btn_upload_locator.click();
    let successMessage = await success_text_locator.innerText();
    console.log(successMessage);
// D:\PlayWrightData\PlayWrightSession\tests\Uploads\fileuploadDemo.spec.ts


















    console.log();
    console.log("**************** End of the handling upload single file scenario ****************")    
})