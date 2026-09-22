import fs from "fs";
const filePath = "D:/PlayWrightData/PlayWrightSession/tests/TestData/test.json";
class test {
    async getdata(filePath, dataKey) {
        let rawData;
        if (!fs.existsSync(filePath)) {
            throw new Error(`File Not foun ${filePath}`);
        }
        else {
            const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        }
        if (rawData[dataKey] === undefined) {
            throw new Error(`Data key is not found ${dataKey}`);
        }
        else {
            console.log(rawData[dataKey]);
        }
    }
}
let testC;
testC = new test();
testC.getdata(filePath, "validUser");
