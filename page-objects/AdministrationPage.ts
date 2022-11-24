import { BasePage } from './BasePage';

export class AdministrationPage extends BasePage {
    readonly buttonSystemSettingsView = this.page.locator('astrato-administration-section-item[icon=\'system-settings\'] button')
}