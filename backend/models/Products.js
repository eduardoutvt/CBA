// backend/models/Products.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false }, // Agregar campo para imagen
});

module.exports = mongoose.model('Product', productSchema);
