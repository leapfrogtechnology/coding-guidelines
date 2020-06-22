---
id: branching_strategy
title: Branching Strategy
sidebar_label: Branching Strategy
---

#### Main Branches:

* master (Production)
* dev (Development)
* qa (QA)
* uat (UAT)
* staging (Staging)

#### Supporting Branches:

* Feature branches
* Release branches
* Hotfix branches

#### The following convention should be followed:

* Every branch should be a branch of `dev` and should be merged to `dev` after PR is reviewed
* Every feature, task is done in a separate branch <b>named according to the JIRA issue name</b>.
* Any critical bug after production release is done via hotfix branches. It is branched off from `master` and <b>merged back to master and dev after it’s done</b>. 