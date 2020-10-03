---
id: introduction
title: General Coding Guidelines
---

* Firstly, it's recommended to use a static code analysis tools to analyze the code before it's pushed to the version control. For eg: eslint, tslint, pylint, codeclimate, sonar etc. Development Team should identify corresponding tool for their tech stack and use it to follow community wide general coding standards and avoid general bad practice.

* No hard coding, use constants/configuration values instead of hard-coding literal values.

* Do not store config as constants in the code. Use separate config files for storing application credentials such as passwords, access key etc. Make sure you add this file in .gitignore file.

* Group similar values under enums, constant groups or similar data structures depending on what the language allows.

* Avoid code duplication (DRY). If the same code needs to be reused in multiple places, create a extract a common function instead.

* While writing code make sure it doesn't violate SRP (Single Responsibility Principle). To be more specific take care of the following:

* A function/method should do only one task.

* A class should have only one concern or should take care of only one aspect.

* Avoid having more than 3 parameters in a function/method.

* Avoid creating God classes or utils that is capable of doing every thing from string manipulation to checking if user is authored. This is a big NO.

* Follow separation of concerns principles properly, and identify what type of code should go in which layer or tier eg: What type of code should be written in Model, View, Service and Controller etc.

* Write pure functions where ever possible. It keeps the code more understandable and deterministic, plus it helps to avoid unexpected run time issues due to mutation.

* If your project is following OOP approach, follow it precisely depending upon the language specific best practices. If the project is following a FP (Functional Programming) approach, use it's best practices. Don't try to mix multiple paradigm, which results in more chaos and confusion in the code.

* Avoid unnecessary else blocks as much as possible for better readability and cleanliness.

  ```js
  // Bad practice
  function nullIfEmpty(value: any) {
    if (typeof value === 'string') {
      return value.trim() === '' ? null : value;
    } else {
      return value;
    }
  }

  // Good practice
  function nullIfEmpty(value: any) {
    if (typeof value !== 'string') {
      return value;
    }
    return value.trim() === '' ? null : value;
  }
  ```

* Avoid nested if blocks, multiple if blocks. No pyramid of doom.

* Break down or refactor code with complexity into multiple smaller chunks i.e functions/methods.

* DocBlocks / Doc comments – Add doc blocks for each and every function, class, interface, etc to clearly mention what they do. Docblocks also should mention the parameter types or return types clearly.

* Class level documentation, document public functions and interface. Follow language specific documentation standard.

* Also, make sure you write doc blocks, comments etc in proper english. Re-check your sentences, to ensure they're typo free.

* Different languages have different standards for doc blocks. Follow the language specific standard for doc blocks. For examples:

  ```js
  /**
   * Hit the twilio API to send notifications.
    *
    * @param {NotificationPayload} payload
    * @returns {Promise<object>}
    */
  function sendNotification(payload: NotificationPayload): Promise<object> {
    return twilioClient.sendMessage(payload);
  }
  ```

  ```py
  def rollback(id=None):
  '''
  Deployment rollback to the previous build, or
  the build identified by the given id.
  '''

  (_, current_path) = setup_remote()
  history = load_history()

  # If the current build in the history is not set yet or
  # there aren't any previous builds on the history
  # rollback is not possible.
  if not history['current'] or not history['builds']:
      remote_info('Could not get the previous build to rollback.')

      return
  ...
  ```

* Avoid re-inventing the wheel. Use framework features, or utilities provided by libraries wherever possible instead of writing custom code.

* Don't hard-code text data/content in the code itself, instead put text content/messages in the internationalization files and use the content identifiers instead.

* Each Components, Classes, or Interfaces should be written in their own file. And the filename should be named same as it's identifier name. (This could be an exception for python).

* Follow language specific naming convention.

  * Use PascalCase naming convention for Components, Classes, or interfaces, enums, or other custom types.

  * Use camelCase for naming functions, variables etc.

  * Use snake_case for naming database columns, table names etc.

  * Use **CAPITAL_CASE_WITH_UNDERSCORES** for defining constants eg: const **PAGINATION_MAX_ROWS = 15**.

  * Classes/Interfaces/Components/Services should be **named as a noun (singular)** as they represent a real world entity.

  * For instance: **Person, PersonList, User, ArrayAggregator, PerformanceEvaluator, SourceAnalyzer, Inspector, TaskService,  UserServiceTest** etc.
    Avoid prefixing them with verbs or naming them as plural entities. For example bad class names could be: **GetUser, Users, Todos, Listeners, GetUserById** etc.
    Functions or methods should be named as verbs or actions as they represent actions. So, function name should clearly say what that function does.
    Good function names: **getPersonList, fetchUsers, getCurrentUser, removeTodoItems, initialize, clear, flush, activate, isActive(), shouldNotify()**
    Bad function names are those that isn't meaningful to the task it does.

  * A function should do one thing and should be named accordingly. **SRP(Single Responsibility Principle)** also applies here. If you have broken down the function following SRP then there won't be a function such as: **getUserByIdAndActivateItAndLogin**, **checkPeopleAndArchiveThem** (bad practice).

* All the releases should be properly tagged in git.

* Follow Major, Minor and Patch format. and include information about Production and Dev release.

* Patch - Bug fixes

* Minor - Feature additions/enhancements

* Major - Change in business logic.

* All the releases should be identified as pre-release in git if they are not released for production.

* Follow Gitflow.

* Sanity checklist document should be present.

* Consistent Relational Operators:

  * Use relational operators either `>=` / `<=` or `>` / `<`  consistently in the entire codebase.

  * Example: In some places, there is `>=256 && <=512` and in other place there is `>255 && <511`.

  * Why? Lesser cognitive burden, enforce consistency and avoid confusion.
