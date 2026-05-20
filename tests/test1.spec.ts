import { test,  expect } from "@playwright/test";

test("Verify the page title", async ({page})=>
{
   await page.goto("https://playwright.dev/docs/intro");

   let title:string = await page.title();
   console.log("Title is: ", title);

    await expect(page).toHaveTitle("Installation | Playwright");
    await expect(page).toHaveURL(/playwright/);
    
// testing1git add .


}
)