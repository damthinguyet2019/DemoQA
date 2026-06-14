import {test, expect} from 'playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage.js';

test.describe("Check Box Test", () => {
    let checkBoxPage: CheckBoxPage;

    test.beforeEach(async ({ page }) => {
        checkBoxPage = new CheckBoxPage(page);
        await checkBoxPage.goTo();   
    });

    test("TC01-Click Expand All button", async ({ page }) => {
        await checkBoxPage.clickExpandAllButton();
        await expect(page.getByText('Desktop', { exact: true })).toBeVisible();
    });

    test("TC02-Click Collapse All button", async ({ page }) => {
        await checkBoxPage.clickExpandAllButton();
        await expect(page.getByText('Desktop', { exact: true })).toBeVisible();

        await checkBoxPage.clickCollapseAllButton();

        await expect(page.getByText('Desktop', { exact: true })).toBeHidden();
    });

    test("TC03-Click on checkbox", async () => {
        await checkBoxPage.checkBoxHome.check();
        await expect(checkBoxPage.checkBoxHome).toBeChecked();
    });
});
