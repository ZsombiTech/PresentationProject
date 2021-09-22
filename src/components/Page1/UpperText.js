import React from "react";
import "../Styling/UpperText.css";

function UpperText(props) {
  const elemet = <div className="text-small-box">{props.text}</div>;
  const elemet2 = <div className="second-chance">{props.text}</div>;
  if (props.szovegtrue) {
    return elemet;
  } else {
    return elemet2;
  }
}

export default UpperText;
