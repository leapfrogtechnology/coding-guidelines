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
* Imports:
    - Always `import` specific namespace.
    - Try to use parent namespace for actions. i.e. `import os: os.path` rather that `from os import path`
    - Never use `import *` i.e. `from MODULE import *`
    - use namespace whenever possible. Use `as SOMEOTHERNAMESPACE` for collision of namespace
* Use `else: #nobreak` if you are using `else` with loops that has `break`.
* use `mypy` and type annotation when possible for type safe code.
* `Docker` can be used for deployment. Use `python` images for [docker](https://hub.docker.com/_/python){:target="_blank"}.
* Use `generators` and `yield` instead of data structures for high streams of data.
* Use `itertools`, `functools` for utilities and `collection` for data structures.
* Use `dataclasses` if available. Go for `attrs` library if `dataclass` is not present.
* Use `is not` and `is` for `None`, `True` and `False` specific check only. If most cases truthy and falsy can be checked with if `VARNAME:`. 
* Strings: 
    - Adhere to one quote practice. Double quote is recommended. Python doesnot differentiate between **'** or **"**.
    - Should be interpolated with either [fstring](https://www.python.org/dev/peps/pep-0498/){:target="_blank"} or `.format` methods. Try to avoid `%`.
    - `+` can be used for direct string concatenation. Use `join` method for concatenation instead of `+=` when iterating.
* Use `context` whenever supported especially for io related closing actions.
    - i.e. `with` statement when supported.
    - Always remember to close on exit. i.e. if you open the file `close` on `finally` or better use `with` or `contextlib.closing`.
* While `python` is an OOP, you can always choose `functions` and `modules` over `class` if there is only one `object` to be created.
* Use `property` setter when writing OOP and you need readonly attributes.
* Use `pdb` as debugger whenever required.
* Multi-threading can be especially used when we have io bound and network bound multiple operation. Multiprocessing can be used to use multiple cores.
    - Recommended module is `concurrent.futures` in most cases. If lower level API is needed there is always `threading` and `multiprocessing` module.
    - Be very carefult on threads and locks, so always discuss what you are doing.
    - Use `asyncio` for IO bound async flow. This is something new and constantly changing in `python`.
* Recommended third party modules:
    - For Relational Database:
        + Use `sqlalchemy` [core](https://docs.sqlalchemy.org/en/13/core/){:target="_blank"} for DB abstraction. This is particularly helpful when doing testing in `sqlite` and some other database for production. Also, for query consistency.
        + Use `sqlalchemy` [ORM](https://docs.sqlalchemy.org/en/13/orm/){:target="_blank"} or framework supported ORM when using specific framework.
        + Use DBAPI drivers such as `pyodbc`, `sqlite`, `mysqlclient` etc only when you donot want `sqlalchemy` dependency or when you are very performance conscious. While the API will be mostly compatible for this as python has DBAPI specification. Parameters binding and some methods may be incompatible or unavailable. 
    - `requests` for http request stuff.
    - `attrs` for data oriented objects and class.
    - `pytest` for tests.
