---
id: exceptions-and-logging
title: Exceptions Handling and Logging
---

## Introduction

As developers, we know that writing error-free code is nearly impossible. Errors are inevitable, but it's how we handle them that defines the stability and robustness of our applications. This document dives deep into exception handling, best practices, and defensive programming strategies that ensure code resilience.
**Defensive programming** isn't just about catching errors; it's an art of anticipating potential failures and ensuring your software behaves predictably in the face of problems. Effective error handling and meaningful logging are essential components of this mindset.

## Exceptions Handling vs Error Handling

**Errors** represent serious problems that prevent the program from completing its task. In contrast, **exceptions** are conditions that interrupt the normal flow of the program but can often be handled. Both are types of runtime errors, which means they occur during the program's execution.

In simple terms:
- An **error** is a critical issue that should generally not be caught or handled, like a syntax or memory overflow error.
- An **exception** is a manageable condition that can be handled by the program, such as a `ZeroDivisionError` in Python or a file not being found in JavaScript.

```python
try:
  print(1/0)
except ZeroDivisionError:
  print("You cannot divide a value with zero")
except:
  print("An unexpected error occurred")
```

But in Javascript, they refer to the same thing. Javascript only has **Error**. When using try catch or try catch finally blocks, you will deal with both JavaScript Exception and Error. Code-wise the difference has no impact.

By convention, there is a difference between **Error** and **Exception**.
An Error indicates a clear violation. A **TypeError** or **ReferenceError** means you are not following the language specs. On the other hand, an **Exception** is triggered in situations like trying to access an XMLHttpRequest response before it's fully loaded.
Think of an error as the code shouting "Whoa, you broke the law" whereas an exception is like “Almost there!” with a pat on the shoulder.

To summarize, Errors are mostly thrown by Javascript Engine whereas Exceptions are mostly thrown by developers.

### Try, Catch and Finally
Use appropriately, overusing it can make code harder to read and maintain. Focus on catching errors where you can handle them effectively.

Ever confused whether to put code inside finally or outside `try…catch`? For scenarios like resetting a spinner you can put your reset code inside finally or outside try-catch block, it will act the same. But for cases where there are return or throw or break statements in try or catch block. Without `finally`, code placed outside `try…catch` might not get executed if an error occurs before it or if there is an early return in try block.
It allows you to avoid having cleanup code accidentally bypassed by a return, continue, or break. Putting cleanup code in a finally block is always a good practice, even when no exceptions are anticipated.


```javascript
function readFileContent(filePath) {
  let fileHandle;
  try {
    fileHandle = await fs.open(filePath, 'r');

    return; // Early exit
  } catch (error) {
    console.log("Caught an error:", error);
  } finally {
    if (fileHandle) {
      await fileHandle.close();
    }
  }
  console.log("This statement outside try..catch will NOT be executed if file.open() succeeds");
}
```



If we have a long-running process, we should close the file after our work, otherwise we’ll eventually run out of File descriptor which could lead to undefined behavior.

## Best Practices for Error Handling

### Understand the Difference Between Expected and Unexpected Errors

**Expected Errors**: Errors that can happen due to external factors (e.g., network errors, user input validation failures, file system issues, etc.). You expect them to occur and can handle them with try-catch.
**Unexpected Errors**: Bugs or logical errors in the program itself (e.g., null references, type errors). These should be fixed by correcting your code rather than catching them with try-catch.

### Practice Defensive Programming

Before even thinking about try-catch, try to prevent errors with proper validation, type-checking, and null checks. Use libraries like `joi` for input validations. The less you need to rely on try-catch, the better. Validate inputs early and reject invalid data before any complex processing happens.

### Avoid Overusing Try-Catch

While try-catch is important, overusing it can degrade the performance and readability of your code. Here’s when not to use try-catch:

- **Simple Code**: Avoid wrapping code that is unlikely to throw errors (like basic arithmetic or logic operations) and
- **Wrapping big code**: Avoid wrapping big chunks of code unless it’s intentional. Catching a big chunk of code will make it hard to find where the actual error occurred.
- **For Control Flow**: Don’t use try-catch to manage the conditions.
- **Inside Loops**: Don’t wrap try-catch around loops that process many items, as it can introduce performance overhead. Instead, validate or use try-catch inside the loop only for parts that are risky.
- **Log properly**: Have a meaningful log with proper Logging class.

## Create Custom Errors

Always create at least one custom error that inherits Error. Timestamps and trace_id in logs are super important. You can add additional info on the log e.g timestamps, info, env, etc. Keep in mind that message should always be rather general to avoid giving too many details to a potential attacker.

