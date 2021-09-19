import React, { useState } from "react";
import "./Box.css";

function Box() {
  const [xertek, setXertek] = useState(10);
  const [yertek, setYertek] = useState(10);
  const [itemek, setItemek] = useState([]);

  const circle = (
    <div className="dots" style={{ top: yertek + "px", left: xertek + "px" }}>
      <div className="circle"></div>
      <div className="circle-text">P1</div>
    </div>
  );

  const kattintas = (event) => {
    setYertek(event.clientY);
    setXertek(event.clientX);
    const item2 = {
      xkoord: xertek,
      ykoord: yertek,
    };
    setItemek((oldArray) => [...oldArray, item2]);
    console.log(itemek);
  };

  const done1 = () => {
    console.log("tovabbmentel");
  };

  return (
    <div className="small-box" onClick={kattintas}>
      <div className="text-small-box">MARK THE COURIES with a CLICK</div>
      <div className="drawing-area">
        {/*itemek.map((item) => {
          const mystyle = {
            top: item.ykoord + "px",
            left: item.xkoord + "px",
          };
          <div className="dots" style={mystyle}>
            <div className="circle"></div>
            <div className="circle-text">P1</div>
          </div>;
        })*/}
        {/*<div
          className="dots"
          style={{ top: yertek + "px", left: xertek + "px" }}
        >
          <div className="circle"></div>
          <div className="circle-text">P1</div>
        </div> ez mukodik */}
      </div>
      <div className="button-done" onClick={done1}>
        <p>DONE</p>
      </div>
    </div>
  );
}

export default Box;
