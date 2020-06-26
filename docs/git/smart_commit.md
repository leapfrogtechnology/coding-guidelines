---
id: smart_commit
title: Smart Commit
sidebar_label: Smart Commit
---

Smart commits allows a team to perform actions on JIRA issues from a single commit. Users can enter the issue key and the desired action such as time tracking or closing an issue.

#### Some of the mostly used smart commands:

* `#comment`:  Adds a comment to a JIRA issue. `ISSUE_KEY #comment <your comment text>`
* `#time` : Records time tracking information against a JIRA issue.
* `#<transition-name>` :  Moves the JIRA issue to a particular workflow state.

#### Examples:

    - git commit -m "FHF-34 #time 1w 2d 4h 30m Total work logged".
    - DEL-101 #time 4h 30m Fix null pointers #comment Fixed code #resolve
