---
sidebar_position: 1
---

# System Requirements

There are several system requirements you’ll want to ensure you have installed on your local machine before getting started.

## Node
You will need to have Node versions **10.18.1 or higher** installed. We recommend the current LTS (long-term support) release which you can download directly from the [Node website](https://nodejs.org/en/) or if you are comfortable, install through the command line with either [Homebrew](https://brew.sh/) or [NVM](https://github.com/nvm-sh/nvm).

We highly recommend using NVM (*Node Version Manager*) which can easily be installed by running either of the following commands in your terminal:

**Homebrew**
```
brew install nvm
```

**Curl**
```curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Once installed you should create NVM's working directory if it doesn't exist:

`mkdir ~/.nvm`

Add the following to your ~/.bash_profile or your desired shell file:

```bash
export NVM_DIR="$HOME/.nvm"
NVM_HOMEBREW="/usr/local/opt/nvm/nvm.sh"
[ -s "$NVM_HOMEBREW" ] && \. "$NVM_HOMEBREW"
export PATH="$HOME/.npm-packages/bin:$PATH"
```

For further documentation on how to install individual Node versions with NVM, visit the [GitHub repository](https://github.com/nvm-sh/nvm#usage).

## Yarn or npm 5+

In an opinionated way we prefer Yarn over NPM and with that Kubi is focused on this however, you can use NPM if you wish. Follow the instructions on how to get started with [Yarn](https://yarnpkg.com/en/docs/install) or [npm](https://www.npmjs.com/get-npm) to make sure you’re using the latest version.

It’s important to note, both of these packages have their ups and downs and many of the fantastic features that initially launched with Yarn are now available with npm 5+, so feel free to use the one you are most comfortable with.

## Shell Environment

When using the Kubi script you will need to be using an updated version of your shell. We recommend either Bash or ZSH however, we have focused on Bash for writing Kubi. When running either of these two shells make sure you have **Bash >= 3.2.57** or **ZSH >= 5.7** versions installed.

To make sure you are running the latest versions either Bash or ZSH you can install them by running either of the following commands in your terminal:

**Bash**
```bash
brew install bash
sudo bash -c "echo /usr/local/bin/bash >> /private/etc/shells"
chsh -s /usr/local/bin/bash
```

**ZSH**
```bash
brew install zsh
sudo zsh -c "echo /usr/local/bin/zsh >> /private/etc/shells"
chsh -s /usr/local/bin/zsh
```