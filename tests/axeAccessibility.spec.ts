import { chromium, Browser, Page} from 'playwright';
import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y, getViolations, reportViolations, DefaultTerminalReporter } from 'axe-playwright';
import { MainPage } from '../PageObjects/mainPage';

let browser: Browser
let page: Page

test.describe('Playwright web page accessibility test', () => {

const mainPage = new MainPage();

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('/');
    await injectAxe(page);
  });

  test('simple accessibility run', async () => {
    await checkA11y(page);
  });

  

  test('check a11y for the specific element', async () => {
    await checkA11y(page, mainPage.getStartedBtn, {
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a'],
        },
      },
    });
  });

  test('gets and reports a11y for the specific element', async () => {
    const violations = await getViolations(page, mainPage.getStartedBtn, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    });

    reportViolations(violations, new DefaultTerminalReporter(true, true, true));
    expect(violations.length).toBe(0);
  });
    test.afterAll(async () => {
    await browser.close();
  });
});