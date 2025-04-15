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

  // it('should navigate to the "About Us" page when the link is clicked', async () => {
  //   await HomePage.aboutUsHeader.click();
  //   console.log("Clicked on the 'About Us' link");
  // })

  // it('should navigate to the "About Us" page when the link is clicked', async () => {
  //   await HomePage.aboutUsLink.scrollIntoView();
  //   await HomePage.aboutUsLink.waitForClickable({ timeout: 5000 });
  //   await HomePage.aboutUsLink.click();
  //   console.log("Clicked on the 'About Us' link");
  // });
  it('should navigate to the "Get in Touch" page when the link is clicked', async () => {
    await HomePage.getInTouchButton.scrollIntoView();
    await HomePage.getInTouchButton.waitForClickable({ timeout: 5000 });
    await HomePage.getInTouchButton.click();
    console.log("Clicked on the 'About Us' link");
    await browser.pause(10000); // Pause for 10 seconds to observe the result
  });
  
  it('should fill out and submit the contact form successfully', async () => {
    // Wait for the form to appear
    // await HomePage.nameInput.waitForDisplayed({ timeout: 5000 });
  
    // Fill each input
    await HomePage.getInTouchButton.scrollIntoView();
    await HomePage.getInTouchButton.waitForClickable({ timeout: 5000 });
    await HomePage.getInTouchButton.click();
    console.log("Clicked on the 'About Us' link");
    await HomePage.nameInput.setValue('Robert Sleppy');
    await browser.pause(10000); // Pause for 10 seconds to observe the result
    console.log("Filling out the form...");
    await HomePage.nameInput.waitForDisplayed({ timeout: 5000 });
    await HomePage.emailInput.setValue('rassleppy@gmail.com');
    await HomePage.emailInput.waitForDisplayed({ timeout: 5000 });
    await HomePage.phoneInput.setValue('(123) 456-7890');
    await HomePage.phoneInput.waitForDisplayed({ timeout: 5000 });
    await HomePage.messageInput.setValue('This is a test message from WebdriverIO.');
    await HomePage.messageInput.waitForDisplayed({ timeout: 5000 });
    await browser.pause(10000); // Pause for 10 seconds to observe the result
  });
});
