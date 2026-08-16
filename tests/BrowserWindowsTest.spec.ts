import { expect, test } from "@playwright/test";
import { BrowserWindowsPage } from "../pages/BrowserWindowsPage";
import { NewTabPage } from "../pages/NewTabPage";
import { NewWindowPage } from "../pages/NewWindowPage";
import { NewWindowMessagePage } from "../pages/NewWindowMessagePage";

test.describe("Browser Windows Test", () => {
    //moi ham deu di vao chung 1 trang web, nen co the viet 1 ham goi trang web roi goi ham do trong moi test case
    let browserWindowsPage: BrowserWindowsPage;
    test.beforeEach(async ({ context }) => {
        const page = await context.newPage();
        browserWindowsPage = new BrowserWindowsPage(page, context);
        await browserWindowsPage.gotoBrowserWindowsPage();
    });
  test("TC01-Verify New Tab", async ({ context }) => {
    const newPage = await browserWindowsPage.clickNewTabButton();// nối với nhau thông qua newPage, vì clickNewTabButton trả về newPage
    const newTabPage = new NewTabPage(newPage);
    const actualHeadingText = await newTabPage.getSampleHeadingText();
    expect(actualHeadingText).toBe("This is a sample page");
   
  });

  test("TC02-Verify New Window", async ({ context }) => {
    const [newWindowPage] = await Promise.all([
      context.waitForEvent("page"),
      browserWindowsPage.clickNewWindowButton(),
    ]);
    const newWindow = new NewWindowPage(newWindowPage);
    const actualHeadingText = await newWindow.getSampleHeadingText();
    expect(actualHeadingText).toBe("This is a sample page");
  });

  test("TC03-Verify New Window Message", async ({ context}) => {
    const newWMessagePage = await browserWindowsPage.clickNewWindowMessageButton();
    const newWindowMessagePage = new NewWindowMessagePage(newWMessagePage);
    const actualHeadingText = await newWindowMessagePage.getSampleHeadingText();
    expect(actualHeadingText).toBe("Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.");

  });

});