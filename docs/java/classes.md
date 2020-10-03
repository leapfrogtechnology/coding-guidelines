---
id: classes
title: Classes
sidebar_label: Classes
---

#### The following convention should be followed for `class` naming:

* Class names are generally nouns or nouns phrases, in title-case with the first letter of each separate word capitalized or **UpperCamelCase**. e.g.
  - **LeaveController**
  - **EmployeeRepository**
  - **AttendanceRecord**

* Test classes are named starting with the name of the class they are testing, and ending with Test. For example,
  - **LeaveControllerTest**
  - **AttendanceRecordTest**

* Class name should be designed with single responsibility principle, self descriptive and self documenting.

* Classes on various application layers should be suffixed with terms as given below
  - Controller
    - LeaveController
    - ReportController
  - Service
    - EmployeeService
    - LeaveCalculator
    - ReportManager
  - Models
    - Leave
    - Employee
    - Balance
    - Report
  - Utils
    - ExceptionUtils
    - ReportBuilder (*follows builder pattern while generating report*)
    - HTMLParser (*cases which includes acronyms, should be written as it is.*)
  - Repository/DAO
    - EmployeeDao
    - LeaveRepository
