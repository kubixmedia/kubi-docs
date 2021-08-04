---
sidebar_position: 4
---

# Updating Kubi

Kubi is a work in progress and even though it is out of beta it is still undergoing frequent development improvements, which makes the release cycle quite frequent. You will want to ensure you are running the latest version of Kubi in your projects.

## Updating Kubi version

To update Kubi, we recommend using the Bash function as shown with setting up [Kubi](https://github.com/kubixmedia/kubi/wiki/2.Create-a-new-Kubi-project):

`kubi --master`

Alternatively, you can update Kubi manually by creating an upstream to the Kubi repo from your current project and then merge the upstream with the origin remotes.

```
git remote add upstream git@github.com:kubixmedia/kubi.git
git fetch upstream master
git merge --squash upstream/master --allow-unrelated-histories
```

When merging with your current Kubi project there may be some Git conflicts that will **need** to be corrected before starting the newly updated Kubi. After a successful updated we recommend removing the upstream remote, as this will avoid mistakenly trying to push to upstream instead of your origin remote.

```
git remote remove upstream
```

>Note: to better understand the updates that are made to Kubi, you can read the [Kubi changelog](https://github.com/kubixmedia/kubi/CHANGELOG.md) to view the list of updates for each release.