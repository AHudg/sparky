const mongoose = require("mongoose");

const { Schema } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
