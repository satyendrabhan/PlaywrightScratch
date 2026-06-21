const {test,expect} = require('@playwright/test')

test('Post API request test', async({request})=>{
        
    const authData={
                        "username" : "admin",
                        "password" : "password123"
                }  
                const response =await request.post('https://restful-booker.herokuapp.com/auth',
                        {headers:{'Content-Type': 'application/json'},data:authData})
                console.log(response.status())  
                await expect(response.status()).toBe(200)  
                const responseData = await response.json()
                console.log(responseData)
                expect(responseData).toHaveProperty('token')
})