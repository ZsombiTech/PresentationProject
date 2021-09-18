import React, { useState } from "react";
import "./Box.css";

function Box() {
  const [xertek, setXertek] = useState();
  const [yertek, setYertek] = useState();
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
    console.log(xertek, yertek);
    const item2 = {
      main: circle,
      xkoord: xertek,
      ykoord: yertek,
    };
  };

  return (
    <div className="small-box" onClick={kattintas}>
      <div className="text-small-box">MARK THE COURIES with a CLICK</div>
      <div className="drawing-area">
        {/*itemek.map((item) => {
          const mystyle = {
            top: item.ykoord,
            left: item.xkoord,
          };
          <div style={mystyle}>{item.main}</div>;
        })*/}
      </div>
      <div className="button-done">
        <p>DONE</p>
      </div>
    </div>
  );
}

export default Box;
