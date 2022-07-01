const express = require("express");
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

// post
arrowRouter.post("/", async (req, res) => {
  const arrow = new Arrow({
    name: req.body.name,
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

// delete
arrowRouter.delete("/:arrowId", async (req, res) => {
  try {
    const deletedArrow = await Arrow.deleteOne({
      _id: req.params.arrowId,
    });
    res.json(deletedArrow);
  } catch (err) {
    res.json({ message: err });
  }
});

// patch/update
arrowRouter.patch("/:arrowId", async (req, res) => {
  try {
    const id = req.params.arrowId;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Arrow.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = arrowRouter;
