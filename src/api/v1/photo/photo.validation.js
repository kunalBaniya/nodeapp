const { body } = require("express-validator");

const idValidation = body("id").notEmpty().bail().isMongoId();

const userIdValidation = body("userId").notEmpty().bail().isMongoId();

const albumIdValidation = body("albumId").notEmpty().bail().isMongoId();

const nameValidation = body("name")
  .notEmpty()
  .bail()
  .isString()
  .bail()
  .isLength({ min: 1, max: 100 });

exports.createPhoto = [userIdValidation, albumIdValidation, nameValidation];

exports.updatePhoto = [
  idValidation,
  userIdValidation,
  albumIdValidation,
  nameValidation,
];
