---
id: document-db-naming-convention
title: Document DB Naming Convention
sidebar_label: Document DB Naming Convention
---

#### The following convention should be followed for naming Document Based DB:

## Database name
- Use `lowerCamelCase` for naming the database and should always be **singular form**. 
It is recommended to add **`Db`** suffix at the end.
Usually represents the application name as a whole.
    Examples **imageDb**, **employeeManagementDb** etc.

## Collections
- Use `lowerCamelCase` for naming the collections and should always be **plural form**. 
   Examples, **events**, **userProfiles**, **payments** etc.
- Do not use special characters or numbers for collections name.

## Field names
- Use `lowerCamelCase` for naming the field name and should be **singular form**.
Examples **accountName**, **firstName**, **address** etc.
In case, the field represents an array or collection of element, the field name should be **plural form**
e.g. **accounts**, **phoneNumbers** etc.

Usually, Document based DB object representations are similar to JavaScript objects, so utilise JS naming conventions for various cases.

