import HomePage from "../pageObjects/HomePage.po";
import { expect } from "@wdio/globals";

describe("@afloresconstruction Home Page Test", () => {
  beforeEach(async () => {
    console.log("Navigating to the website...");
    await browser.url("https://www.afloresconstruction.com"); // Navigate to the website before each test
  });

  it("should verify the page loads by verifying the Logo is displayed", async () => {
    console.log("Checking if the logo is displayed...");
    await expect(HomePage.headerLogo).toBeDisplayed();
  });
});
