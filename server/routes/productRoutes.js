const express = require('express');
const router = express.Router();

let mockProducts = [
  { id: 1, name: 'Wireless Mouse', price: '$25.99', availability: 'In Stock' },
  { id: 2, name: 'Mechanical Keyboard', price: '$79.99', availability: 'Only 3 left' },
  { id: 3, name: 'USB-C Hub', price: '$39.99', availability: 'Out of Stock' },
];


router.get('/', (req, res) => {
  res.json(mockProducts);
});


router.post('/', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  mockProducts.push(newProduct);
  res.status(201).json(newProduct);
});


router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  mockProducts = mockProducts.map(p =>
    p.id === productId ? { ...p, ...updatedProduct } : p
  );

  res.json({ message: 'Product updated', updatedProduct });
});


router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  mockProducts = mockProducts.filter(p => p.id !== productId);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
