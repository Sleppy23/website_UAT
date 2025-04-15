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

  // get aboutUsHeader() {
  //   return $('a[href="/about-us"]'); // Example selector
  // }
  // get aboutUsLink() {
  //   return $('a[href="/about-us"]');
  // }
  get getInTouchButton () {
    return $('#\\31 410938043');
  }
  get nameInput() {
    return $('#\\31 124840462');
  }
  get emailInput() {
    return $('#\\31 384585089');
  }
  get phoneInput() {
    return $('#\\31 012845954');
  }
  get messageInput() {
    return $('#\\31 168777715');
  }
}

export default new HomePage();
