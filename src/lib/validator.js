const { validationResult } = require("express-validator");

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

exports.checkfile = (req, res, next) => {
  if (!req.file) {
    return res.status(422).json({ errors: "No image provided" });
  }
  next();
};
