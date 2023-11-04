import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ALLPOST } from "../../utils/queries";

import Loading from "../Loading";
import Post from "../Post";

function AllBlog() {
  const { loading, error, data } = useQuery(QUERY_ALLPOST);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: " + error.message);
  }

  return (
    <div>
      {data.allPost.map((post, i) => {
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

export default AllBlog;
