import React from "react";
import "../Styling/Boxes.css";
import Box from "./Box";

function Boxes(props) {
  return (
    <div className="whitebox">
      <Box itemek={props.itemek} setItemek={props.setItemek} />
    </div>
  );
}

export default Boxes;
