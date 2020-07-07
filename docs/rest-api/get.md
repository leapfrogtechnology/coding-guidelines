---
id: get
title: Get Method
sidebar_label: Get
---


### Introduction

Use **GET requests** to retrieve resource representation/information only – and not to modify it in any way. As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should be **idempotent**, which means that making multiple identical requests must produce the same result every time until another API (POST/PUT/PATCH/DELETE) has changed the state of the resource on the server.

* **Avoid using request body in GET request**

* Use `path params` instead of `query params` if its a must value to process a request. This way we can reduce unnucessary validation checks.

* Use `query params` to filter response or get subset or limited resource.

### URL Example

> * **/employees**
> * **/employees/{employee-id}/leaves**
> * **/employees/{employee-id}/employee-reports**
> * **/employees/{employee-id}/leaves?type={leave-type}&order-by={leave-date}**

### Success Response Body

* Expecting a single resource [**/employees/1**]

```yaml
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@xyz.com",
    "address": "123 Mockingbird Lane",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
 ```

* Expecting collection resource [**/employees**]

```yaml
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@xyz.com",
      "address": "123 Mockingbird Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    {
      "id": 2,
      "name": "William",
      "email": "will@xyz.com",
      "address": "123 Mockingbird Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    }
  ]
```

### Error Response Body

```yaml
  {
    "error": "Invalid payoad.",
    "detail": {
      "name": "This field is required."
    }
  }

```

### Response Header

Specify `Content-type` header, and it should be `application/json` while returing json response, `application/xml` while returning xml response and so on.

### Response code and Results

|  Response code            |  Result/Reason |
|---------------------------|------------------------------|
|200 OK                     | Sucessfully Fetched the Enity. <br/> Must include a response body. |
|404 (Not found)            | If Entity not found for given ID or is invalid ID|
|405 (Method Not allowed)   | If API supports methods other than GET request |
|401 (Unauthorized)         | Invalid Credentials/ Invalid Authentication |
|403 (Forbidden)            | Invalid Authorization/ Insufficient rights/ Incorrect Role |
|410 (Gone)                 | Expired link/Server no longer serve this request.|
|500 (Internal server error)| Server encountered an unexpected condition that prevented it from fulfilling the request. |