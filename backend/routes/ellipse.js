const express = require("express");
const mongoose = require("mongoose");
const Ellipse = require("../models/Ellipse");

const ellipseRouter = express.Router();

// get
ellipseRouter.get("/", async (req, res) => {
  try {
    const ellipses = await Ellipse.find();
    console.log(ellipses);
    res.json(ellipses);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

ellipseRouter.post("/", async (req, res) => {
  const ellipse = new Ellipse({
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedEllipse = await ellipse.save();
    res.json(savedEllipse);
    console.log(savedEllipse);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = ellipseRouter;
