---
id: security
title: Security Method
sidebar_label: Security
---

## Best Practices to Secure REST APIs

### Always Use HTTPS

* By always using SSL, the authentication credentials can be simplified to a randomly generated access token that is delivered in the username field of HTTP Basic Auth. It’s relatively simple to use, and you get a lot of security features for free.
  
* If you use HTTP 2, to improve performance – you can even send multiple requests over a single connection, that way you avoid the complete TCP and SSL handshake overhead on later requests.

### Never expose information on URLs

* Usernames, passwords, session tokens, and API keys should not appear in the URL, as this can be captured in web server logs, which makes them easily exploitable. e.g  
 https://api.app.com/users/{id}/fetch?apiKey=abcd123456789  //Bad practice

### Conside using token based authentication like OAUTH2

### Consider Adding Timestamp in Request

### Log each request and response data

### Validate Incoming request
