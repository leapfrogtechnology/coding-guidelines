---
id: general
title: General Coding Guidelines
sidebar_label: General Coding Guidelines
---

#### These are the general guidelines to be followed:

* Always use `python3` and try to stay above version `3.5`. **Latest stable** is recommended.
* Indentation should always be **space** and width should always be **4**.
* `Docker` can be used for deployment. Use `python` images for [docker](https://hub.docker.com/_/python).
* Use `generators` and `yield` instead of data structures for high streams of data.
* Use `itertools`, `functools` and `collection` modules to ensure we are using right data structures and utilities.
* Use `dataclasses` if available. Go for `attrs` library if `dataclass` is not present.
* Use `is not` and `is` for `None`, `True` and `False` check only.
* Strings: 
    - Adhere to one quote practice. Double quote is recommended. Python doesnot differentiate between *"'"* or *'"'*
    - Should be interpolated with either [fstring](https://www.python.org/dev/peps/pep-0498/) or `.format` methods. Try to avoid `%`.
    - `+` can be used for direct string concatenation. Use `join` method for concatenation instead of `+=` when iterating.
* `logging` is always a must. Use the following levels as required:
    - **DEBUG**: log parameters and arguments. Information needed when we need to debug or develop. Should be avoided in production.
    - **INFO**: log basic information such as function entry, file being processed et al
    - **WARN**: log user security and other warnings that are not critical
    - **ERROR**: error related logs. Use exception method to log tracebacks in case of exceptions.
    - **CRITICAL**: blocking issues or immediate attention issues.
    - **ERROR and CRITICAL** levels should be mitigated and informed.
    - `logger` is used for naming logger.
    - It is singleton and single threaded by default for `a name` of the logger. Can be non-blocking if required.
* `Exception` handling is a must along with logging.
    - Do not use bare `except` or `except Exception` which catches all the exception. Be specific on exception. E.g. catch only `FileNotFoundError` if you are say moving a file.
    - For modules specific error, if something internal is not fulfilling then try to create custom `Exception` class primarily naming it Error such as `MyCustomError(Exception)` and use it.
* Use `context` whenever supported especially for io related closing actions.
    - i.e. `with` statement when supported.
    - Always remember to close on exit. i.e. if you open the file `close` on `finally` or better use `with` or `contextlib.closing`.
* Use `pdb` as debugger whenever required.
* Multi-threading can be especially used when we have io bound and network bound multiple operation. Multiprocessing can be used to use multiple cores.
    - Recommended module is `concurrent.futures` in most cases. If lower level API is needed there is always `threading` and `multiprocessing` module.
    - Use `asyncio` for IO bound async codes. This is something new and constantly changing in `python`.
    - Be very carefult on threads and locks, so always discuss what you are doing.
* Recommended third party modules:
    - `sqlalchemy` for ORM related database stuffs.
    - `requests` for http request stuff.
    - `attrs` for data oriented objects and class.
    - `pytest` for tests.

