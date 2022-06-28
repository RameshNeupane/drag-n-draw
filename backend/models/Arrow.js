const mongoose = require("mongoose");

const arrowSchema = mongoose.Schema({
  shape: {
    type: String,
    required: true,
    default: "arrow",
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
  arrowLength: {
    type: Number,
    required: true,
    default: 100,
  },
  height: {
    type: Number,
    required: true,
    default: 10,
  },
  lineWidth: {
    type: Number,
    required: true,
    default: 2,
  },
  fillStyle: {
    type: String,
    required: true,
    default: "black",
  },
  strokeStyle: {
    type: String,
    required: true,
    default: "black",
  },
});

module.exports = mongoose.model("arrow", arrowSchema);
