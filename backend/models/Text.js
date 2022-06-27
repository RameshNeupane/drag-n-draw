const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
  shape: {
    type: String,
    default: "text",
  },

  textValue: {
    type: String,
    required: true,
    default: "drag-n-draw",
  },

  positionX: {
    type: Number,
    required: true,
  },

  positionY: {
    type: Number,
    required: true,
  },

  font: {
    type: String,
    required: true,
    default: "10px serif",
  },

  fillStyle: {
    type: String,
    required: true,
    default: "black",
  },
});

module.exports = mongoose.model("text", textSchema);
