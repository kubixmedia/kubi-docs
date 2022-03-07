---
sidebar_position: 6
---

# Connect to a store

Now that you have a new Kubi project, you will need to make sure it's linked to your remote Shopify store by updating the **config.yml** file with your API credentials. This file will be automatically created and updated for you when running the [Kubi script](https://github.com/kubixmedia/kubi/wiki/2.Create-a-new-Kubi-project). If you haven't run the script there is an example config file `config.example.yml` for you to copy, rename to `config.yml` and update manually.

:::caution
We **highly** recommend you use the Kubi script rather than setting up manually as it will help you avoid potential errors.
:::

## Example `config.yml` file

```yml
# The API password generated from a Private App
password: 51f8c8de49ee28…

# The .myshopify.com URL to your Shopify store
store: yourshopname…

# The ID of the theme you wish to upload files to
theme_id: 12345678…

# A list of file patterns to ignore, with each list item prepended by '-'
ignore_files:
  - config/settings_data.json
  - locales/*
  - templates/*.json
```

:::caution
Private apps are no longer used for the purposes of theme development. Instead use Shopify's [ThemeKit Access](https://apps.shopify.com/theme-kit-access) app to generate a unique API key.

Note: this API key is unique to you, other developers must create their own key.
:::
## Setting store

This refers to the URL of your Shopify store, e.g. store-name.myshopify.com.

:::info
the `https://` protocol is not included and neither is the trailing slash.
:::

## Setting password

Create a new private app by navigating to your store’s private apps page (https://{store-name}.myshopify.com/admin/apps/private), giving the private app a name and setting the **Theme templates and theme assets** to “Read and write”.

![store-app](https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,dpr_auto,f_auto,fl_progressive,w_auto/Kubi%20Docs/store-app.png)

Hit the “Save” button, edit the new private app and click “Show” to view the **Password** field. This is your config `password`.

![store-api-password](https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,dpr_auto,f_auto,fl_progressive,w_auto/Kubi%20Docs/store-api-password.jpg)

## Setting theme ID

You can view a full list of all available theme IDs for your store by navigating to `https://{store-name}.myshopify.com/admin/themes.xml` or `https://{store-name}.myshopify.com/admin/themes.json`.

![store-themeID](https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,dpr_auto,f_auto,fl_progressive,w_auto/Kubi%20Docs/store-themeid.jpg)

Each theme entry will have an `id` tag. Set the config `theme_id` to the theme ID you want to deploy to.

:::info
When you deploy your theme, Kubi will overwrite the existing remote code associated with the `theme_id` you defined with your local project’s code, which you may not want. To avoid this, navigate to https://{store-name}.myshopify.com/admin/themes and duplicate an existing theme ID to work from. To not overwrite files (even changes ones) you can deploy in safe mode.
:::

## Working with OS2.0 JSON templates
When Shopify released OS2.0, theme templates changed. Previously, templates held the page's content. Now, OS2.0 utilises JSON templates which cannot accept Liquid.
JSON templates are optional and on a need-to-use basis.
Kubi is fully compatible with the new JSON templates, it can detect the difference between a Liquid template and a JSON template and perform the appropriate actions.

:::info
By default, JSON template ignores are commented out via the config's `ignore_files` option (See below). To work with JSON templates, simply uncomment the line before starting Kubi.
:::

:::caution
Unlike OS1.0 sections, OS2.0 sections save their setting data directly to the JSON templates. It's important that after you've created the initial JSON template, you again `ignore` the JSON templates line in `ignore_files`. Otherwise Customiser settings made after the previous save of the JSON file will be overwritten by any new file changes.
:::

## Setting `ignore_files`

This is the only optional setting in the `config.yml` file and it enables you to ignore certain files from being deployed to your Shopify store. One example would be to ignore the `settings_data.json` file to avoid overwriting your theme’s section settings every time you deploy your theme.

The file paths are relative to the theme’s `dist/` directory so ignoring the `settings_data.json` file would look like the following:

```yml
ignore_files:
  - config/settings_data.json
```

## Adding alternative themes/stores

Kubi allows you to define multiple environments for deployment. To seperate the multiple environments the API credentials need to be wrapped in an environment keyword. By default Kubi uses **development, staging and production**.

:::info
Staging is used for when the project is finished in development and needs signing off by the client. It is also aim at testing as the staging environment should minic the production as close as possible. By havng a staging env it allows changes or bugs to be found and fixed before effectting the users of the live store.
:::

```yml
# Set the development store credentials.
development:
  password: 51f8c8de49ee28…
  store: yourshopname…
  theme_id: 12345678…
  ignore_files:
    - config/settings_data.json
    - locales/*
    # - templates/*.json

# Be careful when using the below environment as it's connected directly to the live store but not live theme.
staging:
  password: 51f8c8de49ee29…
  store: yourshopnamestage…
  theme_id: 12345679…
  ignore_files:
    - config/settings_data.json

# Be careful when using the below environment as it's connected directly to the live store and theme.
production:
  password: 51f8c8de49ee30…
  store: yourshopnameprod…
  theme_id: 12345680…
  ignore_files:
    - config/settings_data.json
```