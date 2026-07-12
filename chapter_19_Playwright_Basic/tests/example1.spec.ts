import { test, expect } from '@playwright/test';

test("Verify the title  that title will be TTA cart", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

});