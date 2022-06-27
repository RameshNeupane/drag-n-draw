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
  },
  startPositionY: {
    type: Number,
    required: true,
  },
  endPositionX: {
    type: Number,
    required: true,
  },
  endPositionY: {
    type: Number,
    required: true,
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
