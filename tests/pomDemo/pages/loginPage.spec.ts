import {test, Page, Locator, expect } from "@playwright/test";

export class loginPage{

    // Defining the elements on the page
    private readonly page: Page;
    private readonly loginLink : Locator;
    private readonly unsernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton:Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.loginLink = this.page.locator("#login2");
        this.unsernameInput = this.page.locator("#loginusername");
        this.passwordInput = this.page.locator("#loginpassword");
        this.loginButton = this.page.locator("button[onclick='logIn()']");
    }

    // Creating the actions for the each methods

    async navigatingToLogin(){
        await this.loginLink.click();

    }

    async enterUserName(username:string)
    {
        await this.unsernameInput.clear();
        await this.unsernameInput.fill(username)
    }

    async enterPassword(password:string)
    {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }
    
    async clickOnLogin(){
        await this.loginButton.click();

    }

    async userLogin(username:string, password:string)
    {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
        await this.page.waitForTimeout(5000);
    }


}