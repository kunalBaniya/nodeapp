const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", albumSchema);
