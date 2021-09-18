import React, { useState } from "react";
import "./Box.css";

function Box() {
  const [xertek, setXertek] = useState();
  const [yertek, setYertek] = useState();

  const number = 1;

  const circle = (
    <div className="dots">
      <div className="circle"></div>
      <div className="circle-text">P{number}</div>
    </div>
  );

  const kattintas = (event) => {
    if (328 > event.clientY > 76) {
      setYertek(event.clientY);
      setXertek(event.clientX);
    }
  };
  const letenni = () => {};

  return (
    <div className="small-box" onClick={kattintas}>
      <div className="text-small-box">MARK THE COURIES with a CLICK</div>
      <div className="drawing-area"></div>
      <div className="button-done">
        <p>DONE</p>
      </div>
    </div>
  );
}

export default Box;
