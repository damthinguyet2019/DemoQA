import type { Locator, Page } from "@playwright/test";
export class TestBase {
    constructor(public readonly page: Page) {
        // Initialization code for the test base class
        async goTo(url: string) {
            await this.page.goto(url);
        }
         async clickAcceptInAlert():Promise<string> {
            this.page.on("dialog", async (dialog) => {
                await dialog.accept();
            });
    }
}