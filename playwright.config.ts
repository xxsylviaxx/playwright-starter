import { defineConfig, devices } from "@playwright/test";
import dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["html"], ["allure-playwright"]],
  use: {
    baseURL: process.env.BASE_URL as string,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ]
});
