const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    albumId: {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    imageUri: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
