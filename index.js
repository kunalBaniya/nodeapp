const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const routes = require("./src/routes");
const errorHandler = require("./src/lib/error.handler");
const { fileStorage, fileFilter } = require("./src/lib/upload");
const { connectionUrl } = require("./src/config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/api/v1", routes);

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

mongoose
  .connect(connectionUrl)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));
