const {test, expect} = require('@playwright/test')

test('Auto sugegest dropdown', async({page})=>{
    test.setTimeout(50000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@name='username']").fill('Admin')
    await page.locator("//input[@type='password']").fill('admin123')
    await page.locator("//button[@type='submit']").click()
    await page.locator("//a[normalize-space()='PIM']").click()
    await page.waitforTimeout(5000)
    const options=await page.$$("//div[@role='listbox']")
    for(let option of options){
        const titles=await option.textContent()
        console.log('Dropdown title is:',titles)

    }
    page.pause()
})