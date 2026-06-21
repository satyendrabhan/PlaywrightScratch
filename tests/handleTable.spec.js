const{test, expect} = require('@playwright/test')

test('Handle table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator('#productTable')
    const colums =await table.locator('thead tr th')
    console.log('Number of clomuns are:', await colums.count())
    expect(await colums.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('Number of Rows are:',await rows.count())
    expect (await rows.count()).toBe(5)
    await page.waitForTimeout(5000)

    await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'Laptop')
    await selectProduct(rows,page, 'Tablet')

//     for(let i=0; i<await rows.count(); i++)
// {
//     const row=rows.nth(i)
//     const tds =row.locator('td')
//     for (let j=0; j< await colums.count();j++){
//         console.log(await tds.nth(j).textContent())
//     }
// }  

// Print the data pagination

const pages = await page.locator('.pagination li a')
console.log('Total number of pages', await pages.count())

for(let p=0; p< await pages.count(); p++)
    {
    if(p>0){
        await pages.nth(p).click()
    }
    for(let i=0; i<await rows.count(); i++)
        {
    const row=rows.nth(i)
    const tds =row.locator('td')
    for (let j=0; j< await tds.count()-1;j++)  
        {
        console.log(await tds.nth(j).textContent())
        }
        }  

    }
})

async function selectProduct(rows,page,name){
    const matchedRows= rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRows.locator('input').check()
}