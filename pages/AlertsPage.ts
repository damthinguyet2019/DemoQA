import type { Locator, Page } from "@playwright/test";

export class AlertsPage {
    readonly btnAlert: Locator;
    readonly btnAlertWithTime: Locator;
    readonly btnAlertWithConfirmBox: Locator;
    readonly btnAlertWithPromptBox: Locator;

    constructor(public readonly page: Page) {
         this.btnAlert = page.locator("#alertButton");
        this.btnAlertWithTime = page.locator("#timerAlertButton");
        this.btnAlertWithConfirmBox = page.locator("#confirmButton");
        this.btnAlertWithPromptBox = page.locator("#promptButton");
    }   
    async clickAlertButton() {
        await this.btnAlert.click();
    }

}