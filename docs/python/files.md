---
id: files
title: Files, Folders & Modules
sidebar_label: Files, Folders & Modules
---

#### The following convention should be followed for files, folders and package naming:

* Name in `snake_case` or descriptive single words all in **lowercase**. E.g. `helper.py` or `sftp_fetcher.py` or `tools`
* Be explicit and descriptive of their functionality. Donot have short and ambiguous file and folder names.
    - E.g. `utils.py` or `utils` will describe of utility.
    - E.g. `aws_helper.py` will describe helper related to AWS.
* Donot clash names with inbuilt and famous modules.
    - E.g. donot use `requests.py` or `list.py`
* Be consistent when you are naming. Go with one form when choosing singular or plural names. i.e.
    - `tools`, `utils` or `tool`, `util` but  not `tools`, `util` combination.
* When designing OOP styled files, go for `abstract.py`, `base.py` or `parent.py` like files/folders for abstract classes.
