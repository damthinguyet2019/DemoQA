# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTableTest.spec.ts >> Web Tables Test >> Search user by FirstName
- Location: tests\WebTableTest.spec.ts:8:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Thu"
Received string:    ""
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
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [active] [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [ref=e135]: Thu
            - button [ref=e136] [cursor=pointer]:
              - img [ref=e137]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row "First Name Last Name Age Email Salary Department Action" [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup [ref=e149]:
            - row "Thu Hà 30 abc@gmail.com 10000 IT EditDelete" [ref=e150]:
              - cell "Thu" [ref=e151]
              - cell "Hà" [ref=e152]
              - cell "30" [ref=e153]
              - cell "abc@gmail.com" [ref=e154]
              - cell "10000" [ref=e155]
              - cell "IT" [ref=e156]
              - cell "EditDelete" [ref=e157]:
                - generic [ref=e158]:
                  - generic "Edit" [ref=e159] [cursor=pointer]:
                    - img [ref=e160]
                  - generic "Delete" [ref=e162] [cursor=pointer]:
                    - img [ref=e163]
        - generic [ref=e166]:
          - group [ref=e168]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e169]:
            - text: Page
            - strong [ref=e170]: 1 of 1
          - combobox [ref=e172]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e179]:
    - generic [ref=e180]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { WebTablesPage } from "../pages/WebTablePage.js";
  3  | import { readDataFromCSV } from "../common/Utils.js";
  4  | 
  5  | const testData = readDataFromCSV("testcase/data/WebTable_TC1_6.csv");
  6  | test.describe("Web Tables Test", () => {
  7  |   for (const data of testData) {
  8  |     test(`Search user by ${data.SearchBy}`, async ({ page }) => {
  9  |       const webTablesPage = new WebTablesPage(page);
  10 | 
  11 |       await page.goto("/webtables");
  12 |       await webTablesPage.createNewUser(
  13 |         data.FirstName ?? "",
  14 |         data.LastName ?? "",
  15 |         parseInt(data.Age ?? "0"),
  16 |         data.Email ?? "",
  17 |         parseInt(data.Salary ?? "0"),
  18 |         data.Department ?? "",
  19 |       );
  20 |       const keyword = data.Keyword ?? "";
  21 | 
  22 |       await webTablesPage.search(keyword);
  23 | 
  24 |       let result = await webTablesPage.verifySearchResult(
  25 |         data.SearchBy ?? "",
  26 |         keyword,
  27 |       );
> 28 |       await expect(result).toContain(keyword);
     |                            ^ Error: expect(received).toContain(expected) // indexOf
  29 |     });
  30 |   }
  31 | });
  32 | 
```