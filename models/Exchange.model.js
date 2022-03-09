const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exchangeSchema = new Schema({
  dateOfSwap: { type: Date, default: Date.now },
  seller: { type: Schema.Types.ObjectId, ref: "User" },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  sellerItem: { type: Schema.Types.ObjectId, ref: "Product" },
  buyerItem: { type: Schema.Types.ObjectId, ref: "Product" },
  comment: String,
  status: {
    type: String,
    enum: ["Approved", "Pending", "Rejected"],
    default: "Pending",
  },
});

module.exports = model("Exchange", exchangeSchema);
