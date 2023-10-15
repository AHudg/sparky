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
  thumbnail: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  length: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
