const{test, expect} = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../testData/testData.json')))

test.describe('Testing with multiple data', async ()=>{
for (const {email, password, validity} of testData){
    
        test(`Login with ${email} and ${password}`, async ({page})=>{
            await page.goto('https://demowebshop.tricentis.com/login')

            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password)
            await page.locator('input[value="Log in"]').click()

            if(validity === 'valid'){
                const logoutLink = await page.locator(".ico-logout")
                await expect(logoutLink).toBeVisible({timeout:5000})
            }else{
                const errorMessage = await page.locator('.validation-summary-errors')
                await expect(errorMessage).toBeVisible({timeout:5000})
            }

        })
    }
})