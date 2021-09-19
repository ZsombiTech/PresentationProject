import React from "react";
import "./ButtonDone.css";

function ButtonDone() {
  const done1 = () => {
    console.log("tovabbmentel");
  };

  return (
    <div className="button-done" onClick={done1}>
      <p>DONE</p>
    </div>
  );
}

export default ButtonDone;
