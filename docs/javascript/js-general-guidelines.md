---
id: js-general-guidelines
title: JS General Coding Guidelines
sidebar_label: Javascript
---

### Code Quality

#### Linter Validation

[ESLint](https://eslint.org) is a recommended linting tool for the JavaScript codebases and it is configured to enforce the recommended coding standards rules for best practices and consistency in the code itself before the code is committed to GitHub even.
This statically analyzes the code and ensures the code is consistent, readable, maintainable and properly formatted before it's pushed to the version control.

**So, first of all, the code must comply with these eslint rules used in the project and must not leave any errors.**

#### Other Guidelines

Apart from the eslint validation. Following should be taken care of.

- No hard coding, use constants/configuration values instead of hard-coding literal values.

- Group similar values under a enumerated constants.

- Avoid code duplication. If the same code needs to be reused in multiple places, create a extract a common function instead.

- Write pure functions where ever possible. It keeps the code more understandable and deterministic, plus it helps to avoid unexpected run time issues due to mutation.

- Don't mutate the parameters received in functions.

<!--Javascript-->

    // DO NOT MUTATE function parameters.
    function getName(person) {
        person.name = person.firstName + ' ' + person.lastName;
        return person.name;
    }

    // Try to make the function a pure function where ever possible and avoid unnecessary side-effects.
    function getName(person) {
        let fullName = person.firstName + ' ' + person.lastName;
        return fullName;
    }

- Avoid unnecessary else blocks as much as possible.

<!--Javascript-->

    // Avoid unnecessary else block if possible.
    function nullIfEmpty(value) {
        if (typeof value === 'string') {
            return value.trim() === '' ? null : value;
        } else {
            return value;
        }
    }

    // Like this
    function nullIfEmpty(value) {
        if (typeof value !== 'string') {
            return value;
        }
        return value.trim() === '' ? null : value;
    }

- Avoid nested if blocks, multiple if blocks.
  
- While writing code make sure it doesn't violate SRP (Single Responsibility Principle). To be more specific take care of the following:

- A function should do only one task.

- Avoid having more than 3 parameters in a function.

- Break down or refactor code with complexity into multiple smaller functions.

- Use **async/awai**t or Promises for async operation and avoid callback hells.

- DocBlocks – Add doc blocks for each and every function, to clearly mention what it does. Docblocks also should mention the parameter types or return types.
  
<!--Javascript-->
    /**
      * Hit the twilio API to send notifications.
      * 
      *
      * @param {object} payload
      * @returns {Promise<object>}
    */
    function sendNotification(payload) {
        return twilioClient.sendMessage(payload);
    }  

- Make use of higher order functions for array and list manipulation and transformation eg: map, reduce, filter etc instead of plain old for loops.
<!--Javascript-->
    // Avoid using loops for list/array transformation like this
    function submitForm(users) {
        let promises = [];   
        for (let user of users) {
            if (isNotSaved(user)) {
                promises.push(saveUser(user));
            }
        }
        return Promise.all(promises);
    }

    // Prefer a more functional approach for
    // transformation using higher order function.
    function submitForm(users) {
        let promises = users
            .filter(isNotSaved)
            .map(saveUser);
        return Promise.all(promises);
    }

- Use framework features, or util functions provided by libraries wherever possible instead of writing custom code.
- Don't hard-code text data in the code itself, instead put text content/messages in the internationalization files and use the content identifiers instead.
- Each Components, Classes, or Interfaces should be written in their own file. And the filename should be named same as it's identifier. They must be exported as **default export**.
- Use **PascalCase** naming convention for Components, Classes, or interfaces.
- Use **camelCase** for naming functions and variables.
- Use **CAPITAL_CASE_WITH_UNDERSCORES** for defining constants eg: const **PAGINATION_MAX_ROWS** = 15.
