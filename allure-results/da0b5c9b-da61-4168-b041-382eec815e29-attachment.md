# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxTest.spec.ts >> Check Box Test >> TC02-Click Collapse All button
- Location: tests\CheckBoxTest.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[@class=\'rc-tree-switcher rc-tree-switcher_open\']')

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
      - generic [ref=e127]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e128]:
          - treeitem "Select Home Home" [ref=e132]:
            - checkbox "Select Home" [ref=e134] [cursor=pointer]
            - generic "Home" [ref=e135] [cursor=pointer]:
              - generic [ref=e137]: Home
  - contentinfo [ref=e144]:
    - generic [ref=e145]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {Page} from "@playwright/test";
  2  | export class CheckBoxPage {
  3  |     readonly page:Page
  4  |     readonly expandAllButton;
  5  |     readonly collapseAllButton
  6  |     readonly checkBoxHome;
  7  |     readonly checkBoxListDesktop;
  8  |     readonly checkBoxListDocuments;
  9  |     readonly checkBoxListDownloads;
  10 |     
  11 | 
  12 | constructor(page: Page) {
  13 |     this.page = page;
  14 |     this.expandAllButton = page.locator("xpath=//span[@class='rc-tree-switcher rc-tree-switcher_close']");
  15 |     this.collapseAllButton = page.locator("xpath=//span[@class='rc-tree-switcher rc-tree-switcher_open']");
  16 |     this.checkBoxHome = page.locator("xpath=//span[@class='rc-tree-switcher rc-tree-switcher_close']");
  17 |     this.checkBoxListDesktop = page.locator("label[for='tree-node-1']");
  18 |     this.checkBoxListDocuments = page.locator("input[id='tree-node-1']");
  19 |     this.checkBoxListDownloads = page.locator("label[for='tree-node-1']");
  20 | }
  21 | async goTo() {
  22 |     await this.page.goto("/checkbox");
  23 | }
  24 | async clickExpandAllButton() {
  25 |     await this.expandAllButton.click();
  26 | }
  27 | async clickCollapseAllButton() {
> 28 |     await this.collapseAllButton.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 | }
  30 | }
```