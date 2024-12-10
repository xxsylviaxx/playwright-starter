# Playwright Project

This project leverages Playwright for end-to-end testing with a robust setup for code quality, reporting, accessibility, logging, and additional tools for enhanced development and testing workflows.
The repository contains exemplary config and test files for each feature.
---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)

---

## Features
- Code formatting and linting with **Prettier** and **ESLint**.
- Generate and view detailed test reports using **Allure Reports**.
- Perform accessibility testing with **Axe Accessibility**.
- Generate dynamic data with **Faker**.
- Custom logging with **Pino**.
- Visual testing capabilities with Playwright.
- Seamless integration with **Docker** for isolated test environments.
- Load testing using **Artillery**.
- CI/CD pipeline setup using GitHub Actions.

---

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Install Allure CLI (for reporting):
    ```bash
    npm install -g allure-commandline --save-dev
    ```

---

## Usage

### Running Tests
To run Playwright tests:
    ```bash
    npx playwright test
    ```

### Generating Allure Report:
To generate Allure report run:
    ```bash
    allure serve allure-results
    ```

### Run tests in Docker:
To run your tests in Docker:
    ```bash
    docker build -t playwright-tests .
    docker run --rm playwright-tests    
    ``` 

### Prettier:
To check tests with Prettier:
    ```bash
    npx prettier . --check  
    ``` 

### ESLint:
To check tests with ESLint:
    ```bash
    npx eslint fileName.js 
    ``` 

### Artillery Load Tests:
To run your load tests:
    ```bash
    artillery run  fileName.yaml 
    ``` 

### CI/CD with GitHub Actions:
To trigger the workflow:
    ```bash
    git push
    ``` 