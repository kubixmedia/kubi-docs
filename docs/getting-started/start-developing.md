---
sidebar_position: 6
---

# Start Developing

Once you have setup your store and your Kubi project either manually or by using the Kubi script, you can now sit back, relax and code away! To begin developing your Shopify project with Kubi's development pipeline, run the following command:

```bash npm2yarn
npm run
```

:::tip
You can also start Kubi by simply running `gulp`. For this, you will need to have Gulp installed **globally** on your system.

`npm i -g gulp`
:::

This compiles your local theme files into a `dist` directory and luanches the BrowserSync localhost that will serve your files (i.e. Liquid, CSS and JavaScript) from your chosen port. By default it will be `https://localhost:3000` internal and `https://xxx.xxx.x.xx:3000/` external.

<img src="https://user-images.githubusercontent.com/25429915/75773899-b2f95500-5d46-11ea-9e55-cde38da10698.gif" alt="Animated GIF of a Mac terminal running the Kubi start command yarn start" width="700"/><br/>

>**Note**: Because we are running the server on `https://`, you may need to tell your browser to "trust it" by clicking through the **advanced** options it displays. Otherwise, it may be blocked and your theme will appear broken or the store unviewable.

## Specifying a different environment

By default, Kubi will run in the `development` environment however, users can specify either a `--prod` or `--staging` flag to target specific environments. These environment files need to be in your config.yml file which **needs** to be in the root of the project.

For example, the following command will target an live store:

```
yarn start --prod
```
