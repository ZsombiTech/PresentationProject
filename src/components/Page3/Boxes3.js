import React from "react";
import "../Styling/Boxes.css";
import Box3 from "./Box3";

function Boxes3(props) {
  return (
    <div className="whitebox">
      <Box3
        itemek1={props.itemek1}
        itemek2={props.itemek2}
        itemek3={props.itemek3}
        setItemek3={props.setItemek3}
      />
    </div>
  );
}

export default Boxes3;
