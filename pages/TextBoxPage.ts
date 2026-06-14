import { Page } from "@playwright/test";
export class TextBoxPage {
    readonly page:Page;
readonly txtFullName;
readonly txtEmail;
readonly txtCurrentAddress;
readonly txtPermanentAddress;
readonly btnSubmit;
readonly lbName;
readonly lbEmail;
readonly lbCurrentAddress;
readonly lbPermanentAddress;

constructor(page: Page) {
    this.page = page;
    this.txtFullName = page.locator("#userName");
    this.txtEmail = page.locator("#userEmail");
    this.txtCurrentAddress = page.locator("#currentAddress");
    this.txtPermanentAddress = page.locator("#permanentAddress");
    this.btnSubmit = page.locator("#submit");
    this.lbName = page.locator("#name");
    this.lbEmail = page.locator("#email");
    this.lbCurrentAddress = page.locator("xpath=//p[@id='currentAddress']");
    this.lbPermanentAddress = page.locator("xpath=//p[@id='permanentAddress']");
   
}
async goTo() {
    await this.page.goto("/text-box");
}
async inputData(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.txtFullName.fill(fullName);
    await this.txtEmail.fill(email);
    await this.txtCurrentAddress.fill(currentAddress);
    await this.txtPermanentAddress.fill(permanentAddress);
    await this.btnSubmit.click();
}
async getTextByLocator(locator:any): Promise<string> {
    const originalText = await locator.textContent();
    const index: number = originalText?.indexOf(":");
    return originalText.substring(index + 1, originalText.length).trim();
}
async getCssValue(locator:any): Promise<string> {
    return await locator.getCssValue("color");
  
}
async getAtributeName(locator:any, attributeName: string): Promise<string> {
    return await locator.getAttribute(attributeName);
}   
}