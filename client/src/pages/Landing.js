import React from "react";
import "./Landing.css";

import Hero from "../components/Hero";
import SidebarTwo from "../components/Sidebars/sidebarTwo";

import flame from "../assets/flame.png";
import bgVideo from "../assets/bubbles.mp4";

function Landing({ screenWidth, breakpoint }) {
  return (
    <main>
      <Hero
        media="video"
        src={bgVideo}
        firstLine="IGNITING"
        secondLine="INSPIRATION"
        orientation="ornamentHero ornamentRight"
        accentClass="flame"
        accent={flame}
        screenWidth={screenWidth}
      />

      <section
        className={`${
          screenWidth > breakpoint
            ? "container row text-center"
            : "row text-center"
        }`}
      ></section>
      <SidebarTwo
        screenWidth={screenWidth}
        breakpoint={breakpoint}
      ></SidebarTwo>
    </main>
  );
}

export default Landing;
