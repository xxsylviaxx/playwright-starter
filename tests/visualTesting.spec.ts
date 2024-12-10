import {test, expect } from "@playwright/test";
import { MainPage } from "../PageObjects/playwrightMainPage";

// The test will fail on the first run as there is no screenshot, yet. The "golden" screenshot is taken during the first run of the test

test.describe("Visual Testing with Chromatic", async () => {

    const mainPage = new MainPage();

    test("Test Visually Playwright Home Page", async ({page}) => {
        await page.goto("/");
        expect(await page.textContent(mainPage.hero)).toMatchSnapshot('hero.txt');
    });
});