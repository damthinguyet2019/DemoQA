import { test, expect, type Page } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';


test.describe("Check Box Test", () => {
    let checkBoxPage: CheckBoxPage;

    test.beforeEach(async ({ page }) => {
        checkBoxPage = new CheckBoxPage(page);
        await checkBoxPage.goTo();   
    });



    test("TC01-Click Expand All button", async () => {
        await checkBoxPage.chkHome.waitFor({state:'visible'});
        await expect(checkBoxPage.chkHome).not.toBeChecked();
        await checkBoxPage.clickHomeCheckBox();
        await checkBoxPage.clickExpandAllButton();
        await expect(checkBoxPage.chkHome).toBeChecked();
        await expect(checkBoxPage.chkDesktop).toBeChecked();
        await expect(checkBoxPage.chkDocuments).toBeChecked();
        await expect(checkBoxPage.chkDownloads).toBeChecked();
        const actualResult:string = await checkBoxPage.getResultText();
        const expectedResult:string = 'You have selected : home desktop documents downloads notes commands workspace office wordFile excelFile react angular veu public private classified general';
        expect(actualResult.trim()).toBe(expectedResult);
    });

    
});
