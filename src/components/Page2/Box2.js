import React, { useState } from "react";
import "./Box2.css";
import ButtonDone2 from "./ButtonDone2";
import Mas from "./Mas";

function Box2() {
  const [xertek, setXertek] = useState(2000);
  const [yertek, setYertek] = useState(5000);
  const [itemek, setItemek] = useState([]);
  const [szamozas, setSzamozas] = useState(0);
  const [szoveg, setSzoveg] = useState("MARK THE “FROM” POINTS with a CLICK");
  const [szovegTrue, setSzovegTrue] = useState(true);

  const kattintas = (event) => {
    event.preventDefault();
    setSzoveg("PRESS DONE");
    setSzovegTrue(false);
    setSzamozas((old) => old + 1);
    setYertek(event.clientY);
    setXertek(event.clientX);
    const item2 = {
      xkoord: xertek,
      ykoord: yertek,
      szamozas: szamozas,
    };
    setItemek((oldArray) => [...oldArray, item2]);
    console.log(itemek);
  };

  return (
    <React.Fragment>
      <div className="small-box">
        <Mas text={szoveg} szovegtrue={szovegTrue} />
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
      <ButtonDone2 />
    </React.Fragment>
  );
}

export default Box2;
