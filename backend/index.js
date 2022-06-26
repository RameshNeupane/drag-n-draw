const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const rectangleRouter = require("./routes/rectangle");
const diamondRouter = require("./routes/diamond");
const ellipseRouter = require("./routes/ellipse");
const arrowRouter = require("./routes/arrow");
const lineRouter = require("./routes/line");
const textRouter = require("./routes/text");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/rectangle", rectangleRouter);
app.use("/diamond", diamondRouter);
app.use("/ellipse", ellipseRouter);
app.use("/arrow", arrowRouter);
app.use("/line", lineRouter);
app.use("/text", textRouter);

// database connection
mongoose.connect(
  process.env.MONGO_DB_CONNECTION_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connedted to DB!");
  }
);

// root directory get api
app.get("/", (req, res) => {
  res.send({ app: "drag-n-draw" });
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
