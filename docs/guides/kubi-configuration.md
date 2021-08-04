---
sidebar_position: 2
---

# Kubi Configuration

Excluding [connecting to your store](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store), Kubi **should** work out of the box without any additional configuration. However, there are three types of config files that make up Kubi, which allow for developers to customize the default configurations of Kubi. These files are `kubi.config.yml`, `gulp.config.yml` and `webpack.config.js`. They can be found inside the config directory of the theme.

## Editing kubi.config.yml

A typical `kubi.config.yml` could look something like below:

```yml
## Config file
config:
  downCreate: "s" # Download/create theme or skip
  env: development
  hasFile: "n" # config.yml exists
  store: example.myshopify.com
  storeSecond: false
  storeThird: false
  theme: 12345678…
  themeName: false
  themeSecond: false
  themeThird: false
## Project settings
project:
  css: kubix
  desc: "null"
  js: kubix
  name: "Example"
  repo: "example"
  use: yarn # yarn or npm
```

>**Note**: The `kubi.config.yml` will only be created once the Kubi script has completed the project setup. The purpose of this config file is to save the answers provided to `kubimini.sh` so that if the script is re-run then the user doesn't have to fill out all the same answers again.

## Editing gulp.config.yml

The `gulp.config.yml` file controls how Gulp performs with the project and allows for a user to customise the files Gulp processes, handles and the behaviour of each Gulp task when developing a Shopify theme. A typical config will look similar to the following:

```yml
js:
  dest: "dist/assets"
  src: "src/js/kubix.js"

json:
  dest: "dist"
  format: 2
  src:
    - "src/theme/config/*.json"
    - "src/theme/snippets/*.json"
    - "src/theme/assets/*.json"

liquid:
  dest: "dist"
  src: "src/theme/**/*.liquid"

locales:
  dest: "dist/locales"
  src: "src/theme/locales/**/*"

sprites:
  css: "kubix-sprite.css"
  cssdest: "dist/assets"
  img: "sprite.png"
  imgdest: "dist/assets"
  src: "src/images/spritesheets/non-svgs/*.+(png|jpg|jpeg)"

styles:
  dest: "dist/assets"
  preferences: # Will only be used in production or staging mode.
    compatibility: "*"
    format: "beautify"
    removeEmpty: false
    removeDuplicateFontRules: false
    removeDuplicateMediaBlocks: false
    removeDuplicateRules: false
  src: "src/styles/kubix.scss"

vendors:
  dest: "src/vendors"
  min:
    dest: "dist/assets"
    src: "src/vendors"

## Project syncing
browsersync:
  debug: true
  notify: true
  open: false
  port: 3000
  preferences:
    clicks: false
    scroll: false
```

>**Note**: The `gulp.config.yml` file is the primary file for configuring Kubi as it was created to the backbone of Kubi development with Shopify themes.

>**Warning**: To avoid errors, keep Kubi functional and updatable **do not** edit the `gulpfile.babel.js` file directly!

## Editing webpack.config.js

Webpack within Kubi only controls and processes JavaScript files. This was due to that we feel Webpack handles and process JavaScript a lot better than Gulp does and allows for more powerful processing options to be performed on js files. A typical `webpack.config.js` file is something like the below:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [ '@babel/preset-env', 'babel-preset-shopify/web' ],
          plugins: [ '@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime' ]
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  mode: prod ? 'production' : 'development',
  devServer: {
    historyApiFallback: true
  },
  devtool: !prod ? 'inline-source-map' : false,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  externals: {
    jquery: 'jQuery' // jQuery is being called within the dom.
  },
  plugins: [
    // Automatically load modules instead of having to import or require them everywhere.
    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      cloudinary: 'cloudinary-core',
      sections: '@shopify/theme-sections'
    })
  ]
};
```