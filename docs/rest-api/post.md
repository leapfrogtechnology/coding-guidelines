---
id: post
title: Post Method
sidebar_label: Post
---

Use **POST requests** to create new subordinate resources, e.g., a file is subordinate to a directory containing it or a row is subordinate to a database table. Talking strictly in terms of REST, POST methods are used to create a new resource into the collection of resources.Note that POST is **neither safe nor idempotent**, and invoking two identical POST requests will result in two different resources containing the same information (except resource ids).

> * **/employees**
> * **/departments**

|  Response code            |  Result/Reason |
|---------------------------|------------------------------|
|201 (Created)              | Sucessfully Created the Enity. <br/> Must include a response body. |
|202 (Accepted)             | Actions that take a long while to process/ Batch/Queue Oriented Process |
|204 (No Content)           | When the REST API declines to send back any status message or representation in the response message’s body. Must not contains the response body|
|401 (Unauthorized)         | Invalid Credentials/ Invalid Authentication |
|403 (Forbidden)            | Invalid Authorization/ Insufficient rights/ Incorrect Role |
|400 (Bad Request)           | Bad request object | validation error |
|405 (Method Not allowed)   | If API supports methods other than POST request |
|500 (Internal server error)| Server encountered an unexpected condition that prevented it from fulfilling the request.|
