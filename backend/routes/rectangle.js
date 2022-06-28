const express = require("express");
const mongoose = require("mongoose");
const Rectangle = require("../models/Rectangle");

const rectangleRouter = express.Router();

// get
rectangleRouter.get("/", async (req, res) => {
  try {
    const rectangles = await Rectangle.find();
    res.json(rectangles);
  } catch (err) {
    res.json({ message: err });
  }
});

rectangleRouter.post("/", async (req, res) => {
  const rectangle = new Rectangle({
    shape: req.body.shape,
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedRectangle = await rectangle.save();
    res.json(savedRectangle);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = rectangleRouter;
