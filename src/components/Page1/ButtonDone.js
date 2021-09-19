import React from "react";
import "./ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone() {
  const done1 = () => {
    console.log("tovabbmentel");
  };

  return (
    <div className="button-done" onClick={done1}>
      <p>
        <Link to="/second" style={{ textDecoration: "none" }}>
          DONE
        </Link>
      </p>
    </div>
  );
}

export default ButtonDone;
