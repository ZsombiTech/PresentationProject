import React from "react";
import "../Styling/Boxes.css";
import Box4 from "./Box4";

function Boxes4(props) {
  return (
    <div className="whitebox">
      <Box4
        results={props.results}
        results2={props.results2}
        results3={props.results3}
      />
    </div>
  );
}

export default Boxes4;
