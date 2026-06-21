const {test, expect} = require('@playwright/test')

test('capture screenshot', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'LogIn page.png'})
})

test('capture full page screenshot', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'Fullpage.png',fullPage: true})

})