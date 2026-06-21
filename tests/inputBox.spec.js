const {test, expect}=require('@playwright/test')

test('Handle input box', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@type='checkbox' and @id='sunday']").check()
    expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked()
    expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy()

    //select multiple checkboxes

    const checkboxesLocators= [
                                "//input[@type='checkbox' and @id='sunday']",
                                "//input[@type='checkbox' and @id='monday']",
                                "//input[@type='checkbox' and @id='saturday']"
                            ]
                            for (let checkbox of checkboxesLocators ){
                                await page.locator(checkbox).check()
                                await page.pause()
                            }

                             for (let checkbox of checkboxesLocators ){
                                if(await page.locator(checkbox).isChecked()){
                                    await page.locator(checkbox).uncheck()
                                    await page.pause()
                                }
                             }
})