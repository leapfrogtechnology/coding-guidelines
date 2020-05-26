---
id: environment_and_dependency
title: Environment Isolation and Dependency Management
sidebar_label: Environment Isolation and Dependency Management
---

#### Information on development environment and dependency:

##### Environment Isolation:

* System installed `python` should never be used for development. Isolate your development.
* Any of the following can be used for python isolation:
    - [pyenv](https://github.com/pyenv/pyenv). **Recommended** as this supports local python install and multiple python versions.
    - [virtualenv](https://virtualenv.pypa.io/en/latest/). _Third Party_
    - [venv](https://docs.python.org/3/tutorial/venv.html). _Inbuilt_ `python -m venv`
* Use `pip` for installing packages if not using `poetry`.



##### Dependency Management:

* [poetry](https://python-poetry.org/) is recommended.
* You can use `setuptools` and `setup.py` as well for requirements handling through `requires` variable as well. They **must** be used for install-able modules.
