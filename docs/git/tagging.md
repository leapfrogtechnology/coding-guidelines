---
id: tagging
title: Tagging
sidebar_label: Tagging
---

Semantic Versioning is all about releases, not builds. This means that the version only increases after you release.

Following are the standards that should be followed while tagging releases:

* Every release should have a tag.

* You can tag from any long running branch ( dev, qa, staging, master). However, we strictly follow tagging from master branch.

* Tag name should follow the *major.minor.patch_* naming conventions as suggested by <a href="https://semver.org/" target="_blank">Semantic Versioning</a>

* The tag for a version is in "X.Y.Z" format where,

    * Z is hot-fixes and patch release. If the release includes hot-fixes and patches, we increment this value by 1. Example : "2.7.1", "2.7.2"

    * Y includes major feature releases. If the release includes a major feature which is going to production for the first time we increase this value by 1. Example: "2.8.0", "2.9.0"

    * X is increased when there is a major change in the system which affects the entire application flow or UI/UX(flow) of a system. Example: "3.0.0", "4.0.0" .