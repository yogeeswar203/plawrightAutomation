import {test,expect} from "@playwright/test";
import { singnUpPage } from "./pages/signupPage.spec";
import { loginPage } from "./pages/loginPage.spec";


test.describe.configure({mode:'serial'});

test.describe("test",async()=>{

    const baseUrl = "https://www.demoblaze.com/index.html";
    const testpassword = "Test@203";
    const testusername = "user1";
    let randomUserName:{username:string; password:string} |undefined;

    test.beforeEach(async({page})=>{
        
        await page.goto(baseUrl);
        await page.waitForTimeout(5000);
    });

    


    test("TC_001 User can signup with a new account", async({page})=>{
        const signupPage = new singnUpPage(page);
        randomUserName =
        {
            username:`test_${Date.now()}`,
            password:testpassword
        }
        const alertMessage = await signupPage.signUP(randomUserName.username, randomUserName.password);
        console.log(`User Sign up state: ${alertMessage}`);
        expect(alertMessage).toContain("Sign up successful.");


    });

    test("TC002 Logging the User",async({page})=>{
        expect(randomUserName).toBeDefined();
        const login_page= new loginPage(page);
        
        await login_page.navigatingToLogin();
        await login_page.userLogin(randomUserName!.username,randomUserName!.password);
        
    });

})