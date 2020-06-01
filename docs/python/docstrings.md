---
id: docstrings
title: Convention for docstrings
sidebar_label: Docstrings
---

## Introduction

> Code is more often read than written - Guido Van Rossum

A few lines of description written on top of a function can save
the coder or a future developer hours or time reading the code. 

**Docstrings** are documentation that is written along with the code.
There are different typs of docstrings in Python:

- Class
- Class methods
- Package
- Modules
- Functions
- Script


### Comments are not docstrings

While comments are also written alongside code, docstrings are different
from comments. While comments start with a '#' symbol, docstrings are
also enclosed withing triple double quotes """This is a docstring""".
The placement of docstrings is also crucial. Docstrings placed arbitrarily 
may simply be construed as a comment

To illustrate this try the following in the python console

```python3
class Test: 
   """This is a class docstring 
   """ 
   
   def example_method(): 
       """This is a method docstring 
       """ 
       pass 
       
   def example_method_2(): 
       # This is a comment
       pass
```


```python3
> print(Test.__doc___)
This is a class docstring
>
> print(Test.example_method.__doc__)
This is a method docstring
>
> print(Test.example_method_2.__doc__
None
```

As you can see from the examples above, docstrings get 
attached to the `__doc__` property of the code itself whereas, 
the comments do not


### Usage of docstrings

From the console, you can use docstrings to an overview of 
code as follows

```python3
> help(Test)
Help on class Test in module __main__:

class Test(builtins.object)
 |  This is a class docstring
 |  
 |  Methods defined here:
 |  
 |  example_method()
 |      This is a method docstring
 |  
 |  example_method_2()


```

If a docstring is provided, you can get more readable
information about python code

Furthermore, there are tools that can take this to the
next level by creating a static website of documentation
for your code:

- [Sphinx](http://www.sphinx-doc.org/en/stable/)
- [Epydoc](http://epydoc.sourceforge.net/)
- [Read the docs](https://readthedocs.org/)
- [Doxygen](http://www.stack.nl/~dimitri/doxygen/manual/docblocks.html#pythonblocks)
- [MkDocs](https://www.mkdocs.org/)
- [Pycco](https://pycco-docs.github.io/pycco/)


## Conventions

The following sections describe the conventions that are recommended by Leapfrog

### Python's official standard

The PEPs are considered to be the official standard for Python. The following sections
talk specifically about docstring and we recommend that you read them

- [PEP-256 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/#specification) (**Must Read**)
- [PEP-8 Comments Section](https://www.python.org/dev/peps/pep-0008/#comments)
- [PEP 287 reStructedText Docstring Format](https://www.python.org/dev/peps/pep-0287/)

### Docstring template selection

While you can write anything between the triple quotes(""") to 
write your docstring, it is generally recommended to follow a 
template for consistency and also for libraries to be able to
parse your docstring easily.

The official documentation standard for Python is:

- [reStructured Text Docstrings](http://docutils.sourceforge.net/rst.html) (**Recommended**)

Note that the above was recommended by [PEP 287](https://www.python.org/dev/peps/pep-0287/)

If you're using using Numpy related libraries, it is better
to use 

- [Numpy Docstrings](https://numpydoc.readthedocs.io/en/latest/format.html) (**Recommended for AI projects**)


Other docstring templates are also available but it is highly 
recommended that you follow the ones above:

- [Google docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings)
- [Epytext](http://epydoc.sourceforge.net/epytext.html)


### Where to add docstrings

The developers should add docstrings in the following locations

- At the start of every Python file
- At the beginning of every class
- After each function declaration
- At the beginning of the `__init__.py` file for Module/Package documentation

### What to not miss

Use the documentation template of your choice and try not to miss the following
in the docstrings

- A brief description of the entity that is being documented (**Mandatory**)
- Follow the above by above by examples and implementation details (**Recommended**)
- Add typing information where things can get confusing (**Recommended**). As python is a
dynamically typed language, adding some type definition to the documentation can save
the developers a lot of debugging time
- Autodeploy the documentation site using a static deployment tool 
to check that your docstrings render correctly


## Examples

Here are few examples of docstrings to get you started

```python3
"""The method below prints a given string twice

The print method has been called twice for 
implementing this method
 
:param param1: String that is to be printed
:type param1: str
:return: Length of the input string
:rtype: int
"""
def print_twice(param1):
    print(param1)
    print(param1)
    
    return len(param1)
```

The following shows type definition on the same line. 

```python3
"""The method below prints a given string twice

The print method has been called twice for 
implementing this method
 
:param str param1: String that is to be printed
:return: Length of the input string
:rtype: int
"""
def print_twice(param1):
    print(param1)
    print(param1)
    
    return len(param1)
```

## References

Thanks to the following


- [Pycharm Documentation on Docstrings](https://www.jetbrains.com/help/pycharm/using-docstrings-to-specify-types.html)
- [Documenting Python Code by RealPython](https://realpython.com/documenting-python-code/#documenting-your-python-projects)
- [PEP-256 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/#specification)
- [PEP-8 Comments Section](https://www.python.org/dev/peps/pep-0008/#comments)
- [Documentation - Python Guide](https://docs.python-guide.org/writing/documentation/)
- [Documenting in Python - DevGuide](https://devguide.python.org/documenting/)
- [daouzli - stackoverflow](https://stackoverflow.com/questions/3898572/what-is-the-standard-python-docstring-format)



 
