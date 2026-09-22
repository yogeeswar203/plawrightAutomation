import fs from "fs";
import { test } from "@playwright/test";

const filePath = "D:/PlayWrightData/PlayWrightSession/tests/TestData/test.json";
class testJSONData {
  async getdata(filePath: string, dataKey: string) {
    let rawData: any;
    if (!fs.existsSync(filePath)) {
      throw new Error(`File Not foun ${filePath}`);
    } else {
      const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    if (rawData[dataKey] === undefined) {
      throw new Error(`Data key is not found ${dataKey}`);
    } else {
      console.log(rawData[dataKey]);
    }
  }
}

let testC;

test("v", async ({ page }) => {
  testC = new testJSONData();
  testC.getdata(filePath, "validUser");
  //await page.goto("https:www.google.com");
});
