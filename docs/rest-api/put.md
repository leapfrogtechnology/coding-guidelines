---
id: put
title: Put Method
sidebar_label: PUT
---

Use **PUT** APIs primarily to update existing resource (if the resource does not exist, then API may decide to create a new resource or not). If a new resource has been created by the PUT API, the origin server MUST inform the user agent via the HTTP response code 201 (Created) response and if an existing resource is modified, either the 200 (OK) or 204 (No Content) response codes SHOULD be sent to indicate successful completion of the request.

> * **/employees/{employee-id}**
> * **/departments/{department-id}**

### Request Body

* Updating a single resource [**/employees/1**]

```yaml
  {
    "id":"1",
    "name": "John Doe",
    "email": "johndoe@xyz.com",
    "address": "123 Mockingbird Lane",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
 ```

* Creating collection resource [**/employees**]

```yaml
  [
    {
      "id":"1",
      "name": "John Doe",
      "email": "johndoe@xyz.com",
      "address": "123 Mockingbird Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    {
      "id":"2",
      "name": "William",
      "email": "will@xyz.com",
      "address": "123 Mockingbird Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    }
  ]
```

### Response Body

* Updating a single resource [**/employees**]

```yaml
  {
    "id":"1",
    "name": "John Doe",
    "email": "johndoe@xyz.com",
    "address": "123 Mockingbird Lane",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
 ```

* Updating collection resource [**/employees**]

```yaml
  [
    {
      "id":"1",
      "name": "John Doe",
      "email": "johndoe@xyz.com",
      "address": "123 Mockingbird Lane",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    {
      "id":"2",
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

|  Response code            |  Result/Reason |
|---------------------------|------------------------------|
|200 OK                     | Sucessfully updated the Enity. <br/> Must include a response body. |
|204 (No Content)           | When the REST API declines to send back any status message or representation in the response message’s body. Must not contains the response body|
|401 (Unauthorized)         | Invalid Credentials/ Invalid Authentication |
|403 (Forbidden)            | Invalid Authorization/ Insufficient rights/ Incorrect Role |
|400 (Bad Request)          | Bad request object | validation error |
|404 (Not found)            |  If ID not found or invalid|
|405 (Method Not allowed)   | If API supports methods other than PUT request |
|500 (Internal server error)| Server encountered an unexpected condition that prevented it from fulfilling the request.|
