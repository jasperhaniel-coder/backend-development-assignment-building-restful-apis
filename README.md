# Simple Products API

A simple CRUD API built with Node.js and Express. It stores products in a JavaScript array, so changes reset when the server stops.

## Run the project

1. Install Node.js.
2. In this folder, run `npm install`.
3. Start the server with `npm start`.
4. The API runs at `http://localhost:8080`.

## Product fields

Each product has an `id`, `name`, and `price`.

## Endpoints

| Method | URL | What it does | Success status |
| --- | --- | --- | --- |
| GET | `/products` | Get all products | 200 |
| GET | `/products/:id` | Get one product | 200 |
| POST | `/products` | Add a product | 201 |
| PUT | `/products/:id` | Replace a product's name and price | 200 |
| DELETE | `/products/:id` | Delete a product | 200 |

For `POST` and `PUT`, send JSON like this:

```json
{
  "name": "Pencil",
  "price": 0.75
}
```

The API returns `400` if the name is empty or the price is missing, negative, or not a number. It returns `404` if the product ID does not exist.

## Test with Postman

Import `postman/Products-API.postman_collection.json` into Postman and run the requests in order. The collection creates a product, saves its ID, and uses that ID for the read, update, and delete requests.
