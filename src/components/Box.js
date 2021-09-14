import React from "react";
import "./Box.css";

function Box() {
  return (
    <div>
      <div className="all-boxes">
        <div className="box-first">
          <p className="box-first-text">Ide kell irni</p>
          <div className="box-first-item"></div>
        </div>
        <div className="box-second">
          <p className="box-second-text">Ide jon a cucc</p>
          <div className="box-second-item"></div>
        </div>
      </div>
    </div>
  );
}

export default Box;
