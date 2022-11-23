---
id: smart-commit
title: Smart Commit
sidebar_label: Smart Commit
---

Smart commits allows a team to perform actions on JIRA issues from a single commit. Users can enter the issue key and the desired action such as time tracking or closing an issue.

#### Commands used in Smart Commit messages:

* `#comment`: Adds a comment to a JIRA issue. `ISSUE_KEY #comment <your comment text>`
* `#time`: Records time tracking information against a JIRA issue.
* `#<transition-name>`: Moves the JIRA issue to a particular workflow state.

#### Examples:

    - git commit -m "FHF-34 #time 30m Update modal design"
    - git commit -m "DEL-101 #time 4h 30m Fix null pointers #comment Fixed code #resolve"


Learn more about smart commits from the [official docs](https://support.atlassian.com/bitbucket-cloud/docs/use-smart-commits/).


:::tip
Want to add the branch name to your commit automatically? Check out [smart-commit](https://github.com/sbimochan/smart-commit)!
:::
