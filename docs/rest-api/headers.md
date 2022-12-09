---
id: headers
title: Headers Best Practices
sidebar_label: Headers
---

#### The following convention should be followed for REST API Headers

* Headers names should be **noun** and should be **Captialised-Case** separated by **(-)**. e.g  **Token-Key**, **Account-ID**, **Tenant-ID** etc

* For cases like Acronym, use acronyms itself. eg. *PID-value*, *PIN*

* Headers can be used for meta information that the API carries for e.g
  * Authentication
  * Authorization
  * Versioning the API
  * Content-Type
  * Caching etc
  * <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" target="_blank">More Examples</a>

* Avoid using headers for business logic
  - Do avoid custom headers and confine with standard ones almost all the time.


* Use headers for parameters that should not appear in the URL
  * for e.g https://api.application.com/users/{id}/fetch?apiKey=abcd123456789 //**BAD Practice**
