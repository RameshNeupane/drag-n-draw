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
    fontSize: req.body.fontSize,
    fontFamily: req.body.fontFamily,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedText = await text.save();
    res.json(savedText);
  } catch (err) {
    res.json({ message: err });
  }
});

textRouter.delete("/:textId", async (req, res) => {
  try {
    const deletedText = await Text.deleteOne({
      _id: req.params.textId,
    });
    res.json(deletedText);
  } catch (err) {
    res.json({ message: err });
  }
});

textRouter.patch("/:textId", async (req, res) => {
  try {
    const id = req.params.textId;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Text.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = textRouter;
