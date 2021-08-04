---
sidebar_position: 5
---

# Team Mode

### COMING SOON!

Kubi can run in two mode *individual* and *team*. Within the `config.yml` file you can set which mode the project will run in. By default the the project will be set to individual mode. The following code is where you could change the how Kubi runs and will be located at the top of the config file:

```yml
project:
  team: false
```

>**Note**: While this feature is in development it is **recommended** to keep the team value set to false.

The object parameter `team` takes a boolean value of true and false. When set to true it will tell Kubi that more than one person will be working on the project at the same time. When team mode is active it Git will perform hooks to intercept changes made to files before being uploaded to the Shopify store. When a change is made Git will commit the change, pull any changes from the remote repo and then push to the repo and the remote store. If the pull causes any conflicts this will stop the push and upload until the errors are resolved.

This will allow each team member to always have updated files and stop BrowserSync's live reload showing the wrong files.
