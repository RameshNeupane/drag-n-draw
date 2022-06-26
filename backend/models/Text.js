const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
  shape: {
    type: String,
    default: "text",
  },
  positionX: {
    type: Number,
    required: true,
  },
  positionY: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  lineWidth: {
    type: Number,
    required: true,
  },
  fillStyle: {
    type: String,
    required: true,
    default: "transparent",
  },
  strokeStyle: {
    type: String,
    required: true,
    default: "black",
  },
});

module.exports = mongoose.model("text", textSchema);
