import { BasePage } from './BasePage';

export class SystemSettingsGeneralPage extends BasePage {

    readonly buttonImport = this.page.locator('gucci-button[data-testid=\'import-button\'] button');
    readonly buttonDelete = this.page.locator('gucci-button[data-testid=\'delete-button\'] button');

    async clickImportButtonAndWait(): Promise<void> {
        await this.buttonImport.click();
        await this.buttonDelete.waitFor({ state: 'visible' });
    }

}