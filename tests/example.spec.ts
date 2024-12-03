import { test, expect } from "@playwright/test";
import 'dotenv/config';
import * as allure from "allure-js-commons";

test("has title", async ({ page }) => {
  await allure.displayName("Has Title Test");
  await allure.owner("John Doe");
  await allure.tags("Getting Started");

  await allure.step("Step 1", async () => {
    await page.goto('/');
  });

  await allure.step("Step 2 - verification", async () => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  });

});

test("get started link", async ({ page }) => {
  await allure.displayName("Get Started Link Test");
  await allure.owner("John Doe");
  await allure.tags("Getting Started");

  await allure.step("Step 1", async () => {
    await page.goto('/');
  });

  await allure.step("Step 2", async () => {
    // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
  });

  await allure.step("Step 3 - verofocation", async () => {
  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
  });
  


});
