# Website UI Testing with WebdriverIO

This project is designed to test the UI of multiple websites using WebdriverIO. It supports running tests with tags to filter specific tests for different websites.

## Project Structure

```
/Users/hector/Developer/website_UAT
├── test
│   ├── specs
│   │   └── example.test.ts  # Example test file with tags
├── wdio.conf.ts             # WebdriverIO configuration file
└── README.md                # Project documentation
```

## Prerequisites

- **Install `nvm` (Node Version Manager)**:

  ```bash
  brew install nvm
  ```

  Ensure `nvm` is properly set up by adding the following to your shell configuration file (e.g., `.bashrc`, `.zshrc`):

  ```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"
  ```

- **Install Node.js version 20**:

  ```bash
  nvm install 20
  nvm use 20
  ```

- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sleppy23/website_UAT.git
   cd website_UAT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run All Tests

To run all tests specified in the `wdio.conf.ts` file:

```bash
npx wdio run wdio.conf.ts
```

### Run Tests by Tag

To run tests for a specific website, use the `TAG` environment variable:

```bash
TAG=<tag-name> npx wdio run wdio.conf.ts
```

Replace `<tag-name>` with the tag assigned to the test. For example:

```bash
TAG=forwardfreightllc npx wdio run wdio.conf.ts
```

### Example Tags

- `forwardfreightllc`
- `carrildiamante`
- `carrierdispatchservices`

## Adding New Tests

1. Create a new test file in the `test/specs` directory:

   ```bash
   touch test/specs/<website-name>.test.ts
   ```

2. Add your test cases and assign appropriate tags:

   ```typescript
   describe("<Website Name> Tests", () => {
     it("Test description", function () {
       this.tags = ["<tag-name>"];
       // ...test code...
     });
   });
   ```

3. Run the test using the tag as described above.

## Configuration

The test configuration is defined in `wdio.conf.ts`. Key configurations include:

- **Specs**: Test files are located in `./test/specs/**/*.ts`.
- **Capabilities**: Tests run on the Chrome browser by default.
- **Mocha Options**: Supports filtering tests using the `grep` option with tags.

## Troubleshooting

- **Error: `src refspec master does not match any`**  
  Ensure you are pushing to the correct branch. Use `main` if `master` does not exist:

  ```bash
  git push origin main
  ```

- **Tests not running for a specific tag**  
  Verify the tag is correctly assigned in the test file and passed as an environment variable.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/<feature-name>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add <feature-name>"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/<feature-name>
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
