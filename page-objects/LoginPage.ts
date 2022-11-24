import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly inputEmailField = this.page.locator('gucci-input#email input')
  readonly inputPasswordField = this.page.locator('gucci-input#password input')
  readonly buttonSubmit = this.page.locator('//span[normalize-space() = \'Continue\']/parent::button')

  async open() {
    await this.page.goto('https://app.astrato.io');
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<void> {
    await this.inputEmailField.fill(email)
    await this.inputPasswordField.fill(password);
    await this.buttonSubmit.click();
  }
}