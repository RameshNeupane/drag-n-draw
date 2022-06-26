const express = require("express");
const mongoose = require("mongoose");
const Diamond = require("../models/Diamond");

const diamondRouter = express.Router();

// get
diamondRouter.get("/", async (req, res) => {
  try {
    const diamonds = await Diamond.find();
    console.log(diamonds);
    res.json(diamonds);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

diamondRouter.post("/", async (req, res) => {
  const diamond = new Diamond({
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedDiamond = await diamond.save();
    res.json(savedDiamond);
    console.log(savedDiamond);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = diamondRouter;
