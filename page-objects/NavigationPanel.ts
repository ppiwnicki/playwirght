import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigationPanel extends BasePage {

    readonly iconUserAvatar = this.page.locator('gucci-round-button[data-testid=\'user-avatar\']');
    readonly buttonAdministration = this.page.locator('gucci-left-menu-item[data-testid=\'administration-left-menu\'] button');
    readonly buttonWorkbooks = this.page.locator('gucci-left-menu-item[routerlink=\'workbooks\'] button');
    readonly userData = this.page.locator('gucci-account-toolbar-item');

    async getUserData() : Promise<string> {
     return await this.userData.innerText();
  } 
}