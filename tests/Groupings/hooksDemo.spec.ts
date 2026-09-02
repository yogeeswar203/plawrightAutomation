import test from "@playwright/test";

test.beforeAll(async()=>{
    console.log(`Data base connection successfully exstablished`)
})

test.beforeEach(async()=>{
    console.log(`Test Name: before each`)
})

test("TC001",async()=>{
    console.log("Test case 1 execution is started")
});

test("TC002",async()=>{
    console.log("Test case 2 execution is started")
});

test.afterEach(async()=>{
    console.log(`Test Name: After each`)
})

test.afterAll(async()=>{
    console.log(`Data base connection successfully closed`)
})