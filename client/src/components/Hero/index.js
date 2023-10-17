import React, { useState, useEffect } from "react";
import "./index.css";

import gsap from "gsap";

function Hero({
  media,
  src,
  firstLine,
  secondLine,
  orientation,
  accentClass,
  accent,
  screenWidth,
}) {
  const [rotate, setRotate] = useState(0);

  // useEffect(() => {
  //   const rotateInterval = setInterval((screenWidth) => {
  //     if (screenWidth > 540) {
  //       gsap.to(".squareOne", { rotation: "30deg" });
  //     }
  //   }, 1000);
  // });

  return (
    <section className={screenWidth > 540 && "container"}>
      <div className="row sectHero">
        <div className="col-12 col-lg-5 collage">
          {screenWidth >= 540 && (
            <div>
              <div className="squareOne"></div>
              <div className="squareTwo"></div>
            </div>
          )}
          {media === "video" ? (
            <video autoPlay loop muted className="mediaHero">
              <source src={src} type="video/mp4" />
              We're sorry. This video is not supported in your browser.
            </video>
          ) : (
            <img src={src} className="mediaHero"></img>
          )}
          <div className={orientation}>
            <p>{firstLine}</p>
            <p>{secondLine}</p>
          </div>
          <img src={accent} className={accentClass} />
        </div>
        <div className="col-12 col-lg-5 row text-center justify-content-center coa">
          <p>
            Cheering you on for your next DIY, we illuminate your interest and
            encourage you to get out and go do! Here is your spark, now ignite
            your inspiration.
          </p>
          <a className="col-6 mt-4" href="/blog">
            Explore!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
