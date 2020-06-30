---
id: code-review-checklist
title: Code Review Checklist
sidebar_label: Code Review Checklist
---

Smart commits allows a team to perform actions on JIRA issues from a single commit. Users can enter the issue key and the desired action such as time tracking or closing an issue.

#### List:

* Description Confirmed?
* The code meets the business requirements
* Comments are comprehensible and add something to the maintainability of the code
* Comments are neither too numerous nor verbose
* Types have been generalized where possible
* Parameterized types have been used appropriately
* Exceptions have been used appropriately
* Repetitive code has been factored out
* Frameworks have been used appropriately – methods have all been defined appropriately
* Command classes have been designed to undertake one task only
* Unit tests are present and correct
* Common errors have been checked for
* Potential threading issues have been eliminated where possible
* Any security concerns have been addressed
* Performance was considered
* The functionality fits the current design/architecture
* The code is unit testable
* The code does not use unjustifiable static methods/blocks
* The code complies to coding standards
* Logging used appropriately (proper logging level and details)
* The code does not reinvent the wheel
* The code does not have any side effect on existing functionality


##### References: 

<a href="https://lftechnology.atlassian.net/wiki/spaces/PPM/pages/25854080/Code+Review+Checklist+for+Reviewers" target="_blank"> Code Review Checklist</a>