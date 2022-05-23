# 🤖 Toasty

Project to add automation test to the components defined in `e-toast/packages/sandbox` core.

## 📁 Folder Structure

- `/allure-results`: folder to store the allure resports
- `/assets`: folder to store static content
- `/test`: main folder
- `/test/entities`: folder to store the global setups
- `/test/pageobjects`: folder with the page object of the e-toast atoms
- `/test/specs`: folder with the e-toast atoms unit test

## 🧰 Tech Stack
- [Google Chrome](https://www.google.com/chrome/)
- [Designer Tools](https://chrome.google.com/webstore/detail/designer-tools/jiiidpmjdakhbgkbdchmhmnfbdebfnhp?hl=en) Chrome Extension for manual testing
- [Web Driver IO](https://webdriver.io) a.k.a wdio
- [Allure Framework](https://webdriver.io)

## 🚀 Launch

1. Install dependencies for the toasty project

```zsh
yarn install
```

2. Open another terminal

3. Run the sandbox to enable the testing page

```zsh
yarn start
```

3. Run all tests with wdio

```zsh
yarn test
```

or run an specific test

```zsh
yarn test -- --spec ./test/specs/{component}/{component}.spec.js
```


4. Run test with report

Be sure that the sandbox application is running and then run:

```zsh
yarn test-with-report
```

> Note: to use allure, you need to install the framework for macOS you can installed via [Homebrew](https://brew.sh), and for Windows use [Scoop](http://scoop.sh)

Your allure report should looks like:

![Allure Report](./assets/allure-report.png "Allure Report")

## 🤏 Manual Testing

First testing approach, mainly visual testing. The goal is ensure that element have the CSS specs according the Figma Documentation.

## 🤖 Automation Testing

Automated testing vie WebDriveIO.

## 🤔 Dev Troubleshooting

When you try to run

```zsh
npm run allure-report
```

It is probably that you get

```
The operation couldn’t be completed. Unable to locate a Java Runtime.
Please visit http://www.java.com for information on installing Java.
```

## References

- [WebDriverIO Mocha JavaScript Crash Course](https://www.youtube.com/watch?v=4ciODewPFpU) (Integration Test)