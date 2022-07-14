---
sidebar_position: 1
---

import myImageUrl from '../static/img/Kubi_Banner.png';

# Welcome

<img src={myImageUrl} alt="Kubi banner" loading="eager" />

Shopify Kubi is a command line tool for creating a development environment for Shopify. It is designed to assist your development workflow and speed up the process of developing, testing, and deploying themes to Shopify. It has taken inspiration from Shopify Slate but has applied more team related functions and utlises the power of Gulp in combination with Webpack!

Kubi not only provides a more customisable Shopify development solution but also allows for better compiling, css cleaning, optimising and code standards checking. The project uses a number of different packages to achieve this, such as Node Themekit, Styleling, Prettier and eslinting. Kubi also gives more customisation options in the style of coding you may want to use, to develop for Shopify. It's list of features are:

**Features**

-   Dependency management via Gulp and Webpack
-   NPM scripts to download, deploy and open theme
-   JavaScriot linting with eslint
-   Style linting with stylelint
-   Theme linting and testing with Themekit & Travis
-   Local SCSS compilation
-   ES6+ support via Babel
-   Dynamic imports and code splitting via Webpack & Babel
-   Watch and deploy theme project changes
-   Asset optimisation
-   Write YML instead of JSON (even in schema)
-   Optional backup and restoration of project
-   Git branch setup
-   Git watching and auto commiting
-   SVG sprite creation
-   Critical CSS creation
-   File syncing to store

## Project Setup

To start using Kubi, first create your new repo and clone Shopify Kubi into an upstream branch. Once created run the bash setup script to help put together all the behind the scenes magic. This includes setting up the project file structure as well as node modules and its dependencies including the most important one&hellip; Gulp.

To get started once you have created a new repo, navigate to the theme folder in terminal and create the upstream by typing:

`git remote add upstream git@github.com:kubixmedia/kubi.git`

This will add the remote stream of kubi. You now need to pull it's contents into your project. To do this run:

`git fetch upstream`

If this is a new project merge the upstream's master branch into your repo. By doing: `git merge --squash upstream/master`. However if you are upgrading an older version of Kubi or adding Kubi to an exisiting project you will need to pull the contents with `git pull upstream master`.

If this all sounds like a massive faff then you can use this shortcut function:

```bash
function kubi () {
  local project="${1:-0}";
  git remote add upstream git@github.com:kubixmedia/kubi.git
  git fetch upstream
  if [ $project == "update" ];
  then
    git pull upstream master
  else
    touch README.md
    git add .
    git commit -am"first commit"
    git merge --squash upstream/master --allow-unrelated-histories
  fi
  git remote remove upstream
  if [ $project == "install" ] || [ $project == "i" ] || [ $2 == "install" ] || [ $2 == "i" ];
  then
    sh kubimini.sh
  fi
}
```

Add the above code to your bash_profile and restart the terminal `source ~/.bash_profile`. Once restarted you can simply run `kubi` for a new project or `kubi update` for an existing project.

If you have pulled the upstream you may have several conflicts which _will_ need to be fixed before the next step.

Once all the conflicts have been resolved you can now run the main Kubi script. You may have noticed that the script is named kubimini. This is due to the script only being a small part of the bigger Kubi script that is coming soon.

To run the script use the following command. After you have run the command follow the instructions in the terminal:

```bash
sh kubimini.sh
```

You have now successfully set up a Shopify Kubi project. Bravo!

To find out more about upstreams, see the [Github tutorial](https://help.github.com/articles/fork-a-repo/).

## Configuring the project

To configure your new Shopify Kubi project, there are two files located within the config folder. These files are `gulp.config.yml` and `webpack.config.js`. There is no need to edit the `gulpfile.babel.js` file as all settings for this file can be found in the `gulp.config`. Within the Gulp config file you can add, rename or remove files from Gulp tasks or with some change how they run. For example you can configure the backup task to sort by oldest to newest and vise versa and even limt/unlimit the amount of backups it takes.

## Starting the project

To start a Kubi project after setup you can run a few commands depending on your preference:

```bash npm2yarn
npm run start
```

Which will start the watch process, compiling of your changes and deployment to Shopify. Once you are ready for your project to either go live or into testing with the client, all you have to do is execute either:

```bash npm2yarn
npm run build
```

By default the build commands will run the project in production mode. To configure it to run in staging mode see _Configuring the project_. After that let Gulp do the rest and happy coding!

### Contributing to Shopify Kubi

If you would like to contribute to Shopify Kubi, you should first consider if your change should be added to the project and be part of the Shopify Kubi releases. If however, you do need to contribute to Shopify Kubi, you should fork a copy, make the change and then submit a pull request.

### Releases

All changes either an enchancement or warrenting a new release **must** be done on the development branch or subbranches of development first before merging with master for the main release. All releases within development should be marked with the pre-release and have the code name of the release they are going to be or are linked to. For example `Release - Mercury`. If the changes are linked to an already released version then once the new releases name matches, make sure the version number is higher than the previous. Version numbers are done by tags. For sexample `Release - Mercury` tag `v1.0.1`.
