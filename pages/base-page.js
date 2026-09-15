const { expect } = require('@playwright/test');

class BasePage {
  constructor(page, url) {
    this.page = page;
    this.url = url;
  }

  async goto() {
    await this.page.goto(this.url, { waitUntil: 'networkidle' });
  }

  async expectUrl(expected, options = {}) {
    await expect(this.page).toHaveURL(expected, options);
  }

  async expectTitle(pattern) {
    await expect(this.page).toHaveTitle(pattern);
  }
}

module.exports = { BasePage };
