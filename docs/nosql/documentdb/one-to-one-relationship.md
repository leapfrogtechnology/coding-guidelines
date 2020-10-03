---
id: one-to-one-relationship
title: Document DB Best Practices
sidebar_label: One to One Relationship
---

### Defining a schema

It is generally good practice to use a schema to validate the entity or contents of a document, although document DB is a schema-less database, which allows maximum flexibility in structuring data.
This will reduce writing defensive code and confirm the structure of your data in the database.
There are various libraries that can validate json object against the predefined schema like
[simpl-schema](https://www.npmjs.com/package/simpl-schema), [ajv](https://ajv.js.org/).

For some Databases like MongoDb, there are rich ORM libraries like [mongoose](https://mongoosejs.com/docs/) that support schema validation out of the box.

### Structuring the document

The key decision in designing the data models for document DB depends upon the relationship between data, whether data should be embedded with in a document or
create separate collection.

### One to one relationship (1:1)

- When the relationship between two entities is one to one, then we can do for embedded document (keeping the child document inside the parent document) or Linking document
to main document via unique identifier.

### Embedded pattern

Let's consider an example between `employee` and `address`. The `address` belongs to `employee` and is frequently retrieved along with the employee information.

```json
{
  "id":"1",
  "name":"John Doe",
  "address": {
    "street":"123 Fake Street",
    "city":"Faketon",
    "state":"MA",
    "zip":"12345"
  }
}
```

- In case the embedded document has a large contents, good practice is to only retrieve the subset of a document,only the required fields, commonly called as [subset pattern](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/#subset-pattern).

### Linking

The second approach is to link two documents using a foreign key.

**User document**

```json
{
  id: "1",
  name: "John Doe",
  contact : 123446
}
```

**Address document**

```json
{
  id: "1",
  userId : "1",
  street: "123 Fake Street",
  city: "Faketon",
  state: "MA",
  zip: "12345"
}
```

This is similar to how traditional relational databases would store the data.
It is important to note that most of the document db no sql does not enforce any foreign key constraints so the relation only exists as part of the application level schema.

:::note
In the one to one relationship, Embedding is the preferred way to model the relationship as it’s more efficient to retrieve the document.
:::
