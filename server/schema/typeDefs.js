// import { gql } from "apollo-server-express";
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
  }

  type Post {
    _id: ID!
    title: String!
    description: String
    thumbnail: String
    url: String!
    length: String
    tags: [String]
  }

  type Query {
    user: [User]
    allPost: [Post!]!
    tagPost(tags: String!): [Post!]!
    idPost(_id: ID!): Post!
  }

  type Mutation {
    addPost(
      title: String!
      description: String!
      url: String!
      tags: [String]
    ): Post

    removePost(postId: ID!): Post

    editPost(
      postId: ID!
      title: String!
      description: String!
      url: String!
      tags: [String]
    ): Post
  }
`;

module.exports = typeDefs;
