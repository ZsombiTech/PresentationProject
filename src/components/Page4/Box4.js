import React from "react";
import "../Styling/Box.css";
import ButtonDone4 from "./ButtonDone4";
import Mas4 from "./Mas4";

function Box4() {
  const szoveg = "Results";

  return (
    <React.Fragment>
      <div className="small-box">
        <Mas4 text={szoveg} />
        <div className="drawing-area"></div>
      </div>

      <ButtonDone4 />
    </React.Fragment>
  );
}

export default Box4;
