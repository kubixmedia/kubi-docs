---
sidebar_position: 7
---

# Commands

The following is a list of all available commands Kubi can perform:

- [Lint](#lint)
- [Start](#start)
- [Build](#build)
- [Download](#download)
- [Deploy](#deploy)
- [Open](#open)
- [Create](#create)
- [Cypress](#cypress)
- [Zip](#zip)

## Lint

```
yarn lint
```

This command scans all files including Liquid, SCSS and JavaScript. It will then dump all errors into the terminal for you to fix. If `:fix` paramater is added to the lint command it will format JavaScript and SCSS according to the rules declared in the `.eslintrc` and `.stylelintrc` files. By default, it uses [ESLint Fix](https://eslint.org/docs/user-guide/command-line-interface#--fix) to lint and fix JS files, [Stylelint Fix](https://stylelint.io/user-guide/faq/#how-do-i-automatically-fix-stylistic-violations) to lint and fix CSS files and [Prettier](https://github.com/prettier/prettier) to rules to help format all.

| Param | Description |
| --- | --- |
| `:js` | Runs linting only on JavaScript files |
| `:styles` | Runs linting only on CSS files |
| `:theme` | Runs linting only on Liquid files |
| `:json` | Runs linting only on JSON files |
| `:fix` | Runs linting only on JavaScript, CSS and JSON files and trys to fix any errors and format them |
| `:fix-js` | Runs linting on JavaScript files only and trys to fix any errors |
| `:fix-styles` | Runs linting only on CSS files and trys to fix any errors |

## Start
Compiles amd move your local theme, styles and js files into a `dist` directory, launches BrowserSync localhost server for live reloading and finally boots up a watcher that will upload any file changes to the remote Shopify store.

```
yarn start
```

| Flag | Description |
| --- | --- |
| `--prod` | Targets the live theme for uploading files when changes are made |
| `--staging` | Targets a staging store/theme for files to be uploaded to for testing |

## Build
Builds a production-ready version of the theme by compiling the files into the `dist` folder.

>**Note**: Build will also run the Node environment of the terminal in production telling Gulp and Webpack to remove comments and minify files.

```
yarn build
```

| Param | Description |
| --- | --- |
| `:deploy` | Runs the default build command and deploys the built directory to the live theme |

## Download
Downloads the remote Shopify store's theme to the local `src/theme` directory.

>**Warning**: This will overwrite all files within the src/theme folder.

```
yarn download
```

| Param | Description |
| --- | --- |
| `:stage` | Downloads staging theme from the remote store |
| `:prod` | Targets the live theme and downloads it a local directory |

## Deploy
Uploads the `dist` folder to the Shopify store.

```
yarn deploy
```

| Param | Description |
| --- | --- |
| `:safe` | Uploads the dist folder to the live theme/store without overwritting files on the remote store |
| `:dev` | Uploads the dist folder to the development store without overwritting files |
| `:stage` | Uploads the dist folder to the staging store without overwritting files |

## Open
Open the web editor for the theme in the development environment within the browser as well as print out the URL for your reference.

```
yarn open
```

| Param | Description |
| --- | --- |
| `:stage` | Opens the web editor for the theme in the staging environment |
| `:prod` | Opens the web editor for the theme in the live environment |

## Create
If you are starting a new theme and want to have some sane defaults, you can use the create command. The command will

* Create a new theme on shopify with the provided name.
* Initialize your configuration with your credentials and your new theme id.
* Generate and upload some default templates to make your theme valid.

```
yarn create
```

## Cypress
Opens [Cypress](https://www.cypress.io/) to run end-to-end testing on the local Shopify theme.

```
yarn cypress:open
```

## Zip
**COMING SOON**
Compiles the contents of the `dist` directory and creates a ZIP file in the root of the project.

```
yarn zip
```