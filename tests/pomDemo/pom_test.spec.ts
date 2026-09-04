import {test,expect} from "@playwright/test";
import { singnUpPage } from "./pages/signupPage.spec";
import { loginPage } from "./pages/loginPage.spec";
import { HomePage } from "./pages/Homepage.spec";
import { cartPage } from "./pages/cartpage.spec";



test.describe.configure({mode:'serial'});

test.describe("test",async()=>{

    const baseUrl = "https://www.demoblaze.com/index.html";
    const testpassword = "Test@203";
    const testusername = "user1";
    let randomUserName:{username:string; password:string} |undefined;
    const testProduct = "Nexus 6";
    const testProduct2 = "Samsung galaxy s6";

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
         

        const hompage = new HomePage(page);
        await hompage.getAlltheProductNames();

        await hompage.addProductToCart(testProduct);
        //await hompage.clickOnAddToCart();

       

        
        await page.waitForTimeout(3000);



        // creating the object for the add cart 
        const cartPageObject = new cartPage(page);
        await cartPageObject.clickonHomePage();

        await page.waitForTimeout(3000);
        await hompage.addProductToCart(testProduct2);
        //await hompage.clickOnAddToCart();

        
        await hompage.clickOnCartLink();
        await cartPageObject.waitForCartToLoad();
        const isProductInCart = await cartPageObject.isProductInCart(testProduct);
        expect(isProductInCart).toBe(true); 
        console.log(await cartPageObject.getTotalCartValue());  
        console.log(await cartPageObject.getallProductNames());
        console.log(await cartPageObject.getPriceAllProducts());  
        console.log(await cartPageObject.getTotalPrice());
        expect(await cartPageObject.getTotalCartValue()).toBe(await cartPageObject.getTotalPrice());
    });

})