```javascript
class TrackableError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TrackableError';  // Set the error name
    this.level = process.env.LOG_LEVEL || 'info',
    this.timestamp = new Date().toISOString();  // Add the timestamp
  }
  withInfo() {
    return `${this.level} Error Name: ${this.name} [Timestamp: ${this.timestamp}] [Message: ${this.message}]`;
  }
}

try {
  throw new TrackableError('Something went wrong!');
} catch (error) {
  console.error(error.toString()); // This outputs basic info
  console.error(error.withInfo()); // This outputs on details
}
```
Always have a habit of testing your logs as well. While writing unit tests, have few assertions about type of Errors to expect from the provided input. Logs are the only medium your application speaks to you while debugging. Log errors for future reference and debugging purposes. Make sure to log enough information to help you understand the context in which the error occurred. Don't forget to handle errors in asynchronous code, such as Promises and async/await functions [Read more](https://accreditly.io/articles/a-comprehensive-guide-to-exception-handling-in-javascript). Failing to handle errors in these scenarios can lead to unhandled promise rejections and unexpected application behavior.

### Why centralized error handling?

- **Consistency**: Centralizing error handling ensures a consistent approach throughout your application. All errors can be handled uniformly, promoting a standardized user experience.
- **Code Maintainability**: A centralized error handling strategy reduces code duplication. Rather than scattering error-handling logic across multiple route handlers, it can be managed in a single location, making your codebase more maintainable.
- **Global Error Handling**: Centralization enables the implementation of global error handling middleware. This middleware can catch unhandled errors and respond appropriately, preventing your application from crashing and providing a fallback response to the user.
- **Logging and Monitoring**: Centralized error handling facilitates efficient logging and monitoring. All errors can be logged to a centralized service, making it easier to track and analyze issues in production.
- **Separation of Concerns**: This approach keeps the error management logic separate from business logic, promoting cleaner code structure and focusing on core functionalities within routes and controllers
Read more about [Error handling in ExpressJS](https://expressjs.com/en/guide/error-handling.html)

## Error Logging vs. API Error Responses

You should not send the same error that you plan to log as an API error response. Setup environments and prepare the logs to prepare according to environments like production or non-production.
### Error Logging

- **Audience**: Developers, DevOps, system administrators.
- **Purpose**: To capture detailed information about errors for debugging, auditing, monitoring, and troubleshooting. Logs help developers understand why something went wrong and how to fix it.
- **Content**: Logs often contain technical information like stack traces, error codes, detailed system state (variables, database query results), timestamps, request details, etc.
- **Persistence**: Errors are stored in logs (locally, in cloud systems, or monitoring tools like Sentry, Datadog, LogRocket, etc.).

### API Error Responses

- **Audience**: End users or API clients (frontend applications, other services).
- **Purpose**: To notify the user or client of an error in a user-friendly and secure way. It should provide enough information to understand the problem but not expose internal details.
- **Content**: API responses should contain high-level, non-technical descriptions of what went wrong (e.g., status codes like 400, 500 with brief messages like "Invalid request" or "Internal server error").
- **Security**: API responses must not leak sensitive internal information (stack traces, internal variable names, server details, etc.).

## Using Log Levels

There are various log levels, and while any log type will record information, the key is using the appropriate level for each situation. At a minimum, you should use these three log levels:
- Error
- Info
- Debug

Additionally, you can incorporate other levels such as:
- Warn
- Fatal
- Trace

Think of log levels as categories that can be enabled or disabled depending on the environment. Their retention time may also vary based on the log level. For example, Trace logs are more detailed and take up more disk space, while Debug logs are frequently used and can consume significant I/O resources. Therefore, these levels are often limited to the development environment or kept for only a few days in production.
If you use the Info level where Debug would be more appropriate, you risk cluttering your logs and losing the ability to filter or optimize storage. Proper use of log levels ensures that you can efficiently manage and analyze your logs.
To learn more about Log levels: Read: https://betterstack.com/community/guides/logging/log-levels-explained

## Best Practices for Logging

* **Attacker Mindset**: Think that your logs can get leaked so log appropriately
* **Logging Framework**: Use libraries like winston for robust logging capabilities
* **Timestamp**: Always use timestamp in ISO-8601 format
* **Log Levels**: Use different log levels (info, warn, error) to differentiate the importance of logs such that it’s filterable later.
* **Log Rotation**: Implement log rotation to manage log file sizes and avoid disk space issues.
* **Descriptive log messages**:  Avoid vague messages. Provide enough detail to get context of what went wrong like requestId, userId, etc
* **Stack trace**: Log unexpected errors with stack trace
* **Sensitive Information**: Avoid logging sensitive information like passwords or personal data.
* **Trace ID**: Add trace_id or request_id to help grouping the lifecycle of request to response
* **Structured Logging:** Use JSON format for logs to make it easier to parse and analyze.
* **Monitor Key Metrics**: Track important metrics like response time, CPU usage, memory usage, and error rates in services like Datadog
* **Alerts**: Set up slack alerts for critical issues that require immediate attention. Make alerts for only critical parts else it might get overseen.

## References:

- [NodeJS Logging best practice](https://betterstack.com/community/guides/logging/nodejs-logging-best-practices)
- [Error handling in express-js](https://expressjs.com/en/guide/error-handling.html)
