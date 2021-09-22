import React from "react";
import "../Styling/ButtonDone.css";
import { Link } from "react-router-dom";

function ButtonDone2() {
  return (
    <Link
      to="/third"
      style={{ textDecoration: "none" }}
      className="button-done"
    >
      DONE
    </Link>
  );
}

export default ButtonDone2;
