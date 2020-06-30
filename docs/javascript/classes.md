---
id: classes
title: Classes
sidebar_label: Classes
---

#### The following convention should be followed for `class` naming:

### Classes

* Avoid inbuilt names.
* Classes/Components/Interfaces names should always be `PascalCase` and `noun`. i.e. `TaskService`, `Interceptor`, `Evaluation`
* Describe the class resposibility in name.
* Custom Exceptions should always be named ending with `Error` or `Exception` i.e. `ValidationError` , `ValidationException`

<!--JavaScript-->
    class SoftwareDeveloper {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }

    var me = new SoftwareDeveloper('John', 'Doe');

### Components

* Components are not everywhere in JavaScript, but commonly found in frontend frameworks like React/Polymer/Vue. Since a component is kinda instantiated -- but appended to the DOM instead -- like a JavaScript class, they are widely declared with `PascalCase` and `noun` too.

<!--Javascript-->
    // bad
    function userProfile(user) {
      return (
        <div>
          <span>First Name: {user.firstName}</span>
          <span>Last Name: {user.lastName}</span>
        </div>
      );
    }
 
    // good
    function UserProfile(user) {
      return (
        <div>
          <span>First Name: {user.firstName}</span>
          <span>Last Name: {user.lastName}</span>
        </div>
      );
    }

When a component gets used, it distinguishes itself from native HTML and web components, because its first letter is always written in uppercase.

<!--Javascript-->
  `<UserProfile user={{ firstName: 'John', lastName: 'Doe' }}/>`
