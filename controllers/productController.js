const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const imagePath = req.file.path;

    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "products",
    });

    // Delete local temp file
    fs.unlinkSync(imagePath);

    const product = new Product({
      title,
      description,
      price,
      image: result.secure_url,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createProduct, getAllProducts };
