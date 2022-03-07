const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  listOfProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  isModerator: Boolean,
});

module.exports = model("User", userSchema);
