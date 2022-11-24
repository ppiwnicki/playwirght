import { BasePage } from './BasePage';
import { SystemSettingsGeneralPage } from './SystemSettingsGeneralPage';

export class ConfirmationPanel extends BasePage {
    readonly buttonDelete = this.page.locator('//span[text()=\'Delete\']');
    readonly systemSettingsGeneralPage = new SystemSettingsGeneralPage(this.page);

    async clickDeleteButtonAndWait(): Promise<void> {
        await this.buttonDelete.click();
        await this.systemSettingsGeneralPage.buttonImport.waitFor({ state: 'visible' });
    }
}