import React from "react";
import "../Styling/ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone4() {
  return (
    <Link
      to="/fourth"
      style={{ textDecoration: "none" }}
      className="button-done"
    >
      DONE
    </Link>
  );
}

export default ButtonDone4;
