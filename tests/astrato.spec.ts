import { expect, test } from '@playwright/test';
import { AdministrationPage } from '../page-objects/AdministrationPage';
import { ConfirmationPanel } from '../page-objects/ConfirmationPanel';
import { LoginPage } from '../page-objects/LoginPage';
import { SystemSettingsGeneralPage } from '../page-objects/SystemSettingsGeneralPage';
import { WorkbooksPage } from '../page-objects/Workbooks';

test.describe.configure({ mode: 'parallel' });

let workbooksPage: WorkbooksPage;
let email: string;
let password: string;

test.beforeEach(async ({ page }) => {
  let loginPage = new LoginPage(page)
  workbooksPage = new WorkbooksPage(page);
  email = 'piotrpiwnicki1@gmail.com'
  password = 'Czwartek90!'

  await loginPage.open();
  await loginPage.loginWithEmailAndPassword(email, password)
});

test.afterEach(async ({ page }) => {
  page.close
})

test('Login test', async () => {
  await workbooksPage.iconUserAvatar.click();
  let userData: String = await workbooksPage.getUserData();
  expect(userData).toContain(email)
});

test('Import and delete data test', async ({ page }) => {
  let workbooksPage = new WorkbooksPage(page);
  let administrationPage = new AdministrationPage(page);
  let systemSettingsGeneralPage = new SystemSettingsGeneralPage(page);
  let confirmationPanel = new ConfirmationPanel(page)

  await workbooksPage.buttonAdministration.click();
  await administrationPage.buttonSystemSettingsView.click();
  await systemSettingsGeneralPage.clickImportButtonAndWait();
  await workbooksPage.buttonWorkbooks.click();

  let workbooksItemsAfterImport: string[] = await workbooksPage.getAllWorkbooksItems();
  await expect(workbooksItemsAfterImport).toContain('Pie Sales');

  await workbooksPage.buttonAdministration.click();
  await administrationPage.buttonSystemSettingsView.click();
  await systemSettingsGeneralPage.buttonDelete.click();
  await confirmationPanel.clickDeleteButtonAndWait();
  await workbooksPage.buttonWorkbooks.click();
  let workbooksItemsAfterDelete: string[] = await workbooksPage.getAllWorkbooksItems();
  await expect(workbooksItemsAfterDelete).toHaveLength(0);
});