import * as React from "react";
import "./backdrop.css";

const backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export default backdrop;
