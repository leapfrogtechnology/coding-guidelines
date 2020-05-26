---
id: tools
title: Tools to use for easing development and maintaining consistency. There are links to readings as well.
sidebar_label: Tools and Libraries
---

#### Templates:
* [cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/){:target="_blank"}

#### Dependency Management:
* [poetry](https://python-poetry.org/){:target="_blank"}

#### Linters:
* [flake8](https://flake8.pycqa.org/en/latest/){:target="_blank"} with [plugins](https://github.com/DmytroLitvinov/awesome-flake8-extensions){:target="_blank"}
    * Alternative: [pylint](https://www.pylint.org){:target="_blank"}
* [bandit](https://bandit.readthedocs.io/en/latest/){:target="_blank"} to find common security issues. This can be used with `flake8` as a [plugin](https://pypi.org/project/flake8-bandit/){:target="_blan.k"}

#### Formatters:
* [black](https://black.readthedocs.io/en/stable/){:target="_blank"}
    - Alternative: [autopep8](https://pypi.org/project/autopep8/){:target="_blank"}
    - Alternative: [yapf](https://pypi.org/project/yapf/){:target="_blank"} 
* [isort](https://timothycrosley.github.io/isort/){:target="_blank"} for sorting only imports in codes. This is OPTIONAL.

#### Testing:
* [pytest](https://pytest.org){:target="_blank"} with [plugins](https://docs.pytest.org/en/2.7.3/plugins_index/index.html){:target="_blank"}
    - Alternative: Inbuilt `unittest`
* [hypothesis](https://hypothesis.readthedocs.io/en/latest/){:target="_blank"} and `mock` for data generation and mocking in tests.
* [tox](https://tox.readthedocs.io/en/latest/){:target="_blank"} for test automation in different `python` version
    - Alternative: [nox](https://nox.thea.codes/en/stable/){:target="_blank"} is an alternative to `tox`.

#### Other tools:
* [coverage](https://coverage.readthedocs.io/en/coverage-5.1/){:target="_blank"} for checking code coverage of tests.
* [interrogate](https://interrogate.readthedocs.io/en/latest/){:target="_blank"} for docstring coverage check.
* [mypy](http://mypy-lang.org/index.html){:target="_blank"} optional static type coding with python through annotations.

#### Readings and References:
* [Design Patterns](https://python-patterns.guide/){:target="_blank"}
* [Official Documentation](https://docs.python.org/3/){:target="_blank"}
* [Python Code Quality](https://meta.pycqa.org/en/latest/index.html){:target="_blank"} for the tools like `flake8`, `pylint`, `bandit` etc along with others.
* [Python Packages](https://www.pypa.io/en/latest/){:target="_blank"}
