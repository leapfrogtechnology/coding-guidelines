---
id: functions
title: Functions
sidebar_label: Functions
---

#### Functions

JavaScript functions are usually written in camelcase. In addition, it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix.

  ```js
  // good
  function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  // bad
  function name(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  ```

This verb as prefix can be anything (e.g. get, fetch, push, apply, calculate, compute, post). It's yet another soft rule to consider for having more self-descriptive JavaScript functions.
