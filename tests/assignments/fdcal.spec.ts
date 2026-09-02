import {test, expect, Page} from "@playwright/test";
import fs from  'fs';
import {parse} from 'csv-parse/sync';
import xlsx from 'xlsx';
import { json } from "stream/consumers";

// File path 

const filepath = "tests/TestData/FDCalData.json";


// Reading the data from the JSON File
const jsonData = JSON.parse
(
    fs.readFileSync(filepath,'utf-8')
);


// Reading the data from the CSV File
const csvFilePatj = "tests/TestData/fdCal.csv"
const CSVData = fs.readFileSync(csvFilePatj,'utf-8');

const records:any[] = parse(CSVData,
    { 
        columns:true,
        skip_empty_lines:true,
    }
);

// Reading data from the excel
const fd_xlpath = "tests/TestData/fdCalxl.xlsx";

const workbook = xlsx.readFile(fd_xlpath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData:any[] = xlsx.utils.sheet_to_json(sheet);


















// One common function for the filling the data

async function calculateFD(page:Page, data:any) {
    await page.locator("#principalNumber").fill(String(data.PrincipleAmount));
    await page.waitForTimeout(1000);
    await page.locator("#rateNumber").fill(String(data.interestRate));
    await page.waitForTimeout(1000);
    await page.locator("#tenureNumber").fill(String(data.Tenure));
    await page.waitForTimeout(1000);

    // Selecting the year or month
    if(data.Type === "Years")
    {
        await page.locator("button[data-unit='years']").click();
        await page.waitForTimeout(1000);
    }else (data.Type === "Months")
    {
        await page.locator("button[data-unit='months']").click();
        await page.waitForTimeout(1000);
    }

    await page.waitForTimeout(1000);
    await expect(page.locator("#maturityValue")).toHaveText(data.matuValu.toString())
    
}

test.skip("Verify data",async ({page})=>{

    await page.goto("https://sdetqa.vercel.app/fd-calculator");
    for(const data of jsonData)
    {
        await page.waitForTimeout(5000);
        await calculateFD(page, data);
    }
});

test.skip("Verify data csv", async({page})=>{
    await page.goto("https://sdetqa.vercel.app/fd-calculator");
    for(const data1 of records)
    {
        await page.waitForTimeout(2000);
        await calculateFD(page, data1);
    }
});


test.only("data using the excel file",async({page})=>{
    await page.goto("https://sdetqa.vercel.app/fd-calculator");
    for(const data2 of excelData)
    {
        await page.waitForTimeout(2000);
        await calculateFD(page, data2);
    }
});