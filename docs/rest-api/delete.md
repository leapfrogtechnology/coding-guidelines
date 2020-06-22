---
id: delete
title: Delete Method
sidebar_label: Delete
---

As the name applies, **DELETE** APIs are used to delete resources (identified by the Request-URI).

A successful response of DELETE requests SHOULD be HTTP response code 200 (OK) if the response includes an entity describing the status, 202 (Accepted) if the action has been queued, or 204 (No Content) if the action has been performed but the response does not include an entity.

DELETE operations are idempotent. If you DELETE a resource, it’s removed from the collection of resources. Repeatedly calling DELETE API on that resource will not change the outcome – however, calling DELETE on a resource a second time will return a 404 (NOT FOUND) since it was already removed. Some may argue that it makes the DELETE method non-idempotent. It’s a matter of discussion and personal opinion.

If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale. Responses to this method are not cacheable.

> * **/employees/{employee-id}**
> * **/departments/{department-id}**

|  Response code            |  Result/Reason |
|---------------------------|------------------------------|
|200 OK                     | Sucessfully deleted the Enity.|
|401 (Unauthorized)         | Invalid Credentials/ Invalid Authentication |
|403 (Forbidden)            | Invalid Authorization/ Insufficient rights/ Incorrect Role |  
|405 (Method Not allowed)   | If API supports methods other than PUT request |
|500 (Internal server error)| Server encountered an unexpected condition that prevented it from fulfilling the request.|
