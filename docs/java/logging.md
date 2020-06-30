---
id: logging
title: Logging
sidebar_label: Logging
---

Logging runtime information in your Java application is critically useful for understanding the behavior of any app, especially in cases when you encounter unexpected scenarios, errors or just need to track certain application events.

In a real-world production environment, you usually don’t have the luxury of debugging. And so, logging files can be the only thing you have to go off of when attempting to diagnose an issue that’s not easy to reproduce.

### Logging Conventions

* For consistency, declare your logger as the first field (top of code) in your class and declare it as follows:
    - private static final Logger logger = Logger.getLogger(MyClassName.class.getName());
The variable name should be "logger". The term "logger" makes for cleaner code while not reducing any developer's ability to understand the code.

* Never log private or sensitive information such as **user credentials** or **financial data**. The data which should remain private must not be logged.
* Never log too much information. This can happen in an attempt to capture all potentially relevant data. Too many log messages can also lead to difficulty in reading a log file and identifying the relevant information when a problem does occur. Always use cross-cutting concerns, an _Aspect_, to log the entry and exit of a method.
* Sufficient information must be provided in the logged message.
  An example of a log message lacking specificity:
      - Error! Operation Failed
  Always  add more specific and identifiable message:
      - Error! File upload profile_picture.jpg failed for unitId: 2
* Add context in the log message by including the **timestamp**, **log level**, **thread name**, **fully qualified class name** and the **method name** of the event. This information can be hardwired in the configuration for the logging-framework used.
* Use appropriate **LOG Levels**
  * **FATAL**
    FATAL should be reserved for errors that cause the application to crash or fail to start (ex: JVM out of memory)
  * **ERROR**
    ERROR should contain technical issues that need to be resolved for proper functioning of the system (ex: couldn’t connect to database)
  * **WARN**
    WARN is best used for temporary problems or unexpected behavior that does not significantly hamper the functioning of the application (ex:  failed user login)
  * **INFO**
    Use INFO to report results to Administrators and Users. INFO should contain messages that describe what is happening in the application (ex: user registered, order placed)
  * **DEBUG**
    Use DEBUG to report results to yourself and other developers. DEBUG is intended for messages that could be useful in debugging an issue
   **TRACE**
    Use TRACE only for tracing the execution flow. In general, trace-level logging should be used only for tracing the flow of execution through a program and for flagging particular positions in a program.

### Logging Libraries

* <a href="https://logging.apache.org/log4j/2.x/" target="_blank">Apache Log4j2 (recommended)</a>
  
* <a href="http://logback.qos.ch/manual/configuration.html" target="_blank">Logback</a>