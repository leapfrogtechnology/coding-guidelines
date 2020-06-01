---
id: interfaces
title: Interfaces
sidebar_label: Interfaces
---

#### The following convention should be followed for interface naming:

* Interface names should be capitalized like class names.
* Generally, should be **adjectives** or **nouns**
  - *LeaveService*
  - *Approvable* 

* Interface represents type or contract on what the public methods and properties have to support. While naming interface, make sure its implementating classes demonstrate a subset behavior.
  e.g
    - **HealthCheckService** interface can have implementing classes like **DBHealthCheckService** , **StorageHealthCheckService**, **NotificationHealthCheckService**
    - Try not to includes Prefix like **I** or suffix like **impl**