import React from "react";
import "./Contact.css";

function Contact() {
  const contact = "CONTACT";

  const colors = [
    "var(--mist)",
    "var(--sandstone)",
    "var(--aqua)",
    "var(--vermillion)",
    "var(--mist)",
    "var(--sandstone)",
    "var(--teal)",
  ];

  const colorBg = [
    "drop-shadow(7px 7px 0px var(--mistOp))",
    "drop-shadow(7px -7px 0px var(--sandstoneOp))",
    "drop-shadow(7px 7px 0px var(--aquaOp))",
    "drop-shadow(7px -7px 0px var(--vermillionOp))",
    "drop-shadow(7px 7px 0px var(--mistOp))",
    "drop-shadow(7px -7px 0px var(--sandstoneOp))",
    "drop-shadow(7px 7px 0px var(--tealOp))",
  ];

  let iterator = 0;
  let topStyle;

  function iterate() {
    console.log(iterator);
    if (iterator < colors.length) {
      return iterator++;
    } else {
      return (iterator = 0);
    }
  }

  return (
    <main>
      <div className="d-flex justify-content-center contactContainer">
        {contact.split("").map((letter) => {
          const i = iterate();

          if (i % 2 === 0) {
            topStyle = "5px";
          } else {
            topStyle = "-5px";
          }

          const colorStyle = {
            backgroundColor: colors[i],
            filter: colorBg[i],
            top: topStyle,
          };

          return (
            <h2 className="contactTitle" style={colorStyle}>
              {letter}
            </h2>
          );
        })}
      </div>
      <div className="row justify-content-center contactMessage">
        <p className="contactIntro">Hey there,</p>
        <p className="contactText">
          I hope you've enjoyed the content here thus far. I'm passionate about
          helping others, and would love to hear from you. Feel free to reach
          out and ask questions about your personal projects, or give feedback
          on the videos and what you'd like to see.
        </p>
        <span className="contactText text-center my-3">999-999-9999</span>
        <p className="contactText text-end">
          Patiently waiting to help ignite your passion,
        </p>
        <span className="contactText text-end">- Jalene</span>
      </div>
    </main>
  );
}

export default Contact;
