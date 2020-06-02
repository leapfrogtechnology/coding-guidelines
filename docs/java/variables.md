---
id: variables
title: Variables
sidebar_label: Variables
---

#### The following convention should be followed for variable naming

* Variable names should be **noun** or **adjectives** and should be **camelCase**. e.g age, balance, employeeReport etc
  
* Variable names should not start with underscore _ or dollar sign $ characters, even though both are allowed.
  
* Variable names should be short yet meaningful. The choice of a variable name should be mnemonic, self descriptive and semantical
  designed to indicate its intention.
  
* One-character variable names should be avoided like i, j, k, m etc
  
* Variable name should be plural if that is a collections. for e.g **employees**, **leaves** represents a list.

* Variables names should be declared as per their types 
  * Map/KeyValue pair should be declared as *keyToValue* and *valueByKey*. For e.g **ageByName** or  **nameToAge**.
  * Set can be prefixed as *unique* before variable names. For e.g **uniqueNames**

* Instance variable should be camelCase of their class names.
  * employeeService is an instance of EmployeeService.
  * reportDao is an instance of ReportDao.

## Constants

* Constants names holds same conventions as variable except it should be **UPPER_CASE** separated by **(_)** underscore.
  * **AGE_BY_NAME**, **EMPLOYEE_REPORT**