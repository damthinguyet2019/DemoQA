# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeForm.spec.ts >> Practice Form Test >> TC01 - Submit Data successfully
- Location: tests\PracticeForm.spec.ts:15:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[text()="1234567890"]')

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
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e99]: Name
          - textbox "First Name" [ref=e101]: John
          - textbox "Last Name" [ref=e103]: Doe
        - generic [ref=e104]:
          - generic [ref=e106]: Email
          - textbox "name@example.com" [active] [ref=e108]: john.doe@example.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - textbox [ref=e132]: 28 Jun 2026
        - generic [ref=e133]:
          - generic [ref=e135]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e148]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e161]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e166]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e171]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - generic [ref=e178]: Select State
                - combobox [ref=e180]
              - img [ref=e184]
          - generic [ref=e186]:
            - generic:
              - log
              - generic:
                - generic:
                  - generic: Select City
                - generic:
                  - generic:
                    - img
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1   | import type { Locator, Page } from "@playwright/test";
  2   | 
  3   | export class PracticeFormPage {
  4   |   readonly txtFirstName;
  5   |   readonly txtLastName;
  6   |   readonly txtEmail;
  7   |   rdGender:string='xpath=//*[text()="@param"]';
  8   |   readonly rdoOther;
  9   |   readonly txtMobile;
  10  |   readonly txtDateOfBirth;
  11  |   readonly txtSubjects;
  12  |   //khai báo để truyền nhập động, khong can khai bao trong contructor nua
  13  |   chkHobbies:string='//label[text()="@param"]';
  14  |   readonly txtPicture;
  15  |   readonly txtCurrentAddress;
  16  |   readonly cbState;
  17  |   readonly cbCity;
  18  |   readonly btnSubmit;
  19  | 
  20  |   constructor(public readonly page: Page) {
  21  |     this.txtFirstName = page.locator("#firstName");
  22  |     this.txtLastName = page.locator("#lastName");
  23  |     this.txtEmail = page.locator("#userEmail");
  24  |     this.txtMobile = page.locator("#userNumber")
  25  |     this.rdoOther = page.locator("#gender-radio-3");
  26  |     this.txtDateOfBirth = page.locator("#dateOfBirthInput");
  27  |     this.txtSubjects = page.locator("#subjectsInput");
  28  |     this.txtPicture = page.locator("#uploadPicture");
  29  |     this.txtCurrentAddress = page.locator("#currentAddress");
  30  |     this.cbState = page.locator('xpath= //*[@id="state"]//input');
  31  |     this.cbCity = page.locator('xpath= //*[@id="city"]//input');
  32  |     
  33  |     this.btnSubmit = page.locator("#submit");
  34  |   }
  35  | 
  36  |   async goTo() {
  37  |     await this.page.goto("/automation-practice-form");
  38  |   }
  39  | 
  40  |   async inputData(
  41  |     firstName: string,
  42  |     lastName: string,
  43  |     email: string,
  44  |     currentAddress: string,
  45  |     gender: string,
  46  |     mobile: string,
  47  |     dateOfBirth: string,
  48  |     picture:string,
  49  |     subject:string,
  50  |     hobbies:string,
  51  |     state:string,
  52  |     city:string,
  53  |      ) 
  54  |      {  
  55  |     await this.txtFirstName.fill(firstName);
  56  |     await this.txtLastName.fill(lastName);
  57  |     await this.txtEmail.fill(email);
> 58  |     await this.page.click(this.rdGender.replace('@param', gender));
      |                     ^ Error: page.click: Test timeout of 30000ms exceeded.
  59  |     await this.txtMobile.fill(mobile);
  60  |     await this.inputDateOfBirth(dateOfBirth);
  61  |     await this.inputSubjects(subject);  // gọi hàm nhập từ async bên dưới
  62  |     await this.inputDateOfBirth(dateOfBirth);
  63  |     await this.inputHobbies(hobbies);
  64  |     //truyền đường dẫn thư mục dự án để lấy tên file ảnh truyền vào
  65  |   const picturePath = process.cwd()+'/testcase/data/' + picture; // thu muc chua data du an
  66  |  await this.txtPicture.fill(picturePath);
  67  |     await this.txtCurrentAddress.fill(currentAddress);
  68  |     await this.cbState.fill(state);
  69  |     await this.cbState.press('Enter')
  70  |  await this.cbCity.fill(city);
  71  |         await this.cbCity.press('Enter')
  72  | 
  73  |     await this.btnSubmit.click();
  74  |   }
  75  | 
  76  |     async submit() {
  77  |       await this.btnSubmit.click();
  78  |     }
  79  | 
  80  |     // lay value gender theo value chon, kieu radio button
  81  | async getLocatorByText(originalXpath: string, text: string): Promise<Locator> {
  82  |             const newXpath = originalXpath.replace('@param', text);
  83  |            return this.page.locator(newXpath);
  84  |         }
  85  |    
  86  | // ham lay date time
  87  |   async inputDateOfBirth(dateOfBirth: string) {
  88  |         let dateOfBirths = dateOfBirth.split(' '); // cat chuoi thanh mang de lay ra cac phan tu
  89  |         const day = dateOfBirths[0];
  90  |         const month = dateOfBirths[1];
  91  |         const year  = dateOfBirths[2];  
  92  |         await this.txtDateOfBirth.click();
  93  | 
  94  |         if (!day || !month || !year) {
  95  |             throw new Error(`Invalid dateOfBirth value: ${dateOfBirth}`);
  96  |         }
  97  |         
  98  |         await this.page.locator('.react-datepicker__year-select').selectOption(year);
  99  |         await this.page.locator('.react-datepicker__month-select').selectOption(month);
  100 |         await this.page.locator(`.react-datepicker__day--0${day}`).click();
  101 |     }
  102 |     // hàm nhập lấy data từ combobox, input sau click
  103 |     async inputSubjects(subjects: string) {
  104 |         const subjectList = subjects.split(',').map(subject => subject.trim());
  105 |         for (const subject of subjectList) {
  106 |             await this.txtSubjects.fill(subject);
  107 |             await this.page.keyboard.press('Enter');
  108 |         }
  109 |     }
  110 | 
  111 |     //hàm lấy data từ checkbox, tick chọn  
  112 |     async inputHobbies(hobbies: string) {
  113 |         const hobbyList = hobbies.split(',').map(hobby => hobby.trim());  
  114 |         for (const hobby of hobbyList) {
  115 |             await this.page.click(this.chkHobbies.replace('@param',hobby));
  116 |         } 
  117 |       }
  118 | 
  119 | 
  120 | }
  121 | 
  122 | 
  123 | 
  124 | 
  125 | 
  126 | 
  127 | 
```