---
id: classes
title: Classes
sidebar_label: Classes
---

#### The following convention should be followed for `class` naming:

* Avoid inbuilt names.
* Classes names should always be `PascalCase`. i.e. `MyClass`
* **Abstract Classes and Mixins**
  * Use [abstract containers](https://docs.python.org/3/library/collections.abc.html#module-collections.abc) if need to override datatypes.
    * If you **must build datatypes** based on inbuilt class use PascalCase. i.e. `MyDict(dict):`. Although this is not recommended and you should use `collections`.
  * Use [`abc`](https://docs.python.org/3/library/abc.html) if you need pure OOP style abstract classes. Use `NotImplementedError` exceptions with overrides.
  * Mixin should be named with `Mixin` suffix such as `class LoginRequiredMixin` which can be used in multiple inheritance.
* Describe the class responsibility in name clearly when possible.
* Custom Exceptions should always be named ending with `Error` i.e. `MyCustomError`

##### Example

```python
class HelloWorld:
    pass

class HelloWorldError(Exception):
    pass
```
