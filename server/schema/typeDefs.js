const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
  }

  type Tag {
    _id: ID!
    name: String
    posts: [Post]
  }

  type Post {
    _id: ID!
    title: String!
    description: String
    url: String!
    tagIds: [String]
  }

  type Query {
    user: [User]

    allTag: [Tag]

    idTag(_id: ID!): Tag!

    allPost: [Post!]!

    idPost(_id: ID!): Post!
  }

  type Mutation {
    addTag(name: String!): Tag
    removeTag(_id: ID!): Tag

    editTag(_id: ID!, name: String!): Tag

    addPost(
      title: String!
      description: String!
      url: String!
      tags: [String!]!
    ): Post

    removePost(postId: ID!): Post

    editPost(
      postId: ID!
      title: String!
      description: String!
      url: String!
      tags: [String!]!
    ): Post
  }
`;

module.exports = typeDefs;
