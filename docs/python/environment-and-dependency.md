---
id: environment-and-dependency
title: Environment Isolation and Dependency Management
sidebar_label: Environment Isolation and Dependency Management
---

#### Information on development environment and dependency:

### Environment Isolation:

* System installed `python` should never be used for development. Isolate your development.
* Any of the following can be used for python isolation:
    - [pyenv](https://github.com/pyenv/pyenv). **Recommended** as this supports local python install and multiple python versions.
    - [virtualenv](https://virtualenv.pypa.io/en/latest/). _Third Party_
    - [venv](https://docs.python.org/3/tutorial/venv.html). _Inbuilt_ `python -m venv`
* Use `pip` for installing packages if not using `poetry`.

:::info
Docker based containerized python can be used as well. Official images [here](https://hub.docker.com/_/python). It is better to use virtualenvs in docker as well rather than root based user.
:::

### Dependency Management:

* [poetry](https://python-poetry.org/) is recommended as it handles dependency as well as build system.
* You can use `setuptools` and `setup.py` as well for requirements handling through `requires`. They **must** be used for install-able modules.
* `requirements.txt`  style should be avoided although you may come across this style a lot.
