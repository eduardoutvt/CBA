// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar un nuevo producto
router.post('/add', async (req, res) => {
  const { name, description, price, image } = req.body;
  const newProduct = new Product({ name, description, price, image });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un producto
router.put('/update/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
