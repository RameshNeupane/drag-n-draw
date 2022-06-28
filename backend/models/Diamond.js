const mongoose = require("mongoose");

const diamondSchema = mongoose.Schema({
  shape: {
    type: String,
    required: true,
    default: "diamond",
  },
  centerX: {
    type: Number,
    required: true,
    default: 400,
  },
  centerY: {
    type: Number,
    required: true,
    default: 200,
  },
  width: {
    type: Number,
    required: true,
    default: 100,
  },
  height: {
    type: Number,
    required: true,
    default: 100,
  },
  lineWidth: {
    type: Number,
    required: true,
    default: 2,
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

module.exports = mongoose.model("diamond", diamondSchema);
