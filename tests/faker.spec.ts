import { faker } from '@faker-js/faker/locale/en';
import { test, expect, type Page } from '@playwright/test';
import { Github } from '../PageObjects/github';

test.describe("Testing fake data", async() => {

    const github = new Github()

    const userName = faker.person.firstName();
    const userSurname = faker.person.lastName();
    const password = faker.internet.password();
    const email = faker.internet.exampleEmail();

    test('Enter fake user name, surname and passowrd in the Github Sign in page', async ({ page }) => {
        
        await page.goto(`${github.url}/login`);
        await page.locator(github.usernameFld).fill(`${userName}${userSurname}`);
        await page.locator(github.passwoedFld).fill(password);
        expect( page.locator(github.usernameFld)).toHaveText(`${userName}${userSurname}`);
        expect( page.locator(github.passwoedFld)).toHaveText(password);
      });
    
});