const{test, expect}= require('@playwright/test')
    let page;

test.beforeEach(async({browser})=>{
    page = await browser.newPage()
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('satyendrabhan90')
    await page.locator('#loginpassword').fill('Sandy@90')
    await page.locator('//button[text()="Log in"]').click()
})

test.afterEach(async ()=>{
     await page.locator('#logout2').click()
})

test('Home page test', async ()=>{
    const product=await page.$$('.hrefch')
    console.log('Total Product are:', await product.length)
    await expect(product).toHaveLength(9)
})

test('Add Product to the cart test', async ()=>{

    //Add Product to cart
    await page.locator('//a[text()="Samsung galaxy s6"]').click()
    await page.locator('//a[text()="Add to cart"]').click()

    page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
})
