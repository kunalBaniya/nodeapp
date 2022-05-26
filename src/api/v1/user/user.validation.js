const { body } = require("express-validator");

const idValidation = body("id").notEmpty().bail().isMongoId();

const firstNameValidation = body("firstName")
  .notEmpty()
  .bail()
  .isString()
  .bail()
  .isAlpha()
  .bail()
  .isLength({ min: 1, max: 50 });

const lastNameValidation = body("lastName")
  .bail()
  .isLength({ min: 0, max: 50 });

const phoneNumberValidation = body("phoneNumber")
  .notEmpty()
  .bail()
  .isMobilePhone();

exports.createUser = [
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
];

exports.updateUser = [
  idValidation,
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
];
