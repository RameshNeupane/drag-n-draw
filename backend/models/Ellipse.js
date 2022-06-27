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
  radiusX: {
    type: Number,
    required: true,
  },
  radiusY: {
    type: Number,
    required: true,
  },
  rotation: {
    type: Number,
    default: 0,
  },
  startAngle: {
    type: Number,
    default: 0,
  },
  endAngle: {
    type: Number,
    default: 2 * Math.PI,
  },
  counterClockWise: {
    type: Boolean,
    default: false,
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

module.exports = mongoose.model("ellipse", ellipseSchema);
