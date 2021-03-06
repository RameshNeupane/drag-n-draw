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

// post
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

// delete
lineRouter.delete("/:lineId", async (req, res) => {
  try {
    const deletedLine = await Line.deleteOne({
      _id: req.params.lineId,
    });
    res.json(deletedLine);
  } catch (err) {
    res.json({ message: err });
  }
});

// patch/update
lineRouter.patch("/:lineId", async (req, res) => {
  try {
    const id = req.params.lineId;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Line.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = lineRouter;
