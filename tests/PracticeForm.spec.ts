import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { ThanksForSubmittingPage } from '../pages/ThanksForSubmittingPage.js';

test.describe('Practice Form Test', () => {
  let practiceFormPage: PracticeFormPage;
  let thanksForSubmittingPage: ThanksForSubmittingPage;

  test.beforeEach(async ({ page }) => {
    practiceFormPage = new PracticeFormPage(page);
    thanksForSubmittingPage = new ThanksForSubmittingPage(page);
    await practiceFormPage.goTo();
  });

  test('TC01 - Submit Data successfully', async () => {
  const firstName: string = 'John';
  const lastName: string = 'Doe';
  const email: string = 'john.doe@example.com';
  const gender: string = 'Male';
  const mobile: string = '1234567890';
  const dateOfBirth: string = '01 Jan 1990';
  const subjects: string = 'Maths, Physics';
  const hobbies: string = 'Sports, Reading';
  const picture: string = 'D:\0AutomationClass\2Projects\0Git\DemoQA\testcase\data\test.jpg';
  const currentAddress: string = '123 Main St';     
  const state: string = 'NCR';
  const city: string = 'Delhi';


    await expect(thanksForSubmittingPage.lblThanksForSubmitting).toBeVisible();
  });
});

   