const User = require("../models/User");
const Tag = require("../models/Tag");
const Post = require("../models/Post");

const resolvers = {
  Query: {
    user: async () => {
      try {
        const userData = await User.find({});
        return userData;
      } catch {
        throw new Error(
          "Apologies. Incorrect user information. This is reserved for admin access only."
        );
      }
    },

    allTag: async () => {
      try {
        const tagData = await Tag.find({}).populate("posts");
        return tagData;
      } catch {
        throw new Error(
          "Apologies. Could not connect to the database. Please let us know that this happened!"
        );
      }
    },

    idTag: async (parent, { _id }) => {
      try {
        const postData = await Tag.findById(_id).populate("posts");
        return postData;
      } catch {
        throw new Error(
          "Apologies. Could not locate the specific post you were searching for. Let us know so we can fix it!"
        );
      }
    },

    allPost: async () => {
      try {
        const postData = await Post.find({});
        return postData;
      } catch {
        throw new Error(
          "Apologies. This request did not reach the database. Please let us know that this happened!"
        );
      }
    },

    idPost: async (parent, { _id }) => {
      console.log(_id);
      try {
        const postData = await Post.findById(_id);
        return postData;
      } catch {
        throw new Error(
          "Apologies. Could not locate the specific post you were searching for. Let us know so we can fix it!"
        );
      }
    },
  },

  Mutation: {
    addTag: async (parent, args) => {
      try {
        const tagData = await Tag.create(args);
        return tagData;
      } catch {
        throw new Error("Could not add tag to the database.");
      }
    },

    removeTag: async (parent, { tagId }) => {
      try {
        const tagData = await Tag.findByIdAndDelete({ _id: tagId });
        return tagData;
      } catch {
        throw new Error(
          "Could not remove tag from the database. Double check that the tagId is correct."
        );
      }
    },

    editTag: async (parent, { tagId, name, posts }) => {
      try {
        const tagData = await Tag.findByIdAndUpdate(
          { _id: tagId },
          { name: name, posts: posts },
          { new: true }
        );
        return tagData;
      } catch {
        throw new Error(
          "Could not locate/edit desired tag within the database."
        );
      }
    },

    addPost: async (parent, args) => {
      try {
        const postData = await Post.create(args);
        return postData;
      } catch {
        throw new Error("Could not add post to the database.");
      }
    },

    removePost: async (parent, { postId, title, description, url, tags }) => {
      try {
        const postData = await Post.findByIdAndDelete(
          { _id: postId },
          { title: title, description: description, url: url, tags: tags }
        );
        return postData;
      } catch {
        throw new Error(
          "Could not remove post from the database. Double check that the postId is correct."
        );
      }
    },

    editPost: async (parent, { postId, title, description, url, tags }) => {
      try {
        const postData = await Post.findByIdAndUpdate(
          { _id: postId },
          { title: title, description: description, url: url, tags: tags },
          { new: true }
        );
        return postData;
      } catch {
        throw new Error(
          "Could not edit the post. Double check that the postId is correct."
        );
      }
    },
  },
};

module.exports = resolvers;
