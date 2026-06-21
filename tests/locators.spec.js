const {test, expect} = require('@playwright/test')

test('Locators', async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('satyendrabhan90')
    await page.locator('#loginpassword').fill('Sandy@90')
    await page.locator('//button[normalize-space()="Log in"]').click()
    const logoutLink =await page.locator("//a[normalize-space()='Log out']")
    await expect(logoutLink).toBeVisible();
})