import type { BrowserContext, Locator, Page } from "@playwright/test";

export class BrowserWindowsPage {
  clickNewWindowButton() {
      throw new Error("Method not implemented.");
  }
  readonly btnNewTab: Locator;
  readonly context: BrowserContext;
  readonly btnNewWindow: Locator;
  readonly btnNewWindowMessage: Locator;

  constructor(public readonly page: Page, context: BrowserContext) {
    this.context = context;
    this.btnNewTab = page.locator("#tabButton");
    this.btnNewWindow = page.locator("#windowButton");
    this.btnNewWindowMessage = page.locator("#messageWindowButton");
  }
  async gotoBrowserWindowsPage() {
    await this.page.goto("https://demoqa.com/browser-windows");
  } 
  async clickNewTabButton() : Promise<Page> {
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        this.btnNewTab.click(),
    ]);
    await newPage.waitForLoadState();
    
    return newPage;
   } 
   
 async clickNewWindowButton() : Promise<Page> {
    const [newWindowPage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        this.btnNewWindow.click(),
    ]);
    await newWindowPage.waitForLoadState();
    return newWindowPage;
   } 
  

   async clickNewWindowMessageButton() : Promise<Page> {
    const [newWindowMessagePage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        this.btnNewWindowMessage.click(),
    ]);
    await newWindowMessagePage.waitForLoadState();
    return newWindowMessagePage;
   }
}