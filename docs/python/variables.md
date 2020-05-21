---
id: variables
title: Variables
sidebar_label: Variables
---

#### The following convention should be followed for variable naming:

* `snake_case` or descriptive word all in **lowercase** for any type of variables except `CONSTANTS`.
* `ALL_CAPS` for constants. `python` doesnot have the concept of constants so this is just a convention.
* Variable Privacy
    - `__{variable_name}` if you want something to be private. 
    - `_{variable_name}` if you want something to be not publicly used or something that may change later. 
    - `__{variable_name}` are not directly accesible while `_{variable_name}` are. They are just for convention.
* Avoid builtin variable clash. Especially in `globals`. You can attach `_` as suffix to builtin names if you deem the name necessary for your variable.
    - `all` or `id` is very tempting variable names but they are builtin methods in python. Go with `all_` or `id_` for these or better yet choose something else as a name.
* While it is tempting to use `i`, `k`, `v` and `f` especially in contexts and for loops. Please avoid them.
    - use `key`, `value`, `index` instead.
    - use descriptive contexts such as `with open(FILENAME) as open_file: pass` rather that `with open(FILENAME) as f:`
