# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTableTest.spec.ts >> Web Tables Test >> Search user by LastName
- Location: tests\WebTableTest.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#lastName')
    - locator resolved to <input required="" type="text" id="lastName" maxlength="25" autocomplete="off" placeholder="Last Name" class=" mr-sm-2 form-control"/>
    - fill("Hà")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from "@playwright/test";
  2  | 
  3  | export class WebTablesPage {
  4  |   readonly page: Page;
  5  |   readonly txtSearch: Locator;
  6  |   searchResultXpath: string = "xpath=//tbody/tr/td[@param]";
  7  |   readonly btnAdd: Locator;
  8  |   readonly txtFirstName: Locator;
  9  |   readonly txtLastName: Locator;
  10 |   readonly txtAge: Locator;
  11 |   readonly txtEmail: Locator;
  12 |   readonly txtSalary: Locator;
  13 |   readonly txtDepartment: Locator;
  14 |   readonly btnSubmit: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     this.page = page;
  18 |     this.txtSearch = page.locator("#searchBox");
  19 |     this.btnAdd = page.locator("#addNewRecordButton");
  20 |     this.txtFirstName = page.locator("#firstName");
  21 |     this.txtLastName = page.locator("#lastName");
  22 |     this.txtAge = page.locator("#age");
  23 |     this.txtEmail = page.locator("#userEmail");
  24 |     this.txtSalary = page.locator("#salary");
  25 |     this.txtDepartment = page.locator("#department");
  26 |     this.btnSubmit = page.locator("#submit");
  27 |   }
  28 | 
  29 |   async search(keyword: string) {
  30 |     await this.txtSearch.fill(keyword);
  31 |     await this.txtSearch.press("Enter");
  32 |   }
  33 | // search result verification based on the searchBy parameter
  34 |   async verifySearchResult(keyword: string, searchBy: string): Promise<string> {
  35 |     let result = "";
  36 |     switch (searchBy) {
  37 |       case "FirstName":
  38 |         result = await this.getSearchResult(1, keyword);
  39 |         break;
  40 |       case "LastName":
  41 |         result = await this.getSearchResult(2, keyword);
  42 |         break;
  43 |       case "Age":
  44 |         result = await this.getSearchResult(3, keyword);
  45 |         break;
  46 |       case "Email":
  47 |         result = await this.getSearchResult(4, keyword);
  48 |         break;
  49 |       case "Salary":
  50 |         result = await this.getSearchResult(5, keyword);
  51 |         break;
  52 |       case "Department":
  53 |         result = await this.getSearchResult(6, keyword);
  54 |         break;
  55 |     }
  56 |     return result;
  57 |   }
  58 |   async getSearchResult(columnIndex: number, keyword: string): Promise<string> {
  59 |     const searchResultLocator = this.searchResultXpath.replace(
  60 |       "@param",
  61 |       columnIndex.toString(),
  62 |     );
  63 | console.log(`searchResultLocator: ` + searchResultLocator);
  64 | 
  65 |     const text: string =
  66 |       (await this.page.locator(searchResultLocator).first().textContent()) ?? "";
  67 |     return text;
  68 |   }
  69 |   async createNewUser(
  70 |     firstName: string,
  71 |     lastName: string,
  72 |     age: number,
  73 |     email: string,
  74 |     salary: number,
  75 |     department: string,
  76 |   ) {
  77 |     await this.btnAdd.click();
  78 |     await this.txtFirstName.fill(firstName);
> 79 |     await this.txtLastName.fill(lastName);
     |                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  80 |     await this.txtAge.fill(age.toString());
  81 |     await this.txtEmail.fill(email);
  82 |     await this.txtSalary.fill(salary.toString());
  83 |     await this.txtDepartment.fill(department);
  84 |     await this.page.locator("#submit").click();
  85 |   }
  86 | }
  87 | 
```