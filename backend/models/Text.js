const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    default: 300,
  },

  positionY: {
    type: Number,
    required: true,
    default: 200,
  },

  font: {
    type: String,
    required: true,
    default: "16px poppins",
  },

  fillStyle: {
    type: String,
    required: true,
    default: "black",
  },
});

module.exports = mongoose.model("text", textSchema);
