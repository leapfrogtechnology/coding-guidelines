---
id: packages
title: Packages
sidebar_label: Packages
---

#### The following convention should be followed for package naming:

The prefix of a unique package name is always written in **all-lowercase ASCII letters** and should be one of the top-level domain names, currently **com**, **org**,**edu**, **gov**, **mil**, **net**, or one of the English two-letter codes identifying countries as specified in ISO Standard 3166, 1981.

    - Packages are all lower case to avoid conflict with the names of classes or interfaces.
    - Special characters are not allowed while naming packages, only alphanumeric.
    - Avoid reserve keywords

Subsequent components of the package name vary according to an organization's own internal naming conventions. Such conventions might specify on technical aspect or a feature aspect e.g employee, leave, department, project etc : 
    
   #### packaging by feature

    - com.projectname.employee
    - com.projectname.leave
    - com.projectname.department
    - com.projectname.project
    - com.projectname.utils
    - com.projectname.common

   #### packaging by patterns

    - com.projectname.controller
    - com.projectname.service
    - com.projectname.models
    - com.projectname.factories
    - com.projectname.utils
    - com.projectname.repository
  
In some cases, the internet domain name may not be a valid package name. 
This can occur if the domain name contains a hyphen or other special character, 
if the package name begins with a digit or other character that is illegal to 
use as the beginning of a Java name, or if the package name contains a reserved Java keyword, such as "int". 
In this event, the suggested convention is to add an underscore. For example:

|  Domain Name                 |  Package Name Prefix |
|---                           |                    ---|
|hyphenated-name.example.org   | org.example.hyphenated_name  |
|example.int                   |int_.example |
| 123name.example.com          |com.example._123name   |

