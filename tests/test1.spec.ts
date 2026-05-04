import { test, Expect, expect } from "@playwright/test";

test("Title", async ({page})=>
{
   await page.goto("https://playwright.dev/docs/intro");

   let title:string = await page.title();
   console.log("Title is: ", title);

    await expect(page).toHaveTitle("Installation | Playwright");
    


}
)