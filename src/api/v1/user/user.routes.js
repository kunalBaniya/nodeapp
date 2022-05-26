const express = require('express');
const userController = require('./user.controller');
const userValidation = require('./user.validation');
const validator = require('../../../lib/validator');

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userValidation.createUser, validator.validate, userController.createUser);
router.put("/:id", userValidation.updateUser, validator.validate, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;