const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reportSchema = new Schema({
  dateOfReport: { type: Date, default: Date.now },
  reportedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  reportedProduct: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  status: {
    type: String,
    enum: ["Open", "Resolved", "Rejected"],
    default: "Open",
  },
});

module.exports = model("Report", reportSchema);
