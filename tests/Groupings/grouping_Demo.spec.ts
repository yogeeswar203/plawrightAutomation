import {test,expect} from "@playwright/test";

test.describe("Group 1",()=>{

    test("Test 1",async()=>{
        console.log("Executing the test case 1");
    });
    test("Test 2",async()=>{
        console.log("Executing the test case 2");
    });

})

test.describe("Group 2",()=>{

    test("Test 3",async()=>{
        console.log("Executing the test case 1-1");
    });
    test("Test 4",async()=>{
        console.log("Executing the test case 2-2");
    });

})