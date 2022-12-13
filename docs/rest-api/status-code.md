---
id: status-code
title: Status Code Usage
sidebar_label: Status Code
---

### Status Code are integral part of HTTP as well as REST API and should be used to differentiate different responses. These should be used by clients according to explanation.



Most of the explanation on status code is provided in link below:

[Status Code Check](https://httpstatus.com/)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

In many cases REST based frameworks tend to handle status codes.

Some status code to be considered are:

* `200` for generic successful response.
* `201` for creation of resources. Usually with `POST` request.
* `204` for successful request processing but no response content required.
    - Usually with `DELETE` and `PATCH` `PUT` request. `HEAD` can be another method where this can be used.


* `400` generic client issues.
* `401` usually authentication and authorization issues.
* `403` usually permission issues. We should differentiate our response between `401` and `403`
    - `401` there is no authorization
    - `403` there is authentication but no permission.
* `404` the resource that client wanted is Not Found.
* `405` the HTTP request method is not allowed.