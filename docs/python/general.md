---
id: general
title: General Coding Guidelines
sidebar_label: General Coding Guidelines
---

#### These are the general guidelines to be followed:

* Always use `python3` and try to stay above version `3.5`. **Latest stable** is recommended.
* Indentation should always be **space** and width should always be **4**.
* File size and functionality:
    - break files into modules if you feel they have multiple functionalities.
    - Always try to adhere to single functionality or single class per file.
    - Set a goal of approximate linenumbers per file.
* Always go for pythonic syntax
    - comprehensions over `map` and loop
    - minimal use of `lambda`, use `operator` module with keyfunctions in `sorted`, `groupby` etc.
    - ternary with `if else` in same line. Donot use `and or` clause. i.e. `value and req_value or default`. 
    - `classmethod` for multiple way of class initialization
* use namespace whenever possible. Use `as SOMEOTHERNAMESPACE` for collision of namespace
* `Docker` can be used for deployment. Use `python` images for [docker](https://hub.docker.com/_/python){:target="_blank"}.
* Use `generators` and `yield` instead of data structures for high streams of data.
* Use `itertools`, `functools` for utilities and `collection` for data structures.
* Use `dataclasses` if available. Go for `attrs` library if `dataclass` is not present.
* Use `is not` and `is` for `None`, `True` and `False` specific check only. If most cases truthy and falsy can be checked with if `VARNAME:`. 
* Strings: 
    - Adhere to one quote practice. Double quote is recommended. Python doesnot differentiate between **'** or **"**.
    - Should be interpolated with either [fstring](https://www.python.org/dev/peps/pep-0498/){:target="_blank"} or `.format` methods. Try to avoid `%`.
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
* While `python` is an OOP, you can always choose `functions` and `modules` over `class` if there is only one `object` to be created.
* Use `pdb` as debugger whenever required.
* Multi-threading can be especially used when we have io bound and network bound multiple operation. Multiprocessing can be used to use multiple cores.
    - Recommended module is `concurrent.futures` in most cases. If lower level API is needed there is always `threading` and `multiprocessing` module.
    - Be very carefult on threads and locks, so always discuss what you are doing.
    - Use `asyncio` for IO bound async flow. This is something new and constantly changing in `python`.
* Recommended third party modules:
    - For Relational Database:
        + Use `sqlalchemy` [core](https://docs.sqlalchemy.org/en/13/core/){:target="_blank"} for DB abstraction. This is particularly helpful when doing testing in `sqlite` and some other database for production.
        + Use `sqlalchemy` [ORM](https://docs.sqlalchemy.org/en/13/orm/){:target="_blank"} or framework supported ORM when using specific framework.
        + Use DBAPI drivers such as `pyodbc`, `sqlite`, `mysqlclient` etc only when you donot want `sqlalchemy` dependency or when you are very performance conscious. While the API will be mostly compatible for this as python has DBAPI specification. Parameters binding and some methods may be incompatible or unavailable. 
    - `requests` for http request stuff.
    - `attrs` for data oriented objects and class.
    - `pytest` for tests.
