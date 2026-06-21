const {test, expect} = require('@playwright/test')

test('Dropdown testing', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption('India')
    // by using visible text, ({label:'India' }) using label, ({index=1}) by using index, ({value='India'}) by using value

    //Options avaliable in the dropdown
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10)

    const optionName = await page.$$('#country option')
    console.log('Total aoption are: ',optionName.length)

    await expect(optionName.length).toBe(10)

    const content =await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy()

    let status = false
    for(const option of optionName){
        console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('France')){
            status = true;
            break;
        }

    }
    expect(status).toBeTruthy()


    //await page.pause()
})