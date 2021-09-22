import React from "react";
import "../Styling/Boxes.css";
import Box2 from "./Box2";

function Boxes2(props) {
  return (
    <div className="whitebox">
      <Box2 itemek1={props.itemek1} />
    </div>
  );
}

export default Boxes2;
