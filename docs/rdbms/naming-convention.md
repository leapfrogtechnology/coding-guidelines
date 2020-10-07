---
id: rdbms-naming-convention
title: RDBMS Naming Convention
sidebar_label: Naming Convention
---

#### The following convention should be followed for naming RDBMS:

* Use `snake_case` with lowercase while naming.
* Use uppercase for SQL keywords and built-in functions.
* Avoid use of dots, spaces, or dashes in database, schema, table, or column names.

### Database

Example `dvd_rental`
```sql
--
-- Good
CREATE DATABASE dvd_rental;

--
-- Bad
CREATE DATABASE [dvd rental];
```

### Schema

Schema works as a namespace. Example `raw`, `ops`, `util`
```sql
CREATE SCHEMA util;
```

### Table

Example `actor`, `staff`, `category`, `film`, `film_category`, `film_actor`, `customer`, `sales`
```sql
CREATE TABLE <schema>.actor (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  created_at TIMESTAMP NOT NULL
);
```

### Views

Example `actor_info`, `staff_list`, `film_list`, `customer_list`, `sales_by_category`
```sql
CREATE VIEW <schema>.staff_list
AS
SELECT
  s.staff_id AS ID,
  CONCAT(s.first_name, ' ', s.last_name) AS name,
  a.address AS address,
  a.postal_code AS zip_code,
  a.phone AS phone,
  s.store_id AS SID
FROM staff AS s
  JOIN address AS a
    ON s.address_id = a.address_id;
```

### Procedure

Example `mark_as_expired`, `sync_actor_rating`
```sql
CREATE OR ALTER PROCEDURE <schema>.procedure_name ()
BEGIN
  -- Statements here
END;
```


### Function

Example `get_capitalized_text`, `calculate_actor_rating`
```sql
CREATE OR ALTER FUNCTION <schema>.function_name (
  @param_1 VARCHAR(50),
  @param_2 VARCHAR(50)
)
RETURNS VARCHAR(255)
  AS
BEGIN
  DECLARE @result VARCHAR(255);

  --
  -- Statements to set result

  RETURN @result;
END;
```

## Constraints

### Primary Key Constraint

```sql
table_name_pkey
```

### Foreign Key Constraint

```sql
table_name_column_name_foreign
```

### Unique Constraint

```sql
table_name_column_name_unique
```

### Check Constraint

```sql
table_name_column_name_check
```
