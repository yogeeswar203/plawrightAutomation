import {test, expect, Page, Locator} from "@playwright/test";

export class singnUpPage
{

    // Defining the properties
    private readonly page: Page;
    private readonly signupLink: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signupButton: Locator;
    private readonly closeButton: Locator;


    // Initializing the context

    constructor(page:Page)
    {
        this.page = page;
        this.signupLink = this.page.locator("#signin2");
        this.usernameInput = this.page.locator("#sign-username");
        this.passwordInput = this.page.locator("#sign-password");
        this.signupButton = this.page.locator("button[onclick='register()']");
        this.closeButton = this.page.locator("modal-footer button:has-text('Close')")
    }

    async navigateToSignUp(){
        await this.signupLink.click();
    }

    async fillusername(username:string){
        await this.usernameInput.clear();
        await this.usernameInput.fill(username)
    }

    async fillpassword(password:string)
    {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async clickOnSignUp(){
        await this.signupButton.click();
    }

    async clickOnCloseButton(){
        await this.closeButton.click();
    }


    // calling all the methods in a sequance
    async signUP(username:string, password:string):Promise<string>
    {
        await this.navigateToSignUp();
        await this.page.waitForTimeout(2000);
        await this.fillusername(username);
        await this.fillpassword(password);

        // since after clicking signup it will open the dailog box hence we need to register a dailog
        const dailogPromise = this.page.waitForEvent('dialog');
        await this.clickOnSignUp();
        await this.page.waitForTimeout(2000);
        const dailog = await dailogPromise;
        const message = dailog.message();
        await this.page.waitForTimeout(2000);
        await dailog.accept();
        return message;
    }





}