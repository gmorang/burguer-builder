import * as React from "react";

class OrderSummary extends React.Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div>
        <h3>Your Order</h3>
        <p>A delicious burguer with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
      </div>
    );
  }
}

export default OrderSummary;
