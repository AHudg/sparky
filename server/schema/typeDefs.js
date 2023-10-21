const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
  }

  type Tag {
    _id: ID!
    name: String
  }

  type Post {
    _id: ID!
    title: String!
    description: String
    url: String!
    tags: [Tag]
  }

  type Query {
    user: [User]

    tags: [Tag]

    allPost: [Post!]!

    tagPost(tagName: String): [Post!]!

    idPost(_id: ID!): Post!
  }

  type Mutation {
    addTag(name: String!): Tag

    removeTag(tagId: ID!): Tag

    editTag(tagId: ID!, name: String!): Tag

    addPost(
      title: String!
      description: String!
      url: String!
      tags: [String!]
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
