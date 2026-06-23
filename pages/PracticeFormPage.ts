import type { Locator, Page } from "@playwright/test";

export class PracticeFormPage {
  readonly txtFirstName;
  readonly txtLastName;
  readonly txtEmail;
  rdGender:string='//*[text()="@param"]';

  readonly rdoMale;
  readonly rdoFemale;
  readonly rdoOther;
  //readonly txtMobile;
  readonly DateOfBirth;
  readonly txtSubjects;
  readonly chkSports;
  readonly chkReading;
  readonly chkMusic;
  readonly fileUpload;
  readonly txtCurrentAddress;
  readonly lblState;
  readonly lblCity;
  readonly btnSubmit;

  constructor(public readonly page: Page) {
    this.txtFirstName = page.locator("#firstName");
    this.txtLastName = page.locator("#lastName");
    this.txtEmail = page.locator("#userEmail");
    this.rdoMale = page.locator("#gender-radio-1");
    this.rdoFemale = page.locator("#gender-radio-2");
    this.rdoOther = page.locator("#gender-radio-3");
    this.DateOfBirth = page.locator("#dateOfBirthInput");
    this.txtSubjects = page.locator("#subjectsInput");
    this.chkSports = page.locator("#hobbies-checkbox-1");
    this.chkReading = page.locator("#hobbies-checkbox-2");
    this.chkMusic = page.locator("#hobbies-checkbox-3");
    this.fileUpload = page.locator("#uploadPicture");
    this.txtCurrentAddress = page.locator("#currentAddress");
    this.lblState = page.locator("#state");
    this.lblCity = page.locator("#city");
    this.btnSubmit = page.locator("#submit");
  }

  async goTo() {
    await this.page.goto("/automation-practice-form");
  }

  async inputData(
    firstName: string,
    lastName: string,
    email: string,
    currentAddress: string
  ) {
    await this.txtFirstName.fill(firstName);
    await this.txtLastName.fill(lastName);
    await this.txtEmail.fill(email);
    await this.page.click(this.rdGender.replace('@param', 'Male'));
    await this.txtCurrentAddress.fill(currentAddress);
    await this.btnSubmit.click();
  }
  async submit(){
    await this.btnSubmit.click();
  }

   async getLocatorByText(originalXpath: string, text: string): Promise<Locator > {
            const newXpath = originalXpath.replace('@param', text);
            const result: string = await this.page.locator(newXpath).textContent()||'';
            return this.page.locator(newXpath)
                       ;
        }

    async inputDateOfBirth(dateOfBirth: string) {
        let dateOfBirths=dateOfBirth.split('');
        const day = dateOfBirths[0]+dateOfBirths[1];
        const month = dateOfBirths[3]+dateOfBirths[4];
        const year = dateOfBirths[6]+dateOfBirths[7]+dateOfBirths[8]+dateOfBirths[9];

        await this.DateOfBirth.click();
            await this.page.locator(`xpath=//div[@class="react-datepicker__month-select"]/option[@value="${parseInt(month)-1}"]`).click();
            await this.page.locator(`xpath=//div[@class="react-datepicker__year-select"]/option[@value="${year}"]`).click();
            await this.page.locator(`xpath=//div[contains(@class,"react-datepicker__day") and not(contains(@class,"react-datepicker__day--outside-month")) and text()="${parseInt(day)}"]`).click();
            
        await this.DateOfBirth.fill(dateOfBirth);
        await this.DateOfBirth.press('Enter');
    }   
}


