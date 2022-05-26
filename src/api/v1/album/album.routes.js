const express = require('express');
const albumController = require('./album.controller');
const albumValidation = require('./album.validation');
const validator = require('../../../lib/validator');

const router = express.Router();

router.get("/", albumController.getAllAlbums);
router.get("/:id", albumController.getAlbumById);
router.get("/user/:id", albumController.getAlbumsByUserId);
router.post("/", albumValidation.createAlbum, validator.validate, albumController.createAlbum);
router.put("/:id", albumValidation.updateAlbum, validator.validate, albumController.updateAlbum);
router.delete("/:id", albumController.deleteAlbum);

module.exports = router;