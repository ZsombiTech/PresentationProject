import React from "react";
import "../Styling/ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone() {
  return (
    <Link
      to="/second"
      style={{ textDecoration: "none" }}
      className="button-done"
    >
      DONE
    </Link>
  );
}

export default ButtonDone;
