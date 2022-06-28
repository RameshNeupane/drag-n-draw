const express = require("express");
const mongoose = require("mongoose");
const Line = require("../models/Line");

const lineRouter = express.Router();

// get
lineRouter.get("/", async (req, res) => {
  try {
    const lines = await Line.find();
    res.json(lines);
  } catch (err) {
    res.json({ message: err });
  }
});

lineRouter.post("/", async (req, res) => {
  const line = new Line({
    name: req.body.name,
    startPositionX: req.body.startPositionX,
    startPositionY: req.body.startPositionY,
    endPositionX: req.body.endPositionX,
    endPositionY: req.body.endPositionY,
    lineWidth: req.body.lineWidth,
    lineCap: req.body.lineCap,
    strokeStyle: req.body.strokeStyle,
  });

  try {
    const savedLine = await line.save();
    res.json(savedLine);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = lineRouter;
