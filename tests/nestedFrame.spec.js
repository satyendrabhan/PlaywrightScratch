const {test, expect} = require('@playwright/test')

test('Handle nested iframe', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    await page.locator("//a[text()='Iframe with in an Iframe']").click()
    
})