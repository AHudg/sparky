import React from "react";
import "./FourOhFour.css";

function FourOhFour() {
  return (
    <main>
      <div className="d-flex justify-content-center numberContainer">
        <h2 className="numbers firstFour">4</h2>
        <h2 className="numbers oh">0</h2>
        <h2 className="numbers secondFour">4</h2>
      </div>
      <div className="message">
        <h3 className="intro">Hey there,</h3>
        <p>Seems like you fell off the beaten path.</p>
        <p>There's no content here.</p>
      </div>
    </main>
  );
}

export default FourOhFour;
