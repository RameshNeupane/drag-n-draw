const express = require("express");
const mongoose = require("mongoose");
const Arrow = require("../models/Arrow");

const arrowRouter = express.Router();

// get
arrowRouter.get("/", async (req, res) => {
  try {
    const arrows = await Arrow.find();
    console.log(arrows);
    res.json(arrows);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

arrowRouter.post("/", async (req, res) => {
  const arrow = new Arrow({
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedArrow = await arrow.save();
    res.json(savedArrow);
    console.log(savedArrow);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = arrowRouter;
