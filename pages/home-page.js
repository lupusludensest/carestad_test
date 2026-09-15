const { expect } = require('@playwright/test');
const { BasePage } = require('./base-page');

class HomePage extends BasePage {
  constructor(page, url) {
    super(page, url);
    this.page = page;
    this.productsLink = page.locator('header').getByRole('link', { name: 'Products' });
    this.plansLink = page.locator('header').getByRole('link', { name: 'Plans' });
    this.faqLink = page.locator('header').getByRole('link', { name: 'FAQ' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' }).first();
  }

  async open() {
    await this.goto();
  }

  async openProducts() {
    await this.productsLink.click();
    await expect(this.page).toHaveURL(/#products$/);
    await expect(this.page.getByRole('heading', { name: 'Six tools. One roof.' })).toBeVisible();
  }

  async openPlans() {
    await this.plansLink.click();
    await expect(this.page).toHaveURL(/#pricing$/);
    await expect(this.page.getByRole('heading', { name: 'Free', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Team', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Enterprise', exact: true })).toBeVisible();
  }

  async openFaq() {
    await this.faqLink.click();
    await expect(this.page).toHaveURL(/#faq$/);
    await expect(this.page.getByRole('heading', { name: 'The short answers.' })).toBeVisible();
  }

  async openLoginPage() {
    await this.signInLink.click();
  }
}

module.exports = { HomePage };
