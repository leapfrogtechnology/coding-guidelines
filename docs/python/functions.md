---
id: functions
title: Functions and Methods
sidebar_label: Functions
---

#### The following convention should be followed for `def` naming:

* Avoid inbuilt names.
* `snake_case` or descriptive single word in **lowercase** should be used.
* function names should explain the functionality.
* for bound methods in class `self` should be used for first argument.
* for class methods in class `cls` should be used for first argument.
* `decorators` should be named in function convention.


```
def get_db_connection(username, db_name):
    return connection
    
#method

def get_db_connection(self, username, db_name):
    return connection
    

# classmethod
@classmethod
def multiple_param_initializer(cls, cls_param):
    return cls(cls_param)
    
```
