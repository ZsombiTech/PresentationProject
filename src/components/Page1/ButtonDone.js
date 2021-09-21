import React from "react";
import "./ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone() {
  const done1 = () => {
    console.log("tovabbmentel");
  };

  return (
    <Link
      to="/second"
      style={{ textDecoration: "none" }}
      className="button-done"
      onClick={done1}
    >
      DONE
    </Link>
  );
}

export default ButtonDone;
