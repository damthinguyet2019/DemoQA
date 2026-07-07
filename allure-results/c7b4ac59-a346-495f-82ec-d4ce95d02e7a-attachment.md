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
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.react-datepicker__year-select')

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
          - textbox "name@example.com" [ref=e108]: john.doe@example.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [checked] [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]: "1234567890"
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - textbox [active] [ref=e132]: 15 Jan 1980
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
  10  |   readonly txtDateOfBirth;
  11  |   readonly ddlYear;
  12  |   readonly ddlMonth;
  13  |   lblDate: string = 'xpath=//div[text()="@param"]'; // truyen dong theo ngay vao, lay theo text cua ngay do
  14  |   
  15  |   readonly txtSubjects;
  16  |   //khai báo để truyền nhập động, khong can khai bao trong contructor nua
  17  |   //chkHobbies:string='xpath=//label[text()="@param"]';
  18  |   rdGenderAndHobies:string='xpath=//label[text()="@param"]//preceding-sibling::input';
  19  |   readonly txtPicture;
  20  |   readonly txtCurrentAddress;
  21  |   readonly cbState;
  22  |   readonly cbCity;
  23  |   readonly btnSubmit;
  24  | 
  25  | 
  26  |   constructor(public readonly page: Page) {
  27  |     this.txtFirstName = page.locator("#firstName");
  28  |     this.txtLastName = page.locator("#lastName");
  29  |     this.txtEmail = page.locator("#userEmail");
  30  |     this.txtMobile = page.locator("#userNumber")
  31  |    
  32  |     this.txtDateOfBirth = page.locator("#dateOfBirthInput");
  33  |     this.ddlYear = page.locator(".react-datepicker__year-select");
  34  |     this.ddlMonth = page.locator(".react-datepicker__month-select");
  35  |     this.txtSubjects = page.locator("#subjectsInput");
  36  |     this.txtPicture = page.locator("#uploadPicture");
  37  |     this.txtCurrentAddress = page.locator("#currentAddress");
  38  |     this.cbState = page.locator('xpath= //*[@id="state"]//input');
  39  |     this.cbCity = page.locator('xpath= //*[@id="city"]//input');
  40  |     
  41  |     this.btnSubmit = page.locator("#submit");
  42  |   }
  43  | 
  44  |   async goTo() {
  45  |     await this.page.goto("/automation-practice-form");
  46  |   }
  47  | 
  48  |   async inputData(
  49  |     firstName: string,
  50  |     lastName: string,
  51  |     email: string,
  52  |     gender: string,
  53  |      mobile: string,
  54  |       dateOfBirth: string,
  55  |       subject:string,
  56  |         hobbies:string,
  57  |           picture:string,
  58  |    
  59  |     currentAddress: string,
  60  |      
  61  |     state:string,
  62  |     city:string,
  63  | 
  64  |      ) 
  65  |      {  
  66  |     await this.txtFirstName.fill(firstName);
  67  |     await this.txtLastName.fill(lastName);
  68  |     await this.txtEmail.fill(email);
  69  |     //await this.page.click(this.rdGender.replace('@param', gender));
  70  |      await this.page.click(this.rdGenderAndHobies.replace('@param', gender));
  71  |     await this.txtMobile.fill(mobile);
  72  |     await this.inputDateOfBirth(dateOfBirth);
  73  |     await this.inputSubjects(subject);  // gọi hàm nhập từ async bên dưới
  74  |     await this.inputDateOfBirth(dateOfBirth);
  75  |     await this.inputHobbies(hobbies);
  76  |     //truyền đường dẫn thư mục dự án để lấy tên file ảnh truyền vào
  77  |      const picturePath:string = process.cwd() + '/testcase/data/' + picture; // thu muc chua du an
  78  |     await this.txtPicture.setInputFiles(picturePath);
  79  |     await this.txtCurrentAddress.fill(currentAddress);
  80  |     await this.cbState.fill(state);
  81  |     await this.cbState.press('Enter')
  82  |  await this.cbCity.fill(city);
  83  |         await this.cbCity.press('Enter')
  84  | 
  85  |     await this.btnSubmit.click();
  86  |   }
  87  | 
  88  |     async submit() {
  89  |       await this.btnSubmit.click();
  90  |     }
  91  | 
  92  |     // lay value gender theo value chon, kieu radio button
  93  | async getLocatorByText(originalXpath: string, text: string): Promise<Locator> {
  94  |             const newXpath = originalXpath.replace('@param', text);
  95  |            return this.page.locator(newXpath);
  96  |         }
  97  |    
  98  | // ham lay date time
  99  | async inputDateOfBirth(dateOfBirth: string) {
  100 |         let dateOfBirths = dateOfBirth.split(' '); // cat chuoi thanh mang de lay ra cac phan tu
  101 |        const day: string = dateOfBirths[0] || "";
  102 |     const month: string = dateOfBirths[1] || "";
  103 |     const year: string = dateOfBirths[2] || ""; 
  104 |         await this.txtDateOfBirth.click();
  105 |       await this.txtDateOfBirth.click();
  106 |     await this.ddlYear.selectOption(year);
  107 |     await this.ddlMonth.selectOption(month);
  108 |      await this.page.click(this.lblDate.replace("@param", day)); // click vao ngay truyen vao, lay theo text cua ngay do
  109 | 
> 110 |          await this.page.locator('.react-datepicker__year-select').selectOption(year);
      |                                                                    ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  111 |         await this.page.locator('.react-datepicker__month-select').selectOption(month);
  112 |         await this.page.locator(`.react-datepicker__day--0${day}`).click();
  113 |     // hàm nhập lấy data từ combobox, input sau click
  114 | }
  115 | 
  116 |     async inputSubjects(subjects: string) {  
  117 |         const subjectList = subjects.split(',').map(subject => subject.trim());
  118 |         for (const subject of subjectList) {
  119 |             await this.txtSubjects.fill(subject);
  120 |             await this.page.keyboard.press('Enter');
  121 |         }
  122 |     }
  123 | 
  124 |     //hàm lấy data từ checkbox, tick chọn  
  125 |     async inputHobbies(hobbies: string) {
  126 |         const hobbyList = hobbies.split(',').map(hobby => hobby.trim());  
  127 |         for (const hobby of hobbyList) {
  128 |             await this.page.click(this.rdGenderAndHobies.replace('@param',hobby));
  129 |         } 
  130 |       }
  131 | 
  132 | 
  133 | }
  134 | 
  135 | 
  136 | 
  137 | 
  138 | 
  139 | 
  140 | 
```