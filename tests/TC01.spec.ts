import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  
  await expect(page).toHaveTitle(/.*DEMOQA/)
  
  //Assertions 
  //check element present or not
  await expect(page.locator('text=Elements')).toHaveCount(1);
  if(await page.$('text=Elements')){
    await page.locator('text=Elements').click();
  }
  //Assertions 
  //check element present or not
  if(await page.$('text=Web Tables')){
    await page.locator('text=Web Tables').click();
  }
  
  await page.getByRole('button', { name: 'Add' }).click();

  //check text
  await expect(page.locator('id=firstName-label')).toHaveText('First Name')
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Alden');
  
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Cantrel');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('test@test.com');
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('30');
  await page.getByPlaceholder('Salary').fill('12345');
  await page.getByPlaceholder('Department').click();
  await page.getByPlaceholder('Department').fill('QA');
});