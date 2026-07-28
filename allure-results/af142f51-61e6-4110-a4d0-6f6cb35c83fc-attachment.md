# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTableTest.spec.ts >> Web Tables Test >> Search user by Email
- Location: tests\WebTableTest.spec.ts:8:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoqa.com/webtables", waiting until "load"

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
> 11 |       await page.goto("/webtables");
     |                  ^ Error: page.goto: Target page, context or browser has been closed
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
  28 |       await expect(result).toContain(keyword);
  29 |     });
  30 |   }
  31 | });
  32 | 
```