---
id: logging
title: Logging
sidebar_label: Logging Convention
---

#### The following convention should be followed for using `logging` in python:

* Inbuilt `logging` module is used in most cases. You can look into [structlog](https://www.structlog.org/en/stable/) for more granular logging.
* `logging` is always a must. Use the following levels as required:
    - **DEBUG**: log parameters and arguments. Information needed when we need to debug or develop. Should be avoided in production.
    - **INFO**: log basic information such as function entry, file being processed et al
    - **WARN**: log user security and other warnings that may require attention or may need to be avoided.
    - **ERROR**: errors in programs.
    - **CRITICAL**: blocking issues or immediate attention issues.
* `logger` is used for naming single logger object. Use `NAME_logger` name for more than one logger when required.
* It is singleton and single threaded by default for given name of the logger. Can be [non-blocking](https://docs.python.org/3/howto/logging-cookbook.html#dealing-with-handlers-that-block) if required.
* See [Logging Cookbook](https://docs.python.org/3/howto/logging-cookbook.html) for reference.
* **ERROR and CRITICAL** levels should be mitigated and informed.
    - Always use `exception` method rather than `error` method of `logger` object to log traceback when catching exceptions.
* Learn more about Exception Handling and Logging in detail [here](/general/exceptions-and-logging.md)
