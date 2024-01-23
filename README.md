# NPM Public Package Template

## About The Project

### Purpose

<b>It's built on the premise of a Mac. It might not work properly in other environments.</b>

This project aims to enable developers to quickly and efficiently deploy NPM public packages. Designed to minimize setup, this template facilitates the creation, management, and distribution of NPM packages.

### Key Features

1. Easy NPM Public Package Deployment: Simplifies the process of publicly deploying NPM packages.
2. Automated Testing: Supports automated testing, including downloading .tgz files to simulate actual deployment environments.
3. TypeScript Support: Fully accommodates projects based on TypeScript, enhancing development and management.

### Getting Started

To get started with this template, clone the repository and follow the setup instructions.

```bash
git clone https://github.com/HeesuKim0203/npm-package-template
```

### Prerequisites

- Node.js (Version 14 or later recommended)
- NPM (with an account that can publish packages)

### Installation

Install the dependencies:

```bash
npm install
```

Build the project (if applicable):

```bash
npm run build
```

Run tests to ensure everything is working correctly:

```bash
npm test
```

### Usage

To use this template for your NPM package:

1. Modify the <b>package.json</b> with your package details.
2. <b>Continuously Update the Version:</b> Ensure to continuously update the version field in <b>package.json</b> for each release. This is important to track changes and manage releases effectively.
3. Implement your package code in the appropriate directories.
4. Use the provided scripts for building and testing your package.

### Deploying Your Package

To deploy your package to NPM:

Set up your NPM credentials locally.
Run the following command, and provide your 2FA code if prompted:

```bash
npm publish
```


<b>Note on 2FA and GitHub Actions</b>  

If 2FA is enabled for your NPM account, automated publishing via GitHub Actions is not possible as it requires manual entry of the 2FA code. In such cases, local publishing is recommended.

### GitHub Actions and Secrets
For automated workflows, it's important to set up your NPM token in the GitHub Secrets:

1. Create an NPM access token with the necessary permissions.
2. Add this token as a secret in your GitHub repository settings.
3. Reference this secret in your GitHub Actions workflow file.

### Contributing
Contributions to this template are welcome. Please read the contributing guide for more information.

### License
Distributed under the MIT License. See LICENSE for more information.
