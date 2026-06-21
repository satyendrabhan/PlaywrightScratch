exports.loginPage=

class loginPage{
    consttructor(page){
        this.page=page
        this.loginLink=('#login2')
        this.userName=('#loginusername')
        this.password=('#loginpassword')
        this.loginButton=('//button[normalize-space()="Log in"]')
    }
    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html')
    }

    async loginToApp(username,password){
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginButton).click()
    }
}