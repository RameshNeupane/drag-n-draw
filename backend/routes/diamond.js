const express = require("express");
const mongoose = require("mongoose");
const Diamond = require("../models/Diamond");

const diamondRouter = express.Router();

// get
diamondRouter.get("/", async (req, res) => {
  try {
    const diamonds = await Diamond.find();

    res.json(diamonds);
  } catch (err) {
    res.json({ message: err });
  }
});

diamondRouter.post("/", async (req, res) => {
  const diamond = new Diamond({
    shape: req.body.shape,
    centerX: req.body.centerX,
    centerY: req.body.centerY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
    strokeStyle: req.body.strokeStyle,
  });

  try {
    const savedDiamond = await diamond.save();
    res.json(savedDiamond);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = diamondRouter;
