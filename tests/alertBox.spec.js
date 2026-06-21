const { test, expect } = require('@playwright/test')

test('Handle Alert Box', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    await page.click("//button[text()='Simple Alert']")
})