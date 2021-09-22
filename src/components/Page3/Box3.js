import React, { useState } from "react";
import "../Styling/Box.css";
import ButtonDone3 from "./ButtonDone3";
import Mas3 from "./Mas3";

let szamozas = 1;

function Box3(props) {
  const [szoveg, setSzoveg] = useState("MARK THE “TO” POINTS with a CLICK");
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
    props.setItemek3((oldArray) => [...oldArray, item2]);
    szamozas++;
  };

  return (
    <React.Fragment>
      <div className="small-box">
        <Mas3 text={szoveg} szovegtrue={szovegTrue} />
        <div className="drawing-area" onClick={kattintas}>
          {props.itemek1.map((item) => (
            /*const mystyle = {
              top: item.ykoord + "px",
              left: item.xkoord + "px",
            };*/
            <div
              className="dots"
              style={{ top: item.ykoord + "px", left: item.xkoord + "px" }}
              key={item.szamozas}
            >
              <div
                className="circle"
                style={{ backgroundColor: "black" }}
              ></div>
              <div className="circle-text" style={{ color: "black" }}>
                A{item.szamozas}
              </div>
            </div>
          ))}
          {props.itemek2.map((item) => (
            /*const mystyle = {
              top: item.ykoord + "px",
              left: item.xkoord + "px",
            };*/
            <div
              className="dots"
              style={{ top: item.ykoord + "px", left: item.xkoord + "px" }}
              key={item.szamozas}
            >
              <div className="circle" style={{ backgroundColor: "red" }}></div>
              <div className="circle-text" style={{ color: "red" }}>
                A{item.szamozas}
              </div>
            </div>
          ))}
          {props.itemek3.map((item) => (
            /*const mystyle = {
              top: item.ykoord + "px",
              left: item.xkoord + "px",
            };*/
            <div
              className="dots"
              style={{ top: item.ykoord + "px", left: item.xkoord + "px" }}
              key={item.szamozas}
            >
              <div className="circle" style={{ backgroundColor: "blue" }}></div>
              <div className="circle-text" style={{ color: "blue" }}>
                A{item.szamozas}
              </div>
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
      <ButtonDone3 />
    </React.Fragment>
  );
}

export default Box3;
