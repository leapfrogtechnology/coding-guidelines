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

* Use forward slash (/) to indicate hierarchical relationships
  
> **/customers/{customer-id}/accounts/{account-id}/balance**
> **/category/{cateogry-id}/products/{product-id}/balance**

* Do not use trailing forward slash (/) in URIs

> * **/employees** //Good practice
> * **/employees/{employee-id}/leaves/** //Bad practice

* Use hyphens (-) to improve the readability of URIs
  
> * **/employees/{employee-id}/employee-reports** //Readable
> * **/customer/{customer-id}/check-validity** //Readable
>
> * **/employees/{employee-id}/employeeReports** //Less Readable
> * **/customer/{customer-id}/checkValidity** //Less Readable

* Do not use file extentions and underscores

> * **/employees/{employee-id}/employee-reports.pdf** /*Bad Practice*/
> * **/employees/{employee-id}/employee_reports** /*Bad Practice*/

* Never use CRUD function names in URIs
  
URIs should not be used to indicate that a CRUD function is performed. URIs should be used to uniquely identify resources and not any action upon them. HTTP request methods should be used to indicate which CRUD function is performed.

> * GET Request  **/employees** // Get all employees
> * POST Request  **/employees** // Create new employees
> * GET Request  **/employees/{employee-id}** // Get one employee with given id
> * PUT Request  **/employees/{employee-id}** // Update one employee with given id
> * DELETE Request  **/employees/{employee-id}** // Delete one employee with given id