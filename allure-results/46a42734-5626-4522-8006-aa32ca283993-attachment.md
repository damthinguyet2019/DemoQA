# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxTest.spec.ts >> Check Box Test >> TC03-Click on checkbox
- Location: tests\CheckBoxTest.spec.ts:23:9

# Error details

```
Error: locator.isChecked: Error: strict mode violation: locator('//span[@class=\'rc-tree-switcher rc-tree-switcher_close\']') resolved to 3 elements:
    1) <span class="rc-tree-switcher rc-tree-switcher_close"></span> aka locator('.rc-tree-switcher.rc-tree-switcher_close').first()
    2) <span class="rc-tree-switcher rc-tree-switcher_close"></span> aka locator('div:nth-child(3) > .rc-tree-switcher')
    3) <span class="rc-tree-switcher rc-tree-switcher_close"></span> aka locator('.rc-tree-treenode.rc-tree-treenode-switcher-close.rc-tree-treenode-leaf-last > .rc-tree-switcher')

Call log:
  - waiting for locator('//span[@class=\'rc-tree-switcher rc-tree-switcher_close\']')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
      - img
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e12] [cursor=pointer]:
          - generic [ref=e13]:
            - img [ref=e15]
            - text: Elements
          - img [ref=e20]
        - list [ref=e23]:
          - listitem [ref=e24] [cursor=pointer]:
            - link "Text Box" [ref=e25]:
              - /url: /text-box
              - img [ref=e26]
              - text: Text Box
          - listitem [ref=e28] [cursor=pointer]:
            - link "Check Box" [ref=e29]:
              - /url: /checkbox
              - img [ref=e30]
              - text: Check Box
          - listitem [ref=e32] [cursor=pointer]:
            - link "Radio Button" [ref=e33]:
              - /url: /radio-button
              - img [ref=e34]
              - text: Radio Button
          - listitem [ref=e36] [cursor=pointer]:
            - link "Web Tables" [ref=e37]:
              - /url: /webtables
              - img [ref=e38]
              - text: Web Tables
          - listitem [ref=e40] [cursor=pointer]:
            - link "Buttons" [ref=e41]:
              - /url: /buttons
              - img [ref=e42]
              - text: Buttons
          - listitem [ref=e44] [cursor=pointer]:
            - link "Links" [ref=e45]:
              - /url: /links
              - img [ref=e46]
              - text: Links
          - listitem [ref=e48] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e49]:
              - /url: /broken
              - img [ref=e50]
              - text: Broken Links - Images
          - listitem [ref=e52] [cursor=pointer]:
            - link "Upload and Download" [ref=e53]:
              - /url: /upload-download
              - img [ref=e54]
              - text: Upload and Download
          - listitem [ref=e56] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e57]:
              - /url: /dynamic-properties
              - img [ref=e58]
              - text: Dynamic Properties
      - generic [ref=e62] [cursor=pointer]:
        - generic [ref=e63]:
          - img [ref=e65]
          - text: Forms
        - img [ref=e71]
      - generic [ref=e75] [cursor=pointer]:
        - generic [ref=e76]:
          - img [ref=e78]
          - text: Alerts, Frame & Windows
        - img [ref=e83]
      - generic [ref=e87] [cursor=pointer]:
        - generic [ref=e88]:
          - img [ref=e90]
          - text: Widgets
        - img [ref=e96]
      - generic [ref=e100] [cursor=pointer]:
        - generic [ref=e101]:
          - img [ref=e103]
          - text: Interactions
        - img [ref=e108]
      - generic [ref=e112] [cursor=pointer]:
        - generic [ref=e113]:
          - img [ref=e115]
          - text: Book Store Application
        - img [ref=e120]
    - generic [ref=e122]:
      - heading "Check Box" [level=1] [ref=e123]
      - generic [ref=e125]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e126]:
          - generic [ref=e129]:
            - treeitem "Select Home Home" [expanded] [ref=e130]:
              - checkbox "Select Home" [ref=e132] [cursor=pointer]
              - generic "Home" [ref=e133] [cursor=pointer]:
                - generic [ref=e135]: Home
            - treeitem "Select Desktop Desktop" [ref=e136]:
              - checkbox "Select Desktop" [ref=e138] [cursor=pointer]
              - generic "Desktop" [ref=e139] [cursor=pointer]:
                - generic [ref=e141]: Desktop
            - treeitem "Select Documents Documents" [ref=e142]:
              - checkbox "Select Documents" [ref=e144] [cursor=pointer]
              - generic "Documents" [ref=e145] [cursor=pointer]:
                - generic [ref=e147]: Documents
            - treeitem "Select Downloads Downloads" [ref=e148]:
              - checkbox "Select Downloads" [ref=e150] [cursor=pointer]
              - generic "Downloads" [ref=e151] [cursor=pointer]:
                - generic [ref=e153]: Downloads
  - contentinfo [ref=e160]:
    - generic [ref=e161]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test, expect} from 'playwright/test';
  2  | import { CheckBoxPage } from '../pages/CheckBoxPage.js';
  3  | 
  4  | test.describe("Check Box Test", () => {
  5  |     let checkBoxPage: CheckBoxPage;
  6  | 
  7  |     test.beforeEach(async ({ page }) => {
  8  |         checkBoxPage = new CheckBoxPage(page);
  9  |         await checkBoxPage.goTo();   
  10 |     });
  11 | 
  12 |     test("TC01-Click Expand All button", async () => {
  13 |         await checkBoxPage.clickExpandAllButton();
  14 |         const isExpanded: boolean = await checkBoxPage.expandAllButton.isVisible();
  15 |         await expect(isExpanded).toBeTruthy();
  16 |     });      
  17 |     test("TC02-Click Collapse All button", async () => {
  18 |         await checkBoxPage.clickCollapseAllButton();
  19 |         const isExpanded: boolean = await checkBoxPage.collapseAllButton.isVisible();
  20 |         await expect(isExpanded).toBeFalsy();
  21 |     }
  22 |     );
  23 |     test("TC03-Click on checkbox", async () => {
  24 |         await checkBoxPage.checkBoxHome.click();
> 25 |         const isChecked: boolean = await checkBoxPage.checkBoxHome.isChecked();
     |                                                                    ^ Error: locator.isChecked: Error: strict mode violation: locator('//span[@class=\'rc-tree-switcher rc-tree-switcher_close\']') resolved to 3 elements:
  26 |         await expect(isChecked).toBeTruthy();
  27 |     }
  28 | 
  29 |     );
  30 | });
  31 | 
```