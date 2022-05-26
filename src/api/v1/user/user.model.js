const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    lastName: {
      type: String,
      maxLength: 50,
    },
    phoneNumber: {
      type: String,
      minLength: 10,
      maxLength: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
