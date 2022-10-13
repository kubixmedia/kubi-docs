---
sidebar_position: 2
title: "Github Conventions"
---

## Summary

To improve our development workflows, we've devised a new way of working with Github.
These won't simply be recommendations or expectations, these will be enforced and held up.

With these new guidelines, we'll fully incorporate Git branches and Workflow actions to ensure only good quality code is produced and used.
s
From now, the process of completing a task/project will be as follows:

1. From the `development` branch, create a new branch with the new naming convention as shown below.
2. Complete _**only**_ the code changes relevant to the task's description. If you discover something else that needs repairing, create a new branch and work on it separately.
3. Upon completion, push your changes with a relevant, descriptive commit message.
4. Once pushed to Github, create a PR with a descriptive summary of changes.
5. A senior developer **must** perform a code review on all files that have been changed.
6. Three code linting workflows will now run:
    * Theme-check: Ensures the theme's Liquid code is compliant
    * Stylelint: This runs through your theme's SCSS files. All CSS files within the Assets folder will be ignored.
    * ESLint: This will run through any of Kubix's JavaScript files.

Your task will only be considered "complete" and mergable if:

* Your code has been reviewed and all issues corrected.
* The three workflows all pass successfully.

## Linters

The only acceptable pass is zero errors, and zero warnings.
Shopify themes often come with their own set of issues. These are acceptable as that's how we receieved them. To ensure `theme-check` ignores existing issues, ensure to first upload the whole theme to the `main` branch before checking out new branches. This will create a "diff" that theme-check can check against.

When Linting, some issues are unavoidable, especially when overriding theme styling. For this, use [Stylelint comments](https://stylelint.io/user-guide/ignore-code/), these comments are acceptable to use. The idea is that it forces you to acknowledge the issue and if it's unavoidable, you disable it for that one issue. If the rule is disabled without genuine need, the change will be rejected.

## Branch naming

Branch names are slightly different for full build projects and individual tasks from ClickUp.

Branch names must be all lowercase and hyphens used for spaces. Hypens and forward slashes are the only characters allowed.

### Build projects

For build projects, the branch name is compiled of three elements: Template name, type of file (choice of Section or Component) and name of element it effects.

Example:
`template-name/section/element` or `index/section/hero-slideshow`

### Individual tasks

For task-based work, usually from ClickUp, this is compiled of two elements: Your first name, and the task name

Example:
`first-name/task-name` or `liam/fix-button-colors`
