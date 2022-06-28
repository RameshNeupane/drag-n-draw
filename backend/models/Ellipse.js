const mongoose = require("mongoose");

const ellipseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "ellipse",
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
  radiusX: {
    type: Number,
    required: true,
    default: 100,
  },
  radiusY: {
    type: Number,
    required: true,
    default: 100,
  },
  rotation: {
    type: Number,
    required: true,
    default: 0,
  },
  startAngle: {
    type: Number,
    required: true,
    default: 0,
  },
  endAngle: {
    type: Number,
    required: true,
    default: 2 * Math.PI,
  },
  counterClockWise: {
    type: Boolean,
    required: true,
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
