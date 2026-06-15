const mongoose = require("mongoose");

const DateRequestSchema = new mongoose.Schema(
  {
    askerName: String,
    askerEmail: String,
    receiverName: String,
    receiverEmail: String,
    theme: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DateRequest", DateRequestSchema);