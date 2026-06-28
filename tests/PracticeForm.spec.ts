import { test, expect } from "@playwright/test";
import { PracticeFormPage } from "../pages/PracticeFormPage";
import { ThanksForSubmittingPage } from "../pages/ThanksForSubmittingPage.js";

test.describe("Practice Form Test", () => {
  let practiceFormPage: PracticeFormPage;
  let thanksForSubmittingPage: ThanksForSubmittingPage;

  test.beforeEach(async ({ page }) => {
    practiceFormPage = new PracticeFormPage(page);
    thanksForSubmittingPage = new ThanksForSubmittingPage(page);
    await practiceFormPage.goTo();
  });

  test("TC01 - Submit Data successfully", async () => {
    const firstName: string = "John";
    const lastName: string = "Doe";
    const email: string = "john.doe@example.com";
    const gender: string = "Male";
    const mobile: string = "1234567890";
    const dateOfBirth: string = "01 January 1980";
    const subjects: string = "Maths, Physics";
    const hobbies: string = "Sports, Reading";

    //truyền ten anh vao
    const picture: string = `test.jpg`; // truyen ten anh

    const currentAddress: string = "123 Main St";
    const state: string = "NCR";
    const city: string = "Delhi";

    //const picturePath: string = `${projectRoot}/${picture}`;

    // inputData expects: firstName, lastName, email, gender, mobile, dateOfBirth, subjects, hobbies, picturePath, currentAddress
    await practiceFormPage.inputData(
      firstName,
      lastName,
      email,
      gender,
      mobile,
      dateOfBirth,
      subjects,
      hobbies,
      picture,
      currentAddress,
      state,
      city,
    );

    // khi nhap thi nhap first name, last name , nhung actual la student name, expected la last name + first name
    const actualStudentName: string =
      await thanksForSubmittingPage.getValueByLabel(
        thanksForSubmittingPage.lblValue,
        "Student Name",
      );
    const expectedStudentName: string = firstName + "" + lastName;
    expect(actualStudentName).toBe(expectedStudentName);

    // khi nhap thi nhap email , expect = email
    const actualStudentEmail: string =
      await thanksForSubmittingPage.getValueByLabel(
        thanksForSubmittingPage.lblValue,
        "Email",
      );
    // const expectedStudentEmail:string = email;  // email khong bien doi gi , no bang chinh gia tri email truyen o ben tren
    expect(actualStudentEmail).toBe(email); // truyen thang bien email nhap tu ben tren

    //gender
    const actualGender: string = await thanksForSubmittingPage.getValueByLabel(
      thanksForSubmittingPage.lblValue,
      "Gender",
    );
    // const expectedStudentEmail:string = email;  // email khong bien doi gi , no bang chinh gia tri  truyen o ben tren
    expect(actualGender).toBe(gender); // truyen thang bien da nhap tu ben tren

    // moblie
    const actualMobile: string = await thanksForSubmittingPage.getValueByLabel(
      thanksForSubmittingPage.lblValue,
      "Mobile",
    );
    // const expectedStudentEmail:string = email;  // email khong bien doi gi , no bang chinh gia tri  truyen o ben tren
    expect(actualMobile).toBe(mobile); // truyen thang bien da nhap tu ben tren

    // date of birth
    const actualDateOfBirth: string =
      await thanksForSubmittingPage.getValueByLabel(
        thanksForSubmittingPage.lblValue,
        "Date of Birth",
      );
    const firstSpace = dateOfBirth.indexOf(" ");
    const secondSpace = dateOfBirth.indexOf(" ", firstSpace + 1);
    //const expectedDateOfBirth: string = dateOfBirth.replace(dateOfBirth[secondSpace],",",); // thay dau phay o vi tri thu 2 thanh dau ,
    //day10
    const expectedDateOfBirths: string[] = dateOfBirth.split(" ");
    const expectedDateOfBirth: string =
      expectedDateOfBirths[0] +
      " " +
      expectedDateOfBirths[1] +
      "," +
      expectedDateOfBirths[2];
    expect(actualDateOfBirth).toBe(expectedDateOfBirth);

    //expect(actualDateOfBirth).toBe(dateOfBirth); // truyen thang bien da nhap tu ben tren

    const actualSubjects: string =
      await thanksForSubmittingPage.getValueByLabel(
        thanksForSubmittingPage.lblValue,"Subjects"
      );
    expect(actualSubjects).toBe(subjects); // truyen thang bien da nhap tu ben tren

    const actualHobbies: string = await thanksForSubmittingPage.getValueByLabel(
      thanksForSubmittingPage.lblValue,
      "Hobbies"
    );
    expect(actualHobbies).toBe(hobbies); // truyen thang bien da nhap tu ben tren

    const actualPicture: string = await thanksForSubmittingPage.getValueByLabel(
      thanksForSubmittingPage.lblValue,
      "Picture"
    );
    expect(actualPicture).toBe(picture); // truyen thang bien da nhap tu ben tren

    const actualAdress: string = await thanksForSubmittingPage.getValueByLabel(
      thanksForSubmittingPage.lblValue,
      "Current Adress"
    );
    expect(actualAdress).toBe(currentAddress); // truyen thang bien da nhap tu ben tren

    const actualStateAndCity: string =
      await thanksForSubmittingPage.getValueByLabel(
        thanksForSubmittingPage.lblValue,
        "State and City"
      );
    const expectedStateAndCity: string = state + " " + city;
    expect(actualStateAndCity).toBe(expectedStateAndCity);
  });
});
