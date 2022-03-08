const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: {
    type: String,
    enum: ["PS5", "PS4", "PS3", "PS2", "PS1", "PSVita", "PSP"],
    required: true,
  },
  condition: {
    type: String,
    enum: ["new", "usednew", "usedgood", "usedfair"],
    required: true,
  },
  description: String,
  purchasable: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true, default: 0 },
  reported: { type: Boolean, default: false },
  seller: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Product", productSchema);
