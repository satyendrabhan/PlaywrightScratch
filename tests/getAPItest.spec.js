const {test, expect}= require('@playwright/test')

test('Get API request test', async({request})=>{
   const response= await request.get('https://jsonplaceholder.typicode.com/posts/1')
    expect (response.status()).toBe(200)
    const responseBody =await response.body()
    console.log(responseBody.toString())
    const responseJSON =await response.json()
    console.log(responseJSON)
    expect(responseJSON).toHaveProperty("id",1)
    const responseText=await response.statusText()
    console.log(responseText)

})