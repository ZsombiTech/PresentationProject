import React, { useState } from "react";
import "./Box.css";
import ButtonDone from "./ButtonDone";
import UpperText from "./UpperText";

let szamozas = 1;

function Box() {
  const [itemek, setItemek] = useState([]);
  const [szoveg, setSzoveg] = useState("MARK THE COURIES with a CLICK");
  const [szovegTrue, setSzovegTrue] = useState(true);

  const kattintas = (event) => {
    event.preventDefault();
    setSzoveg("PRESS DONE");
    setSzovegTrue(false);
    const item2 = {
      xkoord: event.clientX,
      ykoord: event.clientY,
      szamozas: szamozas,
    };
    setItemek((oldArray) => [...oldArray, item2]);
    szamozas++;
  };

  return (
    <React.Fragment>
      <div className="small-box">
        <UpperText text={szoveg} szovegtrue={szovegTrue} />
        <div className="drawing-area" onClick={kattintas}>
          {itemek.map((item) => (
            /*const mystyle = {
              top: item.ykoord + "px",
              left: item.xkoord + "px",
            };*/
            <div
              className="dots"
              style={{ top: item.ykoord + "px", left: item.xkoord + "px" }}
              key={item.szamozas}
            >
              <div className="circle"></div>
              <div className="circle-text">P{item.szamozas}</div>
            </div>
          ))}
          {/*
            <div
              className="dots"
              style={{ top: yertek + "px", left: xertek + "px" }}
            >
              <div className="circle"></div>
              <div className="circle-text">P{szamozas}</div>
            </div>
          */}
        </div>
      </div>
      <ButtonDone />
    </React.Fragment>
  );
}

export default Box;
