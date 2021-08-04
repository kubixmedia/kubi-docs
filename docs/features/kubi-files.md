---
sidebar_position: 3
---

# Kubi Files

When running `kubimini.sh` several files are created automiatically which follow a predetermined file structure. If the file already exists then code is injected.

A Kubi project consists of the following file structure:

## File structure

```tree
.
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .stylelintignore
├── .stylelintrc
├── README.md
├── config
│   ├── gulp
│   │   └── functions.js
│   ├── gulp.config.yml
│   ├── kubi
│   │   ├── helpers
│   │   │   └── functions.sh
│   │   └── modules
│   │       ├── help.sh
│   │       ├── setup.sh
│   │       └── troubleshoot.sh
│   ├── kubi.config.yml
│   ├── modernizr-config.yml
│   ├── theme.update
│   └── webpack.config.js
├── config.example.yml
├── cypress
│   ├── integration
│   │   └── landing_page.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── gulpfile.babel.js
├── kubimini.sh
├── package.json
├── src
│   ├── images
│   │   ├── favicons
│   │   └── spritesheets
│   │       ├── non-svgs
│   │       └── svgs
│   ├── js
│   │   ├── kubix.js
│   │   └── modules
│   │       └── helpers.js
│   ├── styles
│   │   ├── critical.scss
│   │   ├── fontface.scss
│   │   ├── helpers
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   └── kubix.scss
│   ├── theme
│   │   └── snippets
│   │       └── svg-sprite.liquid
│   └── vendors
│       └── cloudinarylazyresponsive.js
├── tsconfig.json
└── yarn.lock
```

### 1. Babel config

`.babelrc`

