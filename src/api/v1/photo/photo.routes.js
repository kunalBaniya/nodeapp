const express = require("express");
const photoController = require("./photo.controller");
const photoValidation = require("./photo.validation");
const validator = require("../../../lib/validator");

const router = express.Router();

router.get("/", photoController.getAllPhotos);
router.get("/:id", photoController.getPhotoById);
router.get("/album/:id", photoController.getPhotosByAlbumId);
router.get("/user/:id", photoController.getPhotosByUserId);
router.post(
  "/",
  photoValidation.createPhoto,
  validator.validate,
  validator.checkfile,
  photoController.createPhoto
);
router.put(
  "/:id",
  photoValidation.updatePhoto,
  validator.validate,
  photoController.updatePhoto
);
router.delete("/:id", photoController.deletePhoto);

module.exports = router;
