const { expect } = require('@playwright/test');
const { BasePage } = require('./base-page');

class LoginPage extends BasePage {
  constructor(page, baseUrl) {
    super(page, `${baseUrl}/login`);
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Sign in to Carestead' });
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.googleButton = page.getByRole('button', { name: 'Continue with Google' });
    this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
    this.createAccountLink = page.getByRole('link', { name: 'Create account' });
  }

  async open() {
    await this.goto();
  }

  async expectVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.googleButton).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
    await expect(this.createAccountLink).toHaveAttribute('href', '/signup');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await expect(this.emailInput).toHaveValue(email);
    await expect(this.passwordInput).toHaveValue(password);
  }

  async expectSubmitDisabled() {
    await expect(this.signInButton).toBeDisabled();
  }

  async continueWithGoogle() {
    await this.googleButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/accounts\.google\.com/);
  }
}

module.exports = { LoginPage };
