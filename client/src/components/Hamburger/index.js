import React, { useState, useEffect, useContext, useRef } from "react";
import "../Header/index.css";
import { gsap } from "gsap";
import ThemeContext from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALLTAGS } from "../../utils/queries";
import Loading from "../Loading";

export default function Hamburger() {
  // TODO Bugs present. If double clicked, the animation glitches
  // This causes visual bugs.
  const [blogStatus, setBlogStatus] = useState("false");
  const [aboutStatus, setAboutStatus] = useState("false");

  const { open } = useContext(ThemeContext);
  const { setOpen } = useContext(ThemeContext);

  const initialRender = useRef(true);

  const navigate = useNavigate();

  const openTl = gsap.timeline();
  const closeTl = gsap.timeline();

  // Controlling the hamburger being open/closed
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (open) {
        openTl.to(".menu", { display: "block" });
        openTl.to(".ribbonFive", { x: "-100vw" });
        openTl.to(".ribbonFour", { x: "-100vw" });
        openTl.to(".ribbonThree", { x: "-100vw" });
        openTl.to(".ribbonTwo", { x: "-100vw" });
        openTl.to(".ribbonOne", { x: "-100vw" });
        openTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 0" });
        openTl.to(".hamTop", { rotate: 45, y: 10 });
        openTl.to(".hamBottom", { rotate: -45, y: -10 });
      } else {
        closeTl.to(".ribbonFive", { x: 0 });
        closeTl.to(".ribbonFour", { x: 0 });
        closeTl.to(".ribbonThree", { x: 0 });
        closeTl.to(".ribbonTwo", { x: 0 });
        closeTl.to(".ribbonOne", { x: 0 });
        closeTl.to(".hamTop", { rotate: 0, y: 0 });
        closeTl.to(".hamBottom", { rotate: 0, y: 0 });
        closeTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 1" });
        closeTl.to(".menu", { display: "none" });
      }
    }
  }, [open]);

  // Controlling the Blog buttons
  useEffect(() => {
    if (!aboutStatus) {
      setAboutStatus(!aboutStatus);
    }
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (!blogStatus) {
        gsap.to(".ribbonOne", { height: "60vh" });
        gsap.to(".leftUp", { y: "40vh" });
        gsap.to(".ribbonTwo", { y: "40vh" });
        gsap.to(".ribbonThree", { y: "40vh" });
        gsap.to(".ribbonFour", { y: "40vh" });
        gsap.to(".ribbonFive", { y: "40vh" });
      } else {
        gsap.to(".ribbonOne", { height: "20vh" });
        gsap.to(".leftUp", { y: 0 });
        gsap.to(".ribbonTwo", { y: 0 });
        gsap.to(".ribbonThree", { y: 0 });
        gsap.to(".ribbonFour", { y: 0 });
        gsap.to(".ribbonFive", { y: 0 });
      }
    }
  }, [blogStatus]);

  // Changes state for hamburger being open
  const handleMenu = () => {
    setOpen(!open);
  };

  // Changes the state to control the About/Blog subsections of the hamburger
  const handleNavClick = function (event) {
    const navClick = event.target.innerHTML;
    if (navClick === "Blog") {
      event.preventDefault();
      setBlogStatus(!blogStatus);
    } else {
      return;
    }
  };

  const { loading, error, data } = useQuery(QUERY_ALLTAGS);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: " + error.message);
  }

  const tagData = data.tags;

  return (
    // hamburger icon on top left header
    <div className="col-8">
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>

      {/* physical hamburger menu */}
      <nav className="menu">
        <div className="ribbonOne">
          <a onClick={handleNavClick} className="menuWord leftUp">
            Blog
          </a>
          <div className="row Links">
            {tagData.map((element) => {
              return (
                <a
                  href={"/blog/" + element.name}
                  className="col-6 text-center blogAref"
                >
                  {element.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="ribbonTwo">
          <a href="/about" className="menuWord rightUp">
            About
          </a>
        </div>

        <div className="ribbonThree">
          <a href="/store" className="menuWord leftDown">
            Store
          </a>
        </div>

        <div className="ribbonFour">
          <a href="/donate" className="menuWord rightDown">
            Donate
          </a>
        </div>

        <div className="ribbonFive">
          <a href="/contact" className="menuWord contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
