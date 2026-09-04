import {test,expect,Page, Locator} from "@playwright/test";

export class HomePage{
    // Defining the elements

    private readonly page: Page;
    private readonly all_products: Locator;
    private readonly addToCartButton : Locator;
    private readonly cartLink: Locator;
    private readonly categoryLink: Locator;
    private readonly homeLink: Locator;



    constructor (page:Page)
    {
        this.page = page;
        this.all_products = this.page.locator("h4 a");
        this.addToCartButton = this.page.locator("a:has-text('Add to cart')");
        this.cartLink = this.page.locator("#cartur");
        this.categoryLink = this.page.locator(".list-group a");
        this.homeLink = this.page.locator("ul li a");

    }

    

    // Implementing the action methods

    async clickOnCartLink(){
        await this.cartLink.click();
    }



    async selectProduct(productName:string){

        const productElements = await this.all_products.all();
        for(const product of productElements)
        {
            const nameOfProduct = await product.textContent();
            if(nameOfProduct?.trim() === productName)
            {
                await product.click();
                return;
            }
            
        }
        throw new Error(`Product ${productName} not found on the page`)
    }

    // getting all the product names
    
    async getAlltheProductNames(){
        const products = await this.all_products.all();
        const names:string[] = [];
        for(const p of products)
        {
            const pName = (await p.textContent())?.trim() || '';
            names.push(pName);
        }
        console.log(names)
    }

    async addProductToCart(productName:string)
    {
        await this.selectProduct(productName);
        this.page.once('dialog',async dailog=>{
            if(dailog.message().includes('added'))
            {
                await this.page.waitForTimeout(2000);
                await dailog.accept();
            }
        })
        await this.addToCartButton.click();
    }

    async clickOnAddToCart(){
        await this.addToCartButton.click();
       
    }





}

