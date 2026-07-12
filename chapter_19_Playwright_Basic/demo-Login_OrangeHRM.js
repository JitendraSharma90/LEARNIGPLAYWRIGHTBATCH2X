import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.getByRole('heading', { name: 'Login' }).click();
  await expect(page.locator('form')).toContainText('Username');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
  await expect(page.locator('form')).toContainText('Password');
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Forgot your password?').click();
  await page.getByRole('heading', { name: 'Reset Password' }).click();
  await page.getByText('Please enter your username to').click();
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await page.getByText('Required').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});