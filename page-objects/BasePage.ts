import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;
  readonly iconUserAvatar: Locator;
  readonly buttonAdministration: Locator;
  readonly buttonWorkbooks: Locator;
  readonly userData: Locator;


  constructor(page: Page) {
    this.page = page;
    this.iconUserAvatar = this.page.locator('gucci-round-button[data-testid=\'user-avatar\']');
    this.buttonAdministration = this.page.locator('gucci-left-menu-item[data-testid=\'administration-left-menu\'] button');
    this.buttonWorkbooks = this.page.locator('gucci-left-menu-item[routerlink=\'workbooks\'] button');
    this.userData = this.page.locator('gucci-account-toolbar-item');
  }

  async getUserData(): Promise<string> {
    return await this.userData.innerText();
  }
}
