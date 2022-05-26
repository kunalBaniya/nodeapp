const express = require("express");
const userRoutes = require("./api/v1/user/user.routes");
const albumRoutes = require("./api/v1/album/album.routes");
const photoRoutes = require('./api/v1/photo/photo.routes');

const router = express.Router();

router.use("/users", userRoutes);
router.use("/albums", albumRoutes);
router.use("/photos", photoRoutes);

module.exports = router;
