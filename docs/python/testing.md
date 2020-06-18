---
id: testing
title: Testing in python
sidebar_label: Testing
---

#### Test is integral part of sofware quality and should not be missed.



* Always use `pytest` for testing codes.
    + `unittest` provided by standard python can be used too if there is some blockage in using `pytest`.
* `tox` and `nox` are vey good tools especially for CI and multiple version tests.
* `hypothesis` and `mock` can be used for faking data and property testing.
* Testing should be broken to `unit` as well as `functional`.
* Use `coverage` to alert yourself of test coverage. Keep a target of **80 % - 90 %** coverage if **100%** is not achieved.  
* Only test the changes you made or functionality you added when testing a codebase of well known frameworks.
* `selenium` as well as `webtest` can be used for web based API testing.
* `jsonschema` and `genson` like tool can be used for JSON validity.
* Always confirm the `schema` when testing Web API response data.
* Passing tests for `merge` should be priority for all projects.
* Tests should always cover:
    + **Unit**: for you code units. Please use `mock` for external dependency and side effects.
    + **Functional**: You program functionality.
    + **Integration**: Your whole program integration.
