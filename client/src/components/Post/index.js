import React from "react";
import "./index.css";
import { gsap } from "gsap";
import amber from "../../assets/amberMicroBg.png";

function Post({ title, description, url, postedOn, iterator }) {
  const handleView = function (event) {
    const status = event.target;
    const description = document.getElementById(
      status.getAttribute("data-iterator")
    );

    if (event.target.localName === "button") {
      if (status.getAttribute("data-more") === "close") {
        gsap.to(description, { height: "auto" });
        status.setAttribute("data-more", "open");
      } else {
        gsap.to(description, { height: "50px" });
        status.setAttribute("data-more", "close");
      }
    }
  };

  return (
    <div className="my-4 my-md-5 row post">
      <iframe
        className="col-12 col-lg-6 postVideo"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="col-12 col-lg-4">
        <h2 className="mt-3 title">{title}</h2>

        <p id={iterator} className="description">
          {description}
        </p>
        {window.innerWidth < 992 ? (
          <div className="pageBreak">
            <button
              data-more="close"
              data-iterator={iterator}
              className="viewable"
              onClick={handleView}
            >
              View More!
            </button>

            <span className="border"></span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Post;
