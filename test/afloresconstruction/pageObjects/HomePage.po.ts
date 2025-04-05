class HomePage {
  // Selectors
  get searchInput() {
    return $("#search-input"); // Example selector
  }

  get searchButton() {
    return $("#search-button"); // Example selector
  }

  get headerLogo() {
    // Use an XPath selector as an alternative
    return $("//img[@id='1043300118']");
  }
}

export default new HomePage();
