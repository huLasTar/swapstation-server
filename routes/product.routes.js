const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");
const User = require("../models/User.model");

// POST a new product:
router.post("/products", (req, res, next) => {
  const {
    title,
    imageUrl,
    category,
    condition,
    description,
    purchasable,
    price,
    seller,
  } = req.body;

  Product.create({
    title,
    imageUrl,
    category,
    condition,
    description,
    purchasable,
    price,
    seller,
  })
    .then((response) => {
      console.log("RESPONSE TEST:", response);
      res.json(response);
    })
    .catch((err) => res.json(err));
});

// GET all products:
router.get("/products", (req, res, next) => {
  Product.find()
    .populate("seller")
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
});

// GET a specific product by ID:
router.get("/products/:productId", (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Product document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Product.findById(productId)
    .populate("seller")
    .then((product) => res.status(200).json(product))
    .catch((error) => res.json(error));
});

// PUT - Updates a specific product by ID:
router.put("/products/:productId", (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((error) => res.json(error));
});

// DELETE a specific product by ID:
router.delete("/products/:productId", (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findByIdAndRemove(productId)
    .then(() =>
      res.json({
        message: `Product with ${productId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
