---
id: versioning
title: Versioning
sidebar_label: Versioning
---

## Four common REST API versioning strategies

### Versioning through URI Path (*recommended*)

> <http://api.app.com/v1/products>
>
> One way to version a REST API is to include the version number in the URI path.This solution often uses URI routing to point to a specific version of the API. Because cache keys (in this situation URIs) are changed by version, clients can easily cache resources. When a new version of the REST API is released, it is perceived as a new entry in the cache.

### Versioning through custom header

> curl -H "API-Version: 1.0" <http://api.app.com/products>
>
> This approach doesn’t clutter the URI with versioning information.

### Versioning through query parameters

> <http://api.app.com/products?version=1>
>
>Another option for versioning a REST API is to include the version number as a query parameter.

### Versioning through content negotiation

> curl -H "Accept: application/vnd.xm.device+json; version=1" <http://api.app.com/products>
>
> The last strategy we are addressing is versioning through content negotiation.
>
> This approach allows us to version a single resource representation instead of versioning the entire API which gives us a more granular control over versioning. It also creates a smaller footprint in the code base as we don’t have to fork the entire application when creating a new version. Another advantage of this approach is that it doesn’t require implementing URI routing rules introduced by versioning through the URI path.
>
> One of the drawbacks of this approach is that it is less accessible than URI-versioned APIs: Requiring HTTP headers with media types makes it more difficult to test and explore the API using a browser.
