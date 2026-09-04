import {test, expect, Locator, Page} from "@playwright/test";

export class cartPage{

    // defining the elememts at class level
    private readonly page: Page;
    private readonly cartButton: Locator;
    private readonly productRows:Locator;
    private readonly productNames: Locator;
    private readonly productPrice: Locator;
    private readonly deleteButton: Locator;
    private readonly TotalPrice: Locator;
    private readonly homepageLink:Locator;
    private readonly cartButton1:Locator;
    private readonly cartButton2:Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.cartButton     =  this.page.getByRole('link',{name:'Cart'});
        this.cartButton1 = this.cartButton.first();
        this.cartButton2 = this.page.locator("#cartur")

        this.productRows    =  this.page.locator("#tbodyid tr");
        this.productNames   =  this.page.locator("#tbodyid tr td:nth-child(2)");
        this.productPrice   =  this.page.locator("#tbodyid tr td:nth-child(3)");
        this.deleteButton   =  this.page.locator("#tbodyid tr td:last-child a");
        this.TotalPrice     =  this.page.locator("#totalp");
        this.homepageLink   = this.page.getByRole('link',{name:'Home '})
    };

    async clickonHomePage(){
        await this.homepageLink.click();
    }

    async waitforCart(){
        await this.page.waitForSelector('##tbodyid tr',{state:'visible'});
    }

    async clickOnCartButton(){
        await this.cartButton2.click();
        await this.page.waitForTimeout(40000);
    };

    async getTotalCartValue(){

        const totalText = await this.TotalPrice.textContent();
        const price = (totalText?.trim() || '0');
        return parseFloat(price);
    };

async waitForCartToLoad() {
    await this.page.waitForSelector('#tbodyid tr', { state: 'visible' });
  }

    async isProductInCart(productName:string)
    {
        const productNames = await this.productNames.all();
        for(const product of productNames)
        {
            const name = (await product.textContent())?.trim();
            if(name === productName)
            {
                console.log(`Given Product name is availble in the CART ${productName}`)
                return true;
            }
        }
        return false;
    };


    async getallProductNames()
    {
        const productNames  = await this.productNames.all();
        const names:string[] = [];

        for(const product of productNames)
        {
            const name = (await product.textContent())?.trim() || '';
            names.push(name);
        }
        return names;
    }

    async getPriceAllProducts(){
        const price = await this.productPrice.all();
        const prices:number[] = [];

        for(const itemPrice of price)
        {
            const itp = (await itemPrice.textContent())?.trim() || '';
            prices.push(parseFloat(itp));
        }
        return prices;
    }

    async getTotalPrice(){
        const price = await this.productPrice.all();
        const prices:number[] = [];
        let exptedPrice=0;

        for(const itemPrice of price)
        {
            const itp = (await itemPrice.textContent())?.trim() || '';
            prices.push(parseFloat(itp));
        }
        
        for(const i of prices)
        {
            exptedPrice = exptedPrice + i;
        }
        return exptedPrice;
    }



}

