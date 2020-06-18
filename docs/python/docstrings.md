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

```python
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


```python
> print(Test.__doc___)
This is a class docstring
>
> print(Test.example_method.__doc__)
This is a method docstring
>
> print(Test.example_method_2.__doc__)
None
```

As you can see from the examples above, docstrings get 
attached to the `__doc__` property of the code itself whereas, 
the comments do not.


### Usage of docstrings

From the console, you can use docstrings to an overview of 
code as follows:

```python
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
information about python code. 

** They are also used by your IDE to give you information while developing.**

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

The official documentation standard for Python is ReStructed Text docstrings ([PEP 287](https://www.python.org/dev/peps/pep-0287/)). 
However, Google docstrings have been widely accepted by the community as such we recommend it as we find it more readable and pythonic.
If you're using using Numpy related libraries, you should be using Numpy Docstrings

- [Google docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings) (**Recommended**)
- [reStructured Text Docstrings](http://docutils.sourceforge.net/rst.html) (Seen in many inbuilt python libraries.)
- [Numpy Docstrings](https://numpydoc.readthedocs.io/en/latest/format.html) (**Recommended for AI projects**)


### Where to add docstrings

The developers should add docstrings in the following locations

- At the start of every Python file
- At the beginning of every class
- After each function declaration
- At the beginning of the `__init__.py` file for Module/Package documentation
- In their tests to describe what they are testing.

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

### Checking Docstring coverage

- Use [pydocstyle](https://pydocstyle.pycqa.org/en/latest/) for linting your code against docstrings. When using `flake8`, [this](https://gitlab.com/pycqa/flake8-docstrings) plugin can be used.
- [interrogate](https://interrogate.readthedocs.io/en/latest/) (example below) is **recommended** to use for docstring coverage in the code.


```

================== Coverage for /Users/lynn/dev/interrogate/ ====================
------------------------------------ Summary ------------------------------------
| Name                                  |   Total |   Miss |   Cover |   Cover% |
|---------------------------------------|---------|--------|---------|----------|
| src/interrogate/__init__.py           |       1 |      0 |       1 |     100% |
| src/interrogate/__main__.py           |       1 |      0 |       1 |     100% |
| src/interrogate/badge_gen.py          |       5 |      0 |       5 |     100% |
| src/interrogate/cli.py                |       2 |      0 |       2 |     100% |
| src/interrogate/config.py             |       6 |      0 |       6 |     100% |
| src/interrogate/coverage.py           |      25 |      0 |      25 |     100% |
| src/interrogate/utils.py              |      10 |      0 |      10 |     100% |
| src/interrogate/visit.py              |      15 |      0 |      15 |     100% |
| tests/functional/__init__.py          |       1 |      0 |       1 |     100% |
| tests/functional/test_cli.py          |       7 |      0 |       7 |     100% |
| tests/functional/test_coverage.py     |       6 |      0 |       6 |     100% |
| tests/unit/__init__.py                |       1 |      0 |       1 |     100% |
| tests/unit/test_badge_gen.py          |       6 |      0 |       6 |     100% |
| tests/unit/test_config.py             |       7 |      0 |       7 |     100% |
| tests/unit/test_utils.py              |      13 |      0 |      13 |     100% |
|---------------------------------------|---------|--------|---------|----------|
| TOTAL                                 |     106 |      0 |     106 |   100.0% |
---------------- RESULT: PASSED (minimum: 80.0%, actual: 100.0%) ----------------

```



### Examples

#### Google Docstrings (recommended)

```python

"""Example Google style docstrings.

This module demonstrates documentation as specified by the `Google Python
Style Guide`_. Docstrings may extend over multiple lines. Sections are created
with a section header and a colon followed by a block of indented text.

Example:
    Examples can be given using either the ``Example`` or ``Examples``
    sections. Sections support any reStructuredText formatting, including
    literal blocks::

        $ python example_google.py

Section breaks are created by resuming unindented text. Section breaks
are also implicitly created anytime a new section starts.

Attributes:
    module_level_variable1 (int): Module level variables may be documented in
        either the ``Attributes`` section of the module docstring, or in an
        inline docstring immediately following the variable.

        Either form is acceptable, but the two should not be mixed. Choose
        one convention to document module level variables and be consistent
        with it.

Todo:
    * For module TODOs
    * You have to also use ``sphinx.ext.todo`` extension

.. _Google Python Style Guide:
   https://google.github.io/styleguide/pyguide.html

"""

module_level_variable1 = 12345

module_level_variable2 = 98765
"""int: Module level variable documented inline.

The docstring may span multiple lines. The type may optionally be specified
on the first line, separated by a colon.
"""


def function_with_types_in_docstring(param1, param2):
    """Example function with types documented in the docstring.

    `PEP 484`_ type annotations are supported. If attribute, parameter, and
    return types are annotated according to `PEP 484`_, they do not need to be
    included in the docstring:

    Args:
        param1 (int): The first parameter.
        param2 (str): The second parameter.

    Returns:
        bool: The return value. True for success, False otherwise.

    .. _PEP 484:
        https://www.python.org/dev/peps/pep-0484/

    """


def function_with_pep484_type_annotations(param1: int, param2: str) -> bool:
    """Example function with PEP 484 type annotations.

    Args:
        param1: The first parameter.
        param2: The second parameter.

    Returns:
        The return value. True for success, False otherwise.

    """


def module_level_function(param1, param2=None, *args, **kwargs):
    """This is an example of a module level function.

    Function parameters should be documented in the ``Args`` section. The name
    of each parameter is required. The type and description of each parameter
    is optional, but should be included if not obvious.

    If ``*args`` or ``**kwargs`` are accepted,
    they should be listed as ``*args`` and ``**kwargs``.

    The format for a parameter is::

        name (type): description
            The description may span multiple lines. Following
            lines should be indented. The "(type)" is optional.

            Multiple paragraphs are supported in parameter
            descriptions.

    Args:
        param1 (int): The first parameter.
        param2 (:obj:`str`, optional): The second parameter. Defaults to None.
            Second line of description should be indented.
        *args: Variable length argument list.
        **kwargs: Arbitrary keyword arguments.

    Returns:
        bool: True if successful, False otherwise.

        The return type is optional and may be specified at the beginning of
        the ``Returns`` section followed by a colon.

        The ``Returns`` section may span multiple lines and paragraphs.
        Following lines should be indented to match the first line.

        The ``Returns`` section supports any reStructuredText formatting,
        including literal blocks::

            {
                'param1': param1,
                'param2': param2
            }

    Raises:
        AttributeError: The ``Raises`` section is a list of all exceptions
            that are relevant to the interface.
        ValueError: If `param2` is equal to `param1`.

    """
    if param1 == param2:
        raise ValueError('param1 may not be equal to param2')
    return True


def example_generator(n):
    """Generators have a ``Yields`` section instead of a ``Returns`` section.

    Args:
        n (int): The upper limit of the range to generate, from 0 to `n` - 1.

    Yields:
        int: The next number in the range of 0 to `n` - 1.

    Examples:
        Examples should be written in doctest format, and should illustrate how
        to use the function.

        >>> print([i for i in example_generator(4)])
        [0, 1, 2, 3]

    """
    for i in range(n):
        yield i


class ExampleError(Exception):
    """Exceptions are documented in the same way as classes.

    The __init__ method may be documented in either the class level
    docstring, or as a docstring on the __init__ method itself.

    Either form is acceptable, but the two should not be mixed. Choose one
    convention to document the __init__ method and be consistent with it.

    Note:
        Do not include the `self` parameter in the ``Args`` section.

    Args:
        msg (str): Human readable string describing the exception.
        code (:obj:`int`, optional): Error code.

    Attributes:
        msg (str): Human readable string describing the exception.
        code (int): Exception error code.

    """

    def __init__(self, msg, code):
        self.msg = msg
        self.code = code


class ExampleClass:
    """The summary line for a class docstring should fit on one line.

    If the class has public attributes, they may be documented here
    in an ``Attributes`` section and follow the same formatting as a
    function's ``Args`` section. Alternatively, attributes may be documented
    inline with the attribute's declaration (see __init__ method below).

    Properties created with the ``@property`` decorator should be documented
    in the property's getter method.

    Attributes:
        attr1 (str): Description of `attr1`.
        attr2 (:obj:`int`, optional): Description of `attr2`.

    """

    def __init__(self, param1, param2, param3):
        """Example of docstring on the __init__ method.

        The __init__ method may be documented in either the class level
        docstring, or as a docstring on the __init__ method itself.

        Either form is acceptable, but the two should not be mixed. Choose one
        convention to document the __init__ method and be consistent with it.

        Note:
            Do not include the `self` parameter in the ``Args`` section.

        Args:
            param1 (str): Description of `param1`.
            param2 (:obj:`int`, optional): Description of `param2`. Multiple
                lines are supported.
            param3 (list(str)): Description of `param3`.

        """
        self.attr1 = param1
        self.attr2 = param2
        self.attr3 = param3  #: Doc comment *inline* with attribute

        #: list(str): Doc comment *before* attribute, with type specified
        self.attr4 = ['attr4']

        self.attr5 = None
        """str: Docstring *after* attribute, with type specified."""

    @property
    def readonly_property(self):
        """str: Properties should be documented in their getter method."""
        return 'readonly_property'

    @property
    def readwrite_property(self):
        """list(str): Properties with both a getter and setter
        should only be documented in their getter method.

        If the setter method contains notable behavior, it should be
        mentioned here.
        """
        return ['readwrite_property']

    @readwrite_property.setter
    def readwrite_property(self, value):
        value

    def example_method(self, param1, param2):
        """Class methods are similar to regular functions.

        Note:
            Do not include the `self` parameter in the ``Args`` section.

        Args:
            param1: The first parameter.
            param2: The second parameter.

        Returns:
            True if successful, False otherwise.

        """
        return True

    def __special__(self):
        """By default special members with docstrings are not included.

        Special members are any methods or attributes that start with and
        end with a double underscore. Any special member with a docstring
        will be included in the output, if
        ``napoleon_include_special_with_doc`` is set to True.

        This behavior can be enabled by changing the following setting in
        Sphinx's conf.py::

            napoleon_include_special_with_doc = True

        """
        pass

    def __special_without_docstring__(self):
        pass

    def _private(self):
        """By default private members are not included.

        Private members are any methods or attributes that start with an
        underscore and are *not* special. By default they are not included
        in the output.

        This behavior can be changed such that private members *are* included
        by changing the following setting in Sphinx's conf.py::

            napoleon_include_private_with_doc = True

        """
        pass

    def _private_without_docstring(self):
        pass
        
```

#### ReStructured Text Doc strings

You can see this kind of docstring especially in python libraries. 
Please use **Google** style as they are more readable.

```python
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

"""The method below prints a given string twice. This is for type annotation.

The print method has been called twice for 
implementing this method
 
:param str param1: String that is to be printed
:return: Length of the input string
:rtype: int
"""
def print_twice(param1: str) -> int:
    print(param1)
    print(param1)
    
    return len(param1)
```

## Doctests
:::caution
While this should not be used for all checks and [testing](testing.md) should be followed. They can be used for simple parameter checking. i.e. some default case like module level doctest in example below. 

They can be used with [pytest](https://docs.pytest.org/en/latest/doctest.html) as well.
:::

Python provides tests through docstrings which can be leveraged by [doctests](https://docs.python.org/3/library/doctest.html).

Example
```python
"""
This is the "example" module.

The example module supplies one function, factorial().  For example,

>>> factorial(5)
120
"""

def factorial(n):
    """Return the factorial of n, an exact integer >= 0.

    >>> [factorial(n) for n in range(6)]
    [1, 1, 2, 6, 24, 120]
    >>> factorial(30)
    265252859812191058636308480000000
    >>> factorial(-1)
    Traceback (most recent call last):
        ...
    ValueError: n must be >= 0

    Factorials of floats are OK, but the float must be an exact integer:
    >>> factorial(30.1)
    Traceback (most recent call last):
        ...
    ValueError: n must be exact integer
    >>> factorial(30.0)
    265252859812191058636308480000000

    It must also not be ridiculously large:
    >>> factorial(1e100)
    Traceback (most recent call last):
        ...
    OverflowError: n too large
    """

    import math
    if not n >= 0:
        raise ValueError("n must be >= 0")
    if math.floor(n) != n:
        raise ValueError("n must be exact integer")
    if n+1 == n:  # catch a value like 1e300
        raise OverflowError("n too large")
    result = 1
    factor = 2
    while factor <= n:
        result *= factor
        factor += 1
    return result


if __name__ == "__main__":
    import doctest
    doctest.testmod()
```
This can be tested with:
```
$python example.py -v
```

### References

Thanks to the following


- [Pycharm Documentation on Docstrings](https://www.jetbrains.com/help/pycharm/using-docstrings-to-specify-types.html)
- [Documenting Python Code by RealPython](https://realpython.com/documenting-python-code/#documenting-your-python-projects)
- [PEP-256 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/#specification)
- [PEP-8 Comments Section](https://www.python.org/dev/peps/pep-0008/#comments)
- [Documentation - Python Guide](https://docs.python-guide.org/writing/documentation/)
- [Documenting in Python - DevGuide](https://devguide.python.org/documenting/)
- [daouzli - stackoverflow](https://stackoverflow.com/questions/3898572/what-is-the-standard-python-docstring-format)
- [interrogate](https://interrogate.readthedocs.io/en/latest/)
