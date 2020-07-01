---
id: patch
title: Patch Method
sidebar_label: Patch
---

PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource.

This resembles PUT, but the body contains a set of instructions describing how a resource currently residing on the server should be modified to produce a new version.PATCH is neither safe nor idempotent. However, a PATCH request can be issued in such a way as to be idempotent, which also helps prevent bad outcomes from collisions between two PATCH requests on the same resource in a similar time frame. Collisions from multiple PATCH requests may be more dangerous than PUT collisions because some patch formats need to operate from a known base-point or else they will corrupt the resource. Clients using this kind of patch application should use a conditional request such that the request will fail if the resource has been updated since the client last accessed the resource. 

*PATCH request can usuallly be used to update the status of resource like from `pending` to `accepted`, `active`  to `expired`*

> * **/employees/{employee-id}**
> * **/departments/{department-id}**

### Request Body

* Patch updating a single resource [**/employees/1**]

```yaml
  {
    "email": "johndoe@xyz.com"
  }
 ```

* Creating collection resource [**/employees**]

```yaml
  [
    {
      "id":"1",
      "email": "johndoe@xyz.com"
    },
    {
      "id":"2",
      "address": "123 Mockingbird Lane"
    }
  ]
```

### Response Body

* Patch updating a single resource [**/employees**]

```yaml
  {
    "id":"1",
    "email": "johndoe@xyz.com"
  }
 ```

* Patch updating collection resource [**/employees**]

```yaml
  [
    {
      "id":"1",
      "email": "johndoe@xyz.com"
    },
    {
      "id":"2",
      "address": "123 Mockingbird Lane"
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
