const express = require("express");
const mongoose = require("mongoose");
const Text = require("../models/Text");

const textRouter = express.Router();

// get
textRouter.get("/", async (req, res) => {
  try {
    const texts = await Text.find();
    console.log(texts);
    res.json(texts);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

textRouter.post("/", async (req, res) => {
  const text = new Text({
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedText = await text.save();
    res.json(savedText);
    console.log(savedText);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = textRouter;
