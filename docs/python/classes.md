---
id: classes
title: Classes
sidebar_label: Classes
---

#### The following convention should be followed for `class` naming:

* Avoid inbuilt names.
* Classes names should always be `PascalCase`. i.e. `MyClass` 
* Use [abstract containers](https://docs.python.org/3/library/collections.abc.html#module-collections.abc) if need to override datatypes.
    + If you must build datatypes based on inbuilt class use PascalCase. i.e. `MyDict(dict):`.
* Describe the class responsibility in name.
* Custom Exceptions should always be named ending with `Error` i.e. `MyCustomError`

##### Example

```
class HelloWorld:
    pass
    
class HelloWorldError(Exception):
    pass
```
