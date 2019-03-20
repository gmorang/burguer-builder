import * as React from "react";

import "./build-controls.css";
import BuildControl from "./build-control/build-control";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

class BuildControls extends React.Component {
  render() {
    return (
      <div className="build-controls">
        {controls.map(ctrl => (
          <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
      </div>
    );
  }
}

export default BuildControls;
