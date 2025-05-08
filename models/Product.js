const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  description: String,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);
