---
id: security
title: Security Method
sidebar_label: Security
---

## Best Practices to Secure REST APIs

* Always Use HTTPS.If you use HTTP 2, to improve performance – you can even send multiple requests over a single connection, that way you avoid the complete TCP and SSL handshake overhead on later requests.

* Never expose information on URLs. <https://api.app.com/users/{id}/fetch?apiKey=abcd123456789> //Bad practice

* Conside using token based authentication like OAUTH2

* Consider Adding Timestamp in Request

* Log each request and response data

* Validate and sanitize incoming requests against data types, injections
