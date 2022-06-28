const mongoose = require("mongoose");

const lineSchema = mongoose.Schema({
  shape: {
    type: String,
    required: true,
    default: "line",
  },
  startPositionX: {
    type: Number,
    required: true,
    default: 300,
  },
  startPositionY: {
    type: Number,
    required: true,
    default: 200,
  },
  endPositionX: {
    type: Number,
    required: true,
    default: 500,
  },
  endPositionY: {
    type: Number,
    required: true,
    default: 200,
  },
  lineWidth: {
    type: Number,
    required: true,
    default: 10,
  },
  lineCap: {
    type: String,
    required: true,
    default: "butt",
  },
  strokeStyle: {
    type: String,
    required: true,
    default: "black",
  },
});

module.exports = mongoose.model("line", lineSchema);
