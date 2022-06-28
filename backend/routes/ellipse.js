const express = require("express");
const mongoose = require("mongoose");
const Ellipse = require("../models/Ellipse");

const ellipseRouter = express.Router();

// get
ellipseRouter.get("/", async (req, res) => {
  try {
    const ellipses = await Ellipse.find();

    res.json(ellipses);
  } catch (err) {
    res.json({ message: err });
  }
});

ellipseRouter.post("/", async (req, res) => {
  const ellipse = new Ellipse({
    name: req.body.name,
    centerX: req.body.centerX,
    centerY: req.body.centerY,
    radiusX: req.body.radiusX,
    radiusY: req.body.radiusY,
    rotation: req.body.rotation,
    startAngle: req.body.startAngle,
    endAngle: req.body.endAngle,
    counterClockWise: req.body.counterClockWise,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
    strokeStyle: req.body.strokeStyle,
  });

  try {
    const savedEllipse = await ellipse.save();
    res.json(savedEllipse);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = ellipseRouter;
