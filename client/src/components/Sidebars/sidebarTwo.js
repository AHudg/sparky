import React, { useState, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import Carousel from "../Carousel";
import vertOne from "../../assets/vertOne.png";
import vertTwo from "../../assets/vertTwo.png";
import vertThree from "../../assets/vertThree.png";

function SidebarTwo({ screenWidth, breakpoint }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  // function selectWidths() {
  //   if (window.innerWidth > 1400) {
  //     const num = 50;
  //     return num;
  //   } else if (window.innerWidth > 1200) {
  //     const num = 50;
  //     return num;
  //   } else if (window.innerWidth > 992) {
  //     const num = 50;
  //     return num;
  //   } else if (window.innerWidth > 768) {
  //     const num = 50;
  //     return num;
  //   } else if (window.innerWidth > 540) {
  //     const num = 50;
  //     return num;
  //   } else {
  //     const num = 50;
  //     return num;
  //   }
  // }

  const handleScroll = () => {
    const scrollLocale = window.scrollY;
    setScroll(scrollLocale);
    if (scrollLocale > 200) {
      gsap.to(".twoRibOne", { x: "50vw", duration: 1.5 });
      gsap.to(".twoRibTwo", {
        x: "-50vw",
        duration: 1.5,
      });
      gsap.to(".twoRibThree", {
        x: "100vw",
        duration: 1.5,
      });
    }
  };

  return (
    <section className="mt-5 sectAbout">
      <div className="twoRibOne"></div>

      <div className="twoRibTwo">
        <p className="topOrnament">OUR</p>
        <p className="bottomOrnament">STORY</p>
      </div>

      <div className="twoRibThree"></div>

      <div className="row py-5 mx-2 text-center bgAbout">
        <p className="col-12">Find out why we do what we do.</p>
      </div>
    </section>
  );
}

export default SidebarTwo;

// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
// import "./index.css";
// import Carousel from "../Carousel";
// import vertOne from "../../images/vertOne.png";
// import vertTwo from "../../images/vertTwo.png";
// import vertThree from "../../images/vertThree.png";

// function SidebarTwo({ screenWidth, breakpoint }) {
//   const [scroll, setScroll] = useState(0);

//   const handleScroll = () => {
//     const scrollLocale = window.scrollY;
//     setScroll(scrollLocale);
//     console.log(scrollLocale);
//     if (scrollLocale > 200) {
//       gsap.to(".twoRibOne", { x: "100%" });
//       gsap.to(".twoRibTwo", { x: "-100%" });
//       gsap.to(".twoRibThree", { x: "100%" });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scroll]);

//   return (
//     <section className="mt-5 sectAbout">
//       <div className="twoRibOne row justify-content-center">
//         <Carousel
//           firstPhoto={vertOne}
//           secondPhoto={vertTwo}
//           thirdPhoto={vertThree}
//           classSelector="blah"
//         ></Carousel>
//       </div>

//       <div className="twoRibTwo">
//         <p className="topOrnament">OUR</p>
//         <p className="bottomOrnament">STORY</p>
//       </div>

//       <div className="twoRibThree">
//         {/* <p>Find out why we do what we do.</p> */}
//       </div>
//     </section>
//   );
// }

// export default SidebarTwo;
