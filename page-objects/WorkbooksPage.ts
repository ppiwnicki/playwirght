import { BasePage } from './BasePage';

export class WorkbooksPage extends BasePage {

  readonly workbooksItems = this.page.locator('gucci-workbooks span.card-title');

  async getAllWorkbooksItems(): Promise<string[]> {
    return await this.workbooksItems.allTextContents();
  }
} 