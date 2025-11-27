import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.powerhrg.com/');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.locator('#dropdown-button-1').getByRole('link', { name: 'All Services' }).click();
  await page.getByRole('link', { name: 'Explore Services' }).click();
  await page.getByRole('link', { name: 'Windows Windows Explore' }).click();
  await page.getByRole('link', { name: 'Explore Windows' }).click();
  await page.locator('.block.min-w-full > span:nth-child(3)').first().click();
  await page.locator('div:nth-child(2) > .pl-16 > div > .block > span:nth-child(3)').click();
  await page.locator('div:nth-child(4) > .pl-16 > div > .block > span:nth-child(3)').click();
  await page.locator('div:nth-child(5) > .pl-16 > div > .block > span:nth-child(3)').click();
  await page.locator('div:nth-child(7) > .pl-16 > div > .block > span:nth-child(3)').click();
  await page.getByRole('link', { name: 'Return to homepage' }).click();
});
