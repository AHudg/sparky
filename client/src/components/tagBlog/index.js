import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_IDTAG } from "../../utils/queries";

import Loading from "../Loading";
import Post from "../Post";

function TagBlog() {
  const { id: tagParam } = useParams();

  const { loading, error, data } = useQuery(QUERY_IDTAG, {
    variables: { id: tagParam },
  });

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: " + error.message);
  }

  return (
    <div>
      {data.idTag.posts.map((post, i) => {
        return (
          <Post
            title={post.title}
            description={post.description}
            url={post.url}
            postedOn={post.postedOn}
            iterator={i}
          ></Post>
        );
      })}
    </div>
  );
}

export default TagBlog;
