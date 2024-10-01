---
id: exceptions
title: Exception Handling
sidebar_label: Exception Handling
---

#### The following convention should be followed for `Exception` handling:

* `Exception` handling is a must and should be mitigated.
* Do not use bare `except` or `except Exception` which catches all the exception. 
    - Always be specific on exception. E.g. catch only `FileNotFoundError` if you are say moving a file.
* **User Defined Exceptions**:
    - Write your custom error only when your error is not described or fulfilled by [internal exceptions](https://docs.python.org/3/library/exceptions.html).
    - Create custom `Exception` class primarily suffixing it with `Error` such as `MyCustomError(Exception)` and use it.
    - Always use `Exception` as your parent class for user defined exceptions. Donot use `BaseException`.
* Add traceback to your mitigation. i.e. either `logging` or mails. Donot `pass`.
* The `try` block should be specific to desired exception. Donot use huge code chunk in `try`. Use `else` if needed.
```python
    try:
        value = int(some_str)
    except ValueError: # when not using exception object
        WHEN some_str IS not valid as value.
    except TypeError:
        WHEN some_str IS OTHER TYPE such as [], ()
    else: #can be avoided if exceptions are handled and returned. This is in context to try block.
        DO SOMETHING WITH VALUE
    
    try:
        value = int(some_str)
    except (ValueError, TypeError) as error:
        HANDLE BOTH exception and use exception object
    else: # If needed
        do something when try succeeds.
    finally:
        codebase to run anyway
```
* `finally` can be used if you need to run the block whatever the case. `context` can be used in many cases to avoid `finally`.
* `sys.exc_info` and [`traceback`](https://docs.python.org/3/library/traceback.html) can be used for traceback.
* Please read [this](https://cosmicpercolator.com/2016/01/13/exception-leaks-in-python-2-and-3/) on exceptions handling internals and leaks when referencing exceptions.
* Learn more about Exception Handling and Logging in detail [here](/general/exceptions-and-logging.md)


