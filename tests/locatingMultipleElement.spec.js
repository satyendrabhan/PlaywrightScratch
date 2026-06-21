const {test, expect} = require('@playwright/test')

test('Locate Multiple element', async({page})=>{
    await page.goto('https://demoblaze.com/')
    //const cardTitles =await page.locator("(//div[@class='card-block']//h4[@class='card-title'])").textContent()
    const links = await page.$$('a')
    for (const link of links){
        const titles =await link.textContent()
        console.log('Print the Titles', titles)
    }

    await page.waitForSelector("//div[@class='card-block']//h4//a")
    const products =await page.$$("//div[@class='card-block']//h4//a")
    for(const product of products){
        const productItem = await product.textContent()
        console.log('Name of the product', productItem)

    }
})