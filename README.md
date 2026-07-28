# Android Application Exploratory Testing

This project documents the execution of **exploratory tests** on an Android banking application (Carrefour Bank), using an Android emulator to ensure that all available features were tested. The testing covered the application from the home screen to the "More Information" section, including error scenarios. Helpers and hooks were also implemented to improve test independence and maintainability.

## Contact

* **Email**: [viniciuszaize1997@gmail.com](mailto:viniciuszaize1997@gmail.com)

## GitLab Repository & CI Pipeline

https://gitlab.com/automation-tests8370041/AppMobile.git

## Testing Objectives

The exploratory tests were performed with the following goals:

* **Complete Coverage**: Validate all available features and user flows within the application.
* **Error Scenarios**: Verify how the application behaves in error situations, ensuring that appropriate error messages are displayed and the user experience remains consistent.
* **Maintainability and Scalability**: Implement helpers and hooks to make the test suite more independent, reducing maintenance efforts and improving long-term reliability. A CI/CD pipeline was also configured to ensure that every commit and merge request is automatically validated.

## Project Structure

* **test/**: Contains the automated test cases.
* **helpers/**: Contains helper functions used throughout the test suite.
* **hooks/**: Contains custom hooks for configuring and managing the test environment.
* **CI/CD**: Contains the pipeline configuration used to automatically validate the test suite.

## Technologies Used

* **WebDriverIO**: Framework used for UI test automation.
* **Appium**: Tool used for mobile application automation.
* **Android Emulator**: Used to simulate Android devices and execute the tests.

## Test Scenarios

The exploratory tests covered the following scenarios:

1. **Home Screen**: Validation of the main UI elements and features available on the application's home screen.
2. **Login, Registration, Password Reset, and App Information Screens**: Validation of all user interactions to ensure the application behaves as expected.
3. **Application Features**: Testing of every available feature to verify correct functionality.
4. **Error Scenarios**: Execution of negative test cases to validate the application's error handling and displayed messages.

## Running the Tests

To run the test suite, execute the following commands:

```bash
npm install          # Install project dependencies
npx wdio wdio.conf.js  # Run the WebDriverIO test suite
```
