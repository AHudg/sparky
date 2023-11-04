import React from "react";
import "./Blog.css";

import Hero from "../components/Hero";
import AllBlog from "../components/allBlog";
import TagBlog from "../components/tagBlog";

import handFan from "../assets/handFan.png";
import bgVideo from "../assets/bubbles.mp4";

function Blog() {
  const url = window.location.pathname;
  console.log(url);

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
        {url === "/blog" ? <AllBlog></AllBlog> : <TagBlog></TagBlog>}
      </main>
    </div>
  );
}

export default Blog;
