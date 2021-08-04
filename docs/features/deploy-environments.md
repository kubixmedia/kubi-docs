---
sidebar_position: 5
---

# Deploy Environments

By default, Kubi comes with three configured environments `development`, `staging` and `production`, the `development` environment will run as the default option however, this can be changed by specifying an env variable `--prod` or `--staging`. For each environment to work, private app details need to be in your `config.yml` file within the root of the project.

Each subtask of Kubi's Gulp file can be run separately in an environment mode or all together with `yarn start`. for example to just process stylesheets you can run `yarn start styles`. This allows for more micromanaging of tasks and can speed up development when only one task is needed.

## Development

```bash npm2yarn
npm start
```

When running in development mode all assets are processed in a non-minified, optimised state and source maps are created. Kubi will also target the development theme/store specified within the `config.yml` file.

## Staging

```bash npm2yarn
npm start --staging
```

The purpose of the staging environment is to mimic the production environment as much as possible by deploy changes to a none production theme/store. Having a staging environment allows for sign off by the client and testing to be done in a real environment without customers being affected if there are any bugs or client changes.

Like production when running all assets are minified and optimised.

## Production

```bash npm2yarn
npm start --prod
```

When in production all files will be deployed to the live theme/store with assets being minified, optimised and renamed if necessary.