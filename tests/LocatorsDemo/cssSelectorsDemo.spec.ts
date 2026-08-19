// this file is demo for the CSS Selector




/*
1. Absolute CSS locators


2. Relative CSS locators
tag with id --> tag#id or #id
tag with class name tag.class or .class
tag with any attribute tag[attribute=value] or [attribute=value]

import {test, expect, Locator} from "@playwright/test";

await page.goto("https://demowebshop.tricentis.com/")

    // tag # id
    await page.waitForTimeout(50000);   

    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("test");
    await page.waitForTimeout(3000);

    // locating by the Class name

    await page.locator("input.search-box-text").clear();
    await page.locator("input.search-box-text").fill("iPhone");

    await page.waitForTimeout(2000);

*/

import { Locator, test, expect } from "@playwright/test";

test("Verify the CSS locators", async({page})=>
{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(4000);
    await page.locator("input[name='username']").fill("Admin");
    await page.waitForTimeout(4000);
    await page.locator("input[type='password']").fill("admin123")
    await page.waitForTimeout(3000);
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(6000);

    const pt:string = await page.title();
    const pt1:string = await page.locator("html>head>title").innerText();
    console.log("Title of the page is:",pt);
    console.log("Title of the page is:",pt1);

    if(pt==='OrangeHRM')
    {
        console.log("Page title is mathcing ");
    }else
    {
        console.log("Page title is not matching");
    }

   
      //await page.waitForTimeout(6000);  

       






}




)
