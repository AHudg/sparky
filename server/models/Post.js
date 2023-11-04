// import { Schema, model } from "mongoose";
const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  url: {
    type: String,
    require: true,
  },
  tagIds: [
    {
      type: String,
      require: true,
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
