---
id: tools
title: Tools to use for easing development and maintaining consistency. There are links to readings as well.
sidebar_label: Tools and Libraries
--- 

:::info 
These tools can be used along with your development environment and IDE so that you can follow coding conventions better.
:::

#### Templates:
* [cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/)

#### Dependency Management:
* [poetry](https://python-poetry.org/)

#### Linters:
* [flake8](https://flake8.pycqa.org/en/latest/) with [plugins](https://github.com/DmytroLitvinov/awesome-flake8-extensions)
    * Alternative: [pylint](https://www.pylint.org)
* [bandit](https://bandit.readthedocs.io/en/latest/) to find common security issues. This can be used with `flake8` as a [plugin](https://pypi.org/project/flake8-bandit/)

#### Formatters:
* [black](https://black.readthedocs.io/en/stable/)
    - Alternative: [autopep8](https://pypi.org/project/autopep8/)
    - Alternative: [yapf](https://pypi.org/project/yapf/) 
* [isort](https://timothycrosley.github.io/isort/) for sorting only imports in codes. This is OPTIONAL.
    - Alternative: [reorder-python-imports](https://github.com/asottile/reorder_python_imports) another way of sorting imports.
    
#### Testing:
* [pytest](https://pytest.org) with [plugins](https://docs.pytest.org/en/2.7.3/plugins_index/index.html)
    - Alternative: Inbuilt `unittest`
* [hypothesis](https://hypothesis.readthedocs.io/en/latest/) and `mock` for data generation and mocking in tests.
* [tox](https://tox.readthedocs.io/en/latest/) for test automation in different `python` version
    - Alternative: [nox](https://nox.thea.codes/en/stable/) is `tox` with `python` API i.e. py file settings so can be used if you need any dynamism.

#### Other tools:
* [coverage](https://coverage.readthedocs.io/en/coverage-5.1/) for checking code coverage of tests.
* [interrogate](https://interrogate.readthedocs.io/en/latest/) for docstring coverage check.
* [mypy](http://mypy-lang.org/index.html) optional static type coding with python through annotations.

#### Readings and References:
* [Design Patterns](https://python-patterns.guide/)
* [Official Documentation](https://docs.python.org/3/)
* [Python Code Quality](https://meta.pycqa.org/en/latest/index.html) for the tools like `flake8`, `pylint`, `bandit` etc along with others.
* [Python Packages](https://www.pypa.io/en/latest/)
