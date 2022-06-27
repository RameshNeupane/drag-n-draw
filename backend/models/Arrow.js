const mongoose = require("mongoose");

const arrowSchema = mongoose.Schema({
  shape: {
    type: String,
    default: "arrow",
  },
  positionX: {
    type: Number,
    required: true,
  },
  positionY: {
    type: Number,
    required: true,
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
