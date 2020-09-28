---
id: one-to-many-relationship
title: One to Many Relationship
sidebar_label: One to Many Relationship
---

### One to many relationship (1:N)

The 1:N relationship describes a relationship where one side can have more than one relationship 
while the reverse relationship can only be single sided. 
An example is a `Post` where a blog might have many `Comments` but a `Comment` is only related to a single `Post`.
    


### Embedded document pattern

- Embedding connected data in a single document can reduce the number of read operations required to obtain data. 
    In general, you should structure your schema so your application receives all of its required information in a single read operation.
    If the number of embedded document(s)(child documents) are limited to fewer numbers then this can be better options.
    For example, `User To Accounts`, `User To Addresses`, `Post To Comments`, can be modelled to embedded document pattern in one to many relationship.
    
    ```
        {
            "id": "1",
            "name": "John Doe",
            "accounts": [
                {
                    "bank": "123 fake bank",
                    "accountNumber": "1231308239",
                    "accountType": "saving",
                    "address":"123 fake street",
                    "createdDate":"2020-06-06",
                    "valid" :true,
                    "balance": "100.00",
                },
                {
                    "bank": "abc fake bank",
                    "accountNumber": "1231308239",
                    "accountType": "saving",
                    "address":"123 fake street",
                    "createdDate":"2020-07-06",
                    "valid" :true,
                    "balance": "100.00",
                }
            ]
        }

    ```
  
 However, there are 3 potential problems associated with this approach that one should be aware off.
 :::caution
    - The embedded documents might grow larger and consequently growing main document size. NoSql DBs have limit on document size for example 16MB in case of Mongodb, 1 MB in case of google fire store.
    - This could result in slow write performance as the embedded documents grows significantly larger in number.
    - The third problem is exposed when one tries to perform pagination on the embedded documents 
 :::
  
### Subset Pattern
-  In case, we don't need whole data of embedded documents, we can store only the required part of the document which is frequently fetched.
  For example, we might only need `bank name` and `account number` while fetching `user details`.
  In this case `Accounts` can be a separate collections with all the account related details and `Users` collection can have subset of `accounts` inside each user details.
   
    ```
        {
            "id": "1",
            "name": "John Doe",
            "accounts": [
                {
                    "bank": "123 fake bank",
                    "accountNumber": "1231308239"
                },
                {
                    "bank": "abc fake bank",
                    "accountNumber": "1231308239"
                }
            ]
        }

    ```
   
### Document references

- This is normalised case of structuring data by adding reference or id of the required document inside other document as a foreign key.
**This is recommended only when the document being referenced is highly changing.**
This will impact read performance.

     ```
        {
            "id": "1",
            "name": "John Doe",
            "accounts": [1234,345334,785124132]
        }

    ```

### Linking

The another approach is to link `Accounts` to the `User` using a more traditional foreign key.

```
    {
        "id": "1",
        "name": "John Doe",
        "address":"fake street 123"
    }

```

```

    {
        "id":"1",
        "userId:"1",
        "bank": "123 fake bank",
        "accountNumber": "1231308239"
    },
    {
        "id":"2",
        "userId:"1",
        "bank": "abc fake bank",
        "accountNumber": "1231308239"
    }
```

An advantage this model has is that additional `Accounts` will not grow the original `User` document, making it less likely that the applications will run in the maximum document size limit. 
It’s also much easier to return paginated documents as the application can slice and dice the documents more easily. 
On the downside if we have 1000 accounts on a user, we would need to retrieve all 1000 documents causing a lot of reads from the database.

### Bucketing
The third approach is a hybrid of the two above. Basically, it tries to balance the rigidity of the embedding strategy with the flexibility of the linking strategy. 
Lets take example of `Post` and `Comments`. We will split the comments into buckets with a maximum of 50 comments in each bucket.
```
{
  _id: 1,
  title: "An awesome blog",
  url: "http://awesomeblog.com",
  text: "This is an awesome blog we have just started"
}

```

```
{
  blog_entry_id: 1,
  page: 1,
  count: 50,
  comments: [{
      name: "Peter Critic",
      created_on: ISODate("2014-01-01T10:01:22Z"),
      comment: "Awesome blog post"
    }, ...]
}
{
  blog_entry_id: 1,
  page: 2,
  count: 1,
   comments: [{
      name: "John Page",
      created_on: ISODate("2014-01-01T11:01:22Z"),
      comment: "Not so awesome blog"
    }]
}

```

The main benefit of using buckets in this case is that we can perform a single read to fetch 50 comments at a time, allowing for efficient pagination.
:::info
**When to use bucketing**

When you have the possibility of splitting up your documents into discrete batches, it makes sense to consider bucketing to speed up document retrieval.

Typical cases where bucketing is appropriate are ones such as bucketing data by hours, days or number of entries on a page (like comments pagination).
:::
