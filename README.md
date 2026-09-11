// Install playwright
npm i -D playwright
npx playwright install 

// Run the codegen to write a code for choosen app
npx playwright codegen wikipedia.org

// Install the package
npm install @playwright/test

// Run the test
node .\hello_playwright.js

// Run the unattended suite (interactive authentication tests are excluded)
npm test

// Run the interactive authentication tests in a visible browser
npm run test:interactive

// Check if playwright is here
npm list playwright
npm list @playwright/test
npx playwright --version