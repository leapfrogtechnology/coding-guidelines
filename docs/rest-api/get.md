---
id: get
title: Get Method
sidebar_label: Get
---

Use **GET requests** to retrieve resource representation/information only – and not to modify it in any way. As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should be **idempotent**, which means that making multiple identical requests must produce the same result every time until another API (POST/PUT/PATCH/DELETE) has changed the state of the resource on the server.

> * **/employees**
> * **/employees/{employee-id}/leaves**
> * **/employees/{employee-id}/employee-reports**

|  Response code            |  Result/Reason |
|---------------------------|------------------------------|
|200 OK                     | Sucessfully Fetched the Enity. <br/> Must include a response body. |
|404 (Not found)            | If Entity not found for given ID or is invalid ID|
|405 (Method Not allowed)   | If API supports methods other than GET request |
|401 (Unauthorized)         | Invalid Credentials/ Invalid Authentication |
|403 (Forbidden)            | Invalid Authorization/ Insufficient rights/ Incorrect Role |
|410 (Gone)                 | Expired link/Server no longer serve this request.|
|500 (Internal server error)| Server encountered an unexpected condition that prevented it from fulfilling the request. |