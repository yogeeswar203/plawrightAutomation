import test, { expect } from "@playwright/test";
import { Expect } from "@playwright/test";

test("Title", async ({page})=>
{
   await page.goto("https://playwright.dev/docs/intro");

   let title:string = await page.title();
   console.log("Title is: ", title);

    expect(page).toHaveTitle("Installation | Playwright");


}
)