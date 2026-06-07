import { test, expect } from '@playwright/test';
import { TextBoxPage  } from '../pages/TextBoxPage.js';

test.describe("Text Box Test", () => {
    let textBoxPage: TextBoxPage;

    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.goTo();   
    });    
    test("TC01-Verify that user can submit the form with valid data", async () => {
        await textBoxPage.inputdata("John Doe", "john.doe@example.com", "123 Main St", "456 Oak Ave");
       await expect(textBoxPage.page.locator("#output")).toBeVisible();
        // await expect(textBoxPage.page.locator("#output")).toContainText("John Doe");
        // await expect(textBoxPage.page.locator("#output")).toContainText("john.doe@example.com");
        // await expect(textBoxPage.page.locator("#output")).toContainText("123 Main St");
        // await expect(textBoxPage.page.locator("#output")).toContainText("456 Oak Ave"); 
        // Add assertions here to verify the form submission was successful, such as checking for a success message or verifying the submitted data.
    }); 
    }); 