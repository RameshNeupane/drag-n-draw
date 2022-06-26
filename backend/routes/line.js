const express = require("express");
const mongoose = require("mongoose");
const Line = require("../models/Line");

const lineRouter = express.Router();

// get
lineRouter.get("/", async (req, res) => {
  try {
    const lines = await Line.find();
    console.log(lines);
    res.json(lines);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

lineRouter.post("/", async (req, res) => {
  const line = new Line({
    positionX: req.body.positionX,
    positionY: req.body.positionY,
    width: req.body.width,
    height: req.body.height,
    lineWidth: req.body.lineWidth,
    fillStyle: req.body.fillStyle,
  });

  try {
    const savedLine = await line.save();
    res.json(savedLine);
    console.log(savedLine);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = lineRouter;
