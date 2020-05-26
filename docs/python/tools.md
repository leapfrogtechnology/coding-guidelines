---
id: tools
title: Tools to use for easing development and maintaining consistency.
sidebar_label: Tools and Libraries
---

### Multiple tools on indented list are options with first one being recommended.

#### Templates:
* [cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/)

#### Dependency Management:
* [poetry](https://python-poetry.org/)

#### Linters:
* [flake8](https://flake8.pycqa.org/en/latest/) with [plugins](https://github.com/DmytroLitvinov/awesome-flake8-extensions)
    * [pylint](https://www.pylint.org)

#### Formatters:
* [black](https://black.readthedocs.io/en/stable/)
    * [autopep8](https://pypi.org/project/autopep8/)
    * [yapf](https://pypi.org/project/yapf/) 

#### Testing:
* [pytest](https://pytest.org) with [plugins](https://docs.pytest.org/en/2.7.3/plugins_index/index.html)
    * Inbuilt `unittest`

#### Other tools:
* [coverage](https://coverage.readthedocs.io/en/coverage-5.1/) for checking code coverage of tests.
* [interrogate](https://interrogate.readthedocs.io/en/latest/) for docstring coverage check.
* [hypothesis](https://hypothesis.readthedocs.io/en/latest/) and `mock` for data generation in tests.
* [tox](https://tox.readthedocs.io/en/latest/) for test automation in different `python` version
    - [nox](https://nox.thea.codes/en/stable/) is an alternative to `tox`.

#### Readings and References:
* [Design Patterns](https://python-patterns.guide/)
* [Official Documentation](https://docs.python.org/3/)
