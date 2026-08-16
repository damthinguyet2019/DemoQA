import { test } from "@playwright/test";

test.describe("Alerts Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/alerts");
  });

  test("Click Alert Button", async ({ page }) => {
    await page.locator("#alertButton").click();
    const alert = await page.waitForEvent("dialog");
    console.log(alert.message());
    await alert.accept();
  });
});
