---
id: project-structure
title: Project Structure and Templates
sidebar_label: Project Structure
---

#### The following folder structure should be used for projects:


* :file_folder: Project Root:
    - :memo: pyproject.toml
    - :memo: setup.py `and` :memo: setup.cfg (**OPTIONAL**)

:::info
* If not using `poetry`, `pyproject.toml` file can be omitted as `setup.py` can have dependencies as well.
* `pyproject.toml` can be used for [alternate build system](https://www.python.org/dev/peps/pep-0518/) if needed.
:::

*
    - :file_folder: docs
        * Your documentation
    - :file_folder: bin (**OPTIONAL**) => For entrypoint scripts which calls {PROJECT_NAME}
        + This can be generated using `setup.py` as well.
    - :file_folder: data (**OPTIONAL**)
        * Data for project.

:::tip
* This folder structure can be used as well. It will have **src** folder for more descriptive stature.
    + :file_folder: src
        - :file_folder: {PROJECT_NAME}

:::
*
    - :file_folder: {PROJECT_NAME}
        + :memo: `__init__.py`
        + :memo: `__main__.py` (**OPTIONAL**) => for calling with `python -m`
        + :file_folder: utils
        + :file_folder: service
        + :file_folder: config
    - :file_folder: tests
        + :file_folder: test of projects
        + :memo: conftest.py
    - :memo: LICENSE (**OPTIONAL**)
    - :memo: README (can be `md` or `rst`)
    - :file_folder: :memo: Other files/folders from third parties (**OPTIONAL**) such as tox.ini

:::note
+ **There can be cases where MVC folder structure as well as framework related folder structure can be used.**
    - The framework recommended structure should be followed in such case.
+ The OOP style cases of class as filename structue is not always necessary or recommended but can be used if needed.
:::


### Project Template
* [Python Package Authority Sample](https://github.com/pypa/sampleproject) can be used as bootstrap.
* Look into [cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/) tool for template generation.
    - [List of templates for cookiecutter.](http://cookiecutter-templates.sebastianruml.name/)
