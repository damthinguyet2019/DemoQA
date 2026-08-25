import type { Locator, Page } from "@playwright/test";

export class AlertsPage {
    readonly btnAlert: Locator;
    readonly btnAlertWithTime: Locator;
    readonly btnAlertWithConfirmBox: Locator;
    readonly btnAlertWithPromptBox: Locator;
    readonly lblAlert: Locator;
    readonly lblPromptResult: Locator;
    readonly lblConfirmResult: Locator;
    
    

    constructor(public readonly page: Page) {
         this.btnAlert = page.locator("#alertButton");
        this.btnAlertWithTime = page.locator("#timerAlertButton");
        this.btnAlertWithConfirmBox = page.locator("#confirmButton");
        this.btnAlertWithPromptBox = page.locator("#promptButton");
        this.lblAlert = page.locator("xpath=//h1[text()='Alerts']");
        this.lblPromptResult = page.locator("#promptResult");
        this.lblConfirmResult = page.locator("#confirmResult");
    }   
   
}