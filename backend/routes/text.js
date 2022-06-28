const express = require("express");
const mongoose = require("mongoose");
const Text = require("../models/Text");

const textRouter = express.Router();

// get
textRouter.get("/", async (req, res) => {
  try {
    const texts = await Text.find();
    res.json(texts);
  } catch (err) {
    res.json({ message: err });
  }
});

textRouter.post("/", async (req, res) => {
  const text = new Text({
    name: req.body.name,
    textValue: req.body.textValue,
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    font: req.body.font,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedText = await text.save();
    res.json(savedText);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = textRouter;
