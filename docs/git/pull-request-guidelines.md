---
id: pull-request-guidelines
title: Pull Request Guidelines
---

# Generic Pull Request Guidelines

## Consider the following points while submitting and reviewing a pull request.

**1. Small and focused changes:** Break down the code into small and manageable units. 
    This allows for focused work and thorough analysis, making it easier to identify issues and provide constructive feedback.

**2. Review for Functionality:** Verify that the code accomplishes its intended purpose and that it follows the requirements and specifications. Ensure that the code is efficient, maintainable, and scalable.

**3. Check Coding Standards:** Evaluate the code against established coding standards and style guidelines. Look for consistency in naming conventions, code formatting, documentation, and error handling practices.

**4. Test Coverage:** Assess the presence and quality of unit tests. Verify that the code is adequately covered by tests and that the tests provide meaningful assertions and cover edge cases.

**5. Performance and Efficiency:** Evaluate the code for performance bottlenecks, resource consumption, and potential scalability issues. Focus on  optimizations and improvements if necessary.

**6. Security Considerations:** Review the code for potential security vulnerabilities such as injection attacks, data exposure, or authentication/authorization flaws. Encourage best practices like input validation, proper encryption, and handling of sensitive information.

**7. Follow PR standard practices:** Use clear and descriptive titles. Provide detailed description of the changes and include screenshots and documentations.

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

## Additional Role of Team Leads and Code Owners

**1. Performance and Scalability:** Consider the performance implications of the code changes. Assess whether the code might introduce bottlenecks or negatively impact system performance. Ensure that scalability concerns are addressed if applicable.

**2. Feature Breakdown:** Make sure the features and PR are broken into meaningful chunks during sprint planning.

**3. Architecture and Design:** Check if the code changes align with the overall system architecture and design. Ensure that the proposed changes fit into the existing structure and don't introduce architectural conflicts.

**4. Ownership:** Ultimately, the code owner or a team lead may need to make a decision on whether to approve, request changes, or reject the PR. This decision should be based on the code's quality, alignment with project goals, and any necessary improvements.


## Things to Keep in Mind

1. Granularization of tasks
    1. Small biteable size of code
        1. Easy portability - Cherry-pick
        2. Incremental effect analysis - Easy recovery
        3. Easy comprehension
2. Learning process for the reviewer and reviewee
3. Alignment to git strategy
    * [Git flow](https://danielkummer.github.io/git-flow-cheatsheet/)
5. [Clean Code](https://github.com/SaikrishnaReddy1919/MyBooks/blob/master/%5BPROGRAMMING%5D%5BClean%20Code%20by%20Robert%20C%20Martin%5D.pdf)
6. Strictly follow design principles.
    * DRY
    * KISS
    * YAGNI
    * SOLID
7. Conventions
    * [Naming conventions](https://github.com/kettanaito/naming-cheatsheet)
8. Proper Use of inbuilt functions
    * Only wrap exceptional logic in try catch
    * Avoid unnecessary else statements
    * Consistent return
9. Use of Packages
    * Consult your team to decide if a package is feasible for the project
    * Freeze package names for major versions
10. Keep an eye out for functional and object-oriented concepts.
11. Component-based development
    * Use of non unique ids. Component composition rule violation.
    * Keep reusability in mind
    * Avoid side effects
    * Schema driven development

## Pull Request Description

Please note a few things while opening your PRs. Add the following things to your PR's description.

* Description - A short description of the feature for which the PR is opened.
* Summary of changes - Changes in the source code which the PR comprises.
* Route - The route from where we can view the feature being added in this PR.
* Screenshot - A screenshot of the added feature.
* Deployment notes - Any environment-specific changes need to be made in terms of infrastructure. Eg: Seeding of tables, the addition of secrets to the secrets manager, migration of tables, etc.

Also, make sure to add some reviewers and assign yourself as an Assignee.

### Best Practices:

* Pull Request should atleast be <b>reviewed by 1 person</b> before merging it to the base branch.
* Only comment author can resolve comment – if code was corrected or after discussion author decides to fix it.
* Don’t mention the same problem many times. Don’t bloat the code, say it once and ask to fix everywhere.
* If there are pending, not resolved comments, the assignee is a code author who should fix or comment back.
* If there are discussions commented by the code author, the assignee is reviewer, who should continue a discussion or resolve comments and approve.
* Use labels to mark what actions should be next – e.g. `needs review`, `Reviewed By... ` etc.
* Provide details/screenshots about what has been changed.

### References

* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
