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

Example `dvd_rental`.

```sql
--
-- Good
CREATE DATABASE dvd_rental;

--
-- Bad
CREATE DATABASE [dvd rental];
```

### Schema

Schema works as a namespace. Example `raw`, `ops`, `util`.

```sql
CREATE SCHEMA util;
```

### Table

Example `actor`, `staff`, `category`, `film`, `film_category`, `film_actor`, `customer`, `sales`.

```sql
CREATE TABLE dbo.actor (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  created_at TIMESTAMP NOT NULL
);
```

### View

Example `actor_info`, `staff_list`, `film_list`, `customer_list`, `sales_by_category`.

```sql
CREATE VIEW report.staff_list
AS
SELECT
  s.staff_id AS staff_id,
  CONCAT(s.first_name, ' ', s.last_name) AS name,
  a.address AS address,
  a.postal_code AS zip_code,
  a.phone AS phone,
  s.store_id AS store_id
FROM dbo.staff AS s
  JOIN dbo.address AS a
    ON s.address_id = a.address_id;
```

### Procedure

Example `mark_as_expired`, `sync_actor_rating`.

```sql
CREATE OR ALTER PROCEDURE automation.mark_as_expired ()
BEGIN
  -- Statements here
END;
```


### Function

Example `get_capitalized_text`, `calculate_actor_rating`.

```sql
CREATE OR ALTER FUNCTION util.get_capitalized_text (
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

When naming a constraint use the following template as reference:

```
<key_type_abbr>_<table_name>_<column_name_1>_<column_name_2>...<column_name_N>
```

### Primary Key Constraint

```sql
ALTER TABLE dbo.actor
ADD CONSTRAINT pk_actor_id PRIMARY KEY (id);
```

### Foreign Key Constraint

```sql
ALTER TABLE dbo.film
ADD CONSTRAINT fk_film_actor_id FOREIGN KEY (actor_id) REFERENCES actor(id);
```

### Unique Constraint

```sql
ALTER TABLE dbo.user_account
ADD CONSTRAINT uc_user_account_email UNIQUE (email);
```

### Check Constraint

```sql
ALTER TABLE dbo.user
ADD CONSTRAINT chk_user_age CHECK (age >= 18);
```
