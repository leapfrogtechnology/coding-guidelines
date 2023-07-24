---
id: pull-request-guidelines
title: Pull Request Guidelines
---


# Generic Pull Request Guidelines


## Creator Guideline



* Reflect the story/task/ in JIRA to GIT - Description, Link, Design reference, Any additional info.
    * Think simple
    * Compose clean, elegant, and readable code.
* Document only meta information inadequately represented by code
    * Focus on the Statement of user value
* Create a branch equivalent to the JIRA ticket - PROJECT-XXX
* Push your code
    * ASAP - As soon as possible
    * AFAP - As frequently as possible
    * The goal here is to collaborate well with the latest changes. Build once and use many times.
* Requesting for appropriate reviewers. Follow the steps as
    * Drafting pull requests
    * Review by self
    * Review by others
* Timely acknowledge feedback on the pull requests
* Be patient about pull requests
* Not parallelize too much and create multiple pull requests
    * In-progress limit of at max 2 pull requests
* Proper closure and definition of done
* Open Mindset
    * Acceptive
    * Open to enhancements/improvements


## Reviewers Guideline



* Open Mindset
    * Acceptive
    * Open to enhancements/improvements
* Go over the ticket description to understand what the PR is for
* Solution-driven comments over criticisms
* Knowledgeable comments
* Suggestive commenting
* Be polite and respectful
* Don’t just comment for the sake of it


## Approval Guideline



* Meets business requirements
* Adherence to the technical guidelines listed below
* Resolution of obvious bugs
* Keep an eye out for nonfunctional requirements
    * Performance and scalability
    * Portability and compatibility
    * Reliability, maintainability, and availability
    * Security
    * Localization
    * Usability
* Resolution of conflicts
* Minimum reviewal by two individuals


## Things to keep in mind



1. Granularization of tasks
    1. Small biteable size of code
        1. Easy portability - Cherry-pick
        2. Incremental effect analysis - Easy recovery
        3. Easy comprehension
2. Learning process for the reviewer and reviewee
3. Alignment to git strategy
    2. [Git flow](https://danielkummer.github.io/git-flow-cheatsheet/)
4. [Clean Code](https://github.com/SaikrishnaReddy1919/MyBooks/blob/master/%5BPROGRAMMING%5D%5BClean%20Code%20by%20Robert%20C%20Martin%5D.pdf)
5. Strictly follow design principles.
    3. DRY
    4. KISS
    5. YAGNI
    6. SOLID
6. Conventions
    7. [Naming conventions](https://github.com/kettanaito/naming-cheatsheet)
7. Proper Use of inbuilt functions
    8. Only wrap exceptional logic in try catch.
    9. Avoid unnecessary else statements.
    10. Consistent return
8. Use of Packages
    11. After a brief consultation with application team members.
    12. Freeze package names for major versions
9. Keep an eye out for functional and object-oriented concepts.
10. Component-based development
    13. Use of non unique ids. Component composition rule violation.
    14. Keep reusability in mind
    15. Avoid side effects
    16. Schema driven development


## Pull request description

Please note a few things while opening your PRs. Add the following things to your PR's description.



* Description - A short description of the feature for which the PR is opened.
* Summary of changes - Changes in the source code which the PR comprises.
* Route - The route from where we can view the feature being added in this PR.
* Screenshot - A screenshot of the added feature.
* Deployment notes - Any environment-specific changes need to be made in terms of infrastructure. Eg: Seeding of tables, the addition of secrets to the secrets manager, migration of tables, etc.

Also, make sure to add some reviewers and assign yourself as an Assignee.

#### Best Practices:

* Pull Request should atleast be <b>reviewed by 1 person</b> before merging it to the base branch.
* Only comment author can resolve comment – if code was corrected or after discussion author decides to fix it.
* Don’t mention the same problem many times. Don’t bloat the code, say it once and ask to fix everywhere.
* If there are pending, not resolved comments, the assignee is a code author who should fix or comment back.
* If there are discussions commented by the code author, the assignee is reviewer, who should continue a discussion or resolve comments and approve.
* Use labels to mark what actions should be next – e.g. `needs review`, `Reviewed By... ` etc.
* Provide details/screenshots about what has been changed.

References



1. [https://github.com/exercism/docs/blob/master/contributing/pull-request-guidelines.md](https://github.com/exercism/docs/blob/master/contributing/pull-request-guidelines.md)
2. [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
