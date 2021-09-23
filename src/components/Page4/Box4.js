import React from "react";
import "../Styling/Box.css";
import Mas4 from "./Mas4";

function Box4(props) {
  const szoveg = "Results";
  const szovegek = JSON.stringify(props.results, null, 2);
  const szovegek2 = JSON.stringify(props.results2, null, 2);
  const szovegek3 = JSON.stringify(props.results3, null, 2);
  return (
    <React.Fragment>
      <div className="small-box">
        <Mas4 text={szoveg} />
        <div className="drawing-area">
          <div className="data-ouput">
            <p className="kiirasok egy">{szovegek}</p>
            <p className="kiirasok">{szovegek2}</p>
            <p className="kiirasok ketto">{szovegek3}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Box4;
