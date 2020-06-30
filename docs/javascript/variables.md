---
id: variables
title: Variables
sidebar_label: Variables
---

#### The following convention should be followed for variable naming

* Variable names should be **noun** or **adjectives** and should be **camelCase**. e.g age, balance, employeeReport etc
  <!--JavaScript-->
        // good
        var firstName = 'John';

        // bad
        var firstname = 'John';
 
        // bad
        var first_name = 'John';
        
        // bad
        var FIRSTNAME = 'John';
        
        // bad
        var FIRST_NAME = 'John';
  
* **JavaScript variables are case sensitive**. Therefore, JavaScript variables with lowercase and uppercase characters are different
  <!--JavaScript-->
        var name = 'John';
 
        var Name = 'William';
 
        var NAME = 'Tech';
 
        console.log(name);
        // "John"
 
        console.log(Name);
        // "William"
 
        console.log(NAME);
        // "Tech"

* Variable names should be short yet meaningful. The choice of a variable name should be mnemonic, self descriptive and semantical
  designed to indicate its intention.
  
* One-character variable names must be avoided like i, j, k, m etc

* Variables names should be declared as per their types
  * Map/KeyValue pair should be declared as *keyToValue* and *valueByKey*. For e.g **ageByName** or  **nameToAge**.
  * Set can be prefixed as *unique* before variable names. For e.g **uniqueNames**
  * Boolean can be prefixed as **is/are/has** e.g. **isVisible**, **isEligible**, **hasMaximumAmount**

### Constants

 Constants intended to be non-changing variables are UPPER_CASE separated by underscore. e.g **HOURS_IN_DAY**, **PAGINATION_MAX_ROWS**
