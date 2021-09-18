import React from "react";
import "./Box.css";

const number = 1;

const circle = (
  <div className="dots">
    <div className="circle"></div>
    <div className="circle-text">P{number}</div>
  </div>
);

function Box() {
  return (
    <div className="small-box">
      <div className="text-small-box">MARK THE COURIES with a CLICK</div>
      <div className="drawing-area"></div>
      <div className="button-done">
        <p>DONE</p>
      </div>
    </div>
  );
}

export default Box;
