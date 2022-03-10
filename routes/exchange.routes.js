const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Exchange = require("../models/Exchange.model");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

// POST /api/exchanges  -  Creates a new exchange
router.post("/exchanges", (req, res, next) => {
  const { dateOfSwap, seller, buyer, sellerItem, buyerItem, comment, status } =
    req.body;

  Exchange.create({
    dateOfSwap,
    seller,
    buyer,
    sellerItem,
    buyerItem,
    comment,
    status,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET /api/exchanges -  Retrieves all of the exchanges
router.get("/exchanges", (req, res, next) => {
  Exchange.find()
    .populate("sellerItem buyerItem")
    .then((allExchanges) => res.json(allExchanges))
    .catch((err) => res.json(err));
});

// GET /api/exchanges/:exchangeId -  Retrieves a specific exchange by id
router.get("/exchanges/:exchangeId", (req, res, next) => {
  const { exchangeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Exchange document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Exchange.findById(exchangeId)
    .populate("sellerItem buyerItem")
    .then((exchange) => res.status(200).json(exchange))
    .catch((error) => res.json(error));
});

// PUT /api/exchanges/:exchangeId  -  Updates a specific exchange by id
router.put("/exchanges/:exchangeId", (req, res, next) => {
  const { exchangeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Exchange.findByIdAndUpdate(exchangeId, req.body, { new: true })
    .then((updatedExchange) => res.json(updatedExchange))
    .catch((error) => res.json(error));
});

// DELETE /api/exchanges/:exchangeId  -  Deletes a specific exchange by id
router.delete("/exchanges/:exchangeId", (req, res, next) => {
  const { exchangeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Exchange.findByIdAndRemove(exchangeId)
    .then(() =>
      res.json({
        message: `Exchange with ${exchangeId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
