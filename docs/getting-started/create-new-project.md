---
sidebar_position: 2
---

# Create a new Kubi Project

To start using Kubi First add the following to your `~/.bash_profile` or your desired shell file:

```bash
function kubi () {
  local option="${1:-0}";
  local flag="${2:-master}";
  local gUpstream=${1:-'@{u}'}
  local gLocal=$(git rev-parse @)
  local gRemote=$(git rev-parse "$gUpstream")
  local gBase=$(git merge-base @ "$gUpstream")

  git remote add upstream git@github.com:kubixmedia/kubi.git
  git fetch upstream

  if [ -f "yarn.lock" ] || [ -f "package-lock.json" ];
  then
    rm -rf yarn.lock package-lock.json
  fi
  if [ ! -f "README.md" ];
  then
    touch README.md
  fi
  git add .
  if git diff-index --quiet HEAD --; then
    git commit -am"auto commit"
  fi
  if [ $gLocal = $gBase ]; then
    git pull
  fi
  git merge --squash upstream/${flag##*-} --allow-unrelated-histories
  printf "\n Your repo has been merged with the latest Kubi repo. Please check and fix any merge conflicts! \n"

  git remote remove upstream
  if [[ $option =~ ^([iI][installInstall]|[iI])$ ]];
  then
    sh kubimini.sh
  fi
}
```

This function will allow you to call Kubi within the terminal in any directory and will also allow you to keep Kubi updated. Now create your new repo and clone Shopify Kubi into an upstream branch. Once created run the bash setup script `kubimini.sh` to help put together all the behind the scenes magic. This includes setting up the project file structure as well as node modules, Shopify theme, Git and Gulp.

Use the following to clone your newly created repo to your chosen directory. The cloning shoudn&rsquo;t take long and when finsihed you will be able to run the Kubi terminal command.

```
git clone git@github.com:kubixmedia/{your-repo}.git
```

To run the terminal command once your project has finished cloning, migrate into the your repo folder (if not already) and enter `kubi` into your terminal. The Kubi repo will be fetched and merged automatically with your current repo. The command allows for one option and one flag to be passed to the global command. These allow for more customisation to be performed.

To have the script fetch, merge and install, the option `i or install` can be added. Passing the install variable to the script will imediatly run the **kubimini.sh** script after the merge is complete.

:::info
If your repo already has content or previous Kubi files you may have several conflicts which **will** need to be fixed running the **kubimini.sh** script*.
:::

```
kubi i
```
_or_
```
kubi install
```

When passing the flag option, this allows you to chose what branch within the Kubi repo to be merged with **your** current project. By default the master branch will be merged. This is the recommended branch and we **only** advise merging a different branch on either the recommendation of the Kubi author or if testing new Kubi features.

```
kubi --development
```

Once Kubi is merged and all the conflicts (if any) have been resolved you can now run the main Kubi script. You may have noticed that the script is named kubimini. This is due to the script only being a small part of the bigger Kubi script that is **coming soon**.

To run the script use the following command. After you have run the command follow the instructions in the terminal:

```
sh kubimini.sh
```

You have now successfully set up a Shopify Kubi project. Bravo!

To find out more about upstreams, see the [Github tutorial](https://help.github.com/articles/fork-a-repo/).