---
id: exceptions
title: Exception Handling
sidebar_label: Exception Handling
---

#### The following convention should be followed for `Exception` handling:

* `Exception` handling is a must and should be mitigated.
* Do not use bare `except` or `except Exception` which catches all the exception. 
    - Always be specific on exception. E.g. catch only `FileNotFoundError` if you are say moving a file.
* User Defined Exceptions:
    - Write your custom error only when your error is not described or fulfilled by [internal exceptions](https://docs.python.org/3/library/exceptions.html).
    - Create custom `Exception` class primarily suffixing it with `Error` such as `MyCustomError(Exception)` and use it.
    - Always use `Exception` as your parent class for user defined exceptions. Donot use `BaseException`.
* Add traceback to your mitigation. i.e. either `logging` or mails. Donot `pass`.
* The `try` block should be specific to desired exception. Donot use huge code chunk in `try`. Use `else` if needed.

