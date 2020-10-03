---
id: many-to-many-relationship
title: Many to Many Relationship
sidebar_label: Many to Many Relationship
---

### Many To Many Relationship

An M:N relationship is an example of a relationship between two entities where they both might have many relationships between each other.
An example might be a `Book` that was written by many `Authors`. At the same time an `Author` might have written many `Books`.
This leads to an N:M relationship between authors of books. Let’s look at how this can be modeled.

### Two Way Embedding

Embedding Book foreign keys under Author document.

```json
{
  _id: 1,
  name: "Peter Standford",
  books: [1, 2]
}
{
  _id: 2,
  name: "Georg Peterson",
  books: [2]
}
```

Similarly, embedding Author foreign keys under Book document.

```json
{
  _id: 1,
  title: "A tale of two people",
  categories: ["drama"],
  authors: [1, 2]
}
{
  _id: 2,
  title: "A tale of two space ships",
  categories: ["scifi"],
  authors: [1]
}
```

:::note
**Uneven n:m relationships**

Let’s take the category drama that might have thousands of books in it and with many new books consistently being added and removed. This makes it impracticable to embed all the books in a category document. Each book, however, can easily have categories embedded within it, as the rate of change of categories for a specific book might be very low.

In this case we should consider One way embedding as a strategy.
:::

### One Way Embedding

The One Way Embedding strategy chooses to optimize the read performance of a N:M relationship by embedding the references in one side of the relationship.
An example might be where several books belong to a few categories but a couple categories have many books.

Let’s look at an example, pulling the categories out into a separate document.

**Category document**

```json
{
  _id: 1,
  name: "drama"
}
```

**Book document with foreign keys to categories**

```json
{
  _id: 1,
  title: "A tale of two people",
  categories: [1],
  authors: [1, 2]
}
```

:::info
**Establish Relationship Balance**

Establish the maximum size of N and the size of M.
For example if N is a maximum of 3 categories for a book and M is a maximum of 500000 books in a category you should pick **One Way Embedding**.
If N is a maximum of 3 and M is a maximum of 5 then Two Way Embedding might work well.
:::
