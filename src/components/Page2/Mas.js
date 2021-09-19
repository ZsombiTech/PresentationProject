import React from "react";
import "./Mas.css";

function UpperText2(props) {
  const elemet = <div className="kicsi-text">{props.text}</div>;
  const elemet2 = <div className="masodik-esely">{props.text}</div>;
  if (props.szovegtrue) {
    return elemet;
  } else {
    return elemet2;
  }
}

export default UpperText2;
