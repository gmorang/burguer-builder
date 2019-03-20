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
        <p>
          Current Price: <strong>${this.props.price.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            added={() => this.props.ingredientAdded(ctrl.type)}
            removed={() => this.props.ingredientRemoved(ctrl.type)}
            disabled={this.props.disabled[ctrl.type]}
          />
        ))}
        <button
          disabled={!this.props.purchasable}
          className="order-button"
          onClick={this.props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}

export default BuildControls;
