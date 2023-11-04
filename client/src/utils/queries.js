import { gql } from "@apollo/client";

export const QUERY_ALLPOST = gql`
  query AllPost {
    allPost {
      _id
      description
      tagIds
      title
      url
    }
  }
`;

export const QUERY_IDPOST = gql`
  query IdPost($id: ID!) {
    idPost(_id: $id) {
      _id
      description
      tagIds
      title
      url
    }
  }
`;

export const QUERY_ALLTAG = gql`
  query AllTag {
    allTag {
      _id
      name
      posts {
        _id
        description
        tagIds
        title
        url
      }
    }
  }
`;

export const QUERY_IDTAG = gql`
  query IdTag($id: ID!) {
    idTag(_id: $id) {
      _id
      name
      posts {
        _id
        description
        tagIds
        title
        url
      }
    }
  }
`;