Kubi starter files come with [Babel](https://babeljs.io/) preconfigured with [`shopify/babel-preset-shopify`](https://github.com/Shopify/babel-preset-shopify) and [`babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env). There have also been babel plugins applied to the file. You can modify this config file based on your project requirements.

### 3. ESLint config

`.eslintrc` (optional)

Starter project comes with [ESLint](https://eslint.org/) preconfigured with [`shopify/eslint-plugin-shopify`](https://github.com/Shopify/eslint-plugin-shopify) and [`prettier`](https://prettier.io/). You can modify this config file based on your project requirements, or remove it completely if you do not wish to have JavaScript linting in your project.

### 4. Stylelint config

`.stylelintrc` (optional)

Starter project comes with [Stylelint](https://stylelint.io/) preconfigured with [`shopify/stylelint-config-shopify`](https://github.com/Shopify/stylelint-config-shopify), [`stylelint-config-sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines) and [`stylelint-prettier`](https://github.com/prettier/stylelint-prettier/). You can modify this config file based on your project requirements, or remove it completely if you do not wish to have style linting in your project.

### 5. README

`README.md` (optional)

The README file displays all or any information about the current project. By default Kubi will show the name, author details and the store URL within the file. You can modify this file based on your project requirements, or remove it completely if you wish.

### 6. Project configuration folder

`functions.js`, `modernizr-config.yml`, `gulp.config.yml`, `webpack.config.js`

The config folder contains the majority of core files for the project. Each one can be modified but only two are optional. The optional files are `cloudinarylazyresponsive.js` and `modernizr-config.yml`. The `cloudinarylazyresponsive.js` file is moved into the vendors folder after the Kubi script has run and is only used for lazyloading Cloudinary hosted images. The modernizr-config file is only used if modernizr.js is intended to be used for the project.

### 7. Kubi files

`functions.sh`, `help.sh`, `setup.sh`, `troubleshoot.sh`, `kubimini.sh`

The Kubi folder holds all the main files for Kubi such as injecting content into files and creating the project structure. Each of the files within the modules folder controls a different command for the Kubi script. Do **not** modify these shell files.

The `kubimini.sh` script is

### 8. Themekit config file

`config.example.yml`

The stater Kubi files come with an example Themekit file which will be replaced with an `config.yml` file after kubimini.sh has completed. Unlike the Gulp and Webpack config files this config must be kept in the root. You can modify this config file based on your project requirements.

### 9. End-to-end testing

`cypress.json` `cypress` (optional)

Starter project comes with an end-to-end testing file and folder which can run symulated tests on a Shopify theme. You can modify this config file based on your project requirements.

### 5. Package.json

`package.json`

The `package.json` file is a required file and **cannot** be deleted. When running the `kubimini.sh` script it will update the `package.json` contents to match your new project, such as updating the name, repository, and description.

The `package.json` includes NPM/Yarn scripts for you to be able to use Kubi commands easily (e.g. `yarn start`).

### 6. Kubi config

`kubi.config.yml` (optional)

The Kubi config file is generated after running the `kubimini.sh` script and after the script has finished setting up your project. The purpose of the config file is to save your answers from the `kubimini.sh` so if you need to re-run the script, all the questions can be skipped. You can modify this config file based on your project requirements.

### 7. Yarn.lock

`yarn.lock` (optional)

Kubi uses [Yarn](https://yarnpkg.com/en/) for developing themes because of its speed. However, Kubi will also work with NPM. Simply delete the `yarn.lock` file and run `npm install` to install the list of dependencies.

### 8. Typescript

`tsconfig.json` (optional)

Starter project comes with a [Typescript](https://www.typescriptlang.org/) configuration file allowing for Shopify JavaScript files to use `.ts` file formats and code with Typescript insead of vanilla JS. The `tsconfig.json` has been pre-configured. You can modify this config file based on your project requirements.

### 9. Images folder

`src/images/`

The images folder has several functionalites and contains sub-directories with their own commands. When adding images to the root of the folder all files will be optimised according to their image type. Within the images folder there are two subfolders `images/favicons` and `images/spritesheets`. Within the spritesheet subdirectory there are a further two direcotires which creates different types of sprites. When adding files to the svg subfolder this will concatenate and transform all images within a single file called `icons.liquid`. This file will then be placed within the assets folder of the `dist` directory. When the svgs are concatenated they are also transform into [svg symbols](https://css-tricks.com/svg-symbol-good-choice-icons/) and then optimised.

With the `non-svgs` subdirectory, this folder transforms all images within into a `.png` sprite with a generated css file. This file is then also optimised. For more information, visit [Sprites](https://github.com/kubixmedia/kubi/wiki/Local-development#Sprites).

### 10. JavaScript files

`src/js`

This folder constains all your JS files with a subdirectory contains all modules. With `Webpack` you can use ES6/ES2015's standard, which allows you to require your modules with the `import` syntax, arrow and async/awit functions. For more information, visit the [Dynamic imports and code splitting via Webpack](https://github.com/kubixmedia/kubi/wiki/Local-development#Dynamic-js-imports).

By default the a default JavaScript file will be included after running `kubimini.sh` which is pre-configured to import [airbnb-browser-shims](https://github.com/airbnb/browser-shims) and a helpers files which exposes the Shopify API object to the DOM.

### 11. Sass, SCSS and CSS files

`src/styles`

Kubi fully supports `.css`, `.scss` and `.sass` files and their syntax, including `@import`.

Liquid variables are accessible in `.css`, `.scss`, and `.sass` files via CSS custom properties that are declared in the `layout/theme.liquid`. Kubi also allows for liquid to be written directly within a style file. For more information, visit the [Local SCSS compilation](https://github.com/kubixmedia/kubi/wiki/Styles-with-Liquid).

### 12. Theme files

`src/theme`

The theme folder holds all of the remote Shopify theme's files once downloaded from the server. When edited they will be placed within the `dist` folder and re-uploaded to the Shopify store.

### 13. Vendors

`src/vendors`

This folder holds all project dependencies declared within the `package.json` file. This allows for easier importing of files within styles. As well as dependencies the file [cloudinarylazyresponsive.js](https://github.com/MarkOGDev/CloudinaryLazyResponsive) is held within the directory. This file does the same as the [cloudinary-core](https://github.com/cloudinary/cloudinary_js) file making Cloudinary files responsive but unlike `cloudinary-core.js` it applied lazyloading to the files.

### 14. SVG Symbols

`dist/snippets/icons.liquid`

This file is created upon images being added to the `images/spritesheets/svgs`. To expose the svg symbols created to the DOM, the `icons.liquid` file will need to be added before the closing `</body>` tag within `theme.liquid`. To add the file use the following include:

```liquid
{%- render 'icons' -%}
```

### 15. SVG Sprites

`dist/snippets/svg-sprite.liquid`

This liquid snippet is created after running the `kubimini.sh` script. It works in conjuction and requires the `icons.liquid` file to be included within `theme.liquid`. Once included it gives the ability to add a symbol from the icons file.

```liquid
{%- render 'svg-sprite', icon: 'example', class: 'icon', hidden: true -%}
```

### 16. Browser reloading

`theme.update`

This file is a required asset within Kubi as it allows for BrowserSync and Themekit to communicate more effectivly between each other. When a file gets deployed to the remote Shopify store Themekit will then ping the theme.update file which will then tell BrowserSync to reload the browser. If this file wasn't present then a reload delay would need to be placed and there would be occasions where BrowserSync would reload the browser before Themekit has finished deploying to the remote store.