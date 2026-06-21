const {test,expect} = require('@playwright/test')

test('Built in locators', async({page})=>{
    test.setTimeout(35000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logoText = await page.getByAltText('company-branding')
    await expect(logoText).toBeVisible()
    
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click()
    const userName =await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(userName)).toBeVisible()
})