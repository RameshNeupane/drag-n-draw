const mongoose = require("mongoose");

const ellipseSchema = mongoose.Schema({
  shape: {
    type: String,
    default: "ellipse",
  },
  centerX: {
    type: Number,
    required: true,
  },
  centerY: {
    type: Number,
    required: true,
  },
  verticalRadius: {
    type: Number,
    required: true,
  },
  horizontalRadius: {
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

module.exports = mongoose.model("ellipse", ellipseSchema);
