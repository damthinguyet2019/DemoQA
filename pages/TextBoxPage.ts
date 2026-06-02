import { Page } from "@playwright/test";
export class TextBoxPage {
    readonly page:Page;
readonly txtFullName;
readonly txtEmail;
readonly txtCurrentAddress;
readonly txtPermanentAddress;
readonly btnSubmit;
constructor(page: Page) {
    this.page = page;
    this.txtFullName = page.locator("#userName");
    this.txtEmail = page.locator("#userEmail");
    this.txtCurrentAddress = page.locator("#currentAddress");
    this.txtPermanentAddress = page.locator("#permanentAddress");
    this.btnSubmit = page.locator("#submit");

}
async goTo() {
    await this.page.goto("https://demoqa.com/text-box");
}
async inputdata(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.txtFullName.fill(fullName);
    await this.txtEmail.fill(email);
    await this.txtCurrentAddress.fill(currentAddress);
    await this.txtPermanentAddress.fill(permanentAddress);
    await this.btnSubmit.click();
}


}