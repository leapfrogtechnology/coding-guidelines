---
id: general
title: General Coding Guidelines
sidebar_label: General Coding Guidelines
---

#### These are the general guidelines to be followed:

* See [tools](tools.md) that can be used in development environment setup to ease your coding process.
* Always use `python3` and try to stay above version `3.7`. **Latest stable** is always recommended.
* Indentation should always be **space** and width should always be **4**.
* File size and functionality:
    - break files into modules if you feel they have multiple functionalities.
    - Always try to adhere to single functionality or single class per file.
    - Set a goal of approximate linenumbers per file.
* Always go for pythonic syntax
    - comprehensions over `map` and loop
    - minimal use of `lambda`, use `operator` module with keyfunctions in `sorted`, `groupby` etc.
    - ternary with `if else` in same line. Donot use `and or` clause. i.e. `value and req_value or default`.
* Imports:
    - Always `import` specific namespace.
    - Try to use parent namespace for actions. i.e. `import sys: sys.path` or `import sys.path` rather that `from sys import path`
    - Never use `import *` i.e. `from MODULE import *`
    - use namespace whenever possible. Use `as SOMEOTHERNAMESPACE` for collision of namespace
* If you are using `else` with loops that has `break`. Just comment `#nobreak` for reference as it is for that usage. See [this](http://python-notes.curiousefficiency.org/en/latest/python_concepts/break_else.html) for some clarity.
    ```python
        for each in each_collection:
            if condition:
                break
        else: #nobreak
            WHEN break DOESNOT HAPPEN

        while True:
            if condition:
                break
        else: #nobreak
            WHEN break DOESNOT HAPPEN
    ```
* Use `pathlib` for path related use case rather than `os.path`
* Use type annotation or type hints when possible for type safe code. `mypy` like checker can be used.
* `Docker` can be used for deployment. Use `python` images for [`docker`](https://hub.docker.com/_/python).
* Use `generators` and `yield` instead of data structures for high streams of data.
* Use `itertools`, `functools` for utilities and `collections` for data structures.
* Use `is not` and `is` for `None`, `True` and `False` specific check only. If most cases truthy and falsy can be checked with  `if VARNAME:`.
* Strings:
    - Adhere to one quote practice. Double quote is recommended. Python doesnot differentiate between **'** or **"**. This may be controlled by `formatter` used as well.
    - Should be interpolated with either [fstring](https://www.python.org/dev/peps/pep-0498/) or `.format` methods. Try to avoid `%`.
        + `format_map` should be used for key mapped formatting.
        + use `fstring` for newer codebase as it is not compatible below version `3.6`.
    - `+` can be used for direct string concatenation. Use `join` method for concatenation instead of `+=` when iterating.
* Use `context` whenever supported especially for io related closing actions.
    - i.e. `with` statement when supported.
    - Always remember to close on exit. i.e. if you open the file `close` on `finally` or better use `with` or `contextlib.closing`.
* **OOP**
    - While `python` is an OOP, you can always choose `functions` and `modules` over `class` if there is only one `object` to be created like `Singletons`.
    - Use [`abc`](https://docs.python.org/3/library/abc.html) if you need abstraction. Mixins are more famous in python due to multiple inheritance.
        + Use `collections` and [`collections.abc`](https://docs.python.org/3/library/collections.abc.html) for
    - Use `property` setter getter only when you need readonly attributes. `__` variables can be used for some privacy.
    - Use `super` for overrides and parent calls.
    - Use inbuilt `dataclasses` if available. Go for `attrs` library if `dataclasses` is not present or you require a much richer library.
    - Use `classmethod` decorator for multiple initialization of classes as well as `staticmethod` where needed.
* Use `pdb` as debugger whenever required.
* Multi-threading can be especially used when we have io bound and network bound multiple operation. Multiprocessing can be used to use multiple cores.
    - Recommended module is `concurrent.futures` in most cases. If lower level API is needed there is always `threading` and `multiprocessing` module.
    - Be very carefult on threads and locks, so always discuss what you are doing as it may not always be optimized.
    - Use `asyncio` for IO bound async flow. This is something new and constantly changing in `python`.
* Try to use configurations outside python files. Usually they are not git tracked so should be editable by others. Try `settings.py` or `config.py` if you **must**. This cannot be the case for frameworks as they recommend their own practice mostly.
* Docstrings in code is a must. Please follow consistent format. **google** style is more readable and should be used except for `numpy` related projects.
* Recommended third party modules:
    - For Relational Database:
        + Use `sqlalchemy` [core](https://docs.sqlalchemy.org/en/13/core/) for DB abstraction. This is particularly helpful when doing testing in `sqlite` and some other database for production. Also, for query and parameters consistency.
        + Use `sqlalchemy` [ORM](https://docs.sqlalchemy.org/en/13/orm/) or framework supported **ORM** when using specific framework.
        + Use DBAPI drivers such as `pyodbc`, `sqlite`, `mysqlclient` etc only when you donot want `sqlalchemy` dependency or when you are very performance conscious. While the API will be mostly compatible for this as python has DBAPI specification. Parameters binding and some methods may be incompatible or unavailable. **sqlalchemy core is recommended.**
    - `requests` for http request stuff.
        + `aiohttp` or `httpx` are also good.
    - `attrs` for data oriented objects and classes design. If you don't want to use `dataclasses`.
    - `pytest` for tests.
