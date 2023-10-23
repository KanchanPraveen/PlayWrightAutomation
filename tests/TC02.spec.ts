import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.getByText('Broken Links - Images').click();
  //Assertion
  await expect(page.locator('//img[@src= "/images/Toolsqa_1.jpg"]')).toBeVisible()
});