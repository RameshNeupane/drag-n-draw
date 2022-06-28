const mongoose = require("mongoose");

const rectangleSchema = mongoose.Schema({
  shape: {
    type: String,
    required: true,
    default: "rectangle",
  },
  positionX: {
    type: Number,
    required: true,
    default: 300,
  },
  positionY: {
    type: Number,
    required: true,
    default: 200,
  },
  width: {
    type: Number,
    required: true,
    default: 200,
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

module.exports = mongoose.model("rectangle", rectangleSchema);
