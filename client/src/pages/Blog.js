import React from "react";
import "./Blog.css";
import Hero from "../components/Hero";
import Loading from "../components/Loading";

import Post from "../components/Post";
import { useQuery } from "@apollo/client";
import { QUERY_ALLPOST, QUERY_ALLTAGS } from "../utils/queries";

import handFan from "../assets/handFan.png";
import bgVideo from "../assets/bubbles.mp4";

function Blog() {
  // const optionObj = [
  //   {
  //     tagName: "raccoon",
  //     displayName: "Raccoons",
  //   },
  //   {
  //     tagName: "refurbish",
  //     displayName: "Refurbishing",
  //   },
  //   {
  //     tagName: "upholster",
  //     displayName: "Re-Upholsterin",
  //   },
  //   {
  //     tagName: "garden",
  //     displayName: "Gardening",
  //   },
  //   {
  //     tagName: "exercise",
  //     displayName: "Exercise",
  //   },
  // ];

  // if (window.location.pathname === "/blog") {
  //   const query = QUERY_ALLPOST;
  // } else {
  //   const query = QUERY_TAGPOST;
  // }

  // const { tagLoading, tagError, tagData } = useQuery(QUERY_ALLTAGS);
  const { loading, error, data } = useQuery(QUERY_ALLPOST);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: " + error.message);
  }

  console.log(data);

  return (
    <div>
      <Hero
        media="video"
        src={bgVideo}
        firstLine="INTERIOR"
        secondLine="DESIGN"
        orientation="ornamentHero ornamentLeft"
        accentClass="flame hands"
        accent={handFan}
      />

      {/* <div className="mt-4 py-3 opaqueBg">
        <div className="row mx-3 justify-content-end align-items-center">
          <input className="col-10 searchBar" placeholder="Search..."></input>
          <i className="col-2 fa-solid fa-magnifying-glass searchEmblem"></i>
        </div>

        <div className="row mt-3 mx-3 justify-content-end">
          <span className="col-6">Filter Results:</span>
          <select className="col-6 filterBar">
            <option>None</option>
            <optgroup label="Categories">
              {optionObj.map((option) => (
                <option value={option.tagName} key={option.tagName}>
                  {option.displayName}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div> */}

      <main className="container">
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
      </main>
    </div>
  );
}

export default Blog;
