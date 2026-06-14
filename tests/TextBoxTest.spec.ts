import { test, expect } from '@playwright/test';
import { TextBoxPage  } from '../pages/TextBoxPage.js';

test.describe("Text Box Test", () => {
    let textBoxPage: TextBoxPage;

    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.goTo();   
    });    

    test("submit successfully", async () => {
        const fullName: string = "John Doe";
        const email: string = "john.doe@example.com";
        const currentAddress: string = "123 Main St";
        const permanentAddress: string = "456 Oak Ave";
        await textBoxPage.inputData(fullName, email, currentAddress, permanentAddress);
        const actualFullName: string = await textBoxPage.getTextByLocator(textBoxPage.lbName);
        const actualEmail: string = await textBoxPage.getTextByLocator(textBoxPage.lbEmail);
        const actualCurrentAddress: string = await textBoxPage.getTextByLocator(textBoxPage.lbCurrentAddress);
        const actualPermanentAddress: string = await textBoxPage.getTextByLocator(textBoxPage.lbPermanentAddress);

        await expect(actualFullName).toBe(fullName);
        await expect(actualEmail).toBe(email);
        await expect(actualCurrentAddress).toBe(currentAddress);
        await expect(actualPermanentAddress).toBe(permanentAddress);
        //Add assertions here to verify the form submission was successful, such as checking for a success message or verifying the submitted data.
    }); 
    test("TC02-Email invalid email", async () => {
              const fullName: string = "John Doe";
        const email: string = "john.doeexample.com";
        const currentAddress: string = "123 Main St";
        const permanentAddress: string = "456 Oak Ave";
        await textBoxPage.inputData(fullName, email, currentAddress, permanentAddress);
        const actualEmail: string = await textBoxPage.getAtributeName(textBoxPage.txtEmail, 'class');
        await expect(actualEmail).toContain("field-error"); // Assuming the input field gets a class "field-error" for invalid email

    });
});