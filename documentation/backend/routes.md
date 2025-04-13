# Routes reference
Product API Documentation

## 1. Create Product

- *URL*: /product

- *Method*: POST

- *Description*: Creates a new product with the provided details.


#### Request Body
```json
{
  "name": "string (required)",
  "description": "string (required)",
  "images": ["string", "string"],
  "price": number (required),
  "tags": ["string"],
  "categoryId": "UUID (required)",
  "discount": number (optional, 0-100)
}

```


#### Validation Rules

name, description, and price must not be empty.

discount must be between 0 and 100.

If a discount is provided, it is applied as a percentage to reduce the final price.


#### Responses

- *201 Created*

"product created"

400 Bad Request
```json
"one of the inputs is empty"
```
```json

"your discount is way too low or way too high only from 0 to 100"

```


- *500 Internal Server Error*

```json
{
  "msg": "error occured while creating ptoduct"
}

```

---

## 2. Get All Products

- *URL*: /products

- *Method*: GET

- *Description"*: Returns a list of all products.


#### Responses

- *200 OK*
```json 

[
  {
    "id": "UUID",
    "name": "string",
    "description": "string",
    "images": ["string"],
    "price": number,
    "tags": ["string"],
    "categoryId": "UUID"
  },
  ...
]
  ```

- *200 OK (Empty List)*
```json
{
  "msg": "no product found"
}
```

- *500 Internal Server Error*
```json
"something wrong"
```



---

## 3. Get Product by ID

- *URL*: /product/:id

- *Method*: GET

- *Description*: Retrieves a specific product by its ID.


#### URL Parameters

- *id* — The UUID of the product to retrieve.


#### Responses

- *200 OK*
```json
{
  "id": "UUID",
  "name": "string",
  "description": "string",
  "images": ["string"],
  "price": number,
  "tags": ["string"],
  "categoryId": "UUID"
}

```


- *400 Bad Request*
```json
{
  "msg": "not found"
}

```

- *500 Internal Server Error*
```json

{
  "msg": "something is wrong"
}

```



