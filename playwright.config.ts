import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  webServer: {
    command: "bun run vite --port 6173",
    url: "http://localhost:6173",
    reuseExistingServer: true,
  },
  use: {
    baseURL: "http://localhost:6173",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: devices["Desktop Chrome"],
    },
  ],
});
