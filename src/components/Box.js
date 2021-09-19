import React, { useState, useEffect } from "react";
import "./Box.css";
import ButtonDone from "./ButtonDone";
import UpperText from "./UpperText";

function Box() {
  const [xertek, setXertek] = useState(1200);
  const [yertek, setYertek] = useState(500);
  const [itemek, setItemek] = useState([]);
  const [szamozas, setSzamozas] = useState(1);

  const circle = (
    <div className="dots">
      <div className="circle"></div>
      <div className="circle-text">P {szamozas}</div>
    </div>
  );

  const kattintas = (event) => {
    if (event.clientY > 25) {
      setSzamozas((old) => old + 1);
      setYertek(event.clientY);
      setXertek(event.clientX);
      const item2 = {
        xkoord: xertek,
        ykoord: yertek,
        szamozas: szamozas,
        main: circle,
      };
      setItemek((oldArray) => [...oldArray, item2]);
      console.log(itemek);
    }
  };

  return (
    <React.Fragment>
      <div className="small-box">
        <UpperText />
        <div className="drawing-area" onClick={kattintas}>
          {/*itemek.map((item) => {
            const mystyle = {
              top: item.ykoord + "px",
              left: item.xkoord + "px",
            };
            <div style={mystyle}>{item.main}</div>;
          })*/}
          {
            <div
              className="dots"
              style={{ top: yertek + "px", left: xertek + "px" }}
            >
              <div className="circle"></div>
              <div className="circle-text">P{szamozas}</div>
            </div>
          }
        </div>
      </div>
      <ButtonDone />
    </React.Fragment>
  );
}

export default Box;
