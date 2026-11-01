const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

// This sample data is stored in memory and resets when the server restarts.
let products = [
  { id: 1, name: 'Notebook', price: 5.99 },
  { id: 2, name: 'Pen', price: 1.5 },
];
let nextId = 3;

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  res.json(product);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (typeof name !== 'string' || name.trim() === '' || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Enter a product name and a non-negative price.' });
  }

  const newProduct = {
    id: nextId,
    name: name.trim(),
    price,
  };

  nextId += 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  const { name, price } = req.body;

  if (typeof name !== 'string' || name.trim() === '' || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Enter a product name and a non-negative price.' });
  }

  product.name = name.trim();
  product.price = price;
  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex((item) => item.id === Number(req.params.id));

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  products.splice(productIndex, 1);
  res.json({ message: 'Product deleted.' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
