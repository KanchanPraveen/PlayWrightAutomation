import { test, expect } from '@playwright/test';

test('API Creation of User Account', async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            "userName": "SumanJayaprakash1",
            "password": "Suman@123"
        }
    })
    
    expect(response.status()).toBe(201)
    const text = await response.text();
    expect(text).toContain('SumanJayaprakash1')
    console.log(await response.json())



})