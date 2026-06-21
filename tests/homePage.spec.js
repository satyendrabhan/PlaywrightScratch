const {test, expect} = require('@playwright/test')

test('Validate the url and title', async ({page})=>{
    await page.goto('https://demoblaze.com/')
    const pageTitle =await page.title()
    console.log('Page have Title',pageTitle)
    await expect(page).toHaveTitle('STORE')
    const pageURL = await page.url()
    console.log('Page have url', pageURL)
    await expect(page).toHaveURL('https://demoblaze.com/')
    
})