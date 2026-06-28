import type { Locator, Page } from "@playwright/test";

export class PracticeFormPage {
  readonly txtFirstName;
  readonly txtLastName;
  readonly txtEmail;
  rdGender:string='xpath=//*[text()="@param"]';
  
  readonly txtMobile;
  readonly txtDateOfBirth;
  readonly ddlYear;
  readonly ddlMonth;
  lbDate:string = 'xpath = //dev[text() = "@param"]';

  readonly txtSubjects;
  //khai báo để truyền nhập động, khong can khai bao trong contructor nua
  chkHobbies:string='xpath =//label[text()="@param"]';
  readonly txtPicture;
  readonly txtCurrentAddress;
  readonly cbState;
  readonly cbCity;
  readonly btnSubmit;

  constructor(public readonly page: Page) {
    this.txtFirstName = page.locator("#firstName");
    this.txtLastName = page.locator("#lastName");
    this.txtEmail = page.locator("#userEmail");
    this.txtMobile = page.locator("#userNumber")
    this.txtDateOfBirth = page.locator("#dateOfBirthInput");
    this.ddlYear = page.locator('xpath= //select[@class="react-datepicker__year-select"]');
    this.ddlMonth = page.locator('xpath=//select[@class="react-datepicker__month-select"]');
        //this.lblDate = page.locator('xpath = //*[@role="rowgroup"]/div[1]/div[text()="15"]')
    this.txtSubjects = page.locator("#subjectsInput");
    this.txtPicture = page.locator("#uploadPicture");
    this.txtCurrentAddress = page.locator("#currentAddress");
    this.cbState = page.locator('xpath= //*[@id="state"]//input');
    this.cbCity = page.locator('xpath= //*[@id="city"]//input');
    
    this.btnSubmit = page.locator("#submit");
  }

  async goTo() {
    await this.page.goto("/automation-practice-form");
  }

  async inputData(
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
      mobile: string,
         dateOfBirth: string,
          subject:string,
    currentAddress: string,
    
  
 
    picture:string,
   
    hobbies:string,
    state:string,
    city:string,
     ) 
     {  
    await this.txtFirstName.fill(firstName);
    await this.txtLastName.fill(lastName);
    await this.txtEmail.fill(email);
    await this.page.click(this.rdGender.replace('@param', gender));
    await this.txtMobile.fill(mobile);
    await this.inputDateOfBirth(dateOfBirth);
    await this.inputSubjects(subject);  // gọi hàm nhập từ async bên dưới
    await this.inputDateOfBirth(dateOfBirth);
    await this.inputHobbies(hobbies);
    //truyền đường dẫn thư mục dự án để lấy tên file ảnh truyền vào
  const picturePath = process.cwd()+'/testcase/data/' + picture; // thu muc chua data du an
 //await this.txtPicture.fill(picturePath);
    await this.txtCurrentAddress.fill(currentAddress);
    await this.cbState.fill(state);
    await this.cbState.press('Enter')
 await this.cbCity.fill(city);
        await this.cbCity.press('Enter')

    await this.btnSubmit.click();
  }

    async submit() {
      await this.btnSubmit.click();
    }

    // lay value gender theo value chon, kieu radio button
async getLocatorByText(originalXpath: string, text: string): Promise<Locator> {
            const newXpath = originalXpath.replace('@param', text);
           return this.page.locator(newXpath);
        }
   
// ham lay date time
  async inputDateOfBirth(dateOfBirth: string) {
        let dateOfBirths = dateOfBirth.split(' '); // cat chuoi thanh mang de lay ra cac phan tu
        const day = dateOfBirths[0]|| "";
        const month = dateOfBirths[1]|| "";
        const year  = dateOfBirths[2]|| "";  
        await this.txtDateOfBirth.click();
        await this.ddlYear.selectOption(year);
        await this.ddlMonth.selectOption(month);
        //await this.lblDate.selectOption(Date);

        // if (!day || !month || !year) {
        //     throw new Error(`Invalid dateOfBirth value: ${dateOfBirth}`);
        // }
        
        await this.page.locator('.react-datepicker__year-select').selectOption(year);
        await this.page.locator('.react-datepicker__month-select').selectOption(month);
        await this.page.locator(`.react-datepicker__day--0${day}`).click();
    }
    // hàm nhập lấy data từ combobox, input sau click
    async inputSubjects(subjects: string) {
        const subjectList = subjects.split(',').map(subject => subject.trim());
        for (const subject of subjectList) {
            await this.txtSubjects.fill(subject);
            await this.page.keyboard.press('Enter');
        }
    }

    //hàm lấy data từ checkbox, tick chọn  
    async inputHobbies(hobbies: string) {
        const hobbyList = hobbies.split(',').map(hobby => hobby.trim());  
        for (const hobby of hobbyList) {
            await this.page.click(this.chkHobbies.replace('@param',hobby));
        } 
      }


}






