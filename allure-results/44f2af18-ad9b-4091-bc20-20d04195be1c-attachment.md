# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxTest.spec.ts >> Check Box Test >> TC01-Click Expand All button
- Location: tests\CheckBoxTest.spec.ts:15:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "You have selected :home desktop notes commands documents downloads"
Received: "You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral"
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - heading "Check Box" [level=1] [ref=e125]
      - generic [ref=e126]:
        - generic [ref=e127]:
          - generic:
            - textbox "for screen reader"
          - tree [ref=e128]:
            - generic [ref=e131]:
              - treeitem "Select Home Home" [expanded] [ref=e132]:
                - checkbox "Select Home" [checked] [ref=e134] [cursor=pointer]
                - generic "Home" [ref=e135] [cursor=pointer]:
                  - generic [ref=e137]: Home
              - treeitem "Select Desktop Desktop" [ref=e138]:
                - checkbox "Select Desktop" [checked] [ref=e140] [cursor=pointer]
                - generic "Desktop" [ref=e141] [cursor=pointer]:
                  - generic [ref=e143]: Desktop
              - treeitem "Select Documents Documents" [ref=e144]:
                - checkbox "Select Documents" [checked] [ref=e146] [cursor=pointer]
                - generic "Documents" [ref=e147] [cursor=pointer]:
                  - generic [ref=e149]: Documents
              - treeitem "Select Downloads Downloads" [ref=e150]:
                - checkbox "Select Downloads" [checked] [ref=e152] [cursor=pointer]
                - generic "Downloads" [ref=e153] [cursor=pointer]:
                  - generic [ref=e155]: Downloads
        - generic [ref=e156]:
          - generic [ref=e157]: "You have selected :"
          - generic [ref=e158]: home
          - generic [ref=e159]: desktop
          - generic [ref=e160]: documents
          - generic [ref=e161]: downloads
          - generic [ref=e162]: notes
          - generic [ref=e163]: commands
          - generic [ref=e164]: workspace
          - generic [ref=e165]: office
          - generic [ref=e166]: wordFile
          - generic [ref=e167]: excelFile
          - generic [ref=e168]: react
          - generic [ref=e169]: angular
          - generic [ref=e170]: veu
          - generic [ref=e171]: public
          - generic [ref=e172]: private
          - generic [ref=e173]: classified
          - generic [ref=e174]: general
  - contentinfo [ref=e181]:
    - generic [ref=e182]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect, type Page } from '@playwright/test';
  2  | import { CheckBoxPage } from '../pages/CheckBoxPage';
  3  | 
  4  | 
  5  | test.describe("Check Box Test", () => {
  6  |     let checkBoxPage: CheckBoxPage;
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         checkBoxPage = new CheckBoxPage(page);
  10 |         await checkBoxPage.goTo();   
  11 |     });
  12 | 
  13 | 
  14 | 
  15 |     test("TC01-Click Expand All button", async () => {
  16 |         await checkBoxPage.chkHome.waitFor({state:'visible'});
  17 |         await expect(checkBoxPage.chkHome).not.toBeChecked();
  18 |         await checkBoxPage.clickHomeCheckBox();
  19 |         await checkBoxPage.clickExpandAllButton();
  20 |         await expect(checkBoxPage.chkHome).toBeChecked();
  21 |         await expect(checkBoxPage.chkDesktop).toBeChecked();
  22 |         await expect(checkBoxPage.chkDocuments).toBeChecked();
  23 |         await expect(checkBoxPage.chkDownloads).toBeChecked();
  24 |         const actualResult:string = await checkBoxPage.getResultText();
  25 |         const expectedResult:string = 'You have selected :home desktop notes commands documents downloads';
> 26 |         expect(actualResult.trim()).toBe(expectedResult);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |     });
  28 | 
  29 |     
  30 | });
  31 | 
```