import {test,expect} from "@playwright/test";

/*
npx playwright test tagsDemo.spec.ts --headed --grep "@smoke"
npx playwright test tagsDemo.spec.ts --headed --grep "@sanity"
npx playwright test tagsDemo.spec.ts --headed --grep "@regression"
*/


test("@sanity Verify title",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

test("@smoke Verify url",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL(/google/);
})

test("Enter text url",{tag:'@regression'},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL(/google/);
    await page.locator("textarea[name='q']").fill("name");
})

test("Enter text url 2",{tag:['@regression','@sanity','@smoke']},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL(/google/);
    await page.locator("textarea[name='q']").fill("name");
})