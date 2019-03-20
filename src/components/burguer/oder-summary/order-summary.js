import * as React from "react";

import Button from "../../UI/button/button";
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
        <Button btnType="success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
        <Button btnType="danger" clicked={this.props.puchaseCancelled}>
          CANCEL
        </Button>
      </div>
    );
  }
}

export default OrderSummary;
