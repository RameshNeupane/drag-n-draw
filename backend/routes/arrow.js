const express = require("express");
const mongoose = require("mongoose");
const Arrow = require("../models/Arrow");

const arrowRouter = express.Router();

// get
arrowRouter.get("/", async (req, res) => {
  try {
    const arrows = await Arrow.find();
    res.json(arrows);
  } catch (err) {
    res.json({ message: err });
  }
});

arrowRouter.post("/", async (req, res) => {
  const arrow = new Arrow({
    shape: req.body.shape,
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    arrowLength: req.body.arrowLength,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
    strokeStyle: req.body.strokeStyle,
  });

  try {
    const savedArrow = await arrow.save();
    res.json(savedArrow);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = arrowRouter;
