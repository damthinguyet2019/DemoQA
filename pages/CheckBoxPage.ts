import { Locator, Page } from "@playwright/test";

export class CheckBoxPage {
    readonly page: Page;
    readonly expandAllButton: Locator;
    readonly collapseAllButton: Locator;
    readonly checkBoxHome: Locator;
    readonly checkBoxListDesktop: Locator;
    readonly checkBoxListDocuments: Locator;
    readonly checkBoxListDownloads: Locator;

    constructor(page: Page) {
        this.page = page;
        this.expandAllButton = page.getByRole('button', { name: /expand all/i });
        this.collapseAllButton = page.getByRole('button', { name: /collapse all/i });
        this.checkBoxHome = page.locator('input#tree-node-home');
        this.checkBoxListDesktop = page.locator('label[for="tree-node-0"]');
        this.checkBoxListDocuments = page.locator('label[for="tree-node-1"]');
        this.checkBoxListDownloads = page.locator('label[for="tree-node-2"]');
    }
async goTo() {
    await this.page.goto("/checkbox");
}
async clickExpandAllButton() {
    await this.expandAllButton.click();
}
async clickCollapseAllButton() {
    await this.collapseAllButton.click();
}
}