import { test, expect } from '@playwright/test';

test("Verify that the title will be TTA Cart", async ({ page }) => {

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");


  await expect(page).toHaveTitle("TTACart - Login");

  console.log("Title is verified successfully");

  await page.waitForTimeout(5000);
});
