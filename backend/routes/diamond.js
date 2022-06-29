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
    name: req.body.name,
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

diamondRouter.delete("/:diamondId", async (req, res) => {
  try {
    const deletedDiamond = await Diamond.deleteOne({
      _id: req.params.diamondId,
    });
    res.json(deletedDiamond);
  } catch (err) {
    res.json({ message: err });
  }
});

diamondRouter.patch("/:diamondId", async (req, res) => {
  try {
    const id = req.params.diamondId;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Diamond.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = diamondRouter;
