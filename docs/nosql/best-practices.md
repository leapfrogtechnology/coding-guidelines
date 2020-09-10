---
id: document-db-best-practices
title: Document DB Best Practices
sidebar_label: Document DB Best Practices
---

#### Document based DB best practices

##Defining a schema
It is generally good practice to use a schema to validate the entity or contents of a document, although document DB is a schema-less database, which allows maximum flexibility in data structuring. 
This will reduce writing defensive code and confirm the structure of your data in the database.
There are various libraries that can validate json object against the predefined schema like
[simpl-schema](https://www.npmjs.com/package/simpl-schema), [ajv](https://ajv.js.org/). 

For some Databases like MongoDb, there are rich ORM libraries like [mongoose](https://mongoosejs.com/docs/) that support schema validation out of the box.

##Structuring the document
The key decision in designing the data models for document DB depends upon the relationship between data, whether data should be embedded with in a document or
create separate collection.

### One to one relationship
- When the relationship between two entities is one to one, then we can do for embedded document or keeping the child document inside the parent document.
    
    Let's consider an example between `employee` and `address`. The `address` belongs to `employee` and is frequently retrieved along with the employee information.
    ```
        {
            id: "1",
            name: "John Doe",
            address: {
                street: "123 Fake Street",
                city: "Faketon",
                state: "MA",
                zip: "12345"
            }
        }  
    ```   
- In case the embedded document has a large contents, good practice is to only retrieve the subset of a document,only the required fields, commonly called as [subset pattern](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/#subset-pattern).

### One to many relationship

#### Embedded document pattern
- Embedding connected data in a single document can reduce the number of read operations required to obtain data. 
    In general, you should structure your schema so your application receives all of its required information in a single read operation.
    If the number of embedded document(child documents) are limited to very less numbers then this can be better options.
    For example, `User To Accounts`, `User To Addresses`, `User To Events`, can be modelled to embedded document pattern in one to many relationship.
    
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
  
#### Subset Pattern
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
   
#### Document references

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
