# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TextBoxTest.spec.ts >> Text Box Test >> submit successfully
- Location: tests\TextBoxTest.spec.ts:12:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoqa.com/text-box", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | export class TextBoxPage {
  3  |     readonly page:Page;
  4  | readonly txtFullName;
  5  | readonly txtEmail;
  6  | readonly txtCurrentAddress;
  7  | readonly txtPermanentAddress;
  8  | readonly btnSubmit;
  9  | readonly lbName;
  10 | readonly lbEmail;
  11 | readonly lbCurrentAddress;
  12 | readonly lbPermanentAddress;
  13 | 
  14 | constructor(page: Page) {
  15 |     this.page = page;
  16 |     this.txtFullName = page.locator("#userName");
  17 |     this.txtEmail = page.locator("#userEmail");
  18 |     this.txtCurrentAddress = page.locator("#currentAddress");
  19 |     this.txtPermanentAddress = page.locator("#permanentAddress");
  20 |     this.btnSubmit = page.locator("#submit");
  21 |     this.lbName = page.locator("#name");
  22 |     this.lbEmail = page.locator("#email");
  23 |     this.lbCurrentAddress = page.locator("xpath=//p[@id='currentAddress']");
  24 |     this.lbPermanentAddress = page.locator("xpath=//p[@id='permanentAddress']");
  25 |    
  26 | }
  27 | async goTo() {
> 28 |     await this.page.goto("/text-box");
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  29 | }
  30 | async inputData(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
  31 |     await this.txtFullName.fill(fullName);
  32 |     await this.txtEmail.fill(email);
  33 |     await this.txtCurrentAddress.fill(currentAddress);
  34 |     await this.txtPermanentAddress.fill(permanentAddress);
  35 |     await this.btnSubmit.click();
  36 | }
  37 | async getTextByLocator(locator:any): Promise<string> {
  38 |     const originalText = await locator.textContent();
  39 |     const index: number = originalText?.indexOf(":");
  40 |     return originalText.substring(index + 1, originalText.length).trim();
  41 | }
  42 | async getCssValue(locator:any): Promise<string> {
  43 |     return await locator.getCssValue("color");
  44 |   
  45 | }
  46 | async getAtributeName(locator:any, attributeName: string): Promise<string> {
  47 |     return await locator.getAttribute(attributeName);
  48 | }   
  49 | }
```