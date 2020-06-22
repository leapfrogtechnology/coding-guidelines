---
id: naming-convention
title: Naming Convention
sidebar_label: Naming Convention
---

In REST(**REpresentational State Transfer**), primary data **representation** is called **Resource**. Having a strong and consistent REST resource naming strategy – will definitely prove one of the best design decisions in the long term.

* Use **noun** and **hyphenated-lower-case** for CRUD operations to an entity/resource/document. The **GET/POST/PUT/DELETE/PATCH** requests represents the corresponding CRUD operation for the following resources like employees, reports, leaves.
  
> * **/employees**
> * **/employees/{employee-id}/leaves**
> * **/employees/{employee-id}/employee-reports**

* For cases of executable functions besides a basic CRUD operations, use **verb** and **hyphenated-lower-case**.

> * **/customer/{customer-id}/check-validity**
> * **/customer/{customer-id}/cart/checkout**
