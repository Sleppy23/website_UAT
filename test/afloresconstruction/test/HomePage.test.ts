import HomePage from "../pageObjects/HomePage.po";
import { expect } from "@wdio/globals";

describe("@afloresconstruction Home Page Test", () => {
  beforeEach(async () => {
    console.log("Navigating to the website...");
    await browser.url("https://www.afloresconstruction.com"); // Navigate to the website before each test
  });

  it("should verify the website loads in under 3 seconds", async () => {
    const loadTime = await browser.execute(() => {
      const [navigationEntry] = window.performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[]; // Explicitly cast the type
      return navigationEntry
        ? navigationEntry.loadEventEnd - navigationEntry.startTime
        : null; // Time in milliseconds
    });

    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).not.toBeNull(); // Ensure load time is calculated
    expect(loadTime).toBeLessThan(3000); // Assert that the load time is under 3 seconds
  });

  it("should verify the page loads by verifying the Logo is displayed", async () => {
    console.log("Checking if the logo is displayed...");
    await expect(HomePage.headerLogo).toBeDisplayed();
  });
});
