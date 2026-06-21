const {test, expect} = require('@playwright/test')

test('Assertions Test', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')

    const logo=await page.locator('.header-logo')
    await expect (logo).toBeVisible()
})